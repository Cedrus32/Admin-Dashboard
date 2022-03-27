// linkdrop

let linkDrop = document.querySelector('.linkdrop img');
let header1 = document.querySelector('.header1');
let nav = document.querySelector('nav');
// console.log({linkDrop});
// console.log({header1});
// console.log({nav});

linkDrop.addEventListener('click', () => {
    console.log(nav.classList);
    let navHide = nav.classList.contains('hide');
    if (navHide === false) {
        nav.classList.add('hide')
        console.log(nav.classList);
    } else if (navHide === true) {
        nav.classList.remove('hide');
        console.log(nav.classList);
    }
})






// exp/coll secondary section content
// nav links