import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  formData: any = {
    raw: '',
    summary: '',
    selectedFile: null,
  };

  title = 'client';
  isValueActive: boolean = false;

  toggleValueActive() {
    this.isValueActive = false;
  }

  toggleValueActiveURL() {
    this.isValueActive = true;
  }

  onFileChange(event: any) {
    this.formData.selectedFile = event.target.files[0];
  }

  onSubmitForm() {
    const formData = new FormData();
    formData.append('raw', this.formData.raw);
    formData.append('summary', this.formData.summary);
    formData.append('file', this.formData.selectedFile);
  }
}
