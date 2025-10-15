const _ = require('lodash');


const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5, 4, 3, 5, 2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
};

function printUserWeightedAverage(user) {
    let totalWeightedSum = 0;
    let totalWeight = 0;

    user.allGrades.forEach(subject => {
        const avg = subject.grades.reduce((a, b) => a + b, 0) / subject.grades.length;
        totalWeightedSum += avg * subject.weight;
        totalWeight += subject.weight;
    });

    const weightedAverage = totalWeightedSum / totalWeight;

    console.log(`${user.name} ${user.surname} - Średnia ważona: ${weightedAverage.toFixed(2)}`);
}

printUserWeightedAverage(user);


const subjectWithWeight1 = _.find(user.allGrades, { weight: 1 });

if (subjectWithWeight1) {
    console.log(`Przedmiot z wagą 1: ${subjectWithWeight1.subjectName}`);
} else {
    console.log('Nie znaleziono przedmiotu z wagą 1');
}


function getMails(collections) {
    
    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

    const strings = collections.filter(item => typeof item === 'string');

    const emails = strings.filter(str => emailRegex.test(str));

    const sortedEmails = emails.sort();

    console.log(sortedEmails);
    return sortedEmails;
}

const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];

getMails(collections);