import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: 'register',
    canActivate: [AuthGuard],
    component: RegisterComponent
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    component: LoginComponent
  },
  {
    path: 'logout',
    canActivate: [AuthGuard],
    component: LogoutComponent
  },
  {
    path: 'user/profile',
    //TODO uncomment
    canActivate: [AuthGuard],
    component: ProfileComponent
  }
]

export const AuthRoutingModule = RouterModule.forChild(routes)