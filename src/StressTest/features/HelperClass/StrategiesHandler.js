import { assert } from 'node:console'


class StrategiesHandler {
    constructor(){
        this.defaultTimeout = 10000;
        this.result = {
            ok:     (value) => this.result_factory(true,value),
            error:  (value) => this.result_factory(false,value)
        }
        this.strategies = undefined
        this.actions = {
            exist:             async (elm)          => !!(await $(elm)) === true,
            click:             async (elm)          =>    await $(elm).click(),
            clearValue:        async (elm)          =>    await $(elm).clearValue(),
            getText:           async (elm)          =>    await $(elm).getText(),
            isDisplayed:       async (elm)          =>    await $(elm).isDisplayed(),
            isEnabled:         async (elm)          =>    await $(elm).isEnabled(),
            isSelected:        async (elm)          =>    await $(elm).isSelected(),
            tap:               async (elm)          =>    await $(elm).touchAction('tap'),
            longPress:         async (elm)          =>    await $(elm).touchAction('longPress'),
            getAttribute:      async (elm, attr)    =>    await $(elm).getAttribute(attr),
            setValue:          async (elm, text)    =>    await $(elm).setValue(text),
            addValue:          async (elm, text)    =>    await $(elm).addValue(text),
            // Esta funcionalidad esta pendiente
            // waitForDisplayed:  async (elm, timeout) => await elm.waitForDisplayed({ timeout:timeout || this.defaultTimeout })
        };
    }

     strategies_not_exist(strategy){
       return !this.strategies[strategy]
    }

    result_factory(status,value){
        return { isok:status, result: value } 
    }

    async execute(strategy, param) {
            const strategies      = this.get_strategies_names()
            if (this.strategies_not_exist(strategy)) {
                return this.result.error(`[ERROR] La estrategia "${strategy}" no existe.`)
            }

            // Estas acciones se modificaran a futuro
            const { action, elm } = await this.strategies[strategy]
            const nelm            = await this.actions['exist'](elm)
            if(nelm){
                const act         = await this.actions[action]  // Obtengo la accion
                const result      = await act(elm,param)        // La ejecuto y obtengo el resultado
                return await this.result.ok(result)
            }
           return this.result.error(`[ERROR] Falló ${strategy} con parametro(s): ${param}`)
    }

    get_strategies_names(){
        return Object.keys(this.strategies).join(', ')
    }
}

export default StrategiesHandler;
