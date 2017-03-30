/**
 * Created by Slimane on 28/01/2017.
 */
import {Component,OnInit} from '@angular/core';
import {Contacts} from './contacts.component';
import { Router } from '@angular/router';
import { ContactServices } from './ContactsService';


@Component({
  selector: 'listcontacts',
  templateUrl:'./templates/ListContacts.html'
})


export class ListContacts {

  CONTACTS:Contacts[];

  constructor(private router:Router , private getC: ContactServices){}

  ngOnInit(){
    //noinspection TypeScriptValidateTypes
    this.getC.listContacts().then((CONTACTS: Contacts[]) => this.CONTACTS = CONTACTS);

  }

  /*
    Delete a given "id" contact 
  */

  delete_contact(id){
    if (confirm("voulez vraiment supprimer ce contact")){
      let index = -1;
      for(let i = 0; i < this.CONTACTS.length; i++) {
        if(this.CONTACTS[i].id == id) {
          index = i;
          break;
        }
      }
      this.CONTACTS.splice(index, 1);
    }

  }

  editer_contact(id){
    this.router.navigate(['/edit', id]);
  }

}
