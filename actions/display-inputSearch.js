/* 
    1 - First we check that the button has been focused
    2 - We show the input and increase its width
*/

/* We create a variable to check if it is the first time the button has been pressed */
/* The objective is that the first time the button is pressed is to show the input search and the second time is to perform the 'query' */
let isFirstTimeClicked = false;
/* Action when we focus button */
let formButton = document.querySelector('#formButton');
let searchContainer = document.querySelector('#searchContainer');
let searchInput = document.querySelector('#searchInput');
/* formButton.addEventListener('focus', () => {
    console.log('fire level')
    if(!isFirstTimeClicked){
        searchInput.classList.add = 'showInputSearch';
        console.log(document.querySelector('#searchInput').classList)
        isFirstTimeClicked = true;
    }else{
         isFirstTimeClicked = false;
    }
}) */
formButton.addEventListener('click', () => {
        searchInput.classList.add('showInputSearch');
        searchContainer.style.outline = 'solid .16rem #000';
        searchInput.style.borderBottom = 'none';
        console.log(document.querySelector('#searchInput').classList);
        isFirstTimeClicked = true;
 
})

/* When we blur button */
formButton.addEventListener('blur', () => {
    searchInput.style.borderBottom = 'solid .16rem #27262670';
    searchContainer.style.outline = 'none';
})