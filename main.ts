// robot-pickup-01 — a robot's one and only pickup line.
//
// The bit: a robot spends its whole life authenticating —
// handshakes, tokens, passwords, two-factor codes. So the
// sweetest thing it can imagine is a connection that needs
// none of that. Wi-Fi is the perfect setup because everybody
// already asks "what's the password?" before they can join.
// Here the robot flips it: the signal is strong, the feeling
// is real, and for once there is nothing to type in.
//
// The line is built from parts on purpose. Each part is one
// beat of the joke, and the em dash is the pause where the
// robot realises it is being charming instead of just online.
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 280;

function openingBeat(): string {
  // The question that hooks the listener: a network name
  // standing in for a person. Short, direct, a little bold.
  return "Are you Wi-Fi?";
}

function feelingBeat(): string {
  // The robot admits something it was never programmed to
  // admit: it feels a connection, not just a signal.
  return "Because I feel a strong connection";
}

function punchlineBeat(): string {
  // The twist. Every other connection in a robot's life
  // demands a password. This one pointedly does not.
  return "and for once, I don't need a password.";
}

function assembleLine(): string {
  const beats = [openingBeat(), feelingBeat(), punchlineBeat()];
  // An em dash joins the setup to the punchline, like the
  // robot taking a breath before the clever part lands.
  return `${beats[0]} ${beats[1]} \u2014 ${beats[2]}`;
}

function guardLength(text: string): string {
  if (text.length === 0) throw new Error("pickup line is empty");
  if (text.length > MAX_CHARS) throw new Error("pickup line too long");
  return text;
}

function checkEnding(text: string): string {
  // A pickup line should land, not trail off: it must end
  // with a full stop, the robot equivalent of standing tall
  // after delivering the line instead of mumbling away.
  if (!text.endsWith(".")) throw new Error("pickup line must end with a period");
  return text;
}

function saveEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, checkEnding(guardLength(text)) + "\n", "utf8");
}

function reportDelivery(text: string): void {
  // A tiny receipt on stdout: the line itself plus its
  // length, so a human can see at a glance that the whole
  // joke survived assembly and made it into the file.
  console.log(`entry (${text.length} chars): ${text}`);
}

const entry = assembleLine();
saveEntry(entry);
reportDelivery(entry);
