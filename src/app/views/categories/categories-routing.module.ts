import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Categorías'
    },
    children: [
      {
        path: '',
        component: CategoriesComponent,
        data: {
          title: ''
        },
    
      },
      /* {
        path: 'nuevo',
        component: NewProductComponent,
        data: {
          title: 'Nuevo producto'
        }
      }, */
    ],
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {
}