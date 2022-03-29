// ------------- //
// NAV HIDE/SHOW //
// ------------- //

function navHideToggle(item) {
    let navShow = nav.classList.contains('show-nav');
    if (navShow === true) {
        item.classList.remove('show-nav');
        item.classList.add('hide-nav');
    } else if (navShow === false) {
        item.classList.remove('hide-nav');
        item.classList.add('show-nav');
    }
}

let linkDrop = document.querySelector('.linkdrop img');
let nav = document.querySelector('div.container-item.nav');

linkDrop.addEventListener('click', () => {
    navHideToggle(nav);
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
