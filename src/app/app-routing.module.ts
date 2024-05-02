import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DependenciesComponent } from './components/dependencies/dependencies.component';
import { AboutComponent } from './components/about/about.component';
import { AlkolComponent } from './components/bagimliliklar/alkol/alkol.component';
import { SigaraComponent } from './components/bagimliliklar/sigara/sigara.component';
import { MaddeComponent } from './components/bagimliliklar/madde/madde.component';
import { TeknolojiComponent } from './components/bagimliliklar/teknoloji/teknoloji.component';
import { FastFoodComponent } from './components/bagimliliklar/fast-food/fast-food.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PublicSpotlightComponent } from './components/public-spotlight/public-spotlight.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "bagimliliklar", component: DependenciesComponent },
  { path: "hakkimizda", component: AboutComponent },
  { path: "alkol", component: AlkolComponent },
  { path: "sigara", component: SigaraComponent },
  { path: "madde", component: MaddeComponent },
  { path: "teknoloji", component: TeknolojiComponent },
  { path: "fast-food", component: FastFoodComponent },
  { path: "kamu-spotu", component: PublicSpotlightComponent },

  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled' //scroll to the top
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
