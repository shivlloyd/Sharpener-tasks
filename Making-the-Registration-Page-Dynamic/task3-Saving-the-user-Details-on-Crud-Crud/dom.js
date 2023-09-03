const crudAPIkey = 'https://crudcrud.com/api/6d2ffa60df28418fa5693869d3f81134/appointmentData';

//change of events when takes input

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const btn = document.querySelector('.btn');


btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = '*Please enter all fields';

    } else {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value} - ${emailInput.value} - ${phoneInput.value}`));

        // adding delete button on user lists
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.appendChild(document.createTextNode('Delete'));
        li.appendChild(deleteBtn);

        //adding edit button on user lists
        var editBtn = document.createElement('button');
        editBtn.className = 'editBtn';
        editBtn.appendChild(document.createTextNode('Edit'));
        li.appendChild(editBtn);

        //adding li in userList
        userList.appendChild(li);

        //storing the user data as an object on crud-crud using axios
        let user = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };

        axios
            .post(crudAPIkey, user)
            .then((response) => {
                //clear fields
                nameInput.value = '';
                emailInput.value = '';
                phoneInput.value = '';
                msg.remove();  
            })
            .catch((err) => {
                msg.classList.add('error');
                msg.innerHTML = "*something wrong with the API server";
            })


        //remove user user details when clicked delete
        deleteBtn.addEventListener('click', (e) => {
            //remove user from the userList
            li.remove();
        })

        //edit user details when clicked edit
        editBtn.addEventListener('click', (e) => {
            //transfer details of user from Local Storage to user Input section
            nameInput.value = user.name;
            emailInput.value = user.email;
            phoneInput.value = user.phone;

            //remove previous user details from the userList
            li.remove();
        })

    }
});