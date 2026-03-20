// @ts-nocheck
import fs from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createMemoryRouter, RouterProvider } from "react-router";

import { Root } from "../src/app/components/Root";
import { HomePage } from "../src/app/components/HomePage";

function rewriteImagetoolsUrls(
  html: string,
  builtImageFilesInRenderOrder: string[],
) {
  // vite-imagetools in dev/SSR mode can emit src="/@imagetools/..." or absolute URLs to the same path.
  let i = 0;
  return html.replace(/src="[^"]*@imagetools[^"]*"/g, (match) => {
    const file = builtImageFilesInRenderOrder[i++];
    if (!file) {
      return match;
    }
    return `src="/assets/${file}"`;
  });
}

async function main() {
  const distIndexPath = path.resolve(process.cwd(), "dist", "index.html");
  const distAssetsDir = path.resolve(process.cwd(), "dist", "assets");
  const distIndexHtml = await fs.readFile(distIndexPath, "utf-8");

  const assets = await fs.readdir(distAssetsDir);
  const logoBuiltFile = assets.find(
    (name) => name.startsWith("logo") && name.endsWith(".webp"),
  );
  const keyVisualBuiltFile = assets.find(
    (name) => name.startsWith("key-visual") && name.endsWith(".webp"),
  );
  const workSpaceBuiltFiles = assets
    .filter(
      (name) => name.startsWith("work-space-") && name.endsWith(".webp"),
    )
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const businessBuiltFilesInOrder = [
    "web-programmer",
    "web-design-engineer",
    "pc-operator",
    "website-development-operation-support",
    "multi-creative-designer",
  ].map((prefix) => {
    const file = assets.find(
      (name) => name.startsWith(prefix) && name.endsWith(".webp"),
    );
    if (!file) {
      throw new Error(
        `Expected business image asset in dist/assets: ${prefix}*.webp`,
      );
    }
    return file;
  });

  if (
    !logoBuiltFile ||
    !keyVisualBuiltFile ||
    workSpaceBuiltFiles.length < 5 ||
    businessBuiltFilesInOrder.length < 5
  ) {
    throw new Error(
      "Expected logo/key-visual/work-space/business image assets in dist/assets after vite build.",
    );
  }
  const builtImageFilesInRenderOrder = [
    logoBuiltFile,
    keyVisualBuiltFile,
    ...workSpaceBuiltFiles,
    ...workSpaceBuiltFiles,
    ...businessBuiltFilesInOrder,
  ];

  // Prerender only "/" to speed up the initial load.
  const router = createMemoryRouter(
    [
      {
        path: "/",
        Component: Root,
        children: [{ index: true, Component: HomePage }],
      },
    ],
    { initialEntries: ["/"] },
  );

  let prerendered = renderToString(<RouterProvider router={router} />);

  prerendered = rewriteImagetoolsUrls(
    prerendered,
    builtImageFilesInRenderOrder,
  );

  // Vite SPA template has an empty root container. Replace it with prerendered HTML.
  const nextHtml = distIndexHtml.replace(
    /<div id="root">\s*<\/div>/,
    `<div id="root">${prerendered}</div>`,
  );

  if (nextHtml === distIndexHtml) {
    throw new Error(
      "Failed to find the empty <div id=\"root\"></div> in dist/index.html.",
    );
  }

  await fs.writeFile(distIndexPath, nextHtml, "utf-8");
  // eslint-disable-next-line no-console
  console.log("Prerendered / and updated dist/index.html");
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});
