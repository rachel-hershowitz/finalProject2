import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/models/answer.model';
import { Question } from 'src/app/models/question.model';
import { QuestionAnswer } from 'src/app/models/questionAnswer.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsAnswersService {

  constructor(private _http: HttpClient) { }

  getAllQuestions(): Observable<Question[]> {
    return this._http.get<Question[]>("http://localhost:5000/getAllQuestions");
  }

  getAllAnswers(): Observable<Answer[]> {
    return this._http.get<Answer[]>("http://localhost:5000/getAllAnswers");
  }

  getAllQuestionsAnswers(): QuestionAnswer[] {

    let questionsList: Question[]
    let answersList: Answer[]
    let questionsAnswersList: QuestionAnswer[] = []

    this.getAllQuestions().subscribe(q => {
      questionsList = q

      this.getAllAnswers().subscribe(a => {
        answersList = a

        let countQuestion = 0
        for (let i = 0; i < questionsList.length; i++) {
          for (let j = 0; j < answersList.length; j++) {
            if (answersList[j].idQuestion == questionsList[i].id) {
              questionsAnswersList[countQuestion] = { question: questionsList[i], answer: [answersList[j]] }
              countQuestion++
            }
          }
          // alert(`question: ${questionsAnswersList[i].question.data} answer: ${questionsAnswersList[i].answer.data}`)
          // alert(JSON.stringify(questionsAnswersList[i]))
        }
      })
    })
    return questionsAnswersList
  }
}