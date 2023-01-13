

function changeColor(item){

    item.classList.add('hovered');
    console.log("RUNNING");
    
}

function creategrid(size){
    const container = document.querySelector('#container');
    const size_2 = Math.pow(size,2);

    container.style.cssText = "grid-template-columns: repeat(" + size + ", 1fr); grid-template-rows: repeat(" + size +", 1fr);"
    console.log(container.id)
    let i=0;
    
    while(i<size_2){

       const new_div = document.createElement("div");
       
       new_div.classList.add("pixel");
       new_div.addEventListener("mouseover", () => changeColor(new_div));
        container.appendChild(new_div);

        i++;
    }

}



function reChangeColor(item){

    item.classList.remove('hovered');

}

function new_grid(){
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const userNumber = parseFloat(prompt("Please enter the size", ""));

    creategrid(userNumber);

}

creategrid(16);

/*const grid_items = document.querySelectorAll('.pixel');
console.log(grid_items)
grid_items.forEach(grid_item => {
    grid_item.addEventListener("mouseover", () => changeColor(grid_item));
    //grid_item.addEventListener("mouseout", () => reChangeColor(grid_item));
});
*/
const button = document.querySelector("button");
button.addEventListener("click",new_grid);

