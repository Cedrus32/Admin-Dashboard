// ------------- //
// NAV HIDE/SHOW //
// ------------- //

function navHideToggle(item1, item2, show) {
    if (show === false) {
        item1.classList.add('transition');
        item1.classList.add('show');
        item2.classList.add('transition');
        item2.classList.add('flat-bottom');
    } else if (show === true) {
        item1.classList.remove('show');
        item2.classList.remove('flat-bottom');
    }
}

// function headerRadToggle(item2, show) {
//     if (show === false) {
        
//     } else if (show === true) {
//         item2.style.borderRadius = 'var(--ui-rad)';
//     }
// }

let linkDrop = document.querySelector('.linkdrop img');
let header1 = document.querySelector('.header1');
let nav = document.querySelector('div.container-item.nav');

linkDrop.addEventListener('click', () => {
    let navShow = nav.classList.contains('show');
    navHideToggle(nav, header1, navShow);
    // headerRadToggle(header1, navHide);
});

// ------------------------- //
// SECTION CONTENT HIDE/SHOW //
// ------------------------- //

function switchHeaderIcon(target) {
    if (target.classList.contains('vert-exp') === true) {
        target.classList = 'vert-coll';
        target.src = './assets/icons/menu-up.svg';
    } else if (target.classList.contains('vert-coll') === true) {
        target.classList = 'vert-exp';
        target.src = './assets/icons/menu-down.svg';
    }
}

function sectionHideToggle(target) {
    let sectionContent = target.parentElement.parentElement.parentElement.children[1];
    let parentSection = sectionContent.parentElement;
    let sectionHeader = parentSection.children[0];
    if (target.classList.contains('vert-exp') === true) {
        sectionContent.style.display = 'flex';
        parentSection.style.gap = 'var(--item-padding)';
        parentSection.style.padding = 'var(--item-padding)';
        sectionHeader.style.margin = 'calc(-1 * var(--item-padding)) calc(-1 * var(--item-padding)) 0rem';
    } else if (target.classList.contains('vert-coll') === true) {
        sectionContent.style.display = 'none';
        parentSection.style.gap = '0px';
        parentSection.style.padding = '0px';
        sectionHeader.style.margin = '0px';
    }
}

function sectionRadiusToggle(target) {
    let sectionContent = target.parentElement.parentElement.parentElement.children[1];
    let parentSection = sectionContent.parentElement;
    let sectionHeader = parentSection.children[0];
    
    if (target.classList.contains('vert-exp') === true) {
        sectionHeader.style.borderRadius = 'var(--ui-rad) var(--ui-rad) 0px 0px';
    } else if (target.classList.contains('vert-coll') === true) {
        sectionHeader.style.borderRadius = '30px';
    }
};

let menuIcons = document.querySelectorAll('.menu-icns img');

menuIcons.forEach(icon => icon.addEventListener('click', (e) => {
    let menuTarget = e.target;
    switchHeaderIcon(menuTarget);
    sectionHideToggle(menuTarget);
    sectionRadiusToggle(e.target);
}));
