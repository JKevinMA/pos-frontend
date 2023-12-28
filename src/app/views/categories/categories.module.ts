import { NgModule } from '@angular/core';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { ButtonModule, CardModule,CollapseModule,FormModule,GridModule, PaginationModule, TableModule,TooltipModule,UtilitiesModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
/* import { NewProductComponent } from './new-product/new-product.component'; */
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CategoriesRoutingModule,
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
    CategoriesComponent,
    /* NewProductComponent */
  ]
})
export class CategoriesModule {
}
