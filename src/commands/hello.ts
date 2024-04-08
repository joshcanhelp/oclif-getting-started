import { Args, Command, Flags } from "@oclif/core";

export default class Hello extends Command {
  static override args = {
    arg1: Args.string({
      description: "First argument",
    }),
  };

  static override flags = {
    flag: Flags.boolean({
      description: "First flag",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Hello);
    this.log("Hello from oclif!");
    this.log("flag: %s", flags.flag ? "yes" : "no");
    this.log("arg1: %s", args.arg1);
  }
}
