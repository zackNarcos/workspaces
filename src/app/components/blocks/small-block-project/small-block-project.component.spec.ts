import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBlockProjectComponent } from './small-block-project.component';

describe('SmallBlockProjectComponent', () => {
  let component: SmallBlockProjectComponent;
  let fixture: ComponentFixture<SmallBlockProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallBlockProjectComponent]
    });
    fixture = TestBed.createComponent(SmallBlockProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
