const scanner = require('sonarqube-scanner');
scanner(
  {
  serverUrl: "http://localhost:9000",
  options: {
    "sonar.sources": "./src",
    "sonar.login": "squ_8a58ec33a1b16ef222bc6ac7454358605801c636",
    "sonar.exclusions": "**/*.test.tsx",
    "sonar.tests": "./src",
    "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
    "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.testExecutionReportPaths": "test-report.xml",
    "sonar.eslint.reportPaths":"eslint-report.json"
  },
},
() => process.exit()
);