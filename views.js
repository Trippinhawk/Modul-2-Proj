function getElement(id){
    return document.getElementById(id);
}

const infoDiv = getElement('app');

function updateView(){
    infoDiv.innerHTML = ""

    switch(model.app.currentView){
        case "landingPage":
            infoDiv.appendChild(LandingPageView())
            break
    }
    
}

function LandingPageView(){
    let container = document.createElement("div")

    
    
    for (let i = 0; i<model.questions.length; i++){
        let box = document.createElement("div")
        box.textContent = model.questions[i]
        for(let j=0;j<model.questions[i].answers.length;i++){
            let boxChild = document.createElement("div")
            boxChild.textContent
        }
    }
    let list = document.createElement("ul")
    list.textContent = model.questions[i].question

    listElement = document.createElement("li")

    list.appendChild(listElement)
    box.appendChild(list);
    

    container.appendChild(box)
    return container
}