import '../css/bootstrap.min.css'
import '../css/style.css'


import {Quiz} from './Quiz'
import {Question}  from './Question'

const questionsCls =new Question();

const submitEle= document.querySelector('#submit')

const startEle= document.querySelector('#start')

const resEle=    document.querySelector(".result")

const quiz =new Quiz({
    questions:questionsCls.questions,
    questionContainer:document.querySelector(".questionContainer")
})

startEle.addEventListener('click',(event)=>
{
    quiz.init()
    event.target.classList.add('hide')
    submitEle.classList.remove('hide')
    resEle.classList.add("hide")

})


submitEle.addEventListener('click',(event)=>
    {
        quiz.collectUserAnswer()
        event.target.classList.add('hide')
        startEle.classList.remove('hide')
        resEle.classList.remove("hide")

    })