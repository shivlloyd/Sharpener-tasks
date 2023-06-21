// On clicking the delete button we should be able to remove the newly created li tag
// and add an edit button next to the delete icon.

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();

    var inputItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(inputItem));

    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    editBtn.className = "btn btn-success btn-sm float-right edit";
    deleteBtn.appendChild(document.createTextNode("X"));
    editBtn.appendChild(document.createTextNode("Edit"));

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(e){
    e.preventDefault();

    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure ?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}