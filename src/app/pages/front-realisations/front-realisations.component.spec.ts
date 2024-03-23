import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontRealisationsComponent } from './front-realisations.component';

describe('FrontRealisationsComponent', () => {
  let component: FrontRealisationsComponent;
  let fixture: ComponentFixture<FrontRealisationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontRealisationsComponent]
    });
    fixture = TestBed.createComponent(FrontRealisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
