import { Command, Flags } from "@oclif/core";
import { existsSync, writeFileSync } from "fs";
import path = require("path");
import picocolors = require("picocolors");

interface Flags {
  includeConstructor: boolean;
}

export default class CreateSourceFile extends Command {
  createFile(folder: string, fileName: string, flags: Flags) {
    if (fileName.indexOf(".java") != -1) {
      this.logToStderr(picocolors.red("Please omit the .java extension"));
      this.exit(0);
    }

    if (existsSync(path.join(folder, fileName + ".java"))) {
      this.logToStderr(
        picocolors.red("File already exists. Try changing the name of the file.")
      );
      this.exit(0);
    }

    let fileContent = `
        public class ${fileName} {
        public static void main(String[] args) {
          System.out.println("This is your new java file. Enjoy!! - javauc");
        }
      }
      `;

    if (flags.includeConstructor) {
      this.log(picocolors.bgGreen("Constructor included"));
      fileContent = `
          public class ${fileName} {
            public ${fileName}() {
  
            }
            public static void main(String[] args) {
              System.out.println("This is your new java file. Enjoy!! - javauc");
            }
          }`;
    }

    const pathToNewFile = path.join(folder, fileName + ".java");
    this.log(picocolors.blue(`Creating file ${pathToNewFile}`));
    writeFileSync(pathToNewFile, fileContent.trim());
    return;
  }

  static description = "creates a java source file";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    includeConstructor: Flags.boolean({ char: "c" }),
  };

  static args = [{ name: "folder" }, { name: "fileName" }];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(CreateSourceFile);

    const { folder, fileName } = args;

    let filesArray = fileName.split(",");

    filesArray = filesArray.filter((file: string) => {
      return file.trim() != "";
    });

    if (filesArray.length > 1) {
      filesArray.forEach((file: string) => {
        this.createFile(folder, file, {
          includeConstructor: flags.includeConstructor,
        });
      });
      this.log(picocolors.green("[Files created successfully]"));
      this.exit(0);
    } else {
      const { includeConstructor } = flags;
      let commaLessFileName = fileName.replace(",", "");
      this.createFile(folder, commaLessFileName, { includeConstructor });
      this.log(picocolors.green("[File created successfully]"));
      this.exit(0);
    }
  }
}
