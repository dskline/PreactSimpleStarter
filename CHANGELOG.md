# Changelog

## v1.2.1 / 2017-10-25

### Fixes

* Background image was using http instead of https
* Sliding menu had wrongly colored links on blog page

## v1.2.0 / 2017-10-25

### New Features

* Blog page added @ [www.spencerkline.com/blog]
* Beta website is now accessible @ [beta.spencerkline.com] targetting the `beta` branch

### Behind the scenes

* Refactor `Preact` framework to use latest `React 16`
    * This will allow for better integration with other libraries, less warnings, better ESLint suggestions
    * `React 16` is much smaller than `React 15`, making it more competitive with Preact
* Replace `karma` with the more modern `Jest` framework for faster testing
* Integrate `GraphQL` database using [Graph.cool](https://graph.cool) and `react-apollo`