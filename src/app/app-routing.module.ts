import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { KuryeComponent } from './kurye/kurye.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ana sayfa
  { path: 'features', component: FeaturesComponent }, // Özellikler sayfası
  { path: 'contact', component: ContactComponent }, // İletişim sayfası
  { path: 'portfolio', component: PortfolioComponent }, // Portföy sayfası
  { path: 'services', component: ServicesComponent } // Hizmetler sayfası
  { path: 'Kurye', component:KuryeComponent  } // Hizmetler sayfası
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }