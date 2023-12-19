import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ButtonModule, CardModule,CollapseModule,FormModule,GridModule, PaginationModule, TableModule,TooltipModule,UtilitiesModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

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
    PaginationModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule {
}
