/**
 * Created by Slimane on 29/01/2017.
 */

import { Injectable } from '@angular/core';
import { Contacts } from './contacts.component';

@Injectable()

export class ContactServices {

  /*
      Two contacts predefined to fill initial list of contacts
   */

  CONTACTS: Contacts []=[
    {id:1,civilite:"Mr",nom:"aa",prenom:"bb",date_naissance:"1988-12-13",mobile:"077",fixe:"999",mail:"qsqs@gmail.fr",remarque:"null",photo:"imgs/Desert.jpg"},
    {id:2,civilite:"Mme",nom:"xx",prenom:"bb",date_naissance:"1977-07-23",mobile:"7075",fixe:"3434",mail:"azaz@kjk.fr",remarque:"null",photo:"imgs/Hydrangeas.jpg"}
  ];


  /*
     function to return our list of contacts: listContacts (){}
   */

  listContacts (){
    return Promise.resolve(this.CONTACTS);
  }


  /*
     function to add a new contact: addNewContact (contact){}
   */

  addNewContact (contact){
    this.CONTACTS.push(
      {
        'id':this.CONTACTS.length+1,
        'civilite':contact.civilite,
        'nom':contact.nom,
        'prenom':contact.prenom,
        'date_naissance':contact.date_naissance,
        'mobile':contact.mobile,
        'fixe':contact.fixe,
        'mail':contact.mail,
        'remarque':contact.remarque,
        'photo':contact.photo
      }
    );
  }

  /*
      function to edit a contact: updateContact(contact){}
   */

  updateContact(contact){
    for (let i=0; i < this.CONTACTS.length; i++){
      if (this.CONTACTS[i].id === contact.id){
        this.CONTACTS[i]=contact;
        break;
      }
    }
  }

  /*
      function to find contact for a given ID: findContactById(id){}
   */

  findContactById(id){
    let found_contact: any;
    for (let i=0; i < this.CONTACTS.length; i++){
      if (this.CONTACTS[i].id === id){
         found_contact = this.CONTACTS[i];
         break;
      }
    }
    return found_contact;
  }

}
