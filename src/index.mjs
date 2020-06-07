import getCliArgs from "./utils/getCliArgs.mjs";
import printHelpMenu from "./helpMenu.mjs";
import core from "./chainingBasedMain.mjs";

/**
 * Async IIFE main
 */
(async function main() {
  // process.stdout.write("\u001b[2J\u001b[0;0H"); // Clear screen and put cursor at 0,0
  console.clear(); // ATTEMPT to clear screen and put cursor at 0,0 when stdout is a TTY

  try {
    const { help, dryRun, directory, verbose } = getCliArgs();
    if (help) return printHelpMenu();

    console.log("Reading files in directory: ", directory);

    core({ dryRun, directory, verbose });
  } catch (error) {
    console.error(error);
    console.error("Script failed, exiting now...");

    process.exit(1);
  }
})();
