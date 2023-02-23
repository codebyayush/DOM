//to save the form information in local storage

const submitBtn = document.getElementById('getcall');
const form = document.getElementById('addForm');
const userList = document.getElementById('items');

//function to add user info in the display list
form.addEventListener('submit',function(e)
{
e.preventDefault()
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var date = document.getElementById('date').value
    var time = document.getElementById('time').value


    var li  = document.createElement('li')

    li.classname = 'list-group-item'

    li.appendChild(document.createTextNode(name))
    li.appendChild(document.createTextNode(email))
    li.appendChild(document.createTextNode(phone))
    li.appendChild(document.createTextNode(date))
    li.appendChild(document.createTextNode(time))

    userList.appendChild(li)
})


//to add user in an array
submitBtn.addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const formData = {
    name: name,
    email: email,
    phone: phone,
    date: date,
    time: time
  };
  let users = [];

  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
  }

  users.push(formData);

  localStorage.setItem('users', JSON.stringify(users));

//   localStorage.setItem('formData', JSON.stringify(formData));
  JSON.parse(localStorage.getItem('users'))
  //JSON.stringify() method is used to convert 
  // the JavaScript object to a JSON string, 
  // which is the format required for local storage.

});

console.log(JSON.parse(localStorage.getItem('users')))