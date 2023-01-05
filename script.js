//afficher les valeurs de chaque input du formulaire
let input = document.querySelectorAll('input')
console.log(input);
let result;
let bouton = document.querySelector('#lib-button')
bouton.addEventListener('click', getInput)
let span = document.querySelector('p > span')
function getInput(e){
    e.preventDefault();
    for(let i of input){
        result = i.value
        //Assurez-vous que les valeurs ne sont pas vides
        if(result == ""){
            console.log("le champ est vide  ")
    
        }

       

        //Écrivez une histoire qui utilise chacune des valeurs 
        span.innerHTML += `${result}  `;
    }

    //Assurez-vous de vérifier la console pour les erreurs lorsque vous jouez au jeu
let noun = document.querySelector('#noun')
let adjective = document.querySelector('#adjective')
let person = document.querySelector('#person')
let verb = document.querySelector('#verb')
let place = document.querySelector('#place')
if(noun.value == "" && verb.value == ""){
    console.log("noun est vide, veuillez renseigner obligatoirement le champ")
    console.log("verb est vide, veuillez renseigner obligatoirement le champ")
}
  
    
}

//Ajoutez un bouton « shuffle » au fichier HTML, lorsque vous cliquez
//sur le bouton devrait changer l’histoire actuellement affichée 

let shuffle = document.createElement('button')
shuffle.innerHTML = "shuffle"
shuffle.style.backgroundColor = "lightblue"
let form = document.querySelector('#libform')
form.appendChild(shuffle)
shuffle.addEventListener('click', shuffleBtn)

function shuffleBtn(e){
    e.preventDefault()
    
}













