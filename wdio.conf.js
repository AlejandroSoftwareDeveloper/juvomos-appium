const allure = require('allure-commandline')
const chai   = require('chai')
const allure_report = 1

exports.config = {
    port: 4723,
    specs: [
        // './test/specs/register_and_login_test/*',

// './test/specs/register_and_login_test/TS0001LicenseInstalationProcess.js',
// './test/specs/register_and_login_test/TS0002PinRegistration.js',
// './test/specs/register_and_login_test/TS0003StartWorkTime.js',
// './test/specs/register_and_login_test/TS0004InitBreakIn.js',
// './test/specs/register_and_login_test/TS0005FinishBreakIn.js',
// './test/specs/register_and_login_test/TS0006CashTipsRegister.js',
// './test/specs/register_and_login_test/TS0007FinishWorkTime.js',

        './test/specs/accounts_tests/*',
    // './test/specs/accounts_tests/TS0008SearchProductFromFood.js',
    // './test/specs/accounts_tests/TS0010SendFoodToKitchen.js',
    // './test/specs/accounts_tests/TS0012SendFoodToKitckenWithDiscount.js',
    // './test/specs/accounts_tests/TS0013TransferProductToAccount.js',
    // './test/specs/accounts_tests/TS0014TransferAccountToAccount.js',
    // './test/specs/accounts_tests/TS0015TransferAccountToEmployee.js',
    // './test/specs/accounts_tests/TS0016CancelAccount.js',
    // './test/specs/accounts_tests/TS0017CancelProduct.js',
    // './test/specs/accounts_tests/TS0022TransferMultipleProductBetweenAccount.js',
    // './test/specs/accounts_tests/TS0019CreateAndOrderTable.js',

        // './test/specs/register_and_login_test/TS0002PinRegistration.js',
        // './test/specs/accounts_tests/TS0014TransferAccountToAccount.js',
        // './test/specs/accounts_tests/TS0015TransferAccountToEmployee.js',
        // './test/specs/accounts_tests/TS0017CancelProduct.js',
        // './test/specs/accounts_tests/TS0018TransferAccountToDineIn.js',
        // './test/specs/accounts_tests/TS0021AccountNumberQAPOS4.js',
        // './test/specs/accounts_tests/TS0008SearchProductFromFood.js',
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
        allure_report ?  ([
            ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
            disableMochaHooks:true,
            addConsoleLogs: true, // Attach console logs to reports
            reportedEnvironmentVars: {
                'NODE_VERSION': process.version,
                'BROWSER': 'chrome'
            }
        }]
        ]) : (['spec']),

    onComplete: function() {
        if(allure_report){
            const reportError = new Error('Could not generate Allure report')
            const generation = allure(['generate', 'allure-results', '--clean'])
            return new Promise((resolve, reject) => {
                const generationTimeout = setTimeout(
                    () => reject(reportError),
                    5000)
                generation.on('exit', function(exitCode) {
                    clearTimeout(generationTimeout)

                    if (exitCode !== 0) {
                        return reject(reportError)
                    }
                    console.log('Allure report successfully generated')
                    resolve()
                })
            })
         }
    },
    before: function(){
      global.chai = chai
      global.env = this
    }
}
