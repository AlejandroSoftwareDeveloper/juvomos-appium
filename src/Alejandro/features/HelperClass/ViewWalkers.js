class ViewWalker {

    constructor(){
        this.Result = {
            ok:(value) => {isOk:true,value},
            error:(value) => {isOk:false,value}
        }
    }

    execute(fn,params){
       try {
            this[fn](params)
            return this.Result.ok(`la funcion "${fn.name}" se ejecuto correctamente.`) 
        }catch(err){
            return this.Result.error(err)
       }
    }
}

export default ResultPattern
