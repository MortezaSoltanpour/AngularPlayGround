import { Component, NgModule } from '@angular/core';
import { contactusDto } from './contactusDto';
import { FormsModule } from '@angular/forms';
import { ParaHilighterDirective } from '../../directives/para-hilighter.directive';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ParaHilighterDirective],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {
  contactus: contactusDto = {
    body: '',
    email: '',
    firstname: '',
    lastname: '',
    mobile: '',
  };

  handleSubmit() {
    console.table(this.contactus);
  }
}
