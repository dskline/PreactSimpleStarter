# Changelog

## v1.2.8 / 2017-11-02

* Responsive images with lazysizes
    * Responsive sizes so smaller screens can save bandwidth
    * webp for Chrome, jpeg xr for Edge, jpg for everyone else

## v1.2.7 / 2017-10-30

* Added compatibility with IE

## v1.2.6 / 2017-10-30

* Horizontal scrolling in code tags now works on mobile
* Update Apollo dependencies to latest v2.0

## v1.2.5 / 2017-10-28

* Fix sidebar falling out of the container

## v1.2.4 / 2017-10-28

* Added additional GitHub-like styling for blockquotes and code snippets on Post detail view

## v1.2.3 / 2017-10-26

* Users can now click on a blog post in [spencerkline.com/blog] to access a detailed view
    * Detailed view can also be accessed with a url, if the url is known, i.e. [spencerkline.com/blog/welcome]

## v1.2.2 / 2017-10-26

* Style improvements
    * Add transparent layer to mobile blog to add some contrast between cards and background
    * Better margins for blog sidebar

## v1.2.1 / 2017-10-25

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