let arr = [4, 5, 11, 2, 9, 99, 1092, 1]
let arr2 = [...arr.sort((a,b) => a-b)]

let filter = arr2.filter(item => item % 2 === 0)

let reducer = (cur, sav) => (cur * sav)

let print = filter.reduce(reducer)

console.log(print)

