import { dirname, join } from "https://deno.land/std/path/mod.ts";

const denoPath = join(dirname(import.meta.url), "template", "deno");
const nodePath = join(dirname(import.meta.url), "template", "node");

const nodeArray: arrayInterface[] = [{
  Typescript: [{ fileName: "index.js", filePath: join(nodePath, "Typescript", "index.ts") },
  { fileName: "prettier.config.js", filePath: join(nodePath, "Typescript", "prettier.config.js") },
  { fileName: "package.json", filePath: join(nodePath, "Typescript", "package.json") },
  ],
  Javascript: [{ fileName: "index.js", filePath: join(nodePath, "Javascript", "index.js") },
  { fileName: "package.json", filePath: join(nodePath, "Javascript", "package.json") },
  { fileName: "prettier.config.js", filePath: join(nodePath, "Javascript", "prettierr.config.js") },
  ],
}]

const denoArray: arrayInterface[] = [{
  Typescript: [{ fileName: "bot.ts", filePath: join(denoPath, "Typescript", "bot.ts") }],
  Javascript: [{ fileName: "bot.js", filePath: join(denoPath, "Javascript", "bot.js") }]
}]

export interface arrayInterface {
  Typescript: Array<{ fileName: string, filePath: string | URL }>
  Javascript: Array<{ fileName: string, filePath: string | URL }>
}


export { nodeArray, denoArray }