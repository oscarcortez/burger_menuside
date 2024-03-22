export const capitalize = (strInput: string) => {
  if (!strInput) return "";
  let words = strInput.split(" ");
  return words.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
};
