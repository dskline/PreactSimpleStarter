import faker from 'faker'
import createMockData from './createMockData'

export default (args) => {
  function blogPost () {
    let data = {}
    data.title = faker.lorem.words()
    data.titleHtml = data.title.replace(' ', '-')
    data.titleImageUrl = faker.image.imageUrl()
    data.content = faker.lorem.paragraphs()
    data.createdAt = faker.date.past()
    return data
  }
  return createMockData({ mockData: blogPost, ...args })
}
