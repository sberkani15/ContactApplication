import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListContacts } from './listContacts.component';
import { rootRouterConfig } from './app-routing.module';
import { AddContact } from "./add.contact.component";
import { EditContact } from './edit.contact.component';
import { ContactServices } from './ContactsService';
import { AlertModule } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListContacts,
    AddContact,
    EditContact
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [ContactServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
