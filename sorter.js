const questions = [
    {
        text: "Which would you use to describe your character?",
        answers: ["Lawful", "Neutral", "Chaotic"],
        points: {"Lawful": {"Hyrinia": 2, "Kaldiro Maar": 3, "Foltia": 0, "Rithe": 0, "Virre Zirilver": 0, "Thernnon": 2},
                 "Neutral": {"Hyrinia": 1, "Kaldiro Maar": 2, "Foltia": 2, "Rithe": 3, "Virre Zirilver": 0, "Thernnon": 1},
                 "Chaotic": {"Hyrinia": 0, "Kaldiro Maar": 1, "Foltia": 3, "Rithe": 2, "Virre Zirilver": 3, "Thernnon": 1}
        }
    },
    {
        text: "Which would you use to describe your character?",
        answers: ["Good", "Neutral", "Evil"],
        points: {"Good": {"Hyrinia": 0, "Kaldiro Maar": 2, "Foltia": 3, "Rithe": 0, "Virre Zirilver": 1, "Thernnon": 3},
                 "Neutral": {"Hyrinia": 1, "Kaldiro Maar": 1, "Foltia": 0, "Rithe": 2, "Virre Zirilver": 3, "Thernnon": 0},
                 "Evil": {"Hyrinia": 3, "Kaldiro Maar": 1, "Foltia": 0, "Rithe": 3, "Virre Zirilver": 3, "Thernnon": 0}
        }
    },
    {
        text: "What is your character's magic type?",
        answers: ["radiation", "sanguination", "animancy", "(ex)telepathy", "transmutation", "none"],
        points: {"radiation": {"Hyrinia": 3, "Kaldiro Maar": 2, "Foltia": 1, "Rithe": -3, "Virre Zirilver": -3, "Thernnon": -3},
                 "sanguination": {"Hyrinia": 0, "Kaldiro Maar": 1, "Foltia": 1, "Rithe": 3, "Virre Zirilver": 1, "Thernnon": 0},
                 "animancy": {"Hyrinia": 1, "Kaldiro Maar": 0, "Foltia": 3, "Rithe": 1, "Virre Zirilver": 3, "Thernnon": 0},
                 "(ex)telepathy": {"Hyrinia": 1, "Kaldiro Maar": 3, "Foltia": 0, "Rithe": 0, "Virre Zirilver": 3, "Thernnon": 2},
                 "transmutation": {"Hyrinia": -3, "Kaldiro Maar": -3, "Foltia": -3, "Rithe": 1, "Virre Zirilver": -2, "Thernnon": 3},
                 "none": {"Hyrinia": 0, "Kaldiro Maar": 0, "Foltia": 0, "Rithe": 0, "Virre Zirilver": 0, "Thernnon": 0}
        }
    },
    {
        text: "Does your character have obscure magic?",
        answers: ["none", "a curse", "a relic", "a relic and a curse"],
        points: {"none": {"Hyrinia": 0, "Kaldiro Maar": 0, "Foltia": 0, "Rithe": 0, "Virre Zirilver": -1, "Thernnon": 0},
                 "a curse": {"Hyrinia": 0, "Kaldiro Maar": 0, "Foltia": 0, "Rithe": 1, "Virre Zirilver": 1, "Thernnon": 0},
                 "a relic": {"Hyrinia": 0, "Kaldiro Maar": 0, "Foltia": 0, "Rithe": 0, "Virre Zirilver": 0, "Thernnon": 2},
                 "a relic and a curse": {"Hyrinia": 0, "Kaldiro Maar": 0, "Foltia": 0, "Rithe": 1, "Virre Zirilver": 1, "Thernnon": 1}
        }
    },
    {
        text: "What kind of density of population does your character enjoy living in?",
        answers: ["densely populated", "somewhat populated", "hermit", "neutral"],
        points: {"densely populated": {"Hyrinia": 3, "Kaldiro Maar": 0, "Foltia": 0, "Rithe": 2, "Virre Zirilver": 0, "Thernnon": 3},
                 "somewhat populated": {"Hyrinia": 0, "Kaldiro Maar": 2, "Foltia": 2, "Rithe": 2, "Virre Zirilver": 3, "Thernnon": 0},
                 "hermit": {"Hyrinia": 0, "Kaldiro Maar": 1, "Foltia": 2, "Rithe": 0, "Virre Zirilver": 1, "Thernnon": 0},
                 "neutral": {"Hyrinia": 0, "Kaldiro Maar": 0, "Foltia": 0, "Rithe": 0, "Virre Zirilver": 0, "Thernnon": 0}
        }
    },
    {
        text: "What does your character value the most?",
        answers: ["Honor", "Tradition", "Innovation", "Freedom", "Justice", "Power", "Sustainability"],
        points: {"Honor": {"Hyrinia": 2, "Kaldiro Maar": 1, "Foltia": 0, "Rithe": 1, "Virre Zirilver": 2, "Thernnon": 0},

                 "Tradition": {"Hyrinia": 1, "Kaldiro Maar": 1, "Foltia": 2, "Rithe": 0, "Virre Zirilver": 0, "Thernnon": 0},

                 "Innovation": {"Hyrinia": 0, "Kaldiro Maar": 0, "Foltia": 0, "Rithe": 1, "Virre Zirilver": 2, "Thernnon": 2},

                 "Freedom": {"Hyrinia": 0, "Kaldiro Maar": 1, "Foltia": 2, "Rithe": 2, "Virre Zirilver": 1, "Thernnon": 0},

                 "Justice": {"Hyrinia": 1, "Kaldiro Maar": 2, "Foltia": 0, "Rithe": 0, "Virre Zirilver": 1, "Thernnon": 2},

                 "Power": {"Hyrinia": 2, "Kaldiro Maar": 2, "Foltia": 0, "Rithe": 0, "Virre Zirilver": 2, "Thernnon": 1},

                 "Sustainability": {"Hyrinia": 0, "Kaldiro Maar": 0, "Foltia": 2, "Rithe": 1, "Virre Zirilver": 0, "Thernnon": 2}

        }
    },
    {
        text: "What kind of job would your character fall under?",
        answers: ["Law/Governance", "Trade/Commerce", "Mercenary/Soldier", "Production/Craftsman", "Farming", "Healthcare", "Education", "Entertainment/Arts", "Religious", "Criminal", "Other"],
        points: {"Law/Governance": {"Hyrinia": 2, "Kaldiro Maar": 2, "Foltia": 0, "Rithe": 0, "Virre Zirilver": 1, "Thernnon": 2},

                 "Trade/Commerce": {"Hyrinia": 2, "Kaldiro Maar": 0, "Foltia": 1, "Rithe": 1, "Virre Zirilver": 1, "Thernnon": 2},

                 "Mercenary/Soldier": {"Hyrinia": 2, "Kaldiro Maar": 2, "Foltia": 0, "Rithe": 0, "Virre Zirilver": 1, "Thernnon": 0},

                 "Production/Craftsman": {"Hyrinia": 0, "Kaldiro Maar": 0, "Foltia": 2, "Rithe": 1, "Virre Zirilver": 1, "Thernnon": 2},

                 "Farming": {"Hyrinia": 0, "Kaldiro Maar": 1, "Foltia": 2, "Rithe": 2, "Virre Zirilver": 0, "Thernnon": 0},

                 "Healthcare": {"Hyrinia": 1, "Kaldiro Maar": 0, "Foltia": 2, "Rithe": 0, "Virre Zirilver": 2, "Thernnon": 1},

                 "Education": {"Hyrinia": 0, "Kaldiro Maar": 1, "Foltia": 1, "Rithe": 0, "Virre Zirilver": 2, "Thernnon": 2},

                 "Entertainment/Arts": {"Hyrinia": 2, "Kaldiro Maar": 0, "Foltia": 0, "Rithe": 1, "Virre Zirilver": 1, "Thernnon": 0},

                 "Religious": {"Hyrinia": 2, "Kaldiro Maar": 1, "Foltia": 0, "Rithe": 2, "Virre Zirilver": 1, "Thernnon": 1},

                 "Criminal": {"Hyrinia": 1, "Kaldiro Maar": 2, "Foltia": 0, "Rithe": 1, "Virre Zirilver": 2, "Thernnon": 0},

                 "Other": {"Hyrinia": 0, "Kaldiro Maar": 0, "Foltia": 0, "Rithe": 0, "Virre Zirilver": 0, "Thernnon": 0}
        }
    },
    {
        text: "How does your character feel about magic?",
        answers: ["Likes magic", "Neutral", "Dislikes magic"],
        points: {"Likes magic": {"Hyrinia": 3, "Kaldiro Maar": 0, "Foltia": 0, "Rithe": 1, "Virre Zirilver": 3, "Thernnon": 3},
                 "Neutral": {"Hyrinia": 0, "Kaldiro Maar": 1, "Foltia": 0, "Rithe": 3, "Virre Zirilver": 1, "Thernnon": 0},
                 "Dislikes magic": {"Hyrinia": 0, "Kaldiro Maar": 2, "Foltia": 3, "Rithe": 0, "Virre Zirilver": 0, "Thernnon": 0}
        }
    },
    // Add more questions in the same format
];

let scores = {};

function initializeQuestions() {
    const questionnaire = document.getElementById('questionnaire');
    questions.forEach((question, index) => {const questions = [
    {
        text: "Which would you use to describe your character?",
        answers: ["Good", "Neutral", "Evil"],
        points: {"Good": {"Foltia": 10, "Thernnon": 5, "Hyrinia": 0},
                 "Neutral": {/* points for Neutral */},
                 "Evil": {/* points for Evil */}
        }
    },
    {
        text: "Which would you use to describe your character?",
        answers: ["Lawful", "Neutral", "Chaotic"],
        points: {"Lawful": {"Thernnon": 10, "Hyrinia": 5, "Rithe": 0},
                 "Neutral": {/* points for Neutral */},
                 "Chaotic": {/* points for Chaotic */}
        }
    },
    // Add more questions in the same format
];

let scores = {};

function initializeQuestions() {
    const questionnaire = document.getElementById('questionnaire');
    questions.forEach((question, index) => {
        // ... existing code ...
    });
}

function calculateResult() {
    scores = {}; // Reset scores before calculation

    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer) {
            const answerPoints = question.points[selectedAnswer.value];
            for (const region in answerPoints) {
                if (answerPoints.hasOwnProperty(region)) {
                    scores[region] = (scores[region] || 0) + answerPoints[region];
                }
            }
        }
    });

    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const resultText = sortedScores.length > 0 ? `Your region is: ${sortedScores[0][0]}` : "No answers selected";
    document.getElementById('result').textContent = resultText;
}

window.onload = function() {
    initializeQuestions();
    document.getElementById('result').textContent = ""; // Clear result on page load
};

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = question.text;
        questionDiv.appendChild(questionText);

        question.answers.forEach(answer => {
            const label = document.createElement('label');
            label.classList.add('answer-option');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'question' + index;
            input.value = answer;

            label.appendChild(input);
            label.appendChild(document.createTextNode(answer));
            questionDiv.appendChild(label);
        });

        questionnaire.appendChild(questionDiv);
    });
}

function calculateResult() {
    scores = {}; // Reset scores before calculation

    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer) {
            const answerValue = selectedAnswer.value;
            const answerPoints = question.points[answerValue];

            for (const region in answerPoints) {
                if (answerPoints.hasOwnProperty(region)) {
                    if (!scores[region]) {
                        scores[region] = 0;
                    }
                    scores[region] += answerPoints[region];
                }
            }
        }
    });

    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const resultText = sortedScores.length > 0 ? `Your region is: ${sortedScores[0][0]}` : "No selection made";
    document.getElementById('result').textContent = resultText;
}

window.onload = function() {
    initializeQuestions();
    document.getElementById('result').textContent = ""; // Clear result on page load
};
