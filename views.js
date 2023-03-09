

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



function ResultPageView(){

    let container = document.createElement("div")
    let utloging = document.createElement("button")
    let getPdf = document.createElement("button")
    let shareLink = document.createElement("button")

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

            let percentBar = document.createElement("div")
            percentBar.style.backgroundColor = 'green'
            percentBar.style.width = model.questions[i].answers[j].counter / voteCount * 100

            aCount.appendChild(percentBar)
            qCard.appendChild(aText)
            qCard.appendChild(aCount)
            qCard.appendChild(countPercent)
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