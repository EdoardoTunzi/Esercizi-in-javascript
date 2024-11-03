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
