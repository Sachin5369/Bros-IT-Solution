import { Routes } from '@angular/router';
// import { CustomersComponent } from './components/customers/customers.component';
// import { ProductComponent } from './components/product/product.component';
// import { IndustriesComponent } from './components/industries/industries.component';
// import { PricingComponent } from './components/pricing/pricing.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'product', component: ProductComponent },
  // { path: 'industries', component: IndustriesComponent },
  // { path: 'pricing', component: PricingComponent },
  // { path: 'customers', component: CustomersComponent },
  { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
];

