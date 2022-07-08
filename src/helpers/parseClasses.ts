export const parseClasses = (...args: (string | false | undefined | null)[]): string => {
  const classes: string[] = [];

  for (const arg of args) {
    if (typeof arg === 'string') {
      classes.push(arg);
    }
  }

  return classes.join(' ');
}
