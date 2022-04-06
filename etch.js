const container = document.querySelector('.container');

function makeRow() {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-box');
        container.after(div)
    };
};

// function makeColumn() {
//     for (let i = 0; i < 16; i++) {
//         const div = document.createElement('div');
//         div.classList.add('grid-box');
//         container.after(div)
//     }
// }

makeRow();
makeColumn();
