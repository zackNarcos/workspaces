import { Component } from '@angular/core';

@Component({
  selector: 'app-front-nav-bar',
  templateUrl: './front-nav-bar.component.html',
  styleUrls: ['./front-nav-bar.component.scss']
})
export class FrontNavBarComponent {
  gitLink = 'https://github.com/zackNarcos'
  contactRoute = '/contact';
}
