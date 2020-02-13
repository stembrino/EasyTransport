import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSreenComponent } from './result-sreen.component';

describe('ResultSreenComponent', () => {
  let component: ResultSreenComponent;
  let fixture: ComponentFixture<ResultSreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
