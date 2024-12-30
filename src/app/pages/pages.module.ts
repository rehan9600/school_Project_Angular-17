import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule,
    PagesRoutingModule,
    MaterialModule,
    SharedModule,
    MatPaginatorModule,
    // SocialModule,
    NgIf
  ],
  providers: []
})
export class PagesModule { }
