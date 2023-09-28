const crudAPIkey = 'https://crudcrud.com/api/8def0afe04d8453aa756ef333313f997/appointmentData';

//change of events when takes input

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const btn = document.querySelector('.btn');


function addUserList(userData){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${userData.name} - ${userData.email} - ${userData.phone}`));

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


    //remove user user details when clicked delete
    deleteBtn.addEventListener('click', (e) => {
        var deleteCrudAPI = crudAPIkey + `/${userData._id}`;

        //removing user from crud server
        axios
            .delete(deleteCrudAPI)
            .then()
            .catch((error) => {
                console.log(error)
            })

        //remove user from the userList
        li.remove();
    })

    //edit user details when clicked edit
    editBtn.addEventListener('click', (e) => {
        var getUserCrudAPI = crudAPIkey + `/${userData._id}`;

        //transfer details of user from CRUD server to user Input section
        axios
            .get(getUserCrudAPI)
            .then((response) => {
                nameInput.value = response.data.name
                emailInput.value = response.data.email
                phoneInput.value = response.data.phone

                // deleting previous user details from CRUD server
                axios
                    .delete(getUserCrudAPI)
                    .then()
                    .catch((error)=>{
                        console.log(error)
                    })
            })
            .catch((error) => {
                console.log(error)
            })

        //remove previous user details from userList
        li.remove();
    })

}

// rendering userList stored in crud server
window.addEventListener("DOMContentLoaded", () => {
    axios
        .get(crudAPIkey)
        .then((response) => {
            for(var i=0; i<response.data.length; i++){
                addUserList(response.data[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        })
})

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = '*Please enter all fields';

    } else {

        //storing the user data as an object on crud-crud using axios
        let user = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };

        axios
            .post(crudAPIkey, user)
            .then((response) => {
                //calling addUserList function
                addUserList(response.data)

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
    }
});