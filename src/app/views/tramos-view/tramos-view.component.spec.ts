import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramosViewComponent } from './tramos-view.component';

describe('TramosViewComponent', () => {
  let component: TramosViewComponent;
  let fixture: ComponentFixture<TramosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TramosViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TramosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
