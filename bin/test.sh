#!/bin/bash

# Description: run tests normally, for local testing
# Param 1: the reporter to use, defaults to spec
runTests()
{
  `npm bin`/jest
}

# Description: run tests with coverage
runCoverageTests()
{
  `npm bin`/jest --coverage
}

# If on Travis, run tests with Istanbul
if [ -n "${TRAVIS_JOB_ID}" ]; then

  echo -e "Job id set to ${TRAVIS_JOB_ID}. \nRunning tests..."
  NODE_ENV=test runCoverageTests

  echo "Sending coverage information to Coveralls..."
  cat ./coverage/lcov.info | `npm bin`/coveralls || true
  rm -rf ./coverage

# Otherwise, when local, run tests normally without Istanbul
else
  NODE_ENV=test runTests ${REPORTER}
fi
