export function getErrorMessage(error, fallback = 'Something went wrong. Please try again.') {
  if (typeof error === 'string') return error;
  if (error && typeof error.message === 'string') return error.message;
  return fallback;
}
