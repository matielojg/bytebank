import { FileUploadComponent } from './file-upload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,VMessageModule,RouterModule
  ]
})
export class FileUploadModule { }
