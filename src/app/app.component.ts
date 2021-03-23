import { Component } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-root',
  template: `<!-- To render DropDownButton. -->
  <button ejs-dropdownbutton [items]='items' content='Clipboard'></button>`
})
export class AppComponent {
  title = 'Angular11Dropdown-Menu';
  // Initialize action items.
  public items: ItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];
}
