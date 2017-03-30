/**
 * Created by Slimane on 29/01/2017.
 */
import { Component, OnInit } from "@angular/core";
import { Contacts } from './contacts.component';
import { ContactServices } from './ContactsService';
import { Router , ActivatedRoute } from '@angular/router';
@Component({
  selector: "add-edit-contact",
  templateUrl: './templates/Edit.Add.contact.component.html'
})

export class EditContact {

  CONTACTS:Contacts [];
  url:any;
  selectedContact:any;
  id:any;
  contact:Contacts;
  show_alert:boolean=false;


  public alerts: any = [
    {
      type: 'danger',
      msg: `Attention L'age ne doit pas dépasser les 18 ans !!`
    }
  ];

  constructor (private getC: ContactServices , private router: Router , private route:ActivatedRoute){}

  /*
     Get the id from url params when loading page
   */
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
      this.selectedContact = this.getC.findContactById(this.id);
      this.contact = new Contacts(this.selectedContact.id,this.selectedContact.civilite,this.selectedContact.nom,this.selectedContact.prenom,this.selectedContact.date_naissance,this.selectedContact.mobile,this.selectedContact.fixe,this.selectedContact.mail,this.selectedContact.remarque,this.selectedContact.photo);
    });
  }
  /*
      form submit treatment : submitContact(contactform){}
   */

  submitContact(contactform){
    if ((new Date().getTime() - new Date(this.contact.date_naissance).getTime())/(1000*24*3600*30*12) < 18) {
      this.show_alert=true;
      this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
      return;
    }else{
      this.getC.updateContact(contactform.value);
      this.router.navigate(['/contacts']);
    }
  }

  /*
      function to browse an image : browseImage (event){]
   */

  browseImage (event){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event) => {
        this.url = event.target;
        this.contact.photo=this.url.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  /*
      replace fields with initials values
   */
  resetForm(){
    this.selectedContact = this.getC.findContactById(this.id);
    this.contact = new Contacts(this.selectedContact.id,this.selectedContact.civilite,this.selectedContact.nom,this.selectedContact.prenom,this.selectedContact.date_naissance,this.selectedContact.mobile,this.selectedContact.fixe,this.selectedContact.mail,this.selectedContact.remarque,this.selectedContact.photo);

  }

}
