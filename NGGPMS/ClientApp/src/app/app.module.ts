import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AlertService } from "./services/alert.service";
import { AuthService } from './services/auth.service';
import { ConfigurationService } from './services/configuration.service';
import { LocalStoreManager } from './services/local-store-manager.service';
import { EndpointFactory } from './services/endpoint-factory.service';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [AlertService,AuthService,ConfigurationService,LocalStoreManager,EndpointFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
