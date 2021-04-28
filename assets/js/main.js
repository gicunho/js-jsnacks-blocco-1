/* //L’utente inserisce due parole in successione, con due prompt.
var parola_1 = prompt('Inserisci la prima parola');
var parola_2 = prompt('Inserisci la seconda parola');

//Il software stampa prima la parola più corta, poi la parola più lunga.
if (parola_1.length > parola_2.length){
    console.log(parola_2);
    console.log(parola_1);
} else if (parola_2.length > parola_1.length){
    console.log(parola_1);
    console.log(parola_2);
} else if (parola_1.length == parola_2.length){
    console.log(parola_1);
    console.log(parola_2);
} */

//****************Snack 3 */
/* //Il software deve chiedere per 10 volte all’utente di inserire un numero.
var numUtente = [prompt('Inserisci il primo numero'), 
                prompt('Inserisci il secondo numero'), 
                prompt('Inserisci il terzo numero'), 
                prompt('Inserisci il quarto numero'), 
                prompt('Inserisci il quinto numero'), 
                prompt('Inserisci il sesto numero'), 
                prompt('Inserisci il settimo numero'), 
                prompt('Inserisci l\'ottavo numero'), 
                prompt('Inserisci il nono numero'), 
                prompt('Inserisci il decimo numero')];
console.log(numUtente);


//Il programma stampa la somma di tutti i numeri inseriti.
var somma = Number(numUtente[0])+
            Number(numUtente[1])+
            Number(numUtente[2])+
            Number(numUtente[3])+
            Number(numUtente[4])+
            Number(numUtente[5])+
            Number(numUtente[6])+
            Number(numUtente[7])+
            Number(numUtente[8])+
            Number(numUtente[9]);

console.log(somma); */

// *********** Snack 4 ***********

/* //In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
var listaInvitati = ['giorgio', 'andrea', 'gianmarco', 'michele', 'leonardo', 'domenico', 'eduardo', 'davide', 'riccardo'];

//chiedi all’utente il suo nome 
var nomePersona = prompt('Qual è il tuo nome?').toLowerCase();
console.log(nomePersona);
var personaInLista = false;

//e comunicagli se può partecipare o no alla festa. 
for (var i = 0; i < listaInvitati.length; i++){
    if (nomePersona == listaInvitati[i]){
        personaInLista = true;
    }
}

if (personaInLista){
    alert('Benvenuto alla festa');
} else {
    alert('Purtroppo non sei tra gli invitati');
} */

// *************** Snack 5 ***************
/* 
//Crea un array vuoto.
var numUtente = [];

//Chiedi per 6 volte all’utente di inserire un numero
for (var i = 0; i < 6; i++) {
    var domanda = prompt('Inserisci un numero');
    console.log(domanda);
    //se è dispari inseriscilo nell’array. 
    if (domanda % 2 != 0) {
        numUtente.push(domanda)
    }
}
console.log(numUtente);
 */



// *************** Snack 6 ***************
/* 
//dove N è un numero indicato dall’utente.
var numero = Number(prompt('Inserisci un numero'));

for (var i = 1; i <= numero; i++) {
    var cubo = Math.pow(i, 3);
    // Stampa il cubo dei primi N numeri,
    console.log(cubo);
} */



// *************** Snack 8 ***************

var numero = [];
var somma = 0;
for (var i=0; i < 4; i++) {
    //Chiedi un numero di 4 cifre all’utente
    var singNum = Number(prompt('Inserisci una cifra'));
    numero.push(singNum);
    //e calcola la somma di tutte le cifre che compongono il numero.
    somma = somma + numero[i];
}
console.log(somma);
