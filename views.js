

const infoDiv = document.getElementById('app');

function updateView(){
    infoDiv.innerHTML = ""

    switch(model.app.currentView){
        case "LandingPage":
            infoDiv.appendChild(LandingPageView())
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

