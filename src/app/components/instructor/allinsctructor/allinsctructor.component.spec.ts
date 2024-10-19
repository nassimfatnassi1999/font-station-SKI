import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinsctructorComponent } from './allinsctructor.component';

describe('AllinsctructorComponent', () => {
  let component: AllinsctructorComponent;
  let fixture: ComponentFixture<AllinsctructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllinsctructorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllinsctructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
