import { shallow } from 'enzyme'

export default class TestUtils {
  static component = (jsx) => {
    return {
      contains: (test) => {
        expect(shallow(jsx).find(test).length).toBe(1)
      }
    }
  }
}
