const fs = require("fs");
const path = require("path");
const JavaScriptObfuscator = require("javascript-obfuscator");

const javascriptDirectory = path.resolve(__dirname, "../build/static/js");

if (!fs.existsSync(javascriptDirectory)) {
  throw new Error(`Build JavaScript directory not found: ${javascriptDirectory}`);
}

const javascriptFiles = fs
  .readdirSync(javascriptDirectory)
  .filter((fileName) => fileName.endsWith(".js"));

if (javascriptFiles.length === 0) {
  throw new Error(`No JavaScript bundles found in ${javascriptDirectory}`);
}

for (const fileName of javascriptFiles) {
  const filePath = path.join(javascriptDirectory, fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const obfuscated = JavaScriptObfuscator.obfuscate(source, {
    compact: true,
    controlFlowFlattening: false,
    identifierNamesGenerator: "hexadecimal",
    renameGlobals: false,
    selfDefending: false,
    sourceMap: false,
    stringArray: true,
    stringArrayEncoding: ["base64"],
    stringArrayThreshold: 0.75,
  });

  fs.writeFileSync(filePath, obfuscated.getObfuscatedCode());
}

for (const fileName of fs
  .readdirSync(javascriptDirectory)
  .filter((name) => name.endsWith(".map"))) {
  fs.unlinkSync(path.join(javascriptDirectory, fileName));
}

console.log(`Obfuscated ${javascriptFiles.length} JavaScript bundle(s).`);
