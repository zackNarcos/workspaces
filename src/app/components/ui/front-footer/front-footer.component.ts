import {Component, Input} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MailService} from "../../../core/services/mail.service";

@Component({
  selector: 'app-front-footer',
  templateUrl: './front-footer.component.html',
  styleUrls: ['./front-footer.component.scss']
})
export class FrontFooterComponent {
  links = {
    facebook: 'https://www.facebook.com/zacharie.abessoloekouma/',
    linkedin: 'https://www.linkedin.com/in/zackabess/',
    youtube: 'https://www.youtube.com/channel/UCTV4hQd4wyFsCsEUBy0nYQQ',
    instagram: 'https://www.instagram.com/matheo_oa/',
    github: 'https://github.com/zackNarcos',
  }

  mailControl = new FormControl('', [Validators.required, Validators.email])

  constructor(
    private mailService: MailService,
  ) {
  }

  subscribe() {
    if (this.mailControl.valid) {
      this.mailService.subscribe({email: this.mailControl.value}).subscribe(
        () => {
          this.mailControl.reset()
          alert('Vous êtes maintenant inscrit à ma newsletter')
        },
        () => {
          alert('Une erreur est survenue lors de votre inscription à ma newsletter')
        }
      );
    }
  }
}
