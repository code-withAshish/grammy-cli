import { prompt, Select, Input } from "https://deno.land/x/cliffy/prompt/mod.ts";
import dependencyCheck from "./dependencyCheck.ts"
const initPrompt = async () => {
    const result = await prompt([
        {
            name: "dirname",
            message: "What is the name of the project ",
            type: Input,
            validate: async (dirname) => {
                // async function to check if directory exists
                if (dirname === "") {
                    return "Directory name cannot be empty";
                }
                if (await checkDirectoryexist(dirname)) {
                    return "Directory already exists";
                }
                return true;
            },
        },
        {
            name: "runtime",
            message: "What runtime do you want to use",
            type: Select,
            options: ["deno", "node"],
            validate: async (runtime) => {
                const check = new dependencyCheck(runtime);
                const checkStatus = await check.checkDependencies()
                if (!checkStatus)
                    return `${runtime} was not found on the system`
                return true
            }
        },
        {
            name: "language",
            message: "What language do you want to use",
            type: Select,
            options: ["Typescript", "Javascript"],
        },
    ]);
    return result;
}
// asynchronous function to check if directory exists
const checkDirectoryexist = async (dirname: string) => {
    try {
        await Deno.stat(dirname);
        return true;
    }
    catch (_e) {
        return false;
    }
};
export default initPrompt;

