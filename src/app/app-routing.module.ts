import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Sayfalar arasi gecisleri belirleyecegimiz yapi
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
