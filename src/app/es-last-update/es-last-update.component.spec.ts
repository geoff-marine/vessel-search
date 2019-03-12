import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsLastUpdateComponent } from './es-last-update.component';

describe('EsLastUpdateComponent', () => {
  let component: EsLastUpdateComponent;
  let fixture: ComponentFixture<EsLastUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsLastUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsLastUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
