import { Answer } from "./answer.model";
import { Question } from "./question.model";

export class QuestionAnswer {
    question: Question;
    answer: Answer[];
}