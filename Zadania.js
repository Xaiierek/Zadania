let productList = []; // [{ name: "task1", isDone: false }, { name: "task2", isDone: false }];

function onAddHandler() {
  console.log("onAddClick");
}

function getInputValue() {
  const input = document.querySelector("input");
  return input.value;
}

function renderProduct(name, checked) {
  const container = document.getElementById("todoContainer");

  const productContainer = document.createElement("div");
  productContainer.className = "todolist";

  const todoDiv = document.createElement("div");
  const trashIcon = document.createElement("i");
  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.className = "checkboxId";
  trashIcon.className = "fa-solid fa-trash";
  todoDiv.className = "todoDiv";
  todoDiv.innerHTML = name;

  if (checked) {
    checkboxElement.checked = true;
    todoDiv.className = todoDiv.className + " done";
  }

  trashIcon.onclick = function () {
    const filteredProductList = productList.filter(function (product) {
      return product.name !== name;
    });
    productList = filteredProductList;
    rerender();
    updateProductListStorage();
  };

  checkboxElement.onclick = function () {
    productList.forEach(function (product) {
      if (product.name === name) {
        product.isDone = !product.isDone; // negation
      }
    });
    rerender();
    updateProductListStorage();
  };

  container.appendChild(productContainer);
  productContainer.appendChild(checkboxElement);
  productContainer.appendChild(todoDiv);
  todoDiv.appendChild(trashIcon);
}

function rerender() {
  document.getElementById("todoContainer").innerHTML = "";
  productList.forEach(function (product) {
    renderProduct(product.name, product.isDone);
  });
}

function updateProductListStorage() {
  localStorage.setItem("productList", JSON.stringify(productList));
}

function getProductsFromStorage() {
  const productListJSON = localStorage.getItem("productList");

  return productListJSON ? JSON.parse(productListJSON) : []; // ternary operator
}

const addProductButtonElement = document.getElementById("addPlan");
addProductButtonElement.addEventListener("click", function () {
  const name = getInputValue();
  productList.push({ name: name, isDone: false });
  rerender();
  updateProductListStorage();
});

window.onload = function () {
  const listFromStorage = getProductsFromStorage();
  productList = listFromStorage;
  rerender();
};