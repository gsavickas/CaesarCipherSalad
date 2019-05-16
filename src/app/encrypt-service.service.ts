import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
//import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EncryptServiceService {
private cipherKey: number = 0;
private enteredText: string = '';
private returnText: string;

  constructor(private router: Router) { }

getCipherKey(){
  return this.cipherKey;
}

getEnteredText(){
  return this.enteredText
}

// encryptFun(shiftChar: number, userText: string){
//   let cipherKey = shiftChar;
//   let shiftDist: number = 1;
//   let enteredText = userText;
//   let charKeys: number[];



//   for (var i = 0; i < enteredText.length; i++)
//   {
//     charKeys[i] = enteredText.charCodeAt(i) - 1;
//     if (charKeys == ){
//       charKeys[i] - 1;
//     } 
//   }
//   this.returnText = charKeys.toString();
//   return console.log(this.returnText);
// }


}


String.prototype.shiftCipher  = function(numOfKeys, shiftBy){
  let shiftKeys: number[] = [numOfKeys];
  let length = this.length;

  for(let i = 0; i < length; i++){
    this[i] = String.fromCharCode(this.charCodeAt(i) - 1)
  }
}
let hi: string = 'Hello';
console.log(hi.shiftCipher(1,-1));




// String.prototype.shiftCypher = function(){
//        let length = this.length;
//        for(let i = 0; i < length; i++){
//            this[i] = String.fromCharCode(this.charCodeAt(i)-1)
//        }
//    } 
// 