let container = document.querySelector(".container");
const button = document.createElement("button");
document.addEventListener("DOMContentLoaded", setUp(16));
let pageSize;
button.addEventListener("click", () => {
    let input = prompt("Enter a number between 1 and 100");
    if (typeof +input === 'number') {
        if (+input >= 1 && +input <= 100) {
            pageSize = +input;
            button.nextElementSibling.remove();
            container = document.createElement("div");
            button.parentNode.appendChild(container);
            setUp(pageSize);
        }
    } else {
        console.log("false");
    }
});
button.textContent = "button";
container.parentNode.insertBefore(button, container);

function setUp(pageSize) {
    const square = document.createElement("div");
    const row = document.createElement("div");
    container.style.width = "600px";
    container.style.height = "600px";
    row.style.display = "flex"
    square.style.width = ((600 - (pageSize+1))/pageSize) + "px";
    square.style.height = ((600 - (pageSize+1))/pageSize) + "px";
    square.style.borderWidth = "1px";
    square.style.borderStyle = "solid";
    square.style.borderColor = "black";
    square.classList.add("square");
    row.appendChild(square);

    for (let i = 0; i < pageSize-1; i++) {
        const current = square.cloneNode(true)
        current.style.marginLeft = "-1px";
        row.appendChild(current);
    }

    container.appendChild(row);
    for (let i = 0; i < pageSize-1; i++) {
        const current = row.cloneNode(true);
        current.style.marginTop = "-1px";
        container.appendChild(current);
    }

    const allSquare = document.querySelectorAll(".square");

    for (let i = 0; i < allSquare.length; i++) {
        allSquare[i].addEventListener("mouseover", (e) => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = "rgb(" + r + " " + g + " " + b + ")";
        });

        allSquare[i].addEventListener("mouseout", (e) => {
            e.target.style.backgroundColor = "white";
        });
    }
}



