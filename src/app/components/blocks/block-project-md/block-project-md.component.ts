import {Component, Input} from '@angular/core';
import {Project} from "../../../core/models/project";

@Component({
  selector: 'app-block-project-md',
  templateUrl: './block-project-md.component.html',
  styleUrls: ['./block-project-md.component.scss']
})
export class BlockProjectMdComponent {
  @Input() project: Project;
}
