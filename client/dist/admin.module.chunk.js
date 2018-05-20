webpackJsonp(["admin.module"],{

/***/ "./src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_list_orders_list_component__ = __webpack_require__("./src/app/admin/orders-list/orders-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__masters_list_masters_list_component__ = __webpack_require__("./src/app/admin/masters-list/masters-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_list_users_list_component__ = __webpack_require__("./src/app/admin/users-list/users-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                children: [
                    { path: '', redirectTo: 'orders' },
                    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_2__orders_list_orders_list_component__["a" /* OrdersListComponent */] },
                    { path: 'masters', component: __WEBPACK_IMPORTED_MODULE_3__masters_list_masters_list_component__["a" /* MastersListComponent */] },
                    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_4__users_list_users_list_component__["a" /* UsersListComponent */] }
                ]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-masters-list></app-masters-list>\n<app-users-list></app-users-list>\n<app-orders-list></app-orders-list>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
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

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__ = __webpack_require__("./src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__masters_list_masters_list_component__ = __webpack_require__("./src/app/admin/masters-list/masters-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_list_users_list_component__ = __webpack_require__("./src/app/admin/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__orders_list_orders_list_component__ = __webpack_require__("./src/app/admin/orders-list/orders-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__master_service__ = __webpack_require__("./src/app/master.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_service__ = __webpack_require__("./src/app/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__["a" /* AdminRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_7__masters_list_masters_list_component__["a" /* MastersListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__users_list_users_list_component__["a" /* UsersListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__orders_list_orders_list_component__["a" /* OrdersListComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__master_service__["a" /* MasterService */],
                __WEBPACK_IMPORTED_MODULE_11__order_service__["a" /* OrderService */],
                __WEBPACK_IMPORTED_MODULE_12__user_service__["a" /* UserService */]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/masters-list/masters-list.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"masterForm\" (submit)=\"addMaster()\">\n  <mat-input-container class=\"master-form\">\n    <mat-hint>New master</mat-hint>\n    <input required placeholder=\"Name\" matInput formControlName=\"masterInput\">\n  </mat-input-container>\n  <button color=\"primary\" mat-raised-button>Add</button>\n</form>\n<div class=\"masters-container\">\n  <mat-table [dataSource]=\"dataSource\">\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.name }}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"workingDays\">\n      <mat-header-cell *matHeaderCellDef>Working Days</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <form [formGroup]=\"workDayForm\">\n          <mat-checkbox \n              color=\"primary\" \n              *ngFor=\"let day of weekDays; let i = index;\" \n              [checked]=\"element.workingDays.includes(i)\"\n              [formControlName]=\"day\">\n            {{ day }}\n          </mat-checkbox>\n          <button \n              color=\"primary\" \n              mat-raised-button \n              (click)=\"onUpdate(element.id)\">\n            Update\n          </button>\n          <button \n              color=\"primary\" \n              mat-raised-button \n              (click)=\"onDelete(element.id)\">\n            Delete\n          </button>\n        </form>\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/masters-list/masters-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/masters-list/masters-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MastersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master_service__ = __webpack_require__("./src/app/master.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MastersListComponent = (function () {
    function MastersListComponent(masterService) {
        this.masterService = masterService;
        this.weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.masters = [];
        this.masterForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            masterInput: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required])
        });
        this.workDayForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({});
        this.displayedColumns = ['name', 'workingDays'];
    }
    MastersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weekDays.forEach(function (day) {
            _this.workDayForm.addControl(day, new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''));
        });
        this.refreshTable();
    };
    MastersListComponent.prototype.refreshTable = function () {
        this.masters = this.getMasters();
        this.dataSource = this.masters;
    };
    MastersListComponent.prototype.getMasters = function () {
        var mastersArray = [];
        this.masterService.getMaster().subscribe(function (master) {
            mastersArray.push(master);
        });
        return mastersArray;
    };
    MastersListComponent.prototype.onUpdate = function (masterId) {
        var _this = this;
        var daysArray = [];
        this.weekDays.forEach(function (day, index) {
            if (_this.workDayForm.get(day).value) {
                daysArray.push(index);
            }
            ;
        });
        this.masterService.updateMaster(masterId, daysArray);
        this.refreshTable();
    };
    MastersListComponent.prototype.onDelete = function (masterId) {
        this.masterService.deleteMaster(masterId);
        this.refreshTable();
    };
    MastersListComponent.prototype.addMaster = function () {
        this.masterService.addMaster(this.masterForm.controls.masterInput.value);
        this.refreshTable();
    };
    MastersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-masters-list',
            template: __webpack_require__("./src/app/admin/masters-list/masters-list.component.html"),
            styles: [__webpack_require__("./src/app/admin/masters-list/masters-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__master_service__["a" /* MasterService */]])
    ], MastersListComponent);
    return MastersListComponent;
}());



/***/ }),

/***/ "./src/app/admin/orders-list/orders-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"orders-container\">\n  <mat-table [dataSource]=\"dataSource\">\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.name }}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"date\">\n      <mat-header-cell *matHeaderCellDef>Date</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.date }}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"master\">\n      <mat-header-cell *matHeaderCellDef>Master</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ getMasterName(element.master_id) }}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"phone\">\n      <mat-header-cell *matHeaderCellDef>Phone</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.phone }}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"customer_id\">\n      <mat-header-cell *matHeaderCellDef>Registered</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.customer_id }}</mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/orders-list/orders-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/orders-list/orders-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__master_service__ = __webpack_require__("./src/app/master.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_service__ = __webpack_require__("./src/app/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersListComponent = (function () {
    function OrdersListComponent(masterService, orderService) {
        this.masterService = masterService;
        this.orderService = orderService;
        this.masters = [];
        this.orders = [];
        this.displayedColumns = ['name', 'phone', 'date', 'master', 'customer_id'];
    }
    OrdersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.masterService.getMaster().subscribe(function (master) {
            _this.masters.push(master);
        });
        this.orderService.getOrder().subscribe(function (order) {
            _this.orders.push(order);
        });
        this.dataSource = this.orders;
    };
    OrdersListComponent.prototype.getMasterName = function (masterId) {
        return this.masterService.getMasterName(masterId);
    };
    OrdersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-orders-list',
            template: __webpack_require__("./src/app/admin/orders-list/orders-list.component.html"),
            styles: [__webpack_require__("./src/app/admin/orders-list/orders-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__master_service__["a" /* MasterService */], __WEBPACK_IMPORTED_MODULE_2__order_service__["a" /* OrderService */]])
    ], OrdersListComponent);
    return OrdersListComponent;
}());



/***/ }),

/***/ "./src/app/admin/users-list/users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userForm\" (submit)=\"addUser()\">\n  <mat-form-field class=\"user-form\">\n    <input required name=\"username\" placeholder=\"Username\" matInput formControlName=\"usernameInput\">\n  </mat-form-field>\n  <mat-form-field class=\"user-form\">\n    <input required name=\"password\" placeholder=\"Password\" type=\"password\" matInput formControlName=\"passwordInput\">\n  </mat-form-field>\n  <mat-form-field class=\"user-form\">\n    <input required name=\"name\" placeholder=\"Name\" matInput formControlName=\"nameInput\">\n  </mat-form-field>\n  <mat-form-field class=\"user-form\">\n    <input name=\"phone\" placeholder=\"Phone\" matInput formControlName=\"phoneInput\">\n  </mat-form-field>\n  <button color=\"primary\" mat-raised-button>Add</button>\n</form>\n<div class=\"users-container\">\n  <mat-table [dataSource]=\"dataSource\">\n    <ng-container matColumnDef=\"username\">\n      <mat-header-cell *matHeaderCellDef>User</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.username }}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{ element.name }}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"role_id\">\n      <mat-header-cell *matHeaderCellDef>Role</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <form [formGroup]=\"userRoleForm\">\n          <mat-checkbox \n              color=\"primary\" \n              *ngFor=\"let role of roles; let i = index\" \n              [checked]=\"element.role_id.includes(i)\"\n              [formControlName]=\"role\">\n            {{ role }}\n            <!-- {{element.role_id.includes(i)}} -->\n              <!-- [formControlName]=\"role\" -->\n          </mat-checkbox>\n          <button \n              color=\"primary\" \n              mat-raised-button \n              (click)=\"onUpdate(element.username)\">\n            Update\n          </button>\n          <button \n              color=\"primary\" \n              mat-raised-button \n              (click)=\"onDelete(element.username)\">\n            Delete\n          </button>\n        </form>\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/users-list/users-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".user-form {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/admin/users-list/users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersListComponent = (function () {
    function UsersListComponent(userService) {
        this.userService = userService;
        this.roles = [];
        this.users = [];
        this.displayedColumns = ['username', 'name', 'role_id'];
        this.userForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            usernameInput: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            passwordInput: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            nameInput: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            phoneInput: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
        });
        this.userRoleForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({});
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshTable();
        this.userService.getRole().subscribe(function (role) {
            _this.roles.push(role);
        });
        this.roles.forEach(function (role) {
            _this.userRoleForm.addControl(role, new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''));
        });
    };
    UsersListComponent.prototype.onUpdate = function (username) {
        var _this = this;
        var rolesArray = [];
        this.roles.forEach(function (role, index) {
            if (_this.userRoleForm.get(role).value) {
                rolesArray.push(index);
            }
            ;
        });
        this.userService.updateUser(username, rolesArray);
        this.refreshTable();
    };
    UsersListComponent.prototype.onDelete = function (username) {
        this.userService.deleteUser(username);
        this.refreshTable();
    };
    UsersListComponent.prototype.getUsers = function () {
        var userArray = [];
        this.userService.getUser().subscribe(function (user) {
            userArray.push(user);
        });
        return userArray;
    };
    UsersListComponent.prototype.refreshTable = function () {
        this.users = this.getUsers();
        this.dataSource = this.users;
    };
    UsersListComponent.prototype.addUser = function () {
        this.userService.addUser(this.userForm.controls.usernameInput.value, this.userForm.controls.passwordInput.value, this.userForm.controls.nameInput.value, this.userForm.controls.phoneInput.value);
        this.refreshTable();
    };
    UsersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users-list',
            template: __webpack_require__("./src/app/admin/users-list/users-list.component.html"),
            styles: [__webpack_require__("./src/app/admin/users-list/users-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService() {
        this.roles = ['user', 'admin'];
        this.users = [
            { id: 1, username: 'john', password: '', name: 'John Smith', phone: '', role_id: [0] },
            { id: 2, username: 'admin', password: '', name: 'Admin', phone: '', role_id: [0, 1] }
        ];
    }
    UserService.prototype.getUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].from(this.users);
    };
    UserService.prototype.getRole = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].from(this.roles);
    };
    UserService.prototype.addUser = function (username, password, user, phone) {
        // TODO: check exists, db
        this.users.push({
            id: Math.floor(Math.random() * 100),
            username: username,
            name: user,
            password: password,
            phone: phone,
            role_id: [0]
        });
    };
    UserService.prototype.updateUser = function (username, roles) {
        var userIndex = this.users.findIndex(function (arr) { return arr.username === username; });
        // TODO: db
        this.users[userIndex].role_id = roles;
    };
    UserService.prototype.deleteUser = function (username) {
        var userIndex = this.users.findIndex(function (arr) { return arr.username === username; });
        // TODO: db
        this.users.splice(userIndex, 1);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map