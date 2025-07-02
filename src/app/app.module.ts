import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { MatMenuModule } from '@angular/material/menu';
// Libraries
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CommonModule } from '@angular/common';
import { FeathericonsModule } from './shared/icons/feathericons/feathericons.module';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { provideHttpClient } from '@angular/common/http';
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";


ModuleRegistry.registerModules([AllCommunityModule]);


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    AppLayoutComponent,
    AppSidebarComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    RouterLink,
    CommonModule,
    RouterModule,
    BrowserModule,
    RouterLinkActive,
    AppRoutingModule,
    NgScrollbarModule,
    MatExpansionModule,
    FeathericonsModule,
    // Angular Material
    MatCardModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [
    // { provide: AlbumGateway, useClass: AlbumApiService }
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
