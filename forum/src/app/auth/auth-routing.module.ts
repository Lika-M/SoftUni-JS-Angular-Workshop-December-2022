import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
        // canActivate: [AuthGuard],
        // data:{
        //   title: 'Register',
        //   loginRequired: false
        // }
      },
      {
        path: 'login',
        component: LoginComponent,
        // canActivate: [AuthGuard],
        // data:{
        //   title: 'Login',
        //   loginRequired: false
        // }
      },
      {
        path: 'logout',
        component: LogoutComponent,
        // canActivate: [AuthGuard],
        // data:{
        //   title: 'Logout',
        //   loginRequired: true
        // }
      },
      {
        path: 'user/profile',
        //TODO uncomment
        component: ProfileComponent,
        // canActivate: [AuthGuard],
        // data:{
        //   title: 'Profile',
        //   loginRequired: false
        // }
      }
]

export const AuthRoutingModule = RouterModule.forChild(routes)