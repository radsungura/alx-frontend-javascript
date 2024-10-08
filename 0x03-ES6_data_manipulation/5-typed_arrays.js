export default function createInt8TypedArray(length: number, position: number, value: number) {
  const arr = new ArrayBuffer(length);
  const val = new DataView(arr);

  try {
    val.Int8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return val;
}
