import { scaffold } from "https://deno.land/x/skaffe@v1.0.0/mod.ts";
import { red, bold } from "https://deno.land/std/fmt/colors.ts";
import { nodeArray, denoArray } from "./pathArray.ts"

class fileGenerator {
    private dirname: string;
    private language: string;
    private runtime: string;

    constructor(dirname: string, language: string, runtime: string) {
        this.dirname = dirname;
        this.language = language;
        this.runtime = runtime;
    }
    generateFiles() {
        if (this.runtime === "deno")
            return this.denoGenerate();
        if (this.runtime === "node")
            return this.nodeGenerate();
    }

    private denoGenerate(): boolean {
        try {
            denoArray.map((x) => {
                if (this.language === "Typescript") {
                    x.Typescript.forEach(async (filePath) => {
                        const destinationPath = `${Deno.cwd()}/${this.dirname}`
                        await scaffold(filePath, destinationPath);
                    })
                }
                if (this.language === "Javascript") {
                    x.Javascript.forEach(async (filePath) => {
                        const destinationPath = `${Deno.cwd()}/${this.dirname}`
                        await scaffold(filePath, destinationPath);
                    })
                }
            })
            return true
        }
        catch (e) {
            console.log(red(bold(`Encounter an unexpected error ${e}\n`)));
            return false;
        }
    }
    private nodeGenerate(): boolean {
        try {
            nodeArray.map((x) => {
                if (this.language === "Typescript") {
                    x.Typescript.forEach(async (filePath) => {
                        const destinationPath = `${Deno.cwd()}/${this.dirname}`
                        await scaffold(filePath, destinationPath);
                    })
                }
                if (this.language === "Javascript") {

                    x.Javascript.forEach(async (filePath) => {
                        const destinationPath = `${Deno.cwd()}/${this.dirname}`
                        await scaffold(filePath, destinationPath);
                    })
                }
            })
            return true
        } catch (e) {
            console.log(red(bold(`Encounter an unexpected error ${e}\n`)));
            return false;
        }
    }

}

export default fileGenerator;
