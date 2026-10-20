
const container = document.createElement('div');
container.className = 'container';

const inputWrapper = document.createElement('div');
inputWrapper.className = 'input-wrapper';

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Спроси щось';
input.id = 'questionInput';

const errorMsg = document.createElement('div');
errorMsg.className = 'error-msg';

const ball = document.createElement('div');
ball.className = 'ball';

const ballInner = document.createElement('div');
ballInner.className = 'ball-inner';

const answerDisplay = document.createElement('div');
answerDisplay.className = 'answer';
answerDisplay.textContent = 'Так'; 

inputWrapper.appendChild(input);
inputWrapper.appendChild(errorMsg);

ballInner.appendChild(answerDisplay);
ball.appendChild(ballInner);

container.appendChild(inputWrapper);
container.appendChild(ball);

document.body.appendChild(container);

const answers = [
    "Так", 
    "Ні", 
    "Можливо",  
    "Безумовно", 
    "Неможливо",  
    "Хто зна хто зна"
];

function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

ball.addEventListener('click', () => {
    const question = input.value.trim();
    
    if (question === '') {
        errorMsg.textContent = 'Будь ласка, введіть своє питання!';
        answerDisplay.classList.remove('show');
        return;
    }
    
    errorMsg.textContent = '';
    
    answerDisplay.classList.remove('show');
    
    setTimeout(() => {
        answerDisplay.textContent = getRandomAnswer();
        answerDisplay.classList.add('show');
    }, 300); 
});