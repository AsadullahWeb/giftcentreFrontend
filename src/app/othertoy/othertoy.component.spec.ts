import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthertoyComponent } from './othertoy.component';

describe('OthertoyComponent', () => {
  let component: OthertoyComponent;
  let fixture: ComponentFixture<OthertoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthertoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthertoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
