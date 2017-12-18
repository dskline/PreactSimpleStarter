/**
 * @param mockData - a function that returns a mock data object (default: empty)
 * @param items - number of items to return in the array (default: 1)
 *
 * @returns {Array} of mock objects with a unique id
 */
export default ({ mockData = () => { return {} }, items = 1 }) => {
  let results = []
  for (var i = 0; i < items; i++) {
    let data = mockData()
    data.id = i
    results.push(data)
  }
  return results
}
