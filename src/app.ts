import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<form #f="ngForm" novalidate>
  <input type="text" name="hoge" ngModel required>
  <p [hidden]="!f.form.dirty || f.form.valid">必須入力です</p>
</form>
<ul>
  <li *ngFor="let data of demoData">{{data.name}} - {{data.age}}</li>
</ul>
  `,
  styles:[`
input.ng-invalid.ng-dirty {
  border-color: #ff0000;
}
  }`]
})
export class App implements OnInit {
  constructor() { }

  ngOnInit() { }

  demoData: any = [
    {name: '山田', age: 24},
    {name: '田中', age: 28},
    {name: '佐藤', age: 18},
    {name: '井上', age: 32},
    {name: '高橋', age: 46}
  ]
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [],
  declarations: [App],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }

