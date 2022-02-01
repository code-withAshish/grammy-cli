import { scaffold } from "https://deno.land/x/skaffe@v1.0.0/mod.ts";
import { red, bold } from "https://deno.land/std/fmt/colors.ts";
import { join } from "https://deno.land/std/path/mod.ts";
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
    async generateFiles() {
        if (this.runtime === "deno")
            return await this.denoGenerate();
        if (this.runtime === "node")
            return await this.nodeGenerate();
    }

    private async denoGenerate() {
        try {
            const destinationPath = join(Deno.cwd(), this.dirname)
            await Deno.mkdir(destinationPath);
            Promise.all(
                denoArray.map((x) => {
                    if (this.language === "Typescript") {
                        x.Typescript.map(async (y) => {
                            await scaffold(y.filePath, join(destinationPath, y.fileName));
                        })
                    }
                    if (this.language === "Javascript") {
                        x.Javascript.map(async (y) => {
                            await scaffold(y.filePath, join(destinationPath, y.fileName));
                        })
                    }
                })
            )
            return true
        }
        catch (e) {
            console.log(red(bold(`Encounter an unexpected error ${e}\n`)));
            return false;
        }
    }
    private async nodeGenerate() {
        try {
            const destinationPath = join(Deno.cwd(), this.dirname)
            await Deno.mkdir(destinationPath);
            Promise.all(
                nodeArray.map((x) => {
                    if (this.language === "Typescript") {
                        x.Typescript.map(async (y) => {
                            await scaffold(y.filePath, join(destinationPath, y.fileName));
                        })
                    }
                    if (this.language === "Javascript") {
                        x.Javascript.map(async (y) => {
                            await scaffold(y.filePath, join(destinationPath, y.fileName));
                        })
                    }
                })
            )
            return true
        } catch (e) {
            console.log(red(bold(`Encounter an unexpected error ${e}\n`)));
            return false;
        }
    }

}

export default fileGenerator;
