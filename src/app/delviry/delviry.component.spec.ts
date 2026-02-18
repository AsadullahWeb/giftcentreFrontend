import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelviryComponent } from './delviry.component';

describe('DelviryComponent', () => {
  let component: DelviryComponent;
  let fixture: ComponentFixture<DelviryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelviryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelviryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
