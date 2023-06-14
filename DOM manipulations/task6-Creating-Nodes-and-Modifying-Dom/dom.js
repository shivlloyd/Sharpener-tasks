// TRAVERSING THE DOM //

// var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
// console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
// console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement

// //create a div
// var newDiv = document.createElement('div');

// //add class
// newDiv.className = 'hello';

// //add id
// newDiv.id = 'hello1';

// //add attribute
// newDiv.setAttribute('title', 'Hello Div');

// //create text node
// var newDivText = document.createTextNode('Hello World');

// //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);


//Adding HEllo word before Item Lister//
var newDiv = document.createElement('div');
var newText = document.createTextNode('HEllo');
newDiv.appendChild(newText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

//Adding HEllo word before Item 1//
var newLi = document.createElement('li');
newLi.className = 'list-group-item';

var liText = document.createTextNode("HEllo");
newLi.appendChild(liText);

var ul = document.querySelector('ul');
var firstLi = document.querySelectorAll('li');

ul.insertBefore(newLi, firstLi[0]);


