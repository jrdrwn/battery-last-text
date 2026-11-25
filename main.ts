import { mkdirSync, writeFileSync } from "node:fs";

// The battery's last text to its charger, built in three beats:
// the sacrifice (setup), the turn (revenge), the sign-off (punchline).
const SETUP =
  "I held 1% for six hours so you could finish your podcast. Low Power Mode, dim screen, everything.";
const TURN = "My last words: your 6 a.m. alarm dies with me.";
const PUNCH = "Sleep in, traitor.";

const ENTRY = [SETUP, TURN, PUNCH].join(" ");

// The gate allows 1-200 characters of plain text, no trailing newline:
// a shorter file also wins the byte tie-break, so keep it exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry is ${ENTRY.length} chars; gate needs 1-200, one line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
