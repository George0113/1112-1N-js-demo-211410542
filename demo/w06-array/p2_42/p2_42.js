import{students, sdata } from'./data.js';

//for sdata

console.log('students', students);

sdata.sort(function(a,b){return b-a});
console.log('sdata sorted',sdata);
console.log(`The hightest score: ${sdata[0]}`);
console.log(`The lowest score: ${sdata[sdata.length-1]}`);





console.log('sdata', sdata);

const students2 = students.map((student)=>{
    student.role ='student';
    return {...student, role:'student'};
});

console.log('students2 original',students2);


students2.sort(function(a,b){return a.score - b.score});
console.log('students2',students2);

console.log(`The lowest score: ${students2[0].score}`);
console.log(`The hightest score: ${students2[students2.length-1].score}`);


console.log('students',students);
const averageStudents = students.reduce((total, student, index) => {
    console.log('index total',index,total);
    return total + student.score;
}, 0) / students.length;

console.log('averageStudents',averageStudents);

console.log('sdata',sdata);
const averageSdata = sdata.reduce((total, student,index)=>{
    console.log('index total',index,total);
    return total + student;
}, 0) /sdata.length;

console.log('averageSdata',averageSdata);