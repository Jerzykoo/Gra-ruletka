import {Draw} from './Draw.js';

export class Result extends Draw{
    constructor(){
        super();
        this.resulTitle = document.querySelector('.resultTitle');
        this.randomNumber = document.querySelector('.randomNumber');
        this.randomNumberInfo = document.querySelector('.randomNumberInfo');
        this.numbers = document.querySelectorAll('.number');
    }

    calculateMoney(optionsClicked,elementsClicked,bid){
        let randomNumber = this.drawElements();
        let moneyWon = 0;

        let result = false;


        optionsClicked.forEach((option)=>{

            if(option.innerText === 'Parzyste'){
                if(randomNumber%2===0 && randomNumber!==0){
                    console.log('Parzyste',randomNumber);
                    moneyWon += bid*2;
                    result = true;
                }
            }else if(option.innerText === '1-18'){
                if(randomNumber>=1 && randomNumber<=18){
                    console.log('1-18',randomNumber);
                    moneyWon += bid*2;
                    result = true;
                }
            }else if(option.innerText === '19-36'){
                if(randomNumber>=19 && randomNumber<=36){
                    console.log('19-36',randomNumber);
                    moneyWon += bid*2;
                    result = true;
                }
            }else if(option.innerText === 'Nieparzyste'){
                if(randomNumber%2!==0){
                    console.log('Nieparzyste',randomNumber);
                    moneyWon += bid*2;
                    result = true;
                }
            }else if(option.innerText === 'Czerwone'){
                if([...this.numbers[randomNumber].classList].includes('red')){
                        console.log('Czerwone',randomNumber);
                        moneyWon += bid*2;
                        result = true;
                    }
                }
            else if(option.innerText === 'Czarne'){
                if([...this.numbers[randomNumber].classList].includes('black')){
                    console.log('Czarne',randomNumber);
                    moneyWon += bid*2;
                    result = true;
                }
            }
        })
      

        elementsClicked.forEach((element)=>{
            if([...element.classList].includes('numberClicked')){
                if(element.innerText*1 === randomNumber){
                    moneyWon+=bid*36;
                    result = true;
                }
                
            }
        })

        console.log(moneyWon);
        
     
   
        this.setRandomNumberInfo(randomNumber,result);
        return moneyWon;
    
    }

    setRandomNumberInfo(randomNumber,result){
        if(result === true){
        this.resulTitle.innerHTML = 'Wygrałeś!';
        this.resulTitle.style.color = "green";
        }else{
            this.resulTitle.innerHTML = 'Przegrałeś!';
            this.resulTitle.style.color = "red";
        }

        this.randomNumber.innerHTML = randomNumber;
        this.randomNumberInfo.style.display = 'block';
    }

  

}