let login1 = document.querySelector('#button1')
let login2 = document.querySelector('#login')
let mainform = document.querySelector('#mainform')
let closef = document.querySelector('.x')
let email = document.querySelector('.inputemail')
let pass = document.querySelector('.inputpass')
let checkbox = document.querySelector('.checkbox')
let body = document.querySelector('#body')
let form = document.querySelector('#mainform')



login1.addEventListener('click', function(){
    mainform.style.display = 'block'
    login1.style.display = 'none'
    body.style.backgroundColor = 'rgba(4, 12, 5, 0.22)'
})


closef.addEventListener('click', function() {
    mainform.style.display = 'none'
    login1.style.display = 'inline'
    email.value = '' 
    pass.value = '' 
    checkbox.checked = false
    body.style.backgroundColor = 'F1F4FE'
    email.style.borderColor = 'gray'
    email.placeholder = 'Email'
    pass.style.borderColor = 'gray'
    pass.placeholder = 'password'

})

form.addEventListener('submit', function(event) {
  event.preventDefault()
  if(!email.value.trim()) {
   email.style.borderColor = 'red'
   email.placeholder = 'field is empty'
  } 
  if (!pass.value.trim()) {
    pass.style.borderColor = 'red'
    pass.placeholder = 'field is empty'
  }

  if(email.value.trim() && pass.value.trim()) {
    window.location.href="signedin.html"; 
  }

})





