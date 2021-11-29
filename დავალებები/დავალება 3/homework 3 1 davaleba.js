

let aa = ['ss', 34,]

let bb = {
    smt : 23,
    smt2 : 12
}



function mathop(...rest) {

    let final = null
    
    let firstarr = []

    for(item of rest) {
        if(typeof item === "number") {
            
     firstarr.push(item)

   let secondarr = [...firstarr]

   let math = secondarr.map((item) => {
       if(item % 2 === 0) {
           return item / 2
       } else {
           return item ** 2
       }
   })

  let reducer = (cur, sav) => (cur + sav / 2)
    final = math.reduce(reducer)

        }
        
    }

  if (final === null) {
      return 'number not found'
  }

    return Math.floor(final)

   
}


let printfunc = mathop(aa,"sss", 12, bb, 13, "vvv")

console.log(printfunc)