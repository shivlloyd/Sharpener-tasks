const crudAPIkey = 'https://crudcrud.com/api/b9cfef3cf9a748efa6f3365193da05b0/itemData';

//change of events when takes input

const myForm = document.querySelector('#my-form');
const msg = document.querySelector('#msg');
const itemPrice = document.querySelector('#price');
const itemName = document.querySelector('#name');
const itemCategory = document.querySelector('#category');
const btn = document.querySelector('#btn');


function addItemList(itemDataList){
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.appendChild(document.createTextNode(`${itemDataList.price} - ${itemDataList.name} - ${itemDataList.category}`));

    // adding delete button on list
    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-sm btn-danger mx-1";
    deleteBtn.appendChild(document.createTextNode('Delete Order'));
    li.appendChild(deleteBtn);

    //adding list in category
    if(itemDataList.category === 'clothing'){
        document.querySelector('#clothing').appendChild(li);
    }
    if(itemDataList.category === 'electronics'){
        document.querySelector('#electronics').appendChild(li);
    }
    if(itemDataList.category === 'food'){
        document.querySelector('#food').appendChild(li);
    }

    //delete item when clicked
    deleteBtn.addEventListener('click', (e) => {
        var itemCrudAPI = crudAPIkey + `/${itemDataList._id}`;

        // delete item
        axios
            .delete(itemCrudAPI)
            .then()
            .catch((error) => {
                console.log(error);
            })
        
        li.remove();

    })
}

// rendering listItems stored in crud server
window.addEventListener("DOMContentLoaded", () => {
    axios
        .get(crudAPIkey)
        .then((response) => {
            for(var i=0; i<response.data.length; i++){
                addItemList(response.data[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        })
})

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (itemPrice.value === '' || itemName.value === '' || itemCategory.value === '') {
        msg.innerHTML = '*Please enter all fields';

    } else {

        //storing items as an object on crud-crud using axios
        let allItems = {
            price: `₹${itemPrice.value}`,
            name: itemName.value,
            category: itemCategory.value
        };

        axios
            .post(crudAPIkey, allItems)
            .then((response) => {
                //calling addItemList function
                addItemList(response.data)

                //clear fields
                itemPrice.value = '';
                itemName.value = '';
                itemCategory.value = '';
                msg.innerHTML = ""; 
            })
            .catch((err) => {
                msg.innerHTML = "*something wrong with the API server";
            })
    }
});