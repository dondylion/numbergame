let lang = prompt ('Выберите язык (ru, en)'),
    weekdayRu = 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье',
    weekdayEn = 'monday, tuesday, wednesday, thursday, friday, saturday, sunday',
    message1a,
    message1b,
    message1c,
    arrWeekday = {
        'ru':'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье',
        'en':'monday, tuesday, wednesday, thursday, friday, saturday, sunday'
    },
    namePerson = prompt ('Введите имя'),
    message2;

// 1.a

if (lang == 'ru') {
    message1a = weekdayRu;
} else if (lang == 'en') {
    message1a = weekdayEn;
} else {
    message1a = 'Значение введено неверно';
}

// 1.b

switch (lang) {
    case 'ru':
        message1b = weekdayRu;
        break;
    case 'en':
        message1b = weekdayEn;
        break;
    default:
        message1b = 'Значение введено неверно';
        break;
}

// 1.c

message1c = arrWeekday[lang];

// 2

message2 = (namePerson == 'Артём') ? 'директор' :
    (namePerson == 'Максим') ? 'преподаватель' : 'студент';

console.log(message1a);
console.log(message1b);
console.log(message1c);
console.log(message2);

