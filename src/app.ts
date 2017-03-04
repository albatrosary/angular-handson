//our root app component
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: 'src/app.html',
  styleUrl: [''],
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
