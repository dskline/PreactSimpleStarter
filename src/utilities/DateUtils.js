const timeUnitBreakpoints = [
  ['second', 1],
  ['minute', 60],
  ['hour', 60 * 60],
  ['day', 24 * 60 * 60],
  ['week', 7 * 24 * 60 * 60],
  ['month', (365.25 * 24 * 60 * 60) / 12],
  ['year', 365.25 * 24 * 60 * 60]
]

export function timeSince (date) {
  const dateInSeconds = Math.floor((new Date() - date) / 1000)
  let i = timeUnitBreakpoints.length
  while (i-- > 0) {
    const interval = Math.floor(dateInSeconds / timeUnitBreakpoints[i][1])
    if (interval !== 0) {
      return interval + ' ' + timeUnitBreakpoints[i][0] + (interval > 1 ? 's ago' : ' ago')
    }
  }
  return 'Just now'
}
