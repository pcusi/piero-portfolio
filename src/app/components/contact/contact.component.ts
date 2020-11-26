import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../../models/Contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public formGroup: FormGroup;
  public contact: Contact;

  constructor(
    private formBuilder: FormBuilder,
    private _c: ContactService
  ) {
    this.contact = new Contact('', '', 51, 0, '');
  }

  ngOnInit(): void {
    this._form();
  }

  public _form() {
    this.formGroup = this.formBuilder.group({
      email: [this.contact.email,[Validators.required]],
      name: [this.contact.email, [Validators.required]],
      phone: [this.contact.phone, [Validators.required]],
      price: [this.contact.price, [Validators.required]],
      description: [this.contact.description, [Validators.required]]
    });
  }

  public contactMe() {
    this._c.contactMe(this.formGroup.value).subscribe(data => {
      if (data) {
        alert('Gracias por contactarte, mi respuesta no demora ni 24 horas');
        this.formGroup.reset();
      }
      else alert('No puedes contactarte ahora :(!')
    });
  }
}
