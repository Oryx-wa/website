import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OryxSolutionsComponent } from './oryxSolutions.component';

describe('OryxSolutionsComponent', () => {
  let component: OryxSolutionsComponent;
  let fixture: ComponentFixture<OryxSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OryxSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OryxSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
