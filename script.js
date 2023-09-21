const inputBox = document.querySelector("#txtContent");
const saveBtn = document.querySelector("#btn1");
const clearBtn = document.querySelector("#btn2");

document.querySelector("#btn1").addEventListener("click", function () {
  btn1();
});
document.querySelector("#btn2").addEventListener("click", function () {
  btn2();
});

function btn1() {
  localStorage.setItem("data", inputBox.value);
}
function btn2() {
  localStorage.clear();
  inputBox.value = "";
}
function show() {
  inputBox.innerHTML = localStorage.getItem("data");
}
show();
