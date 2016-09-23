"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_model_1 = require('../../model/login/login.model');
var login_service_1 = require('../../services/login/login.service');
var base_component_1 = require('../base.component');
var angular_2_local_storage_1 = require('angular-2-local-storage');
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(loginService, localStorageService, router) {
        _super.call(this, localStorageService, router);
        this.loginService = loginService;
        this.model = new login_model_1.Login();
        this.model.username = 'amit8774@gmail.com';
        this.model.password = 'Ff3VvbeE';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.model)
            .then(function (result) {
            _this.localStorageService.set('user', result.user);
            _this.localStorageService.set('authorization', 'Bearer ' + result.token);
            _this.router.navigate(['/questionsets']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, angular_2_local_storage_1.LocalStorageService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}(base_component_1.BaseComponent));
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map