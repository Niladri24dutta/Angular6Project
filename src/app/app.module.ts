import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[ChartComponent]
})
export class AppModule { 
  
  constructor(private injector:Injector) {      
  }

  ngDoBootstrap(){
    const el = createCustomElement(ChartComponent,{injector:this.injector});
    customElements.define('chart-element',el);
  }
}


