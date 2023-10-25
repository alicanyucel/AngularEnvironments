import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(
      [
        {
          path: "c1",
          component: C1Component
        },
        {
          path: "c2",
          component: C2Component
        }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
