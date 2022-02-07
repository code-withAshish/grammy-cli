import { scaffold } from "https://deno.land/x/skaffe@v1.0.0/mod.ts";
import { red, bold } from "https://deno.land/std/fmt/colors.ts";
import { join } from "https://deno.land/std/path/mod.ts";
import { nodeArray, denoArray, arrayInterface } from "./pathArray.ts"

class fileGenerator {
    private dirname: string;
    private language: string | null;
    private runtime: string | null;

    constructor(dirname: string, language: string | null, runtime: string | null) {
        this.dirname = dirname;
        this.language = language;
        this.runtime = runtime;
    }
    generateDefaultFiles(): boolean {
        if (this.language === null && this.runtime === null) {
            console.log("creating files with default options");
        }
        return true;
    }
    async generateCustomFiles() {
        try {
            let array: arrayInterface[] | null = null;

            if (this.runtime === "deno")
                array = denoArray;
            else
                array = nodeArray;

            const destinationPath = join(Deno.cwd(), this.dirname);
            await Deno.mkdir(destinationPath);
            Promise.all(
                array.map((x) => {
                    if (this.language === 'Typescript') {
                        x.Typescript.map(async (y) => {
                            await scaffold(y.filePath, join(destinationPath, y.fileName));
                        });
                    }
                    if (this.language === 'Javascript') {
                        x.Javascript.map(async (y) => {
                            await scaffold(y.filePath, join(destinationPath, y.fileName));
                        });
                    }
                })
            );
            return true;
        } catch (e) {
            console.log(red(bold(`Encountered an unexpected error ${e}\n`)));
            return false;
        }
    }



}

export default fileGenerator;
