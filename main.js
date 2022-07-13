// --------------------- VARIABLES ---------------------

const questObject = [
    
    {
        num: '01',
        question: 'What Makes Things Change',
        optionOne: 'Playing',
        optionTwo: 'Football',
        optionThree: 'Swimming',
        optionFour: 'Hooking',
        Answer: 3
    },

    {
        num: '02',
        question: 'What is most important Subject',
        optionOne: 'Math',
        optionTwo: 'Arabic',
        optionThree: 'Englsih',
        optionFour: 'Biliogy',
        Answer: 2
    },

    {
        num: '03',
        question: 'What is the result of 2 + 5 * 3',
        optionOne: '12',
        optionTwo: '21',
        optionThree: '11',
        optionFour: '17',
        Answer: 4
    },

    {
        num: '04',
        question: 'Is it possible to climb averst',
        optionOne: 'Yes',
        optionTwo: 'No',
        optionThree: 'Maybe',
        optionFour: 'Immpossible',
        Answer: 1
    },

    {
        num: '05',
        question: 'What people do in their free time',
        optionOne: 'Playing',
        optionTwo: 'lestinng',
        optionThree: 'nothing',
        optionFour: 'All things',
        Answer: 3
    },

    {
        num: '06',
        question: 'What makes wordpress great choice',
        optionOne: 'Low price',
        optionTwo: 'large Community',
        optionThree: 'Very big developers',
        optionFour: 'Easy to learn',
        Answer: 2
    },
    
];
let indexO = 0;
let scoore = 0;
// --------------------- SELECTORS ---------------------
const StartBtn = document.getElementById('start-btn');
const NextBtn = document.getElementById('btn-next');
const gamePlayArea = document.getElementById('game-area');
const questionBtn = document.querySelectorAll('.question-btn');
const scooreNum = document.getElementById('scoore-num');


// QUESITONS SELCETION
const questionNum = document.getElementById('question-num'); 
const questionQu = document.getElementById('question-qu');
const questionOpOne = document.getElementById('question-op-1');
const questionOpTwo = document.getElementById('question-op-2');
const questionOpThree = document.getElementById('question-op-3');
const questionOpFour = document.getElementById('question-op-4');
// --------------------- EVENT LISTENRES ---------------------

StartBtn.addEventListener('click' , startGame );
NextBtn.addEventListener('click' , nextQuestion)
questionOpOne.addEventListener('click' , changeColorBtn)
questionOpTwo.addEventListener('click' , changeColorBtn)
questionOpThree.addEventListener('click' , changeColorBtn)
questionOpFour.addEventListener('click' , changeColorBtn)


// --------------------- FUCNTIONS ---------------------

function startGame() {
   
    gamePlayArea.classList.remove('game-paly');
    gamePlayArea.classList.add('show-game-paly');

    document.getElementById('game-starting-area').classList.add('hide');

}

function nextQuestion() {

    if (indexO < questObject.length) {
        indexO = indexO+1;
        console.log(indexO);
        changeQuestion();
    } else {
        NextBtn.classList.add('hide');
        gamePlayArea.classList.add('hide')
      //  gamePlayArea.classList.remove('show-gmae');
        document.getElementById('game-starting-area-2').classList.remove('hide');
        scooreNum.textContent = userChoice();
        

    }
   
}


function changeColorBtn(e) {
    
   
   e.target.classList.add('checkedBtn');
 
   removingClass();
   
 
}



function removingClass( ) {

    let u = 0;
    while (u < questionBtn.length) {

        if(!questionBtn[u].classList.contains('checkedBtn')) {
            questionBtn[u].classList.add('hide')
            questionBtn[u].classList.remove('show')
        
          
           
        }
        u = u+1;
       }
     
       userChoice();
       
}


// PLAYING GAME
document.getElementById('game-starting-area-2').classList.add('hide');
questionNum.textContent = questObject[indexO].num;
questionQu.textContent = questObject[indexO].question;
questionOpOne.textContent = questObject[indexO].optionOne;
questionOpTwo.textContent = questObject[indexO].optionTwo;
questionOpThree.textContent = questObject[indexO].optionThree;
questionOpFour.textContent = questObject[indexO].optionFour;

questionBtn[0].value = 1;
questionBtn[1].value = 2;
questionBtn[2].value = 3;
questionBtn[3].value = 4;

// END PLAYING GAME

function changeQuestion() {
    questionNum.textContent = questObject[indexO].num;
    questionQu.textContent = questObject[indexO].question;
    questionOpOne.textContent = questObject[indexO].optionOne;
    questionOpTwo.textContent = questObject[indexO].optionTwo;
    questionOpThree.textContent = questObject[indexO].optionThree;
    questionOpFour.textContent = questObject[indexO].optionFour;



    let fd = 0;
    while (fd < questionBtn.length) {
        questionBtn[fd].classList.add('show');
        questionBtn[fd].classList.remove('checkedBtn');
        questionBtn[fd].classList.remove('hide');
        questionBtn[fd].classList.remove('wrong-btn');
        questionBtn[fd].classList.remove('correct-btn');
    
     fd = fd+1;
    }

    

}

function userChoice() {
    let u = 0;
    while (u < questionBtn.length) {
      
   
            if (questionBtn[u].value == questObject[indexO].Answer ) {
                questionBtn[u].classList.add('correct-btn');
             
                if(questionBtn[u].classList.contains('checkedBtn')) {
                scooreNum.textContent = scoore+=10;
               
                }
               
            } 
            else if (questionBtn[u].value != questObject[indexO].Answer) {
                
                questionBtn[u].classList.add('wrong-btn');
            }
            else {
                alert("Your answer is not correct");
            }

         // return questionBtn[u].value;
      
        u = u+1;
       }
       
}



 



