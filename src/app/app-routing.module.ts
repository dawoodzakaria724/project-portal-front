import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  { path: '**', redirectTo: 'register' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
