import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeModule } from './theme/theme.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainComponent,
    HomeComponent,
    CreateThemeComponent,
  ],

  // The order of registration is important! ---> 
  // --> AuthModule before AppRoutingModule
  imports: [
    AuthModule,
    ThemeModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
