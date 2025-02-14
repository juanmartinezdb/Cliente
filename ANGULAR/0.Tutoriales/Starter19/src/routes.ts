import { Routes } from "@angular/router";
import { ProductDetailsComponent } from "./app/product-details/product-details.component";
import { ProductListComponent } from "./app/product-list/product-list.component";
import { CartComponent } from "./app/cart/cart.component";
import { ShippingComponent } from "./app/shipping/shipping.component";

export const routes: Routes = [
    { path: '', component: ProductListComponent },
{path: 'products/:productId', component: ProductDetailsComponent},
{path:'cart', component: CartComponent},
{path:'shipping', component: ShippingComponent},
    ];
    