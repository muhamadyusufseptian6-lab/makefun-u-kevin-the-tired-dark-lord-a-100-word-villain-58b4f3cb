// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes one ~100-word monologue to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only, deterministic: the same run always writes the same text.

import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const ENTRY = [
  "Right. The eclipse is coming, and when it breaks, the Seventh Seal opens and the old gods wake — hmm. The candles keep going out.",
  "I conquered the Nine Valleys before breakfast — well, before lunch — and now I sign grain requisitions for goblins who can't spell their names.",
  "The ritual needs seven bells. Seven — no, nine. I wrote it down. In the black book. The one with the... ribbon.",
  "Kneel, or don't. Standing takes forever, and there are no chairs. I had them removed. For drama.",
  "Take the deal. Somebody has to run the apocalypse. It might as well be you.",
].join(" ");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
