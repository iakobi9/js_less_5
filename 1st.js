//burger
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav_menu");

function myFunction(x) {
  x.classList.toggle("change");
}

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
//main body
let input = document.querySelector(".input-block");
let addButton = document.querySelector(".btn");
let ullist = document.querySelector(".ul-list");
let clearAll = document.querySelector(".clearall");
let formElement = document.querySelector(".form_wrapper");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  let value = input.value;
  if (value == "") {
    return;
  }
  let li = document.createElement("li");

  // delate button
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Item";
  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  li.innerText = value;
  li.appendChild(deleteButton);
  ullist.appendChild(li);

  input.value = "";
});

clearAll.addEventListener("click", function () {
  ullist.innerHTML = "";
});
