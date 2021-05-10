/********************  
 SNACK 1a 
 *******************/

//Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10

var palla = {
    nome: 'palla',
    peso: 10,
}
console.log(palla.peso);



/********************  
 SNACK 1b 
 *******************/

//Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

palla.peso = Number(prompt('Inserisci il pesso della palla'));

//console.log(palla.peso);
for(key in palla){
    console.log(key, palla[key]);
}
