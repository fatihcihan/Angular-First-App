import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';


//Sayfalar arasi gecisleri belirleyecegimiz yapi (routing yapisi)
const routes: Routes = [
  {
    path: '', component: HomeComponent,  //adres bos olursa home componenti cagir    
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'products', component: ProductsComponent,
  },
  {
    path: 'categories', component: CategoriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
