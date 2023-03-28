class BaseCalculator{
    constructor(){
        this.inputCalc = document.querySelector(".inputCalc");
        this.result = document.querySelector(".resultH1");
        this.historique = [];
    }

    clickEvent(button){
        this.inputCalc.style.background = "#ffffff" //on remet la couleur d'erreur par default
        this.inputCalc.value = this.inputCalc.value + button.textContent;
        //on ajoute à l'historique
        this.historique.push(button.textContent);
    }

    resetCalc(){
        //si notre calcul est encore à l'écran on l'efface
        if(this.inputCalc.value != ""){
            this.inputCalc.value = "";
            this.inputCalc.style.background = "#ffffff" //on remet la couleur d'erreur par default
        }
        else{ //sinon on efface le resultat
            this.result.textContent = "";
        }
    }

    makeCalc(){
        if(this.inputCalc.value != ""){ //si notre calcul n'est pas vide
            try{ //on essaie de faire le calcul
                this.result.textContent = eval(this.inputCalc.value);
            }catch (error){ //si eval() n'as pas fonctionné, la syntaxe n'etait pas bonne et on met une couleur d'erreur
                this.inputCalc.style.background = "#f35b5b";
            }   
        }
        else{ //sinon on affiche 0
            this.result.textContent = "0";
        }
    }

    back(){
        if(this.historique.length > 0){
            //on supprime de l'historique le dernier element
            this.historique.pop();
            //on réafiche l'input
            let tmp = "";
            this.historique.forEach(e => {
                tmp += e;
            });
            //on affecte
            this.inputCalc.value = tmp;
        }
        else{
            this.inputCalc.style.background = "#db38db";
            alert("impossible de revenir en arriere");
        }
    }
}

//on créer notre objet
let Calculatrice = new BaseCalculator;