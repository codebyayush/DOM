//Examine the DOCUMENT OBJECT

var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')
var Item = document.getElementById('main')
var Item2 = document.getElementById('Item')

Item2.style.color= 'green'
Item2.style.fontWeight= '900'
Item2.style.borderBottom = 'solid 2px #000'
Item.style.borderBottom= 'solid 3px #000'

header.style.borderBottom= 'solid 3px #000';

//get element by Class name

var items = document.getElementsByClassName('list-group-item')

items[2].style.backgroundColor = 'green';

for (var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}

