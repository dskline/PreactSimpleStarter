module.exports = {
  setupFiles: ['<rootDir>/testSetup.js'],
  moduleFileExtensions: [ 'js' ],
  moduleDirectories: [ 'node_modules' ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^src/(.+)': '<rootDir>/src/$1'
  },
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '^.+\\.js$': 'babel-jest'
  },
  coverageReporters: [ 'lcov' ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [ 'src/**/*.js', '!spec.js' ]
}
