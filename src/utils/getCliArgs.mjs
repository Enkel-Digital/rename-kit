import path from "path";

// Read Command Line Arguments
export default function getCliArgs() {
  let idx;

  idx = process.argv.indexOf("--verbose");
  const verbose = idx > -1;

  idx = process.argv.indexOf("--dry-run");
  const dryRun = idx > -1;

  idx = process.argv.indexOf("--help");
  const help = idx > -1;

  idx = process.argv.indexOf("--dir");
  const relativeDirectory =
    idx > -1
      ? process.argv[idx + 1] // Use specified dir if any
      : !dryRun && !help // If no other specified args
      ? process.argv.length === 2 // If only the script is being ran
        ? undefined
        : process.argv.length === 3 // If script is ran with a dir
        ? process.argv[2]
        : undefined
      : undefined;

  const directory = relativeDirectory
    ? path.join(process.cwd(), path.normalize(relativeDirectory))
    : process.cwd();

  return {
    verbose,
    directory,
    dryRun,
    help,
  };
}
