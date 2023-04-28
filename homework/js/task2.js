let nStart = 8;
let attemptsStart = 3;
let sumPrizeStart = 0;
let n = nStart;
let attempts = attemptsStart;
let sumPrize = sumPrizeStart;
let rangeGap = 4;
let prizeGap = 2;
let maxPrize = 100;
let prizesStart = [maxPrize/prizeGap/prizeGap, maxPrize/prizeGap, maxPrize];
let prizes = prizesStart;

function start(){
    let userAnswer = confirm('Do you want to play a game?');
    if (!userAnswer){
        alert('You did not become a billionaire, but can');
    } else{
        game();
    }
}

function game(){
    let curPrize= prizes[attempts-1];
   
    let number = Math.floor(Math.random() * n+1);
    console.log(number);
    let userNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to ${n}\n`+
                                        `Attempts left: ${attempts}\n`+
                                        `Total prize: ${sumPrize}$\n`+
                                        `Possible prize on current attempt: ${curPrize}$`));
    if(isNaN(userNumber)){
        alert('Invalid input data');
    }else{
        if(userNumber!==number){
            attempts--;
            if(attempts===0){
                sumPrize = sumPrizeStart;
                n = nStart;
                attempts = attemptsStart;
                sumPrize = sumPrizeStart;
                prizes = prizesStart;
                curPrize= prizes[attempts-1];
            }
            endGame(sumPrize);
        }else{
            sumPrize+=curPrize;
            alert(`Congratulation, you won! Your prize is: ${sumPrize}$`);
            attempts = attemptsStart;
            n+=rangeGap;
            prizes = prizes.map(function(el){
                return el*prizeGap;
            });
            console.log(prizes);
            
            start();
        }
    }
}

function endGame(sumPrize){
    alert(`Thank you for your participation. Your prize is: ${sumPrize}$`);
    start();
}

start();