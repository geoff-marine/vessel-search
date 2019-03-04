import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVesselsComponent } from './search-vessels.component';

describe('SearchVesselsComponent', () => {
  let component: SearchVesselsComponent;
  let fixture: ComponentFixture<SearchVesselsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVesselsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVesselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
