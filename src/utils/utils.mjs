import fs from "fs";
import util from "util";

const readDir = util.promisify(fs.readdir);
const rename = util.promisify(fs.rename);

const isWebP = (file) => file.indexOf(".webp") > -1;
const replaceWebpToPng = (filePath) => filePath.replace(".webp", ".png");

export { readDir, rename, isWebP, replaceWebpToPng };
