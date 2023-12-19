const buttons=document.querySelectorAll("button")
const body=document.querySelector("body")
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click",function (e){
        console.log(e);
        console.log(e.target);
color=e.target.id;
        if (color==="gray") {
            body.style.backgroundColor=color
        }
        if (color==="orange") {
            body.style.backgroundColor=color
        }
        if (color==="white") {
            body.style.backgroundColor=color;
        }
         if (color==="green") {
            body.style.backgroundColor=color
        }
        if (color==="blue") {
            body.style.backgroundColor=color;
        }
         if (color==="yellow") {
            body.style.backgroundColor=color;
        }
    })
});


// const buttons = document.querySelectorAll("button");
// const body = document.querySelector("body");

// buttons.forEach(function (button) {
//     console.log(button);
//     button.addEventListener("click", function (e) {
//         console.log(e);
//         console.log(e.target);
        
//         const color = e.target.id;

//         if (color === "gray" || color === "orange" || color === "white" || color === "green" || color === "blue" || color === "yellow") {
//             body.style.backgroundColor = color;
//         }
//     });
// });