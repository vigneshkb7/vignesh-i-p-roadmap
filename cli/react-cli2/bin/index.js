#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

// Helpers

// //
// __filename → "/Users/john/dev/create-react-app-lite/bin/index.js"
// __dirname  → "/Users/john/dev/create-react-app-lite/bin"

//import.meta.url returns the file URL of the current module (e.g. "file:///Users/you/project/bin/index.js").
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appName = process.argv[2];

if (!appName) {
  console.error(
    "❌ Please specify a project name: create-react-app-lite <app-name>"
  );
  process.exit(1);
}

const appPath = path.join(process.cwd(), appName);

if (fs.existsSync(appPath)) {
  console.error("❌ Directory already exists.");
  process.exit(1);
}

console.log(`🚀 Creating React app in ${appPath}`);

fs.mkdirSync(appPath);
fs.mkdirSync(path.join(appPath, "src"));
fs.mkdirSync(path.join(appPath, "public"));

// Copy files from template
const copyFile = (src, dest) =>
  fs.copyFileSync(path.join(__dirname, "..", src), path.join(appPath, dest));

copyFile("template/public/index.html", "public/index.html");
copyFile("template/src/index.js", "src/index.js");
copyFile("template/src/App.js", "src/App.js");
copyFile("template/package.json", "package.json");
copyFile("template/.babelrc", ".babelrc");
copyFile("template/webpack.config.js", "webpack.config.js");

// Install dependencies
console.log("📦 Installing dependencies...");
execSync("sudo npm install", { stdio: "inherit", cwd: appPath });

console.log("✅ Done! Run:");
console.log(`   cd ${appName}`);
console.log("   npm start");
