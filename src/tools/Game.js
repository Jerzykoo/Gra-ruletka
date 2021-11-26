import {Wallet} from './Wallet.js';
import {Check} from './check.js';
export default class Game{
    constructor(choices,input,playBtn,playerStartMoney,noSelectedElement,numbers,resultInfo){
        this.choices = [...choices];
        this.inputValue = input;
        this.playBtn = playBtn;
        this.userWallet = new Wallet(playerStartMoney);
        this.check = new Check(noSelectedElement,resultInfo);
        this.noSelectedElement = noSelectedElement;
        this.numbers = numbers;
        this.someOptionIsClicked = false;
        this.elementsClicked = [];
        this.optionsClicked = [];
        this.resultInfo = resultInfo;
    }
    

    start(){
        this.addEventListeners();
  
    }

    addEventListeners(){
        this.choices.forEach((option)=>{
            option.addEventListener('click',()=>{
                if([...option.classList].includes('optionClicked')){
                    option.classList.remove('optionClicked');
                    this.optionsClicked.forEach((elementClicked,index)=>{
                        if(elementClicked === option){
                            this.optionsClicked.splice(index,1);
                        }
                    })
                 }else{
                    option.classList.add('optionClicked');
                    this.optionsClicked.push(option);
                 }
               
            })
         })

         this.numbers.forEach((element)=>{
             element.addEventListener('click',()=>{
                 if([...element.classList].includes('numberClicked')){
                    element.classList.remove('numberClicked');
                    this.elementsClicked.forEach((elementClicked,index)=>{
                        if(elementClicked === element){
                            this.elementsClicked.splice(index,1);
                        }
                    })
                 }else{
                    element.classList.add('numberClicked');
                    this.elementsClicked.push(element);
                 }
                
             })
         })


         this.playBtn.addEventListener('click',()=>{
            this.noSelectedElement.style.display = 'none';
            this.resultInfo.style.display = "block";
            //  console.log(this.elementsClicked);
            if(!this.check.checkRules(this.inputValue.value*1,this.optionsClicked,this.elementsClicked,this.userWallet.money)){
                return;
            }


            

            this.userWallet.changeMoney(this.inputValue.value*1,this.optionsClicked,this.elementsClicked);
        })

         
    }


}