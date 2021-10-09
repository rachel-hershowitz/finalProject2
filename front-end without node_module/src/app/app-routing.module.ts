import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './modules/about-me/about-me/about-me.component';
import { ArticlesComponent } from './modules/articles/articles/articles.component';
import { HomeComponent } from './modules/home/home/home.component';
import { QuestionsAnswersComponent } from './modules/questions-answers/questions-answers/questions-answers.component';
import { LoginComponent } from './modules/signin/login/login.component';
import { RegisterComponent } from './modules/signin/register/register.component';
import { StepsComponent } from './steps/steps/steps.component';

const routes: Routes = [
  // {
  //   path: "",
  //   pathMatch: 'full',
  //   loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  // },
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  // { path: "LoginComponent", component: LoginComponent },
  // { path: "ArticlesComponent", component: ArticlesComponent },
  // { path: "RegisterComponent", component: RegisterComponent },
  // { path: "AboutMeComponent", component: AboutMeComponent },
  // { path: "QuestionsAnswersComponent", component: QuestionsAnswersComponent },
  // {
  //   path: "StepsComponent", loadChildren: () => import('./steps/steps.module').then(m => m.StepsModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
