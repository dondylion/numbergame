let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const guessTheNumber = function () {
    let userNumber = prompt('Угадай число от 1 до 100');
    let answer = Math.floor(Math.random()*101);
    let checkVar;
    const wrongNumber = function(a, b) {
        
        if (a<b) {
            checkVar = prompt('Загаданное число меньше, попробуй ещё');
            if (checkVar === null) {
                alert('Игра окончена');
            } else if (isNumber(checkVar)) {
                b = checkVar;
                wrongNumber(a, b);
            } else {
                alert('Введи число!');
                wrongNumber(a, b);
            }
        } else if (a>b) {
            checkVar = prompt('Загаданное число больше, попробуй ещё');
            if (checkVar === null) {
                alert('Игра окончена');
            } else if (isNumber(checkVar)) {
                b = checkVar;
                wrongNumber(a, b);
            } else {
                alert('Введи число!');
                wrongNumber(a, b);
            }
        } else {
            alert('Поздравляю, вы угадали!');
        }
    };
    if(userNumber === null) {
        alert('Игра окончена');
    } else if (isNumber(userNumber)) {
    wrongNumber(answer, userNumber);
    } else {
        alert('Введи число!');
        guessTheNumber();
    }
};

guessTheNumber();