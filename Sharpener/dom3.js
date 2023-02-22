var form = document.getElementById('addForm')
var itemList = document.getElementById('items')

//submit event
form.addEventListener('submit', addItem)

//delete event
itemList.addEventListener('click', removeItem)


//additem
function addItem(e){
    e.preventDefault();

    //getinputvalue
    var newItem = document.getElementById('item').value

    
    //create new li element
    var li  = document.createElement('li')

    //add class
    li.className = 'list-group-item'

    //Add text node with input value

    li.appendChild(document.createTextNode(newItem))

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