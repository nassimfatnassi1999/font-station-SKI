import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkieurComponent } from './add-skieur.component';

describe('AddSkieurComponent', () => {
  let component: AddSkieurComponent;
  let fixture: ComponentFixture<AddSkieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSkieurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSkieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
