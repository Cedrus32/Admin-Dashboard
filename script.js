// linkdrop

function hideToggle(item) {
    let itemHide = item.classList.contains('hide');
    if (itemHide === false) {
        item.classList.add('hide')
        console.log(item.classList);
    } else if (itemHide === true) {
        item.classList.remove('hide');
        console.log(item.classList);
    }
}

let linkDrop = document.querySelector('.linkdrop img');
let header1 = document.querySelector('.header1');
let nav = document.querySelector('nav');

linkDrop.addEventListener('click', () => {
    console.log(nav.classList);
    hideToggle(nav);
});






// exp/coll secondary section content
// nav links