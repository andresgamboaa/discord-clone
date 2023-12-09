import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterModule, RouterStateSnapshot } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationInterceptor } from './interceptor';
import { StorageService } from './services/storage-service.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { InitialModalComponent } from './pages/servers/components/initial-modal/initial-modal.component';
import { ServersComponent } from './pages/servers/servers.component';
import { NavigationSidebarComponent } from './pages/servers/components/navigation-sidebar/navigation-sidebar.component';
import { ServerSidebarComponent } from './pages/servers/components/server-sidebar/server-sidebar.component';
import { InviteDialogComponent } from './pages/servers/components/invite-dialog/invite-dialog.component';
import { ServerOptionsButtonComponent } from './pages/servers/components/server-options-button/server-options-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './pages/servers/components/chat/chat.component';

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
 ) => {
  const storageService = inject(StorageService);
  const router = inject(Router);
 
  if (!storageService.isLoggedIn()) {
    router.navigate(['login']);
    return false;
  }

  return true;
 };

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    InitialModalComponent,
    ServersComponent,
    NavigationSidebarComponent,
    ServerSidebarComponent,
    InviteDialogComponent,
    ServerOptionsButtonComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    DialogComponent,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'servers', canActivate: [canActivate],
        children: [
          { path: '', component: ServersComponent },
          { 
            path: ':serverId', component: ServersComponent,
            children: [
              { 
                path: 'channels', component: ServersComponent, 
                children: [
                  { path: ':channelId', component: ServersComponent } 
                ]
              },
            ]
          },
        ]
      },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
