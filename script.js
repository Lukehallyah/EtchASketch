const container= document.querySelector(".container");




if(container){
    container.style.border="2px solid black";
    container.style.display="flex";
    container.style.justifyContent="center";
    container.style.alignItems="center";
    container.style.flexWrap="wrap";
    
    container.style.boxSizing='border-box';

}

const resizer=document.querySelector(".resizer");

resizer.addEventListener("click",() => {
        container.innerHTML='';
        
        
        let userNum = parseInt(prompt("Enter Your Number Here(max: 100)"));
        if(userNum>100){userNum=100};
        if(userNum<1){userNum=1};
        

        for(let i=1; i<=userNum*userNum; i++){
                 const div= document.createElement("div");
                 div.style.width=`calc(100%/${userNum})`;
                 div.style.height=`calc(100%/${userNum})`;
                div.style.display="flex";
                div.style.justifyContent="center";
                div.style.alignItems="center";
                div.classList.add('grid');
                container.appendChild(div);
};


        
        document.querySelectorAll(".grid").forEach(element => {


                 element.addEventListener("mouseenter",function(){
                        this.style.backgroundColor="black";
                 });

                 
                 element.addEventListener('mousedown', function(){
                        this.style.backgroundColor='white';
                 })
                
});




});











//Why this works
        //document.querySelectorAll selects all with the class "grid"
        //.forEach runs a callback function. What it's going to do for each "grid"
        //'element' just a name placeholder for what's happening
        //adds event listener that activates on entering and triggers function
        //function makes the background color of each 'grid' yellow
        //REMEMBER NODELISTS!! they are almost the same as arrays and it's why it works here
        //forEach can go through a NODELIST which querySelectorAll creates






//onmousemove, onmouseenter, onmouseleave, onmouseout, onmouseover, onmouseup//
//any of these could be used to make the etch a sketch. 
//onmousemove could just constantly draw like a real etch a sketch
//onmouseenter,onmouseleave could be necessary to move to next box
//onmouseover could be used like onmousemove EITHER ONE OF THESE
