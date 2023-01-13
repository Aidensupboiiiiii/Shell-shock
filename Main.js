var element = document.createElement("div");
var canShowDotSight = true;
element.style.width="4px";
element.style.height="4px";
element.style.position = "absolute";
element.style.top="50%";
element.style.left="50%";
element.style.transform="translate(-2px,-2px)";
element.style.paddingTop = "4px";
element.style.paddingLeft = "4px";
element.style.zIndex="100000";
element.style.borderRadius = "4px";
element.style.background = "rgba(255,0,0,0.75)";
document.body.appendChild(element);
document.addEventListener("keydown",function(e){
    if(e.key=="k"){
        canShowDotSight = !canShowDotSight;
        element.hidden = !canShowDotSight;
    }
});
