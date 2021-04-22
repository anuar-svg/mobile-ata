(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["first-menu-tab-tab1-module"],{

/***/ "1h+F":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/first-menu-tab/object-groups/object-groups.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-tab-button tab=\"case\" style=\"float: left; background: transparent\">\n      <ion-icon size=\"large\" color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-title class=\"ion-text-start\">Группы объектов</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <app-object-item\n      *ngFor=\"let item of objectItems\"\n      [title]=\"item['title']\"\n      [typeIcon]=\"item['icon']\"\n      [routerLink]=\"item['src']\"\n    ></app-object-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "1qEd":
/*!**************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/object-groups/object-groups.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ObjectGroupsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectGroupsModule", function() { return ObjectGroupsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _object_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object-groups.component */ "mjPL");
/* harmony import */ var _object_item_object_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object-item/object-item.component */ "P7wR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _telegram_integration_telegram_integration_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./telegram-integration/telegram-integration.module */ "Jvnr");








let ObjectGroupsModule = class ObjectGroupsModule {
};
ObjectGroupsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_object_groups_component__WEBPACK_IMPORTED_MODULE_4__["ObjectGroupsComponent"], _object_item_object_item_component__WEBPACK_IMPORTED_MODULE_5__["ObjectItemComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _telegram_integration_telegram_integration_module__WEBPACK_IMPORTED_MODULE_7__["TelegramIntegrationModule"]
        ]
    })
], ObjectGroupsModule);



/***/ }),

/***/ "6eAd":
/*!******************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/my-tasks/task-item/task-item.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TaskItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskItemComponent", function() { return TaskItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_task_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./task-item.component.html */ "h05i");
/* harmony import */ var _task_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-item.component.scss */ "PkoA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TaskItemComponent = class TaskItemComponent {
    constructor() { }
    ngOnInit() { }
};
TaskItemComponent.ctorParameters = () => [];
TaskItemComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    typeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    stateIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    typeIconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    stateIconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
TaskItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-task-item',
        template: _raw_loader_task_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_task_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TaskItemComponent);



/***/ }),

/***/ "6pBR":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/first-menu-tab/conversations/conversation-item/conversation-item.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item color=\"light\">\n  <ion-label>\n    <h2>{{ title }}</h2>\n    <p>{{ info }}</p>\n    <ion-label color=\"medium\">\n      {{ date }}\n    </ion-label>\n  </ion-label>\n</ion-item>\n");

/***/ }),

/***/ "75lK":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/first-menu-tab/object-groups/telegram-integration/telegram-integration.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-start\">Интеграция с Телеграм</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <app-telegram-item\n      *ngFor=\"let item of telegramItems\"\n      [title]=\"item['title']\"\n      [icon]=\"item['icon']\"\n    ></app-telegram-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "7xsL":
/*!***************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/land-tenders/land-tenders.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LandTendersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandTendersComponent", function() { return LandTendersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_land_tenders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./land-tenders.component.html */ "YET3");
/* harmony import */ var _land_tenders_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./land-tenders.component.scss */ "pTxo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LandTendersComponent = class LandTendersComponent {
    constructor() { }
    ngOnInit() { }
};
LandTendersComponent.ctorParameters = () => [];
LandTendersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-land-tenders',
        template: _raw_loader_land_tenders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_land_tenders_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LandTendersComponent);



/***/ }),

/***/ "8b2x":
/*!******************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/land-tenders/auction/auction.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AuctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionComponent", function() { return AuctionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auction_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auction.component.html */ "xWdj");
/* harmony import */ var _auction_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auction.component.scss */ "9Qqd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AuctionComponent = class AuctionComponent {
    constructor() {
        this.menu = true;
        this.atyrau = false;
        this.regions = false;
    }
    showItems(e) {
        switch (e) {
            case 'menu':
                this.menu = true;
                this.atyrau = false;
                this.regions = false;
                break;
            case 'atyrau':
                this.menu = false;
                this.atyrau = true;
                this.regions = false;
                break;
            case 'regions':
                this.menu = false;
                this.atyrau = false;
                this.regions = true;
                break;
        }
    }
    ngOnInit() { }
};
AuctionComponent.ctorParameters = () => [];
AuctionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auction',
        template: _raw_loader_auction_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auction_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuctionComponent);



/***/ }),

/***/ "9Qqd":
/*!********************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/land-tenders/auction/auction.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "FYaT":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/object-groups/telegram-integration/telegram-integration.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWxlZ3JhbS1pbnRlZ3JhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "GlpS":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/first-menu-tab/tab1.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"false\">\n  <ion-toolbar color=\"primary\">\n    <ion-title size=\"small\" class=\"ion-text-center ion-padding\">\n      Портфель\n    </ion-title>\n    <ion-searchbar type=\"text\" debounce=\"500\" (ionChange)=\"getItems($event)\" placeholder=\"Поиск\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar color=\"success\">\n      <ion-searchbar type=\"text\" debounce=\"500\" (ionChange)=\"getItems($event)\" placeholder=\"Поиск\"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <!-- <ion-list *ngIf=\"isItemAvailable\"> -->\n  <ion-row>\n    <ion-col size-xs=\"6\" size-sm=\"6\" size-md=\"3\" size-lg=\"2\" *ngFor=\"let item of menuItems\">\n      <ion-card button=\"true\" [routerLink]=\"item['src']\" class=\"ion-text-center\">\n        <!-- <ion-img [src]=\"cardSrc\"></ion-img> -->\n        <ion-card-header>\n          <ion-icon [name]=\"item['icon']\" size=\"large\" color=\"primary\"></ion-icon>\n           <ion-card-subtitle>{{ item['title'] }}</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "HXQI":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/first-menu-tab/object-groups/telegram-integration/telegram-item/telegram-item.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\n  <ion-label>\n    <ion-icon [name]=\"icon\"></ion-icon>\n    {{ title }}\n  </ion-label>\n</ion-item>\n");

/***/ }),

/***/ "I4a5":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/my-tasks/tasks-detail/tasks-detail.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: TasksDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksDetailModule", function() { return TasksDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tasks_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks-detail.component */ "hICR");






let TasksDetailModule = class TasksDetailModule {
};
TasksDetailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_tasks_detail_component__WEBPACK_IMPORTED_MODULE_5__["TasksDetailComponent"]],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tasks_detail_component__WEBPACK_IMPORTED_MODULE_5__["TasksDetailComponent"] }]),
        ]
    })
], TasksDetailModule);



/***/ }),

/***/ "Jvnr":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/object-groups/telegram-integration/telegram-integration.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: TelegramIntegrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelegramIntegrationModule", function() { return TelegramIntegrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _telegram_integration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./telegram-integration.component */ "y3GT");
/* harmony import */ var _telegram_item_telegram_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./telegram-item/telegram-item.component */ "kYHS");







let TelegramIntegrationModule = class TelegramIntegrationModule {
};
TelegramIntegrationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_telegram_integration_component__WEBPACK_IMPORTED_MODULE_5__["TelegramIntegrationComponent"], _telegram_item_telegram_item_component__WEBPACK_IMPORTED_MODULE_6__["TelegramItemComponent"]],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]
    })
], TelegramIntegrationModule);



/***/ }),

/***/ "JwMy":
/*!***********************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/tab1-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "PO/h");
/* harmony import */ var _land_tenders_land_tenders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./land-tenders/land-tenders.component */ "7xsL");
/* harmony import */ var _land_tenders_auction_auction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./land-tenders/auction/auction.component */ "8b2x");
/* harmony import */ var _conversations_conversations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversations/conversations.component */ "v0a3");
/* harmony import */ var _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-tasks/my-tasks.component */ "QOrC");
/* harmony import */ var _object_groups_object_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object-groups/object-groups.component */ "mjPL");
/* harmony import */ var _object_groups_telegram_integration_telegram_integration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./object-groups/telegram-integration/telegram-integration.component */ "y3GT");
/* harmony import */ var _my_tasks_tasks_detail_tasks_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-tasks/tasks-detail/tasks-detail.component */ "hICR");











const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    },
    {
        path: 'land-tenders',
        children: [
            {
                path: '',
                component: _land_tenders_land_tenders_component__WEBPACK_IMPORTED_MODULE_4__["LandTendersComponent"]
            },
            {
                path: 'auction',
                component: _land_tenders_auction_auction_component__WEBPACK_IMPORTED_MODULE_5__["AuctionComponent"]
            },
        ]
    },
    {
        path: 'conversations',
        component: _conversations_conversations_component__WEBPACK_IMPORTED_MODULE_6__["ConversationsComponent"]
    },
    {
        path: 'my-tasks',
        children: [
            {
                path: '',
                component: _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_7__["MyTasksComponent"]
            },
            {
                path: ':id',
                component: _my_tasks_tasks_detail_tasks_detail_component__WEBPACK_IMPORTED_MODULE_10__["TasksDetailComponent"]
            }
        ]
    },
    {
        path: 'object-groups',
        children: [
            {
                path: '',
                component: _object_groups_object_groups_component__WEBPACK_IMPORTED_MODULE_8__["ObjectGroupsComponent"]
            },
            {
                path: 'telegram-integrations',
                component: _object_groups_telegram_integration_telegram_integration_component__WEBPACK_IMPORTED_MODULE_9__["TelegramIntegrationComponent"]
            },
        ]
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "MxkV":
/*!***************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/tab1.module.ts ***!
  \***************************************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "PO/h");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1-routing.module */ "JwMy");
/* harmony import */ var _land_tenders_land_tenders_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./land-tenders/land-tenders.module */ "UTEw");
/* harmony import */ var _conversations_conversations_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conversations/conversations.module */ "UvNH");
/* harmony import */ var _my_tasks_my_tasks_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-tasks/my-tasks.module */ "uHxN");
/* harmony import */ var _object_groups_object_groups_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./object-groups/object-groups.module */ "1qEd");











let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"],
            _land_tenders_land_tenders_module__WEBPACK_IMPORTED_MODULE_7__["LandTendersModule"],
            _conversations_conversations_module__WEBPACK_IMPORTED_MODULE_8__["ConversationsModule"],
            _my_tasks_my_tasks_module__WEBPACK_IMPORTED_MODULE_9__["MyTasksModule"],
            _object_groups_object_groups_module__WEBPACK_IMPORTED_MODULE_10__["ObjectGroupsModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "P7wR":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/object-groups/object-item/object-item.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ObjectItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectItemComponent", function() { return ObjectItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_object_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./object-item.component.html */ "eGVQ");
/* harmony import */ var _object_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object-item.component.scss */ "XgHu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ObjectItemComponent = class ObjectItemComponent {
    constructor() { }
    ngOnInit() { }
};
ObjectItemComponent.ctorParameters = () => [];
ObjectItemComponent.propDecorators = {
    typeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ObjectItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-object-item',
        template: _raw_loader_object_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_object_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ObjectItemComponent);



/***/ }),

/***/ "PO/h":
/*!*************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/tab1.page.ts ***!
  \*************************************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "GlpS");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "khmR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab1Page = class Tab1Page {
    constructor() {
        this.isItemAvailable = false;
        this.menuItems = [
            {
                id: '2',
                title: 'Беседы',
                src: 'conversations',
                icon: 'mail'
            },
            {
                id: '3',
                title: 'Мои задачи',
                src: 'my-tasks',
                icon: 'folder'
            },
            {
                id: '4',
                title: 'Группы объектов',
                src: 'object-groups',
                icon: 'folder'
            },
        ];
    }
    initializeItems() {
        this.menuItems = [
            {
                id: '1',
                title: 'Земельные торги',
                src: 'land-tenders',
                icon: 'pricetags'
            },
            {
                id: '2',
                title: 'Беседы',
                src: 'conversations',
                icon: 'mail'
            },
            {
                id: '3',
                title: 'Мои задачи',
                src: 'my-tasks',
                icon: 'folder'
            },
            {
                id: '4',
                title: 'Группы объектов',
                src: 'object-groups',
                icon: 'folder'
            },
        ];
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.isItemAvailable = true;
            this.menuItems = this.menuItems.filter((item) => {
                return (item['title'].toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.isItemAvailable = false;
        }
    }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "Pdlc":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/object-groups/object-groups.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvYmplY3QtZ3JvdXBzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "PkoA":
/*!********************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/my-tasks/task-item/task-item.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "QOrC":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/my-tasks/my-tasks.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MyTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTasksComponent", function() { return MyTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_tasks_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-tasks.component.html */ "nJSL");
/* harmony import */ var _my_tasks_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-tasks.component.scss */ "YdsF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tasks_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks-service.service */ "lf5M");





let MyTasksComponent = class MyTasksComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    ngOnInit() {
        this.tasks = this.tasksService.getAllTasks();
    }
};
MyTasksComponent.ctorParameters = () => [
    { type: _tasks_service_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"] }
];
MyTasksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-tasks',
        template: _raw_loader_my_tasks_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_tasks_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyTasksComponent);



/***/ }),

/***/ "UTEw":
/*!************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/land-tenders/land-tenders.module.ts ***!
  \************************************************************************************/
/*! exports provided: LandTendersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandTendersModule", function() { return LandTendersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _land_tenders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./land-tenders.component */ "7xsL");
/* harmony import */ var _auction_auction_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auction/auction.module */ "aGu1");







let LandTendersModule = class LandTendersModule {
};
LandTendersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_land_tenders_component__WEBPACK_IMPORTED_MODULE_5__["LandTendersComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _auction_auction_module__WEBPACK_IMPORTED_MODULE_6__["AuctionModule"]
        ]
    })
], LandTendersModule);



/***/ }),

/***/ "UvNH":
/*!**************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/conversations/conversations.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ConversationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsModule", function() { return ConversationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _conversations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conversations.component */ "v0a3");
/* harmony import */ var _conversation_item_conversation_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversation-item/conversation-item.component */ "ZGiO");







let ConversationsModule = class ConversationsModule {
};
ConversationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_conversations_component__WEBPACK_IMPORTED_MODULE_5__["ConversationsComponent"], _conversation_item_conversation_item_component__WEBPACK_IMPORTED_MODULE_6__["ConversationItemComponent"]],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
    })
], ConversationsModule);



/***/ }),

/***/ "XgHu":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/object-groups/object-item/object-item.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvYmplY3QtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "YET3":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/first-menu-tab/land-tenders/land-tenders.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-tab-button tab=\"menu\" style=\"float: left; background: transparent\">\n      <ion-icon size=\"large\" color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-title class=\"ion-text-start\">Земельные торги</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-item routerLink=\"auction\">\n        <ion-thumbnail class=\"ion-margin\">\n          <ion-img src=\"https://hdqwalls.com/wallpapers/thumb/green-blue-violet-gradient-8k-xv.jpg\"></ion-img>\n        </ion-thumbnail>\n        <ion-label>\n          <h2>Аукцион</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"auction\">\n        <ion-thumbnail class=\"ion-margin\">\n          <ion-img src=\"https://hdqwalls.com/wallpapers/thumb/green-blue-violet-gradient-8k-xv.jpg\"></ion-img>\n        </ion-thumbnail>\n        <ion-label>\n          <h2>Конкурс</h2>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "YdsF":
/*!*********************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/my-tasks/my-tasks.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS10YXNrcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ZGiO":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/conversations/conversation-item/conversation-item.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ConversationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationItemComponent", function() { return ConversationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_conversation_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./conversation-item.component.html */ "6pBR");
/* harmony import */ var _conversation_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversation-item.component.scss */ "uv52");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ConversationItemComponent = class ConversationItemComponent {
    constructor() { }
    ngOnInit() { }
};
ConversationItemComponent.ctorParameters = () => [];
ConversationItemComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ConversationItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-conversation-item',
        template: _raw_loader_conversation_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conversation_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConversationItemComponent);



/***/ }),

/***/ "aGu1":
/*!***************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/land-tenders/auction/auction.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AuctionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionModule", function() { return AuctionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auction.component */ "8b2x");





let AuctionModule = class AuctionModule {
};
AuctionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_auction_component__WEBPACK_IMPORTED_MODULE_4__["AuctionComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
        ]
    })
], AuctionModule);



/***/ }),

/***/ "dUoz":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/first-menu-tab/conversations/conversations.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-tab-button tab=\"case\" style=\"float: left; background: transparent\">\n      <ion-icon size=\"large\" color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-title class=\"ion-text-start\">Беседы</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <app-conversation-item\n      *ngFor=\"let log of logs\"\n      [title]=\"log['title']\"\n      [info]=\"log['info']\"\n      [date]=\"log['date']\"\n    ></app-conversation-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "eGVQ":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/first-menu-tab/object-groups/object-item/object-item.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\n  <ion-label>\n    <ion-icon class=\"ion-margin-end\" [name]=\"typeIcon\"></ion-icon>\n    {{ title }}\n  </ion-label>\n</ion-item>\n");

/***/ }),

/***/ "h05i":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/first-menu-tab/my-tasks/task-item/task-item.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\n  <ion-label>\n    <ion-icon [name]=\"typeIcon\" [color]=\"typeIconColor\"></ion-icon>\n    <ion-icon [name]=\"stateIcon\" [color]=\"stateIconColor\"></ion-icon>\n    {{ title }}\n    <ion-label color=\"medium\">\n      {{ state }}\n    </ion-label>\n  </ion-label>\n</ion-item>\n");

/***/ }),

/***/ "hICR":
/*!************************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/my-tasks/tasks-detail/tasks-detail.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TasksDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksDetailComponent", function() { return TasksDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tasks_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tasks-detail.component.html */ "powl");
/* harmony import */ var _tasks_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-detail.component.scss */ "lf0u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tasks_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tasks-service.service */ "lf5M");






let TasksDetailComponent = class TasksDetailComponent {
    constructor(activatedRoute, tasksService) {
        this.activatedRoute = activatedRoute;
        this.tasksService = tasksService;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('id')) {
                return;
            }
            const id = paramMap.get('id');
            this.task = this.tasksService.getTask(id);
        });
    }
};
TasksDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _tasks_service_service__WEBPACK_IMPORTED_MODULE_5__["TasksService"] }
];
TasksDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tasks-detail',
        template: _raw_loader_tasks_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tasks_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TasksDetailComponent);



/***/ }),

/***/ "kYHS":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/object-groups/telegram-integration/telegram-item/telegram-item.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: TelegramItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelegramItemComponent", function() { return TelegramItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_telegram_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./telegram-item.component.html */ "HXQI");
/* harmony import */ var _telegram_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./telegram-item.component.scss */ "qG+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TelegramItemComponent = class TelegramItemComponent {
    constructor() { }
    ngOnInit() { }
};
TelegramItemComponent.ctorParameters = () => [];
TelegramItemComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
TelegramItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-telegram-item',
        template: _raw_loader_telegram_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_telegram_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TelegramItemComponent);



/***/ }),

/***/ "khmR":
/*!***************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/tab1.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  --border-radius: 10px;\n  --background: rgba(255, 255, 255, .9);\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xuICAgIG1hcmdpbjogMTBweCAwO1xufSJdfQ== */");

/***/ }),

/***/ "lf0u":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/my-tasks/tasks-detail/tasks-detail.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrcy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "lf5M":
/*!**********************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/my-tasks/tasks-service.service.ts ***!
  \**********************************************************************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let TasksService = class TasksService {
    constructor() {
        this.tasks = [
            {
                id: 1,
                title: '[ALTZ20102302]',
                state: 'Состояние: Подготовка ТЗ',
                typeIcon: 'document-outline',
                stateIcon: 'checkmark',
                typeIconColor: null,
                stateIconColor: 'success',
            },
            {
                id: 2,
                title: '[ALTZ20102302]',
                state: 'Состояние: Ввод данных клиента',
                typeIcon: 'reader-outline',
                stateIcon: 'checkmark',
                typeIconColor: null,
                stateIconColor: 'success',
            },
            {
                id: 3,
                title: '[ALTZ20102302]',
                state: 'Состояние: Анализ',
                typeIcon: 'search',
                stateIcon: 'play',
                typeIconColor: null,
                stateIconColor: 'danger',
            },
        ];
    }
    getAllTasks() {
        return this.tasks;
    }
    getTask(id) {
        return this.tasks.find(task => task.id == id);
    }
};
TasksService.ctorParameters = () => [];
TasksService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TasksService);



/***/ }),

/***/ "mjPL":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/object-groups/object-groups.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ObjectGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectGroupsComponent", function() { return ObjectGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_object_groups_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./object-groups.component.html */ "1h+F");
/* harmony import */ var _object_groups_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object-groups.component.scss */ "Pdlc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ObjectGroupsComponent = class ObjectGroupsComponent {
    constructor() {
        this.objectItems = [
            {
                title: 'Данные по клиентам',
                icon: 'folder-outline',
                src: null
            },
            {
                title: 'Демо для клиентов',
                icon: 'folder-outline',
                src: null
            },
            {
                title: 'Закуп Лекарств',
                icon: 'folder-outline',
                src: null
            },
            {
                title: 'Заявка на отпуск 3',
                icon: 'folder-outline',
                src: null
            },
            {
                title: 'Заявка на отпуск 3.1',
                icon: 'folder-outline',
                src: null
            },
            {
                title: 'Интеграция с Телеграм',
                icon: 'folder-outline',
                src: 'telegram-integrations'
            },
            {
                title: 'Наборы демо-процессов',
                icon: 'folder-outline',
                src: null
            },
            {
                title: 'Отпуск',
                icon: 'folder-outline',
                src: null
            },
            {
                title: 'Родственники',
                icon: 'folder-outline',
                src: null
            },
            {
                title: 'Тестовая среда',
                icon: 'folder-outline',
                src: null
            },
            {
                title: 'Юр. лица',
                icon: 'folder-outline',
                src: null
            },
            {
                title: 'Корзина',
                icon: 'trash-outline',
                src: null
            },
        ];
    }
    ngOnInit() { }
};
ObjectGroupsComponent.ctorParameters = () => [];
ObjectGroupsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-object-groups',
        template: _raw_loader_object_groups_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_object_groups_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ObjectGroupsComponent);



/***/ }),

/***/ "nJSL":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/first-menu-tab/my-tasks/my-tasks.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-tab-button tab=\"case\" style=\"float: left; background: transparent\">\n      <ion-icon size=\"large\" color=\"light\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-title class=\"ion-text-start\">Мои задачи</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <app-task-item\n      *ngFor=\"let task of tasks\"\n      [routerLink]=\"task['id']\"\n      [title]=\"task['title']\"\n      [state]=\"task['state']\"\n      [typeIcon]=\"task['typeIcon']\"\n      [stateIcon]=\"task['stateIcon']\"\n      [typeIconColor]=\"task['typeIconColor']\"\n      [stateIconColor]=\"task['stateIconColor']\"\n    ></app-task-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "pTxo":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/land-tenders/land-tenders.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kLXRlbmRlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "powl":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/first-menu-tab/my-tasks/tasks-detail/tasks-detail.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-item color=\"primary\">\n      <ion-icon [name]=\"task['typeIcon']\"></ion-icon>\n      <ion-icon [name]=\"task['stateIcon']\" [color]=\"task['stateIconColor']\"></ion-icon>\n      <ion-title class=\"ion-text-start\">{{ task['title'] }}</ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>\n      <h2>{{ task['title'] }}</h2>\n      <p>{{ task['state'] }}</p>\n    </ion-label>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "qG+V":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/object-groups/telegram-integration/telegram-item/telegram-item.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWxlZ3JhbS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "tbde":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/conversations/conversations.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb252ZXJzYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "uHxN":
/*!****************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/my-tasks/my-tasks.module.ts ***!
  \****************************************************************************/
/*! exports provided: MyTasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTasksModule", function() { return MyTasksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-tasks.component */ "QOrC");
/* harmony import */ var _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-item/task-item.component */ "6eAd");
/* harmony import */ var _tasks_detail_tasks_detail_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks-detail/tasks-detail.module */ "I4a5");








let MyTasksModule = class MyTasksModule {
};
MyTasksModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_my_tasks_component__WEBPACK_IMPORTED_MODULE_5__["MyTasksComponent"], _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_6__["TaskItemComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _tasks_detail_tasks_detail_module__WEBPACK_IMPORTED_MODULE_7__["TasksDetailModule"]
        ]
    })
], MyTasksModule);



/***/ }),

/***/ "uv52":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/conversations/conversation-item/conversation-item.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb252ZXJzYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "v0a3":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/conversations/conversations.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ConversationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsComponent", function() { return ConversationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_conversations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./conversations.component.html */ "dUoz");
/* harmony import */ var _conversations_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversations.component.scss */ "tbde");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ConversationsComponent = class ConversationsComponent {
    constructor() {
        this.logs = [
            {
                title: 'SYSTEM',
                info: 'ACCE19122101: начался(1/1)',
                date: '21.12.2019 00:02'
            },
            {
                title: 'SYSTEM',
                info: 'ACCE19122001: начался(1/1)',
                date: '20.12.2019 00:01'
            },
        ];
    }
    ngOnInit() { }
};
ConversationsComponent.ctorParameters = () => [];
ConversationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-conversations',
        template: _raw_loader_conversations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conversations_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConversationsComponent);



/***/ }),

/***/ "xWdj":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/first-menu-tab/land-tenders/auction/auction.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-icon class=\"ion-padding-start\" size=\"large\" name=\"arrow-back-outline\" slot=\"start\" *ngIf=\"!menu\" (click)=\"showItems('menu')\"></ion-icon>\n    <ion-buttons slot=\"start\" *ngIf=\"menu\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-start\">Аукцион</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"menu\">\n    <ion-col>\n      <ion-item>\n        <ion-label (click)=\"showItems('atyrau')\">\n          <h2>Г. Атырау</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label (click)=\"showItems('regions')\">\n          <h2>Административные районы</h2>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"atyrau\">\n    <ion-col>\n      <ion-item>\n        <ion-label>\n          <h2>Жумыскер-2</h2>\n          <ion-label color=\"tertiary\">\n            <p>Предстоящий</p>\n          </ion-label>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Ул. Сатпаева, 5</h2>\n          <ion-label color=\"success\">\n            <p>Состоявшийся</p>\n          </ion-label>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <ion-text>Атырауский сельский округ, село Жанаталап, улица №6</ion-text>\n          <ion-label color=\"danger\">\n            <p>Несостоявшийся</p>\n          </ion-label>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"regions\">\n    <ion-col>\n      <ion-item>\n        <ion-label>\n          <h2>Индерский район</h2>\n          <ion-label color=\"medium\">12 аукционов</ion-label>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Исатайский район</h2>\n          <ion-label color=\"medium\">3 аукционов</ion-label>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Кзылкогинский район</h2>\n          <ion-label color=\"medium\">6 аукционов</ion-label>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "y3GT":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/tabs/first-menu-tab/object-groups/telegram-integration/telegram-integration.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: TelegramIntegrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelegramIntegrationComponent", function() { return TelegramIntegrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_telegram_integration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./telegram-integration.component.html */ "75lK");
/* harmony import */ var _telegram_integration_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./telegram-integration.component.scss */ "FYaT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TelegramIntegrationComponent = class TelegramIntegrationComponent {
    constructor() {
        this.telegramItems = [
            {
                title: 'Отправка сообщений',
                icon: 'folder-outline'
            },
            {
                title: 'Регистрация номеров',
                icon: 'folder-outline'
            },
        ];
    }
    ngOnInit() { }
};
TelegramIntegrationComponent.ctorParameters = () => [];
TelegramIntegrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-telegram-integration',
        template: _raw_loader_telegram_integration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_telegram_integration_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TelegramIntegrationComponent);



/***/ })

}]);
//# sourceMappingURL=first-menu-tab-tab1-module.js.map