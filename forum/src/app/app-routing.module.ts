import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

import { CreateThemeComponent } from './create-theme/create-theme.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'themes',
    component: MainComponent
  },
  {
    path: 'themes/:themeId',
    component: ThemeDetailsComponent
  },
  {
    path: 'create/theme',
    canActivate: [AuthGuard],
    component: CreateThemeComponent
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
