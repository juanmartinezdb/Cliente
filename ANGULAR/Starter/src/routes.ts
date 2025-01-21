import { Routes } from "@angular/router";
import { ProductDetailsComponent } from "./app/product-details/product-details.component";
import { ProductListComponent } from "./app/product-list/product-list.component";

const routeConfig: Routes = [
    {
    path: '',
    component: ProductListComponent,
    title: 'Home page'
    },
    {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product details'
    }];
    
    export default routeConfig;