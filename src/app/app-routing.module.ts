import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './components/home/home.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: '', pathMatch: 'full', redirectTo: 'landingpage' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
