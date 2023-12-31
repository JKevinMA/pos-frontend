import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Productos'
    },
    children: [
      {
        path: '',
        component: ProductsComponent,
        data: {
          title: ''
        },
    
      },
      {
        path: 'nuevo',
        component: NewProductComponent,
        data: {
          title: 'Nuevo producto'
        }
      },
    ],
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}