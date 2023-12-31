import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ButtonModule, CardModule,CollapseModule,FormModule,GridModule, PaginationModule, TableModule,TooltipModule,UtilitiesModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { NewProductComponent } from './new-product/new-product.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ProductsRoutingModule,
    CardModule,
    IconModule,
    ButtonModule,
    FormModule,
    GridModule,
    TableModule,
    UtilitiesModule ,
    CollapseModule,
    TooltipModule,
    PaginationModule,
    CommonModule
  ],
  declarations: [
    ProductsComponent,
    NewProductComponent
  ]
})
export class ProductsModule {
}
