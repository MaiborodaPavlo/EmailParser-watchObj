
import {wordsCount, getWords} from "./words.js";

let str = '  Всем     привет!     Ура     ура!  работает! lol';

console.log(wordsCount(str));

for(let some of getWords(str)){
    console.log(some);
}