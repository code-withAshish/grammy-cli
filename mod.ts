import { Command } from "https://deno.land/x/cliffy/mod.ts";
import initPrompt from "./commands/init/initPrompt.ts";
import Spinner from 'https://deno.land/x/cli_spinners@v0.0.2/mod.ts';
import { nodeFileGenerator, denoFileGenerator } from "./commands/init/FileGenerator.ts"

const showLoader = () => {
  const spinner = Spinner.getInstance();
  setTimeout(() => {
    spinner.succeed("Project created successfully");
    spinner.stop();
  }, 3000);
  spinner.start("Initiating project");
}

await new Command()
  .command(
    "init",
    "initiate a new project",
  )
  .action(async (_opts) => {
    const res = await initPrompt();
    if (res.runtime === "Node.js") {
      // ! operattor is used to tell ts that this value can be undefined
      // but we are assuring it never will be 
      nodeFileGenerator(res.dirname!, res.language!);
      showLoader();
    }
    else if (res.runtime === "Deno") {
      denoFileGenerator(res.dirname!, res.language!);
      showLoader();

    }
  }).parse(Deno.args);

