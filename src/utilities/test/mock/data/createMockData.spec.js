import createMockData from './createMockData'

describe('createMockData', () => {
  test('return an array of length one by default', () => {
    const data = createMockData({})
    expect(data).toBeInstanceOf(Array)
    expect(data.length).toBe(1)
  })

  test('return desired number of items', () => {
    const data = createMockData({ items: 10 })
    expect(data.length).toBe(10)
  })

  test('each item has an id', () => {
    const data = createMockData({ items: 2 })
    expect(data[0]).toHaveProperty('id')
    expect(data[1]).toHaveProperty('id')
  })

  test('each item has a unique id', () => {
    const data = createMockData({ items: 2 })
    expect(data[0].id).not.toBe(data[1].id)
  })
})
