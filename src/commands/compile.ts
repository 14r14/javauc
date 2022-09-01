import { Command } from "@oclif/core";
import { watch } from "chokidar";
import { exec } from "child_process";
import { readdirSync } from "fs";
import path = require("path");
import picocolors = require("picocolors");

export default class Compile extends Command {
  static description = "automatically compiles java files at given path";

  static examples = ["javauc compile \"C:/Users/test-user/Documents/java-folder\""];

  static args = [{ name: "folder" }];

  public async run(): Promise<void> {
    const { args } = await this.parse(Compile);

    const toCompile: any = [];
    readdirSync(args.folder)
      .filter((file) => {
        if (file.endsWith(".java")) {
          return file;
        }
      })
      .forEach((file) => {
        toCompile.push(file);
      });
    const allCompilePaths: any[] = [];
    toCompile.forEach((fileName: string) => {
      allCompilePaths.push(`"${path.join(args.folder, fileName)}"`);
    });
    const compilePath = allCompilePaths.join(" ");
    exec(`javac ${compilePath}`, (error, stdout, stderr) => {
      if (error) console.log(error);
      if (stderr) console.log(stderr);
      this.log(`${picocolors.green('[Successfully compiled]')}`);
    });

    const watcher = watch(path.join(args.folder, "**", "*" + ".java"), {
      persistent: true,
    });
    this.log("Watching for changes in " + picocolors.bold(args.folder));
    watcher.on("change", (pathName) => {
      this.log(picocolors.yellow("Detected a change, compiling..."));
      const toCompile: any = [];
      readdirSync(args.folder)
        .filter((file) => {
          const fullFilePath = path.join(args.folder, file);
          if (file.endsWith(".java") && fullFilePath === pathName) {
            return file;
          }
        })
        .forEach((file) => {
          toCompile.push(file);
        });
      const allCompilePaths: any[] = [];
      toCompile.forEach((fileName: string) => {
        allCompilePaths.push(`"${path.join(args.folder, fileName)}"`);
      });
      const compilePath = allCompilePaths.join(" ");
      exec(`javac ${compilePath}`, (error, stdout, stderr) => {
        if (error) console.log(error);
        if (stderr) console.log(stderr);
        this.log(`${picocolors.green('[Successfully compiled]')}`);
      });
    });
    watcher.on("add", (pathName) => {
      const toCompile: any = [];
      readdirSync(args.folder)
        .filter((file) => {
          const fullFilePath = path.join(args.folder, file);
          if (file.endsWith(".java") && fullFilePath === pathName) {
            return file;
          }
        })
        .forEach((file) => {
          toCompile.push(file);
        });
      const allCompilePaths: any[] = [];
      toCompile.forEach((fileName: string) => {
        allCompilePaths.push(`"${path.join(args.folder, fileName)}"`);
      });
      const compilePath = allCompilePaths.join(" ");

      exec(`javac ${compilePath}`, (error, stdout, stderr) => {
        if (error) console.log(error);
        if (stderr) console.log(stderr);
        this.log(`${picocolors.green('[Successfully compiled]')}`);
      });
    });
    watcher.on("remove", (pathName) => {
      const toCompile: any = [];
      readdirSync(args.folder)
        .filter((file) => {
          const fullFilePath = path.join(args.folder, file);
          if (file.endsWith(".java") && fullFilePath === pathName) {
            return file;
          }
        })
        .forEach((file) => {
          toCompile.push(file);
        });
      const allCompilePaths: any[] = [];
      toCompile.forEach((fileName: string) => {
        allCompilePaths.push(`"${path.join(args.folder, fileName)}"`);
      });
      const compilePath = allCompilePaths.join(" ");

      exec(`javac ${compilePath}`, (error, stdout, stderr) => {
        if (error) console.log(error);
        if (stderr) console.log(stderr);
        this.log(`${picocolors.green('[Successfully compiled]')}`);
      });
    });
  }
}
