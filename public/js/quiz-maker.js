const newFormHandler = async (event) => {
    event.preventDefault();

    const quiz_name = document.querySelector('#quiz-name').value;
    const question_name = document.querySelector('#question').value;
    const answerA = document.querySelector('#ans-a').value;
    const answerB = document.querySelector('#ans-b').value;
    const answerC = document.querySelector('#ans-c').value;
    const answerD = document.querySelector('#ans-d').value;
    const correctAnswer = document.querySelector('#correct-ans').value;

    const responseQuiz = await fetch(`/api/quiz`, {
        method: 'POST',
        body: JSON.stringify({ quiz_name }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
        const quizBody = await responseQuiz.json();
        
console.log(quizBody);

    const responseQuestion = await fetch(`/api/quiz/${quizBody.id}/questions`, {
        method: 'POST',

        body: JSON.stringify({ question_name }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const questionBody = await responseQuestion.json();

    console.log(questionBody);

    const responseAnswer = await fetch(`/api/quiz/${quizBody.id}/questions/${questionBody.id}/answers`, {
        method: 'POST',
        body: JSON.stringify({
            answerA,
            answerB,
            answerC,
            answerD,
            correctAnswer: `answer${correctAnswer}` }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const answerBody = await responseAnswer.json();

    console.log(answerBody);

    if (responseQuiz.ok && responseQuestion.ok && responseAnswer.ok) {
        document.location.replace('/quiz-maker');
    } else {
        alert('Failed to create a quiz');
    }
}

//event listeners for buttons
document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
