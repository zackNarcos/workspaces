import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontNavBarComponent } from './front-nav-bar.component';

describe('FrontNavBarComponent', () => {
  let component: FrontNavBarComponent;
  let fixture: ComponentFixture<FrontNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontNavBarComponent]
    });
    fixture = TestBed.createComponent(FrontNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
