const checkAnswer = async (event) => {
    event.preventDefault();

    const userAnswer = document.querySelector('.answer-group').value;

    const getAnswer = await fetch(`/api/quiz/:id/questions/:id/answers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if(userAnswer != getAnswer) {
        alert('Thanks for playing :)')
    } else {
        alert('Correct! :)')
    }
};

document
    .querySelector('.answer-group')
    .addEventListener('click', checkAnswer)