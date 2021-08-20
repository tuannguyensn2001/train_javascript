// const item = document.querySelectorAll(".item");
// const operator = document.querySelector(".operator");
// const result = document.querySelector(".result");
// const deleteButton = document.querySelector(".delete");

// const equal = document.querySelector(".equal");
// const ac = document.querySelector(".ac");

// item.forEach(function (child) {
//   child.onclick = function () {
//     const content = this.textContent;

//     if (result.textContent === "MATH IS ERROR") {
//       operator.textContent = "";
//       result.textContent = "";
//     }

//     if (result.textContent !== "" && !["+", "-", "*", "/"].includes(content)) {
//       operator.textContent = "";
//       result.textContent = "";
//     }

//     if (["+", "-", "*", "/"].includes(content)) {
//       if (result.textContent !== "") {
//         operator.textContent = "";
//         operator.textContent += result.textContent + " " + content + " ";
//         result.textContent = "";
//       } else operator.innerHTML += " " + content + " ";
//     } else {
//       operator.innerHTML += content;
//     }
//   };
// });

// equal.onclick = function () {
//   try {
//     result.textContent = math.evaluate(operator.innerHTML);
//   } catch (e) {
//     result.textContent = "MATH IS ERROR";
//   }
// };

// deleteButton.onclick = function () {
//   if (operator.textContent[operator.textContent.length - 1] === " ") {
//     operator.textContent = operator.textContent.slice(
//       0,
//       operator.textContent.length - 2
//     );
//   } else {
//     operator.textContent = operator.textContent.slice(
//       0,
//       operator.textContent.length - 1
//     );
//   }
// };

// //slice
// ac.onclick = function () {
//   operator.textContent = "";
//   result.textContent = "";
// };

//JSON

// const student = {
//   name: "Student",
//   age: 19,
//   address: "VN",
// };

// console.log(JSON.parse(student));

// localStorage.setItem("test", JSON.stringify(student));

const listTasks = JSON.parse(localStorage.getItem("todolist")) || [];

const list = document.querySelector("ul");

let index = -1;

listTasks.forEach(function (task) {
  const li = document.createElement("li");

  index++;

  li.innerHTML = `
      <div class='flex flex-col justify-center'>
       <input ${task.check ? "checked" : ""} class="check_task" type="checkbox">
    </div>
    <p>${task.content}</p>
    <button >x</button>
    `;

  li.className = "flex justify-between";

  li.setAttribute("data-index", index);

  list.appendChild(li);
});

const addTask = document.querySelector(".add_task");

const confirmAddTask = document.querySelector(".confirm_add_task");

const errorMessage = document.querySelector(".error_message");

addTask.focus();

confirmAddTask.addEventListener("click", function () {
  const task = addTask.value;

  errorMessage.classList.remove("show_message");

  if (!task) {
    errorMessage.classList.add("show_message");
    return;
  }

  //   list.innerHTML =
  //     list.innerHTML +
  //     `
  //   <li class='flex justify-between'>
  //   <div class='flex flex-col justify-center'>
  //       <input class="check_task" type="checkbox">
  //   </div>
  //   <p>${task}</p>
  //   <button >x</button>
  // </li>

  const li = document.createElement("li");

  index++;

  li.innerHTML = `
    <div class='flex flex-col justify-center'>
     <input class="check_task" type="checkbox">
  </div>
  <p>${task}</p>
  <button >x</button>
  `;

  li.className = "flex justify-between";

  li.dataset.index = index;

  list.appendChild(li);

  addTask.value = "";
  addTask.focus();

  listTasks.push({
    check: false,
    content: task,
  });

  localStorage.setItem("todolist", JSON.stringify(listTasks));
});

document.addEventListener("change", function (event) {
  if (!event.target.classList.contains("check_task")) return;

  const currentIndex = event.target.closest("li").dataset.index;

  listTasks[currentIndex].check = event.target.checked;

  localStorage.setItem("todolist", JSON.stringify(listTasks));

  if (event.target.checked) {
    event.target.closest("li").classList.add("done");
  } else {
    event.target.closest("li").classList.remove("done");
  }
});

//jquery