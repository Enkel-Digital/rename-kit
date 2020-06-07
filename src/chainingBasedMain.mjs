import { readDir, rename, isWebP, replaceWebpToPng } from "./utils/utils.mjs";

export default ({ dryRun, directory, verbose }) =>
  readDir(directory)
    .then((files) => files.filter(isWebP))
    .then((files) =>
      dryRun
        ? files
        : Promise.all(files.map((file) => rename(file, replaceWebpToPng(file))))
    )
    .then((files) =>
      files.length
        ? files[0]
          ? console.log(`Command will convert '${files.length}' files.`) ||
            verbose
            ? console.log("Files are", files)
            : undefined // If file is file name, means conversion skipped
          : console.log(`Successfully converted '${files.length}' files. `) // If file is undefined means promise value
        : console.log("No files to be converted")
    );
