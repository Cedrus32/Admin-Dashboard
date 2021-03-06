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
    let actualHeight = sectionContent.scrollHeight;
    if (displayedHeight === 1) { // if fully collapsed...
        let height = actualHeight + 'px';
        return height;
    } else if (displayedHeight === actualHeight) { // if fully expanded...
        let height = '1px';
        return height;
    } else if ((displayedHeight < actualHeight) && (displayedHeight > 1)) { // if collapsING...
        let height = actualHeight + 'px';
        return height;
    }
}

function sectionHideToggle(target, height) {
    let sectionContent = target.parentElement.parentElement.children[1];
    let headerIcon = target.parentElement.children[1].children[2].children[0];
    if (headerIcon.classList.contains('vert-exp') === true) {
        sectionContent.style.height = height;
        // console.log("it's getting bigger");
        setTimeout(resetHeight, 400, sectionContent);
    } else if (headerIcon.classList.contains('vert-coll') === true) {
        sectionContent.style.height = height;
        // console.log("it's getting smaller");
    }
}

function resetHeight(target) {
    target.style.setProperty('height', 'auto');
}


// ----------------- //
// CHECK MEDIA QUERY //
// ----------------- //

function runMotion(x) {
    if (x.matches) {
        let menuHeaders = document.querySelectorAll('div.header-cover');
        menuHeaders.forEach(header => header.addEventListener('click', (e) => {
            let menuTarget = e.target;
            setInitHeight(menuTarget);
            switchHeaderIcon(menuTarget);
            let sectionHeight = getHeight(menuTarget);
            sectionHideToggle(menuTarget, sectionHeight);
        }));
    }
}

let x = window.matchMedia('(prefers-reduced-motion: no-preference)');
runMotion(x);