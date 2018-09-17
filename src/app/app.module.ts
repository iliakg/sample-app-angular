import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {PreloadAllModules, RouterModule} from '@angular/router'

import {AppComponent} from './app.component'
import {AdminTokenInterceptor} from './admin/shared/services/admin-token.interceptor'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'admin', pathMatch: 'full'},
      {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
      {path: 'admin', loadChildren: './admin/auth/auth.module#AuthModule'}
    ], {
      preloadingStrategy: PreloadAllModules
    }),
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: AdminTokenInterceptor},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
