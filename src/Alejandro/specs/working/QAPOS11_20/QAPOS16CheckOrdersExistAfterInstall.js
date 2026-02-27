describe('Verifica que ordenes existan despues de instalar.', () => {

    it('TC0001: Verifica que las ordenes exiten despues de instalar.', async () => {
        await $('//android.widget.Button[@resource-id="com.juvomos.pos:id/btnOrderRecall"]').click()
        await $('(//android.view.ViewGroup[@resource-id="com.juvomos.pos:id/layout_check_detail_item"])[1]').waitForDisplayed({timeout:30000})
        await $('//android.widget.ImageView[@resource-id="com.juvomos.pos:id/imgCloseButtonSecondary"]').click()
    })
})
