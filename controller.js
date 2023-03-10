function createPoll() {
let questionpoll = model.inputs.adminPage.settingsPage.addQuestion;
questionpoll.push(model.questions);

let newQuestionPoll = {
    id: model.questions.length,
    question: model.inputs.adminPage.settingsPage.addQuestion.question,
    answers:model.inputs.adminPage.settingsPage.addQuestion.answers,
    


}

}