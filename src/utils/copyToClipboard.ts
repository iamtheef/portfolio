import copy from "copy-to-clipboard";

export const copyToClipboard = (e: any) => {
  try {
    copy(e.target.innerText);
  } catch {
    return;
  }
};
