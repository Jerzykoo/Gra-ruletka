export class Check{
    constructor(noSelectedElement,resultInfo){
        this.noSelectedElement = noSelectedElement;
        this.resultInfo = resultInfo;
    }

    checkRules(bid, optionsClicked, elementsClicked, money){
        let result = true;

        if(bid === ''){
            this.noSelectedElement.innerHTML = 'Wpisz kwote zakładu!';
            this.noSelectedElement.style.display = 'block';
            result = false;
         }
     
        if(optionsClicked === ''){
            this.noSelectedElement.innerHTML = 'Wybierz co chcesz obstawić!'
            this.noSelectedElement.style.display = 'block';
            result = false;
        }

        let moneyToRisk = bid*(optionsClicked.length + elementsClicked.length);
console.log(moneyToRisk,money);

        if(moneyToRisk>money){
            this.noSelectedElement.innerHTML = 'Masz za mało pieniędzy!';
            this.noSelectedElement.style.display = 'block';
            this.resultInfo.style.display = "none";
            result = false;
        }
        // console.log(moneyToRisk);

        if(!result){
            return false;
        }else{
            return true;
        }
      
    
    }

 
}