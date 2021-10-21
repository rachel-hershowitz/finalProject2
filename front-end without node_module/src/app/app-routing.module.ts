import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './modules/about-me/about-me/about-me.component';
import { ArticlesComponent } from './modules/articles/articles/articles.component';
import { HomeComponent } from './modules/home/home/home.component';
import { QuestionsAnswersComponent } from './modules/questions-answers/questions-answers/questions-answers.component';
import { LoginComponent } from './modules/signin/login/login.component';
import { RegisterComponent } from './modules/signin/register/register.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
