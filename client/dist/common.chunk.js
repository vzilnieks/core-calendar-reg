webpackJsonp(["common"],{

/***/ "./src/app/master.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterService; });
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



var MasterService = (function () {
    function MasterService() {
        this.masters = [
            { id: 1, name: "John Smith", workingDays: [1, 2] },
            { id: 2, name: "Andrew Black", workingDays: [2, 3, 6] }
        ];
    }
    MasterService.prototype.getMaster = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].from(this.masters);
    };
    MasterService.prototype.getMasterName = function (masterId) {
        var masterName;
        this.masters.forEach(function (master) {
            if (master.id === masterId) {
                masterName = master.name;
            }
        });
        return masterName;
    };
    MasterService.prototype.addMaster = function (name) {
        this.masters.push({ id: Math.floor(Math.random() * 100), name: name, workingDays: [] });
    };
    MasterService.prototype.updateMaster = function (masterId, days) {
        var masterIndex = this.masters.findIndex(function (arr) { return arr.id === masterId; });
        // TODO: db
        this.masters[masterIndex].workingDays = days;
    };
    MasterService.prototype.deleteMaster = function (masterId) {
        var masterIndex = this.masters.findIndex(function (arr) { return arr.id === masterId; });
        // TODO: db
        this.masters.splice(masterIndex, 1);
    };
    MasterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MasterService);
    return MasterService;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map