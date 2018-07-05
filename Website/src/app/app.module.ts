import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule, RouterOutlet} from '@angular/router';
import {appRoutes} from './routingmodule';
import {AlbumComponent} from './album/album.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {FaqComponent} from './faq/faq.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatTabGroup,
  MatTabsModule
} from '@angular/material';
import {TabComponent} from './home/tab/tab.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlbumComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FaqComponent,
    TabComponent,
    InfoComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
FlexLayoutModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatMenuModule,
    

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
