import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/models/answer.model';
import { Question } from 'src/app/models/question.model';
import { QuestionAnswer } from 'src/app/models/questionAnswer.model';
import { QuestionsAnswersService } from '../questions-answers.service';

@Component({
  selector: 'app-questions-answers',
  templateUrl: './questions-answers.component.html',
  styleUrls: []
})
export class QuestionsAnswersComponent implements OnInit {

  constructor(private http: HttpClient, private _questionsAnswersService: QuestionsAnswersService, private _router: Router) { }

  questionsAnswersList: QuestionAnswer[] = []
  questionsList: Question[]
  answersList: Answer[]

  ngOnInit(): void {
    this._questionsAnswersService.getAllQuestions().subscribe(q => {
      this.questionsList = q
    })
    this._questionsAnswersService.getAllAnswers().subscribe(a => {
      this.answersList = a
    })
    // this._questionsAnswersService.getAllQuestionsAnswers().subscribe(qa => {
    //   this.questionsAnswersList = qa
    // })
    this.questionsAnswersList = this._questionsAnswersService.getAllQuestionsAnswers();
  }
}
