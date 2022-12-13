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
const fridayButton = document.getElementsByClassName("btn-friday");
const fridays = document.getElementsByClassName("friday");
const day = document.getElementsByClassName("day");
const myTasks = document.getElementsByClassName("my-tasks");
const task = document.getElementsByClassName("task");
const selected = document.getElementsByClassName("selected");

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
function createInsertChildColor(father, child, idx, clss, color) {
  const newElement = document.createElement(child);
  father.appendChild(newElement);
  const kid = father.children[idx];
  kid.style.background = color;
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
      holidayDays[index].style.background = "white";
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
let fridayButtonActive = "no";
fridayButton[0].addEventListener("click", function () {
  if (fridayButtonActive === "no") {
    for (index = 5; index < daysList.children.length; index += 7) {
      daysList.children[index].innerHTML = "SEXTOU o/";
    }
    fridayButtonActive = "yes";
  } else if (fridayButtonActive === "yes") {
    for (index = 5; index < daysList.children.length; index += 7) {
      daysList.children[index].innerHTML = index - 1;
    }
    fridayButtonActive = "no";
  }
});
for (index = 0; index < day.length; index += 1) {
  day[index].addEventListener("mouseover", function () {
    event.target.style.fontSize = "23px";
    event.target.style.cursor = "default";
  });
}
for (index = 0; index < day.length; index += 1) {
  day[index].addEventListener("mouseleave", function () {
    event.target.style.fontSize = "20px";
    event.target.style.cursor = "default";
  });
}
createInsertChild(myTasks[0], "span", 1, undefined, "Cozinhar");
createInsertChildColor(myTasks[0], "div", 2, "task", "green");
createInsertChild(myTasks[0], "br", 3, undefined, undefined);

createInsertChild(myTasks[0], "span", 4, undefined, "Estudar JS");
createInsertChildColor(myTasks[0], "div", 5, "task", "orange");
createInsertChild(myTasks[0], "br", 6, undefined, undefined);

createInsertChild(myTasks[0], "span", 7, undefined, "Estudar música");
createInsertChildColor(myTasks[0], "div", 8, "task", "lightblue");
createInsertChild(myTasks[0], "br", 9, undefined, undefined);

createInsertChild(myTasks[0], "span", 10, undefined, "Descansar");
createInsertChildColor(myTasks[0], "div", 11, "task", "pink");
createInsertChild(myTasks[0], "br", 12, undefined, undefined);
let taskSelected = "no";
let color = "";
for (index = 0; index < task.length; index += 1) {
  task[index].addEventListener("click", function () {
    if (taskSelected === "no") {
      event.target.classList.add("selected");
      taskSelected = "yes";
      color = event.target.style.backgroundColor;
      for (index = 0; index < day.length; index += 1) {
        day[index].classList.add("x");
      }
    } else if (event.target.style.backgroundColor === color) {
      for (index = 0; index < task.length; index += 1) {
        task[index].classList.remove("selected");
      }
      taskSelected = "no";
      for (index = 0; index < day.length; index += 1) {
        day[index].classList.remove("x");
      }
    } else if (taskSelected === "yes") {
      for (index = 0; index < task.length; index += 1) {
        task[index].classList.remove("selected");
        color = event.target.style.backgroundColor;
      }
      event.target.classList.add("selected");
      taskSelected = "yes";
    }
  });
}
for (index = 0; index < day.length; index += 1) {
  day[index].addEventListener("click", function () {
    if (event.target.classList.contains("x") === true) {
      if (event.target.classList.contains("markedDay") === false) {
        event.target.style.color = selected[0].style.backgroundColor;
        event.target.classList.add("markedDay");
      } else {
        event.target.style.color = "rgb(119,119,119)";
        event.target.classList.remove("markedDay");
      }
    }
  });
}
