# System requirements

## Operating System

- macOS 10.9 and above (Intel or Apple Silicon 64-bit (x64 or arm64))
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (x86_64 or Arm 64-bit (x64 or arm64))
- Windows 7 and above (64-bit only)

## Node

- Node.js 12 or 14 and above
- Java 8 or above; used in allure-reporter.

## Install packages

- `npm install`

## About project

- cypress version: 10 or above
- reporter: `cypress-allure-plugin` with `allure-commandline` for CLI commands
  https://www.npmjs.com/package/@shelex/cypress-allure-plugin
  https://www.npmjs.com/package/allure-commandline

## Supported environments

### QA

- config for QA env: `qa.config.js`
- open cypress (with UI): `npm run cy:open:qa`
- run all tests (without UI): `cy:run:qa:all`
- run all tests with allure reporter (without UI): `cy:run:qa:all:allure`

### RUN HEADLESS - USING BASH FILE (run.sh)

- run all tests: `./run.sh -t all`
- run a specific test suite: `./run.sh -t <test_suite_name>` knowing that `test_suite_name` should be one of the following: `login/order/find/cart/all`.
