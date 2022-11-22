import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeRoutingModule } from './theme-routing.module';



@NgModule({
  declarations: [
    ThemeListComponent,
    ThemeListItemComponent,
    ThemeDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRoutingModule
    
  ],
  exports: [
    ThemeListComponent,
    ThemeListItemComponent,
    ThemeDetailsComponent,
  ]
})
export class ThemeModule { }
