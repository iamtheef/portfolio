const languages = ["TypeScript", "JavaScript", "HTML", "Python", "other"];
const colors = ["2b7489", "f1e05a", "ea452c", "eaa42c", "cce87f"];

export const getColor = (language: string) => {
  if (languages.indexOf(language) === -1) {
    return colors[colors.length - 1];
  }
  return colors[languages.indexOf(language)];
};
