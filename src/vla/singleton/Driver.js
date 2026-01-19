const wdio = require("webdriverio");

class DriverSingleton {
    static driver;

    static async getDriver() {
        if (!DriverSingleton.driver) {
            DriverSingleton.driver = await wdio.remote({
                path: "/",
                port: 4723,
                capabilities: {
                    platformName: 'Android',
                   'appium:platformVersion': '11',
                   'appium:deviceName': 'VGAI6LJZ7H6HVSAE',
                   'appium:automationName': 'UiAutomator2',
                   'appium:app': 'E:/TEST/APPIUM/appium-tests/apk/JuvoPOS-2.6.1.9-PREPROD_010820261208_36_28.apk',
                   'appium:appWaitActivity': '.features.main.main.ui.MainActivity',
                   'appium:noReset': true
                }
            });
        }
        return DriverSingleton.driver;
    }

    static async quitDriver() {
        if (DriverSingleton.driver) {
            await DriverSingleton.driver.deleteSession();
            DriverSingleton.driver = null;
        }
    }
}

// Exporta la clase correctamente
module.exports = DriverSingleton;