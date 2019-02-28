import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVesselComponent } from './show-vessel.component';

describe('ShowVesselComponent', () => {
  let component: ShowVesselComponent;
  let fixture: ComponentFixture<ShowVesselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVesselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
