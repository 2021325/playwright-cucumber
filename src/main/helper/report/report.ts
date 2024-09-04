const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Dummy test report",
    displayDuration: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "127",
        },
        device: "This PC",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Test Application" },
            { label: "Release", value: "1.1.1" },
            { label: "Cycle", value: "Smoke" }
        ],
    },
});