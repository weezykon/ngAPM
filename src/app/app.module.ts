import { StarComponent } from './shared/star.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent, ProductListComponent]
})
export class AppModule { }
