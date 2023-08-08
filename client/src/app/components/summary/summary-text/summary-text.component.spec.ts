import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTextComponent } from './summary-text.component';

describe('SummaryTextComponent', () => {
  let component: SummaryTextComponent;
  let fixture: ComponentFixture<SummaryTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryTextComponent]
    });
    fixture = TestBed.createComponent(SummaryTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
