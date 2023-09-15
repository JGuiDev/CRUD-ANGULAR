import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Requisições Http */
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import { LoginViewComponent } from './shared/login-view/login-view.component';
import { CrudHomeComponent } from './views/crud-home/crud-home.component';

/* Forms */
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MessageViewComponent } from './components/message-view/message-view.component';


@NgModule({
    declarations: [AppComponent, EditHeroComponent, LoginViewComponent, CrudHomeComponent, MessageViewComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
