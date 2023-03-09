

const infoDiv = document.getElementById('app');

function updateView(){
    infoDiv.innerHTML = ""

    switch(model.app.currentView){
        case "LandingPage":
            infoDiv.appendChild(LandingPageView())
            break
        case "AddQuestion":
            infoDiv.appendChild(addQuestionView())
            break
    }
    
}
function LandingPageView(){
    let container = document.createElement("div")

    for (let i = 0; i<model.questions.length; i++){
        let box = document.createElement("div")
        box.className="QuestionContainer"
        box.textContent = model.questions[i].question

        let list = document.createElement("div")

        for(let j=0;j<model.questions[i].answers.length;j++){
            let boxChild = document.createElement("div")
            boxChild.textContent = model.questions[i].answers[j].title

            let inputBoks = document.createElement("input")
            inputBoks.setAttribute("type","checkbox")
            inputBoks.textContent = model.questions[i].answers[j].title
            
            list.appendChild(inputBoks)
            box.appendChild(list)
        }
        container.appendChild(box)
    }
    return container
}
function addQuestionView(){

let container = document.createElement("div");
container.className = "AddQuestion";


let questionText = document.createElement("label")
questionText.setAttribute("for","questionInput");
questionText.textContent = "Spørsmål: ";
container.appendChild(questionText)

let questionInput = document.createElement("input");
questionInput.setAttribute("type", "text");
questionInput.setAttribute("placeholder", "Skriv spørsmålet her")
questionInput.onchange= function(){
    model.inputs.adminPage.settingsPage.addQuestion.question = questionInput.value;
}

container.appendChild(questionInput);

let answerInputContainer = document.createElement("div");
answerInputContainer.className = "AnswerInputContainer";


let answerText = document.createElement("label");
answerText.setAttribute("for","answerInput")
answerText.textContent = "Legg til svar: ";
container.appendChild(answerText);



let answerInput = document.createElement("input");
answerInput.setAttribute("type", "text");
answerInput.setAttribute("placeholder", "Skriv svar alternativer her")
container.appendChild(answerInput);
answerInput.onchange=function() {
    model.inputs.adminPage.settingsPage.addQuestion.addAnswer = answerInput.value;
}


let addAnswer = document.createElement("button")
addAnswer.textContent = "Legg til svar"
answerInputContainer.appendChild(addAnswer);
container.appendChild(answerInputContainer);
let flag = false;
addAnswer.onclick=function() {
    if(answerInput.value !== "")
    model.inputs.adminPage.settingsPage.addQuestion.answers.push({title:answerInput.value, counter:0});
    answerInput.value="";

}
//addAnswer.addEventListener("click",) //controller function)
let deadlineText= document.createElement("label");
deadlineText.setAttribute("for", "deadlineInput");
deadlineText.textContent="sett deadline her! ";
container.appendChild(deadlineText);

let deadlineInput = document.createElement("input");
deadlineInput.setAttribute("type","date")
deadlineInput.setAttribute("placeholder","skriv inn tidsfrist:");
deadlineInput.setAttribute("value", model.inputs.adminPage.settingsPage.addQuestion.deadLineTo)
deadlineInput.setAttribute("id", "deadlineInput");
deadlineInput.onchange= function (){
    model.inputs.adminPage.settingsPage.addQuestion.deadLineTo = deadlineInput.value;
};
container.appendChild(deadlineInput);

let creativecontainer = document.createElement("div");
container.appendChild(creativecontainer);

let labelForCreative = document.createElement("label");
labelForCreative.setAttribute("for", "creativetext");
labelForCreative.textContent="Egendefinerte svar? ";
creativecontainer.appendChild(labelForCreative);

let creativetext = document.createElement("input");
creativetext.setAttribute("type", "checkbox");
creativetext.textContent = "Tillat eget svar";
creativetext.oninput = function(){
if (creativetext.checked)
{model.inputs.adminPage.settingsPage.addQuestion.textBox = true}
else {model.inputs.adminPage.settingsPage.addQuestion.textBox = false;}
}
creativecontainer.appendChild(creativetext);

let createPoll = document.createElement("button")
createPoll.textContent = "Lagre meningsmåling";
createPoll.onclick = function (){createPoll()
   
}
container.appendChild(createPoll);



return container;

}



function ResultPageView(){

    let container = document.createElement("div")

    let utloging = document.createElement("button")
    utloging.onclick = function(){
        logout()
    }

    let getPdf = document.createElement("button")
    getPdf.onclick = function(){
        createPdf()
    }

    let shareLink = document.createElement("button")
    shareLink.onclick = function(){
        generateLink()
    }

    let settings = document.createElement("button")
    settings.onclick = function(){
        goToSettings()
    }
    
    let qBox = document.createElement("div")
    for(let i = 0; i<model.questions.length; i++){
        let qCard = document.createElement("div")

        qBox.appendChild(qCard)

        let qText = document.createElement("div")
        qText.textContent = model.questions[i].question
        qCard.appendChild(qText)

        let voteCount = 0;
        for(let j = 0; j<model.questions[i].answers.length; j++){
            voteCount += model.questions[i].answers[j].counter
        }

        for(let j = 0; j<model.questions[i].answers.length; j++){
            let aText = document.createElement("div")
            aText.textContent = model.questions[i].answers[j].title

            let aCount = document.createElement("label")
            aCount.textContent = model.questions[i].answers[j].counter

            let countPercent = document.createElement("label")
            countPercent.textContent = `${model.questions[i].answers[j].counter / voteCount * 100} %`

            let percentBarParent = document.createElement("div")

            let percentBar = document.createElement("div")
            percentBar.style.backgroundColor = 'green'
            percentBar.style.width = `${model.questions[i].answers[j].counter / voteCount * 100}%`

            qCard.appendChild(aText)
            qCard.appendChild(aCount)
            qCard.appendChild(countPercent)
            qCard.appendChild(percentBarParent)
            percentBarParent.appendChild(percentBar)
        }

        if(model.questions[i].available == false){

            let lockIcon = document.createElement("img")
            lockIcon.src = "lock.png"
            

            let deleteButton = document.createElement("button")
            deleteButton.onclick = function(){
                deleteQuestion(i)
            }

            let dateAndTime = document.createElement("input")
            dateAndTime.setAttribute("type","date")
            dateAndTime.oninput = function(){
                model.inputs.resultpage.currentQuestions[i].dateAndTime = this.value
            }

            let openPoll = document.createElement("button")
            openPoll.onclick = function(){
                reOpenPoll(i)
            } 
            
            qCard.appendChild(lockIcon)
            qCard.appendChild(deleteButton)
            qCard.appendChild(dateAndTime)
            qCard.appendChild(openPoll)
        }            
        
        
        

    }
    
    container.appendChild(settings)
    container.appendChild(getPdf)
    container.appendChild(shareLink)
    container.appendChild(utloging)
    container.appendChild(qBox)
    
    
    
    
    
    
    
    
    
}