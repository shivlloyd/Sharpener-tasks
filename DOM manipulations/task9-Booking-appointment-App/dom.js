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
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = '*Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //storing the name and email on Local Storage
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('email', emailInput.value);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}