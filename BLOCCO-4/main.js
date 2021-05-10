/********************  
 SNACK 1a 
 *******************/

//Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10

/* var palla = {
    nome: 'palla',
    peso: 10,
}
console.log(palla.peso);

 */

/********************  
 SNACK 1b 
 *******************/

//Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

/* palla.peso = Number(prompt('Inserisci il pesso della palla'));

//console.log(palla.peso);
for(key in palla){
    console.log(key, palla[key]);
} */

/********************  
 SNACK 2 
 *******************/

 //Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base
 
 
 var triangolo = {
     base: 10,
     altezza: 7,
    }
    
//Calcolare perimetro e area.

var ipotenusa = Math.sqrt(Math.pow(triangolo.base, 2) + Math.pow(triangolo.altezza, 2));
console.log(ipotenusa);

var perimetro = triangolo.base + triangolo.altezza + ipotenusa;
console.log(perimetro);

var area = (ipotenusa * triangolo.altezza) / 2;
console.log(area);