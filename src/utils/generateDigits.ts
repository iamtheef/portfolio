export function generateDigits() {
  const digits = [0, 1];

  const num = () => Math.floor(Math.random() * digits.length);

  let string = "";
  let width = Math.floor(window.innerWidth / 400);
  for (let i = 0; i <= width; i++) {
    string = string + digits[num()].toString();
  }
  return string;
}
