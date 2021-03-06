import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import { ApiUrl } from '../../api-url.component';
import { QuestionSet } from '../../model/question-set/question-set.model';

@Injectable()
export class QuestionSetService {

  constructor(private http: Http) {

  }

  getQuestionSets(company_id: number): Promise<QuestionSet[]> {
    return this.http
      .get(ApiUrl.baseUrl + 'questionSet/' + company_id)
      .toPromise()
      .then(response => response.json() as QuestionSet[])
      .catch(this.handleError);
  }

  getQuestionSet(company_id: number, question_set_id: number): Promise<QuestionSet> {
    return this.http
      .get(ApiUrl.baseUrl + 'questionSet/' + company_id + '/' + question_set_id)
      .toPromise()
      .then(response => response.json() as QuestionSet)
      .catch(this.handleError);
  }

  saveQuestionSet(data: QuestionSet): Promise<string> {
    return this.http
      .post(ApiUrl.baseUrl + 'saveQuestionSet', JSON.stringify(data))
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
