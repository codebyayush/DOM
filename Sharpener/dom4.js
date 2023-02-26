//to save the form information in local storage

const submitBtn = document.getElementById('submit');
const form = document.getElementById('addForm');
const userList = document.getElementById('items');
// const local = localStorage.getItem('users')



//function to add user info in the display list


//to add users in an array (local storage)
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
    
    // let arr = JSON.parse(localStorage.getItem('users'))
    // let index = arr.indexOf(formData.name)
    // if (index>-1){
    //   arr.splice(index, 1);
    // }


    localStorage.removeItem(formData.email)
    userList.removeChild(nam)
  }
  nam.appendChild(delBtn)
  userList.appendChild(nam)
  
//

  localStorage.setItem(formData.email, formData.name);

  // JSON.parse(localStorage.getItem('users'))
  //JSON.stringify() method is used to convert 
  // the JavaScript object to a JSON string, 
  // which is the format required for local storage. 
  })

// console.log(JSON.parse(localStorage.getItem('users')))