import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './modules/signin/user.service';
import { AuthenticationService } from './modules/signin/authentication.service';
import { AlertService } from './modules/alert/alert.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/signin/login/login.component';
import { HomeComponent } from './modules/home/home/home.component';
import { AlertComponent } from './modules/alert/alert/alert.component';
import { ArticlesComponent } from './modules/articles/articles/articles.component';
import { AnswersComponent } from './modules/answers/answers/answers.component';
import { QuestionsComponent } from './modules/questions/questions/questions.component';
import { AboutMeComponent } from './modules/about-me/about-me/about-me.component';
import { QuestionsAnswersComponent } from './modules/questions-answers/questions-answers/questions-answers.component';
import { ConnectComponent } from './modules/connect/connect/connect.component';
import { FormStartRequestComponent } from './modules/connect/form-start-request/form-start-request.component';
import { PersonalInformationComponent } from './modules/manager/personal-information/personal-information.component';
import { RegisterComponent } from './modules/signin/register/register.component';
import { StepsComponent } from './steps/steps/steps.component';
import { Step1Component } from './steps/step1/step1.component';
import { Step2Component } from './steps/step2/step2.component';
import { Step3Component } from './steps/step3/step3.component';
import { Step4Component } from './steps/step4/step4.component';
import { ShowDetailsUsersComponent } from './modules/manager/show-details-users/show-details-users.component';
import { ManagerComponent } from './modules/manager/manager/manager.component';
import { ApartmentComponent } from './steps/apartment/apartment.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, RegisterComponent,
    AlertComponent, ArticlesComponent, AnswersComponent, QuestionsComponent, AboutMeComponent,
    QuestionsAnswersComponent, FormStartRequestComponent, ConnectComponent, PersonalInformationComponent, StepsComponent, Step1Component, Step2Component,
    Step3Component, Step4Component, ShowDetailsUsersComponent, ManagerComponent, ApartmentComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,
    HttpClientModule],
  providers: [UserService, AuthenticationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }