import { prompt, Select, Input } from "https://deno.land/x/cliffy/prompt/mod.ts";

const initPrompt = async () => {
    const result = await prompt([{
        name: "dirname",
        message: "What is the name of the project ",
        type: Input,
    }, {
        name: "language",
        message: "What language do you want to use",
        type: Select,
        options: ["TypeScript", "JavaScript"],
    }]);

    return result;
}

export default initPrompt;

