let arr = [ 'HELLO', 'WORLD', 'JS', 'GEOLAB']


function capitalcase(array) {
    let makelowercase = array.map((item) => {
        return item.toLowerCase()
     })
     
     let makecapitalcase = makelowercase.map((item) => {
         return item.charAt(0).toUpperCase() + item.slice(1)
      })
      return makecapitalcase
}

let print = capitalcase(arr)

console.log(print)