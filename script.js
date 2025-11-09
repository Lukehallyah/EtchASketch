const container= document.querySelector(".container");




if(container){
    container.style.display="flex";
    container.style.justifyContent="center";
    container.style.alignItems="center";
    container.style.flexWrap="wrap";

}


for(let i=0; i<=15; i++){
    const div= document.createElement("div");
    div.textContent=`Box ${i}`;
    div.style.width="23vw";
    div.style.height="23vh";
    div.style.border="2px solid blue";
    div.style.display="flex";
    div.style.justifyContent="center";
    div.style.alignItems="center";
    container.appendChild(div);
}
