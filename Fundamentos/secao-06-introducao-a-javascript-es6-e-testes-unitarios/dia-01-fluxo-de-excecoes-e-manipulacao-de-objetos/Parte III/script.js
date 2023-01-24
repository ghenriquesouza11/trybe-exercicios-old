const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addShift(object) {
  object.turno = 'noturno';
}
function addKey(object, key, value) {
  object.key = value;
}
function listObjetcKeys(object) {
  console.log(Object.keys(object));
}
function objectSize(object) {
  console.log(Object.keys(object).length);
}
function objectValues(object) {
  console.log(Object.values(object));
}
addShift(lesson2);
const allLessons = { lesson1, lesson2, lesson3 };
// console.log(allLessons);
function studentsNumber() {
  let sum = 0;
  for (let index = 0; index < Object.keys(allLessons).length; index += 1) {
    sum += Object.entries(allLessons)[index][1].numeroEstudantes;
  }
  console.log(sum);
}
studentsNumber();
function showKey(obj, number) {
  console.log(Object.values(obj)[number]);
}
showKey(lesson1, 0);
function checkInfo(obj, keyy, value) {
  if (obj[keyy] === value) {
    console.log(true);
  }
  if (obj[keyy] !== value) {
    console.log(false);
  }
}
checkInfo(lesson3, 'turno', 'noite');
