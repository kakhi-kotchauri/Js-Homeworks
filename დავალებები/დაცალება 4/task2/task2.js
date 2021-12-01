let users = [
    {
        username : 'giorgi',
        age : 12
    },

    {
        username : 'dato',
        age : 18
    },

    {
        username : 'mari',
        age : 16
    },

    {
        username : 'nino',
        age : 31
    }
]

let maindiv = document.getElementById('maindiv')
let ul = document.createElement('ul')


function create() {   
    maindiv.appendChild(ul)
    for(item of users) {
        if(item.age >= 18) {
            let li = document.createElement('li')
            li.setAttribute("id", 'lid')
            ul.appendChild(li)
          li.textContent = item.username
          li.style.fontSize = '23px'
        }
    }
}




function remove() {
   let r = document.querySelectorAll('#lid')
   for(item of r) {
       item.remove()
   }
}