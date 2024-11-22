let images=document.querySelectorAll(".image")
let userscore=document.querySelector("#user")
let compscore=document.querySelector("#comp")
let result=document.querySelector("#result")
let userscorevalue=0;
let compscorevalue=0;
images.forEach((image)=>{
    image.addEventListener("click",()=>{
        let id=image.getAttribute("id")
        console.log("the user value is",id)
        let comp=computer();
        console.log("the computer value is",comp)
        let winner=checkwinner(id,comp)
    })
})
const computer=()=>{
    let option=["STONE","PAPER","SCISSOR"]
    let auto=Math.floor(Math.random()*3)
    return option[auto];
}
const checkwinner=(user,auto)=>{
    if(user==auto){
        console.log("MATCH IS DRAW")
        result.innerText=`MATCH IS DRAW.PLAY AGAIN THE USER VALUE IS ${user} AND THE COMPUTER VALUE IS ${auto}`

    }
    else{
        if(user=="STONE"&&auto=="PAPER"||user=="PAPER"&&auto=="SCISSOR"||user=="SCISSOR"&&auto=="STONE"){
            console.log("AUTO IS WIN")
            result.innerText=`COMPUTER IS WINNER THE USER VALUE IS ${user} AND THE COMPUTER VALUE IS ${auto}`
            compscorevalue++;
            console.log(compscorevalue)
            compscore.innerText=compscorevalue


        }
        else{
            console.log("USER IS WIN")
            result.innerText=`USER IS WINNER THE USER VALUE IS ${user} AND THE COMPUTER VALUE IS ${auto}`

            userscorevalue++;
            console.log(userscorevalue)
            userscore.innerText=userscorevalue
        }
    }

}