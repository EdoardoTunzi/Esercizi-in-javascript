//1.	Somma di Numeri Pari
//Scrivi una funzione che accetta un array di numeri e restituisce la somma di tutti i numeri pari. Ad esempio, con [1, 2, 3, 4], la funzione dovrebbe restituire 6.
const numberArray = [1, 2, 3, 4];
const sumEvenNum = (numArray) => {
  const numArr = [];
  numArray.forEach((element) => {
    if (element % 2 == 0) {
      numArr.push(element);
    }
  });
  let sum = numArr.reduce((acc, value) => {
    return acc + value;
  }, 0);
  return sum;
};
console.log(sumEvenNum(numberArray));
//2.	Contatore di Parole
//Crea una funzione che accetta una stringa e restituisce il numero di parole contenute in essa. Puoi usare split() per dividere la stringa in base agli spazi.
const getWordsCount = (string) => {
  let numOfWords = string.split(" ").length;
  return numOfWords;
};
console.log(getWordsCount("Domani sarà un bel giorno"));
//	3.	Inverti una Stringa
//Scrivi una funzione che prende una stringa come input e restituisce la stringa invertita. Ad esempio, per "hello", la funzione dovrebbe restituire "olleh".
const getReverseString = (string) => {
  const revertStr = string.split("").reverse().join("");
  return revertStr;
};
console.log(getReverseString("Hello world"));
//	4.	Numero più Grande in un Array
//Crea una funzione che prende un array di numeri e restituisce il numero più grande nell’array senza usare Math.max.
const getBiggerNum = (numArray) => {
  let array = numArray;
  let greaterNum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > greaterNum) {
      greaterNum = array[i];
    }
  }
  return greaterNum;
};
console.log(getBiggerNum(numberArray));
//	5.	Controllo di Palindromo
//Scrivi una funzione che verifica se una parola è un palindromo (ossia se si legge uguale da entrambi i lati). La funzione deve restituire true per palindromi come "radar" o "anna" e false per altre parole.
const checkIfPalindrome = (string) => {
  let lowerStr = string.toLowerCase();
  const reverseString = lowerStr.split("").reverse().join("");
  if (reverseString == lowerStr) {
    return true;
  } else {
    return false;
  }
};
console.log(checkIfPalindrome("tenet"));

/* 6. Conteggio delle Vocali

	•	Scrivi una funzione che prenda una stringa e conti quante vocali contiene. Le vocali sono "a", "e", "i", "o", "u" (sia maiuscole che minuscole).
	•	Esempio: Con "Hello World", la funzione dovrebbe restituire 3.*/

const getVowels = (string) => {
  let str1 = string.toLowerCase().split("");
  let vowelCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u") {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

console.log(getVowels("Hello world"));

/* 7. Moltiplicazione di Numeri in un Array

	•	Crea una funzione che accetti un array di numeri e restituisca il risultato della moltiplicazione di tutti i numeri nell’array.
	•	Esempio: Con [1, 2, 3, 4], la funzione dovrebbe restituire 24.*/

const multiplyNums = (arreyOfNum) => {
  return arreyOfNum.reduce((acc, item) => {
    return acc * item;
  }, 1);
};
console.log(multiplyNums(numberArray));
/* 8. Parola Più Lunga

	•	Scrivi una funzione che prenda una frase (stringa) e restituisca la parola più lunga presente. Se ci sono più parole con la stessa lunghezza massima, puoi restituire una di esse.
	•	Esempio: Con "Questa è una frase di esempio", la funzione dovrebbe restituire "esempio".*/
const getLongestWord = (string) => {
  const stringArr = string.split(" ");
  let charCount = 0;
  let longestWord = "";

  for (let i = 0; i < stringArr.length; i++) {
    const wordLenght = stringArr[i].length;

    if (wordLenght > charCount) {
      charCount = wordLenght;
      longestWord = stringArr[i];
    }
  }
  return longestWord;
};

console.log(getLongestWord("Questa è una frase di esempio supercalifragilisti"));
/* 9 - Raggruppa per Categoria
	•	Crea una funzione che prenda un array di oggetti, ciascuno rappresentante un prodotto, con proprietà nome, prezzo e categoria.
	•	La funzione deve restituire un oggetto in cui le chiavi sono le categorie dei prodotti e i valori sono array contenenti i nomi dei prodotti di ciascuna categoria.
	•	Array: 
    const prodotti = [
  { nome: "Mela", prezzo: 1, categoria: "Frutta" },
  { nome: "Pane", prezzo: 2, categoria: "Forno" },
  { nome: "Latte", prezzo: 1.5, categoria: "Latticini" },
  { nome: "Arancia", prezzo: 1.2, categoria: "Frutta" }
];
Esempio di Output:{ "Frutta": ["Mela", "Arancia"], "Forno": ["Pane"], "Latticini": ["Latte"] }*/

/*10 - Somma dei Valori di Proprietà
	•	Scrivi una funzione che accetti un array di oggetti rappresentanti transazioni, con proprietà tipo (può essere “entrata” o “uscita”) e importo.
	•	La funzione deve restituire la somma di tutti gli importi delle “entrate”.
	•	Array: 
    const transazioni = [
  { tipo: "entrata", importo: 200 },
  { tipo: "uscita", importo: 100 },
  { tipo: "entrata", importo: 150 },
  { tipo: "uscita", importo: 50 }
]; 
Esempio di Output: 350*/

/* 11 - Filtro degli Oggetti per Prezzo
	•	Crea una funzione che prenda un array di oggetti prodotti (come definito sotto) e un valore prezzoMassimo.
	•	La funzione deve restituire un nuovo array contenente solo i prodotti che hanno un prezzo inferiore o uguale a prezzoMassimo.
	•	Array: 
    const prodotti = [
  { nome: "Telefono", prezzo: 600 },
  { nome: "Laptop", prezzo: 1000 },
  { nome: "Tablet", prezzo: 400 },
  { nome: "Smartwatch", prezzo: 150 }
];
Esempio utilizzo: filtroProdotti(prodotti, 500); // Output: [{ nome: "Tablet", prezzo: 400 }, { nome: "Smartwatch", prezzo: 150 }]*/

/*Trova i Dipendenti Più Anziani
	•	Crea una funzione che accetti un array di oggetti rappresentanti dipendenti, con proprietà nome, età e reparto.
	•	La funzione deve restituire un array contenente i nomi dei dipendenti di età maggiore di 50.
	•	Array: 
    const dipendenti = [
  { nome: "Marco", età: 45, reparto: "Finanza" },
  { nome: "Anna", età: 52, reparto: "Risorse Umane" },
  { nome: "Luca", età: 28, reparto: "IT" },
  { nome: "Maria", età: 55, reparto: "Finanza" }
];
Esempio di output: ["Anna", "Maria"]*/

/* Ordina gli Oggetti per Proprietà
	•	Scrivi una funzione che accetti un array di oggetti rappresentanti libri, con proprietà titolo e anno.
	•	La funzione deve restituire l’array ordinato in base alla proprietà anno, dal più vecchio al più recente.
	•	Array:
    const libri = [
  { titolo: "Il vecchio e il mare", anno: 1952 },
  { titolo: "1984", anno: 1949 },
  { titolo: "Harry Potter", anno: 1997 },
  { titolo: "Orgoglio e pregiudizio", anno: 1813 }
];
Esempio di output: 
[
  { titolo: "Orgoglio e pregiudizio", anno: 1813 },
  { titolo: "1984", anno: 1949 },
  { titolo: "Il vecchio e il mare", anno: 1952 },
  { titolo: "Harry Potter", anno: 1997 }
] */
