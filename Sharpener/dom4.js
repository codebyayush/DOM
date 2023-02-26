//to save the form information in local storage

const submitBtn = document.getElementById('submit');
const form = document.getElementById('addForm');
const userList = document.getElementById('items');
// const local = localStorage.getItem('users')



//to add users in (local storage)
submitBtn.addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  
  const formData = {
    name: name,
    email: email,
    phone: phone
  };
  let users = [];

  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
  }

  users.push(formData);
  localStorage.setItem(formData.email, formData.name)

  
//this will show user details on display
  const userList = document.getElementById('items')

  const nam = document.createElement('li')
  nam.textContent = formData.name + ' - ' + formData.email + ' - ' + formData.phone
//


//this will add del functionality clicking del btn
  const delBtn = document.createElement('input')
  delBtn.type = 'button'
  delBtn.value = 'Delete'
  delBtn.onclick = () => {

    localStorage.removeItem(formData.email)
    userList.removeChild(nam)
  }
//

//edit button functionality
  const editBtn = document.createElement('input')
  editBtn.type = 'button'
  editBtn.value = 'Edit'
  
  editBtn.onclick = () =>{
    document.getElementById('name').value = formData.name
    document.getElementById('email').value = formData.email
    document.getElementById('phone').value = formData.phone

    localStorage.removeItem(formData.email)
    userList.removeChild(nam)
  }
  nam.appendChild(delBtn)
  nam.appendChild(editBtn)
  userList.appendChild(nam)
//
  })

  
  
//

// localStorage.setItem(formData.email, formData.name);

  // JSON.parse(localStorage.getItem('users'))
  //JSON.stringify() method is used to convert 
  // the JavaScript object to a JSON string, 
  // which is the format required for local storage. 

// console.log(JSON.parse(localStorage.getItem('users')))