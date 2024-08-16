import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontFormationsComponent } from './front-formations.component';

describe('ProjectsComponent', () => {
  let component: FrontFormationsComponent;
  let fixture: ComponentFixture<FrontFormationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontFormationsComponent]
    });
    fixture = TestBed.createComponent(FrontFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
