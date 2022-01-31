import * as path from "https://deno.land/std/path/mod.ts";

const nodePath = `${path.dirname(import.meta.url)}/template/node`;
const _denoPath = `${path.dirname(import.meta.url)}/template/deno`;


const nodeArray: arrayInterface[] = [{
  Typescript: [
    `${nodePath}/Typescript/index.ts`,
    `${nodePath}/Typescript/package.json`,
    `${nodePath}/Typescript/.eslintrc.json`,
    `${nodePath}/Typescript/.prettierrc`,
  ],
  Javascript: [
    `${nodePath}/Javascript/index.js`,
    `${nodePath}/Javascript/package.json`,
    `${nodePath}/Javascript/.prettierrc`,
    `${nodePath}/Javascript/.eslintrc.json`]
}]


const denoArray: arrayInterface[] = [{
  Typescript: [`${_denoPath}/Typescript/bot.ts`],
  Javascript: [`${_denoPath}/Typescript/bot.js`]
}]


export interface arrayInterface {
  Typescript: string[] | URL[],
  Javascript: string[] | URL[]
}


export { nodeArray, denoArray }