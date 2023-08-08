import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryFileComponent } from './summary-file.component';

describe('SummaryFileComponent', () => {
  let component: SummaryFileComponent;
  let fixture: ComponentFixture<SummaryFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryFileComponent]
    });
    fixture = TestBed.createComponent(SummaryFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
