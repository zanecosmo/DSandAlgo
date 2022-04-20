const log =  require("./helper.js");

class Student {
    
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
        this.scores = [];
        this.average = 0;
    }

    addScore = (score) => {
        this.scores.push(score);
        return this.scores;
    }
    
    setAverage = () => {
        const average = this.calculateAverage();
        this.average = average;
    }

    calculateAverage = () => {
        let sum = 0;
        for (let score of this.scores) sum += score;
        sum /= this.scores.length;
        return sum;
    }

    markLate = () => {
        this.tardies++;
        if (this.tardies > 3) return `${this.firstName} has been expelled due to skipping too much class`;
        const timeString = this.tardies > 1 ? "times" : "time";
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} ${timeString}`
    }

    fullName = () => `your full name is: ${this.firstName} ${this.lastName}`;

    static enrollStudents = () => `STUDENTS HAVE BEEN ENROLLED`;
}

const student = new Student("Fart", "Johnson");
const otherStudent = new Student("Jeremy", "Jackson");

log(`My name is: ${student.firstName} ${student.lastName}`);
log(`My name is: ${otherStudent.firstName} ${otherStudent.lastName}`);

log(student.fullName());
log(student.tardies);
log(student.markLate());
log(student.markLate());
log(student.markLate());
log(student.markLate());

log(otherStudent.addScore(65));
log(otherStudent.addScore(78));
log(otherStudent.addScore(90));
// log(otherStudent.calculateAverage());
otherStudent.setAverage();
log(otherStudent.average);

log(Student.enrollStudents());