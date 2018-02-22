document.getElementById("openB").addEventListener("click", 
function(){
    document.getElementById("menu").style.left = "0px";
});

document.getElementById("closeB").addEventListener("click", 
function(){
    document.getElementById("menu").style.left = "-110px";
});

document.getElementById("makeBG").addEventListener("click",
function(){
    document.getElementById('zoom').style.backgroundImage="url('imgs/i''.jpg')"
});

document.getElementById("reset").addEventListener("click",
function(){
    document.getElementById('zoom').style.backgroundImage='none'
});

document.getElementById("showApp").addEventListener("click",
function(){
   document.getElementById('app1').style.display='block' 
});

document.getElementById("hideApp").addEventListener("click",
function(){
   document.getElementById('app1').style.display='none' 
});