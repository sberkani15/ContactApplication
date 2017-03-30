/**
 * Created by Slimane on 29/01/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContacts} from './listContacts.component';
import { AddContact } from './add.contact.component';
import { EditContact } from './edit.contact.component';

//noinspection TypeScriptUnresolvedVariable

export const rootRouterConfig: Routes = <Routes>[
  {path: '', redirectTo: '/contacts', pathMatch: 'full', useAsDefault: false},
  {path: 'contacts', component: ListContacts},
  {path: 'add', component: AddContact},
  {path: 'edit/:id', component: EditContact}
];
