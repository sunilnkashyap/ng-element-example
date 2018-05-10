import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { HypeComponent } from './hype/hype.component';

import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent,
    HypeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    HypeComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(HypeComponent, { injector: this.injector });
    customElements.define('app-hype', el);
   }

}
