let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const guessTheNumber = function () {
    let userNumber = prompt('Угадай число от 1 до 100'),
        answer = Math.floor(Math.random()*101),
        checkVar = 0, //промежуточный вариант дл проверки
        attempts = 10, //попытки
        tryAgain = false;

    const wrongNumber = function(a, b) {
        attempts--;
        if (attempts == 0) {
            tryAgain = confirm ('Попытки закончились. Хотите попробовать снова?');
            if (tryAgain) {
                guessTheNumber();
            } else {
                return alert('Игра окончена');
            }
        }
        if (a<b) {
            checkVar = prompt('Загаданное число меньше, осталось попыток: ' + attempts);
            if (checkVar === null) {
                tryAgain = confirm ('Игра окончена. Хотите попробовать снова?');
                if (tryAgain) {
                    guessTheNumber();
                } else {
                    return alert('Игра окончена');
                }
            } else if (isNumber(checkVar)) {
                b = checkVar;
                wrongNumber(a, b);
            } else {
                alert('Введи число!');
                wrongNumber(a, b);
            }
        } else if (a>b) {
            checkVar = prompt('Загаданное число больше, осталось попыток: ' + attempts);
            if (checkVar === null) {
                tryAgain = confirm ('Игра окончена. Хотите попробовать снова?');
                if (tryAgain) {
                    guessTheNumber();
                } else {
                    return alert('Игра окончена');
                }
            } else if (isNumber(checkVar)) {
                b = checkVar;
                wrongNumber(a, b);
            } else {
                alert('Введи число!');
                wrongNumber(a, b);
            }
        } else {
            tryAgain = confirm ('Поздравляю, вы угадали! Хотите попробовать снова?');
            if (tryAgain) {
                guessTheNumber();
            } else {
                return alert('Игра окончена');
            }
        }
    };
    if (userNumber === null) {
        alert('Игра окончена');
    } else if (isNumber(userNumber)) {
    wrongNumber(answer, userNumber);
    } else {
        alert('Введи число!');
        guessTheNumber();
    }
};

guessTheNumber();