const quiz = [
 {
               question: "Q1: 1024 bit is equal to how many byte? ",
               n:"Question 1 0f 10",
               a: "1 Byte",
               b: "128 Byte",
               c: "32 Byte",
               d: "64 Byte",
               ans: "ans2"
},
{
               question: "Q2: Which of the following is not an operating system? ",
               n:"Question 2 0f 10",
               a: "DOS",
               b: "Mac",
               c: "C",
               d: "Linux",
               ans: "ans3"
},
{
               question: "Q3: Firewall in computer is used for? ",
               n:"Question 3 0f 10",
               a: "Data Transmission",
               b: "Authentication",
               c: "Security",
               d: "Monitoring",
               ans: "ans3"

},
{
               question: "Q4: Which of the following is not a database management software? ",
               n:"Question 4 0f 10",
               a: "MySQL",
               b: "Oracle",
               c: "Sybase",
               d: "COBOL",
               ans: "ans4"
},
{
               question: "Q5: Mac Operating System is developed by which company? ",
               n:"Question 5 0f 10",
               a: "IBM",
               b: "Apple",
               c: "Microsoft",
               d: "Samsung",
               ans: "ans2"
},
{
               question: "Q6: In computer world, Trojan refer to? ",
               n:"Question 6 0f 10",
               a: "Malware",
               b: "Virus",
               c: "Worm",
               d: "Spyware",
               ans: "ans1"
},
{
               question: "Q7: Which computer program converts assembly language to machine language? ",
               n:"Question 7 0f 10",
               a: "Interpreter",
               b: "Compiler",
               c: "Assembler",
               d: "Comparator",
               ans: "ans3"
               
},
{
               question: "Q8: A computer use which type of number system to calculate and store data? ",
               n:"Question 8 0f 10",
               a: "decimal",
               b: "binary",
               c: "hexadecimal",
               d: "octal",
               ans: "ans2"
},
{
               question: "Q9: What is the binary value of 'A'? ",
               n:"Question 9 0f 10",
               a: "01000100",
               b: "11000001",
               c: "01100001",
               d: "01000001",
               ans: "ans4"
},
{
               question: "Q10: Errors in computer program are called? ",
               n:"Question 10 0f 10",
               a: "Follies",
               b: "Mistake",
               c: "Bugs",
               d: "Spam",
               ans: "ans3"
}
];

const question = document.querySelector('.question');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit= document.querySelector('#submit');
const progress = document.querySelector('#progress');

const answers = document.querySelectorAll('.answer')
const showscore = document.querySelector('#showScore');
const Next = document.querySelector('#next');
const Previous = document.querySelector('#prev');


let questionCount = 0;
let score = 0;
const loadQuestion = () => {
               const questionList = quiz[questionCount];
               question.innerHTML= questionList.question;
               progress.innerHTML = questionList.n;

               option1.innerHTML = questionList.a;
               option2.innerHTML = questionList.b;
               option3.innerHTML = questionList.c;
               option4.innerHTML = questionList.d;

}
 
  loadQuestion();


   const getCheckAnwer = () =>{
         let answer;
         answers.forEach((CurAnsElem) => {
               if(CurAnsElem.checked){
                              answer = CurAnsElem.id;

               }
               
         });
         return answer;

  };

  const deselectAll = () =>{
               answers.forEach((CurAnsElem) => CurAnsElem.checked = false );

  }

//   Next.addEventListener('click',() =>{
//       questionCount++;
//       deselectAll();
//       if(questionCount< quiz.length){
//             loadQuestion();
//       }
//       else{
//             showScore.innerHTML = ` <h3>You Scored ${score}/${quiz.length}</h3>
//             <button class="btn" onclick = "location.reload()"> Play Again👍</button>`;

//             showScore.classList.remove('scoreArea');
// }
//   });

  Previous.addEventListener('click',()=>{
      questionCount--;
      if(questionCount>=0){
            loadQuestion();
      }
  });

  
  submit.addEventListener('click', ()=>{
               const checkedAnswer = getCheckAnwer();
               console.log(checkedAnswer);

               if(checkedAnswer=== quiz[questionCount].ans){
                              score++;
               };

               questionCount++;
         
               deselectAll();
               if(questionCount< quiz.length){
               loadQuestion();
               }else{
                              showScore.innerHTML = ` <h3>You Scored ${score}/${quiz.length}</h3>

                              <button class="btn" onclick = "location.reload()"> Play Again👍</button>`;

                              showScore.classList.remove('scoreArea');
                              clearInterval(myt);
               }
  });

  const quiztimeinMin = 10;
  let time = quiztimeinMin*60;
   let counting = document.getElementById('countdown');
   let stopinterval=document.getElementById('submit')

 const myt= setInterval(updateCountdown,1000);

  function updateCountdown(){

    const minute  = Math.floor(time/60);
    let seconds = time % 60;
    counting.innerHTML=`${minute}: ${seconds}`;
    time--;
    if(time<0){
        clearInterval(myt);
        counting.style.innerHTML='00:00';
        submit.click();
        showscore.innerHTML=`<h3> you Scored ${score}/${quiz.length}</h3>
        <button class="btn" onclick ="location.reload()"> Play Again ✌</button>`;
        showscore.classList.remove('socrearea');
    }
    } 