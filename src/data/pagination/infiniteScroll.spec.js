import React from 'react'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'
import sinon from 'sinon'

import gql from 'graphql-tag'
import { MockedProvider } from 'react-apollo/test-utils'
import { addTypenameToDocument } from 'apollo-utilities'

import createMockData from 'src/utilities/test/mock/data/createMockData'
import infiniteScroll from './infiniteScroll'

class TestableComponent extends React.Component {
  static propTypes = {
    test: PropTypes.func
  }
  componentWillReceiveProps (next) {
    this.props.test(next)
  }
  render () {
    return null
  }
}

describe('infiniteScroll', () => {
  test('only return the first 2 items initially', done => {
    let receivePropsTest = (props) => {
      let { data } = props
      if (!data.loading) {
        expect(data.results.length).toBe(2)
        done()
      }
    }
    const TestComponent = infiniteScroll(_testQuery(), 2)(TestableComponent)
    mountTestComponent(2, <TestComponent test={receivePropsTest} />)
  })

  test('loadMoreItems adds twice as many items to the initial results', done => {
    let firstResultsReceived = false
    let numberOfItems = 2
    let receivePropsTest = (props) => {
      let { data, loadMoreItems } = props
      if (!data.loading) {
        if (firstResultsReceived) {
          expect(data.results.length).toBe(numberOfItems * 2)
          expect(data.results[0].id).not.toBe(data.results[numberOfItems].id)
          done()
        }
        firstResultsReceived = true
        loadMoreItems()
      }
    }
    const TestComponent = infiniteScroll(_testQuery(), numberOfItems)(TestableComponent)
    mountTestComponent(2, <TestComponent test={receivePropsTest} />)
  })

  test('component does not receive props if there are no more results', done => {
    let numberOfLoads = 2
    let spy
    let receivePropsTest = (props) => {
      let { data, loadMoreItems } = props
      if (!data.loading) {
        loadMoreItems().then((res) => {
          let {results} = res.data
          if (!--numberOfLoads) {
            setTimeout(() => {
              expect(spy.calledTwice).toBe(true)
              done()
            }, 500)
            expect(results.length).toBe(0)
          } else {
            expect(results.length).not.toBe(0)
          }
        })
      }
    }
    spy = sinon.spy(TestableComponent.prototype, 'componentWillReceiveProps')
    const TestComponent = infiniteScroll(_testQuery(), 2)(TestableComponent)
    mountTestComponent(2, <TestComponent test={receivePropsTest} />)
  })
})
function mountTestComponent (itemsToLoad, testComponent) {
  const initialVariables = {
    skip: 0,
    first: itemsToLoad
  }
  const nextVariables = {
    skip: itemsToLoad,
    first: itemsToLoad
  }
  const endOfResults = {
    skip: itemsToLoad * 2,
    first: itemsToLoad
  }
  const allData = createMockData({ mockData: _testData, items: itemsToLoad * 2 })
  mount(
    <MockedProvider mocks={[{
      request: { query: _testQuery(), initialVariables },
      result: { data: { results: allData.slice(0, itemsToLoad) } }
    },
    {
      request: { query: _testQuery(), nextVariables },
      result: { data: { results: allData.slice(itemsToLoad, itemsToLoad * 2) } }
    },
    {
      request: { query: _testQuery(), endOfResults },
      result: { data: { results: [] } }
    }]}>
      { testComponent }
    </MockedProvider>
  )
}
function _testQuery () {
  return addTypenameToDocument(gql`
      query TestQuery ($first: Int!, $skip: Int!) {
          results: allUsers (first: $first, skip: $skip) {
              id
          }
      }
  `)
}
function _testData () {
  return { __typename: 'TestData' }
}
