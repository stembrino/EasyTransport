import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersProjectsComponent } from './partners-projects.component';

describe('PartnersProjectsComponent', () => {
  let component: PartnersProjectsComponent;
  let fixture: ComponentFixture<PartnersProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
