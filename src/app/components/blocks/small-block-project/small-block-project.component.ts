import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-small-block-project',
  templateUrl: './small-block-project.component.html',
  styleUrls: ['./small-block-project.component.scss']
})
export class SmallBlockProjectComponent {
  @Input() project: any;
  @Input() isRealisation = false;
}
