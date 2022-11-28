import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeRoutingModule } from './theme-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateThemeComponent } from './create-theme/create-theme.component';



@NgModule({
  declarations: [
    ThemeListComponent,
    ThemeListItemComponent,
    ThemeDetailsComponent,
    CreateThemeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRoutingModule,
    FormsModule
    
  ],
  exports: [
    ThemeListComponent,
    ThemeListItemComponent,
    ThemeDetailsComponent,
    CreateThemeComponent
  ]
})
export class ThemeModule { }
