export function getYesterdaysDate() {
  const today = new Date();
  today.setDate(today.getDate() - 1);

  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(today.getDate()).padStart(2, "0");

  return `${month}-${day}`;
}

export function getFoutryYearDate() {
  const today = new Date();

  const pastDate = new Date(today.setFullYear(today.getFullYear() - 40));
  const year = pastDate.getFullYear();
  const month = String(pastDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(pastDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function getCurrentDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based

  return `${year}-${month}`;
}