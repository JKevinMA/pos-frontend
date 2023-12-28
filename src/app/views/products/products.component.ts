import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: 'products.component.html'
})
export class ProductsComponent implements OnInit {
    
    filterVisible:boolean=false;
    
    ngOnInit(): void {

    }
}