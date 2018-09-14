import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http'
import {PreloadAllModules, RouterModule} from '@angular/router'

import {AppComponent} from './app.component'

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
