webpackJsonp(["dashboard.module"],{

/***/ "./src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"loggedIn; else elseBlock\">\n  <p>Hello {{loggedUser}}!</p>\n  <button color=\"primary\" mat-raised-button (submit)=\"logout()\">Logout</button>\n</ng-container>\n<ng-template #elseBlock>\n  <form [formGroup]=\"loginForm\" (submit)=\"login()\">\n    <mat-input-container class=\"auth-field\">\n      <input required placeholder=\"Username\" matInput formControlName=\"username\">\n    </mat-input-container>\n    <mat-input-container class=\"auth-field\">\n      <input class=\"auth-field\" required type=\"password\" placeholder=\"Password\" matInput formControlName=\"password\">\n    </mat-input-container>\n    <button color=\"primary\" mat-raised-button>Login</button>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/***/ (function(module, exports) {

module.exports = ".auth-field {\n  max-width: 80px;\n  font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = (function () {
    function AuthComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
    }
    Object.defineProperty(AuthComponent.prototype, "loggedUser", {
        get: function () {
            this._loggedUser = this.authService.getCurrentUserName();
            return this._loggedUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthComponent.prototype, "showLoggedIn", {
        get: function () {
            this._showLoggedIn = this.authService.loggedIn;
            return this._showLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    AuthComponent.prototype.login = function () {
        if (this.authService.validateUser(this.loginForm.value)) {
            this._showLoggedIn = true;
            this.router.navigate(['/admin']);
        }
        this._showLoggedIn = false;
        this.router.navigate(['']);
    };
    AuthComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth',
            template: __webpack_require__("./src/app/auth/auth.component.html"),
            styles: [__webpack_require__("./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__ = __webpack_require__("./src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_component__ = __webpack_require__("./src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__auth_component__["a" /* AuthComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__auth_component__["a" /* AuthComponent */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-filter/dashboard-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <mat-input-container class=\"filter\">\n    <input placeholder=\"Filter\" matInput>\n  </mat-input-container>\n</form>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-filter/dashboard-filter.component.scss":
/***/ (function(module, exports) {

module.exports = ".filter {\n  width: 300px; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-filter/dashboard-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardFilterComponent = (function () {
    function DashboardFilterComponent() {
    }
    DashboardFilterComponent.prototype.ngOnInit = function () {
    };
    DashboardFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard-filter',
            template: __webpack_require__("./src/app/dashboard/dashboard-filter/dashboard-filter.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard-filter/dashboard-filter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardFilterComponent);
    return DashboardFilterComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */] }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-container\">\n  <div class=\"menu-item\">\n    <app-dashboard-filter></app-dashboard-filter>\n  </div>\n  <div class=\"menu-item\">\n    <mat-accordion>\n      <mat-expansion-panel>\n\t<mat-expansion-panel-header>\n\t  <mat-panel-title>\n\t    Login to control you orders\n\t  </mat-panel-title>\n\t</mat-expansion-panel-header>\n\t<app-auth></app-auth>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</div>\n<div class=\"week-container\">\n  <div class=\"week-item\" *ngFor=\"let day of weekDays; let i = index\">\n    <mat-card class=\"mat-elevation-z8 day-card\">\n      <mat-card-header>\n\t\t\t\t<mat-card-title class=\"day-title\">\n\t\t\t\t\t{{ day }}\n\t\t\t\t</mat-card-title>\n      </mat-card-header>\n      <mat-list role=\"list\">\n\t\t\t\t<mat-list-item role=\"listitem\">\n\t\t\t\t\t<form [formGroup]=\"masterForm[day]\">\n\t\t\t\t\t\t<mat-radio-group class=\"day-card masters-group\" formControlName=\"master\">\n\t\t\t\t\t\t\t<mat-radio-button \n\t\t\t\t\t\t\t\t\t*ngFor=\"let master of getMasters(i); let im = index\" \n\t\t\t\t\t\t\t\t\tcolor=\"primary\"    \n\t\t\t\t\t\t\t\t\t[value]=\"master.id\">\n\t\t\t\t\t\t\t\t{{ master.name }}\n\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t</form>\n\t\t\t\t</mat-list-item>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t<mat-list-item \n\t\t\t\t\t\trole=\"listitem\" \n\t\t\t\t\t\tclass=\"day-card time-line\" \n\t\t\t\t\t\t*ngFor=\"let hour of workHours; let hourId = index\">\n\t\t\t\t\t<button \n\t\t\t\t\t\t\tclass=\"orders-line\" \n\t\t\t\t\t\t\tcolor=\"primary\" \n\t\t\t\t\t\t\t[disabled]=\"false\"\n\t\t\t\t\t\t\t(click)=\"openDialog(i,hourId)\"\n\t\t\t\t\t\t\tmat-button>\n\t\t\t\t\t\t{{hour}}:00 {{ (true) ? \"Order\" : \"\" }}\n\t\t\t\t\t</button>\n\t\t\t\t</mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".menu-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-diretion: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.week-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-diretion: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.week-container .week-item {\n    padding: 10px; }\n\n.day-card {\n  font-size: 12px;\n  width: 120px; }\n\n.day-card .day-title {\n    font-weight: bold; }\n\n.day-card .time-line {\n    max-height: 30px;\n    font-size: 10px; }\n\n.day-card .masters-groups {\n    padding: 0px; }\n\n.day-card .masters-line {\n    font-size: 12px;\n    width: 100px;\n    padding: 0px; }\n\n.day-card .orders-line {\n    padding: 0px; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_modal_modal_component__ = __webpack_require__("./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__master_service__ = __webpack_require__("./src/app/master.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(dialog, masterService) {
        this.dialog = dialog;
        this.masterService = masterService;
        this.weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.workHours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
        this.masterForm = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var mastersOfDay = [];
        this.weekDays.forEach(function (day, dayN) {
            _this.masterForm[day] = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({});
            _this.masterForm[day].addControl("master", new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](''));
        });
    };
    DashboardComponent.prototype.getMasters = function (dayN) {
        var workingMasters = [];
        var masters = [];
        this.masterService.getMaster().subscribe(function (master) {
            masters.push(master);
        });
        masters.forEach(function (master) {
            master.workingDays
                .filter(function (workDay) { return workDay === dayN; })
                .forEach(function () { return workingMasters.push(master); });
        });
        return workingMasters;
    };
    DashboardComponent.prototype.openDialog = function (dayN, time) {
        var day = this.weekDays[dayN];
        var choosedMaster = this.masterForm[day].get("master").value;
        if (choosedMaster) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__shared_components_modal_modal_component__["a" /* ModalComponent */], {
                data: {
                    alert: "\nOrder to day: " + day + ", time: " + this.workHours[time] + ",\nMaster: " + this.masterService.getMasterName(choosedMaster) + "\n"
                }
            });
        }
        ;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__master_service__["a" /* MasterService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_routing_module__ = __webpack_require__("./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__master_service__ = __webpack_require__("./src/app/master.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_service__ = __webpack_require__("./src/app/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_filter_dashboard_filter_component__ = __webpack_require__("./src/app/dashboard/dashboard-filter/dashboard-filter.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_1__dashboard_routing_module__["a" /* DashboardRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_filter_dashboard_filter_component__["a" /* DashboardFilterComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__master_service__["a" /* MasterService */],
                __WEBPACK_IMPORTED_MODULE_7__order_service__["a" /* OrderService */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map