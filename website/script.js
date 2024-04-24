// check if relevat element exists and run the function
if (document.getElementById("groet")) {
    begroetting()
} else if (document.getElementById("open-timer")) {
    open_dag("Mar 14, 2024 15:00:00", "open-timer", "De eerstvolgende open dag is over: ", "Er zijn geen open dagen gepland");
    open_dag("Apr 11, 2024 14:00:00", "info-timer", "De eerstvolgende info dag is over: ", "Er zijn geen info dagen gepland");
} else if (document.getElementById("quiz")) {
    quizcheck();
}


//-----------------------greeting----------------------------//
function begroetting() {
    let currentTime = new Date().getHours();
    let greeting;

    if (currentTime >= 5 && currentTime < 12) {
        greeting = "Goedemorgen!";
    } else if (currentTime >= 12 && currentTime < 18) {
        greeting = "Goedemiddag!";
    } else if (currentTime >= 18 && currentTime < 24) {
        greeting = "Goedeavond!";
    } else {
        greeting = "Goedenacht!";
    }

    document.getElementById("groet").innerHTML = greeting;
};

//-----------------------open dagen----------------------------//
// src = https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown and modififications to make it more modular
// date format = "[first three letters of month first letter is captial letter] [day of the month number], [year number], [time in hours:minutes:seconds]"
//eg ["Feb 20, 2050 12:30:00"]
function open_dag(date, elementId, message, nonmessage) {
    var countDownDate = new Date(date).getTime();
    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(elementId).innerHTML =
            message +
            days +
            "d " +
            hours +
            "h " +
            minutes +
            "m " +
            seconds +
            "s " +
            "<br> op " +
            date;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById(elementId).innerHTML = nonmessage;
        }
    }, 1000);
}
//-----------------------quiz----------------------------//

// https://codepen.io/yaphi1/pen/NpZvJp
function quizcheck() {
    var myQuestions = [ // array with questions and possible answers sorted bij letter including the letter of the correct answer.
        {
            question: "Wat biedt het TCR hoofdzakelijk aan?",
            answers: {
                a: 'Kunst en Cultuur',
                b: 'Technische opleidingen ',
                c: 'Gezondheidszorg',
                d: 'Bedrijfskunde',
            },
            correctAnswer: 'b'
        },
        {
            question: "Wat voor faciliteiten biedt het TCR?",
            answers: {
                a: 'Traditionele klaslokalen',
                b: 'Moderne laboratoria en technische werkplaatsen  ',
                c: 'Alleen sportfaciliteiten',
                d: 'Voornamelijk kantoorruimtes',
            },
            correctAnswer: 'b'
        },
        {
            question: "Wat betekent de afkorting 'MBO'?",
            answers: {
                a: 'Middelbaar Beroepsonderwijs ',
                b: 'Master in Business Operations  ',
                c: 'Management & Bedrijfskunde Opleiding',
                d: 'Marketing & Business Operations',
            },
            correctAnswer: 'a'
        },
        {
            question: "Hoe lang bestaat het TCR?",
            answers: {
                a: ' 13 jaar. ',
                b: ' 5 jaar.',
                c: '15 jaar.',
                d: '9 jaar.',
            },
            correctAnswer: 'd'
        },
        {
            question: "Hoe veel locaties heeft het TCR?",
            answers: {
                a: ' 7 Locaties. ',
                b: '9 Locaties. ',
                c: '10 locaties ',
                d: '15 locaties',
            },
            correctAnswer: 'c'
        },
        {
            question: "Wie is de oprichter van het TCR?",
            answers: {
                a: ' Zadkine en STC College',
                b: ' Albeda en Euro College',
                c: 'Euro College en STC College ',
                d: 'Albeda  en Zadkine',
            },
            correctAnswer: 'd'
        },
        {
            question: "Welke van deze opleidingen wordt niet aangeboden door het TCR?",
            answers: {
                a: ' Horeca  ',
                b: 'IT& Online  ',
                c: 'Bouwen & Wonen ',
                d: 'Lab & Research ',
            },
            correctAnswer: 'a'
        },
        {
            question: "Waar staat de afkorting TCR voor?",
            answers: {
                a: ' Technologie en Constructie Richting ',
                b: ' Techniek College Rotterdam ',
                c: 'Toetsing, Certificering en Registratie',
                d: 'Toezicht, Controle en Registratie',
            },
            correctAnswer: 'b'
        },
        {
            question: "Welke van deze toelatingen is niet belangrijk?",
            answers: {
                a: ' . Je meld je aan vóór 1 april ',
                b: 'Je hebt de juiste vooropleiding gevolgd. ',
                c: 'Je doet mee aan de intake-activiteiten',
                d: 'Je doet aan de opendagen ',
            },
            correctAnswer: 'd'
        },
        {
            question: "Welke niveau staat niet in mbo?",
            answers: {
                a: ' Niveaus 2',
                b: ' Niveaus 5 ',
                c: 'Niveaus 1',
                d: 'Niveaus 3',
            },
            correctAnswer: 'b'
        },
    ];

    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
    function generateQuiz(questions, quizContainer, resultsContainer, submitButton) { // generate the quiz
        function showQuestions(questions, quizContainer) { // generate the quiz questions
            var output = [];
            for (var i = 0; i < questions.length; i++) { // i = 0; if i < question.length do i++ and repeat
                output.push(
                    '<br><br><div class="question">' + questions[i].question + '</div><br>'
                );

                output.push( // give id '"q" + i' to div where 'i' is the the question number.
                    '<div class="answer" id="q' + i + '">'
                );

                for (letter in questions[i].answers) { // for each letter in the answers
                    output.push( // give id '"q" + i' to div where 'i' is the the question number
                        '<div class="individual-answer">'
                        + '<label>'
                        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                        + letter + ': '
                        + questions[i].answers[letter]
                        + '</label>'
                        + '</div>'
                    );
                }
                output.push('</div>');
            }

            quizContainer.innerHTML = output.join(''); // join and push generated HTML
        }

        function showResults(questions, quizContainer, resultsContainer) { // show the results
            var answerContainers = quizContainer.querySelectorAll('.answer');
            var userAnswer = '';
            var numCorrect = 0;

            for (var i = 0; i < questions.length; i++) {
                userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value; // get the answer from the user
                if (userAnswer === questions[i].correctAnswer) { // if the answer is correct, the remove makes sure the color changes if you submit a second time
                    numCorrect++;
                    answerContainers[i].classList.remove('incorrect');
                    answerContainers[i].classList.add('correct');
                } else {                                        // if the answer is incorrect or blank
                    answerContainers[i].classList.add('incorrect');
                    answerContainers[i].classList.remove('correct');
                }
            }

            resultsContainer.innerHTML = 'Score: ' + numCorrect + ' out of ' + questions.length; // show the score
        }

        showQuestions(myQuestions, quizContainer);

        submitButton.onclick = function () {
            showResults(myQuestions, quizContainer, resultsContainer);
        }
    }
}