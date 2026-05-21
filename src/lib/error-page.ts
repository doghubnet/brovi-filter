export function getErrorText(error: unknown) {
  if (error instanceof Error) return error.message
  return 'Unexpected issue while loading Brovi Filter.'
}
