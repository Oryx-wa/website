import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SapComponent } from './sap/sap.component';
import { SageComponent } from './sage/sage.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './navigation/nav.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { SupportComponent } from './support/support.component';
import { CareerComponent } from './career/career. component';
import { OryxdayComponent } from './OryxDay-gallery/oryxday.component';
import { FooterComponent } from './footer/footer.component';
import { RaDemoComponent } from './raDemo/raDemo.component';
import { OryxSolutionsComponent } from './oryxSolutions/oryxSolutions.component';
import { OSmartHRComponent } from './osmart-hr/osmart-hr.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sap', component: SapComponent},
  {path: 'sage', component: SageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'nav', component: NavComponent},
  {path: 'microsoft', component: MicrosoftComponent},
  {path: 'gallery', component: SupportComponent},
  {path: 'career', component: CareerComponent},
  { path: 'oryxday', component: OryxdayComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'oryxSolutions', component: OryxSolutionsComponent},
  {path: 'o-smarthr', component: OSmartHRComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  AboutComponent, HomeComponent,
  SapComponent, SageComponent,
  ContactComponent, NavComponent,
  MicrosoftComponent, SupportComponent,
  CareerComponent, OryxdayComponent,
  FooterComponent, RaDemoComponent,
  OryxSolutionsComponent, OSmartHRComponent,
];
