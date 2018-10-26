import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {CardlistComponent} from './cardlist/cardlist.component';
import {NewCardInputComponent} from './new-card-input/new-card-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardlistComponent,
    NewCardInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
