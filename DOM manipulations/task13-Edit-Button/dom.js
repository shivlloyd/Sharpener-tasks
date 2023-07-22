const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = 'skyblue';
    onSubmit(e);
});

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('.btn').style.background = 'black';
});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('.btn').style.background = 'gray';
});

//change of events when takes input

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = '*Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
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

        //storing the name and email as an object on Local Storage
        let user = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };

        user = JSON.stringify(user);
        localStorage.setItem(emailInput.value, user);

        user = JSON.parse(localStorage.getItem(emailInput.value));

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';

        //remove user from Local Storage when clicked delete
        deleteBtn.addEventListener('click', (e) => {
            //remove user from the userList
            li.remove();

            //remove user from the Local Storage
            localStorage.removeItem(user.email);
        })

        //edit user details when clicked edit
        editBtn.addEventListener('click', (e) => {
            //transfer details of user from Local Storage to user Input section
            nameInput.value = user.name;
            emailInput.value = user.email;
            phoneInput.value = user.phone;

            //remove previous user details from the userList
            li.remove();

            //remove previous user details from the local storage
            localStorage.removeItem(user.email);

        })

    }
}
