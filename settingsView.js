
function lagetQuestions(){
    let container = document.createElement('div');

    for(let i = 0; i < model.questions.length; i++){
       
        
        let box = document.createElement('div');
        box.className = 'questionContainer';

        let questionTitle = document.createElement('h4');
        questionTitle.textContent = model.questions[i].question;
        box.appendChild(questionTitle);

        for(let j = 0; j < model.questions[i].answers.length; j++){

            let boxChild = document.createElement('li');
            boxChild.textContent = model.questions[i].answers[j].title + ' ';
            boxChild.className = 'answers';

            let deleteAnswerButton = document.createElement('button');
            deleteAnswerButton.className = 'deleteAnswerButtons';
            deleteAnswerButton.textContent = ' X ';
            deleteAnswerButton.setAttribute('onclick', `deleteAnswerAdmin(${i}, ${j})`)
            
            
            
            boxChild.appendChild(deleteAnswerButton);
            box.appendChild(boxChild);
            
        }

        let giTillatText = document.createElement('p');
        giTillatText.textContent = 'Tillat brukerdefinert svar';

        let giTillatBoks = document.createElement('input');
        giTillatBoks.setAttribute('type', 'checkbox');
        giTillatBoks.checked = model.questions[i].textBox;
        giTillatBoks.setAttribute('onchange', `giTillatBoksChange(${i}, this.checked)`);
  

        giTillatText.appendChild(giTillatBoks);

        let nyttSvar = document.createElement('p');
        nyttSvar.textContent = 'Nytt svar: ';

        let nyttSvarBoks = document.createElement('input');
        nyttSvarBoks.setAttribute('type', 'text');
        nyttSvarBoks.setAttribute('onchange', `nyttSvarInput(${i}, this.value)`);


        nyttSvar.appendChild(nyttSvarBoks);

        let tid = document.createElement('p');
        tid.textContent = 'Deadline: ';
        tid.style.display = 'inline';

        let deadlineNow = document.createElement('span');
        deadlineNow.textContent = model.questions[i].deadline + ' ';

        tid.appendChild(deadlineNow);

        let tidEndreButton = document.createElement('button');
        tidEndreButton.textContent = 'Endre';
        tidEndreButton.setAttribute('onclick', `endreDato(${i})`);
        tid.appendChild(tidEndreButton);

        let tidinput = document.createElement('input');

        if (model.inputs.adminPage.settingsPage.questions[i].changeTimeAndDate) {

            
            tidinput.setAttribute('type', 'date');
            tidinput.setAttribute('onchange', `newDeadline(${i}, this.value)`);

            
            tid.appendChild(tidinput);
        }

        if (model.inputs.adminPage.settingsPage.questions[i].newDeadline && 
            tidinput.parentElement == tid) {
            model.inputs.adminPage.settingsPage.questions[i].changeTimeAndDate = false;
            
            tid.removeChild(tidinput);

        }

        let buttonContainer = document.createElement('h5');
        buttonContainer.style.margin = "10px";
        

        let låsEllerÅpen = document.createElement('button');
        if (model.questions[i].available) {
            låsEllerÅpen.textContent = 'Lås avstemning';
            låsEllerÅpen.setAttribute('onclick', `closeOrOpen(${i})`);
            
        }
        else {
            låsEllerÅpen.textContent = 'Åpen avstemning';
            låsEllerÅpen.setAttribute('onclick', `closeOrOpen(${i})`);
        }

        buttonContainer.appendChild(låsEllerÅpen);

        box.appendChild(giTillatText);
        box.appendChild(nyttSvar);
        box.appendChild(tid);
        box.appendChild(buttonContainer);
        container.appendChild(box);
        
    }
    return container;
}

