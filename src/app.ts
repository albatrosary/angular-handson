import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Issue Tracker</h1>
<ul>
  <li><a routerLink="home">Home</a></li>
  <li><a routerLink="issue">Issue</a></li>
  <li><a routerLink="wiki">Wiki</a></li>
</ul>
<router-outlet></router-outlet>`
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

@Component({
  selector: 'my-home',
  template: 'home.component.html'
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'my-issue',
  template: 'issue.component.html'
})
export class IssueComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-wiki',
  template: 'wiki.component.html'
})
export class WikiComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes= [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'issue', component: IssueComponent },
  { path: 'wiki', component: WikiComponent }
];

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [],
  declarations: [
    App,
    HomeComponent,
    IssueComponent,
    WikiComponent
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }

