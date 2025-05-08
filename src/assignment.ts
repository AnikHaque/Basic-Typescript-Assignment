function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);
