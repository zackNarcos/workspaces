import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MailService} from "../../core/services/mail.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  links = {
    facebook: 'https://www.facebook.com/zacharie.abessoloekouma/',
    linkedin: 'https://www.linkedin.com/in/zackabess/',
    youtube: 'https://www.youtube.com/channel/UCTV4hQd4wyFsCsEUBy0nYQQ',
    instagram: 'https://www.instagram.com/matheo_oa/',
    github: 'https://github.com/zackNarcos',
  }

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  constructor(
    private mailService: MailService,
  ) {
  }
  submitContactForm() {
    if (this.contactForm.valid) {
      this.mailService.sendMail(this.contactForm.value).subscribe();
    }
  }
}
