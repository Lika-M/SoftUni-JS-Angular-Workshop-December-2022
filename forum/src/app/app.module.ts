import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ThemeModule } from './theme/theme.module';
import { MainComponent } from './main/main.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainComponent,
    HomeComponent,

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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (userService: UserService) => {
        return () => userService.authenticate();
      },
      deps: [UserService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
