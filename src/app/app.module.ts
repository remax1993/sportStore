import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from './store/store.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {StoreComponent} from './store/store.component';
import {CartDetailComponent} from './store/cartDetail.component';
import {CheckoutComponent} from './store/checkout.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    RouterModule.forRoot([
        {path: 'store', component: StoreComponent},
        {path: 'cart', component: CartDetailComponent},
        {path: 'checkout', component: CheckoutComponent},
        {path: '**', redirectTo: '/store'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
