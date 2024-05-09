export function getCurrentDate(): string {
  const date = new Date()
    .toLocaleDateString(undefined, {
      month: "long",
      year: "numeric",
      day: "numeric",
    })
    .replace(/\//g, "-");
  console.log(date);
  return `${date}`;
}
