const wrapper = document.querySelectorAll(".wrapper");

// const child = wrapper.querySelectorAll("> div > div");

// const student = {
//   name: "abc",
//   address: 15,
// };

// for (let item in student) {
//   console.log(student[item]);
// }

let isX = false;

const matrix = [];

for (let i = 1; i <= 3; i++) {
  matrix.push([null, null, null]);
}

// 0 1 2 | 3 4 5 |  6 7 8

const total = document.querySelectorAll(".row");

wrapper.forEach(function (item, y) {
  item.addEventListener("click", function (event) {
    const point = item.querySelector(".point");

    const parent = item.parentElement;

    y = y - 3 * Math.floor(y / 3);

    const x = Number(parent.dataset.index);

    if (!!point.innerHTML.trim()) return;

    isX = !isX;

    point.innerHTML = isX ? "X" : "O";

    matrix[x][y] = isX ? "x" : "o";

    check();
  });
});

function check() {
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      const row = matrix[i];
      //   if (row[0] === "x" && row[1] === "x" && row[2] === "x") {
      //     setTimeout(function () {
      //       alert("X thắng");
      //     });
      //     return;
      //   }
      if (checkDuongCheo([row[0], row[1], row[2], "x"])) {
        win("x");
        return;
      }

      if (checkDuongCheo([row[0], row[1], row[2], "o"])) {
        win("o");
        return;
      }

      if (checkDuongCheo([matrix[0][j], matrix[1][j], matrix[2][j]], "x")) {
        win("x");
        return;
      }
      if (checkDuongCheo([matrix[0][j], matrix[1][j], matrix[2][j]], "y")) {
        win("x");
        return;
      }
    }
  }

  const duongcheo = [];

  for (let i = 0; i <= 2; i++) {
    duongcheo.push(matrix[i][i]);
  }

  const duongcheonguoc = [];

  for (let i = 2; i >= 0; i--) {
    duongcheonguoc.push(matrix[2 - i][i]);
  }

  if (checkDuongCheo(duongcheo, "x") || checkDuongCheo(duongcheonguoc, "x")) {
    win("x");
    return;
  }

  if (checkDuongCheo(duongcheo, "o") || checkDuongCheo(duongcheonguoc, "o")) {
    win("o");
    return;
  }

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      if (matrix[i][j] === null) return;
    }
  }

  alert("Hòa");
}

function checkDuongCheo(duongcheo, target) {
  return duongcheo.every(function (item) {
    return item === target;
  });
}

function win(target) {
  setTimeout(function () {
    alert(`${target} win`);
  });
}
