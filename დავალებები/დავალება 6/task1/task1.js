

// basic


// let firstresponsestatus = null

// fetch('https://reqres.in/api/users?page=2')
//   .then( firstresponse => {
//     firstresponsestatus = firstresponse.status
//       return firstresponse.json()
//   })
//   .then( Response2 => {
//     if(firstresponsestatus === 200) {
//         Response2.data.forEach(element => {
//             console.log(`მომხმარებლის სახელია ${element.first_name} ${element.last_name} მომხმარებლის ელფოსტაა ${element.email}`)
//             console.log('///////////////////////////////////////////////')
//         });
//     } else {
//         throw 'there is a error'
//     }

//   })
//   .catch(error => {
//       console.log('there is a error named ' + error)
//   })



//   fetch('https://fakerapi.it/api/v1/addresses?_quantity=7')
//      .then(firsresponse => {
         
//           console.log('//////////////////////////////////////////////')
//           console.log('//////////////////////////////////////////////')
//           console.log('//////////////////////////////////////////////')
//           console.log('//////////////////////////////////////////////')
//          return firsresponse.json()
//      })
//       .then(nextresp => {
//           nextresp.data.forEach(element => {
//               console.log(`ქვეყანა ${element.country} ქალაქი ${element.city}`)
//               console.log('//////////////////////////////////////////////')

//           });
//       })





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
    ul.textContent = ''
    ul2.textContent = ''
       
afunc('https://reqres.in/api/users?page=2')
.then(frsp => {
    frsp.data.forEach(element => {
       let li = document.createElement('li')
       li.textContent = `${element.first_name} ${element.last_name}`
       ul.appendChild(li)
    });
})
.catch(cath => {
    console.log('oops ' + cath)
})

afunc('https://fakerapi.it/api/v1/credit_cards?_quantity=3')
   .then(first => {
     first.data.forEach(element => {
         let li = document.createElement('li')
         li.textContent = ` card type ${element.type}, card owner ${element.owner}`
         ul2.appendChild(li)
      });
      
   })
   .catch(cath => {
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