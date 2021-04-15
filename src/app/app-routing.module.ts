import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { DetailComponent } from './detail/detail.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'basket', component: BasketComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
