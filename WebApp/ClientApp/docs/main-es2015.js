(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Players/create/create.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Players/create/create.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <br />\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h3>Create Player</h3>\r\n    </div>\r\n    <div class=\"col text-right\">\r\n      <a href=\"#\" routerLink=\"/lists\" class=\"btn btn-secondary btn-sm\">Back To Players List</a>\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <form [formGroup]=\"createForm\" (ngSubmit)=\"onSubmit(createForm)\">\r\n\r\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n      <mat-label>shirtNo</mat-label>\r\n      <input matInput placeholder=\"\" value=\"\" id=\"shirtNo\" formControlName=\"shirtNo\">\r\n\r\n    </mat-form-field>\r\n    <br />\r\n\r\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n      <mat-label>Name</mat-label>\r\n      <input matInput placeholder=\"\" value=\"\" id=\"Name\" formControlName=\"name\">\r\n\r\n    </mat-form-field>\r\n\r\n    <br />\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>-Select Position-</mat-label>\r\n      <select matNativeControl [(ngModel)]=\"selectedCar\" name=\"positionId\" formControlName=\"positionId\" id=\"positionId\">\r\n        <option value=\"\" selected></option>\r\n        <option *ngFor=\"let position of positions\" [value]=\"position.id\">\r\n          {{position.name}}\r\n        </option>\r\n      </select>\r\n    </mat-form-field>\r\n    <br />\r\n\r\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n      <mat-label>appearances</mat-label>\r\n      <input matInput placeholder=\"\" value=\"\" id=\"appearances\" formControlName=\"appearances\">\r\n\r\n    </mat-form-field>\r\n    <br />\r\n\r\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n      <mat-label>goal</mat-label>\r\n      <input matInput placeholder=\"\" value=\"\" formControlName=\"goal\" id=\"goal\">\r\n\r\n    </mat-form-field>\r\n\r\n    <!--\r\n   <div class=\"form-group\">\r\n     <label for=\"shirtNo\">Shirt No:</label>\r\n     <input formControlName=\"shirtNo\"\r\n            id=\"shirtNo\"\r\n            type=\"text\"\r\n            class=\"form-control\" />\r\n   </div>\r\n\r\n   <div class=\"form-group\">\r\n     <label for=\"name\">Name:</label>\r\n     <input formControlName=\"name\"\r\n            id=\"name\"\r\n            type=\"text\"\r\n            class=\"form-control\" />\r\n   </div>\r\n\r\n\r\n   <div class=\"form-group\">\r\n     <label for=\"name\">Position:</label>\r\n     <select formControlName=\"positionId\"\r\n             id=\"positionId\"\r\n             class=\"form-control\">\r\n       <option value=\"\">- Select -</option>\r\n       <option *ngFor=\"let position of positions\" [ngValue]=\"position.id\">\r\n         {{position.name}}\r\n       </option>\r\n     </select>\r\n   </div>\r\n\r\n\r\n\r\n   <div class=\"form-group\">\r\n     <label for=\"appearances\">Appearances:</label>\r\n     <input formControlName=\"appearances\"\r\n            id=\"appearances\"\r\n            type=\"text\"\r\n            class=\"form-control\" />\r\n   </div>\r\n\r\n   <div class=\"form-group\">\r\n     <label for=\"goals\">Goals:</label>\r\n     <input formControlName=\"goal\"\r\n            id=\"goal\"\r\n            type=\"text\"\r\n            class=\"form-control\" />\r\n   </div>\r\n  <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!createForm.valid\">Create</button>-->\r\n    <br />\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!createForm.valid\">create </button>\r\n  </form>\r\n\r\n\r\n\r\n\r\n   \r\n\r\n\r\n\r\n      \r\n\r\n\r\n \r\n\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Players/details/details.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Players/details/details.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <br />\n  <h3>Player Details</h3>\n  <br />\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h4>{{ player.name }}</h4>\n        </div>\n        <div class=\"col text-right\">\n          <a href=\"#\" routerLink=\"/lists\" class=\"btn btn-secondary btn-sm\">Back To Players List</a>\n\n        </div>\n      </div>\n    </div>\n    <!--<ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\"><b>Id:</b> {{ player.id }}</li>\n      <li class=\"list-group-item\"><b>Shirt No:</b> {{ player.shirtNo }}</li>\n      <li class=\"list-group-item\"><b>Position:</b> {{ player.position?.name }}</li>\n      <li class=\"list-group-item\"><b>Appearances:</b> {{ player.appearances }}</li>\n      <li class=\"list-group-item\"><b>Goals:</b> {{ player.goal }}</li>\n    </ul>-->\n\n    <mat-list>\n      <mat-list-item> <b>Id:</b> {{ player.id }} </mat-list-item>\n      <mat-list-item> <b>Shirt No:</b> {{ player.shirtNo }} </mat-list-item>\n      <mat-list-item> <b>Position:</b> {{ player.position?.name }} </mat-list-item>\n      <mat-list-item> <b>Goals:</b> {{ player.goal }} </mat-list-item>\n    </mat-list>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Players/edit/edit.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Players/edit/edit.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <br />\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h3>Update Player</h3>\r\n    </div>\r\n    <div class=\"col text-right\">\r\n      <a href=\"#\" routerLink=\"/lists\" class=\"btn btn-secondary btn-sm\">Back To Players List</a>\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm)\">\r\n\r\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n      <mat-label>shirtNo</mat-label>\r\n      <input matInput placeholder=\"\" value=\"\" id=\"shirtNo\" formControlName=\"shirtNo\">\r\n\r\n    </mat-form-field>\r\n    <br />\r\n\r\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n      <mat-label>Name</mat-label>\r\n      <input matInput placeholder=\"\" value=\"\" id=\"Name\" formControlName=\"name\">\r\n\r\n    </mat-form-field>\r\n\r\n    <br />\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>-Select Position-</mat-label>\r\n      <select matNativeControl [(ngModel)]=\"selectedCar\" name=\"positionId\" formControlName=\"positionId\" id=\"positionId\">\r\n        <option value=\"\" selected></option>\r\n        <option *ngFor=\"let position of positions\" [value]=\"position.id\">\r\n          {{position.name}}\r\n        </option>\r\n      </select>\r\n    </mat-form-field>\r\n    <br />\r\n\r\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n      <mat-label>appearances</mat-label>\r\n      <input matInput placeholder=\"\" value=\"\" id=\"appearances\" formControlName=\"appearances\">\r\n\r\n    </mat-form-field>\r\n    <br />\r\n\r\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\r\n      <mat-label>goal</mat-label>\r\n      <input matInput placeholder=\"\" value=\"\" formControlName=\"goal\" id=\"goal\">\r\n\r\n    </mat-form-field>\r\n    <!--\r\n   <input formControlName=\"id\"\r\n          id=\"id\"\r\n          type=\"hidden\" />\r\n\r\n   <div class=\"form-group\">\r\n     <label for=\"shirtNo\">Shirt No:</label>\r\n     <input formControlName=\"shirtNo\"\r\n            id=\"shirtNo\"\r\n            type=\"text\"\r\n            class=\"form-control\" />\r\n   </div>\r\n\r\n   <div class=\"form-group\">\r\n     <label for=\"name\">Name:</label>\r\n     <input formControlName=\"name\"\r\n            id=\"name\"\r\n            type=\"text\"\r\n            class=\"form-control\" />\r\n   </div>\r\n\r\n   <div class=\"form-group\">\r\n     <label for=\"name\">Position:</label>\r\n     <select formControlName=\"positionId\"\r\n             id=\"positionId\"\r\n             class=\"form-control\">\r\n       <option value=\"\">- Select -</option>\r\n       <option *ngFor=\"let position of positions\" [ngValue]=\"position.id\">\r\n         {{position.name}}\r\n       </option>\r\n     </select>\r\n   </div>\r\n\r\n   <div class=\"form-group\">\r\n     <label for=\"appearances\">Appearances:</label>\r\n     <input formControlName=\"appearances\"\r\n            id=\"appearances\"\r\n            type=\"text\"\r\n            class=\"form-control\" />\r\n   </div>\r\n\r\n   <div class=\"form-group\">\r\n     <label for=\"goals\">Goals:</label>\r\n     <input formControlName=\"goal\"\r\n            id=\"goal\"\r\n            type=\"text\"\r\n            class=\"form-control\" />\r\n   </div>\r\n\r\n  <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!editForm.valid\">Update</button>-->\r\n    <br />\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"!editForm.valid\" type=\"submit\">Update </button>\r\n  </form>\r\n  \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Players/list/list.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Players/list/list.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <br />\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h3>Players</h3>\r\n    </div>\r\n    <div class=\"col text-right\">\r\n      <a href=\"#\" routerLink=\"/players/create/\" class=\"btn btn-success btn-sm\">Create New</a>\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <table class=\"table table-bordered table-sm\">\r\n    <tr>\r\n      <th>Id</th>\r\n      <th>Shirt No</th>\r\n      <th>Name</th>\r\n      <th>Position</th>\r\n      <th>Appearances</th>\r\n      <th>Goals</th>     \r\n      <th width=\"200px\"></th>\r\n    </tr>\r\n    <tr *ngFor=\"let player of players\">\r\n      <td>{{ player.id }}</td>\r\n      <td>{{ player.shirtNo }}</td>\r\n      <td>{{ player.name }}</td>\r\n      <td>{{ player.position?.name }}</td>\r\n      <td>{{ player.appearances }}</td>\r\n      <td>{{ player.goal }}</td>   \r\n      <td class=\"text-right\">\r\n        <a href=\"#\" [routerLink]=\"['/players/', player.id, 'details']\" class=\"btn btn-info btn-sm\">View</a>\r\n        <a href=\"#\" [routerLink]=\"['/players/', player.id, 'edit']\" class=\"btn btn-primary btn-sm\">Edit</a>\r\n        <button type=\"button\" (click)=\"deletePlayer(player.id)\" class=\"btn btn-danger btn-sm\">Delete</button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Players/lists/lists.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Players/lists/lists.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col\">\r\n    <h3>Players</h3>\r\n  </div>\r\n  <div class=\"col text-right\">\r\n    <a href=\"#\" routerLink=\"/players/create/\" class=\"btn btn-success btn-sm\">Create New</a>\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"Id\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let elements\"> {{elements.id}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"ShirtNo\">\r\n      <th mat-header-cell *matHeaderCellDef> Shirt No </th>\r\n      <td mat-cell *matCellDef=\"let elements\"> {{elements.shirtNo}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"Name\">\r\n      <th mat-header-cell *matHeaderCellDef width=\"200px\"> Name </th>\r\n      <td mat-cell *matCellDef=\"let elements\"> {{elements.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"Position\">\r\n      <th mat-header-cell *matHeaderCellDef> Position </th>\r\n      <td mat-cell *matCellDef=\"let elements\"> {{elements.position?.name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Appearances\">\r\n      <th mat-header-cell *matHeaderCellDef> Appearances </th>\r\n      <td mat-cell *matCellDef=\"let elements\"> {{elements.appearances}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Goal\">\r\n      <th mat-header-cell *matHeaderCellDef> Goal </th>\r\n      <td mat-cell *matCellDef=\"let elements\"> {{elements.goal}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Edit\">\r\n      <th mat-header-cell *matHeaderCellDef width=\"250px\">  </th>\r\n      <td mat-cell *matCellDef=\"let elements\" align=\"right\">\r\n        <a href=\"#\" [routerLink]=\"['/players/', elements.id, 'details']\" class=\"btn btn-info btn-sm\">View</a>\r\n        <a href=\"#\" [routerLink]=\"['/players/', elements.id, 'edit']\" class=\"btn btn-primary btn-sm\">Edit</a>\r\n        <button type=\"button\" (click)=\"deletePlayer(elements.id)\" class=\"btn btn-danger btn-sm\">Delete</button>\r\n\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n\r\n  </table> \r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Hello, world!</h1>\r\n<p>Welcome to my application, built with Angular</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <!--<a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n      WebApp\r\n      </a>-->\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\"\r\n              [routerLinkActive]=\"['link-active']\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <!--<li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\">Counter</a>\r\n  </li>-->\r\n          <!--<li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\">Fetch data</a>\r\n          </li>-->\r\n          <!--<li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/players']\">Players</a>\r\n          </li>-->\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/lists']\"> Player List</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Players/create/create.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Players/create/create.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BsYXllcnMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/Players/create/create.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Players/create/create.component.ts ***!
  \****************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _players_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../players.service */ "./src/app/Players/players.service.ts");
/* harmony import */ var _positions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../positions.service */ "./src/app/Players/positions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let CreateComponent = class CreateComponent {
    constructor(playersService, positionsService, route, router, formBuilder) {
        this.playersService = playersService;
        this.positionsService = positionsService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.positions = [];
        this.createForm = this.formBuilder.group({
            shirtNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            positionId: [''],
            appearances: [''],
            goal: [''],
        });
    }
    ngOnInit() {
        this.positionsService.getPositions().subscribe((data) => {
            this.positions = data;
        });
    }
    onSubmit(formData) {
        this.playersService.createPlayer(formData.value).subscribe(res => {
            this.router.navigateByUrl('/lists');
        });
    }
};
CreateComponent.ctorParameters = () => [
    { type: _players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"] },
    { type: _positions_service__WEBPACK_IMPORTED_MODULE_4__["PositionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
CreateComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-create',
        template: __importDefault(__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Players/create/create.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./create.component.css */ "./src/app/Players/create/create.component.css")).default]
    }),
    __metadata("design:paramtypes", [_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"],
        _positions_service__WEBPACK_IMPORTED_MODULE_4__["PositionsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], CreateComponent);



/***/ }),

/***/ "./src/app/Players/details/details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/Players/details/details.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BsYXllcnMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/Players/details/details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Players/details/details.component.ts ***!
  \******************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _players_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../players.service */ "./src/app/Players/players.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let DetailsComponent = class DetailsComponent {
    constructor(playersService, route, router) {
        this.playersService = playersService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['playerId'];
        this.playersService.getPlayer(this.id).subscribe((data) => {
            this.player = data;
        });
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _players_service__WEBPACK_IMPORTED_MODULE_2__["PlayersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
DetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Players/details/details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./details.component.css */ "./src/app/Players/details/details.component.css")).default]
    }),
    __metadata("design:paramtypes", [_players_service__WEBPACK_IMPORTED_MODULE_2__["PlayersService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], DetailsComponent);



/***/ }),

/***/ "./src/app/Players/edit/edit.component.css":
/*!*************************************************!*\
  !*** ./src/app/Players/edit/edit.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BsYXllcnMvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/Players/edit/edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/Players/edit/edit.component.ts ***!
  \************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _players_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../players.service */ "./src/app/Players/players.service.ts");
/* harmony import */ var _positions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../positions.service */ "./src/app/Players/positions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let EditComponent = class EditComponent {
    constructor(playersService, positionsService, route, router, formBuilder) {
        this.playersService = playersService;
        this.positionsService = positionsService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.positions = [];
        this.editForm = this.formBuilder.group({
            id: [''],
            shirtNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            positionId: [''],
            appearances: [''],
            goal: [''],
        });
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['playerId'];
        this.positionsService.getPositions().subscribe((data) => {
            this.positions = data;
        });
        this.playersService.getPlayer(this.id).subscribe((data) => {
            this.player = data;
            this.editForm.patchValue(data);
        });
    }
    onSubmit(formData) {
        this.playersService.updatePlayer(this.id, formData.value).subscribe(res => {
            this.router.navigateByUrl('/lists');
        });
    }
};
EditComponent.ctorParameters = () => [
    { type: _players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"] },
    { type: _positions_service__WEBPACK_IMPORTED_MODULE_4__["PositionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
EditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Players/edit/edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./edit.component.css */ "./src/app/Players/edit/edit.component.css")).default]
    }),
    __metadata("design:paramtypes", [_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"],
        _positions_service__WEBPACK_IMPORTED_MODULE_4__["PositionsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], EditComponent);



/***/ }),

/***/ "./src/app/Players/list/list.component.css":
/*!*************************************************!*\
  !*** ./src/app/Players/list/list.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGxheWVycy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBIiwiZmlsZSI6InNyYy9hcHAvUGxheWVycy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/Players/list/list.component.ts":
/*!************************************************!*\
  !*** ./src/app/Players/list/list.component.ts ***!
  \************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _players_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../players.service */ "./src/app/Players/players.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ListComponent = class ListComponent {
    constructor(playersService) {
        this.playersService = playersService;
        this.players = [];
    }
    ngOnInit() {
        this.playersService.getPlayers().subscribe((data) => {
            this.players = data;
        });
    }
    deletePlayer(id) {
        this.playersService.deletePlayer(id).subscribe(res => {
            this.players = this.players.filter(item => item.id !== id);
        });
    }
};
ListComponent.ctorParameters = () => [
    { type: _players_service__WEBPACK_IMPORTED_MODULE_1__["PlayersService"] }
];
ListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Players/list/list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./list.component.css */ "./src/app/Players/list/list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_players_service__WEBPACK_IMPORTED_MODULE_1__["PlayersService"]])
], ListComponent);



/***/ }),

/***/ "./src/app/Players/lists/lists.component.css":
/*!***************************************************!*\
  !*** ./src/app/Players/lists/lists.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n  margin-bottom: 100px;\r\n}\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\nsection {\r\n  display: table;\r\n}\r\n/*.example-label {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n\r\n.example-button-row {\r\n  display: table-cell;\r\n  width: 490px;\r\n}\r\n\r\n  .example-button-row .mat-button-base {\r\n    margin: 8px 8px 8px 0;\r\n  }\r\n\r\n.example-flex-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.example-button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGxheWVycy9saXN0cy9saXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMEJFIiwiZmlsZSI6InNyYy9hcHAvUGxheWVycy9saXN0cy9saXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLyouZXhhbXBsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiA0OTBweDtcclxufVxyXG5cclxuICAuZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xyXG4gIH1cclxuXHJcbi5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59Ki9cclxuIl19 */");

/***/ }),

/***/ "./src/app/Players/lists/lists.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Players/lists/lists.component.ts ***!
  \**************************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _players_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../players.service */ "./src/app/Players/players.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ListsComponent = class ListsComponent {
    constructor(playersService) {
        this.playersService = playersService;
        this.displayedColumns = ['Id', 'ShirtNo', 'Name', 'Position', 'Appearances', 'Goal', 'Edit'];
        this.players = [];
    }
    ngOnInit() {
        this.playersService.getPlayers().subscribe((data) => {
            this.players = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            this.dataSource.paginator = this.paginator;
        });
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    deletePlayer(id) {
        this.playersService.deletePlayer(id).subscribe(res => {
            this.players = this.players.filter(item => item.id !== id);
        });
    }
};
ListsComponent.ctorParameters = () => [
    { type: _players_service__WEBPACK_IMPORTED_MODULE_1__["PlayersService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], ListsComponent.prototype, "paginator", void 0);
ListsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./lists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Players/lists/lists.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./lists.component.css */ "./src/app/Players/lists/lists.component.css")).default]
    }),
    __metadata("design:paramtypes", [_players_service__WEBPACK_IMPORTED_MODULE_1__["PlayersService"]])
], ListsComponent);



/***/ }),

/***/ "./src/app/Players/player.module.ts":
/*!******************************************!*\
  !*** ./src/app/Players/player.module.ts ***!
  \******************************************/
/*! exports provided: PlayersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersModule", function() { return PlayersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _players_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players-routing.module */ "./src/app/Players/players-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/Players/list/list.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/Players/details/details.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/Players/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/Players/edit/edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









let PlayersModule = class PlayersModule {
};
PlayersModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
            _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"],
            _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _players_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlayersRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"]
        ]
    })
], PlayersModule);



/***/ }),

/***/ "./src/app/Players/players-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Players/players-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PlayersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersRoutingModule", function() { return PlayersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/Players/list/list.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/Players/lists/lists.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/Players/details/details.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/Players/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/Players/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







const routes = [
    { path: 'players', redirectTo: 'players/list', pathMatch: 'full' },
    { path: 'players/list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] },
    { path: 'players/:playerId/details', component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
    { path: 'players/create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"] },
    { path: 'players/:playerId/edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"] },
    { path: 'players/lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__["ListsComponent"] },
];
let PlayersRoutingModule = class PlayersRoutingModule {
};
PlayersRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], PlayersRoutingModule);



/***/ }),

/***/ "./src/app/Players/players.service.ts":
/*!********************************************!*\
  !*** ./src/app/Players/players.service.ts ***!
  \********************************************/
/*! exports provided: PlayersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersService", function() { return PlayersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let PlayersService = class PlayersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = "https://localhost:5001/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'content-type': 'application/json'
            })
        };
    }
    getPlayers() {
        return this.httpClient.get(this.apiURL + '/players')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    getPlayer(id) {
        return this.httpClient.get(this.apiURL + '/players/' + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    createPlayer(player) {
        return this.httpClient.post(this.apiURL + '/players/', JSON.stringify(player), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    updatePlayer(id, player) {
        return this.httpClient.put(this.apiURL + '/players/' + id, JSON.stringify(player), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    deletePlayer(id) {
        return this.httpClient.delete(this.apiURL + '/players/' + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
PlayersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PlayersService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], PlayersService);



/***/ }),

/***/ "./src/app/Players/positions.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Players/positions.service.ts ***!
  \**********************************************/
/*! exports provided: PositionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsService", function() { return PositionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let PositionsService = class PositionsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = "https://localhost:5001/api";
    }
    getPositions() {
        return this.httpClient.get(this.apiURL + '/positions')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
PositionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PositionsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], PositionsService);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _Players_player_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Players/player.module */ "./src/app/Players/player.module.ts");
/* harmony import */ var _Players_lists_lists_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Players/lists/lists.component */ "./src/app/Players/lists/lists.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _Players_lists_lists_component__WEBPACK_IMPORTED_MODULE_10__["ListsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _Players_player_module__WEBPACK_IMPORTED_MODULE_9__["PlayersModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], pathMatch: 'full' },
                { path: 'lists', component: _Players_lists_lists_component__WEBPACK_IMPORTED_MODULE_10__["ListsComponent"] },
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 80%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GIT\2021092119.30am\WebApp\WebApp\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map