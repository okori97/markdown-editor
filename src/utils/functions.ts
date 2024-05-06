export function getCurrentDate(): string {
  const date = new Date().toLocaleDateString().replace(/\//g, "-");
  console.log(date);
  return `${date}`;
}
