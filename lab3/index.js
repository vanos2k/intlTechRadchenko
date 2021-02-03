const mockStudents = [
  {
    surname: 'Ivanos',
    marks: [5,3,2,4]
  },
  {
    surname: 'Lasov',
    marks: [5,5,5,5]
  },
  {
    surname: 'Anotov',
    marks: [3,3,3,3]
  }
];

const statuses = {
  best: 'отличник',
  good: 'хорошист',
  bad: 'неуспевающий'
};

mockStudents.forEach(student => {
  const marks = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  student.marks.forEach((mark) => {
    marks[mark] += 1;
  });
  if (marks[1] || marks[2]) {
    console.log(`${student.surname} - ${statuses.bad}`);
  } else if (marks[3]) {
    console.log(`${student.surname} - ${statuses.unknow}`);
  } else if (marks[4]) {
    console.log(`${student.surname} - ${statuses.good}`);
  } else {
    console.log(`${student.surname} - ${statuses.best}`);
  }
});
