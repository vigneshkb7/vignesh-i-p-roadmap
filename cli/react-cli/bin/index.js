#!/usr/bin/env node

const { Command } = require("commander");
const chalk = require("chalk");
const fs = require("fs-extra");
const path = require("path");
const execa = require("execa");

const program = new Command();

program
  .name("create-custom-react")
  .description("Create a custom React app")
  .argument("<project-name>", "Name of the project")
  .option("-t, --typescript", "Use TypeScript template")
  .action(async (projectName, options) => {
    const targetDir = path.join(process.cwd(), projectName);
    const templateDir = options.typescript
      ? path.join(__dirname, "../templates/ts")
      : path.join(__dirname, "../templates/js");

    try {
      console.log(chalk.blue("Creating React app..."));

      // Copy template
      await fs.copy(templateDir, targetDir);

      // Install dependencies
      process.chdir(targetDir);
      console.log(chalk.green("Installing dependencies..."));
      await execa("npm", ["install"], { stdio: "inherit" });

      console.log(chalk.green("\nSuccess! Your project is ready."));
      console.log(chalk.cyan(`\n  cd ${projectName}\n  npm start`));
    } catch (err) {
      console.error(err);
    }
  });

program.parse();
