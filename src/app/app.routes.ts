import { Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HakkindaComponent } from './hakkinda/hakkinda.component';
import { IlanlarComponent } from './ilanlar/ilanlar.component';
import { IlandetayComponent } from './ilandetay/ilandetay.component';
import { IletisimComponent } from './iletisim/iletisim.component';

export const routes: Routes = [
  { path: '', component: AnasayfaComponent },
  { path: 'hakkinda', component: HakkindaComponent },
  { path: 'ilanlar', component: IlanlarComponent },
  { path: 'ilandetay/:id', component: IlandetayComponent },
  { path: 'iletisim', component: IletisimComponent },
  { path: '**', redirectTo: '' }
];