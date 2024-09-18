import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NumberFormatPipe } from './shared/number-format.pipe';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		NumberFormatPipe
	],
	imports: [
		BrowserModule,
		CommonModule
	],
	providers: [],
	bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
