document.getElementById("r1").onclick=red;
document.getElementById("y1").onclick=yellow;
document.getElementById("g1").onclick=green;
document.getElementById("all").onclick=all;


 function red(){
    clearlights();
    clearboxshadow();
    let red =document.querySelector('#red');
    red.style.backgroundColor='red';
    red.style.boxShadow=' 0 0 50px red';
};
 function yellow(){
    clearlights();
    clearboxshadow();
    document.getElementById("yellow").style.backgroundColor ="yellow";
    document.getElementById("yellow").style.boxShadow="0 0 50px yellow";
};
 function green(){
    clearlights();
    clearboxshadow();
    document.getElementById("green").style.backgroundColor="green";
    document.getElementById("green").style.boxShadow="0 0 50px green";
    
};

function clearlights(){
    document.getElementById("red").style.backgroundColor="white";
    document.getElementById("yellow").style.backgroundColor="white";
    document.getElementById("green").style.backgroundColor="white";
};
function clearboxshadow(){
    document.getElementById("red").style.boxShadow="0 0 0 0";
    document.getElementById("yellow").style.boxShadow="0 0 0 0";
    document.getElementById("green").style.boxShadow="0 0 0 0";
};
function all(){
    clearlights();
    clearboxshadow();
    document.getElementById("red").style.backgroundColor="red";
    document.getElementById("red").style.boxShadow="0 0 50px red";
    
    document.getElementById("green").style.backgroundColor="green";
    document.getElementById("green").style.boxShadow="0 0 50px green";

    document.getElementById("yellow").style.backgroundColor="yellow";
    document.getElementById("yellow").style.boxShadow="0 0 50px yellow";
};


