import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryUrlComponent } from './summary-url.component';

describe('SummaryUrlComponent', () => {
  let component: SummaryUrlComponent;
  let fixture: ComponentFixture<SummaryUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryUrlComponent]
    });
    fixture = TestBed.createComponent(SummaryUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
