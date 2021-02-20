export const copyToClipboard = (e: any) => {
  if (!navigator.clipboard) {
    return;
  }

  try {
    const text = e.target.innerText;
    navigator.clipboard.writeText(text);
  } catch {
    return;
  }
};
