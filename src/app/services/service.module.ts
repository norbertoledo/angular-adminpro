import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SidebarService, SharedService } from './services.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    SettingsService,
    SharedService,
    SidebarService,
  ]
})
export class ServiceModule { }
