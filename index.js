let grades = [];
const grades = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);

let sum = 0;
grades.forEach(function(grade){
    sum +=grade;
});
const averageGrade = sum / grades.length;

const maxGrade = Math.max(...grades);
const minGrade = MAth.min(...grades);

const positiveGrades = grades.filter(grade=>grade>=60);
const negativeGrades = grades.filter(grade=>grade<60);

const letterGrades = grades.map(grade =>{
    if (grade >= 80) {
        return 'A';
    } else if (grade >= 60) {
        return 'B';
    } else if (grade >= 40) {
        return 'C';
    } else if (grade >= 20) {
        return 'D';
    } else {
        return 'E';
    }
});

document.getElementById("averageGrade").innerText = "Средний балл студентов: " + averageGrade;
        document.getElementById("maxGrade").innerText = "Максимальный балл: " + maxGrade;
        document.getElementById("minGrade").innerText = "Минимальный балл: " + minGrade;
        document.getElementById("positiveGradesCount").innerText = "Количество студентов с положительными оценками: " + positiveGrades.length;
        document.getElementById("negativeGradesCount").innerText = "Количество студентов с отрицательными оценками: " + negativeGrades.length;
        document.getElementById("letterGrades").innerText = "Буквенные оценки студентов: " + letterGrades.join(", ");