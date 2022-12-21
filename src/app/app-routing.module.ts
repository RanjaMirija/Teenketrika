import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'home', component:HomeComponent},
{path: '', redirectTo:'home', pathMatch:'full'},
{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
{path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
