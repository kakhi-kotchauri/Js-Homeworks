let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let login2 = document.querySelector('#login')
let loginl = document.querySelector('#loginl')
let mainform = document.querySelector('#mainform')
let closef = document.querySelector('.x')
let closef2 = document.querySelector('#xlogin2')
let email = document.querySelector('.inputemail')
let pass = document.querySelector('.inputpass')
let email2 = document.querySelector('#emaillogin')
let pass2 = document.querySelector('#passlogin')
let checkbox = document.querySelector('.checkbox')
let body = document.querySelector('#body')
let form = document.querySelector('#mainform')
let form2 = document.querySelector('#mainformlogin')
let confirmem = document.querySelector("#confirmem")
let confirmpass = document.querySelector("#confirmpass")
let par = document.querySelector('#par')
let errortitle = document.querySelector('#errortitle')
let errortitle2 = document.querySelector('#errortitle2')
let errorpar = document.querySelector('.error')
let wrong = document.querySelector('#wrong')


let localstorer = null

button1.addEventListener('click', function(){
    mainform.style.display = 'block'
    button1.style.display = 'none'
    button2.style.display = 'none'
    body.style.backgroundColor = 'rgba(4, 12, 5, 0.22)'
})

button2.addEventListener('click', function(){
  form2.style.display = 'block'
  button1.style.display = 'none'
  button2.style.display = 'none'
  body.style.backgroundColor = 'rgba(4, 12, 5, 0.22)'
})

function closeform() {
  mainform.style.display = 'none'
  button1.style.display = 'inline'
  button2.style.display = 'inline'
  email.value = '' 
  pass.value = '' 
  confirmem.value = '' 
  confirmpass.value = '' 
  checkbox.checked = false
  body.style.backgroundColor = 'F1F4FE'
  email.style.borderColor = 'gray'
  email.placeholder = 'Email'
  pass.style.borderColor = 'gray'
  pass.placeholder = 'password'
  confirmem.style.borderColor = 'gray'
  confirmem.placeholder = 'Confirm Email'
  confirmpass.style.borderColor = 'gray'
  confirmpass.placeholder = 'Confirm password'
}

function closeform2() {
  form2.style.display = 'none'
  button1.style.display = 'inline'
  button2.style.display = 'inline'
  email2.value = '' 
  pass2.value = '' 
  checkbox.checked = false
  body.style.backgroundColor = 'F1F4FE'
  email2.style.borderColor = 'gray'
  email2.placeholder = 'Email'
  pass2.style.borderColor = 'gray'
  pass2.placeholder = 'password'
  wrong.textContent = ''
}

closef.addEventListener('click', closeform)
closef2.addEventListener('click', closeform2)


form.addEventListener('submit', function(event) {
  event.preventDefault()
  if(!email.value.trim()) {
   email.style.borderColor = 'red'
   email.placeholder = 'field is empty'
  } 
  
  if(!confirmem.value.trim()) {
    confirmem.style.borderColor = 'red'
    confirmem.placeholder = 'field is empty'
   } 

  if (!pass.value.trim()) {
    pass.style.borderColor = 'red'
    pass.placeholder = 'field is empty'
  }

  if (!confirmpass.value.trim()) {
    confirmpass.style.borderColor = 'red'
    confirmpass.placeholder = 'field is empty'
  }

  if(email.value.length < 5  && email.value.trim()) {
    email.style.borderColor = 'red'
    email.value = ''
    email.placeholder = 'email is too short'
   } 

   
  if(confirmem.value.length < 5  && confirmem.value.trim()) {
    confirmem.style.borderColor = 'red'
    confirmem.value = ''
    confirmem.placeholder = 'email is too short'
   } 

  if (pass.value.length < 5 && pass.value.trim()) {
    pass.style.borderColor = 'red'
    pass.value = ''
    pass.placeholder = 'password is too short'
  }

  if (confirmpass.value.length < 5 && confirmpass.value.trim()) {
    confirmpass.style.borderColor = 'red'
    confirmpass.value = ''
    confirmpass.placeholder = 'password is too short'
  }

  if(email.value.trim() !== confirmem.value.trim()) {
    confirmem.style.borderColor = 'red'
    confirmem.value = ''
    confirmem.placeholder = 'Email is not a same'
  }

  if(pass.value.trim() !== confirmpass.value.trim()) {
    confirmpass.style.borderColor = 'red'
    confirmpass.value = ''
    confirmpass.placeholder = 'Password is not a same'
  }

  if(email.value.trim() && pass.value.trim() && email.value.length >= 5 && pass.value.length >= 5 && email.value === confirmem.value && pass.value === confirmpass.value ) {
    let obj = {
      email : email.value,
      pass : pass.value
    }
     smt(obj) 
     closeform()
  }
})

 
form2.addEventListener('submit', function(event) {
  event.preventDefault()
  if(!email2.value.trim()) {
   email2.style.borderColor = 'red'
   email2.placeholder = 'field is empty'
  } 
  if (!pass2.value.trim()) {
    pass2.style.borderColor = 'red'
    pass2.placeholder = 'field is empty'
  }

  if(email2.value.length < 5  && email2.value.trim()) {
    email2.style.borderColor = 'red'
    email2.value = ''
    email2.placeholder = 'email is too short'
   } 

  if (pass2.value.length < 5 && pass2.value.trim()) {
    pass2.style.borderColor = 'red'
    pass2.value = ''
    pass2.placeholder = 'password is too short'
  }

 
  if( localstorer !== null &&  email2.value.trim() && pass2.value.trim() && email2.value.length >= 5 && pass2.value.length >= 5 && email2.value === localstorer.data.email  && pass2.value === localstorer.data.pass ) {
     console.log('loggedin')
     closeform2()
    window.location.href="signedin.html"; 
  } else if (email2.value.trim() && pass2.value.trim() && email2.value.length >= 5 && pass2.value.length >= 5) {
    if( localstorer !== null && email2.value !== localstorer.data.email  || localstorer !== null && pass2.value !== localstorer.data.pass) {
      wrong.textContent = 'Email Or Password Is Wrong'
    } else if (localstorer === null) {
      console.log("bruh")
      wrong.textContent = 'Email Or Password Is Wrong'
    }
  }
  

})



async function smt(obj) {
    try{
        let response = await axios.post('https://reqres.in/api/articles', obj)
        console.log(response.data)
        localstorer = response
    } catch(err) {
       console.log('error ' + err)
       errortitle.textContent = 'Looks Like Some KInd of Error Happend'
       errortitle2.textContent = err
       par.style.display = 'none'
       errorpar.style.display = 'flex'
    }
}




