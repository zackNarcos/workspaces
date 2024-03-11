import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockProjectComponent } from './block-project.component';

describe('BlockProjectComponent', () => {
  let component: BlockProjectComponent;
  let fixture: ComponentFixture<BlockProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockProjectComponent]
    });
    fixture = TestBed.createComponent(BlockProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
