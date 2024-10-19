import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsubcriptionComponent } from './allsubcription.component';

describe('AllsubcriptionComponent', () => {
  let component: AllsubcriptionComponent;
  let fixture: ComponentFixture<AllsubcriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllsubcriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllsubcriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
