/* 
     1. Fill array with aside list objects
     2. Call through data structure - for - to fill these objects into *nav
     3. Create a tag inner 'aside-banner'

*/
const arrayName = [
    {
        id: 0,
        name: 'COLECCIÓN'
    },
    {
        id: 1,
        name: 'INSPÍRATE',
    },
    {
        id: 2,
        name: 'COLABORADORES'
    },
    {
        id: 3,
        name: 'CONÓCENOS'
    }
]

/* Create a new element with his tag and value */
export function createNewElement(tag, value){
    const child = document.createElement(tag);
    child.innerHTML = value;
    console.log(child)
    return child;
}

/* generate the side content dynamically  */
export function generateNewNavbarToTheHeader(arr, headersName){
    const fatherAside = document.querySelector(headersName);
    arr.forEach(({id, name}) => {
        const child = createNewElement('button', name);
        child.setAttribute('id', id);
        fatherAside.appendChild(child);
    })
}
/* Excute method to create buttons on the navbar */
generateNewNavbarToTheHeader(arrayName, '.aside-navbar')   


/* Show/Hide Aside-Navbar */
const asideNav = document.querySelector('#aside-navbar');
let isToggle = false;
document.querySelector('#menu-icon-img').addEventListener('click', () => {
    {
    if(!isToggle){
        isToggle=true;
        asideNav.style.transform = 'translateY(0px)';
    }else{
        isToggle=false;
        asideNav.style.transform = 'translateY(-400px)';        
    }
}
})


/* Arrow Slide click function */
let arrowLeft = document.querySelector('#arrowLeft');
let arrowRight = document.querySelector('#arrowRight');
let slider = document.querySelector('#slider');
let MAX_SLIDE_WIDTH = 0;

/* If arraow Left is clicked the value change to true otherwise to false */
let isArrowLeftHidden = false;
let isArrowRigthHidden = false;

function ArrowLeftHidden(element, state){
    if(!isArrowLeftHidden === state){
        element.style.visibility = 'hidden';
        console.log('ArrowLeft is HIDDEN');
        isArrowLeftHidden = true;
    }else{
        isArrowLeftHidden = false;
        element.style.visibility = 'visible';
        console.log('ArrowLeft is VISIBLE');
    }
}
function ArrowRigthHidden(element, state){
    if(!isArrowRigthHidden === state){
        element.style.visibility = 'hidden';
        console.log('ArrowRigth is HIDDEN');
        isArrowRigthHidden = true;
    }else{
        isArrowRigthHidden = false;
        element.style.visibility = 'visible';
        console.log('ArrowRigth is VISIBLE');
    }
}


function slideImageToLeft(sliderContainer, element, checkIfRigthArrowIsVisible) {
    if(MAX_SLIDE_WIDTH > 0){
        MAX_SLIDE_WIDTH -= 370;
        sliderContainer.style.transform = 'translateX('+(MAX_SLIDE_WIDTH * -1)+'px)';
        ArrowRigthHidden(checkIfRigthArrowIsVisible, isArrowRigthHidden);
        console.log('Left Click');
    }else{
        console.log('slide left is ended');
        ArrowLeftHidden(element, true);
    }
}

function slideImageToRigth(sliderContainer, element, checkIfLeftArrowIsVisible){
    if(MAX_SLIDE_WIDTH < 1480){
        MAX_SLIDE_WIDTH += 370;
        sliderContainer.style.transform = 'translateX(-'+MAX_SLIDE_WIDTH+'px)';
        ArrowLeftHidden(checkIfLeftArrowIsVisible, isArrowLeftHidden);
        console.log('Rigth Click');
    }else{
        console.log('slide rigth is ended');
        ArrowRigthHidden(element, true);
    }
}
/* Slide header images os 'EXTERNAL-INFO' section */

arrowLeft.addEventListener('click', () => {
    slideImageToLeft(slider, arrowLeft, arrowRight);
})
arrowRight.addEventListener('click', () => {
    slideImageToRigth(slider, arrowRight, arrowLeft);
})