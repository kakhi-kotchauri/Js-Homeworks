

// basic
// advanced ვერსია ნახეთ task2 ში


let firstresponsestatus = null

fetch('https://reqres.in/api/users?page=2')
  .then( firstresponse => {
    firstresponsestatus = firstresponse.status
      return firstresponse.json()
  })
  .then( Response2 => {
    if(firstresponsestatus === 200) {
        Response2.data.forEach(element => {
            console.log(`მომხმარებლის სახელია ${element.first_name} ${element.last_name} მომხმარებლის ელფოსტაა ${element.email}`)
            console.log('///////////////////////////////////////////////')
        });
    } else {
        throw 'there is a error'
    }

  })
  .catch(error => {
      console.log('there is a error named ' + error)
  })



  fetch('https://fakerapi.it/api/v1/addresses?_quantity=7')
     .then(firsresponse => {
         
          console.log('//////////////////////////////////////////////')
          console.log('//////////////////////////////////////////////')
          console.log('//////////////////////////////////////////////')
          console.log('//////////////////////////////////////////////')
         return firsresponse.json()
     })
      .then(nextresp => {
          nextresp.data.forEach(element => {
              console.log(`ქვეყანა ${element.country} ქალაქი ${element.city}`)
              console.log('//////////////////////////////////////////////')

          });
      })



