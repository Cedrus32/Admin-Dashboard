// functions

function navHideToggle(item1, item2) {
    let itemHide = item1.classList.contains('hide');
    if (itemHide === false) {
        item2.classList.add('hide')
    } else if (itemHide === true) {
        item2.classList.remove('hide');
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
    if (target.classList.contains('vert-exp') === true) {
        target.classList = 'vert-coll';
        target.src = './assets/icons/menu-up.svg';
    } else if (target.classList.contains('vert-coll') === true) {
        target.classList = 'vert-exp';
        target.src = './assets/icons/menu-down.svg';
    }
}

function sectionHideToggle(target, content) {
    let parentSection = content.parentElement;
    let sectionHeader = parentSection.children[0];
    if (target.classList.contains('vert-exp') === true) {
        content.style.display = 'flex';
        parentSection.style.gap = 'var(--item-padding)';
        parentSection.style.padding = 'var(--item-padding)';
        sectionHeader.style.margin = 'calc(-1 * var(--item-padding)) calc(-1 * var(--item-padding)) 0rem';
    } else if (target.classList.contains('vert-coll') === true) {
        content.style.display = 'none';
        parentSection.style.gap = '0px';
        parentSection.style.padding = '0px';
        sectionHeader.style.margin = '0px';
    }
}


// linkdrop

let linkDrop = document.querySelector('.linkdrop img');
let header1 = document.querySelector('.header1');
let nav = document.querySelector('div.container-item.nav');

linkDrop.addEventListener('click', () => {
    navHideToggle(nav, nav);
    radiusToggle(nav, header1);
});


// exp/coll secondary section content

let menuIcons = document.querySelectorAll('.menu-icns img');

menuIcons.forEach(icon => icon.addEventListener('click', (e) => {
    let menuTarget = e.target;
    let sectionContent = menuTarget.parentElement.parentElement.parentElement.children[1];
    console.log(sectionContent);
    switchIcon(menuTarget);
    sectionHideToggle(menuTarget, sectionContent);
    // radiusToggle(e.target);
}));


// nav links