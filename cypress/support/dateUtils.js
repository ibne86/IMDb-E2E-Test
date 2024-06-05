export function getYesterdaysDate() {
    const today = new Date();
    today.setDate(today.getDate() - 1);
  
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
  
    return `${month}-${day}`;
  }
  