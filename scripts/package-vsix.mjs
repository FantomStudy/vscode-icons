import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const vscePath = path.join(rootDir, "node_modules", "@vscode", "vsce", "vsce");

execFileSync(process.execPath, [vscePath, "package"], {
  stdio: "inherit",
  cwd: rootDir,
});
