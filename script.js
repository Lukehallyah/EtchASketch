const container= document.querySelector(".container");




if(container){
    container.style.border="2px solid black";
    container.style.display="flex";
    container.style.justifyContent="center";
    container.style.alignItems="center";
    container.style.flexWrap="wrap";
    container.style.width='50vw'
    container.style.height="75vh";

}


for(let i=0; i<=15; i++){
    const div= document.createElement("div");
    div.style.width="25%";
    div.style.height="25%";
    div.style.display="flex";
    div.style.justifyContent="center";
    div.style.alignItems="center";
    div.classList.add('grid');
    container.appendChild(div);
}

const grid = document.querySelectorAll(".grid").forEach(element => {
    element.addEventListener("mouseenter",function(){
            this.style.backgroundColor="yellow";
    });

    element.addEventListener('mouseleave', function(){
            this.style.backgroundColor="blue";
    })

    element.addEventListener("mousedown", function(){
            this.style.backgroundColor="lightblue";
    })
    element.addEventListener("mouseup", function(){
            this.style.backgroundColor="cyan";
    })
});;

//Why this works
        //document.querySelectorAll selects all with the class "grid"
        //.forEach runs a callback function. What it's going to do for each "grid"
        //'element' just a name placeholder for what's happening
        //adds event listener that activates on entering and triggers function
        //function makes the background color of each 'grid' yellow
        //REMEMBER NODELISTS!! they are almost the same as arrays and it's why it works here
        //forEach can go through a NODELIST which querySelectorAll creates



const resizer=document.querySelector(".resizer");

if(resizer){
        
}



//onmousemove, onmouseenter, onmouseleave, onmouseout, onmouseover, onmouseup//
//any of these could be used to make the etch a sketch. 
//onmousemove could just constantly draw like a real etch a sketch
//onmouseenter,onmouseleave could be necessary to move to next box
//onmouseover could be used like onmousemove EITHER ONE OF THESE
