// One-line out-of-office reply — must stay under 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I'm out of office until Monday — my inbox is on holiday too, and unlike me, it won't even pretend to read your email.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
