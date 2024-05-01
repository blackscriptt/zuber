import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DependenciesComponent } from './components/dependencies/dependencies.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AlkolComponent } from './components/bagimliliklar/alkol/alkol.component';
import { SigaraComponent } from './components/bagimliliklar/sigara/sigara.component';
import { MaddeComponent } from './components/bagimliliklar/madde/madde.component';
import { TeknolojiComponent } from './components/bagimliliklar/teknoloji/teknoloji.component';
import { FastFoodComponent } from './components/bagimliliklar/fast-food/fast-food.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DependenciesComponent,
    AboutComponent,
    AlkolComponent,
    SigaraComponent,
    MaddeComponent,
    TeknolojiComponent,
    FastFoodComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
