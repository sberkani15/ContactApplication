/**
 * Created by Slimane on 29/01/2017.
 */
import { Component, OnInit } from "@angular/core";
import { Contacts } from './contacts.component';
import { ContactServices} from './ContactsService';
import { Router } from '@angular/router';
@Component({
  selector: "add-edit-contact",
  templateUrl: './templates/Edit.Add.contact.component.html'
})

export class AddContact {
  CONTACTS: Contacts [];
  url:any;
  mobile:any;
  show_alert:boolean=false;

  public alerts: any = [
    {
      type: 'danger',
      msg: `Attention L'age doit dépasser les 18 ans !!`
    }
  ];


  constructor (private getC: ContactServices , private router: Router){

  }
  ngOnInit(){
    this.getC.listContacts().then((CONTACTS: Contacts[]) => this.CONTACTS = CONTACTS);
  }
  contact = new Contacts(1,'','','','','','','','','');

  submitContact(contactform){

    if ((new Date().getTime() - new Date(this.contact.date_naissance).getTime())/(1000*24*3600*30*12) < 18) {
        this.show_alert=true;
        this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
        return;
    }else {
      this.getC.addNewContact(contactform.value);
      this.router.navigate(['/contacts']);
    }

  }

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


  resetForm(){
    this.contact = new Contacts(1,'','','','','','','','','');
  }

}
