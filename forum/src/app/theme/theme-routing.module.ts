import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { MainComponent } from "../main/main.component";
import { CreateThemeComponent } from "./create-theme/create-theme.component";
import { ThemeDetailsComponent } from "./theme-details/theme-details.component";

const routes: Routes = [
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
        //TODO uncomment auth guard
        canActivate: [AuthGuard],
        component: CreateThemeComponent
      },
    ]

    export const ThemeRoutingModule = RouterModule.forChild(routes);