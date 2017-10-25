import { graphql } from 'react-apollo'

/**
 * infiniteScroll is a component decorator that takes a graphql query and exposes the results (props.data.results) and a
 * function to trigger the fetch of additional items (props.loadMoreItems).
 *
 * @param query - GraphQL Document Object (required)
 * @param itemsToLoad - Integer (required)
 * @returns {function(*=)}
 */
export default function infiniteScroll (query, itemsToLoad) {
  return (component) => graphql(query, {
    options: {
      variables: {
        skip: 0,
        first: itemsToLoad
      }
    },
    props: ({ data }) => ({
      data,
      loadMoreItems: () => {
        return data.fetchMore({
          variables: {
            skip: data.results.length
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult
            }
            return Object.assign({}, previousResult, {
              // Append the new posts results to the old one
              results: [...previousResult.results, ...fetchMoreResult.results]
            })
          }
        })
      }
    })
  })(component)
}
