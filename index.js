// Selectionner nos éléments

let input     = document.querySelector('input');
let error     = document.querySelector('small');
let formulaire = document.querySelector('form');

// Cacher l'erreur
error.style.display='none';

// Générer un nombre aléatoire 

let nombreAleatoire = Math.floor(Math.random()*1001);
let coups           = 0;
let nombreChoisi;

// Creer la fonction vérifier

function verifier(nombre){

   let instruction = document.createElement('div');

   if(nombre < nombreAleatoire){
    // c'est plus
    instruction.textContent="# "+coups+"("+nombre+")"+"C'est plus!";
    instruction.className ="instruction plus";
    

   }else if(nombre > nombreAleatoire){
    // c'est moins
    instruction.textContent="# "+coups+"("+nombre+")"+"C'est moins!";
    instruction.className ="instruction moins";
   }else{
    // Félicitation 
    instruction.textContent="# "+coups+" ("+nombre+") Félicitation vous avez trouvez le juste prix !";
    instruction.className ="instruction fini";
    input.disabled =true ;
   }
   // Ajouter l'élément devant les autres
   document.querySelector('.instructions').prepend(instruction);


}



// Vérifier que l'utilisateur donne bien un nombre

input.addEventListener('keyup',()=>{
    if (isNaN(input.value)){
        // Afficher le message d'erreur
        error.style.display="inline";

    }else{
        // Cacher le message d'erreur
        error.style.display="none";

    }

})

// Agir à l'envoi du formulaire

formulaire.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (isNaN(input.value) || (input.value =="")){
        //Mettre la bordure formulaire en rouge
        input.style.borderColor="red";
    }else{
        //Mettre la bordure en gris
        input.style.borderColor="grey";
        coups++;
        nombreChoisi = input.value;
        input.value="";
        verifier(nombreChoisi);
    }

})

