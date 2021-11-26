import {Result} from './Result.js';

export class Wallet extends Result{
    constructor(playerStartMoney){
        super();
       this.money = playerStartMoney;

    }

    changeMoney(bid,optionsClicked,elementsClicked){
        if(this.money<bid){
            alert('Nie masz tyle pieniedzy :(')
            return;
        }

        let wonMoney = this.calculateMoney(optionsClicked,elementsClicked,bid);

        this.removeMoneyFromWallet(bid,optionsClicked,elementsClicked);

        
        this.addMoneyToWallet(wonMoney);
        
        this.setMoneyValue();
    }

    setMoneyValue(){
        document.querySelector('span.money').innerText = this.money;
    }

    addMoneyToWallet(wonMoney){
            this.money+=wonMoney;
    }

    removeMoneyFromWallet(bid,optionsClicked,elementsClicked){
            this.money-=bid*(optionsClicked.length + elementsClicked.length);
        
    }

  

}