const myForm = document.querySelector('#my-form');
const msg = document.querySelector('#msg');
const expenseInput = document.querySelector('#expense');
const descriptionInput = document.querySelector('#description');
const categoryInput = document.querySelector('#category');
const btn = document.querySelector('#btn');
const expenseList = document.querySelector("#expense-list");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (expenseInput.value === '' || descriptionInput.value === '' || categoryInput.value === ''){
        msg.innerHTML = "*please don't leave any field blank";

    } else if(localStorage.getItem(descriptionInput.value) !== null){
        msg.innerHTML = `*${descriptionInput.value} is already present in list`;

    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${expenseInput.value} - ${descriptionInput.value} - ${categoryInput.value}`));
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        //grouping Buttons in a div
        var btnDiv = document.createElement("div");
        btnDiv.className = "btn-group";
        li.appendChild(btnDiv);

        //add edit button in list
        var editBtn = document.createElement('button');
        editBtn.appendChild(document.createTextNode("Edit"));
        editBtn.className = "btn btn-sm btn-success mx-1";
        btnDiv.appendChild(editBtn);

        //add delete btn in list
        var deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('Delete'));
        deleteBtn.className = "btn btn-sm btn-danger mx-1";
        btnDiv.appendChild(deleteBtn);

        //adding list in expense list
        expenseList.appendChild(li);

        //adding the expenses on the Local storage
        let expenseStorage = {
            expense: expenseInput.value,
            description: descriptionInput.value,
            category: categoryInput.value
        };

        expenseStorage = JSON.stringify(expenseStorage)
        localStorage.setItem(descriptionInput.value, expenseStorage)

        expenseStorage = JSON.parse(localStorage.getItem(descriptionInput.value));

        //clear input fields and error msg
        expenseInput.value="";
        descriptionInput.value="";
        categoryInput.value="";
        msg.innerHTML = "";

        //remove list from expenseList and local storage when clicked delete
        deleteBtn.addEventListener('click', (e) => {
            li.remove();
            localStorage.removeItem(expenseStorage.description);
        });

        //edit list items when clicked edit
        editBtn.addEventListener('click', (e) => {
            expenseInput.value = expenseStorage.expense;
            descriptionInput.value = expenseStorage.description;
            categoryInput.value = expenseStorage.category;

            li.remove();

            localStorage.removeItem(expenseStorage.description);
        });
        
    }
});