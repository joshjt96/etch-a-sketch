const container = document.querySelector('.container');

function makeGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-box');
        container.appendChild(div);
    };
};

makeGrid();

document.querySelector('.grid-box').addEventListener('mouseover', function() {
    document.querySelector('.grid-box').style.backgroundColor= "green"
});
