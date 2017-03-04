//our root app component
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <div [style.background-color]="getStyle()">
      I'm a div that wants to be styled
    </div>
    <button (click)="showStyle = !showStyle;">Toggle style</button>
  </div>
  `
})
class App {
  showStyle: false;
  
  constructor() {
  }
  
  getStyle() {
    if(this.showStyle){
      return "yellow";
    } else {
      return "";
    }
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}
