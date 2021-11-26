export class Draw{
    constructor(){
    this.tableElements = [...document.querySelectorAll('.number')].length;
    }

    drawElements(){
        let randomNumber = Math.floor(Math.random()*this.tableElements);
        return randomNumber;
    }

}