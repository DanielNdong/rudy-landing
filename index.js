/* Header menu effects */
const navigationMenu = document.querySelector("#nvgt-two");
const searchInput = document.querySelector("#searchInput");
const searchContainer = document.querySelector("#searchContainer");

/* We send de position of scroll to 'aside-banner */
let prevY = window.scrollY;

window.addEventListener('scroll', () => {
    /* We check if the scroll is in the position prevY */
    if(prevY > 197.183){
        navigationMenu.classList.add('isFixedPassOne')
        searchContainer.classList.add('searchFixed')
        searchInput.classList.add('changeColorWhite')
        searchInput.style.color="#fff";
    }else{
        searchInput.style.color="#000";
        navigationMenu.classList.remove('isFixedPassOne')
        searchContainer.classList.add('searchFixed')
        searchInput.classList.remove('changeColorWhite')
        searchInput.style.borderBottom = 'none';
        
    }
    if(prevY > 745){
        searchInput.style.borderBottom = 'solid .16rem #000';
        searchInput.style.color="#000";
        navigationMenu.classList.remove('isFixedPassOne')
        navigationMenu.classList.add('isFixedPassTwo')   
        searchInput.classList.remove('changeColorWhite')
    }
    else{
        searchInput.style.borderBottom = 'none';
        searchContainer.classList.add('searchFixed')
        navigationMenu.classList.remove('isFixedPassTwo')
        searchContainer.classList.remove('searchFixed')
    }

    /* Show de popUp when de scroll it is n-position */
    if(prevY < 2920){
        document.querySelector('.popUp').classList.remove('fitTwo')
        document.querySelector('.popUp').classList.remove('fit')
    }else if(prevY > 8900){
        document.querySelector('.popUp').classList.remove('fit')
        document.querySelector('.popUp').classList.add('fitTwo')
    }else{
        document.querySelector('.popUp').classList.remove('fitTwo')
        document.querySelector('.popUp').classList.add('fit')
    }
    prevY = window.scrollY;
    return prevY;
})


/* Change color of search-icon button */
const searchLogo = document.querySelector('#searchLogo')
window.addEventListener('scroll', () => {
    if(200 < prevY && prevY < 745){
        searchLogo.setAttribute("stroke","#fff")
    }else{
        searchLogo.setAttribute("stroke","#000")
    }
    prevY = window.scrollY;
})

/* Change flag */
const selectTag = document.querySelector('#language')
const flagIcon = document.querySelector('#flag')

let urlOfTag = flagIcon.attributes[0].value
selectTag.addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault();
    switch (selectTag.selectedOptions[0].value) {
        case 'español':
            urlOfTag = 'https://flagcdn.com/es.svg';
            document.querySelector('#flag').attributes[0].value = urlOfTag
            console.log(urlOfTag )
            break;
        case 'ingles':
            urlOfTag = 'https://flagcdn.com/gb.svg';
            document.querySelector('#flag').attributes[0].value = urlOfTag
            console.log(urlOfTag )
            break;
        case 'frances':
            urlOfTag = 'https://flagcdn.com/fr.svg';
            document.querySelector('#flag').attributes[0].value = urlOfTag
            console.log(urlOfTag )
            break;
    
        default:
            break;
    }

})

/* We prevent the normal actions of the forms */
document.forms[0].addEventListener('click', (e) => {
    e.preventDefault();
})


