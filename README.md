<h1 align="center">Section Food pack 🍲</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> The project is a website where you can order food kits to cook for yourself


## Install

```sh
yarn install
```

## Configure keys

```sh
cp .env.example .env.local
nano .env.local
```
**Important**: if you're testing it locally pass `localhost:4000/graphql` to `REACT_APP_GRAPHQL_URL`

## Usage

To run frontend project:   
```sh
yarn start
```
To run fake server:
```sh
yarn fake-gql
```

## Tests

```sh
# regular test
yarn test

# test in watch mode
yarn test:watch

# coverage
yarn test:cov
```

## Build

```sh
# build for production
yarn build

# analyzing bundle size
yarn analyze
```

## Lint

```sh
# check lint issues
yarn lint

# fix lint issues
yarn lint:fix
```

## Build with

- [cra](https://create-react-app.dev) - Most common boilerplate to start react
  projects
- [styled-components](https://www.styled-components.com) - Custom UI components
  with props based on scales
- [styled-system](https://styled-system.com) - Collection of functions to add
  style props to components
- [typescript](https://www.typescriptlang.org) - JavaScript extention to add
  types to the language

## TODO

- [ ] Test components
- [ ] Add storybook
- [ ] E2e test
- [ ] Save repeated queries on localStorage
- [ ] Style text through theme
- [ ] Handle accessibility
- [ ] Add theme options to user change system color

## Author

👤 **William G.**

- Website: https://www.linkedin.com/in/william-godoy-4bb919b5/
- Github: [@rap0so](https://github.com/rap0so)
- LinkedIn:
  [@william-godoy-4bb919b5](https://linkedin.com/in/william-godoy-4bb919b5)

## 📝 License

Copyright © 2020 [William G.](https://github.com/rap0so).<br /> This project is
[MIT](https://opensource.org/licenses/MIT) licensed.

---

_This README was generated with ❤️ by
[readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
