import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
