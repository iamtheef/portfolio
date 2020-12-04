export const copyToClipboard = (text: string) => {
  let dummy = document.createElement("textarea");
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
};
