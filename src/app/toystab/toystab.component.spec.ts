import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToystabComponent } from './toystab.component';

describe('ToystabComponent', () => {
  let component: ToystabComponent;
  let fixture: ComponentFixture<ToystabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToystabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToystabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
