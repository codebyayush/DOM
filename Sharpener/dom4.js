//to save the form information in local storage

const submitBtn = document.getElementById('getcall');

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


  localStorage.setItem('formData', JSON.stringify(formData));
  JSON.parse(localStorage.getItem('formData'))
  //JSON.stringify() method is used to convert 
  // the JavaScript object to a JSON string, 
  // which is the format required for local storage.

});

console.log(JSON.parse(localStorage.getItem('formData')))
//JSON.parse method is used to convert the string format of 
// data stored into object form. 