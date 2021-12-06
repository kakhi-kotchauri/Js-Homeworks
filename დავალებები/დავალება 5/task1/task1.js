// let button = document.querySelector('#but')
// let button2 = document.querySelector('#but2')

// let input = document.querySelector('#but')

// let clickd = function(event) {
//   event.target.textContent = 'ss'
// }

// button.addEventListener('click',clickd)
// button2.addEventListener('click',clickd)

let form = document.querySelector('#form')
let input = document.querySelector('#input')
let ul = document.querySelector('#ul')

form.addEventListener('submit', function(event) {
   event.preventDefault()
   if(input.value) {
       input.placeholder = 'type something'

    let li = document.createElement('li')
    li.textContent = input.value
    let removebutton = document.createElement('button')
    removebutton.textContent = 'remove'
    li.appendChild(removebutton)
    ul.appendChild(li)
    removebutton.addEventListener('click', function() {
        removebutton.parentNode.remove()
    })

    input.value = ''
    input.focus()
   } else {
       input.placeholder = 'field is empty'
   }
})


