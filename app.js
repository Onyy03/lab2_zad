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
