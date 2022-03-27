// functions

function hideToggle(item1, item2) {
    let itemHide = item1.classList.contains('hide');
    if (itemHide === false) {
        item2.classList.add('hide')
        console.log(item2.classList);
    } else if (itemHide === true) {
        item2.classList.remove('hide');
        console.log(item2.classList);
    }
}

function radiusToggle(item1, item2) {
    let itemHide = item1.classList.contains('hide');
    if (itemHide === false) {
        item2.style.borderRadius = 'var(--ui-rad) var(--ui-rad) 0px 0px';
    } else if (itemHide === true) {
        item2.style.borderRadius = 'var(--ui-rad)';
    }
}

function switchIcon(target) {
    let sectionParent = target.parentElement.parentElement.parentElement;
    let sectionContent = sectionParent.children[1];
    console.log(sectionParent);
    console.log(sectionContent);

    if (target.classList.contains('vert-exp') === true) {
        target.classList = 'vert-coll';
        target.src = './assets/icons/menu-up.svg';
        sectionContent.style.display = 'none';
    } else if (target.classList.contains('vert-coll') === true) {
        target.classList = 'vert-exp';
        target.src = './assets/icons/menu-down.svg';
        sectionContent.style.display = 'flex';
    }
}


// linkdrop

let linkDrop = document.querySelector('.linkdrop img');
let header1 = document.querySelector('.header1');
let nav = document.querySelector('div.container-item.nav');

linkDrop.addEventListener('click', () => {
    hideToggle(nav, nav);
    radiusToggle(nav, header1);
});


// exp/coll secondary section content

let menuIcons = document.querySelectorAll('.menu-icns img');
let sectionContent = document.querySelectorAll('.section-content');

menuIcons.forEach(icon => icon.addEventListener('click', (e) => {
    switchIcon(e.target);
}));


// nav links