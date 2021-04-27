//L’utente inserisce due parole in successione, con due prompt.
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
}