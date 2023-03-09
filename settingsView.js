
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
            deleteAnswerButton.onclick = function(){
                model.questions[i].answers.splice(j, 1);
                updateView();
            };
            
            
            boxChild.appendChild(deleteAnswerButton);
            box.appendChild(boxChild);
            
        }

        let giTillatText = document.createElement('p');
        giTillatText.textContent = 'Tillat brukerdefinert svar';

        let giTillatBoks = document.createElement('input');
        giTillatBoks.setAttribute('type', 'checkbox');
        giTillatBoks.checked = model.questions[i].textBox;
        giTillatBoks.onchange = function(){
            model.questions[i].textBox = giTillatBoks.checked;
        };

        giTillatText.appendChild(giTillatBoks);

        let nyttSvar = document.createElement('p');
        nyttSvar.textContent = 'Nytt svar: ';

        let nyttSvarBoks = document.createElement('input');
        nyttSvarBoks.setAttribute('type', 'text');
        nyttSvarBoks.onchange = function(){
            let newAnswer =    {
                title: nyttSvarBoks.value,
                counter:0,
                checked: true,
            };
            model.questions[i].answers.push(newAnswer);
            updateView();
        }; 

        nyttSvar.appendChild(nyttSvarBoks);

        let tid = document.createElement('p');
        tid.textContent = 'Deadline: ';
        tid.style.display = 'inline';

        let tidinput = document.createElement('input');
        tidinput.setAttribute('type', 'date');
        tidinput.oninput = function(){
            model.questions[i].deadline = tidinput.value;
            
        };
        
        tid.appendChild(tidinput);

        let tidEndreButton = document.createElement('button');
        tidEndreButton.textContent = 'Endre';
        tidEndreButton.onclick = function(){
            tidEndreButton.textContent = 'Save';
            updateView();

        };
       

        tid.appendChild(tidEndreButton);

        let låsEllerÅpen = document.createElement('button');
        if (model.questions[i].available) {
            låsEllerÅpen.textContent = 'Lås avstemning';
            låsEllerÅpen.onclick = function(){
                model.questions[i].available = false;
                updateView();

            };
            
        }
        else {
            låsEllerÅpen.textContent = 'Åpen avstemning';
            låsEllerÅpen.onclick = function(){
                model.questions[i].available = true;
                updateView();

            };
        }



        box.appendChild(giTillatText);
        box.appendChild(nyttSvar);
        box.appendChild(tid);
        box.appendChild(låsEllerÅpen);
        container.appendChild(box);
        
    }
    return container;
}

