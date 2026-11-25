// Unsent: The Micro-Confession Sprint — a message typed and never sent.
// Line 1 names who it was meant for; Line 2 is the confession itself,
// held in drafts for nineteen years because it was too embarrassing to send.
import { mkdirSync, writeFileSync } from "node:fs";

const LINES = [
  "To: My middle school best friend",
  "I still have your Game Boy and I've been too ashamed to return it for nineteen years.",
];

function buildEntry(lines: string[]): string {
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly 2 lines, got ${lines.length}`);
  }
  if (!lines[0].startsWith("To: ")) {
    throw new Error("line 1 must be the To: line naming the addressee");
  }
  if (lines[1].trim().length === 0) {
    throw new Error("line 2 must be the unsent message itself");
  }
  const text = lines.join("\n");
  if (text.length < 1 || text.length > 260) {
    throw new Error(`entry is ${text.length} chars, must be 1-260`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  return text;
}

const entry = buildEntry(LINES);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
