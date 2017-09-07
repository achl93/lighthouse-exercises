var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(personA, personB) {
  var nameA = personA.name.toLowerCase();
  var nameB = personB.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA === nameB) {
    students.sort(function(ageA, ageB) {
      return ageA.value - ageB.value;
    });
  };
  if (nameA > nameB) return 1;
});

console.log(students);