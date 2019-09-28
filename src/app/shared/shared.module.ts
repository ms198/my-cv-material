import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// ~ Component
import { DashboardComponent } from '../_main_content/dashboard/dashboard.component';
import { HeaderComponent } from './app-header/header.component';
import { MenuBottomComponent } from './app-menu-bottom/menu-bottom.component';

// ~ Material Module
import { MatRippleModule, 
         MatSidenavModule, 
         MatListModule, 
         MatMenuModule, 
         MatToolbarModule, 
         MatButtonModule, 
         MatIconModule } from '@angular/material';

@NgModule({
   declarations:[
      DashboardComponent,
      HeaderComponent,
      MenuBottomComponent,
   ],
   imports: [
     RouterModule,
     MatRippleModule,
     MatIconModule,
     MatButtonModule,
     MatToolbarModule,
     MatMenuModule,
     MatSidenavModule, 
     MatListModule, 
   ],
   exports:[
      // # Module
      RouterModule,
      
      // # Component
      DashboardComponent,
      HeaderComponent,
      MenuBottomComponent,
   ]
 })
 export class SharedModule { }
 