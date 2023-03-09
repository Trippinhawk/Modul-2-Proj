

const infoDiv = document.getElementById('app');

function updateView(){
    infoDiv.innerHTML = ""

    switch(model.app.currentView){
        case "LandingPage":
            infoDiv.appendChild(LandingPageView());
            break;
        case "AddQuestion":
            infoDiv.appendChild(addQuestionView());
            break;

    }
    
}
function LandingPageView(){
    model.app.currentView = "Landingpage";

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
model.app.currentView = "AddQuestion";

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
    model.inputs.adminPage.settingsPage.addQuestion.answers.push({title:answerInput.value, counter:0});
}


let addAnswer = document.createElement("button")
addAnswer.textContent = "Legg til svar"
answerInputContainer.appendChild(addAnswer);
container.appendChild(answerInputContainer);
addAnswer.onclick=function() {
    model.inputs.adminPage.settingsPage.addQuestion.answers.push({title:answerInput.value, counter:0});
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
creativetext.onchange = function(){
if (creativetext.checked)
{model.inputs.adminPage.settingsPage.addQuestion.textBox = true}
else {model.inputs.adminPage.settingsPage.addQuestion.textBox = false;}
}
creativecontainer.appendChild(creativetext);



return container;

}

