export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

export function isPositiveNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0;
}
