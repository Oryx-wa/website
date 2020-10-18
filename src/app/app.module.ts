import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './config.service';
import { RaDemoComponent } from './raDemo/raDemo.component';
import { FooterComponent } from './footer/footer.component';
import { OryxSolutionsComponent } from './oryxSolutions/oryxSolutions.component';
import { OSmartHRComponent } from './osmart-hr/osmart-hr.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    RaDemoComponent,
    FooterComponent,
    OryxSolutionsComponent,
    OSmartHRComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
