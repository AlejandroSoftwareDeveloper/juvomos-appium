
class scrollTicketListDown {

async scrollListDown() {
    await driver.execute('mobile: scrollGesture', {
        left: 60,
        top: 650,
        width: 600,
        height: 400,
        direction: 'down',
        percent: 0.8
    });
}

   async scrollListToTop() {
        const list = await $('id=com.juvomos.pos:id/idTicketListRecycler');
        await list.waitForDisplayed({ timeout: 5000 });

        await driver.execute('mobile: scrollGesture', {
            elementId: list.elementId,
            direction: 'up',
            percent: 1.0
        });
    }

 }

module.exports = new scrollTicketListDown();