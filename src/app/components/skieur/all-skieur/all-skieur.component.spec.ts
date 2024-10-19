import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSkieurComponent } from './all-skieur.component';

describe('AllSkieurComponent', () => {
  let component: AllSkieurComponent;
  let fixture: ComponentFixture<AllSkieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSkieurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllSkieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
