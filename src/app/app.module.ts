import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {UserInputComponent} from "./user-input/user-input.component";
import {FormsModule} from "@angular/forms";
import {InvestmentResultComponent} from "./investment-result/investment-result.component";

@NgModule({
  declarations:[AppComponent,UserInputComponent,HeaderComponent],
  imports: [BrowserModule, FormsModule, InvestmentResultComponent],
  bootstrap: [AppComponent],
})
export class AppModule {

}
