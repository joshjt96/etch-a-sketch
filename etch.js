const container = document.querySelector('.container');

function makeGrid() {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-box');
        container.appendChild(div);
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor= "grey"
        });
    };
};


for (let i = 0; i < 32; i++) {
    makeGrid();
};

// const btn = document.createElement('button');
// btn.textContent('Reset');
// container.append(btn);

// document.querySelector('.grid-box').addEventListener('mouseover', function() {
//     document.querySelector('.grid-box').style.backgroundColor= "grey"
// });

// function addColour(e){
//     e.target.style.backgroundColor = 'grey';
// };

// const colourChange = doucment.querySelectorAll('.grid-box');
// colourChange.forEach(gridBox => {
//     gridBox.addEventListener('mouseover', addColour)
// });

// var elements = document.getElementsByClassName('myElement');

// function elementClicked() {
//     console.log("An element was clicked!");
// }
// for (let i = 0; i < elements.length; i++) {
//     elements[i].onmouseover = function() {
//         elementClicked();
//     };
// }

// const divs = document.getElementsByClassName('grid-box');

// function addColour() {
//     document.querySelector('.grid-box').style.backgroundColor= "grey"
// };
// for (let i = 0; i < divs.length; i++) {
//     divs[i].onmouseover = function() {
//         addColour();
//     };
// };


// const addColour = document.querySelector('.grid-box');
// addColour.forEach(addColour => {
//     addColour.addEventListener('mouseover', function(){
//         document.querySelector('.grid-box').style.backgroundColor = 'grey'
//     });
// });
