import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
// import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModuleStoreService} from "../../core/store/module-store.service";

@Component({
    selector: 'app-components',
    templateUrl: './accueil.component.html',
    styles: []
})

export class AccueilComponent implements OnInit, OnDestroy {
  links = {
    facebook: 'https://www.facebook.com/zacharie.abessoloekouma/',
    linkedin: 'https://www.linkedin.com/in/zackabess/',
    youtube: 'https://www.youtube.com/channel/UCTV4hQd4wyFsCsEUBy0nYQQ',
    instagram: 'https://www.instagram.com/matheo_oa/',
    github: 'https://github.com/zackNarcos',
  }
  logos = [
    {name: 'multivers', logo: '../assets/img/logos/multivers.png', class: 'px-3'},
    {name: 'midgard', logo: '../assets/img/logos/midgard.png', class: 'px-3'},
    {name: 'ism', logo: '../assets/img/logos/ism.png', class: 'px-6'},
    {name: 'ambassade gabon', logo: '../assets/img/logos/gabon.png', class: 'px-3'},
    {name: 'keasExpress', logo: '../assets/img/logos/keasexpress.png', class: 'px-5'},
    {name: 'geeke', logo: '../assets/img/logos/geeke.jpg', class: 'px-3'},
  ];
    constructor(
      private renderer : Renderer2,
      private moduleStoreService: ModuleStoreService,
    ) {
    }
    ngOnInit() {
    }
    ngOnDestroy(){
    }
}
