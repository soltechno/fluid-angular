import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		CommonModule
	],
	providers: [],
	bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
