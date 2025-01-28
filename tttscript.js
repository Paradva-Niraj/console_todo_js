let btns = document.querySelectorAll(".button")
let reset = document.querySelector(".reset")
let turn = true;

let winpatten = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

btns.forEach((btn) => {
    btn.addEventListener("click",() => {
        // console.log("ppaly")
       if(turn){
        btn.textContent = "O"
        turn = false;
       } 
       else{
        btn.textContent = "X"
        turn = true
       }
       btn.disabled=true

       chcekwinner()
    });
});

const chcekwinner = () =>{
    for (let patten of winpatten)
    {
        let val1 = btns[patten[0]].innerText; 
        let val2 = btns[patten[1]].innerText;
        let val3 = btns[patten[2]].innerText;

        if (val1 != "" && val2 != "" &&  val3 != "")
        {
            if(val1 == val2 && val2 == val2)
            {
                
            }
        }
    }
};