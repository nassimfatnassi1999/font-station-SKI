import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubcriptionComponent } from './addsubcription.component';

describe('AddsubcriptionComponent', () => {
  let component: AddsubcriptionComponent;
  let fixture: ComponentFixture<AddsubcriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddsubcriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddsubcriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
