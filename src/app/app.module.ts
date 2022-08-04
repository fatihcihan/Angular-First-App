import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Ekledigimiz tum modulleri ve componentleri icinde barindiran yapidir. 
//Yani index.html projeyle alakali her seyi app.module'e sorar
@NgModule({
  declarations: [   // declarations -> componentleri tasir
    AppComponent
  ],
  imports: [        // imports -> modulleri tasir
    BrowserModule,
    AppRoutingModule,
    FormsModule     // -> import ettikten sonra html'de ngModel ile data binding islemleri yapabiliriz
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
