import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { OryxServiceComponent } from './components/oryx-service/oryx-service.component';
import { ContactUsPageComponent } from './components/contact-us-page/contact-us-page.component';
import { RequestDemoPageComponent } from './components/request-demo-page/request-demo-page.component';


const routes: Routes = [
  {path:'home', title: 'Home - Oryx Africa', component: HomePageComponent},
  {path:'about-us', title: 'About Us - Oryx Africa', component: AboutPageComponent},
  {path:'services', title: 'Services - Oryx Africa', component: ServicePageComponent},
  {path:'request-demo', title: 'Request Demo - Oryx Africa', component: RequestDemoPageComponent},
  {path:'contact-us', title: 'Contact Us - Oryx Africa', component: ContactUsPageComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},

  {path:'oryx-payroll', title: 'oryx Payroll - Oryx Africa', component: OryxServiceComponent},
  {path:'oryx-hr', title: 'oryx HR - Oryx Africa', component: OryxServiceComponent},

  {path:'sap-business-one', title: 'SAP Business One - Oryx Africa', component: OryxServiceComponent},
  { path: 'sap-successfactors', title: 'SAP SuccessFactors - Oryx Africa', component: OryxServiceComponent },
  { path: 'sap-business-bydesign', title: 'SAP Business ByDesign - Oryx Africa', component: OryxServiceComponent },

  {path:'microsoft-365', title: 'Microsoft 365 - Oryx Africa', component: OryxServiceComponent},
  {path:'microsoft-sharepoint', title: 'Microsoft Sharepoint - Oryx Africa', component: OryxServiceComponent},
  {path:'microsoft-dynamics', title: 'Microsoft Dynamics - Oryx Africa', component: OryxServiceComponent},

  {path:'yellow-ai', title: 'Yellow Ai - Oryx Africa', component: OryxServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
