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

function endreDato(questionIndex){
    
    model.inputs.adminPage.settingsPage.questions[questionIndex].changeTimeAndDate = true;
    model.inputs.adminPage.settingsPage.questions[questionIndex].newDeadline = '';
    updateView();
}

function newDeadline(questionIndex, dateValue){
    model.questions[questionIndex].deadline = dateValue;
    model.inputs.adminPage.settingsPage.questions[questionIndex].newDeadline = dateValue;

    updateView();

}

function closeOrOpen(questionIndex){
    if(model.questions[questionIndex].available) model.questions[questionIndex].available = false;

    else model.questions[questionIndex].available= true;

    updateView();
}
function createPollForm() {
    let newQuestionPoll = {
        id: model.questions.length,
        question: model.inputs.adminPage.settingsPage.addQuestion.question,
        answers:[...model.inputs.adminPage.settingsPage.addQuestion.answers],
        textBox:model.inputs.adminPage.settingsPage.addQuestion.textBox,
        available: true,
        allowMultiple:true,
        deadline:model.inputs.adminPage.settingsPage.addQuestion.deadLineTo,
    }
    let newinputs = {
        id: model.questions.length,
        addAnswer:'',
        changeTimeAndDate: false,
        newDeadline:'',
    }

    model.questions.push(newQuestionPoll);
    model.inputs.adminPage.settingsPage.questions.push(newinputs);
    updateView()
}
function deleteAnswer(index){
    model.inputs.adminPage.settingsPage.addQuestion.answers.splice(index,1);
    updateView();
}