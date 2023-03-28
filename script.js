function clickEvent(button){
    //on ajoute la nouvelle touche au input contenant le calcul
    let inputCalc = document.querySelector(".inputCalc");
    inputCalc.value = inputCalc.value + button.textContent;
}

function resetCalc(){
    let inputCalc = document.querySelector(".inputCalc");
    //si notre calcul est encore à l'écran on l'efface
    if(inputCalc.value != ""){
        inputCalc.value = "";
        inputCalc.style.background = "#ffffff" //on remet la couleur d'erreur par default
    }
    else{ //sinon on efface le resultat
        document.querySelector(".resultH1").textContent = "";
    }
}

function makeCalc(){
    let inputCalc = document.querySelector(".inputCalc");
    if(inputCalc.value != ""){ //si notre calcul n'est pas vide
        try{ //on essaie de faire le calcul
            document.querySelector(".resultH1").textContent = eval(inputCalc.value);
        }catch (error){ //si eval() n'as pas fonctionné, la syntaxe n'etait pas bonne et on met une couleur d'erreur
            inputCalc.style.background = "#f35b5b";
        }   
    }
    else{ //sinon on affiche 0
        document.querySelector(".resultH1").textContent = "0";
    }
}