import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';

// const MANAGER_ROUTES: Routes = [
//   {
//     path: 'Manager', component: ManagerComponent, children: [
//       { path: "ArticlesComponent", component: ArticlesComponent },
//       { path: "AboutMeComponent", component: AboutMeComponent },
//       { path: "QuestionsAnswersComponent", component: QuestionsAnswersComponent },
//       { path: "Manager", loadChildren: () => import('../../modules/manager/manager.module').then(m => m.ManagerModule) },
//       { path: "StepsComponent", loadChildren: () => import('../../steps/steps.module').then(m => m.StepsModule) }
//     ]
//   },
// ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //RouterModule.forChild(MANAGER_ROUTES)
  ]
})
export class ManagerModule { }
