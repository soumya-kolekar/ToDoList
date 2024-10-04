import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'formdemo',component:FormdemoComponent},
  {path:'image',component:ImagecomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
