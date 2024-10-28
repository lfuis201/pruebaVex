import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTramoComponent } from './form-tramo.component';

describe('FormTramoComponent', () => {
  let component: FormTramoComponent;
  let fixture: ComponentFixture<FormTramoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTramoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTramoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
