const model={
    //view
    app:{
        currentView:'SettingsPage',
        currentUser:null,
    },
    //input
    inputs: {
        pollPage:{
            login:'',
            password:'',
            dropdown:false,
            currentQuestions:[
                {id:0, checkedVals:[], inputBox:""},
                {id:1, checkedVals:[], inputBox:""}
            ]
        },
        adminPage:{
            settingsPage: {
                questions: [
                    {id: 0, addAnswer: '', changeTimeAndDate: ''},
                    {id: 1, addAnswer: '', changeTimeAndDate: ''},
                ],
                addQuestion:{
                        question:'',
                        addAnswer:'',
                        answers:[],
                        deadLineFrom:'',
                        deadLineTo:'',
                        textBox:false,
                        
                },             
            },
            resultPage: {
                currentQuestions:[
                    {id:0,dateAndTime:'',display:true},
                    {id:1,dateAndTime:'',display:true}
                ]            
            }
        }
    },
    //Data
    questions: [
        {
            id: 0,
            question:'spm1',
            answers: [
                {
                    title: 'svar1',
                    counter: 0,
                    checked: true,
                }
            ],
            textBox: false,
            available: true,
            allowMultiple:true,
            deadline: '07-03-2023', 
        },
        {
            id: 1,
            question:'spm2',
            answers: [
                {
                    title:'svar1',
                    counter:0,
                    checked: true,
                }
            ],
            textBox: false,
            available: true,
            allowMultiple:true,
            deadline: '07-03-2023',
        },
    ],
    users:[
        {
            brukerNavn:'admin',
            password:'admin',
        }
    ]
};