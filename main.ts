// The Robot Pickup Line Championship
// One line, in the voice of a robot trying to charm someone.
// The joke grows out of being a machine: a robot that finally
// feels a connection it does not need credentials for. The charm
// is that the robot is used to handshakes, tokens and passwords —
// and this one connection just works, no authentication required.
import * as fs from "node:fs";

const line =
  "Are you Wi-Fi? Because I feel a strong connection \u2014 and for once, I don't need a password.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
