import {Route, Router, Routes} from '@angular/router';
import {AlbumComponent} from './album/album.component';

import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {FaqComponent} from './faq/faq.component';

export const appRoutes: Routes = [{
  path: 'album', component: AlbumComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'aboutme', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'faq', component: FaqComponent}



];
