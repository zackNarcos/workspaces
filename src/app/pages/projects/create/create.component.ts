import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ModuleStoreService} from "../../../core/store/module-store.service";
import {ProjectService} from "../../../core/services/project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-project',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  imageFile: File;
  logoFile: File;

  projectForm = new  FormGroup({
    title: new FormControl(''),
    link: new FormControl(''),
    logo: new FormControl(''),
    image: new FormControl(''),
    technologies: new FormControl(''),
    description: new FormControl('')
  });
  constructor(
    private mss: ModuleStoreService,
    private projectService: ProjectService,
    private router: Router
  ) {
  }

  addProject() {
    const formData = new FormData();
    formData.append('title', this.projectForm.get('title').value);
    formData.append('link', this.projectForm.get('link').value);
    // formData.append('logo', this.logoFile);
    formData.append('image', this.imageFile);
    formData.append('technologies', this.projectForm.get('technologies').value);
    formData.append('description', this.projectForm.get('description').value);
    console.log('formData', formData);
    // this.mss.addProject(formData);
    this.projectService.postProject(formData).subscribe({
      next: (response) => {
        this.router.navigate(['/admin/projects']);
      },
      error: (error) => {
        console.log('error', error);
      }
    });
  }
  onLogoChange($event: any) {
    this.logoFile = $event.target.files[0];
  }

  onImageChange($event: any) {
    this.imageFile = $event.target.files[0];
  }
}
