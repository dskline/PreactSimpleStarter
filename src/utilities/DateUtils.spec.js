import { timeSince } from './DateUtils'

describe('timeSince', () => {
  test('Just now', () => {
    expect(timeSince(new Date())).toBe('Just now')
  })

  test('1 second ago', () => {
    expect(timeSince(secondsAgo(1))).toBe('1 second ago')
  })

  test('59 seconds ago', () => {
    expect(timeSince(secondsAgo(59))).toBe('59 seconds ago')
  })

  test('1 minute ago', () => {
    expect(timeSince(secondsAgo(60))).toBe('1 minute ago')
  })

  test('59 minutes ago', () => {
    expect(timeSince(secondsAgo(59 * 60))).toBe('59 minutes ago')
  })

  test('1 hour ago', () => {
    expect(timeSince(secondsAgo(60 * 60))).toBe('1 hour ago')
  })

  test('23 hours ago', () => {
    expect(timeSince(secondsAgo(23 * 60 * 60))).toBe('23 hours ago')
  })

  test('1 day ago', () => {
    expect(timeSince(daysAgo(1))).toBe('1 day ago')
  })

  test('6 days ago', () => {
    expect(timeSince(daysAgo(6))).toBe('6 days ago')
  })

  test('1 week ago', () => {
    expect(timeSince(daysAgo(7))).toBe('1 week ago')
  })

  test('4 weeks ago', () => {
    expect(timeSince(daysAgo(4 * 7))).toBe('4 weeks ago')
  })

  test('1 month ago', () => {
    expect(timeSince(daysAgo(5 * 7))).toBe('1 month ago')
  })

  test('11 months ago', () => {
    expect(timeSince(daysAgo(360))).toBe('11 months ago')
  })

  test('1 year ago', () => {
    expect(timeSince(daysAgo(366))).toBe('1 year ago')
  })

  test('500 years ago', () => {
    // because legacy means planting seeds in a garden you never get to see
    expect(timeSince(daysAgo(500 * 365.25))).toBe('500 years ago')
  })
})
function secondsAgo (seconds) {
  return new Date(Date.now() - seconds * 1000)
}
function daysAgo (days) {
  return secondsAgo(days * 24 * 60 * 60)
}
