function deleteAnswerAdmin(questionIndex, answerIndex){

    model.questions[questionIndex].answers.splice(answerIndex, 1);
    updateView();

}
function giTillatBoksChange(questionIndex, trueOrFalse){
    model.questions[questionIndex].textBox = trueOrFalse;
    updateView();

}
function nyttSvarInput(questionIndex, inputValue){
    let newAnswer = {
        title: inputValue,
        counter:0,
        checked: true,
    };
    model.questions[questionIndex].answers.push(newAnswer);
    updateView();

}

// function endreDato(questionIndex, endreButtonElement){
//     //endreButtonElement.textContent = 'Save';
//     console.log(endreButtonElement);
//     let tidinput = document.createElement('input');
//     tidinput.setAttribute('type', 'date');
//     tidinput.setAttribute('oninput', `newDeadline(${questionIndex}, this.value)`);
    

//     endreButtonElement.appendChild(tidinput);
//     updateView();
// }

function newDeadline(questionIndex, dateValue){
    model.questions[questionIndex].deadline = dateValue;

    updateView();

}

function closeOrOpen(questionIndex){
    if(model.questions[questionIndex].available) model.questions[questionIndex].available = false;

    else model.questions[questionIndex].available= true;

    updateView();
}
