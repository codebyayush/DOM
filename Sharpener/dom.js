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

//task4  getElementsByClassName

var items = document.getElementsByClassName('list-group-item')

items[2].style.backgroundColor = 'green';

for (var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}

//getElementsByTagName

// var li = document.getElementsByTagName('li')

// li[2].style.backgroundColor = 'green';

// for (var i=0; i<li.length; i++){
//     li[i].style.fontWeight = 'bold';
// }



//task 5

var items= document.getElementsByClassName('list-group-item1')

items[0].style.backgroundColor = 'blue'
items[0].style.color = 'white'

var li = document.getElementsByTagName('li')

li[4].style.backgroundColor = 'orange'
li[4].style.color = 'white'