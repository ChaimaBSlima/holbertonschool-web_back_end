export default function appendToEachArrayValue(array, appendString) {
  const chouchou = [];
  for (const idx of array) {
    chouchou.push(appendString + idx);
  }

  return chouchou;
}
