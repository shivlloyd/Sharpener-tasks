var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;
    // get input2 value 
    var newItem2 = document.getElementById('item2').value;

    // create new li element
    var li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // add text node with input and input2 value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(newItem2));

    //create delete button element
    var deleteBtn = document.createElement('button');
    // create edit button element
    var editBtn = document.createElement('button');

    // add classes to del button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    // add classes to edit button
    editBtn.className = "btn btn-success btn-sm float-right edit";

    // append text node to del button
    deleteBtn.appendChild(document.createTextNode("X"));
    // append text node to edit button
    editBtn.appendChild(document.createTextNode("Edit"));

    // apped edit button to li
    li.appendChild(editBtn);
    // append delete button to li
    li.appendChild(deleteBtn);

    //append li to list
    itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure ?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var firstText = item.childNodes[0].textContent;
        var space = item.childNodes[1].textContent;
        var lastText = item.childNodes[2].textContent;
        var wholeText = firstText + space + lastText;
       
        if(wholeText.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    });
}