import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { Server } from './server/server';
import { Servers } from './servers/servers';
import { SuccessAlert } from './success-alert/success-alert';
import { WarningAlert } from './warning-alert/warning-alert';

@NgModule({
  declarations: [
    App,
    Server,
    Servers,
    SuccessAlert,
    WarningAlert
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
