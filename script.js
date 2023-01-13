

function creategrid(){
    const container = document.querySelector('#container');
    console.log(container.id)
    let i=0;
    while(i<256){

       const new_div = document.createElement("div");
       
       new_div.classList.add("pixel");
       
        container.appendChild(new_div);

        i++;
    }

}

creategrid();