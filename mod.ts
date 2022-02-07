import { Command, HelpCommand } from "https://deno.land/x/cliffy/mod.ts";
import { defaultScreen, instructionScreen } from "./src/commands/init/utils.ts"
import { choicePrompt, defaultPrompt, customPrompt } from "./src/commands/init/prompts.ts"
import fileGenerator from "./src/commands/init/fileGenerator.ts"

await new Command()
  //default command action handler
  .action(async function () {
    await defaultScreen();
    this.showHelp();
  })
  //main command 
  .name("grammy")
  .version("1.0.0")
  .description("CLI for the bot framework grammy!!!")

  //global help command

  .command("help", new HelpCommand().global())

  // subcommand init

  .command("init")
  .name("init")
  .description("initiate a new project")
  .alias("i")

  //action handler for init flag

  .option("-y , --y <dirname:string>", "Create project with default options", {
    standalone: true,
    action: (opts: { y: string }) => {
      instructionScreen(opts.y)
    }
  })

  //action handler for init command

  .action(async () => {
    const res = await choicePrompt();
    if (res.choice === "Default") {
      const { dirname } = await defaultPrompt();
      const fg = new fileGenerator(dirname!, null, null).generateDefaultFiles();
      console.log(fg);
      instructionScreen(dirname!)
    } else {
      const { dirname, language, runtime } = await customPrompt();
      const fg = await new fileGenerator(dirname!, language!, runtime!).generateCustomFiles();
      console.log(fg);
      instructionScreen(dirname!)
    }
  })
  .parse(Deno.args);

