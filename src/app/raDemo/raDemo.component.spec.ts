import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaDemoComponent } from './raDemo.component';

describe('RaDemoComponent', () => {
  let component: RaDemoComponent;
  let fixture: ComponentFixture<RaDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
