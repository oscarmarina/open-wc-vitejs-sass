/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const colour = {
  reset: '\x1b[0m',
  BrightBlue: '\x1b[94m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  bright: '\x1b[1m',
  grey: '\x1b[90m',
};

function outputSuite(suite, indent = '') {
  let results = `${colour.BrightBlue}${suite.name}\n`;
  results += `${suite.tests
    .map(test => {
      let result = indent;
      switch (test instanceof Object) {
        case test.skipped:
          result += `${colour.grey} - ${test.name}`;
          break;
        case test.passed:
          result += `${colour.green} ✓ ${colour.reset}${colour.bright}${test.name}`;
          break;
        default:
          result += `${colour.red} ✕ ${test.name}`;
          break;
      }
      switch (test instanceof Object) {
        case test.duration > 100:
          result += ` ${colour.reset}${colour.red}(${test.duration}ms)`;
          break;
        case test.duration > 50:
          result += ` ${colour.reset}${colour.yellow}(${test.duration}ms)`;
          break;
        default:
          result += ``;
          break;
      }
      result += `${colour.reset}`;
      return result;
    })
    .join('\n')}\n`;

  if (suite.suites) {
    results += suite.suites
      .map(suiteIn => outputSuite(suiteIn, `${indent}`))
      .join('\n');
  }
  return results;
}

async function generateTestReport(testFile, sessionsForTestFile) {
  let results = '';
  sessionsForTestFile.forEach(session => {
    results += session.testResults.suites
      .map(suite => outputSuite(suite, ''))
      .join('\n\n');
  });
  return results;
}

export function mochaStyleReporter({
  reportResults = true,
  reportProgress = true,
} = {}) {
  return {
    /**
     * Called when a test run is finished. Each file change in watch mode
     * triggers a test run. This can be used to report the end of a test run,
     * or to write a test report to disk in watch mode for each test run.
     *
     * @param testRun the test run
     */
    onTestRunFinished({ testRun, sessions, testCoverage, focusedTestFile }) {
      console.table(testCoverage.summary);
    },
    /**
     * Called when results for a test file can be reported. This is called
     * when all browsers for a test file are finished, or when switching between
     * menus in watch mode.
     *
     * If your test results are calculated async, you should return a promise from
     * this function and use the logger to log test results. The test runner will
     * guard against race conditions when re-running tests in watch mode while reporting.
     *
     * @param logger the logger to use for logging tests
     * @param testFile the test file to report for
     * @param sessionsForTestFile the sessions for this test file. each browser is a
     * different session
     */
    async reportTestFileResults({ logger, sessionsForTestFile, testFile }) {
      if (!reportResults) {
        return;
      }
      const testReport = await generateTestReport(
        testFile,
        sessionsForTestFile
      );

      logger.group();
      console.log(testReport);
      logger.groupEnd();
    },
  };
}