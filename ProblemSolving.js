// problem soving 12

// functional programming reduce

const calculateTotal = (items) => {
  const total = items.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  return total;
};

const items = [
  { quantity: 2, price: 10 },
  { quantity: 1, price: 25 },
  { quantity: 3, price: 20 },
];

const totalValue = calculateTotal(items);

console.log(totalValue, "total value");

// Problem solving 11 advance sort====================

const studentAvgGrade = (studentData) => {
  return studentData.sort((a, b) => {
    const avgGrageA =
      a.grades.reduce((acc, grade) => acc + grade, 0) / a.grades.length;
    const avgGrageB =
      b.grades.reduce((acc, grade) => acc + grade, 0) / b.grades.length;
    return avgGrageB - avgGrageA;
  });
};

// student array== !===============

const studentsData = [
  { name: "Jubair", grades: [30, 12, 50] },
  { name: "Sohel", grades: [70, 80, 65] },
  { name: "Rakib", grades: [95, 92, 93] },
  { name: "Abdullah", grades: [85, 88, 84] },
];

// call function

const students = studentAvgGrade(studentsData);
console.log(students, " student by avg mark");

// problem 3 Take maximum value

const nums = [3, 12, 56, 102, 2, 5, 10, 520, 500];

const maximum = Math.max(...nums);
console.log(maximum, "maximum value");

// problem 9 : unique value :==================

const getUniqueValues = (arr) => {
  return [...new Set(arr)];
};

// define an array with duplicate

const arrayWithduplicate = [
  1, 2, 3, 1, 5, 4, 5, 6, 7, 7, 8, 3, 9, 10, 15, 10, 15,
];

const uniqueNumber = getUniqueValues(arrayWithduplicate);

console.log(uniqueNumber, "get only unique vlue");

