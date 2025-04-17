export class Quiz{
    constructor(config)
    {
        this.questions=config.questions
        this.questionContainer=config.questionContainer
    }
    init()
    {
        console.log( this.questions)
        this.displayQuestion();
    }
    displayQuestion()
    {
        let output=" "
        this.questions.forEach((question,questionNumber) => {
            output +=`
              <div class="card border-primary mb-3" >
            <div class="card-header">${questionNumber+1} :${question.title} = ???</div>
            <div class="card-body">
                <fieldset>
                    <legend class="mt-4">Radio buttons</legend>
                    <div class="form-group userAnswers">
                    <span class="badge bg-success hide">Correct</span>
                    <span class="badge bg-danger hide">Not Correct</span>
                    ${this.displayAnswer(question.answers,questionNumber)}
                </div>
                  </fieldset>

            </div>
        </div>
            `
        });
        this.questionContainer.innerHTML=output

    }
    
    displayAnswer(answers,questionNumber)
    {
        let output=" ";
        for(let key in answers)
        {
            output+=`
    <div class="form-check">
      <input class="form-check-input" type="radio" name="q${questionNumber}" id="q${questionNumber}${key}" value=${key} checked="">
      <label class="form-check-label" for="q${questionNumber}${key}">
        ${answers[key]}
      </label>
    </div>
            `
        }
        return output
    }
    collectUserAnswer()
    {
        const userAnswers=document.querySelectorAll(".userAnswers")
        let currentAnswer='';
        let correctAnswer=0
        this.questions.forEach((question,questionIndex)=>
        {
            currentAnswer=userAnswers[questionIndex].querySelector("input[type=radio]:checked").value;
            if(currentAnswer==question.correctAnswer)
            {
                correctAnswer++;
                userAnswers[questionIndex].querySelector(".bg-success").classList.remove('hide');
            }
            else 
            {
                userAnswers[questionIndex].querySelector(".bg-danger").classList.remove('hide');

            }
        })
        this.displayResult(correctAnswer)

    }
    displayResult(correctAnswer)
    {
        document.querySelector(".result").innerHTML= `<h1 class="text-center">${correctAnswer}/${this.questions.length}</h1>`
    }
}