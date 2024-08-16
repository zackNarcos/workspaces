import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ModuleStoreService} from "../../../core/store/module-store.service";
import {ProjectService} from "../../../core/services/project.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-project',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  imageFile: File;
  logoFile: File;
  isEdit = false;

  project$ = this.mss.getSingleProject();

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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.isEdit = true;
        this.mss.loadSingleProject(params['id']);
        this.project$.subscribe((project) => {
          if (!project) return;
          this.projectForm.patchValue({
            title: project.title,
            link: project.link,
            technologies: project.technologies,
            description: project.description
          });
        });
      }
    });
  }

  addProject() {
    const formData = new FormData();
    formData.append('title', this.projectForm.get('title').value);
    formData.append('link', this.projectForm.get('link').value);
    // formData.append('logo', this.logoFile);
    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }
    formData.append('technologies', this.projectForm.get('technologies').value);
    formData.append('description', this.projectForm.get('description').value);
    if (this.isEdit) {
      formData.append('id', this.activatedRoute.snapshot.params['id']);
    }
    console.log('formData', formData);
    // this.mss.addProject(formData);

    if (this.isEdit) {
      this.mss.updateProject(formData, this.activatedRoute.snapshot.params['id']);
      this.router.navigate(['/admin/projects']);
      return;
    } else {
      this.projectService.postProject(formData).subscribe({
        next: (response) => {
          this.router.navigate(['/admin/projects']);
        },
        error: (error) => {
          console.log('error', error);
        }
      });
    }
  }
  onLogoChange($event: any) {
    this.logoFile = $event.target.files[0];
  }

  onImageChange($event: any) {
    this.imageFile = $event.target.files[0];
  }
}
