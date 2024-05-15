import Location from "./Location";

export function toPostDateFormat(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes} ${day}.${month}.${year}`;
}

export function parseTextToLocationDto(text) {
  let location;
  if (text) {
    const parts = text.split(/,/);
    location = new Location(+parts[0], +parts[1]);
  }
  return location;
}

const locationTextRegExpr = /\s*[\[]?[-]?[\d.]+\s*,\s*[-]?[\d.]+[\]]?\s*/;
export function checkValidityLocationText(text) {
  if (!text) {
    throw new Error("Поле не может быть пустым!");
  }
  if (!locationTextRegExpr.test(text)) {
    throw new Error("Текст в поле не соответствует заданному формату!")
  }
}
