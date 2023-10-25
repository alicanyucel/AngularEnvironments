import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { enviroment } from './environments/environment.developer';

@Component({
  selector: 'app-root',
  template:`
  <h1>Angular Environment Example</h1>
  <a routerLink="/c1">C1 Component</a>
  <a routerLink="/c2">C2 Component></a>
  <button (click)="getList()">Api İsteği Yap</button>
  <hr>
  <ul>
    <li *ngFor="let t of todos">{{title}}</li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularenv';
  todos:any[]=[];
  constructor(
    private httpClient:HttpClient
  ){

  }
  getList(){
    this.httpClient.get(enviroment.api+"todos").subscribe((res:any)=>{
      this.todos=res;
    }
  );    
  }
}
