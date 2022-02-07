import { prompt, Select, Input } from "https://deno.land/x/cliffy/prompt/mod.ts";


const customPrompt = async () => {
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
const choicePrompt = async () => {
    const result = await prompt([
        {
            name: "choice",
            message: "How do you want to setup the project",
            type: Select,
            options: ["Default", "Custom"],
        },
    ]);
    return result;
}

const defaultPrompt = async () => {
    const result = await prompt([{
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
    }]);
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
export { customPrompt, choicePrompt, defaultPrompt, checkDirectoryexist };

