import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SummaryFileComponent } from './summary-file/summary-file.component';
import { SummaryTextComponent } from './summary-text/summary-text.component';
import { SummaryUrlComponent } from './summary-url/summary-url.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [],
  declarations: [
    SummaryFileComponent,
    SummaryTextComponent,
    SummaryUrlComponent,
  ],
  exports: [],
  bootstrap: [],
})
export class SummaryModule {}
