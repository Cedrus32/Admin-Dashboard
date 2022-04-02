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
    let sectionContent = target.parentElement.parentElement.parentElement.children[1];
    let sectionHeight = sectionContent.clientHeight;
    if (sectionHeight > 1) {
        sectionContent.style.height = sectionHeight + 'px';
    }
}

function switchHeaderIcon(target) {
    if (target.classList.contains('vert-exp') === true) {
        target.classList = 'vert-coll';
        target.src = './assets/icons/menu-up.svg';
    } else if (target.classList.contains('vert-coll') === true) {
        target.classList = 'vert-exp';
        target.src = './assets/icons/menu-down.svg';
    }
}

function getHeight(target) {
    let sectionContent = target.parentElement.parentElement.parentElement.children[1];
    let sectionHeight = sectionContent.clientHeight;
    // console.log(sectionHeight); //* working */
    if (sectionHeight === 1) {
        let height = sectionContent.scrollHeight + 'px';
        return height;
    } else if (sectionHeight > 1) {
        let height = '1px';
        // console.log(height); //* working */
        return height;
    }
}

function sectionHideToggle(target, sectionHeight) {
    // console.log(sectionHeight); //* working */
    let sectionContent = target.parentElement.parentElement.parentElement.children[1];
    if (target.classList.contains('vert-exp') === true) {
        sectionContent.style.height = sectionHeight;
        // console.log("it's getting bigger");
        setTimeout(resetHeight, 200, sectionContent);
    } else if (target.classList.contains('vert-coll') === true) {
        sectionContent.style.height = sectionHeight;
        // console.log("it's getting smaller");
    }
}

function resetHeight(target) {
    target.style.setProperty('height', 'auto');
}

let menuIcons = document.querySelectorAll('.menu-icns img');
menuIcons.forEach(icon => icon.addEventListener('click', (e) => {
    let menuTarget = e.target;
    setInitHeight(menuTarget);
    switchHeaderIcon(menuTarget);
    let height = getHeight(menuTarget);
    sectionHideToggle(menuTarget, height);
}));


// ---------------------- //
// GET TRANSITION LENGTHS //
// ---------------------- //

// function getTransLength(item) {
//     let navHeight = parseInt(window.getComputedStyle(nav)['marginTop']) * -1;
//     let length = (navHeight / 250) + 's';

//     console.log(item);
//     console.log(navHeight);
//     console.log(length);

//     if (item.classList.contains('nav')) {
//         item.style.setProperty('--nav-seconds', length);
//     } else {
//         let parentSection = item.parentElement.parentElement.parentElement;
//         let parentContent = parentSection.children[1];

//         if (parentSection.classList.contains('announce')) {
//             parentContent.style.setProperty('--announce-seconds', length);
//         } else if (parentSection.classList.contains('trend')) {
//             parentContent.style.setProperty('--trend-seconds', length);
//         }
//     }
// }

// getTransLength(nav);
// menuIcons.forEach(icon => getTransLength(icon));


////   background fill
//todo relative transition speed
//todo interrupted shrink