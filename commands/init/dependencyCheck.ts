//class for checking if all the required dependencies are present on the user system!!!
class dependencyCheck {
    //private member to ensure it's not used outside of this class
    private runtime: string;

    constructor(runtime: string) {
        this.runtime = runtime;
    }
    // checkDependencies method 
    async checkDependencies() {
        const dependencyCheckArray: string[] = [];
        if (this.runtime === "deno") {
            //checking if deno is installed on users machine 
            dependencyCheckArray.push("deno", "--version");
        }
        if (this.runtime === "node") {
            //checking if node & npm are installed on users machine
            dependencyCheckArray.push("node", "-v", "&&", "npm", "-v")
        }
        const p = Deno.run({
            cmd: dependencyCheckArray,
            stdin: "piped",
            stdout: "piped",
            stderr: "piped",
        });
        const { code } = await p.status();
        // piping the output to not directly print it to the console
        const _rawOutput = await p.output();
        const _rawError = await p.stderrOutput();

        if (code === 0) {
            //returning true if the process is succesfull else false 
            return true;
        } else {
            return false;
        }
    }

}


export default dependencyCheck;

