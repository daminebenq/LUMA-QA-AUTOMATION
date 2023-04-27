#!/bin/bash -e

TEST_PATH="cypress/e2e"

usage() {
    set +x
    cat 1>&2 <<HERE

Usage: ./run.sh -t [OPTION]

OPTIONS:
  -t <test name: login/order/find/cart/all>

HERE
}

err() {
	echo "----";
	echo ERROR: $@
	echo "----";
}

main() {
  while builtin getopts "ut:" opt "${@}"; do
    case $opt in
      t)
        TEST=$OPTARG
        ;;

      u)
        usage
        exit 0
        ;;

      :)
        err "Missing option argument for -$OPTARG"
        exit 1
        ;;

      \?)
        err "Invalid option: -$OPTARG" >&2
        usage
        ;;
    esac
  done

  if [ -z "$TEST" ]; then
    err "No test provided";
    usage
    exit 1
  fi

echo "Current PATH: $PWD"

if [ "$TEST" = "all" ]; then
    echo "Running Test: $TEST_PATH/$TEST.feature"
    npx cypress run --config-file=qa.config.js --env allure=true || npm run allure:report
else
    echo "Running Test: $TEST_PATH/$TEST.feature"
    npx cypress run --config-file=qa.config.js --spec "$TEST_PATH/$TEST.cy.ts" --env allure=true --headed --browser chrome || npm run allure:report
fi
}

main "$@" || exit 1
