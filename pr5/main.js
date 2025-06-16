document.addEventListener('DOMContentLoaded', () => {
    const questionForm = document.getElementById('question-form');
    const questionsList = document.getElementById('questions-list');
    let questions = [];

    questionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const questionText = document.getElementById('question-text').value;
        const correctAnswer = document.getElementById('correct-answer').value;
        const wrongAnswer = document.getElementById('wrong-answer').value;
        if (questionText && correctAnswer && wrongAnswer) {
            const newQuestion = {
                question: questionText,
                correct: correctAnswer,
                wrong: wrongAnswer
            };
            questions.push(newQuestion);
            renderQuestions();
            questionForm.reset();
        }
    });

    function renderQuestions() {
        questionsList.innerHTML = '';
        if (questions.length === 0) {
            questionsList.innerHTML = '<p>No questions added yet.</p>';
            return;
        }
        questions.forEach((q, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'question-item';
            questionElement.innerHTML = `
                <p><strong>${q.question}</strong></p>
                <p class="correct-answer">Correct answer: ${q.correct}</p>
                <p class="wrong-answer">Wrong answer: ${q.wrong}</p>
            `;
            questionsList.appendChild(questionElement);
        });
    }
    renderQuestions();
});