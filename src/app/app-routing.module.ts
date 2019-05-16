import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaesarCipherComponent } from './components/caesar-cipher/caesar-cipher.component';
import { VignereCipherComponent } from './components/vignere-cipher/vignere-cipher.component';

const routes: Routes = [
  {path: 'home', component: CaesarCipherComponent},
  {path: 'vignere', component: VignereCipherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
