import Spinner from 'https://deno.land/x/cli_spinners@v0.0.2/mod.ts';
import figlet from 'https://x.nest.land/deno-figlet@0.0.5/mod.js'
import { rgb24, bold, underline, italic, brightCyan, gray, cyan, magenta } from "https://deno.land/std/fmt/colors.ts";


const showLoader = (status: boolean) => {
    const spinner = Spinner.getInstance();
    spinner.start("Initiating project");
    if (status) {
        spinner.succeed("Project created successfully");
        spinner.stop();
    }
    if (!status) {
        spinner.fail("Task failed, exiting")
        spinner.stop();
    }
}

const defaultScreen = async () => {
    const text = await figlet("grammY");
    const welcomeText = '\n\t\tWelcome to grammy CLI!!!\n'
    console.log(rgb24(text, { r: 38, g: 162, b: 205 }));
    console.log(italic(underline(rgb24(welcomeText, { r: 38, g: 162, b: 205 }))));
}

const instructionScreen = (dirname: string) => {
    const installInstructions = brightCyan("\nProject created succesfully!!!\n\n") +
        gray("Please run the following commands to get started with your project 😃 \n\n") +
        bold(cyan(`cd ${dirname}\n\n`)) +
        gray("To install the dependencies of the project run\n\n") +
        bold(cyan("npm install\n\nor\n\nyarn install\n\n")) +
        bold(magenta("After running the above commands open the project in editor of your choice\n\n\t\t\tHappy coding 🎉🧑‍💻"));

    console.log(installInstructions);
}
export { showLoader, defaultScreen, instructionScreen }