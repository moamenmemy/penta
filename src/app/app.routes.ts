import { Routes } from '@angular/router';
import { HeroComponent } from './features/hero/hero/hero.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
      { path: '', component: HeroComponent },      
  { path: 'contact', component: ContactComponent }, 
  { path: 'products', component: ProductComponent },
];
