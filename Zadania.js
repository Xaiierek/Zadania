const addPlanBtn = document.getElementById("addPlan");


const obArray = [];

addPlanBtn.onclick = function(){
    const inputLabel = document.querySelector("input");

    const todocontainer = document.getElementById("todoContainer")
    const value = inputLabel.value

        const productContainer = document.createElement("div");
        productContainer.className = 'todolist'

        const todoDiv = document.createElement("div")
        const trashIcon = document.createElement("i")
        const checkboxId = document.createElement('input')
        checkboxId.type = "checkbox"
        checkboxId.className = "checkboxId"
        trashIcon.className = 'fa-solid fa-trash'
        todoDiv.className = 'todoDiv';
        todoDiv.innerHTML = `${value}`;

        
        // localStorage.setItem("productList", obArray)
        // console.log(localStorage.getItem("productList"))

        
        obArray.push(value)
        localStorage.setItem("productList", JSON.stringify(obArray))

        console.log(obArray)


        trashIcon.onclick = function(){
            productContainer.remove();
        }

        checkboxId.onclick = function(){
            if(checkboxId.checked){
                // console.log("check")
                productContainer.style.background = "gray";
                todoDiv.style.textDecoration = "line-through";

            }else{
                // console.log("nope")
                productContainer.style.background = "white"
                todoDiv.style.textDecoration = "none";
            }
        }

        todocontainer.appendChild(productContainer);
        productContainer.appendChild(checkboxId);
        productContainer.appendChild(todoDiv);
        todoDiv.appendChild(trashIcon);
       

    }



window.onload = function(){
     //console.log(JSON.parse(localStorage.getItem("productList"))) 
    //const dataJSON = JSON.parse(localStorage.getItem("productList"));
    const productListJSON = localStorage.getItem("productList");
    const dataJSON = productListJSON ? JSON.parse(productListJSON) : [];

    for(let i = 0; i < dataJSON.length; i++){

        const task = dataJSON[i];

        const todocontainer = document.getElementById("todoContainer")

        const productContainer = document.createElement("div");
        productContainer.className = 'todolist'

        const todoDiv = document.createElement("div")
        const trashIcon = document.createElement("i")
        const checkboxId = document.createElement('input')
        checkboxId.type = "checkbox"
        checkboxId.className = "checkboxId"
        trashIcon.className = 'fa-solid fa-trash'
        todoDiv.className = 'todoDiv';
        todoDiv.innerHTML = task;
        
        trashIcon.onclick = function(){
            //dataJSON.splice(i, 1);
            dataJSON.pop(i, 1)
            productContainer.remove();            
        }

        checkboxId.onclick = function(){
            if(checkboxId.checked){
                // console.log("check")
                productContainer.style.background = "gray";
                todoDiv.style.textDecoration = "line-through";

            }else{
                // console.log("nope")
                productContainer.style.background = "white"
                todoDiv.style.textDecoration = "none";
            }
        }

        todocontainer.appendChild(productContainer);
        productContainer.appendChild(checkboxId);
        productContainer.appendChild(todoDiv);
        todoDiv.appendChild(trashIcon);

    }
};