import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../signin/login/login.component';
import { RegisterComponent } from '../signin/register/register.component';
import { ArticlesComponent } from '../articles/articles/articles.component';
import { QuestionsAnswersComponent } from '../questions-answers/questions-answers/questions-answers.component';
import { AboutMeComponent } from '../about-me/about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from '../manager/manager/manager.component';
import { StepsComponent } from '../steps/steps/steps.component';
import { ChatComponent } from '../chat/chat/chat.component';

const HOME_ROUTES: Routes = [
  { path: "LoginComponent", component: LoginComponent },
  { path: "RegisterComponent", component: RegisterComponent },
  { path: "Manager", component: ManagerComponent },
  {
    path: '', component: HomeComponent, children: [
      { path: "ArticlesComponent", component: ArticlesComponent },
      { path: "AboutMeComponent", component: AboutMeComponent },
      { path: "QuestionsAnswersComponent", component: QuestionsAnswersComponent },
      { path: "ChatComponent", component: ChatComponent },
      { path: "StepsComponent", component: StepsComponent },
      { path: "StepsComponent", loadChildren: () => import('../steps/steps.module').then(m => m.StepsModule) }
    ]
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
  exports: [RouterModule]
})
export class HomeModule { }