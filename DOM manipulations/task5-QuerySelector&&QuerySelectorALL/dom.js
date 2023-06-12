// QuerySelector //

// Making the 2nd item have green background color
var secondItem = document.querySelector('li:nth-child(2)');
secondItem.style.backgroundColor = "green";

// Making the 3rd item invisible
var thirdItem = document.querySelector('li:nth-child(3)');
thirdItem.style.display = "none";

// QuerySelectorAll //

// Using QuerySelectorALL changing the font color to green for 2nd item in the item list
var item2 = document.querySelectorAll('li');
item2[1].style.color = 'lime';

// Choosing all the odd elements and making their background green using QuerySelectorALL
var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'lime';
}