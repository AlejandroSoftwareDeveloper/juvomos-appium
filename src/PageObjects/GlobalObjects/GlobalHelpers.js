class Helper {
   async wait(time= 5000){
      await browser.pause(time);
   }
}

export default new Helper();
