import fs from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createMemoryRouter, RouterProvider } from "react-router";

import { Root } from "../src/app/components/Root";
import { HomePage } from "../src/app/components/HomePage";

async function main() {
  const distIndexPath = path.resolve(process.cwd(), "dist", "index.html");
  const distIndexHtml = await fs.readFile(distIndexPath, "utf-8");

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

  const prerendered = renderToString(<RouterProvider router={router} />);

  // Vite SPA template has an empty root container. Replace it with prerendered HTML.
  const nextHtml = distIndexHtml.replace(
    /<div id="root">\s*<\/div>/,
    `<div id="root">${prerendered}</div>`,
  );

  if (nextHtml === distIndexHtml) {
    throw new Error("Failed to find the empty <div id=\"root\"></div> in dist/index.html.");
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

