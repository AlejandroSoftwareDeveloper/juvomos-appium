const allure = require('allure-commandline')

exports.config = {
    port: 4723,
    specs: [
        // './test/specs/TS0001LicenseInstalationProcess.js',
        // './test/specs/TS0002PinRegistration.js',
        // './test/specs/TS0003StartWorkTime.js',
        // './test/specs/TS0004InitBreakIn.js',
        // './test/specs/TS0005FinishBreakIn.js',
        // './test/specs/TS0006CashTipsRegister.js',
        // './test/specs/TS0007FinishWorkTime.js',
        // './test/specs/TS0009SendFoodToKitchen.js',
        // './test/specs/TS0011SendFoodToKitckenWithDiscount.js',
        // './test/specs/TS0012TransferProductToAccount.js',
        // './test/specs/TS0013TransferAccountToAccount.js',
        './test/specs/TS0014TransferAccountToEmployee.js',
        // './test/specs/TS0015CancelAccount.js',
        // './test/specs/TS0016CancelProduct.js',
    ],
    maxInstancesPerCapability:1,
    exclude: [/*'path/to/excluded/files'*/],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        'acceptInsecureCerts': true,
        'platformName': 'Android',
        'appium:platformVersion': '13',
        'appium:deviceName': 'R58RB0RJC8W',
        'appium:udid': 'R58RB0RJC8W',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.android.settings',
        'appium:appActivity': 'com.android.settings.Settings',
        'appium:noReset': true,
        'appium:newCommandTimeout': 300
    }],
    logLevel: 'info', //info o debug
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [ ['appium',{ command : 'appium', args : { port:4723, }, } ]],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
    reporters: 
    ['spec'],

// [
//         ['allure', {
//         outputDir: 'allure-results',
//         disableWebdriverStepsReporting: true,
//         disableWebdriverScreenshotsReporting: true,
//         disableMochaHooks:true,
//         addConsoleLogs: true, // Attach console logs to reports
//         reportedEnvironmentVars: {
//             'NODE_VERSION': process.version,
//             'BROWSER': 'chrome'
//         }
//     }]
// ],

    onComplete: function() {

        // const reportError = new Error('Could not generate Allure report')
        // const generation = allure(['generate', 'allure-results', '--clean'])
        // return new Promise((resolve, reject) => {
        //     const generationTimeout = setTimeout(
        //         () => reject(reportError),
        //         5000)
        //     generation.on('exit', function(exitCode) {
        //         clearTimeout(generationTimeout)
        //
        //         if (exitCode !== 0) {
        //             return reject(reportError)
        //         }
        //         console.log('Allure report successfully generated')
        //         resolve()
        //     })
        // })

    },
}
