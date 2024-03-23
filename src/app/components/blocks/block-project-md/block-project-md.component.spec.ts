import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockProjectMdComponent } from './block-project-md.component';

describe('BlockProjectComponent', () => {
  let component: BlockProjectMdComponent;
  let fixture: ComponentFixture<BlockProjectMdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockProjectMdComponent]
    });
    fixture = TestBed.createComponent(BlockProjectMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
