import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostListComponent } from './post-list/post-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { CreateThemeComponent } from './create-theme/create-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    ThemeListComponent,
    MainComponent,
    PostListComponent,
    HomeComponent,
    ThemeListItemComponent,
    ThemeDetailsComponent,
    CreateThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
