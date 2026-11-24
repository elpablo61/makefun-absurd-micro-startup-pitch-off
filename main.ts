// Absurd Micro-Startup Pitch-Off — entry program (node22).
// Writes the winning one-sentence pitch to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "StandupGhost: $5 a week, an agent attends your 9:04 standup, says 'same as yesterday, blocked on review' in your voice, and logs off before questions.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (PITCH.length < 1 || PITCH.length > 200 || PITCH.trim().length === 0) {
  throw new Error(`Pitch must be 1-200 non-blank characters, got ${PITCH.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to ${join(outDir, "entry.txt")}`);
