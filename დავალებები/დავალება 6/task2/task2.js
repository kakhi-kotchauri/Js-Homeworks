

// advanced

let ul = document.querySelector('#ul')
let ul2 = document.querySelector('#ul2')
let clear = document.querySelector('#clearer')
let creator = document.querySelector('#creator')




let sucstat = null

function afunc(url) {
    return new Promise((resolve, reject) => {
       fetch(url)
       .then(firstresp => {
          sucstat = firstresp.status
          return firstresp.json()
       })
       .then(secresp => {
           if(sucstat === 200) {
               resolve(secresp)
           } else {
               throw('log my error ' + sucstat)
           }
       })
       .catch(err => {
           reject(err)
        
       })
    }) 
}



creator.addEventListener('click', function() {
       
afunc('https://reqres.in/api/users?page=2')
.then(frsp => {
    ul.textContent = ''
    frsp.data.forEach(element => {
       let li = document.createElement('li')
       li.textContent = `${element.first_name} ${element.last_name}`
       ul.appendChild(li)
    });
})
.catch(cath => {
    ul.textContent = ''
    console.log('oops ' + cath)
})

afunc('https://fakerapi.it/api/v1/credit_cards?_quantity=3')
   .then(first => {
    ul2.textContent = ''
     first.data.forEach(element => {
         let li = document.createElement('li')
         li.textContent = ` card type ${element.type}, card owner ${element.owner}`
         ul2.appendChild(li)
      });
      
   })
   .catch(cath => {
    ul2.textContent = ''
     console.log('oops ' + cath)
     let li = document.createElement('li')
         li.textContent = `oops ${cath}`
         ul2.appendChild(li)
 })
})


clear.addEventListener('click', function() {
    ul.textContent = ''
    ul2.textContent = ''
})






    // პრომისის საშუალებით ჩვენ შეგვიძლია შევქმნათ ასინქრონული ფუნქცია და ამ ასინქრონული ფუნქციის საშუალებით ერთერთი რაც ჩვენ შეგვიძლია არის ის რომ მოვახდინოთ
    //  ერორების ჰენდლინგი და ასევე შეგვიძლია ერი ფუნქცია გამოვიყენოთ სხვადასხვა url ზე