import { fileTypeFromFile } from "file-type";

/**
 * Function that check if the file extension is valid
 * @param file string
 * @returns boolean
 */
export async function checkFileExtension(file: string) {
  if (file === undefined) return false;

  const result = await fileTypeFromFile(file);

  if (result === undefined) return false;

  switch (result.ext) {
    case "png":
    case "jpg":
    case "pdf":
      return true;
    default:
      return false;
  }
}

export function isFileImage(file: string) {
  const extension = file.split(".").pop();
  switch (extension) {
    case "png":
    case "jpg":
    case "jpeg":
      return true;
    default:
      return false;
  }
}
