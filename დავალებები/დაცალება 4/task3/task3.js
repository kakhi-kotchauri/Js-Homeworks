function cls(classname) {
    let mydiv = document.getElementById('smt')
    let myclass = 'test1'
    if(classname[0] === myclass) {
        mydiv.classList.remove(myclass)
        mydiv.textContent = 'ამ დივს კლასი არ აქვს'
    } else {
        mydiv.classList.add(myclass)
        mydiv.textContent = 'ამ დივს კლასი მინიჭებული აქვს'
    }

}