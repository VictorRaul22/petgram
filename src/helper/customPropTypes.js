export function isLikes(props, propName) {
  const propValue = props[propName];
  if (propValue === undefined || propValue === null) {
    // para que sea requerido
    return new Error(`${propName} value must be defined`);
  }
  if (typeof propValue !== "number") {
    return new Error(`${propName} value must be a number`);
  }
  if (propValue < 0) {
    return new Error(`${propName} value must be greater than 0`);
  }
  return null;
}
