import { FileUploadService } from './file-upload.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  uploadForm: FormGroup;
  file: File;
  constructor(
    private formBuilder: FormBuilder,
    private service: FileUploadService
  ) {}

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }
  upload() {
    const description = this.uploadForm.get('description').value;
    const allowComments = this.uploadForm.get('allowComments').value;
    this.service.upload(description, allowComments, this.file);
  }
}
