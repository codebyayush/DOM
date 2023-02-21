//traversing the dom

var itemList = document.querySelector('#items')

//parentNode
console.log(itemList.parentNode)
console.log(itemList.parentNode.parentNode)
itemList.parentNode.style.backgroundColor = "#f4f4";


//parentElement   **pN and pE they both are same in most cases
console.log(itemList.parentElement)


//childNodes **it shows text in line break, don't use it
// console.log(itemList.childNodes)

//children   **use this
console.log(itemList.children)
console.log(itemList.children[1])
itemList.children[1].style.backgroundColor = 'purple'


//lastelementchild

console.log(itemList.lastElementChild)

//nextelementsibling  previouselementsibling
// console.log(itemList.previousElementSibling)
// console.log(itemList.nextElementSibling)



//createElement

var newDiv = document.createElement('div')

//add class

newDiv.className = "Hello"

//add id

newDiv.id = 'hello1'

//add attr

newDiv.setAttribute('title', 'Hello Div')
console.log(newDiv)

//create text node
var newDivText = document.createTextNode('Hello World!')

//add text to div
newDiv.appendChild(newDivText)
//at this point it only exists in javascript not in the page itself.

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')

//-----------------------------------------------------

//task 7 question 2
container.insertBefore(newDiv, h1)

var ul = document.querySelector('div .list-group')
var li = document.querySelector('div .list-group-item')

console.log(li)

ul.insertBefore(newDiv, li)
//-----------------------------------------------------
