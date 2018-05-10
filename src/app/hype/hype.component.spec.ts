import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HypeComponent } from './hype.component';

describe('HypeComponent', () => {
  let component: HypeComponent;
  let fixture: ComponentFixture<HypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
