import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPisteComponent } from './all-piste.component';

describe('AllPisteComponent', () => {
  let component: AllPisteComponent;
  let fixture: ComponentFixture<AllPisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPisteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllPisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
