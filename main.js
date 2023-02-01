



let selectUserOne = document.getElementById('option1');
let selectUserTwo = document.getElementById('option2');

let valueOne = selectUserOne.options[selectUserOne.selectedIndex].value;
let valueTwo = selectUserTwo.options[selectUserTwo.selectedIndex].value;

console.log(valueOne)
console.log(valueTwo)

function checkWinner() {
    if(valueOne === valueTwo){
        document.getElementById("result").innerHTML="Tie game"
    }else if(valueOne === "rock" && valueTwo === "paper"){
        document.getElementById("result").innerHTML=`${valueTwo.toUpperCase()} wins`

    }
}




/*function checkWinner(){         
    let option1 = document.getElementById("input-option1").value;
    let option2 =  document.getElementById("input-option2").value;
    

    if(option1 !== "rock" || option1 !== "sccisors" || option1 !== "paper" || option2 !== "rock" || option2 !== "sccisors" || option2 !== "paper"){
        document.getElementById("error").innerHTML="Please enter rock, paper or sccisors"
    }else if(option1.length === 0 || option2.length === 0){
        document.getElementById("error").innerHTML="Please enter an option"
    }else if(option1 === option2) {
        document.getElementById("result").innerHTML="Tie game"
    }else if(option1 === "rock" && option2 === "paper") {
        document.getElementById("result").innerHTML=`${option2.toUpperCase()} wins` 
    }else if(option1 === "rock" && option2 === "scissors" ){
        document.getElementById("result").innerHTML=`${option1.toUpperCase()} wins`
    }else if(option1 === "scissors" && option2.value === "rock"){
        document.getElementById("result").innerHTML=`${option2.toUpperCase()} wins`
    }else if(option1 === "scissors" && option2 === "paper"){
        document.getElementById("result").innerHTML=`${option1.toUpperCase()} wins`
    }else if(option1 === "paper" && option2 === "rock"){
        document.getElementById("result").innerHTML=`${option1.toUpperCase()} wins`
    }else if(option1 === "paper" && option2 === "scissors"){
        document.getElementById("result").innerHTML=`${option2.toUpperCase()} wins`
    }else{
        document.getElementById("error").innerHTML="Please enter a valid option";
    }       

}*/
