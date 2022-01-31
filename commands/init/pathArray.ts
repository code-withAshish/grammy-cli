import * as path from "https://deno.land/std/path/mod.ts";

const nodePath = `${path.dirname(import.meta.url)}/template/node`;
const _denoPath = `${path.dirname(import.meta.url)}/template/deno`;


const nodeArray: arrayInterface[] = [{
  Typescript: [{ fileName: "index.js", filePath: `${nodePath}/Typescript/index.js` },
  { fileName: "package.json", filePath: `${nodePath}/Typescript/package.json` },
  { fileName: ".prettierrc", filePath: `${nodePath}/Typescript/.prettierrc` },
  { fileName: ".eslintrc.json", filePath: `${nodePath}/Typescript/.eslintrc.json` },
  ],
  Javascript: [{ fileName: "index.ts", filePath: `${nodePath}/Javascript/index.js` },
  { fileName: "package.json", filePath: `${nodePath}/Javascript/package.json` },
  { fileName: ".prettierrc", filePath: `${nodePath}/Javascript/.prettierrc` },
  { fileName: ".eslintrc.json", filePath: `${nodePath}/Javascript/.eslintrc.json` },
  ],
}]


const denoArray: arrayInterface[] = [{
  Typescript: [{ fileName: "bot.ts", filePath: `${_denoPath}/Typescript/bot.ts` }],
  Javascript: [{ fileName: "bot.js", filePath: `${_denoPath}/Typescript/bot.js` }]
}]


export interface arrayInterface {
  Typescript: Array<{ fileName: string | URL, filePath: string | URL }>
  Javascript: Array<{ fileName: string | URL, filePath: string | URL }>
}


export { nodeArray, denoArray }