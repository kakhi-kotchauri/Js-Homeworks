
let ul = document.querySelector('#ul')
let ul2 = document.querySelector('#ul2')
let clear = document.querySelector('#clearer')
let creator = document.querySelector('#creator')


creator.addEventListener('click', function() {
    async function test() {
        try{
            let res = await axios.get('https://fakerapi.it/api/v1/credit_cards?_quantity=7')
            ul.textContent = ''
            res.data.data.forEach(element => {
                    let li = document.createElement('li')
                    li.textContent = `ბარათის მფლობელია - ${element.owner} ბარათის ტიპია - ${element.type}`
                    ul.appendChild(li)
            });
        } catch(err) {
            let li = document.createElement('li')
            li.textContent = `დაფიქსირდა შეცდომა - ${err}`
            ul.appendChild(li)
        }
    }
    test()
})

clear.addEventListener('click', function() {
    ul.textContent = ''
})


