import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './services/data.service';
import { ViewComponent } from './view/view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ViewComponent,
    PageNotFoundComponent,
    EditComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    DataService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
