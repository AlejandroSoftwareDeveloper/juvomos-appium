class ET {

    constructor(){
        this.failed = false
        this.fail_test_name = ''
    }

    test_fail(){
       this.failed = true
    }

    reset_bot(){
        this.failed = false
        this.fail_test_name = ''
    }

    async return_home(){

    }


}

export default new ET()
