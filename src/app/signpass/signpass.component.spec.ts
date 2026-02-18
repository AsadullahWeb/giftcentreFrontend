import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignpassComponent } from './signpass.component';

describe('SignpassComponent', () => {
  let component: SignpassComponent;
  let fixture: ComponentFixture<SignpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
