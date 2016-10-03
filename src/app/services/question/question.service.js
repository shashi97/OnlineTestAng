"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var api_url_component_1 = require('../../shared/api-url.component');
var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
    }
    // get Question by question_id from database
    QuestionService.prototype.getQuestionById = function (question_id) {
        return this.http
            .get(api_url_component_1.ApiUrl.baseUrl + 'questionbyid/' + question_id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get Question by company_id from database
    // getQuestions(company_id: any): Promise<QuestionModel[]> {
    //   return this.http
    //     .get(ApiUrl.baseUrl + 'questions/' + company_id)
    //     .toPromise()
    //     .then(response => response.json() as QuestionModel[])
    //     .catch(this.handleError);
    // }
    // get Question by topic_id from database
    QuestionService.prototype.getQuestionsByTopic = function (topic_id) {
        return this.http
            .get(api_url_component_1.ApiUrl.baseUrl + 'question/' + topic_id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get Question StateInfo from database
    QuestionService.prototype.getQuestionsStateInfo = function (company_id) {
        return this.http
            .get(api_url_component_1.ApiUrl.baseUrl + 'questionStateInfo/' + company_id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // save Question into database
    QuestionService.prototype.saveQuestion = function (data) {
        return this.http
            .post(api_url_component_1.ApiUrl.baseUrl + 'question', JSON.stringify(data))
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // delete from  database
    QuestionService.prototype.deleteQuestion = function (id) {
        return this.http.get(api_url_component_1.ApiUrl.baseUrl + 'deleteQuestion?questionID=' + id);
    };
    QuestionService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    QuestionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map