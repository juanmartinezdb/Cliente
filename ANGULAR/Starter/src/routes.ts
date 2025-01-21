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