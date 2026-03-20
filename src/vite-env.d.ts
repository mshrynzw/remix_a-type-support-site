/// <reference types="vite/client" />

/** vite-imagetools imports that end with `&as=img` (e.g. `?w=…&format=webp&as=img`) */
declare module "*&as=img" {
  const img: import("vite-imagetools").Img;
  export default img;
}
