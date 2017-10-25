import { timeSince } from './DateUtils'

describe('timeSince', () => {
  test('Just now', () => {
    expect(timeSince(new Date())).toBe('Just now')
  })

  test('1 second ago', () => {
    expect(timeSince(new Date(Date.now() - 1000))).toBe('1 second ago')
  })

  test('59 seconds ago', () => {
    expect(timeSince(new Date(Date.now() - 59 * 1000))).toBe('59 seconds ago')
  })

  test('1 minute ago', () => {
    expect(timeSince(new Date(Date.now() - 60 * 1000))).toBe('1 minute ago')
  })

  test('59 minutes ago', () => {
    expect(timeSince(new Date(Date.now() - 59 * 60 * 1000))).toBe('59 minutes ago')
  })

  test('1 hour ago', () => {
    expect(timeSince(new Date(Date.now() - 60 * 60 * 1000))).toBe('1 hour ago')
  })

  test('23 hours ago', () => {
    expect(timeSince(new Date(Date.now() - 23 * 60 * 60 * 1000))).toBe('23 hours ago')
  })

  test('1 day ago', () => {
    expect(timeSince(new Date(Date.now() - 24 * 60 * 60 * 1000))).toBe('1 day ago')
  })

  test('6 days ago', () => {
    expect(timeSince(new Date(Date.now() - 6 * 24 * 60 * 60 * 1000))).toBe('6 days ago')
  })

  test('1 week ago', () => {
    expect(timeSince(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))).toBe('1 week ago')
  })

  test('4 weeks ago', () => {
    expect(timeSince(new Date(Date.now() - 4 * 7 * 24 * 60 * 60 * 1000))).toBe('4 weeks ago')
  })

  test('1 month ago', () => {
    expect(timeSince(new Date(Date.now() - 5 * 7 * 24 * 60 * 60 * 1000))).toBe('1 month ago')
  })

  test('11 months ago', () => {
    expect(timeSince(new Date(Date.now() - 360 * 24 * 60 * 60 * 1000))).toBe('11 months ago')
  })

  test('1 year ago', () => {
    expect(timeSince(new Date(Date.now() - 366 * 24 * 60 * 60 * 1000))).toBe('1 year ago')
  })

  test('500 years ago', () => {
    // because legacy means planting seeds in a garden you never get to see
    expect(timeSince(new Date(Date.now() - 500 * 365.25 * 24 * 60 * 60 * 1000))).toBe('500 years ago')
  })
})
