import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CaesarCipherSalad';
}

declare interface String {
  shiftCipher(length : number) : string;
}

// String.prototype.shiftCipher = function(){
//   let length = this.length;
//   for(let i = 0; i < length; i++){
//       this[i] = String.fromCharCode(this.charCodeAt(i)-1)
//   }
// } 
