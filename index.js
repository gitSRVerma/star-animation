const bodyEl = document.querySelector("body");

// bodyE1.addEventListener("mousemove", ()=>{
//     console.log("movement");


    // this above code ...means..add event listener is that event taht will trigger the mousemove  which means
    // when the mouse move we are going to trigger a function 
    // in the console (printing ..) movement...bodyE1.

    //  we can get using event and offset x and y accordingly 
    //  so that we the mouse event can have movement..
    bodyEl.addEventListener("mousemove", (event) => {
        // console.log(event.offsetX);
        // therefor saving this line into a constant and position
        const xPos = event.offsetX;
        const yPos = event.offsetY;
        // now creating a span Element
        const spanEl = document.createElement("span");
        spanEl.style.left = xPos + "px"; //creating a continous heart when the pointer moves..in x direction
        spanEl.style.top = yPos + "px"; // in y direction
        const size = Math.random()*100;
        spanEl.style.width = size + "px";
        spanEl.style.height = size + "px";

        bodyEl.appendChild(spanEl);
        setTimeout(()=> {
            spanEl.remove();
        }, 3000);
    });


