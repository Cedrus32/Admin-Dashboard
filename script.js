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

function setInitHeight(target) {
    let sectionContent = target.parentElement.parentElement.parentElement.children[1];
    let sectionHeight = sectionContent.clientHeight;
    if (sectionHeight > 1) {
        sectionContent.style.height = sectionHeight + 'px';
    }
}

function getHeight(target) {
    let sectionContent = target.parentElement.parentElement.parentElement.children[1];
    let sectionHeight = sectionContent.clientHeight;
    console.log(sectionHeight); //* working */
    if (sectionHeight === 1) {
        let height = sectionContent.scrollHeight + 'px';
        return height;
    } else if (sectionHeight > 1) {
        let height = '1px';
        console.log(height); //* working */
        return height;
    }
}

function sectionHideToggle(target, sectionHeight) {
    // console.log(sectionHeight); //* working */
    let sectionContent = target.parentElement.parentElement.parentElement.children[1];
    if (target.classList.contains('vert-exp') === true) {
        sectionContent.style.height = sectionHeight;
        console.log("it's getting bigger");
    } else if (target.classList.contains('vert-coll') === true) {
        sectionContent.style.height = sectionHeight;
        console.log("it's getting smaller");
    }
}

let menuIcons = document.querySelectorAll('.menu-icns img');

menuIcons.forEach(icon => icon.addEventListener('click', (e) => {
    let menuTarget = e.target;
    switchHeaderIcon(menuTarget);
    setInitHeight(menuTarget);
    let height = getHeight(menuTarget);
    sectionHideToggle(menuTarget, height);
}));


////   background fill
//todo relative transition speed
//todo interrupted shrink