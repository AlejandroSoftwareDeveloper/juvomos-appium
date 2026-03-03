const allure = require('allure-commandline')
const chai   = require('chai')

const configspecs = {
     allure_report: false,
};

const _url = {
    "ale": './src/Alejandro/specs/working/',
    "ana": './src/Ana/specs/*.js',  //  (22)
    // "vladimir": './src/Vladimir/specs/*.js',
    // "ana2": './src/Ana/specs2/*.js',
}

exports.config = {
    port: 4723,
    specs: [
        // _url.ale + 'QAPOS189_194/QAPOS190PinRegistration.js',



         _url.ale + 'QAPOS189_194/*',    // Auth (7) // Funcionan
         // _url.ale + 'INITPOS.js',        // Funcionan
         // _url.ale + 'QAPOS01_10/*',      // Funcionan
         // _url.ale + 'QAPOS11_20/*',      // Funcionan
         // _url.ale + 'QAPOS31_40/*',      // Funcionan
         // _url.ale + 'QAPOS121_130/*',    // funcionan
         // _url.ale + 'QAPOS131_140/*',    // Funcionan
         // _url.ale + 'QAPOS171_180/*.js', // (6) //Funcionan
         // _url.ale + 'QAPOS181_188/*.js', // (4) //Funcinan
         // _url.ale + 'QAPOS200_210/*.js', // (3) //Funcionan
         // _url.ana,                       // Faltan 2 30 Funcionan
        

        // _url.ale + 'QAPOS100_110/*', //      (3)  100 // Broken
        // _url.ale + 'QAPOS161_170/*.js', // Pending
        // _url.ale + 'QAPOS195_200/*', //      (5) // Me quede aqui en el 196
        // './src/Alejandro/specs/working/INITPOS.js'
        // './src/StressTest/specs/working/StressTest.js',


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

// Click en el frontend a 30 dias

