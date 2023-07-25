const checkAnswer = async (event) => {
    event.preventDefault();

    const userAnswer = event.target.getAttribute("value");

    console.log(event.target.getAttribute("value"));
    console.log(userAnswer);

    const urlArray = window.location.href.split("/");
    const quizId = urlArray[urlArray.length - 1];
    const questionId = event.target.getAttribute("data-question");

    console.log(questionId);

    const getAnswer = await fetch(`/api/quiz/${quizId}/questions/${questionId}/answers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const answerResponse = await getAnswer.json();
    console.log(userAnswer, answerResponse);

    if(userAnswer != answerResponse[0].correctAnswer) {
        alert('Wrong :)')
    } else {
        alert('Correct! :)')
    }
};

document
    .querySelectorAll('.quiz-answer')
    .forEach(el => {el.addEventListener('click', checkAnswer)})