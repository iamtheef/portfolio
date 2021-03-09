export function generateDigits() {
  const digits = [0, 1];
  const num = () => digits[Math.floor(Math.random() * digits.length)];

  let string = "";
  let width = Math.floor(window.innerWidth / 230);

  for (let i = 0; i <= width; i++) {
    string = string + num();
  }

  return string;
}
