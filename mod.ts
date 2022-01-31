import { Command } from "https://deno.land/x/cliffy/mod.ts";
import initPrompt from "./commands/init/initPrompt.ts";
import fileGenerator from "./commands/init/fileGenerator.ts"
import Spinner from 'https://deno.land/x/cli_spinners@v0.0.2/mod.ts';


const showLoader = (status: boolean | undefined) => {
  const spinner = Spinner.getInstance();
  setTimeout(() => {
    if (status) {
      spinner.succeed("Project created successfully");
      spinner.stop();
    }
    if (!status) {
      spinner.fail("Task failed, exiting")
      spinner.stop();
    }
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
    const fg = new fileGenerator(res.dirname!, res.language!, res.runtime!);
    const status = fg.generateFiles();
    showLoader(status);
  }).parse(Deno.args);

