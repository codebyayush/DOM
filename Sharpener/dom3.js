var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

//submit event
form.addEventListener('submit', addItem)

//delete event
itemList.addEventListener('click', removeItem)

//filter event
filter.addEventListener('keyup', filterItems)



//additem
function addItem(e){
    e.preventDefault();

    //getinputvalue
    var newItem = document.getElementById('item').value
    var newItem2 = document.getElementById('item2').value

    //create new li element
    var li  = document.createElement('li')

    //add class
    li.className = 'list-group-item'

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(document.createTextNode(newItem2))

    //create del button
    var deleteBtn = document.createElement('li')

   //add class to del btn
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    
   //Append text node
    deleteBtn.appendChild(document.createTextNode('X'))

    //Append button to list
    li.appendChild(deleteBtn)

    //create edit button
    var editBtn = document.createElement('li')

    //add class to edit btn
    editBtn.className = 'btn btn-secondary btn-sm float-right secondary'

    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'))

    //Append button to list
    li.appendChild(editBtn)

    itemList.appendChild(li)
}

//removeItem
function removeItem(e){
    if (e.target.classList.contains('delete')){
        if (confirm('Are you sure?')){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}



//filterItems
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase()

    //get list
    var items = itemList.getElementsByTagName('li')  
     //this will give HTML collection we need an array
    
     //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent
        var itemName2 = item.childNodes[1].textContent

        if (itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1 )
        {
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
        
    })

}