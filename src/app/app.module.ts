import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {UserInputComponent} from "./user-input/user-input.component";

@NgModule({
  declarations:[AppComponent,UserInputComponent,HeaderComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {

}
