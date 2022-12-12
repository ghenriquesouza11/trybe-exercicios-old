const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const daysList = document.getElementById("days");
const buttonsContainer = document.getElementsByClassName("buttons-container");
const holidayButton = document.getElementsByClassName("btn-holiday");
const holidayDays = document.getElementsByClassName("holiday");

function insertLi(list, times, clss) {
  for (index = 0; index < times; index += 1) {
    const li = document.createElement("li");
    list.appendChild(li);
    list.children[index].classList.add(clss);
  }
}
function createInsertChild(father, child, idx, clss, content) {
  const newElement = document.createElement(child);
  father.appendChild(newElement);
  const kid = father.children[idx];
  kid.innerHTML = content;
  newElement.classList.add(clss);
}
insertLi(daysList, decemberDaysList.length, "day");
for (index = 0; index < decemberDaysList.length; index += 1) {
  daysList.children[index].innerHTML = decemberDaysList[index];
}
daysList.children[25].classList.add("holiday");
daysList.children[26].classList.add("holiday");
daysList.children[32].classList.add("holiday");
daysList.children[5].classList.add("friday");
daysList.children[12].classList.add("friday");
daysList.children[19].classList.add("friday");
daysList.children[26].classList.add("friday");
createInsertChild(buttonsContainer[0], "button", 0, "btn-holiday", "Feriados");
let btnHolidayActive = "no";
holidayButton[0].addEventListener("click", function () {
  if (btnHolidayActive === "no") {
    for (index = 0; index < holidayDays.length; index += 1) {
      holidayDays[index].style.background = "orange";
    }
    btnHolidayActive = "yes";
  } else if (btnHolidayActive === "yes") {
    for (index = 0; index < holidayDays.length; index += 1) {
      holidayDays[index].style.background = "rgb(238,238,238)";
    }
    btnHolidayActive = "no";
  }
});
createInsertChild(
  buttonsContainer[0],
  "button",
  1,
  "btn-friday",
  "Sexta-Feira"
);
