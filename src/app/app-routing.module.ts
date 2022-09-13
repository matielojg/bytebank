import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { NovaTransferenciaComponent } from './nova-tranferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import {FileUploadComponent}from './file-upload/file-upload.component'

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: NovaTransferenciaComponent },
  { path: 'file-upload', component: FileUploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
