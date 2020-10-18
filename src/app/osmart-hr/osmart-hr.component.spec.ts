import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSmartHRComponent } from './osmart-hr.component';

describe('OSmartHRComponent', () => {
  let component: OSmartHRComponent;
  let fixture: ComponentFixture<OSmartHRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OSmartHRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSmartHRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
