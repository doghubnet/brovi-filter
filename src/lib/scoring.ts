export function calcScore(values: number[]) {
  if (!values.length) return 0
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length)
}

export function scoreLabel(score: number) {
  if (score >= 80) return 'Strong'
  if (score >= 60) return 'Needs Review'
  return 'At Risk'
}
