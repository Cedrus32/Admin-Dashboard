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

function setInitHeight(target) {
    let sectionContent = target.parentElement.parentElement.children[1];
    let sectionHeight = sectionContent.clientHeight;
    if (sectionHeight > 1) {
        sectionContent.style.height = sectionHeight + 'px';
    }
}

function switchHeaderIcon(target) {
    let headerIcon = target.parentElement.children[1].children[2].children[0];
    if (headerIcon.classList.contains('vert-exp') === true) {
        headerIcon.classList = 'vert-coll';
        headerIcon.src = './assets/icons/menu-up.svg';
    } else if (headerIcon.classList.contains('vert-coll') === true) {
        headerIcon.classList = 'vert-exp';
        headerIcon.src = './assets/icons/menu-down.svg';
    }
}

function getHeight(target) {
    let sectionContent = target.parentElement.parentElement.children[1];
    let displayedHeight = sectionContent.clientHeight;
    let contentHeight = sectionContent.scrollHeight;
    if (displayedHeight === 1) { // if fully collapsed...
        let height = contentHeight + 'px';
        return height;
    } else if (displayedHeight === contentHeight) { // if fully expanded...
        let height = '1px';
        return height;
    } else if ((displayedHeight < contentHeight) && (displayedHeight > 1)) { // if collapsING...
        let height = contentHeight + 'px';
        return height;
    }
}

function sectionHideToggle(target, height) {
    let sectionContent = target.parentElement.parentElement.children[1];
    let headerIcon = target.parentElement.children[1].children[2].children[0];
    if (headerIcon.classList.contains('vert-exp') === true) {
        sectionContent.style.height = height;
        // console.log("it's getting bigger");
        setTimeout(resetHeight, 200, sectionContent);
    } else if (headerIcon.classList.contains('vert-coll') === true) {
        sectionContent.style.height = height;
        // console.log("it's getting smaller");
    }
}

function resetHeight(target) {
    target.style.setProperty('height', 'auto');
}

let menuIcons = document.querySelectorAll('.menu-icns img');
let menuHeaders = document.querySelectorAll('div.header-cover');
console.log(menuHeaders);

menuHeaders.forEach(header => header.addEventListener('click', (e) => {
    let menuTarget = e.target;
    setInitHeight(menuTarget);
    switchHeaderIcon(menuTarget);
    let sectionHeight = getHeight(menuTarget);
    sectionHideToggle(menuTarget, sectionHeight);
}));