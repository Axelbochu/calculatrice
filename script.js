function clickEvent(button){
    let inputCalc = document.querySelector(".inputCalc");
    inputCalc.value = inputCalc.value + button.textContent;
}

function resetCalc(){
    let inputCalc = document.querySelector(".inputCalc");
    if(inputCalc.value != ""){
        inputCalc.value = "";
        inputCalc.style.background = "#ffffff"
    }
    else{
        document.querySelector(".resultH1").textContent = "";
    }
}

function makeCalc(){
    let inputCalc = document.querySelector(".inputCalc");
    if(inputCalc.value != ""){
        try{
            document.querySelector(".resultH1").textContent = eval(inputCalc.value);
        }catch (error){
            inputCalc.style.background = "#f35b5b";
        }   
    }
}