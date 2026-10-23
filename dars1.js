// function tanla() {
//  let b1 = document.form.element1;
//  let b2 = document.form.element2;
//  let button = document.button;
//  b1.value = b2.value
// }

let b1 = document.form.element1;
let b2 = document.form.element2;
let button = document.querySelector('button');
button.addEventListener("click", () =>{
    b2.value = 1200 * b1.value

})

console.log("salom")