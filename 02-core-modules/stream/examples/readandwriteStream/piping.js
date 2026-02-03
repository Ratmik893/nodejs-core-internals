import { open } from "node:fs/promises";

(async () => {
  console.time("piping");
  const srcFile = await open("src.txt", "r");
  const destFile = await open("dest.txt", "w");

  const readStream = srcFile.createReadStream();
  const writeStream = destFile.createWriteStream();

  readStream.pipe(writeStream);

  console.timeEnd("piping");

  await srcFile.close();
  await destFile.close();
})();
