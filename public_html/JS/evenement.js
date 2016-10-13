/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function clicBouton() {
    /* var divTitre=  document.getElementById("titre");
     divTitre.innerHTML="yo man";*/

    var liste = document.getElementsByClassName("menu");
    for (i = 0; i < liste.length; i++) {

        var tag = liste[i];
        tag.innerHTML = "cocococo";
    }

}
function clicBouton2(){
  /* var divTitre=  document.getElementById("titre");
  divTitre.innerHTML="yo man";*/
  
 var input = document.getElementById("texte"); 
 var titre =document.getElementById("titre");
 titre.innerHTML=input.value.toUpperCase();
  
 
    
}
