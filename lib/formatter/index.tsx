const date = (input: Date): string => {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(input);
};

export const formatter = {
  date,
};
