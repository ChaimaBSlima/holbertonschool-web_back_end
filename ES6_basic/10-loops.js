export default function appendToEachArrayValue(array, appendString) {
  const array = []
  for (const idx of array) {
    value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
