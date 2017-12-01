# Changelog

## v1.3.5 / 2017-12-01

* Fix image loading spinner size

## v1.3.4 / 2017-11-30

* Homepage layout fixes
* Language changes

## v1.3.3 / 2017-11-27

Lots of code clean-up

* Remove constructors in favor of state = { ... }
* Break down lines greater than 180 chars
* Separate inline arrow functions so they aren't created every time
* Make Table of Contents' children more DRY (reuse classNames)
* Menu themes should now stay in component scope as JS objects, rather than handled via CSS classes

## v1.3.2 / 2017-11-24

* Finish the home page content

## v1.3.1 / 2017-11-20

* Added another section to the home page.

## v1.3.0 / 2017-11-18

#### Features

* Table of Contents on the [Home Page](https://www.spencerkline.com)
* Create Post Page added for ease of testing new posts
* Parse blog posts as markdown instead of HTML (uses marksy converter)
* Performance enhancements
    * Video support added on blog posts as alternative for heavy GIF
    * Better image loading on blog posts (responsive sizes)
    * Dynamic imports and code splitting

#### Fixes

* Blog page style improvements (Safari background and remove sidebar on medium-size screens)
* Home page resizing background issue


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