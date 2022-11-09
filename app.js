const btn = document.querySelector(".button");
const todoText = document.querySelector(".text-input");
const myList = document.querySelector("#myList");
const deleteSelectedButton = document.querySelector(".delete-selected-button");
const deleteAllButton = document.querySelector(".delete-all-button");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(todoText.value);
  if (todoText.value.trim() !== "") {
    const closeBtn = document.createElement("span");
    const newListItem = document.createElement("li");
    newListItem.classList = "list-group-item";
    newListItem.innerText = todoText.value;
    myList.appendChild(newListItem);
    closeBtn.innerText = "Delete";
    closeBtn.classList = "btn btn-primary";
    newListItem.appendChild(closeBtn);
    closeBtn.addEventListener("click", function (c) {
      let button = c.target.parentElement;
      button.remove();
    });
    todoText.value = "";
  } else {
    alert("input is empty");
  }
});

myList.addEventListener("click", function (item) {
  if (item.target.tagName === "LI") {
    item.target.classList.toggle("checked");
  }
});

deleteSelectedButton.addEventListener("click", function () {
  const checkedClass = document.querySelectorAll("li");
  checkedClass.forEach(function (lis) {
    let className = lis.classList;
    if (className.contains("checked")) {
      lis.remove();
    }
  });
});

deleteAllButton.addEventListener("click", function () {
  myList.innerText = "";
});
