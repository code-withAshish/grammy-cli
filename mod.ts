import { Command } from "https://deno.land/x/cliffy/mod.ts";
import initPrompt from "./prompt.ts";

await new Command()
  .command(
    "init",
    "initiate a new project",
  )
  .action(async (_opts) => {
    const res = await initPrompt();
    console.log(res);
  })
  .parse(Deno.args);

