let carr = [ {
       id : 'nissangtr',
         name : 'nissan',
         model : 'skyline gtr',
         color : 'blue',
         mdate : 2006,
         hp : 400,
         price : 80000,
   },

 
{
       id : 'lexus',
         name : 'lexus',
         model : 'lfa',
         color : 'white',
         mdate : 2009,
         hp : 600,
         price : 200000,
   },

 


  {
      id : 'nissanz',
         name : 'nissan',
         model : '350z',
         color : 'yellow',
         mdate : 2006,
         hp : 320,
         price : 4000,
   },
]


function getid(id) {
      let finder = carpreparer(id)
      let display = carfinder(finder)

      alert(display)
}

function carpreparer(carid){
     
      for(item of carr) {
          if(item.id === carid) {
            return item
          }
      }
      
}

 
function carfinder(car) {
      return `მწარმოებელი - ${car.name} \nმოდელი - ${car.model} \nფერი - ${car.color} \nგამოშვების თარიღი - ${car.mdate} წ \nცხენისძალა - ${car.hp} HP \nფასი - ${car.price} $`
}

