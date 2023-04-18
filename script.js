let btnref=document.querySelectorAll(".button-option");
let popupref=document.querySelector(".popup");
let newgamebtn=document.getElementById("new-game");
let restartbtn = document.getElementById("restart");
let msgref=document.getElementById("message");
let winningPattern=[[0,1,2],[0,3,6],[2,5,8],[6,7,8],[3,4,5],[1,4,7],[0,4,8],[2,4,6]];
let xTurn=true;
let count=0;

const disableButtons=()=>{
    btnref.forEach((element)=> (element.disabled=true));
    popupref.classList.remove("hide");
};
const enableButtons=()=>{
    btnref.forEach(element=>{
        element.innerText="";
        element.disabled=false;
    });
    popupref.classList.add("hide");
};


newgamebtn.addEventListener("click",()=>{
    count=0;
    enableButtons();
});

restartbtn.addEventListener("click",()=>{
    count=0;
    enableButtons();
});
const winFunction=(letter)=>{
    disableButtons();
    if(letter=="X"){
        msgref.innerHTML="&#x1F389; <br> 'X' Wins ";
    }else{
        msgref.innerHTML="&#x1F389; <br> 'O' Wins";
    }

}

const drawFunction=()=>{
    disableButtons();
    msgref.innerHTML="&#x1F60E; <br> It's a Draw";
}
const winchecker=()=>{
    for(let i of winningPattern){
        let[element1,element2,element3]=[ btnref[i[0]].innerText,
        btnref[i[1]].innerText,
        btnref[i[2]].innerText
    ];
       if(element1 !="" && element2 !="" && element3 !="" )   {
        if(element1==element2 && element2==element3){
                winFunction(element1);
        }
       } 

        }
    }


btnref.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(xTurn){
            xTurn=false;
            element.innerText="X";
            element.disabled=true;

        }else{
            xTurn=true;
            element.innerText="O";
            element.disabled=true;
        }
        count+=1;
        if(count===9){
            drawFunction();
        }
        winchecker();
    });
});
window.onload =enableButtons;