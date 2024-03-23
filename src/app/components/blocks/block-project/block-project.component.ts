import {Component, Input} from '@angular/core';
import {Project} from "../../../core/models/project";

@Component({
  selector: 'app-block-project',
  templateUrl: './block-project.component.html',
  styleUrls: ['./block-project.component.scss']
})
export class BlockProjectComponent {
  @Input() project: Project;
}
