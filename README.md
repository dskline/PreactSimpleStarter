# Yet Another... Portfolio PWA

[![Build Status](https://img.shields.io/travis/dskline/portfolio/master.svg?maxAge=600)](https://travis-ci.org/dskline/portfolio)
[![Coverage Status](https://img.shields.io/coveralls/github/dskline/portfolio/master.svg?maxAge=600)](https://coveralls.io/github/dskline/portfolio?branch=master)
[![Code Climate Badge](https://img.shields.io/codeclimate/maintainability/dskline/portfolio.svg?maxAge=600)](https://codeclimate.com/github/dskline/portfolio/badges)

This portfolio was created as a playground to try out the latest and greatest web technologies: 

  - React
  - GraphQL
  - Sass
  - Webpack
  - Service Workers

My main technical goals with this web application are as follows:

- Be static, to minimize costs. 
- Have a consistent design that works on all devices/screen sizes.
- Work offline using service workers/caching.
- Easy to develop and maintain. (babel transpiling, live-reload, Sass)
- Decent test coverage on all components.
- Aim for a 100 score on [Lighthouse](https://developers.google.com/web/tools/lighthouse/).  

# Quick-Start Guide

- [Installation](#installation)
- [Development Workflow](#development-workflow)

## Installation

**1. Clone this repo:**

```sh
git clone https://github.com/dskline/portfolio.git
cd portfolio
```

**2. Install the dependencies:**

```sh
yarn install
```


## Development Workflow


**3. Start a live-reload development server:**

```sh
yarn run dev
```

> Most changes made to /src while the dev server is running will be updated immediately.

**4. Generate a production build in `./build`:**

```sh
yarn run build
```
> Remember to update service worker in browser to test new builds.

## License

MIT
