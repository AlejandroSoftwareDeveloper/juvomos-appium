const allure = require('allure-commandline')
const chai   = require('chai')

const configspecs = {
     allure_report: true,
};

exports.config = {
    port: 4723,
    specs: [
        './src/Alejandro/specs/working/QAPOS189_194/*', // Auth (7)
        './src/Alejandro/specs/working/INITPOS.js',
        './src/Alejandro/specs/working/QAPOS121_130/*', //      (1)
        './src/Alejandro/specs/working/QAPOS131_140/*', //      (0)
        './src/Alejandro/specs/working/QAPOS141_150/*', //      (0)
        './src/Alejandro/specs/working/QAPOS171_180/*',
        './src/Alejandro/specs/working/QAPOS181_188/*', // Revisar estas hoy, hay una que da problema
        './src/Alejandro/specs/working/QAPOS195_200/*',
        './src/Alejandro/specs/working/QAPOS200_210/*',
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
        configspecs.allure_report ?  ([
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
        if(configspecs.allure_report){
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
