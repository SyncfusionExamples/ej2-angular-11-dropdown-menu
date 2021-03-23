import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Imported Syncfusion dropdown button module from splitbuttons package.
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DropDownButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
