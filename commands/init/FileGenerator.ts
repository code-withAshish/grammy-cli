
import * as path from "https://deno.land/std/path/mod.ts";

const nodeFileGenerator = async (dirname: string, language: string) => {
    const isExist = await checkNPMexists();
    if (!isExist) {
        console.log("NPM is not installed");
    } else {
        const sourceFile = `${path.dirname(path.fromFileUrl(import.meta.url))}/template/node/${language}/index${language === "Typescript" ? ".ts" : ".js"}`;

        await Deno.mkdir(`${Deno.cwd()}/${dirname}`);

        await Deno.copyFile(sourceFile, `${Deno.cwd()}/${dirname}/index${language === "Typescript" ? ".ts" : ".js"}`);
    }
}
const denoFileGenerator = async (dirname: string, language: string) => {
    const sourceFile = `${path.dirname(path.fromFileUrl(import.meta.url))}/template/deno/bot.ts`;

    await Deno.mkdir(`${Deno.cwd()}/${dirname}`);

    await Deno.copyFile(sourceFile, `${Deno.cwd()}/${dirname}/bot${language === "Typescript" ? ".ts" : ".js"}`);
}
const checkNPMexists = async () => {
    const p = Deno.run({
        cmd: ["npm", "-v"],
        stdin: "piped",
        stdout: "piped",
        stderr: "piped",
    });
    const { code } = await p.status();
    // piping the output to not directly print it to the console
    const _rawOutput = await p.output();
    const _rawError = await p.stderrOutput();

    if (code === 0) {
        return true;
    } else {
        return false;
    }
}

export { nodeFileGenerator, denoFileGenerator };

