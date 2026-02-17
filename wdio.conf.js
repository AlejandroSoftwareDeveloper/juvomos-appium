const allure = require('allure-commandline')
const chai   = require('chai')

const configspecs = {
     allure_report: false,
};

const _url = {
    "alejandro": './src/Alejandro/specs/working/',
    "ana": './src/Ana/specs/working/',
}

exports.config = {
    port: 4723,
    specs: [
        // _url.alejandro + 'QAPOS189_194/QAPOS190PinRegistration.js',
        // _url.alejandro + 'QAPOS189_194/*', // Auth (7)
        // _url.alejandro + 'QAPOS01_10/*',   //      (1)
        // _url.alejandro + 'QAPOS121_130/*', //      (1)
        // _url.alejandro + 'QAPOS131_140/*', //      (0)
        // _url.alejandro + 'QAPOS141_150/*', //      (0)
        // _url.alejandro + 'QAPOS171_180/*',
        // _url.alejandro + 'QAPOS181_188/*', // Revisar estas hoy, hay una que da problema
        // _url.alejandro + 'QAPOS195_200/*',
        // _url.alejandro + 'QAPOS200_210/*',
        // './src/Alejandro/specs/working/INITPOS.js',
         _url.alejandro + 'INITPOS.js',
        './src/Ana/specs/*.js',
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
      global.env  = this
    }
}
