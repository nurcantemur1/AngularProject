import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { SectionsComponent } from './sections.component';
import { AppRoutingModule } from '../app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipePipe } from '../pipes/filter-pipe.pipe';
import { VatAddedPipe } from '../pipes/vat-added.pipe';
import { ToastrModule } from 'ngx-toastr';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { NgbdModalComponent, NgbdModalContent } from './modal/modal.component';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [
    SectionsComponent,
    FilterPipePipe,
    VatAddedPipe,
    ProductComponent,
    CategoryComponent,
    NgbdModalComponent,
    NgbdModalContent,
    ProductAddComponent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    ReactiveFormsModule,
  ],
  providers: [{provide:DEFAULT_CURRENCY_CODE,useValue:"₺"},],
  exports:[ SectionsComponent ]
})
export class SectionsModule { }
