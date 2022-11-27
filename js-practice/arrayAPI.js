// class Example
class Student {
    constuctor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

console.log("it is! : ", students.indexOf((student) => {if (student.score == 90) return student}))


// Array Sort in ascending order
const array1 = [45, 80, 90, 66, 88]

array1.sort((a, b) => {
    return a - b;
    // return (a <= b) ? -1 : 1;
})
console.log("array1 : " , array1);