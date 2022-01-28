import { Command } from "https://deno.land/x/cliffy/mod.ts";
import initPrompt from "./commands/init/initPrompt.ts";
import testFile from "./commands/init/fileGenerator.ts"
import Spinner from 'https://deno.land/x/cli_spinners@v0.0.2/mod.ts';


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
    const fg = new testFile(res.dirname!, res.language!, res.runtime!);
    const _status = await fg.generateFiles();
    showLoader();
  }).parse(Deno.args);

