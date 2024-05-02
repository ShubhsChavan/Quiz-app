const quesJSON = [
    {
      correctAnswer: 'Three ',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      correctAnswer: 'L. Frank Baum',
      options: [
        'Suzanne Collins',
        'James Fenimore Cooper',
        'L. Frank Baum',
        'Donna Leon',
      ],
      question:
        "Which author wrote 'The Wonderful Wizard of Oz'?",
    },
    {
      correctAnswer: 'Atlanta United',
      options: [
        'Atlanta United',
        'Atlanta Impact',
        'Atlanta Bulls',
        'Atlanta Stars',
      ],
      question:
        'Which of these is a soccer team based in Atlanta?',
    },
    {
      correctAnswer: 'A Nanny',
      options: [
        'A Sow',
        'A Lioness',
        'A Hen',
        'A Nanny',
      ],
      question: 'A female goat is known as what?',
    },
    {
      correctAnswer: 'P. L. Travers',
      options: [
        'J. R. R. Tolkien',
        'P. L. Travers',
        'Lewis Carroll',
        'Enid Blyton',
      ],
      question:
        "Which author wrote 'Mary Poppins'?",
    },
  ];

  //Accessing the elements
  const ques=document.getElementById("quest");
  const multipleopt=document.getElementById("options");
  const button=document.getElementById("button");
  let scoreEl=document.getElementById("score");
  let index=0; 
  let totalScore=quesJSON.length;
  let score=0;

  function displayQuestion(index){
    const{correctAnswer, options, question} = quesJSON[index];
    ques.textContent=question;
    
    multipleopt.textContent='';

    for(var temp of options){
      const opt=document.createElement("button");
      opt.innerHTML=temp;
      multipleopt.append(opt);

      opt.addEventListener("click", () => {
        if(temp === correctAnswer){
            score++;
        }
        else{
            score=score-0.25;
        }
        scoreEl.textContent = `Score: ${score} / ${totalScore}`;   
     nextQuestion();
        });

    }

    button.addEventListener('click', nextQuestion);
  }

  function nextQuestion(){
   
    index=index+1;
    if(index<quesJSON.length){
      displayQuestion(index);
    }
    if(index==quesJSON.length){
      ques.textContent='Quiz Completed!!';
      multipleopt.textContent='';
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      button.remove();
    }
  }

  displayQuestion(0);