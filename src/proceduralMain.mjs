export default async function proceduralMain({ dryRun, directory, verbose }) {
  let files = await readDir(directory);
  files = files.filter(isWebP);

  console.log("files1", files);
  files = await Promise.all(
    files.map((file) => rename(file, replaceWebpToPng(file)))
  );
}
