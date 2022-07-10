export const range = (start: number, end: number) => {
  const numbers: number[] = [];

  for (let i = start; i < end; i++) {
    numbers.push(i);
  }

  return numbers;
}
