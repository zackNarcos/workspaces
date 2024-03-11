import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarsComponent } from './side-bars.component';

describe('SideBarsComponent', () => {
  let component: SideBarsComponent;
  let fixture: ComponentFixture<SideBarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarsComponent]
    });
    fixture = TestBed.createComponent(SideBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
