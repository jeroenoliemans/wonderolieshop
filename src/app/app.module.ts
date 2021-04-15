import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopComponent } from './shop/shop.component';
import { DetailComponent } from './detail/detail.component';
import { BasketComponent } from './basket/basket.component';
import { NavigationComponent } from './navigation/navigation.component';

import {LogService} from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopComponent,
    DetailComponent,
    BasketComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
