#!/usr/bin/- chmod +x bin/create-express-app

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectName = process.argv[2] || "express-boilerplate-jay";
const projectPath = path.join(process.cwd(), projectName);

// Copy template files
execSync(`git clone https://github.com/jayshankar-Dey/express-boilerplate.git ${projectPath},`, { stdio: "inherit" });

// Remove Git history to prevent conflicts
execSync(`rm -rf ${ projectPath }/.git,`, { stdio: "inherit" });

console.log(`✅ Express.js TypeScript boilerplate created at ${ projectPath }`);
console.log(`📌Next steps: \n `);
console.log(`cd ${ projectName }`);
console.log(`npm install `);
console.log(`npm run build `);
console.log(`npm run dev `);