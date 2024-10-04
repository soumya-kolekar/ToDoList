import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { RecordsService } from './records.service';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component'; 
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ImagecomponentComponent,
    FormdemoComponent,
    NavbarComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
