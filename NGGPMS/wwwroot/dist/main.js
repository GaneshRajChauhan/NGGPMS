(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app-error.handler.ts":
/*!********************************************!*\
  !*** ./ClientApp/app/app-error.handler.ts ***!
  \********************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppErrorHandler = /** @class */ (function (_super) {
    __extends(AppErrorHandler, _super);
    //private alertService: AlertService;
    function AppErrorHandler() {
        return _super.call(this) || this;
    }
    AppErrorHandler.prototype.handleError = function (error) {
        //if (this.alertService == null) {
        //    this.alertService = this.injector.get(AlertService);
        //}
        //this.alertService.showStickyMessage("Fatal Error!", "An unresolved error has occured. Please reload the page to correct this error", MessageSeverity.warn);
        //this.alertService.showStickyMessage("Unhandled Error", error.message || error, MessageSeverity.error, error);
        if (confirm("Fatal Error!\nAn unresolved error has occured. Do you want to reload the page to correct this?\n\nError: " + error.message))
            window.location.reload(true);
        _super.prototype.handleError.call(this, error);
    };
    AppErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppErrorHandler);
    return AppErrorHandler;
}(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));



/***/ }),

/***/ "./ClientApp/app/app-routing.module.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/app-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./ClientApp/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./ClientApp/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-guard.service */ "./ClientApp/app/services/auth-guard.service.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    // { path: "", component: LoginComponent, canActivate: [AuthGuard], data: { title: "Home" } },
                    { path: "", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], data: { tWitle: "Login" } },
                    { path: "home", redirectTo: "/", pathMatch: "full" },
                    { path: "**", redirectTo: "/", pathMatch: "full" },
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule, getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/npm.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/index.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./ClientApp/app/app-routing.module.ts");
/* harmony import */ var _app_error_handler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-error.handler */ "./ClientApp/app/app-error.handler.ts");
/* harmony import */ var _services_app_title_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/app-title.service */ "./ClientApp/app/services/app-title.service.ts");
/* harmony import */ var _services_app_translation_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/app-translation.service */ "./ClientApp/app/services/app-translation.service.ts");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/configuration.service */ "./ClientApp/app/services/configuration.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/alert.service */ "./ClientApp/app/services/alert.service.ts");
/* harmony import */ var _services_local_store_manager_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/local-store-manager.service */ "./ClientApp/app/services/local-store-manager.service.ts");
/* harmony import */ var _services_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/endpoint-factory.service */ "./ClientApp/app/services/endpoint-factory.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/notification.service */ "./ClientApp/app/services/notification.service.ts");
/* harmony import */ var _services_notification_endpoint_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/notification-endpoint.service */ "./ClientApp/app/services/notification-endpoint.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/account.service */ "./ClientApp/app/services/account.service.ts");
/* harmony import */ var _services_account_endpoint_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/account-endpoint.service */ "./ClientApp/app/services/account-endpoint.service.ts");
/* harmony import */ var _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directives/equal-validator.directive */ "./ClientApp/app/directives/equal-validator.directive.ts");
/* harmony import */ var _directives_last_element_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./directives/last-element.directive */ "./ClientApp/app/directives/last-element.directive.ts");
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./directives/autofocus.directive */ "./ClientApp/app/directives/autofocus.directive.ts");
/* harmony import */ var _directives_bootstrap_tab_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./directives/bootstrap-tab.directive */ "./ClientApp/app/directives/bootstrap-tab.directive.ts");
/* harmony import */ var _directives_bootstrap_toggle_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./directives/bootstrap-toggle.directive */ "./ClientApp/app/directives/bootstrap-toggle.directive.ts");
/* harmony import */ var _directives_bootstrap_select_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./directives/bootstrap-select.directive */ "./ClientApp/app/directives/bootstrap-select.directive.ts");
/* harmony import */ var _directives_bootstrap_datepicker_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./directives/bootstrap-datepicker.directive */ "./ClientApp/app/directives/bootstrap-datepicker.directive.ts");
/* harmony import */ var _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pipes/group-by.pipe */ "./ClientApp/app/pipes/group-by.pipe.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/app.component */ "./ClientApp/app/components/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/login/login.component */ "./ClientApp/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/home/home.component */ "./ClientApp/app/components/home/home.component.ts");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/customers/customers.component */ "./ClientApp/app/components/customers/customers.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/products/products.component */ "./ClientApp/app/components/products/products.component.ts");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/orders/orders.component */ "./ClientApp/app/components/orders/orders.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/settings/settings.component */ "./ClientApp/app/components/settings/settings.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/about/about.component */ "./ClientApp/app/components/about/about.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./ClientApp/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_controls_banner_demo_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/controls/banner-demo.component */ "./ClientApp/app/components/controls/banner-demo.component.ts");
/* harmony import */ var _components_controls_todo_demo_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/controls/todo-demo.component */ "./ClientApp/app/components/controls/todo-demo.component.ts");
/* harmony import */ var _components_controls_statistics_demo_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/controls/statistics-demo.component */ "./ClientApp/app/components/controls/statistics-demo.component.ts");
/* harmony import */ var _components_controls_notifications_viewer_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/controls/notifications-viewer.component */ "./ClientApp/app/components/controls/notifications-viewer.component.ts");
/* harmony import */ var _components_controls_search_box_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/controls/search-box.component */ "./ClientApp/app/components/controls/search-box.component.ts");
/* harmony import */ var _components_controls_user_info_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/controls/user-info.component */ "./ClientApp/app/components/controls/user-info.component.ts");
/* harmony import */ var _components_controls_user_preferences_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/controls/user-preferences.component */ "./ClientApp/app/components/controls/user-preferences.component.ts");
/* harmony import */ var _components_controls_users_management_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/controls/users-management.component */ "./ClientApp/app/components/controls/users-management.component.ts");
/* harmony import */ var _components_controls_roles_management_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/controls/roles-management.component */ "./ClientApp/app/components/controls/roles-management.component.ts");
/* harmony import */ var _components_controls_role_editor_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/controls/role-editor.component */ "./ClientApp/app/components/controls/role-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useClass: _services_app_translation_service__WEBPACK_IMPORTED_MODULE_18__["TranslateLanguageLoader"]
                    }
                }),
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                ng2_toasty__WEBPACK_IMPORTED_MODULE_8__["ToastyModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_11__["PopoverModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                ng2_charts__WEBPACK_IMPORTED_MODULE_14__["ChartsModule"]
            ],
            declarations: [
                _components_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_36__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_37__["HomeComponent"],
                _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_38__["CustomersComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_39__["ProductsComponent"],
                _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_40__["OrdersComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_41__["SettingsComponent"],
                _components_controls_users_management_component__WEBPACK_IMPORTED_MODULE_51__["UsersManagementComponent"], _components_controls_user_info_component__WEBPACK_IMPORTED_MODULE_49__["UserInfoComponent"], _components_controls_user_preferences_component__WEBPACK_IMPORTED_MODULE_50__["UserPreferencesComponent"],
                _components_controls_roles_management_component__WEBPACK_IMPORTED_MODULE_52__["RolesManagementComponent"], _components_controls_role_editor_component__WEBPACK_IMPORTED_MODULE_53__["RoleEditorComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_42__["AboutComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_43__["NotFoundComponent"],
                _components_controls_notifications_viewer_component__WEBPACK_IMPORTED_MODULE_47__["NotificationsViewerComponent"],
                _components_controls_search_box_component__WEBPACK_IMPORTED_MODULE_48__["SearchBoxComponent"],
                _components_controls_statistics_demo_component__WEBPACK_IMPORTED_MODULE_46__["StatisticsDemoComponent"], _components_controls_todo_demo_component__WEBPACK_IMPORTED_MODULE_45__["TodoDemoComponent"], _components_controls_banner_demo_component__WEBPACK_IMPORTED_MODULE_44__["BannerDemoComponent"],
                _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_27__["EqualValidator"],
                _directives_last_element_directive__WEBPACK_IMPORTED_MODULE_28__["LastElementDirective"],
                _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_29__["AutofocusDirective"],
                _directives_bootstrap_tab_directive__WEBPACK_IMPORTED_MODULE_30__["BootstrapTabDirective"],
                _directives_bootstrap_toggle_directive__WEBPACK_IMPORTED_MODULE_31__["BootstrapToggleDirective"],
                _directives_bootstrap_select_directive__WEBPACK_IMPORTED_MODULE_32__["BootstrapSelectDirective"],
                _directives_bootstrap_datepicker_directive__WEBPACK_IMPORTED_MODULE_33__["BootstrapDatepickerDirective"],
                _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_34__["GroupByPipe"]
            ],
            providers: [
                { provide: 'BASE_URL', useFactory: getBaseUrl },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _app_error_handler__WEBPACK_IMPORTED_MODULE_16__["AppErrorHandler"] },
                _services_alert_service__WEBPACK_IMPORTED_MODULE_20__["AlertService"],
                _services_configuration_service__WEBPACK_IMPORTED_MODULE_19__["ConfigurationService"],
                _services_app_title_service__WEBPACK_IMPORTED_MODULE_17__["AppTitleService"],
                _services_app_translation_service__WEBPACK_IMPORTED_MODULE_18__["AppTranslationService"],
                _services_notification_service__WEBPACK_IMPORTED_MODULE_23__["NotificationService"],
                _services_notification_endpoint_service__WEBPACK_IMPORTED_MODULE_24__["NotificationEndpoint"],
                _services_account_service__WEBPACK_IMPORTED_MODULE_25__["AccountService"],
                _services_account_endpoint_service__WEBPACK_IMPORTED_MODULE_26__["AccountEndpoint"],
                _services_local_store_manager_service__WEBPACK_IMPORTED_MODULE_21__["LocalStoreManager"],
                _services_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_22__["EndpointFactory"]
            ],
            bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}


/***/ }),

/***/ "./ClientApp/app/components/about/about.component.css":
/*!************************************************************!*\
  !*** ./ClientApp/app/components/about/about.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.pageHeader {\n    margin-bottom: 30px;\n}\n\n.bg-grey {\n    background-color: #f6f6f6;\n}\n\n.logo {\n    font-size: 200px;\n}\n\n.quick-learn {\n    font-weight: bold;\n    margin-top: 4.7em;\n    text-align: right;\n}\n\n@media screen and (max-width: 768px) {\n    .col-sm-4 {\n        text-align: center;\n        margin: 25px 0;\n    }\n\n    .quick-learn {\n        margin-top: 0;\n        text-align: center;\n    }\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/about/about.component.html":
/*!*************************************************************!*\
  !*** ./ClientApp/app/components/about/about.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header class=\"pageHeader\">\n        <h3><i class=\"fa fa-info-circle fa-lg page-caption\" aria-hidden=\"true\"></i> {{'pageHeader.About' | translate}}</h3>\n    </header>\n\n    <div [@fadeInOut]>\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <h2>Eben is a Freelancer (Hire Me)<sup>&reg;</sup></h2>\n                <p>Contact me and I'll get back to you within 24 hours.</p>\n                <p><span title=\"Contact me on Skype\" class=\"fa fa-skype fa-fw\"></span> ganeshrajChauhan.monney</p>\n                <p><span title=\"Follow me on twitter\" class=\"fa fa-twitter fa-fw\"></span> <a class=\"black-anchor\" target=\"_blank\" href=\"https://github.com/GaneshRajChauhan\">ganeshrajChauhan.com/kommand</a></p>\n                <p><span title=\"Connect on facebook\" class=\"fa fa-facebook-official fa-fw\"></span> <a class=\"black-anchor\" target=\"_blank\" href=\"https://www.facebook.com/monney\">ganeshrajChauhan/monney</a></p>\n                <p><span title=\"Drop me a mail\" class=\"fa fa-envelope fa-fw\"></span> <a class=\"black-anchor\" href=\"https://github.com/GaneshRajChauhan\">contact@ganeshrajChauhan.com</a></p>\n                <p><span title=\"My website\" class=\"fa fa-globe fa-fw\"></span> <a class=\"black-anchor\" target=\"_blank\" href=\"https://github.com/GaneshRajChauhan\">www.ganeshrajChauhan.com</a></p>\n                <br />\n            </div>\n            <div class=\"col-sm-6\">\n                <!-- Column 2 -->\n            </div>\n        </div>\n        <div class=\"row bg-grey\">\n            <div class=\"col-sm-4\">\n                <span class=\"fa fa-globe logo\"></span>\n            </div>\n            <div class=\"col-sm-8\">\n                <h2>Our Values</h2>\n                <h4><strong>MISSION:</strong> Quality, Affordable and Easy-to-use software for all</h4>\n                <p>\n                    <strong>VISION:</strong> It is our desire to encourage the use of technology in everyday life. Time is the most valuable resource anyone has,\n                    that is why we at Eben Software Solutions<sup>&reg;</sup> wish to provide quality, affordable and easy-to-use software solutions to boost your productivity. Get more done in less time!\n                    <br />\n                    <br />\n                    Productivity, Accessibility and Affordability is at the core of our values\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/about/about.component.ts":
/*!***********************************************************!*\
  !*** ./ClientApp/app/components/about/about.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/animations */ "./ClientApp/app/services/animations.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "./ClientApp/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./ClientApp/app/components/about/about.component.css")],
            animations: [_services_animations__WEBPACK_IMPORTED_MODULE_1__["fadeInOut"]]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/app.component.css":
/*!****************************************************!*\
  !*** ./ClientApp/app/components/app.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#mainContent.app-component {\n    position: relative;\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\n\n.appTitle.app-component {\n    line-height: 50px;\n}\n\n\n.navbar-fixed-top.app-component, .navbar-fixed-bottom.app-component {\n    z-index: 1000;\n}\n\n\n.navbar-brand.app-component {\n    float: none;\n    color: #fff;\n}\n\n\n.navbar-brand.app-component > img {\n        display: inline;\n        height: 35px;\n    }\n\n\n.navbar-inner.app-component {\n    padding-left: 0px;\n    border-radius: 0px;\n    box-shadow: none;\n    background-color: #027FF4;\n    background-image: none;\n}\n\n\n.navbar-inner.toolbar.app-component {\n    background-color: #fafafa;\n}\n\n\n.navbar.app-component .nav > .active > a, .navbar.app-component .nav > .active > a:hover, .navbar.app-component .nav > .active > a:focus {\n    background-color: #efefef;\n    box-shadow: none;\n    color: #808080;\n}\n\n\n.navbar.app-component .nav > li {\n    cursor: pointer;\n}\n\n\n.navbar.app-component .nav > li > a {\n        color: white;\n        font-weight: bold;\n        -webkit-text-shadow: none;\n        text-shadow: none;\n        height: 30px;\n        padding-top: 6px;\n        padding-bottom: 0px;\n    }\n\n\n.navbar-fixed-top.app-component .navbar-inner.app-component,\n.navbar-static-top.app-component .navbar-inner.app-component {\n    box-shadow: 0 1px 00px rgba(0, 0, 0, 0);\n}\n\n\n.nav.navBarPadding.app-component {\n    margin-left: 5px;\n    margin-top: 10px;\n}\n\n\np.navbar-text.app-component {\n    color: #fff;\n}\n\n\np.navbar-text.app-component a {\n        color: #fff;\n    }\n\n\n.navbar.app-component .brand {\n    margin-top: 2px;\n    color: #fff;\n    -webkit-text-shadow: none;\n    text-shadow: none;\n}\n\n\n.navbar-toggle.app-component {\n    border: 1px solid white;\n}\n\n\n.navbar-toggle.app-component .icon-bar {\n        background-color: white;\n    }\n\n\n@media screen and (max-width: 992px) {\n    #mainContent.app-component {\n        /*padding-top: 200px;*/\n    }\n\n    .navbar-brand.app-component {\n        font-size: 12pt;\n    }\n\n    /*.nav.navBarPadding.app-component {\n        margin-left: -10px;\n    }*/\n\n    .nav.app-component > li > a {\n        padding-right: 5px;\n        padding-left: 5px;\n    }\n}\n\n\n@media screen and (max-width: 768px) {\n    .nav-pills.app-component > li {\n        float: none;\n        margin: 0;\n    }\n\n        .nav-pills.app-component > li + li {\n            margin-left: 0;\n            margin-top: 1px;\n        }\n\n    .navbar-collapse.app-component {\n        padding-right: 30px;\n    }\n}\n\n\n@media (min-width: 768px) {\n    a.user-name.app-component {\n        max-width: 45px;\n    }\n}\n\n\n@media (min-width: 992px) {\n    .navbar-toggle.app-component {\n        display: none;\n    }\n\n    a.user-name.app-component {\n        max-width: 100px;\n    }\n}\n\n\n@media (min-width: 1200px) {\n    a.user-name.app-component {\n        max-width: 250px;\n    }\n}\n\n\na.user-name.app-component {\n    display: inline-block;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    vertical-align: bottom;\n}\n\n\n/*footer.app-component {\n    margin-top: 10px;\n    font-weight: bold;\n}*/\n\n\n.navbar-inner.footer.app-component {\n    background-color: #f5f5f5;\n    box-shadow: none;\n    height: 40px;\n}\n\n\n.vcenter_text.app-component {\n    line-height: 40px;\n    vertical-align: middle;\n}\n\n\n.prebootShow.app-component {\n    opacity: 1 !important;\n}\n\n\n.prebootStep.app-component {\n    opacity: 0;\n    transition: .5s ease-in-out all;\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/app.component.html":
/*!*****************************************************!*\
  !*** ./ClientApp/app/components/app.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app_container\" class=\"{{configurations.theme | lowercase}}-theme\">\r\n    <ng2-toasty></ng2-toasty>\r\n    <div class='container'>\r\n        <nav id=\"header\" class=\"app-component navbar navbar-inner navbar-fixed-top\">\r\n            <nav class=\"container\">\r\n                <div class=\"navbar-header\">\r\n                    <button type=\"button\" class=\"app-component navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".menuItemsContainer.app-component\" aria-expanded=\"false\">\r\n                        <span class=\"sr-only\">Toggle navigation</span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                    </button>\r\n                    <a class=\"app-component navbar-brand\" routerLink=\"/\">\r\n                        <img [src]=\"appLogo\" alt=\"logo\">\r\n                        <span class=\"app-component appTitle\">{{appTitle}}</span>\r\n                    </a>\r\n                </div>\r\n                <div *ngIf=\"isUserLoggedIn\" class=\"app-component collapse navbar-collapse menuItemsContainer\">\r\n                    <ul class=\"app-component nav navbar-nav nav-pills navBarPadding\">\r\n                        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"><a routerLink=\"\"><span class=\"glyphicon glyphicon-home\"></span></a></li>\r\n                        <li routerLinkActive=\"active\" *ngIf=\"canViewCustomers\"><a routerLink=\"/customers\">{{'mainMenu.Customers' | translate}}</a></li>\r\n                        <li routerLinkActive=\"active\" *ngIf=\"canViewProducts\"><a routerLink=\"/products\">{{'mainMenu.Products' | translate}}</a></li>\r\n                        <li routerLinkActive=\"active\" *ngIf=\"canViewOrders\"><a routerLink=\"/orders\">{{'mainMenu.Orders' | translate}}</a></li>\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/about\">{{'mainMenu.About' | translate}}</a></li>\r\n                    </ul>\r\n\r\n                    <ul class=\"app-component nav navbar-nav nav-pills navBarPadding navbar-right\">\r\n                        <li (click)=\"logout()\"><a href=\"javascript:;\"><span class=\"glyphicon glyphicon-log-out\"></span> {{'mainMenu.Logout' | translate}}</a></li>\r\n                    </ul>\r\n                    <p class=\"app-component navbar-text navbar-right notifications-popup\">\r\n                        {{'app.Welcome' | translate}}\r\n                        <a class=\"app-component navbar-link user-name\" [popover]=\"popTemplate\" (onHidden)=\"markNotificationsAsRead()\" placement=\"bottom\" [popoverTitle]=\"notificationsTitle\" href=\"javascript:;\" triggers=\"focus\">\r\n                            {{userName}}\r\n                            <span *ngIf=\"newNotificationCount > 0\" class=\"badge\">{{newNotificationCount}}</span>\r\n                        </a>,\r\n                    </p>\r\n\r\n                    <ng-template #popTemplate>\r\n                        <notifications-viewer [isViewOnly]=\"true\"></notifications-viewer>\r\n                    </ng-template>\r\n\r\n\r\n                    <ul class=\"app-component nav navbar-nav nav-pills navBarPadding navbar-right\">\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/settings\"><span class=\"glyphicon glyphicon-cog\"></span></a></li>\r\n                    </ul>\r\n                </div>\r\n                <div *ngIf=\"!isUserLoggedIn && router.isActive('/about', false)\" class=\"app-component collapse navbar-collapse menuItemsContainer\">\r\n                    <ul class=\"app-component nav navbar-nav nav-pills navBarPadding navbar-right\">\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span></a></li>\r\n                    </ul>\r\n                </div>\r\n                <div *ngIf=\"!isUserLoggedIn && router.isActive('/login', false) || false\" class=\"app-component collapse navbar-collapse menuItemsContainer\">\r\n                    <ul class=\"app-component nav navbar-nav nav-pills navBarPadding navbar-right\">\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/about\"><span class=\"glyphicon glyphicon-info-sign\"></span></a></li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </nav>\r\n\r\n        <div id=\"pre-bootstrap\" *ngIf=\"!removePrebootScreen\" [class.prebootShow.app-component]=\"!isAppLoaded\" class=\"app-component prebootStep\">\r\n            <div class=\"messaging\">\r\n                <h1>\r\n                    Loaded!\r\n                </h1>\r\n                <p>\r\n                    QUICK APPLICATION SYSTEM - <span class=\"appName\" style=\"font-style:italic\">quick</span><span class=\"appName\">App</span> &copy; <a href=\"https://github.com/GaneshRajChauhan\">WWW.GANESHRAJCHAUHAN.COM</a>\r\n                </p>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"mainContent\" class=\"app-component\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <div id=\"footer\">\r\n            <div class=\"app-component navbar-fixed-bottom navbar-inner footer\">\r\n                <div class=\"container\">\r\n                    <footer>\r\n                        <div class=\"app-component vcenter_text center-block\">\r\n                            <p class=\"text-center text-muted\">\r\n                                <span class=\"appName\" style=\"font-style:italic\">quick</span><span class=\"appName\">App</span> &copy; {{getYear()}}\r\n                                <a href=\"https://github.com/GaneshRajChauhan\" target=\"_blank\">www.GaneshRajChauhan.com</a>\r\n                               \r\n                            </p>\r\n                        </div>\r\n                    </footer>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"shouldShowLoginModal\" class=\"modal fade\" bsModal #loginModal=\"bs-modal\" (onShown)=\"onLoginModalShown()\" (onHidden)=\"onLoginModalHidden()\" (onHide)=\"onLoginModalHide()\"\r\n         [config]=\"{backdrop: 'static'}\" tabindex=\"-1\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <app-login #loginControl isModal=\"true\"></app-login>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/app.component.ts":
/*!***************************************************!*\
  !*** ./ClientApp/app/components/app.component.ts ***!
  \***************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ "./ClientApp/app/services/alert.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/notification.service */ "./ClientApp/app/services/notification.service.ts");
/* harmony import */ var _services_app_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/app-translation.service */ "./ClientApp/app/services/app-translation.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/account.service */ "./ClientApp/app/services/account.service.ts");
/* harmony import */ var _services_local_store_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/local-store-manager.service */ "./ClientApp/app/services/local-store-manager.service.ts");
/* harmony import */ var _services_app_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/app-title.service */ "./ClientApp/app/services/app-title.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth.service */ "./ClientApp/app/services/auth.service.ts");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/configuration.service */ "./ClientApp/app/services/configuration.service.ts");
/* harmony import */ var _models_permission_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/permission.model */ "./ClientApp/app/models/permission.model.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/login/login.component */ "./ClientApp/app/components/login/login.component.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var alertify = __webpack_require__(/*! ../../assets/scripts/alertify.js */ "./ClientApp/assets/scripts/alertify.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(storageManager, toastyService, toastyConfig, accountService, alertService, notificationService, appTitleService, authService, translationService, configurations, router) {
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.accountService = accountService;
        this.alertService = alertService;
        this.notificationService = notificationService;
        this.appTitleService = appTitleService;
        this.authService = authService;
        this.translationService = translationService;
        this.configurations = configurations;
        this.router = router;
        this.newNotificationCount = 0;
        this.appTitle = "GSupport";
        this.appLogo = __webpack_require__(/*! ../../assets/images/logo.png */ "./ClientApp/assets/images/logo.png");
        this.stickyToasties = [];
        this.dataLoadingConsecutiveFailurs = 0;
        storageManager.initialiseStorageSyncListener();
        translationService.addLanguages(["en", "fr", "de", "pt", "ar", "ko"]);
        translationService.setDefaultLanguage('en');
        this.toastyConfig.theme = 'bootstrap';
        this.toastyConfig.position = 'top-right';
        this.toastyConfig.limit = 100;
        this.toastyConfig.showClose = true;
        this.appTitleService.appName = this.appTitle;
    }
    Object.defineProperty(AppComponent.prototype, "notificationsTitle", {
        get: function () {
            var _this = this;
            var gT = function (key) { return _this.translationService.getTranslation(key); };
            if (this.newNotificationCount)
                return gT("app.Notifications") + " (" + this.newNotificationCount + " " + gT("app.New") + ")";
            else
                return gT("app.Notifications");
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.modalLoginControls.changes.subscribe(function (controls) {
            controls.forEach(function (control) {
                if (control) {
                    if (control instanceof _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]) {
                        _this.loginControl = control;
                        _this.loginControl.modalClosedCallback = function () { return _this.loginModal.hide(); };
                    }
                    else {
                        _this.loginModal = control;
                        _this.loginModal.show();
                    }
                }
            });
        });
    };
    AppComponent.prototype.onLoginModalShown = function () {
        this.alertService.showStickyMessage("Session Expired", "Your Session has expired. Please log in again", _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].info);
    };
    AppComponent.prototype.onLoginModalHidden = function () {
        this.alertService.resetStickyMessage();
        this.loginControl.reset();
        this.shouldShowLoginModal = false;
        if (this.authService.isSessionExpired)
            this.alertService.showStickyMessage("Session Expired", "Your Session has expired. Please log in again to renew your session", _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].warn);
    };
    AppComponent.prototype.onLoginModalHide = function () {
        this.alertService.resetStickyMessage();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isUserLoggedIn = this.authService.isLoggedIn;
        // 1 sec to ensure all the effort to get the css animation working is appreciated :|, Preboot screen is removed .5 sec later
        setTimeout(function () { return _this.isAppLoaded = true; }, 1000);
        setTimeout(function () { return _this.removePrebootScreen = true; }, 1500);
        setTimeout(function () {
            if (_this.isUserLoggedIn) {
                _this.alertService.resetStickyMessage();
                //if (!this.authService.isSessionExpired)
                _this.alertService.showMessage("Login", "Welcome back " + _this.userName + "!", _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].default);
                //else
                //    this.alertService.showStickyMessage("Session Expired", "Your Session has expired. Please log in again", MessageSeverity.warn);
            }
        }, 2000);
        this.alertService.getDialogEvent().subscribe(function (alert) { return _this.showDialog(alert); });
        this.alertService.getMessageEvent().subscribe(function (message) { return _this.showToast(message, false); });
        this.alertService.getStickyMessageEvent().subscribe(function (message) { return _this.showToast(message, true); });
        this.authService.reLoginDelegate = function () { return _this.shouldShowLoginModal = true; };
        this.authService.getLoginStatusEvent().subscribe(function (isLoggedIn) {
            _this.isUserLoggedIn = isLoggedIn;
            if (_this.isUserLoggedIn) {
                _this.initNotificationsLoading();
            }
            else {
                _this.unsubscribeNotifications();
            }
            setTimeout(function () {
                if (!_this.isUserLoggedIn) {
                    _this.alertService.showMessage("Session Ended!", "", _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].default);
                }
            }, 500);
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                var url = event.url;
                if (url !== url.toLowerCase()) {
                    _this.router.navigateByUrl(event.url.toLowerCase());
                }
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeNotifications();
    };
    AppComponent.prototype.unsubscribeNotifications = function () {
        if (this.notificationsLoadingSubscription)
            this.notificationsLoadingSubscription.unsubscribe();
    };
    AppComponent.prototype.initNotificationsLoading = function () {
        var _this = this;
        this.notificationsLoadingSubscription = this.notificationService.getNewNotificationsPeriodically()
            .subscribe(function (notifications) {
            _this.dataLoadingConsecutiveFailurs = 0;
            _this.newNotificationCount = notifications.filter(function (n) { return !n.isRead; }).length;
        }, function (error) {
            _this.alertService.logError(error);
            if (_this.dataLoadingConsecutiveFailurs++ < 20)
                setTimeout(function () { return _this.initNotificationsLoading(); }, 5000);
            else
                _this.alertService.showStickyMessage("Load Error", "Loading new notifications from the server failed!", _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].error);
        });
    };
    AppComponent.prototype.markNotificationsAsRead = function () {
        var _this = this;
        var recentNotifications = this.notificationService.recentNotifications;
        if (recentNotifications.length) {
            this.notificationService.readUnreadNotification(recentNotifications.map(function (n) { return n.id; }), true)
                .subscribe(function (response) {
                for (var _i = 0, recentNotifications_1 = recentNotifications; _i < recentNotifications_1.length; _i++) {
                    var n = recentNotifications_1[_i];
                    n.isRead = true;
                }
                _this.newNotificationCount = recentNotifications.filter(function (n) { return !n.isRead; }).length;
            }, function (error) {
                _this.alertService.logError(error);
                _this.alertService.showMessage("Notification Error", "Marking read notifications failed", _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].error);
            });
        }
    };
    AppComponent.prototype.showDialog = function (dialog) {
        alertify.set({
            labels: {
                ok: dialog.okLabel || "OK",
                cancel: dialog.cancelLabel || "Cancel"
            }
        });
        switch (dialog.type) {
            case _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["DialogType"].alert:
                alertify.alert(dialog.message);
                break;
            case _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["DialogType"].confirm:
                alertify
                    .confirm(dialog.message, function (e) {
                    if (e) {
                        dialog.okCallback();
                    }
                    else {
                        if (dialog.cancelCallback)
                            dialog.cancelCallback();
                    }
                });
                break;
            case _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["DialogType"].prompt:
                alertify
                    .prompt(dialog.message, function (e, val) {
                    if (e) {
                        dialog.okCallback(val);
                    }
                    else {
                        if (dialog.cancelCallback)
                            dialog.cancelCallback();
                    }
                }, dialog.defaultValue);
                break;
        }
    };
    AppComponent.prototype.showToast = function (message, isSticky) {
        var _this = this;
        if (message == null) {
            for (var _i = 0, _a = this.stickyToasties.slice(0); _i < _a.length; _i++) {
                var id = _a[_i];
                this.toastyService.clear(id);
            }
            return;
        }
        var toastOptions = {
            title: message.summary,
            msg: message.detail,
            timeout: isSticky ? 0 : 4000
        };
        if (isSticky) {
            toastOptions.onAdd = function (toast) { return _this.stickyToasties.push(toast.id); };
            toastOptions.onRemove = function (toast) {
                var index = _this.stickyToasties.indexOf(toast.id, 0);
                if (index > -1) {
                    _this.stickyToasties.splice(index, 1);
                }
                toast.onAdd = null;
                toast.onRemove = null;
            };
        }
        switch (message.severity) {
            case _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].default:
                this.toastyService.default(toastOptions);
                break;
            case _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].info:
                this.toastyService.info(toastOptions);
                break;
            case _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].success:
                this.toastyService.success(toastOptions);
                break;
            case _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].error:
                this.toastyService.error(toastOptions);
                break;
            case _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].warn:
                this.toastyService.warning(toastOptions);
                break;
            case _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].wait:
                this.toastyService.wait(toastOptions);
                break;
        }
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.authService.redirectLogoutUser();
    };
    AppComponent.prototype.getYear = function () {
        return new Date().getUTCFullYear();
    };
    Object.defineProperty(AppComponent.prototype, "userName", {
        get: function () {
            return this.authService.currentUser ? this.authService.currentUser.userName : "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "fullName", {
        get: function () {
            return this.authService.currentUser ? this.authService.currentUser.fullName : "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "canViewCustomers", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_11__["Permission"].viewUsersPermission); //eg. viewCustomersPermission
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "canViewProducts", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_11__["Permission"].viewUsersPermission); //eg. viewProductsPermission
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "canViewOrders", {
        get: function () {
            return true; //eg. viewOrdersPermission
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('loginModal,loginControl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AppComponent.prototype, "modalLoginControls", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./ClientApp/app/components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./ClientApp/app/components/app.component.css"), __webpack_require__(/*! ../../styles.css */ "./ClientApp/styles.css"), __webpack_require__(/*! ../../themes.css */ "./ClientApp/themes.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_local_store_manager_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreManager"], ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyService"], ng2_toasty__WEBPACK_IMPORTED_MODULE_2__["ToastyConfig"],
            _services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _services_app_title_service__WEBPACK_IMPORTED_MODULE_8__["AppTitleService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_app_translation_service__WEBPACK_IMPORTED_MODULE_5__["AppTranslationService"], _services_configuration_service__WEBPACK_IMPORTED_MODULE_10__["ConfigurationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/controls/banner-demo.component.html":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/components/controls/banner-demo.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        <carousel interval=\"6000\">\n            <slide>\n                <img [src]=\"banner1\" alt=\"ASP.NET\" class=\"img-responsive\" />\n                <div class=\"carousel-caption\">\n                    <p>\n                        Learn how to build ASP.NET apps that can run anywhere\n                        <a class=\"btn btn-default btn-sm\" href=\"http://go.microsoft.com/fwlink/?LinkID=525028&clcid=0x409\" target=\"_blank\">\n                            Learn More\n                        </a>\n                    </p>\n                </div>\n            </slide>\n            <slide>\n                <img [src]=\"banner2\" alt=\"Visual Studio\" class=\"img-responsive\" />\n                <div class=\"carousel-caption\">\n                    <p>\n                        One platform for building modern web, native mobile and native desktop applications\n                        <a class=\"btn btn-default btn-sm\" href=\"http://angular.io\" target=\"_blank\">\n                            Learn More\n                        </a>\n                    </p>\n                </div>\n            </slide>\n            <slide>\n                <img [src]=\"banner3\" alt=\"Package Management\" class=\"img-responsive\" />\n                <div class=\"carousel-caption\">\n                    <p>\n                        Bring in libraries from NuGet and npm, and bundle with webpack\n                        <a class=\"btn btn-default btn-sm\" href=\"http://go.microsoft.com/fwlink/?LinkID=525029&clcid=0x409\" target=\"_blank\">\n                            Learn More\n                        </a>\n                    </p>\n                </div>\n            </slide>\n            <slide>\n                <img [src]=\"banner4\" alt=\"Eben Monney\" class=\"img-responsive\" />\n                <div class=\"carousel-caption\">\n                    <p>\n                        Follow me on social media for updates and tips on using this startup project\n                        <a class=\"btn btn-default btn-sm\" href=\"http://ebenmonney.com/about\" target=\"_blank\">\n                            Learn More\n                        </a>\n                    </p>\n                </div>\n            </slide>\n        </carousel>\n    </div>\n\n\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <h3>Application uses</h3>\n            <ul>\n                <li>Restful API backend using the cross platform <a href=\"http://go.microsoft.com/fwlink/?LinkID=525028&clcid=0x409\" target=\"_blank\">ASP.NET Core MVC</a></li>\n                <li>Client framework with <a href=\"http://angular.io\" target=\"_blank\">angular2</a> and typescript</li>\n                <li><a href=\"http://npmjs.com\" target=\"_blank\">npm</a> for managing client-side libraries</li>\n                <li>Theming using <a href=\"http://go.microsoft.com/fwlink/?LinkID=398939\" target=\"_blank\">Bootstrap</a></li>\n                <li>Module bundling with <a href=\"https://webpack.js.org\" target=\"_blank\">webpack3</a></li>\n            </ul>\n        </div>\n        <div class=\"col-md-3\">\n            <h3>How to</h3>\n            <ul>\n                <li><a href=\"http://ebenmonney.com/quickapp#adding-pages\" target=\"_blank\">Add additional pages and set access permissions</a></li>\n                <li><a href=\"http://go.microsoft.com/fwlink/?LinkId=699315\" target=\"_blank\">Manage User Secrets using Secret Manager.</a></li>\n                <li><a href=\"http://go.microsoft.com/fwlink/?LinkId=699316\" target=\"_blank\">Use logging to log a message.</a></li>\n                <li><a href=\"http://go.microsoft.com/fwlink/?LinkId=699317\" target=\"_blank\">Add packages using NuGet.</a></li>\n                <li><a href=\"http://ebenmonney.com/quickapp#adding-vendor-packages\" target=\"_blank\">Add client packages using npm</a></li>\n                <li><a href=\"http://ebenmonney.com/quickapp#building-vendor-packages\" target=\"_blank\">Rebuild client vendor packages</a></li>\n                <li><a href=\"http://go.microsoft.com/fwlink/?LinkId=699319\" target=\"_blank\">Target development, staging or production environment.</a></li>\n            </ul>\n        </div>\n        <div class=\"col-md-3\">\n            <h3>Overview</h3>\n            <ul>\n                <li><a href=\"http://go.microsoft.com/fwlink/?LinkId=518008\" target=\"_blank\">Conceptual overview of what is ASP.NET Core</a></li>\n                <li><a href=\"http://angular.io/docs/ts/latest/guide\" target=\"_blank\">Angular2 documentation overview</a></li>\n                <li><a href=\"http://go.microsoft.com/fwlink/?LinkId=398602\" target=\"_blank\">Working with Data</a></li>\n                <li><a href=\"http://go.microsoft.com/fwlink/?LinkId=398603\" target=\"_blank\">Security</a></li>\n                <li><a href=\"http://go.microsoft.com/fwlink/?LinkID=699321\" target=\"_blank\">Client side development</a></li>\n                <li><a href=\"https://webpack.js.org/guides/get-started\" target=\"_blank\">An introduction to webpack</a></li>\n                <li><a href=\"http://go.microsoft.com/fwlink/?LinkID=699322\" target=\"_blank\">Develop on different platforms</a></li>\n                <li><a href=\"http://ebenmonney.com/quickapp\" target=\"_blank\">Read more on the documentation site</a></li>\n            </ul>\n        </div>\n        <div class=\"col-md-3\">\n            <h3>Run & Deploy</h3>\n            <ul>\n                <li><a href=\"http://ebenmonney.com/quickapp#how-to-run-app\" target=\"_blank\">Run your app</a></li>\n                <li><a href=\"http://go.microsoft.com/fwlink/?LinkID=517853\" target=\"_blank\">Run tools such as EF migrations and more</a></li>\n                <li><a href=\"http://go.microsoft.com/fwlink/?LinkID=398609\" target=\"_blank\">Publish to Microsoft Azure Web Apps</a></li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/banner-demo.component.ts":
/*!********************************************************************!*\
  !*** ./ClientApp/app/components/controls/banner-demo.component.ts ***!
  \********************************************************************/
/*! exports provided: BannerDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerDemoComponent", function() { return BannerDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BannerDemoComponent = /** @class */ (function () {
    function BannerDemoComponent() {
        this.banner1 = __webpack_require__(/*! ../../../assets/images/demo/banner1.png */ "./ClientApp/assets/images/demo/banner1.png");
        this.banner2 = __webpack_require__(/*! ../../../assets/images/demo/banner2.png */ "./ClientApp/assets/images/demo/banner2.png");
        this.banner3 = __webpack_require__(/*! ../../../assets/images/demo/banner3.png */ "./ClientApp/assets/images/demo/banner3.png");
        this.banner4 = __webpack_require__(/*! ../../../assets/images/demo/banner4.png */ "./ClientApp/assets/images/demo/banner4.png");
    }
    BannerDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'banner-demo',
            template: __webpack_require__(/*! ./banner-demo.component.html */ "./ClientApp/app/components/controls/banner-demo.component.html")
        })
    ], BannerDemoComponent);
    return BannerDemoComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/controls/notifications-viewer.component.css":
/*!******************************************************************************!*\
  !*** ./ClientApp/app/components/controls/notifications-viewer.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.unread {\n    font-weight: bold;\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/notifications-viewer.component.html":
/*!*******************************************************************************!*\
  !*** ./ClientApp/app/components/controls/notifications-viewer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <ngx-datatable class=\"material colored-header sm table-hover\"\n                   [loadingIndicator]=\"loadingIndicator\"\n                   [rows]=\"rows\"\n                   [rowHeight]=\"35\"\n                   [headerHeight]=\"isViewOnly ? 0 : 35\"\n                   [footerHeight]=\"35\"\n                   [limit]=\"10\"\n                   [columns]=\"columns\"\n                   [scrollbarV]=\"verticalScrollbar\"\n                   [columnMode]=\"'force'\">\n    </ngx-datatable>\n\n    <ng-template #statusHeaderTemplate>\n        <i class=\"fa fa-bullhorn\"></i>\n    </ng-template>\n\n    <ng-template #statusTemplate>\n        <span></span>\n    </ng-template>\n\n    <ng-template #dateTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{getPrintedDate(value)}}\">\n            {{getPrintedDate(value)}}\n        </span>\n    </ng-template>\n\n    <ng-template #contentHeaderTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{row.body}}\">\n            {{value}}\n        </span>\n    </ng-template>\n\n    <ng-template #contenBodytTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{row.header}}\">\n            {{value}}\n        </span>\n    </ng-template>\n\n\n    <ng-template #actionsTemplate let-row=\"row\">\n        <a class=\"btn btn-link btn-xs\" href=\"javascript:;\" tooltip=\"{{'notifications.Delete' | translate}}\" container=\"body\" (click)=\"deleteNotification(row)\"><i class=\"fa fa-times\"></i></a>\n        <a class=\"btn btn-link btn-xs\" href=\"javascript:;\" tooltip=\"{{'notifications.Pin' | translate}}\" co container=\"body\" (click)=\"togglePin(row)\">\n            <i *ngIf=\"row.isPinned\" class=\"fa fa-thumb-tack\"></i>\n            <i *ngIf=\"!row.isPinned\" class=\"fa fa-thumb-tack fa-rotate-90\"></i>\n        </a>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/controls/notifications-viewer.component.ts":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/components/controls/notifications-viewer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NotificationsViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsViewerComponent", function() { return NotificationsViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alert.service */ "./ClientApp/app/services/alert.service.ts");
/* harmony import */ var _services_app_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-translation.service */ "./ClientApp/app/services/app-translation.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "./ClientApp/app/services/notification.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/account.service */ "./ClientApp/app/services/account.service.ts");
/* harmony import */ var _models_permission_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/permission.model */ "./ClientApp/app/models/permission.model.ts");
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utilities */ "./ClientApp/app/services/utilities.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotificationsViewerComponent = /** @class */ (function () {
    function NotificationsViewerComponent(alertService, translationService, accountService, notificationService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.notificationService = notificationService;
        this.columns = [];
        this.rows = [];
        this.dataLoadingConsecutiveFailurs = 0;
        this.verticalScrollbar = false;
    }
    NotificationsViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isViewOnly) {
            this.columns = [
                { prop: 'date', cellTemplate: this.dateTemplate, width: 100, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'header', cellTemplate: this.contentHeaderTemplate, width: 200, resizeable: false, sortable: false, draggable: false },
            ];
        }
        else {
            var gT = function (key) { return _this.translationService.getTranslation(key); };
            this.columns = [
                { prop: "", name: '', width: 10, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'date', name: gT('notifications.Date'), cellTemplate: this.dateTemplate, width: 30 },
                { prop: 'body', name: gT('notifications.Notification'), cellTemplate: this.contenBodytTemplate, width: 500 },
                { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
            ];
        }
        this.initDataLoading();
    };
    NotificationsViewerComponent.prototype.ngOnDestroy = function () {
        if (this.dataLoadingSubscription)
            this.dataLoadingSubscription.unsubscribe();
    };
    NotificationsViewerComponent.prototype.initDataLoading = function () {
        var _this = this;
        if (this.isViewOnly && this.notificationService.recentNotifications) {
            this.rows = this.processResults(this.notificationService.recentNotifications);
            return;
        }
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        var dataLoadTask = this.isViewOnly ? this.notificationService.getNewNotifications() : this.notificationService.getNewNotificationsPeriodically();
        this.dataLoadingSubscription = dataLoadTask
            .subscribe(function (notifications) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.dataLoadingConsecutiveFailurs = 0;
            _this.rows = _this.processResults(notifications);
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showMessage("Load Error", "Loading new notifications from the server failed!", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].warn);
            _this.alertService.logError(error);
            if (_this.dataLoadingConsecutiveFailurs++ < 5)
                setTimeout(function () { return _this.initDataLoading(); }, 5000);
            else
                _this.alertService.showStickyMessage("Load Error", "Loading new notifications from the server failed!", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error);
        });
        if (this.isViewOnly)
            this.dataLoadingSubscription = null;
    };
    NotificationsViewerComponent.prototype.processResults = function (notifications) {
        if (this.isViewOnly) {
            notifications.sort(function (a, b) {
                return b.date.valueOf() - a.date.valueOf();
            });
        }
        return notifications;
    };
    NotificationsViewerComponent.prototype.getPrintedDate = function (value) {
        if (value)
            return _services_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].printTimeOnly(value) + " on " + _services_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].printDateOnly(value);
    };
    NotificationsViewerComponent.prototype.deleteNotification = function (row) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete the notification \"' + row.header + '\"?', _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["DialogType"].confirm, function () { return _this.deleteNotificationHelper(row); });
    };
    NotificationsViewerComponent.prototype.deleteNotificationHelper = function (row) {
        var _this = this;
        this.alertService.startLoadingMessage("Deleting...");
        this.loadingIndicator = true;
        this.notificationService.deleteNotification(row)
            .subscribe(function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.rows = _this.rows.filter(function (item) { return item.id != row.id; });
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage("Delete Error", "An error occured whilst deleting the notification.\r\nError: \"" + _services_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].getHttpResponseMessage(error) + "\"", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
        });
    };
    NotificationsViewerComponent.prototype.togglePin = function (row) {
        var _this = this;
        var pin = !row.isPinned;
        var opText = pin ? "Pinning" : "Unpinning";
        this.alertService.startLoadingMessage(opText + "...");
        this.loadingIndicator = true;
        this.notificationService.pinUnpinNotification(row, pin)
            .subscribe(function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            row.isPinned = pin;
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage(opText + " Error", "An error occured whilst " + opText + " the notification.\r\nError: \"" + _services_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].getHttpResponseMessage(error) + "\"", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
        });
    };
    Object.defineProperty(NotificationsViewerComponent.prototype, "canManageNotifications", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_5__["Permission"].manageRolesPermission); //Todo: Consider creating separate permission for notifications
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NotificationsViewerComponent.prototype, "isViewOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NotificationsViewerComponent.prototype, "verticalScrollbar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('statusHeaderTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], NotificationsViewerComponent.prototype, "statusHeaderTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('statusTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], NotificationsViewerComponent.prototype, "statusTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dateTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], NotificationsViewerComponent.prototype, "dateTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentHeaderTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], NotificationsViewerComponent.prototype, "contentHeaderTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contenBodytTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], NotificationsViewerComponent.prototype, "contenBodytTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('actionsTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], NotificationsViewerComponent.prototype, "actionsTemplate", void 0);
    NotificationsViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notifications-viewer',
            template: __webpack_require__(/*! ./notifications-viewer.component.html */ "./ClientApp/app/components/controls/notifications-viewer.component.html"),
            styles: [__webpack_require__(/*! ./notifications-viewer.component.css */ "./ClientApp/app/components/controls/notifications-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"], _services_app_translation_service__WEBPACK_IMPORTED_MODULE_2__["AppTranslationService"], _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], NotificationsViewerComponent);
    return NotificationsViewerComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/controls/role-editor.component.css":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/components/controls/role-editor.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row:not(:last-child) {\n    /*border-bottom: 1px solid #ccc;*/\n}\n\n.separator-hr {\n    margin: 0 5px;\n    border-top-style: dashed;\n}\n\n.edit-separator-hr {\n    margin: 10px 5px;\n    border-top-style: dashed;\n}\n\n.last-separator-hr {\n    margin-top: 5px;\n}\n\n.edit-last-separator-hr {\n    margin-top: 15px;\n}\n\n.form-group {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\ninput.form-control {\n    border-left-width: 5px;\n}\n\n.roleErrorMessage {\n    margin-left: 50px;\n}\n\n.permissionsColumn {\n    margin-bottom: 20px;\n}\n\n.permissionsRow {\n    margin: 0 15px;\n}\n\n.password-well {\n    margin-bottom: 0;\n}\n\n@media (min-width: 992px) {\n    .user-enabled {\n        margin-left: 40px;\n    }\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/role-editor.component.html":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/components/controls/role-editor.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <form *ngIf=\"formResetToggle\" class=\"form-horizontal\" name=\"roleEditorForm\" #f=\"ngForm\" novalidate\n          (ngSubmit)=\"f.form.valid ? save() :\n          (!roleName.valid && showErrorAlert('Role name is required', 'Please enter a role name (minimum of 2 and maximum of 200 characters)'));\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"form-group has-feedback\">\n                    <label class=\"control-label col-md-2\" for=\"roleName\">{{'roles.editor.Name' | translate}}</label>\n                    <div class=\"col-md-10\" [ngClass]=\"{'has-success': f.submitted && roleName.valid, 'has-error' : f.submitted && !roleName.valid}\">\n                        <input [disabled]=\"!canManageRoles\" type=\"text\" id=\"roleName\" name=\"roleName\" placeholder=\"Enter role name\" class=\"form-control\" [(ngModel)]=\"roleEdit.name\" #roleName=\"ngModel\" required minlength=\"2\" maxlength=\"200\" />\n                        <span *ngIf=\"showValidationErrors && f.submitted\" class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok ': roleName.valid, 'glyphicon-remove' : !roleName.valid}\"></span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-8\">\n                <div class=\"form-group\">\n                    <label class=\"control-label col-md-2\" for=\"roleDescription\">{{'roles.editor.Description' | translate}}</label>\n                    <div class=\"col-md-10\">\n                        <input [disabled]=\"!canManageRoles\" type=\"text\" id=\"roleDescription\" name=\"roleDescription\" placeholder=\"Enter role description\" class=\"form-control\" [(ngModel)]=\"roleEdit.description\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <span *ngIf=\"showValidationErrors && f.submitted && !roleName.valid\" class=\"errorMessage roleErrorMessage\">\n                    {{'roles.editor.RoleNameRequired' | translate}}\n                </span>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <hr class=\"edit-separator-hr\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"row well well-sm permissionsRow\">\n\n                <ng-template ngFor let-permissionGroup [ngForOf]=\"allPermissions | groupBy: 'groupName'\" let-i=\"index\">\n                    <div class=\"form-group col-sm-6 permissionsColumn\">\n                        <label class=\"col-md-5 control-label\" for=\"checkboxes\" (click)=\"toggleGroup(permissionGroup.key)\">{{permissionGroup.key}}</label>\n                        <div class=\"col-md-7\">\n                            <div class=\"checkbox\" *ngFor=\"let permission of permissionGroup.value\">\n                                <label tooltip=\"{{permission.description}}\" for=\"checkboxes-{{permission.value}}\">\n                                    <input [disabled]=\"!canManageRoles\" name=\"checkboxes-{{permission.value}}\" id=\"checkboxes-{{permission.value}}\" type=\"checkbox\" [(ngModel)]=\"selectedValues[permission.value]\">\n                                    {{permission.name}}\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"(i + 1) % 2 === 0\" class=\"clearfix\"></div>\n                </ng-template>\n\n            </div>\n\n        </div>\n\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <hr class=\"edit-last-separator-hr\" />\n            </div>\n        </div>\n\n\n        <div class=\"form-group\">\n            <div class=\"col-sm-5\">\n                <div *ngIf=\"canManageRoles\" class=\"pull-left\">\n                    <a (click)=\"selectAll()\" href=\"javascript:;\" class=\"btn btn-link\">{{'roles.editor.SelectAll' | translate}}</a>|<a (click)=\"selectNone()\" href=\"javascript:;\" class=\"btn btn-link\">{{'roles.editor.SelectNone' | translate}}</a>\n                </div>\n            </div>\n\n            <div class=\"col-sm-7\">\n                <div class=\"pull-right\">\n                    <button *ngIf=\"!canManageRoles\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">{{'roles.editor.Close' | translate}}</button>\n                    <button *ngIf=\"canManageRoles\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-danger\" [disabled]=\"isSaving\"><i class='fa fa-times'></i> {{'roles.editor.Cancel' | translate}}</button>\n                    <button *ngIf=\"canManageRoles\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isSaving\">\n                        <i *ngIf=\"!isSaving\" class='fa fa-save'></i><i *ngIf=\"isSaving\" class='fa fa-circle-o-notch fa-spin'></i> {{isSaving ? ('roles.editor.Saving' | translate) : ('roles.editor.Save' | translate)}}\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/role-editor.component.ts":
/*!********************************************************************!*\
  !*** ./ClientApp/app/components/controls/role-editor.component.ts ***!
  \********************************************************************/
/*! exports provided: RoleEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleEditorComponent", function() { return RoleEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alert.service */ "./ClientApp/app/services/alert.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ "./ClientApp/app/services/account.service.ts");
/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/role.model */ "./ClientApp/app/models/role.model.ts");
/* harmony import */ var _models_permission_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/permission.model */ "./ClientApp/app/models/permission.model.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoleEditorComponent = /** @class */ (function () {
    function RoleEditorComponent(alertService, accountService) {
        this.alertService = alertService;
        this.accountService = accountService;
        this.isNewRole = false;
        this.showValidationErrors = true;
        this.roleEdit = new _models_role_model__WEBPACK_IMPORTED_MODULE_3__["Role"]();
        this.allPermissions = [];
        this.selectedValues = {};
        this.formResetToggle = true;
    }
    RoleEditorComponent.prototype.showErrorAlert = function (caption, message) {
        this.alertService.showMessage(caption, message, _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error);
    };
    RoleEditorComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        this.alertService.startLoadingMessage("Saving changes...");
        this.roleEdit.permissions = this.getSelectedPermissions();
        if (this.isNewRole) {
            this.accountService.newRole(this.roleEdit).subscribe(function (role) { return _this.saveSuccessHelper(role); }, function (error) { return _this.saveFailedHelper(error); });
        }
        else {
            this.accountService.updateRole(this.roleEdit).subscribe(function (response) { return _this.saveSuccessHelper(); }, function (error) { return _this.saveFailedHelper(error); });
        }
    };
    RoleEditorComponent.prototype.saveSuccessHelper = function (role) {
        var _this = this;
        if (role)
            Object.assign(this.roleEdit, role);
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.showValidationErrors = false;
        if (this.isNewRole)
            this.alertService.showMessage("Success", "Role \"" + this.roleEdit.name + "\" was created successfully", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].success);
        else
            this.alertService.showMessage("Success", "Changes to role \"" + this.roleEdit.name + "\" was saved successfully", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].success);
        this.roleEdit = new _models_role_model__WEBPACK_IMPORTED_MODULE_3__["Role"]();
        this.resetForm();
        if (!this.isNewRole && this.accountService.currentUser.roles.some(function (r) { return r == _this.editingRoleName; }))
            this.refreshLoggedInUser();
        if (this.changesSavedCallback)
            this.changesSavedCallback();
    };
    RoleEditorComponent.prototype.refreshLoggedInUser = function () {
        var _this = this;
        this.accountService.refreshLoggedInUser()
            .subscribe(function (user) { }, function (error) {
            _this.alertService.resetStickyMessage();
            _this.alertService.showStickyMessage("Refresh failed", "An error occured whilst refreshing logged in user information from the server", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
        });
    };
    RoleEditorComponent.prototype.saveFailedHelper = function (error) {
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage("Save Error", "The below errors occured whilst saving your changes:", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
        this.alertService.showStickyMessage(error, null, _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error);
        if (this.changesFailedCallback)
            this.changesFailedCallback();
    };
    RoleEditorComponent.prototype.cancel = function () {
        this.roleEdit = new _models_role_model__WEBPACK_IMPORTED_MODULE_3__["Role"]();
        this.showValidationErrors = false;
        this.resetForm();
        this.alertService.showMessage("Cancelled", "Operation cancelled by user", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].default);
        this.alertService.resetStickyMessage();
        if (this.changesCancelledCallback)
            this.changesCancelledCallback();
    };
    RoleEditorComponent.prototype.selectAll = function () {
        var _this = this;
        this.allPermissions.forEach(function (p) { return _this.selectedValues[p.value] = true; });
    };
    RoleEditorComponent.prototype.selectNone = function () {
        var _this = this;
        this.allPermissions.forEach(function (p) { return _this.selectedValues[p.value] = false; });
    };
    RoleEditorComponent.prototype.toggleGroup = function (groupName) {
        var _this = this;
        var firstMemberValue;
        this.allPermissions.forEach(function (p) {
            if (p.groupName != groupName)
                return;
            if (firstMemberValue == null)
                firstMemberValue = _this.selectedValues[p.value] == true;
            _this.selectedValues[p.value] = !firstMemberValue;
        });
    };
    RoleEditorComponent.prototype.getSelectedPermissions = function () {
        var _this = this;
        return this.allPermissions.filter(function (p) { return _this.selectedValues[p.value] == true; });
    };
    RoleEditorComponent.prototype.resetForm = function (replace) {
        var _this = this;
        if (replace === void 0) { replace = false; }
        if (!replace) {
            this.form.reset();
        }
        else {
            this.formResetToggle = false;
            setTimeout(function () {
                _this.formResetToggle = true;
            });
        }
    };
    RoleEditorComponent.prototype.newRole = function (allPermissions) {
        this.isNewRole = true;
        this.showValidationErrors = true;
        this.editingRoleName = null;
        this.allPermissions = allPermissions;
        this.selectedValues = {};
        this.roleEdit = new _models_role_model__WEBPACK_IMPORTED_MODULE_3__["Role"]();
        return this.roleEdit;
    };
    RoleEditorComponent.prototype.editRole = function (role, allPermissions) {
        var _this = this;
        if (role) {
            this.isNewRole = false;
            this.showValidationErrors = true;
            this.editingRoleName = role.name;
            this.allPermissions = allPermissions;
            this.selectedValues = {};
            role.permissions.forEach(function (p) { return _this.selectedValues[p.value] = true; });
            this.roleEdit = new _models_role_model__WEBPACK_IMPORTED_MODULE_3__["Role"]();
            Object.assign(this.roleEdit, role);
            return this.roleEdit;
        }
        else {
            return this.newRole(allPermissions);
        }
    };
    Object.defineProperty(RoleEditorComponent.prototype, "canManageRoles", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_4__["Permission"].manageRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], RoleEditorComponent.prototype, "form", void 0);
    RoleEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'role-editor',
            template: __webpack_require__(/*! ./role-editor.component.html */ "./ClientApp/app/components/controls/role-editor.component.html"),
            styles: [__webpack_require__(/*! ./role-editor.component.css */ "./ClientApp/app/components/controls/role-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"], _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
    ], RoleEditorComponent);
    return RoleEditorComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/controls/roles-management.component.css":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/components/controls/roles-management.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.control-box {\n    margin-bottom: 5px;\n}\n\n.search-box {\n    margin: 0;\n}\n\n.action-box {\n    margin: 0 50px 0 0;\n    min-height: 0;\n}\n\n.action-box .toolbaritem a {\n        padding-top: 5px;\n        padding-bottom: 5px;\n        min-width: 100px;\n    }\n\n@media (max-width: 768px) {\n    .action-box {\n        margin: 0 14px;\n    }\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/roles-management.component.html":
/*!***************************************************************************!*\
  !*** ./ClientApp/app/components/controls/roles-management.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row control-box\">\n        <div class=\"col-sm-8\">\n            <div class=\"form-group search-box\">\n                <search-box (searchChange)=\"onSearchChanged($event)\" placeholder=\"{{'roles.management.Search' | translate}}\">></search-box>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"navbar action-box\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li *ngIf=\"canManageRoles\" class=\"toolbaritem\">\n                        <a href=\"javascript:;\" (click)=\"newRole(row)\">\n                            <i class=\"fa fa-plus-circle\"></i> {{'roles.management.NewRole' | translate}}\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <ngx-datatable class=\"material colored-header sm table table-striped table-hover\"\n                   [loadingIndicator]=\"loadingIndicator\"\n                   [rows]=\"rows\"\n                   [rowHeight]=\"35\"\n                   [headerHeight]=\"35\"\n                   [footerHeight]=\"35\"\n                   [columns]=\"columns\"\n                   [scrollbarV]=\"true\"\n                   [columnMode]=\"'force'\">\n    </ngx-datatable>\n\n    <ng-template #indexTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n\n\n    <ng-template #actionsTemplate let-row=\"row\" let-value=\"value\" let-i=\"index\">\n        <a *ngIf=\"canManageRoles\" class=\"btn btn-link btn-xs\" href=\"javascript:;\" (click)=\"editRole(row)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> {{'roles.management.Edit' | translate}}</a>\n        <a *ngIf=\"!canManageRoles\" class=\"btn btn-link btn-xs\" href=\"javascript:;\" (click)=\"editRole(row)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{'roles.management.Details' | translate}}</a>\n        {{canManageRoles ? '|' : ''}}\n        <a *ngIf=\"canManageRoles\" class=\"btn btn-link btn-xs\" href=\"javascript:;\" (click)=\"deleteRole(row)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> {{'roles.management.Delete' | translate}}</a>\n    </ng-template>\n\n\n    <div class=\"modal fade\" bsModal #editorModal=\"bs-modal\" (onHidden)=\"onEditorModalHidden()\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 *ngIf=\"!canManageRoles\" class=\"modal-title pull-left\"><i class=\"fa fa-shield\"></i> {{'roles.management.RoleDetails' | translate}} \"{{editingRoleName}}\"</h4>\n                    <h4 *ngIf=\"canManageRoles\" class=\"modal-title pull-left\"><i class=\"fa fa-shield\"></i> {{editingRoleName ? ('roles.management.EditRole' | translate:editingRoleName) : ('roles.management.NewRole' | translate)}}</h4>\n                    <button type=\"button\" class=\"close pull-right\" title=\"Close\" (click)=\"editorModal.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <role-editor #roleEditor></role-editor>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/roles-management.component.ts":
/*!*************************************************************************!*\
  !*** ./ClientApp/app/components/controls/roles-management.component.ts ***!
  \*************************************************************************/
/*! exports provided: RolesManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesManagementComponent", function() { return RolesManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alert.service */ "./ClientApp/app/services/alert.service.ts");
/* harmony import */ var _services_app_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app-translation.service */ "./ClientApp/app/services/app-translation.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/account.service */ "./ClientApp/app/services/account.service.ts");
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utilities */ "./ClientApp/app/services/utilities.ts");
/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/role.model */ "./ClientApp/app/models/role.model.ts");
/* harmony import */ var _models_permission_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/permission.model */ "./ClientApp/app/models/permission.model.ts");
/* harmony import */ var _role_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./role-editor.component */ "./ClientApp/app/components/controls/role-editor.component.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RolesManagementComponent = /** @class */ (function () {
    function RolesManagementComponent(alertService, translationService, accountService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.columns = [];
        this.rows = [];
        this.rowsCache = [];
        this.allPermissions = [];
    }
    RolesManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        var gT = function (key) { return _this.translationService.getTranslation(key); };
        this.columns = [
            { prop: "index", name: '#', width: 50, cellTemplate: this.indexTemplate, canAutoResize: false },
            { prop: 'name', name: gT('roles.management.Name'), width: 200 },
            { prop: 'description', name: gT('roles.management.Description'), width: 350 },
            { prop: 'usersCount', name: gT('roles.management.Users'), width: 80 },
            { name: '', width: 130, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
        this.loadData();
    };
    RolesManagementComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.roleEditor.changesSavedCallback = function () {
            _this.addNewRoleToList();
            _this.editorModal.hide();
        };
        this.roleEditor.changesCancelledCallback = function () {
            _this.editedRole = null;
            _this.sourceRole = null;
            _this.editorModal.hide();
        };
    };
    RolesManagementComponent.prototype.addNewRoleToList = function () {
        if (this.sourceRole) {
            Object.assign(this.sourceRole, this.editedRole);
            var sourceIndex = this.rowsCache.indexOf(this.sourceRole, 0);
            if (sourceIndex > -1)
                _services_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].moveArrayItem(this.rowsCache, sourceIndex, 0);
            sourceIndex = this.rows.indexOf(this.sourceRole, 0);
            if (sourceIndex > -1)
                _services_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].moveArrayItem(this.rows, sourceIndex, 0);
            this.editedRole = null;
            this.sourceRole = null;
        }
        else {
            var role = new _models_role_model__WEBPACK_IMPORTED_MODULE_6__["Role"]();
            Object.assign(role, this.editedRole);
            this.editedRole = null;
            var maxIndex = 0;
            for (var _i = 0, _a = this.rowsCache; _i < _a.length; _i++) {
                var r = _a[_i];
                if (r.index > maxIndex)
                    maxIndex = r.index;
            }
            role.index = maxIndex + 1;
            this.rowsCache.splice(0, 0, role);
            this.rows.splice(0, 0, role);
        }
    };
    RolesManagementComponent.prototype.loadData = function () {
        var _this = this;
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        this.accountService.getRolesAndPermissions()
            .subscribe(function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            var roles = results[0];
            var permissions = results[1];
            // roles.forEach((role, index, roles) => {
            //     (<any>role).index = index + 1;
            // });
            // this.rowsCache = [...roles];
            // this.rows = roles;
            // this.allPermissions = permissions;
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage("Load Error", "Unable to retrieve roles from the server.\r\nErrors: \"" + _services_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].getHttpResponseMessage(error) + "\"", _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["MessageSeverity"].error, error);
        });
    };
    RolesManagementComponent.prototype.onSearchChanged = function (value) {
        this.rows = this.rowsCache.filter(function (r) { return _services_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].searchArray(value, false, r.name, r.description); });
    };
    RolesManagementComponent.prototype.onEditorModalHidden = function () {
        this.editingRoleName = null;
        this.roleEditor.resetForm(true);
    };
    RolesManagementComponent.prototype.newRole = function () {
        this.editingRoleName = null;
        this.sourceRole = null;
        this.editedRole = this.roleEditor.newRole(this.allPermissions);
        this.editorModal.show();
    };
    RolesManagementComponent.prototype.editRole = function (row) {
        this.editingRoleName = { name: row.name };
        this.sourceRole = row;
        this.editedRole = this.roleEditor.editRole(row, this.allPermissions);
        this.editorModal.show();
    };
    RolesManagementComponent.prototype.deleteRole = function (row) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete the \"' + row.name + '\" role?', _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["DialogType"].confirm, function () { return _this.deleteRoleHelper(row); });
    };
    RolesManagementComponent.prototype.deleteRoleHelper = function (row) {
        var _this = this;
        this.alertService.startLoadingMessage("Deleting...");
        this.loadingIndicator = true;
        this.accountService.deleteRole(row)
            .subscribe(function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.rowsCache = _this.rowsCache.filter(function (item) { return item !== row; });
            _this.rows = _this.rows.filter(function (item) { return item !== row; });
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage("Delete Error", "An error occured whilst deleting the role.\r\nError: \"" + _services_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].getHttpResponseMessage(error) + "\"", _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["MessageSeverity"].error, error);
        });
    };
    Object.defineProperty(RolesManagementComponent.prototype, "canManageRoles", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_7__["Permission"].manageRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('indexTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], RolesManagementComponent.prototype, "indexTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('actionsTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], RolesManagementComponent.prototype, "actionsTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editorModal'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], RolesManagementComponent.prototype, "editorModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('roleEditor'),
        __metadata("design:type", _role_editor_component__WEBPACK_IMPORTED_MODULE_8__["RoleEditorComponent"])
    ], RolesManagementComponent.prototype, "roleEditor", void 0);
    RolesManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'roles-management',
            template: __webpack_require__(/*! ./roles-management.component.html */ "./ClientApp/app/components/controls/roles-management.component.html"),
            styles: [__webpack_require__(/*! ./roles-management.component.css */ "./ClientApp/app/components/controls/roles-management.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _services_app_translation_service__WEBPACK_IMPORTED_MODULE_3__["AppTranslationService"], _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
    ], RolesManagementComponent);
    return RolesManagementComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/controls/search-box.component.css":
/*!********************************************************************!*\
  !*** ./ClientApp/app/components/controls/search-box.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.search-icon {\n    pointer-events: none;\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/search-box.component.html":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/components/controls/search-box.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"icon-addon addon-sm\">\n    <label for=\"searchInput\" title=\"Search\"><i class=\"fa fa-search left-icon search-icon\"></i></label>\n    <input id=\"searchInput\" #searchInput type=\"search\" ngModel=\"\" (ngModelChange)=\"onValueChange($event)\" [attr.placeholder]=\"placeholder\" class=\"form-control left-icon right-icon\">\n    <a *ngIf=\"searchInput.value\" href=\"javascript:;\" title=\"Clear\" (click)=\"clear()\" class=\"fa fa-times-circle clear-input right-icon\"></a>\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/controls/search-box.component.ts":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/components/controls/search-box.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent() {
        this.placeholder = "Search...";
        this.searchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchBoxComponent.prototype.onValueChange = function (value) {
        var _this = this;
        setTimeout(function () { return _this.searchChange.emit(value); });
    };
    SearchBoxComponent.prototype.clear = function () {
        this.searchInput.nativeElement.value = '';
        this.onValueChange(this.searchInput.nativeElement.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchBoxComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBoxComponent.prototype, "searchChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("searchInput"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchBoxComponent.prototype, "searchInput", void 0);
    SearchBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-box',
            template: __webpack_require__(/*! ./search-box.component.html */ "./ClientApp/app/components/controls/search-box.component.html"),
            styles: [__webpack_require__(/*! ./search-box.component.css */ "./ClientApp/app/components/controls/search-box.component.css")]
        })
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/controls/statistics-demo.component.css":
/*!*************************************************************************!*\
  !*** ./ClientApp/app/components/controls/statistics-demo.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.chart-container {\n    display: block;\n}\n\n.table-container {\n}\n\n.refresh-btn {\n    margin-right: 10px;\n}\n\n.chart-type-container {\n    display: inline-block;\n}\n\nli.active2 {\n    background-color: #e8e8e8;\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/statistics-demo.component.html":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/components/controls/statistics-demo.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"chart-container\">\n            <canvas baseChart width=\"600\" height=\"250\"\n                    [datasets]=\"chartData\"\n                    [labels]=\"chartLabels\"\n                    [options]=\"chartOptions\"\n                    [colors]=\"chartColors\"\n                    [legend]=\"chartLegend\"\n                    [chartType]=\"chartType\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n    </div>\n    <div class=\"col-md-6 table-container\">\n        <table class=\"table table-responsive table-condensed\">\n            <thead>\n                <tr>\n                    <th></th>\n                    <th *ngFor=\"let label of chartLabels\">{{label}}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let d of chartData\">\n                    <th>{{d && d.label.split(' ').pop()}}</th>\n                    <td *ngFor=\"let label of chartLabels; let j=index\">{{d && d.data[j]}}</td>\n                </tr>\n            </tbody>\n        </table>\n        <button class=\"refresh-btn\" (click)=\"randomize();showMessage('Manual refresh!');\">REFSH</button>\n        <div class=\"chart-type-container\" dropdown>\n            <button id=\"chartType\" type=\"button\" dropdownToggle><i class=\"fa fa-bar-chart dropdown-toggle\"></i></button>\n            <ul *dropdownMenu role=\"menu\" aria-labelledby=\"chartType\" class=\"dropdown-menu\">\n                <li [class.active2]=\"chartType == 'bar'\" role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"changeChartType('bar')\" href=\"javascript:;\">Bar Chart</a></li>\n                <li [class.active2]=\"chartType == 'pie'\" role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"changeChartType('pie')\" href=\"javascript:;\">Pie Chart</a></li>\n                <li [class.active2]=\"chartType == 'doughnut'\" role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"changeChartType('doughnut')\" href=\"javascript:;\">Doughnut Chart</a></li>\n                <li [class.active2]=\"chartType == 'polarArea'\" role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"changeChartType('polarArea')\" href=\"javascript:;\">Polar Area Chart</a></li>\n                <li [class.active2]=\"chartType == 'radar'\" role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"changeChartType('radar')\" href=\"javascript:;\">Radar Chart</a></li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li [class.active2]=\"chartType == 'line'\" role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"changeChartType('line')\" href=\"javascript:;\">Line Chart</a></li>\n            </ul>\n        </div>\n        <button class=\"p1ull-right\" (click)=\"showMessage('You\\'ve clicked on the menu')\"><i class=\"fa fa-bars\"></i></button>\n        <button class=\"p1ull-right\" (click)=\"showDialog('Enter some value to do serious configuration...')\"><i class=\"fa fa-cogs\"></i></button>\n    </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/controls/statistics-demo.component.ts":
/*!************************************************************************!*\
  !*** ./ClientApp/app/components/controls/statistics-demo.component.ts ***!
  \************************************************************************/
/*! exports provided: StatisticsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsDemoComponent", function() { return StatisticsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alert.service */ "./ClientApp/app/services/alert.service.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


__webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
var StatisticsDemoComponent = /** @class */ (function () {
    function StatisticsDemoComponent(alertService) {
        this.alertService = alertService;
        this.chartData = [
            { data: [65, 59, 80, 81, 56, 55], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27], label: 'Series C' }
        ];
        this.chartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
        this.chartOptions = {
            responsive: true,
            title: {
                display: false,
                fontSize: 16,
                text: 'Important Stuff'
            }
        };
        this.chartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(128,128,128,0.2)',
                borderColor: 'rgba(128,128,128,1)',
                pointBackgroundColor: 'rgba(128,128,128,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(128,128,128,0.8)'
            }
        ];
        this.chartLegend = true;
        this.chartType = 'line';
    }
    StatisticsDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timerReference = setInterval(function () { return _this.randomize(); }, 5000);
    };
    StatisticsDemoComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timerReference);
    };
    StatisticsDemoComponent.prototype.randomize = function () {
        var _chartData = new Array(this.chartData.length);
        for (var i = 0; i < this.chartData.length; i++) {
            _chartData[i] = { data: new Array(this.chartData[i].data.length), label: this.chartData[i].label };
            for (var j = 0; j < this.chartData[i].data.length; j++) {
                _chartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.chartData = _chartData;
    };
    StatisticsDemoComponent.prototype.changeChartType = function (type) {
        this.chartType = type;
    };
    StatisticsDemoComponent.prototype.showMessage = function (msg) {
        this.alertService.showMessage("Demo", msg, _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].info);
    };
    StatisticsDemoComponent.prototype.showDialog = function (msg) {
        var _this = this;
        this.alertService.showDialog(msg, _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["DialogType"].prompt, function (val) { return _this.configure(true, val); }, function () { return _this.configure(false); });
    };
    StatisticsDemoComponent.prototype.configure = function (response, value) {
        var _this = this;
        if (response) {
            this.alertService.showStickyMessage("Simulating...", "", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].wait);
            setTimeout(function () {
                _this.alertService.resetStickyMessage();
                _this.alertService.showMessage("Demo", "Your settings was successfully configured to \"" + value + "\"", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].success);
            }, 2000);
        }
        else {
            this.alertService.showMessage("Demo", "Operation cancelled by user", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].default);
        }
    };
    // events
    StatisticsDemoComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    StatisticsDemoComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    StatisticsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'statistics-demo',
            template: __webpack_require__(/*! ./statistics-demo.component.html */ "./ClientApp/app/components/controls/statistics-demo.component.html"),
            styles: [__webpack_require__(/*! ./statistics-demo.component.css */ "./ClientApp/app/components/controls/statistics-demo.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], StatisticsDemoComponent);
    return StatisticsDemoComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/controls/todo-demo.component.css":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/components/controls/todo-demo.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.navbar .nav > li.toolbaritem > a {\n    font-weight: bold;\n}\n\ninput.form-control {\n    border-left-width: 5px;\n}\n\n.control-box {\n    margin-bottom: 5px;\n}\n\n.search-box {\n    margin: 0;\n}\n\n.action-box {\n    margin: 0 15px 0 0;\n    min-height: 0;\n}\n\n.action-box .toolbaritem a {\n        padding-top: 5px;\n        padding-bottom: 5px;\n        min-width: 100px;\n    }\n\n.completed {\n    text-decoration: line-through;\n}\n\n.checkbox {\n    margin: 0;\n}\n\n.inline-editor {\n    width: 100%;\n}\n\n.description-form-group {\n    margin-bottom: 5px;\n}\n\n.actionBtn-form-group {\n    margin: 0;\n}\n\n.edit-last-separator-hr {\n    margin: 10px 0;\n}\n\n@media (max-width: 768px) {\n    .action-box {\n        margin: 0 14px;\n    }\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/todo-demo.component.html":
/*!********************************************************************!*\
  !*** ./ClientApp/app/components/controls/todo-demo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row control-box\">\n        <div class=\"col-sm-8\">\n            <div class=\"form-group search-box\">\n                <search-box (searchChange)=\"onSearchChanged($event)\" placeholder=\"{{'todoDemo.management.Search' | translate}}\"></search-box>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"navbar action-box\">\n                <ul class=\"nav navbar-nav\">\n                    <li [class.active]=\"hideCompletedTasks\" class=\"toolbaritem\"><a href=\"javascript:;\" (click)=\"hideCompletedTasks = !hideCompletedTasks\"><i class=\"fa fa-eye-slash\"></i> {{'todoDemo.management.HideCompleted' | translate}}</a></li>\n                    <li class=\"toolbaritem\"><a href=\"javascript:;\" (click)=\"addTask()\"><i class=\"fa fa-plus\"></i> {{'todoDemo.management.AddTask' | translate}}</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <ngx-datatable class=\"material colored-header sm table-hover\"\n                   [loadingIndicator]=\"loadingIndicator\"\n                   [rows]=\"rows\"\n                   [rowHeight]=\"35\"\n                   [headerHeight]=\"35\"\n                   [footerHeight]=\"35\"\n                   [columns]=\"columns\"\n                   [scrollbarV]=\"verticalScrollbar\"\n                   [columnMode]=\"'force'\">\n    </ngx-datatable>\n\n    <ng-template #statusHeaderTemplate>\n        <i class=\"fa fa-check-square-o\"></i>\n    </ng-template>\n\n    <ng-template #statusTemplate let-row=\"row\" let-value=\"value\">\n        <div class=\"checkbox\">\n            <label>\n                <input attr.name=\"checkboxes-{{value}}\" type=\"checkbox\" [(ngModel)]=\"row.completed\">\n            </label>\n        </div>\n    </ng-template>\n\n    <ng-template #nameTemplate let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\">\n        <span *ngIf=\"!editing[rowIndex+ '-name']\" [class.completed]=\"row.completed\" attr.title=\"{{value}}\" (dblclick)=\"editing[rowIndex + '-name'] = true\">\n            {{value}}\n        </span>\n        <input *ngIf=\"editing[rowIndex + '-name']\" class=\"inline-editor\" autofocus (blur)=\"updateValue($event, 'name', value, rowIndex)\" type=\"text\" [value]=\"value\" />\n    </ng-template>\n\n    <ng-template #descriptionTemplate let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\">\n        <span *ngIf=\"!editing[rowIndex+ '-description']\" [class.completed]=\"row.completed\" attr.title=\"{{value}}\" (dblclick)=\"editing[rowIndex + '-description'] = true\">\n            {{value}}\n        </span>\n        <input *ngIf=\"editing[rowIndex+ '-description']\" class=\"inline-editor\" autofocus (blur)=\"updateValue($event, 'description', value, rowIndex)\" type=\"text\" [value]=\"value\" />\n    </ng-template>\n\n\n    <ng-template #actionsTemplate let-row=\"row\">\n        <a class=\"btn btn-link btn-xs\" href=\"javascript:;\" tooltip=\"{{'todoDemo.management.Delete' | translate}}\" container=\"body\" (click)=\"delete(row)\"><i class=\"fa fa-times\"></i></a>\n        <a class=\"btn btn-link btn-xs\" href=\"javascript:;\" tooltip=\"{{'todoDemo.management.Important' | translate}}\" container=\"body\" (click)=\"row.important = !row.important\" (mouseover)=\"row.isMouseOver=true\" (mouseout)=\"row.isMouseOver=false\">\n            <i *ngIf=\"row.important || row.isMouseOver\" class=\"fa fa-bookmark\"></i>\n            <i *ngIf=\"!row.important && !row.isMouseOver\" class=\"fa fa-bookmark-o\"></i>\n        </a>\n    </ng-template>\n\n\n\n\n\n    <div class=\"modal fade\" bsModal #editorModal=\"bs-modal\" tabindex=\"-1\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title pull-left\"><i class=\"fa fa-tasks\"></i> {{'todoDemo.editor.NewTask' | translate}}</h4>\n                    <button type=\"button\" class=\"close pull-right\" title=\"Close\" (click)=\"editorModal.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form *ngIf=\"formResetToggle\" class=\"form-horizontal\" name=\"taskEditorForm\" #f=\"ngForm\" novalidate\n                          (ngSubmit)=\"f.form.valid ? save() :\n                      (!taskName.valid && showErrorAlert('Task name is required', 'Please enter a name for the task'));\">\n\n\n                        <div class=\"form-group has-feedback\">\n                            <label class=\"control-label col-md-2\" for=\"taskName\">{{'todoDemo.editor.Name' | translate}}:</label>\n                            <div class=\"col-md-10\" [ngClass]=\"{'has-success': f.submitted && taskName.valid, 'has-error' : f.submitted && !taskName.valid}\">\n                                <input autofocus type=\"text\" id=\"taskName\" name=\"taskName\" placeholder=\"Enter task name\" class=\"form-control\" [(ngModel)]=\"taskEdit.name\" #taskName=\"ngModel\" required />\n                                <span *ngIf=\"f.submitted\" class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok ':taskName.valid, 'glyphicon-remove' : !taskName.valid}\"></span>\n                                <span *ngIf=\"f.submitted && !taskName.valid\" class=\"errorMessage\">\n                                    {{'todoDemo.editor.TaskNameRequired' | translate}}\n                                </span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group description-form-group\">\n                            <label class=\"control-label col-md-2\" for=\"taskDescription\">{{'todoDemo.editor.Description' | translate}}:</label>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" id=\"taskDescription\" name=\"taskDescription\" placeholder=\"Enter task description\" class=\"form-control\" [(ngModel)]=\"taskEdit.description\" />\n                            </div>\n                        </div>\n                        <label class=\"control-label col-md-2\"> </label>\n                        <div class=\"col-md-7\">\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input name=\"isImportant\" type=\"checkbox\" [(ngModel)]=\"taskEdit.important\">\n                                    {{'todoDemo.editor.Important' | translate}}\n                                </label>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-12\">\n                            <hr class=\"edit-last-separator-hr\" />\n                        </div>\n\n\n                        <div class=\"form-group actionBtn-form-group\">\n                            <div class=\"pull-right\">\n                                <button type=\"submit\" class=\"btn btn-primary\">{{'todoDemo.editor.AddTask' | translate}}</button>\n                            </div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/controls/todo-demo.component.ts":
/*!******************************************************************!*\
  !*** ./ClientApp/app/components/controls/todo-demo.component.ts ***!
  \******************************************************************/
/*! exports provided: TodoDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDemoComponent", function() { return TodoDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./ClientApp/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./ClientApp/app/services/alert.service.ts");
/* harmony import */ var _services_app_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app-translation.service */ "./ClientApp/app/services/app-translation.service.ts");
/* harmony import */ var _services_local_store_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/local-store-manager.service */ "./ClientApp/app/services/local-store-manager.service.ts");
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utilities */ "./ClientApp/app/services/utilities.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TodoDemoComponent = /** @class */ (function () {
    function TodoDemoComponent(alertService, translationService, localStorage, authService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.localStorage = localStorage;
        this.authService = authService;
        this.rows = [];
        this.rowsCache = [];
        this.columns = [];
        this.editing = {};
        this.taskEdit = {};
        this.isDataLoaded = false;
        this.loadingIndicator = true;
        this.formResetToggle = true;
        this._hideCompletedTasks = false;
        this.verticalScrollbar = false;
    }
    TodoDemoComponent_1 = TodoDemoComponent;
    Object.defineProperty(TodoDemoComponent.prototype, "currentUserId", {
        get: function () {
            if (this.authService.currentUser)
                this._currentUserId = this.authService.currentUser.id;
            return this._currentUserId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoDemoComponent.prototype, "hideCompletedTasks", {
        get: function () {
            return this._hideCompletedTasks;
        },
        set: function (value) {
            if (value) {
                this.rows = this.rowsCache.filter(function (r) { return !r.completed; });
            }
            else {
                this.rows = this.rowsCache.slice();
            }
            this._hideCompletedTasks = value;
        },
        enumerable: true,
        configurable: true
    });
    TodoDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.fetch(function (data) {
            _this.rows = data;
            _this.rowsCache = data.slice();
            _this.isDataLoaded = true;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
        var gT = function (key) { return _this.translationService.getTranslation(key); };
        this.columns = [
            { prop: "completed", name: '', width: 30, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
            { prop: 'name', name: gT('todoDemo.management.Task'), cellTemplate: this.nameTemplate, width: 200 },
            { prop: 'description', name: gT('todoDemo.management.Description'), cellTemplate: this.descriptionTemplate, width: 500 },
            { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
    };
    TodoDemoComponent.prototype.ngOnDestroy = function () {
        this.saveToDisk();
    };
    TodoDemoComponent.prototype.fetch = function (cb) {
        var _this = this;
        var data = this.getFromDisk();
        if (data == null) {
            setTimeout(function () {
                data = _this.getFromDisk();
                if (data == null) {
                    data = [
                        { "completed": true, "important": true, "name": "Create visual studio extension", "description": "Create a visual studio VSIX extension package that will add this project as an aspnet-core project template" },
                        { "completed": false, "important": true, "name": "Do a quick how-to writeup", "description": "" },
                        {
                            "completed": false, "important": false, "name": "Create aspnet-core/angular2 tutorials based on this project", "description": "Create tutorials (blog/video/youtube) on how to build applications (full stack)" +
                                " using aspnet-core/angular2. The tutorial will focus on getting productive with the technology right away rather than the details on how and why they work so audience can get onboard quickly."
                        },
                    ];
                }
                cb(data);
            }, 1000);
        }
        else {
            cb(data);
        }
    };
    TodoDemoComponent.prototype.onSearchChanged = function (value) {
        this.rows = this.rowsCache.filter(function (r) { return _services_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].searchArray(value, false, r.name, r.description) || value == 'important' && r.important || value == 'not important' && !r.important; });
    };
    TodoDemoComponent.prototype.showErrorAlert = function (caption, message) {
        this.alertService.showMessage(caption, message, _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["MessageSeverity"].error);
    };
    TodoDemoComponent.prototype.addTask = function () {
        var _this = this;
        this.formResetToggle = false;
        setTimeout(function () {
            _this.formResetToggle = true;
            _this.taskEdit = {};
            _this.editorModal.show();
        });
    };
    TodoDemoComponent.prototype.save = function () {
        this.rowsCache.splice(0, 0, this.taskEdit);
        this.rows.splice(0, 0, this.taskEdit);
        this.saveToDisk();
        this.editorModal.hide();
    };
    TodoDemoComponent.prototype.updateValue = function (event, cell, cellValue, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.saveToDisk();
    };
    TodoDemoComponent.prototype.delete = function (row) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete the task?', _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["DialogType"].confirm, function () { return _this.deleteHelper(row); });
    };
    TodoDemoComponent.prototype.deleteHelper = function (row) {
        this.rowsCache = this.rowsCache.filter(function (item) { return item !== row; });
        this.rows = this.rows.filter(function (item) { return item !== row; });
        this.saveToDisk();
    };
    TodoDemoComponent.prototype.getFromDisk = function () {
        return this.localStorage.getDataObject(TodoDemoComponent_1.DBKeyTodoDemo + ":" + this.currentUserId);
    };
    TodoDemoComponent.prototype.saveToDisk = function () {
        if (this.isDataLoaded)
            this.localStorage.saveSyncedSessionData(this.rowsCache, TodoDemoComponent_1.DBKeyTodoDemo + ":" + this.currentUserId);
    };
    TodoDemoComponent.DBKeyTodoDemo = "todo-demo.todo_list";
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TodoDemoComponent.prototype, "verticalScrollbar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('statusHeaderTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TodoDemoComponent.prototype, "statusHeaderTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('statusTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TodoDemoComponent.prototype, "statusTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TodoDemoComponent.prototype, "nameTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('descriptionTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TodoDemoComponent.prototype, "descriptionTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('actionsTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TodoDemoComponent.prototype, "actionsTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editorModal'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], TodoDemoComponent.prototype, "editorModal", void 0);
    TodoDemoComponent = TodoDemoComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'todo-demo',
            template: __webpack_require__(/*! ./todo-demo.component.html */ "./ClientApp/app/components/controls/todo-demo.component.html"),
            styles: [__webpack_require__(/*! ./todo-demo.component.css */ "./ClientApp/app/components/controls/todo-demo.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _services_app_translation_service__WEBPACK_IMPORTED_MODULE_4__["AppTranslationService"], _services_local_store_manager_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreManager"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TodoDemoComponent);
    return TodoDemoComponent;
    var TodoDemoComponent_1;
}());



/***/ }),

/***/ "./ClientApp/app/components/controls/user-info.component.css":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/components/controls/user-info.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row:not(:last-child) {\n    /*border-bottom: 1px solid #ccc;*/\n}\n\n.separator-hr {\n    margin: 0 5px;\n    border-top-style: dashed;\n}\n\n.edit-separator-hr {\n    margin: 10px 5px;\n    border-top-style: dashed;\n}\n\n.last-separator-hr {\n    margin-top: 5px;\n}\n\n.edit-last-separator-hr {\n    margin-top: 15px;\n}\n\n.password-separator-hr {\n    margin: 5px;\n    border-style: none;\n}\n\n.form-group {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\ninput.form-control {\n    border-left-width: 5px;\n}\n\n.password-well {\n    margin-bottom: 0;\n}\n\n.hint-sm {\n    display: block;\n}\n\n.checkbox.user-enabled {\n    display: inline-block;\n}\n\n.unblock-user {\n    margin-left: 34px;\n}\n\n@media (min-width: 992px) {\n    .user-enabled {\n        margin-left: 40px;\n    }\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/user-info.component.html":
/*!********************************************************************!*\
  !*** ./ClientApp/app/components/controls/user-info.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <form *ngIf=\"formResetToggle\" [attr.autocomplete]=\"isGeneralEditor ? NaN : null\" class=\"form-horizontal\" name=\"userInfoForm\" #f=\"ngForm\" novalidate\n          (ngSubmit)=\"f.form.valid ? save() :\n\n          (!userName.valid && showErrorAlert('User name is required', 'Please enter a user name (minimum of 2 and maximum of 200 characters)'));\n\n          (userPassword && !userPassword.valid && showErrorAlert('Password is required', 'Please enter the current password'));\n\n          (email.errors?.required && showErrorAlert('Email is required', 'Please enter an email address (maximum of 200 characters)'));\n          (email.errors?.pattern && showErrorAlert('Invalid Email', 'Please enter a valid email address'));\n\n          (isChangePassword && isEditingSelf && !currentPassword.valid && showErrorAlert('Current password is required', 'Please enter the current password'));\n\n          (isChangePassword && !newPassword.valid && showErrorAlert('New password is required', 'Please enter the new password (minimum of 6 characters)'));\n\n          (isChangePassword && confirmPassword.errors?.required && showErrorAlert('Confirmation password is required', 'Please enter the confirmation password'));\n          (isChangePassword && confirmPassword.errors?.validateEqual && showErrorAlert('Passwword mismatch', 'New password and comfirmation password do not match'));\n\n          (canAssignRoles && !roles.valid && showErrorAlert('Roles is required', 'Please select a minimum of 1 role'));\">\n\n        <div class=\"form-group\">\n            <label [class.col-md-3]=\"isViewOnly\" [class.col-md-2]=\"!isViewOnly\" class=\"control-label\" for=\"jobTitle-{{uniqueId}}\">{{'users.editor.JobTitle' | translate}}</label>\n            <div *ngIf=\"!isEditMode\" [class.col-md-9]=\"isViewOnly\" [class.col-md-10]=\"!isViewOnly\">\n                <p class=\"form-control-static\">{{user.jobTitle}}</p>\n            </div>\n            <div *ngIf=\"isEditMode\" [class.col-md-9]=\"isViewOnly\" [class.col-md-10]=\"!isViewOnly\">\n                <input autofocus type=\"text\" attr.id=\"jobTitle-{{uniqueId}}\" name=\"jobTitle\" placeholder=\"Enter Job Title\" class=\"form-control\" [(ngModel)]=\"userEdit.jobTitle\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n            </div>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n            <label [class.col-md-3]=\"isViewOnly\" [class.col-md-2]=\"!isViewOnly\" class=\"control-label\" for=\"userName-{{uniqueId}}\">{{'users.editor.UserName' | translate}}</label>\n            <div *ngIf=\"!isEditMode\" [class.col-md-9]=\"isViewOnly\" [class.col-md-10]=\"!isViewOnly\">\n                <p class=\"form-control-static\">{{user.userName}}</p>\n            </div>\n            <div *ngIf=\"isEditMode\" [class.col-md-9]=\"isViewOnly\" [class.col-md-10]=\"!isViewOnly\" [ngClass]=\"{'has-success': f.submitted && userName.valid, 'has-error' : f.submitted && !userName.valid}\">\n                <input type=\"text\" attr.id=\"userName-{{uniqueId}}\" name=\"userName\" [attr.autocomplete]=\"isGeneralEditor ? new-password : null\" placeholder=\"Enter user name\"\n                       class=\"form-control\" [(ngModel)]=\"userEdit.userName\" #userName=\"ngModel\" required minlength=\"2\" maxlength=\"200\" />\n                <span *ngIf=\"showValidationErrors && f.submitted\" class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok ': userName.valid, 'glyphicon-remove' : !userName.valid}\"></span>\n                <span *ngIf=\"showValidationErrors && f.submitted && !userName.valid\" class=\"errorMessage\">\n                    {{'users.editor.UserNameRequired' | translate}}\n                </span>\n            </div>\n        </div>\n\n        <div *ngIf=\"isEditMode && isEditingSelf && !isChangePassword && user.userName != userEdit.userName\" class=\"row\">\n            <div class=\"col-md-12\">\n                <hr class=\"password-separator-hr\" />\n            </div>\n        </div>\n        <div *ngIf=\"isEditMode && isEditingSelf && !isChangePassword && user.userName != userEdit.userName\" class=\"form-group has-feedback\">\n            <label class=\"control-label col-md-2\" for=\"userPassword-{{uniqueId}}\">{{'users.editor.Password' | translate}}</label>\n            <div class=\"col-md-10\" [ngClass]=\"{'has-success': f.submitted && userPassword.valid, 'has-error' : f.submitted && !userPassword.valid}\">\n                <input type=\"password\" attr.id=\"userPassword-{{uniqueId}}\" name=\"userPassword\" [attr.autocomplete]=\"isGeneralEditor ? new-password : null\" placeholder=\"Enter password\"\n                       class=\"form-control\" [(ngModel)]=\"userEdit.currentPassword\" #userPassword=\"ngModel\" required />\n                <small class=\"hint-sm\">{{'users.editor.PasswordHint' | translate}}</small>\n                <span *ngIf=\"showValidationErrors && f.submitted\" class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok ': userPassword.valid, 'glyphicon-remove' : !userPassword.valid}\"></span>\n                <span *ngIf=\"showValidationErrors && f.submitted && !userPassword.valid\" class=\"errorMessage\">\n                    {{'users.editor.CurrentPasswordRequired' | translate}}\n                </span>\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n            </div>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n            <label [class.col-md-3]=\"isViewOnly\" [class.col-md-2]=\"!isViewOnly\" class=\"control-label\" for=\"email-{{uniqueId}}\">{{'users.editor.Email' | translate}}</label>\n            <div *ngIf=\"!isEditMode\" [class.col-md-9]=\"isViewOnly\" [class.col-md-10]=\"!isViewOnly\">\n                <p class=\"form-control-static\">{{user.email}}</p>\n            </div>\n            <div *ngIf=\"isEditMode\" [class.col-md-9]=\"isViewOnly\" [class.col-md-10]=\"!isViewOnly\" [ngClass]=\"{'has-success': f.submitted && email.valid, 'has-error' : f.submitted && !email.valid}\">\n                <input type=\"text\" attr.id=\"email-{{uniqueId}}\" name=\"email\" placeholder=\"Enter email address\" class=\"form-control\" [(ngModel)]=\"userEdit.email\" #email=\"ngModel\"\n                       required maxlength=\"200\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\" />\n                <span *ngIf=\"showValidationErrors && f.submitted\" class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok ': email.valid, 'glyphicon-remove' : !email.valid}\"></span>\n                <span *ngIf=\"showValidationErrors && f.submitted && email.errors?.required\" class=\"errorMessage\">\n                    {{'users.editor.EmailRequired' | translate}}\n                </span>\n                <span *ngIf=\"showValidationErrors && f.submitted && email.errors?.pattern\" class=\"errorMessage\">\n                    {{'users.editor.InvalidEmail' | translate}}\n                </span>\n            </div>\n        </div>\n\n        <div *ngIf=\"isEditMode\" class=\"row\">\n            <div class=\"col-md-12\">\n                <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n            </div>\n        </div>\n\n        <div *ngIf=\"isEditMode\" class=\"form-group\">\n            <label for=\"newPassword-{{uniqueId}}\" class=\"control-label col-md-2\">{{'users.editor.Password' | translate}}</label>\n            <div *ngIf=\"!isChangePassword && !isNewUser\" class=\"col-md-10\">\n                <button type=\"button\" (click)=\"changePassword()\" class=\"btn btn-link\">{{'users.editor.ChangePassword' | translate}}</button>\n            </div>\n\n            <div *ngIf=\"isChangePassword || isNewUser\" class=\"col-md-10\">\n                <div class=\"password-well well well-sm\">\n                    <div *ngIf=\"isEditingSelf\" class=\"form-group has-feedback\">\n                        <label class=\"control-label col-md-3\" for=\"currentPassword-{{uniqueId}}\">{{'users.editor.CurrentPassword' | translate}}</label>\n                        <div class=\"col-md-9\" [ngClass]=\"{'has-success': f.submitted && currentPassword.valid, 'has-error' : f.submitted && !currentPassword.valid}\">\n                            <input type=\"password\" attr.id=\"currentPassword-{{uniqueId}}\" name=\"currentPassword\" [attr.autocomplete]=\"isGeneralEditor ? new-password : null\" placeholder=\"Enter current password\" class=\"form-control\" [(ngModel)]=\"userEdit.currentPassword\" #currentPassword=\"ngModel\"\n                                   required />\n                            <span *ngIf=\"showValidationErrors && f.submitted\" class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok ': currentPassword.valid, 'glyphicon-remove' : !currentPassword.valid}\"></span>\n                            <span *ngIf=\"showValidationErrors && f.submitted && !currentPassword.valid\" class=\"errorMessage\">\n                                {{'users.editor.CurrentPasswordRequired' | translate}}\n                            </span>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"!isNewUser\" class=\"row\">\n                        <div class=\"col-md-12\">\n                            <hr class=\"password-separator-hr\" />\n                        </div>\n                    </div>\n\n                    <div class=\"form-group has-feedback\">\n                        <label class=\"control-label col-md-3\" for=\"newPassword-{{uniqueId}}\">{{'users.editor.NewPassword' | translate}}</label>\n                        <div class=\"col-md-9\" [ngClass]=\"{'has-success': f.submitted && newPassword.valid, 'has-error' : f.submitted && !newPassword.valid}\">\n                            <input type=\"password\" attr.id=\"newPassword-{{uniqueId}}\" name=\"newPassword\" [attr.autocomplete]=\"isGeneralEditor ? new-password : null\" placeholder=\"Enter new password\" class=\"form-control\" [(ngModel)]=\"userEdit.newPassword\" #newPassword=\"ngModel\"\n                                   required minlength=\"6\" validateEqual=\"confirmPassword\" reverse=\"true\" />\n                            <span *ngIf=\"showValidationErrors && f.submitted\" class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok ': newPassword.valid, 'glyphicon-remove' : !newPassword.valid}\"></span>\n                            <span *ngIf=\"showValidationErrors && f.submitted && !newPassword.valid\" class=\"errorMessage\">\n                                {{'users.editor.NewPasswordRequired' | translate}}\n                            </span>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <hr class=\"password-separator-hr\" />\n                        </div>\n                    </div>\n\n                    <div class=\"form-group has-feedback\">\n                        <label class=\"control-label col-md-3\" for=\"confirmPassword-{{uniqueId}}\">{{'users.editor.ConfirmPassword' | translate}}</label>\n                        <div class=\"col-md-9\" [ngClass]=\"{'has-success': f.submitted && confirmPassword.valid, 'has-error' : f.submitted && !confirmPassword.valid}\">\n                            <input type=\"password\" attr.id=\"confirmPassword-{{uniqueId}}\" name=\"confirmPassword\" [attr.autocomplete]=\"isGeneralEditor ? new-password : null\" placeholder=\"Confirm new password\" class=\"form-control\" [(ngModel)]=\"userEdit.confirmPassword\" #confirmPassword=\"ngModel\"\n                                   required validateEqual=\"newPassword\" />\n                            <span *ngIf=\"showValidationErrors && f.submitted\" class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok ': confirmPassword.valid, 'glyphicon-remove' : !confirmPassword.valid}\"></span>\n                            <span *ngIf=\"showValidationErrors && f.submitted && confirmPassword.errors?.required\" class=\"errorMessage\">\n                                {{'users.editor.ConfirmationPasswordRequired' | translate}}\n                            </span>\n                            <span *ngIf=\"showValidationErrors && f.submitted && confirmPassword.errors?.validateEqual && !confirmPassword.errors?.required\" class=\"errorMessage\">\n                                {{'users.editor.PasswordMismatch' | translate}}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!--******************************************************************************************************-->\n\n        <div *ngIf=\"!isEditMode || canAssignRoles\" class=\"row\">\n            <div class=\"col-md-12\">\n                <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n            </div>\n        </div>\n\n        <div *ngIf=\"!isEditMode || canAssignRoles\" class=\"form-group has-feedback\">\n            <label [class.col-md-3]=\"isViewOnly\" [class.col-md-2]=\"!isViewOnly\" class=\"control-label\" for=\"roles-user-info\">{{'users.editor.Roles' | translate}}</label>\n            <div *ngIf=\"!isEditMode\" [class.col-md-9]=\"isViewOnly\" [class.col-md-10]=\"!isViewOnly\">\n                <p class=\"form-control-static\">\n                    <span *ngFor=\"let role of user.roles\">\n                        <span title='{{getRoleByName(role)?.description}}' class=\"badge\">{{role}}</span>\n                    </span>\n                </p>\n            </div>\n            <div *ngIf=\"isEditMode && canAssignRoles\" [class.col-md-9]=\"isViewOnly\" [class.col-md-10]=\"!isViewOnly\" [ngClass]=\"{'has-success': f.submitted && roles.valid, 'has-error' : f.submitted && !roles.valid}\">\n                <select id=\"roles-user-info\" name=\"roles\" [(ngModel)]=\"userEdit.roles\" #roles=\"ngModel\" #rolesSelector=\"bootstrap-select\" class=\"selectpicker form-control\" bootstrapSelect required multiple\n                        data-live-search=\"true\" data-actions-box=\"false\" data-live-search-placeholder=\"Search...\" title=\"Select Roles\">\n                    <option *ngFor=\"let role of allRoles\" attr.data-content=\"<span title='{{role.description}}' class='badge'>{{role.name}}</span>\" attr.value=\"{{role.name}}\">\n                        {{role.name}}\n                    </option>\n                </select>\n                <span *ngIf=\"showValidationErrors && f.submitted\" class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok ': roles.valid, 'glyphicon-remove' : !roles.valid}\"></span>\n                <span *ngIf=\"showValidationErrors && f.submitted && !roles.valid\" class=\"errorMessage\">\n                    {{'users.editor.RoleRequired' | translate}}\n                </span>\n            </div>\n        </div>\n\n        <!--******************************************************************************************************-->\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label [class.col-md-3]=\"isViewOnly\" [class.col-md-2]=\"!isViewOnly\" class=\"control-label\" for=\"fullName-{{uniqueId}}\">{{'users.editor.FullName' | translate}}</label>\n            <div *ngIf=\"!isEditMode\" [class.col-md-9]=\"isViewOnly\" [class.col-md-10]=\"!isViewOnly\">\n                <p class=\"form-control-static\">{{user.fullName}}</p>\n            </div>\n            <div *ngIf=\"isEditMode\" [class.col-md-9]=\"isViewOnly\" [class.col-md-10]=\"!isViewOnly\">\n                <input type=\"text\" attr.id=\"fullName-{{uniqueId}}\" name=\"fullName\" placeholder=\"Enter full name\" class=\"form-control\" [(ngModel)]=\"userEdit.fullName\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n            </div>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n            <label [class.col-md-3]=\"isViewOnly\" [class.col-md-2]=\"!isViewOnly\" class=\"control-label\" for=\"phoneNumber-{{uniqueId}}\">{{'users.editor.PhoneNumber' | translate}}</label>\n            <div *ngIf=\"!isEditMode\" [class.col-md-9]=\"isViewOnly\" [class.col-md-10]=\"!isViewOnly\">\n                <p class=\"form-control-static\">{{user.phoneNumber}}</p>\n            </div>\n            <div *ngIf=\"isEditMode\" [class.col-md-9]=\"isViewOnly\" [class.col-md-10]=\"!isViewOnly\">\n                <input type=\"text\" attr.id=\"phoneNumber-{{uniqueId}}\" name=\"phoneNumber\" placeholder=\"Enter phone number\" class=\"form-control\" [(ngModel)]=\"userEdit.phoneNumber\" />\n            </div>\n        </div>\n\n        <div *ngIf=\"!isViewOnly\" class=\"row\">\n            <div class=\"col-md-12\">\n                <hr [class.last-separator-hr]=\"!isEditMode\" [class.edit-last-separator-hr]=\"isEditMode\" />\n            </div>\n        </div>\n\n        <div *ngIf=\"!isViewOnly\" class=\"form-group\">\n            <div class=\"col-sm-5\">\n                <div *ngIf=\"isGeneralEditor && isEditMode\" class=\"pull-left\">\n                    <div class=\"checkbox user-enabled\">\n                        <label>\n                            <input type=\"checkbox\" name=\"isEnabled\" [(ngModel)]=\"userEdit.isEnabled\">\n                            {{'users.editor.Enabled' | translate}}\n                        </label>\n                    </div>\n                    <button *ngIf=\"userEdit.isLockedOut\" type=\"button\" (click)=\"unlockUser()\" class=\"btn btn-warning unblock-user\" [disabled]=\"isSaving\"><i class='fa fa-unlock-alt'></i> {{'users.editor.Unblock' | translate}}</button>\n                </div>\n            </div>\n            <div class=\"col-sm-7\">\n                <div class=\"pull-right\">\n                    <button *ngIf=\"!isEditMode && isGeneralEditor\" type=\"button\" (click)=\"close()\" class=\"btn btn-default\"><i class='fa fa-close'></i> {{'users.editor.Close' | translate}}</button>\n                    <button *ngIf=\"!isEditMode && !isGeneralEditor\" type=\"button\" (click)=\"edit()\" class=\"btn btn-default\"><i class='fa fa-edit'></i> {{'users.editor.Edit' | translate}}</button>\n                    <button *ngIf=\"isEditMode\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-danger\" [disabled]=\"isSaving\"><i class='fa fa-times'></i> {{'users.editor.Cancel' | translate}}</button>\n                    <button *ngIf=\"isEditMode\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isSaving\">\n                        <i *ngIf=\"!isSaving\" class='fa fa-save'></i><i *ngIf=\"isSaving\" class='fa fa-circle-o-notch fa-spin'></i> {{isSaving ? ('users.editor.Saving' | translate) : ('users.editor.Save' | translate)}}\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/user-info.component.ts":
/*!******************************************************************!*\
  !*** ./ClientApp/app/components/controls/user-info.component.ts ***!
  \******************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alert.service */ "./ClientApp/app/services/alert.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ "./ClientApp/app/services/account.service.ts");
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utilities */ "./ClientApp/app/services/utilities.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user.model */ "./ClientApp/app/models/user.model.ts");
/* harmony import */ var _models_user_edit_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user-edit.model */ "./ClientApp/app/models/user-edit.model.ts");
/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/role.model */ "./ClientApp/app/models/role.model.ts");
/* harmony import */ var _models_permission_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/permission.model */ "./ClientApp/app/models/permission.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(alertService, accountService) {
        this.alertService = alertService;
        this.accountService = accountService;
        this.isEditMode = false;
        this.isNewUser = false;
        this.isSaving = false;
        this.isChangePassword = false;
        this.isEditingSelf = false;
        this.showValidationErrors = false;
        this.uniqueId = _services_utilities__WEBPACK_IMPORTED_MODULE_3__["Utilities"].uniqueId();
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.allRoles = [];
        this.formResetToggle = true;
        this.isGeneralEditor = false;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        if (!this.isGeneralEditor) {
            this.loadCurrentUserData();
        }
    };
    UserInfoComponent.prototype.loadCurrentUserData = function () {
        var _this = this;
        this.alertService.startLoadingMessage();
        if (this.canViewAllRoles) {
            this.accountService.getUserAndRoles().subscribe(function (results) { return _this.onCurrentUserDataLoadSuccessful(results[0], results[1]); }, function (error) { return _this.onCurrentUserDataLoadFailed(error); });
        }
        else {
            this.accountService.getUser().subscribe(function (user) { return _this.onCurrentUserDataLoadSuccessful(user, user.roles.map(function (x) { return new _models_role_model__WEBPACK_IMPORTED_MODULE_6__["Role"](x); })); }, function (error) { return _this.onCurrentUserDataLoadFailed(error); });
        }
    };
    UserInfoComponent.prototype.onCurrentUserDataLoadSuccessful = function (user, roles) {
        this.alertService.stopLoadingMessage();
        this.user = user;
        this.allRoles = roles;
    };
    UserInfoComponent.prototype.onCurrentUserDataLoadFailed = function (error) {
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage("Load Error", "Unable to retrieve user data from the server.\r\nErrors: \"" + _services_utilities__WEBPACK_IMPORTED_MODULE_3__["Utilities"].getHttpResponseMessage(error) + "\"", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
    };
    UserInfoComponent.prototype.getRoleByName = function (name) {
        return this.allRoles.find(function (r) { return r.name == name; });
    };
    UserInfoComponent.prototype.showErrorAlert = function (caption, message) {
        this.alertService.showMessage(caption, message, _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error);
    };
    UserInfoComponent.prototype.deletePasswordFromUser = function (user) {
        var userEdit = user;
        delete userEdit.currentPassword;
        delete userEdit.newPassword;
        delete userEdit.confirmPassword;
    };
    UserInfoComponent.prototype.edit = function () {
        if (!this.isGeneralEditor) {
            this.isEditingSelf = true;
            this.userEdit = new _models_user_edit_model__WEBPACK_IMPORTED_MODULE_5__["UserEdit"]();
            Object.assign(this.userEdit, this.user);
        }
        else {
            if (!this.userEdit)
                this.userEdit = new _models_user_edit_model__WEBPACK_IMPORTED_MODULE_5__["UserEdit"]();
            this.isEditingSelf = this.accountService.currentUser ? this.userEdit.id == this.accountService.currentUser.id : false;
        }
        this.isEditMode = true;
        this.showValidationErrors = true;
        this.isChangePassword = false;
    };
    UserInfoComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        this.alertService.startLoadingMessage("Saving changes...");
        if (this.isNewUser) {
            this.accountService.newUser(this.userEdit).subscribe(function (user) { return _this.saveSuccessHelper(user); }, function (error) { return _this.saveFailedHelper(error); });
        }
        else {
            this.accountService.updateUser(this.userEdit).subscribe(function (response) { return _this.saveSuccessHelper(); }, function (error) { return _this.saveFailedHelper(error); });
        }
    };
    UserInfoComponent.prototype.saveSuccessHelper = function (user) {
        this.testIsRoleUserCountChanged(this.user, this.userEdit);
        if (user)
            Object.assign(this.userEdit, user);
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.isChangePassword = false;
        this.showValidationErrors = false;
        this.deletePasswordFromUser(this.userEdit);
        Object.assign(this.user, this.userEdit);
        this.userEdit = new _models_user_edit_model__WEBPACK_IMPORTED_MODULE_5__["UserEdit"]();
        this.resetForm();
        if (this.isGeneralEditor) {
            if (this.isNewUser)
                this.alertService.showMessage("Success", "User \"" + this.user.userName + "\" was created successfully", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].success);
            else if (!this.isEditingSelf)
                this.alertService.showMessage("Success", "Changes to user \"" + this.user.userName + "\" was saved successfully", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].success);
        }
        if (this.isEditingSelf) {
            this.alertService.showMessage("Success", "Changes to your User Profile was saved successfully", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].success);
            this.refreshLoggedInUser();
        }
        this.isEditMode = false;
        if (this.changesSavedCallback)
            this.changesSavedCallback();
    };
    UserInfoComponent.prototype.saveFailedHelper = function (error) {
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage("Save Error", "The below errors occured whilst saving your changes:", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
        this.alertService.showStickyMessage(error, null, _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error);
        if (this.changesFailedCallback)
            this.changesFailedCallback();
    };
    UserInfoComponent.prototype.testIsRoleUserCountChanged = function (currentUser, editedUser) {
        var _this = this;
        var rolesAdded = this.isNewUser ? editedUser.roles : editedUser.roles.filter(function (role) { return currentUser.roles.indexOf(role) == -1; });
        var rolesRemoved = this.isNewUser ? [] : currentUser.roles.filter(function (role) { return editedUser.roles.indexOf(role) == -1; });
        var modifiedRoles = rolesAdded.concat(rolesRemoved);
        if (modifiedRoles.length)
            setTimeout(function () { return _this.accountService.onRolesUserCountChanged(modifiedRoles); });
    };
    UserInfoComponent.prototype.cancel = function () {
        if (this.isGeneralEditor)
            this.userEdit = this.user = new _models_user_edit_model__WEBPACK_IMPORTED_MODULE_5__["UserEdit"]();
        else
            this.userEdit = new _models_user_edit_model__WEBPACK_IMPORTED_MODULE_5__["UserEdit"]();
        this.showValidationErrors = false;
        this.resetForm();
        this.alertService.showMessage("Cancelled", "Operation cancelled by user", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].default);
        this.alertService.resetStickyMessage();
        if (!this.isGeneralEditor)
            this.isEditMode = false;
        if (this.changesCancelledCallback)
            this.changesCancelledCallback();
    };
    UserInfoComponent.prototype.close = function () {
        this.userEdit = this.user = new _models_user_edit_model__WEBPACK_IMPORTED_MODULE_5__["UserEdit"]();
        this.showValidationErrors = false;
        this.resetForm();
        this.isEditMode = false;
        if (this.changesSavedCallback)
            this.changesSavedCallback();
    };
    UserInfoComponent.prototype.refreshLoggedInUser = function () {
        var _this = this;
        this.accountService.refreshLoggedInUser()
            .subscribe(function (user) {
            _this.loadCurrentUserData();
        }, function (error) {
            _this.alertService.resetStickyMessage();
            _this.alertService.showStickyMessage("Refresh failed", "An error occured whilst refreshing logged in user information from the server", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
        });
    };
    UserInfoComponent.prototype.changePassword = function () {
        this.isChangePassword = true;
    };
    UserInfoComponent.prototype.unlockUser = function () {
        var _this = this;
        this.isSaving = true;
        this.alertService.startLoadingMessage("Unblocking user...");
        this.accountService.unblockUser(this.userEdit.id)
            .subscribe(function (response) {
            _this.isSaving = false;
            _this.userEdit.isLockedOut = false;
            _this.alertService.stopLoadingMessage();
            _this.alertService.showMessage("Success", "User has been successfully unblocked", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].success);
        }, function (error) {
            _this.isSaving = false;
            _this.alertService.stopLoadingMessage();
            _this.alertService.showStickyMessage("Unblock Error", "The below errors occured whilst unblocking the user:", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
            _this.alertService.showStickyMessage(error, null, _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error);
        });
    };
    UserInfoComponent.prototype.resetForm = function (replace) {
        var _this = this;
        if (replace === void 0) { replace = false; }
        this.isChangePassword = false;
        if (!replace) {
            this.form.reset();
        }
        else {
            this.formResetToggle = false;
            setTimeout(function () {
                _this.formResetToggle = true;
            });
        }
    };
    UserInfoComponent.prototype.newUser = function (allRoles) {
        this.isGeneralEditor = true;
        this.isNewUser = true;
        this.allRoles = allRoles.slice();
        this.editingUserName = null;
        this.user = this.userEdit = new _models_user_edit_model__WEBPACK_IMPORTED_MODULE_5__["UserEdit"]();
        this.userEdit.isEnabled = true;
        this.edit();
        return this.userEdit;
    };
    UserInfoComponent.prototype.editUser = function (user, allRoles) {
        if (user) {
            this.isGeneralEditor = true;
            this.isNewUser = false;
            this.setRoles(user, allRoles);
            this.editingUserName = user.userName;
            this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
            this.userEdit = new _models_user_edit_model__WEBPACK_IMPORTED_MODULE_5__["UserEdit"]();
            Object.assign(this.user, user);
            Object.assign(this.userEdit, user);
            this.edit();
            return this.userEdit;
        }
        else {
            return this.newUser(allRoles);
        }
    };
    UserInfoComponent.prototype.displayUser = function (user, allRoles) {
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        Object.assign(this.user, user);
        this.deletePasswordFromUser(this.user);
        this.setRoles(user, allRoles);
        this.isEditMode = false;
    };
    UserInfoComponent.prototype.setRoles = function (user, allRoles) {
        var _this = this;
        this.allRoles = allRoles ? allRoles.slice() : [];
        if (user.roles) {
            var _loop_1 = function (ur) {
                if (!this_1.allRoles.some(function (r) { return r.name == ur; }))
                    this_1.allRoles.unshift(new _models_role_model__WEBPACK_IMPORTED_MODULE_6__["Role"](ur));
            };
            var this_1 = this;
            for (var _i = 0, _a = user.roles; _i < _a.length; _i++) {
                var ur = _a[_i];
                _loop_1(ur);
            }
        }
        if (allRoles == null || this.allRoles.length != allRoles.length)
            setTimeout(function () { return _this.rolesSelector.refresh(); });
    };
    Object.defineProperty(UserInfoComponent.prototype, "canViewAllRoles", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_7__["Permission"].viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInfoComponent.prototype, "canAssignRoles", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_7__["Permission"].assignRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UserInfoComponent.prototype, "isViewOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "isGeneralEditor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userName'),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "userName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userPassword'),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "userPassword", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('email'),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "email", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('currentPassword'),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "currentPassword", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newPassword'),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "newPassword", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmPassword'),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "confirmPassword", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('roles'),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "roles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rolesSelector'),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "rolesSelector", void 0);
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./ClientApp/app/components/controls/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./ClientApp/app/components/controls/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"], _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/controls/user-preferences.component.css":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/components/controls/user-preferences.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.separator-hr {\n    margin: 7px 5px;\n    border-top-style: dashed;\n}\n\n.subseparator-hr {\n    margin: 7px 5px;\n    border-top-style: none;\n}\n\n.last-separator-hr {\n    margin-top: 7px;\n}\n\n.form-group {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.form-control-static {\n    min-height: 0;\n}\n\n.form-horizontal .checkbox {\n    padding-top: 0;\n}\n\n.col-reset-default {\n    padding-right: 0;\n}\n\n.col-set-default {\n    padding-left: 5px;\n}\n\n@media (min-width: 768px) {\n    .form-horizontal .control-label {\n        padding-top: 5px;\n    }\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/user-preferences.component.html":
/*!***************************************************************************!*\
  !*** ./ClientApp/app/components/controls/user-preferences.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-horizontal\">\n    <div class=\"form-group\">\n        <label for=\"refreshButton\" class=\"col-sm-3 control-label\">{{'preferences.ReloadPreferences' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <button id=\"refreshButton\" class=\"btn btn-default\" (click)=\"reloadFromServer()\">\n                <i class=\"fa fa-refresh\"></i>\n            </button>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-static text-muted small\">{{'preferences.ReloadPreferencesHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"language\" class=\"col-sm-3 control-label\">{{'preferences.Language' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <select id=\"language\" [(ngModel)]=\"configurations.language\" #languageSelector=\"bootstrap-select\" bootstrapSelect class=\"selectpicker form-control\">\n                <option data-subtext=\"(Default)\" value=\"en\">{{'preferences.English' | translate}}</option>\n                <option value=\"fr\">{{'preferences.French' | translate}}</option>\n                <option value=\"de\">{{'preferences.German' | translate}}</option>\n                <option value=\"pt\">{{'preferences.Portuguese' | translate}}</option>\n                <option value=\"ar\">{{'preferences.Arabic' | translate}}</option>\n                <option value=\"ko\">{{'preferences.Korean' | translate}}</option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-static text-muted small\">{{'preferences.LanguageHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"homePage\" class=\"col-sm-3 control-label\">{{'preferences.HomePage' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <select id=\"homePage\" [(ngModel)]=\"configurations.homeUrl\" #homePageSelector=\"bootstrap-select\" bootstrapSelect class=\"selectpicker form-control\">\n                <option data-icon=\"fa fa-tachometer\" data-subtext=\"(Default)\" value=\"/\">{{'preferences.Dashboard' | translate}}</option>\n                <option *ngIf=\"canViewCustomers\" data-icon=\"fa fa-handshake-o\" value=\"/customers\">{{'preferences.Customers' | translate}}</option>\n                <option *ngIf=\"canViewProducts\" data-icon=\"fa fa-truck\" value=\"/products\">{{'preferences.Products' | translate}}</option>\n                <option *ngIf=\"canViewOrders\" data-icon=\"fa fa-shopping-cart\" value=\"/orders\">{{'preferences.Orders' | translate}}</option>\n                <option data-icon=\"fa fa-info-circle\" value=\"/about\">{{'preferences.About' | translate}}</option>\n                <option data-icon=\"fa fa-cog\" value=\"/settings\">{{'preferences.Settings' | translate}}</option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-static text-muted small\">{{'preferences.HomePageHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"defaultTheme\" class=\"col-sm-3 control-label\">{{'preferences.Theme' | translate}} </label>\n        <div *ngIf=\"themeSelectorToggle\" class=\"col-sm-4\">\n            <select id=\"defaultTheme\" [(ngModel)]=\"configurations.theme\" bootstrapSelect class=\"selectpicker form-control\">\n                <option attr.data-content=\"{{'preferences.DefaultColor' | translate}}\">Default</option>\n                <option attr.data-content=\"{{'preferences.RedColor' | translate}}\">Red</option>\n                <option attr.data-content=\"{{'preferences.OrangeColor' | translate}}\">Orange</option>\n                <option attr.data-content=\"{{'preferences.GreenColor' | translate}}\">Green</option>\n                <option attr.data-content=\"{{'preferences.GrayColor' | translate}}\">Gray</option>\n                <option attr.data-content=\"{{'preferences.BlackColor' | translate}}\">Black</option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-static text-muted small\">{{'preferences.ThemeHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label class=\"col-sm-3 control-label\" for=\"dashboardStatistics\">{{'preferences.DashboardStatistics' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardStatistics\" [(ngModel)]=\"configurations.showDashboardStatistics\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-static text-muted small\">{{'preferences.DashboardStatisticsHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label class=\"col-sm-3 control-label\" for=\"dashboardTodo\">{{'preferences.DashboardNotifications' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardNotifications\" [(ngModel)]=\"configurations.showDashboardNotifications\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-static text-muted small\">{{'preferences.DashboardNotificationsHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label class=\"col-sm-3 control-label\" for=\"dashboardTodo\">{{'preferences.DashboardTodo' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardTodo\" [(ngModel)]=\"configurations.showDashboardTodo\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-static text-muted small\">{{'preferences.DashboardTodoHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label class=\"col-sm-3 control-label\" for=\"dashboardBanner\">{{'preferences.DashboardBanner' | translate}}</label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardBanner\" [(ngModel)]=\"configurations.showDashboardBanner\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-static text-muted small\">{{'preferences.DashboardBannerHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"last-separator-hr\" />\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <div class=\"col-sm-3\">\n\n        </div>\n        <div class=\"col-sm-9\">\n            <div class=\"row pull-left\">\n                <div class=\"col-sm-6 col-reset-default\">\n                    <button type=\"button\" (click)=\"resetDefault()\" class=\"btn btn-success\">\n                        <i class='fa fa-circle-o-notch'></i> {{'preferences.ResetDefault' | translate}}\n                    </button>\n                </div>\n                <div class=\"col-sm-6 col-set-default\">\n                    <button type=\"button\" (click)=\"setAsDefault()\" class=\"btn btn-primary\">\n                        <i class='fa fa-hdd-o'></i> {{'preferences.SetDefault' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/user-preferences.component.ts":
/*!*************************************************************************!*\
  !*** ./ClientApp/app/components/controls/user-preferences.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserPreferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPreferencesComponent", function() { return UserPreferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alert.service */ "./ClientApp/app/services/alert.service.ts");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/configuration.service */ "./ClientApp/app/services/configuration.service.ts");
/* harmony import */ var _services_app_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app-translation.service */ "./ClientApp/app/services/app-translation.service.ts");
/* harmony import */ var _directives_bootstrap_select_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/bootstrap-select.directive */ "./ClientApp/app/directives/bootstrap-select.directive.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/account.service */ "./ClientApp/app/services/account.service.ts");
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utilities */ "./ClientApp/app/services/utilities.ts");
/* harmony import */ var _models_permission_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/permission.model */ "./ClientApp/app/models/permission.model.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserPreferencesComponent = /** @class */ (function () {
    function UserPreferencesComponent(alertService, translationService, accountService, configurations) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.configurations = configurations;
        this.themeSelectorToggle = true;
    }
    UserPreferencesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageChangedSubscription = this.translationService.languageChangedEvent().subscribe(function (data) {
            _this.themeSelectorToggle = false;
            setTimeout(function () {
                _this.languageSelector.refresh();
                _this.homePageSelector.refresh();
                _this.themeSelectorToggle = true;
            });
        });
    };
    UserPreferencesComponent.prototype.ngOnDestroy = function () {
        this.languageChangedSubscription.unsubscribe();
    };
    UserPreferencesComponent.prototype.reloadFromServer = function () {
        var _this = this;
        this.alertService.startLoadingMessage();
        this.accountService.getUserPreferences()
            .subscribe(function (results) {
            _this.alertService.stopLoadingMessage();
            _this.configurations.import(results);
            _this.alertService.showMessage("Defaults loaded!", "", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].info);
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.alertService.showStickyMessage("Load Error", "Unable to retrieve user preferences from the server.\r\nErrors: \"" + _services_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].getHttpResponseMessage(error) + "\"", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
        });
    };
    UserPreferencesComponent.prototype.setAsDefault = function () {
        var _this = this;
        this.alertService.showDialog("Are you sure you want to set the current configuration as your new defaults?", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["DialogType"].confirm, function () { return _this.setAsDefaultHelper(); }, function () { return _this.alertService.showMessage("Operation Cancelled!", "", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].default); });
    };
    UserPreferencesComponent.prototype.setAsDefaultHelper = function () {
        var _this = this;
        this.alertService.startLoadingMessage("", "Saving new defaults");
        this.accountService.updateUserPreferences(this.configurations.export())
            .subscribe(function (response) {
            _this.alertService.stopLoadingMessage();
            _this.alertService.showMessage("New Defaults", "Account defaults updated successfully", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].success);
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.alertService.showStickyMessage("Save Error", "An error occured whilst saving configuration defaults.\r\nErrors: \"" + _services_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].getHttpResponseMessage(error) + "\"", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
        });
    };
    UserPreferencesComponent.prototype.resetDefault = function () {
        var _this = this;
        this.alertService.showDialog("Are you sure you want to reset your defaults?", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["DialogType"].confirm, function () { return _this.resetDefaultHelper(); }, function () { return _this.alertService.showMessage("Operation Cancelled!", "", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].default); });
    };
    UserPreferencesComponent.prototype.resetDefaultHelper = function () {
        var _this = this;
        this.alertService.startLoadingMessage("", "Resetting defaults");
        this.accountService.updateUserPreferences(null)
            .subscribe(function (response) {
            _this.alertService.stopLoadingMessage();
            _this.configurations.import(null);
            _this.alertService.showMessage("Defaults Reset", "Account defaults reset completed successfully", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].success);
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.alertService.showStickyMessage("Save Error", "An error occured whilst resetting configuration defaults.\r\nErrors: \"" + _services_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].getHttpResponseMessage(error) + "\"", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
        });
    };
    Object.defineProperty(UserPreferencesComponent.prototype, "canViewCustomers", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_7__["Permission"].viewUsersPermission); //eg. viewCustomersPermission
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPreferencesComponent.prototype, "canViewProducts", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_7__["Permission"].viewUsersPermission); //eg. viewProductsPermission
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPreferencesComponent.prototype, "canViewOrders", {
        get: function () {
            return true; //eg. viewOrdersPermission
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("languageSelector"),
        __metadata("design:type", _directives_bootstrap_select_directive__WEBPACK_IMPORTED_MODULE_4__["BootstrapSelectDirective"])
    ], UserPreferencesComponent.prototype, "languageSelector", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("homePageSelector"),
        __metadata("design:type", _directives_bootstrap_select_directive__WEBPACK_IMPORTED_MODULE_4__["BootstrapSelectDirective"])
    ], UserPreferencesComponent.prototype, "homePageSelector", void 0);
    UserPreferencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-preferences',
            template: __webpack_require__(/*! ./user-preferences.component.html */ "./ClientApp/app/components/controls/user-preferences.component.html"),
            styles: [__webpack_require__(/*! ./user-preferences.component.css */ "./ClientApp/app/components/controls/user-preferences.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"], _services_app_translation_service__WEBPACK_IMPORTED_MODULE_3__["AppTranslationService"], _services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"], _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
    ], UserPreferencesComponent);
    return UserPreferencesComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/controls/users-management.component.css":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/components/controls/users-management.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.user-role {\n    font-size: 0.8em !important;\n    margin-right: 1px;\n}\n\n.control-box {\n    margin-bottom: 5px;\n}\n\n.search-box {\n    margin: 0;\n}\n\n.action-box {\n    margin: 0 50px 0 0;\n    min-height: 0;\n}\n\n.action-box .toolbaritem a {\n        padding-top: 5px;\n        padding-bottom: 5px;\n        min-width: 100px;\n    }\n\n.user-disabled {\n    color: #777;\n    font-style: italic;\n}\n\n.locked-out {\n    background-color: orangered;\n    color: whitesmoke;\n    width: 100%;\n    display: inline-block;\n    padding-left: 5px;\n}\n\n@media (max-width: 768px) {\n    .action-box {\n        margin: 0 14px;\n    }\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/users-management.component.html":
/*!***************************************************************************!*\
  !*** ./ClientApp/app/components/controls/users-management.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row control-box\">\n        <div class=\"col-sm-8\">\n            <div class=\"form-group search-box\">\n                <search-box (searchChange)=\"onSearchChanged($event)\" placeholder=\"{{'users.management.Search' | translate}}\">></search-box>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"navbar action-box\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li *ngIf=\"canManageUsers && canAssignRoles\" class=\"toolbaritem\">\n                        <a href=\"javascript:;\" (click)=\"newUser(row)\">\n                            <i class=\"fa fa-plus-circle\"></i> {{'users.management.NewUser' | translate}}\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <ngx-datatable class=\"material colored-header sm table table-striped table-hover\"\n                   [loadingIndicator]=\"loadingIndicator\"\n                   [rows]=\"rows\"\n                   [rowHeight]=\"35\"\n                   [headerHeight]=\"35\"\n                   [footerHeight]=\"35\"\n                   [columns]=\"columns\"\n                   [scrollbarV]=\"true\"\n                   [columnMode]=\"'force'\">\n    </ngx-datatable>\n\n    <ng-template #indexTemplate let-value=\"value\">\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #userNameTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.locked-out]=\"row.isLockedOut\" [class.user-disabled]=\"!row.isEnabled\">\n            <i *ngIf=\"row.isLockedOut\" class=\"fa fa-exclamation-triangle\"> </i>\n            <i *ngIf=\"!row.isEnabled\" class=\"fa fa-exclamation\"> </i>\n            {{value}}\n        </span>\n    </ng-template>\n\n    <ng-template #rolesTemplate let-row=\"row\" let-value=\"value\" let-i=\"index\">\n        <span class=\"user-role badge\" *ngFor=\"let role of value\">{{role}}</span>\n    </ng-template>\n\n    <ng-template #actionsTemplate let-row=\"row\" let-value=\"value\" let-i=\"index\">\n        <div *ngIf=\"canManageUsers\">\n            <a class=\"btn btn-link btn-xs\" href=\"javascript:;\" (click)=\"editUser(row)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> {{'users.management.Edit' | translate}}</a>\n            |\n            <a class=\"btn btn-link btn-xs\" href=\"javascript:;\" (click)=\"deleteUser(row)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> {{'users.management.Delete' | translate}}</a>\n        </div>\n    </ng-template>\n\n\n    <div class=\"modal fade\" bsModal #editorModal=\"bs-modal\" (onHidden)=\"onEditorModalHidden()\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title pull-left\"><i class=\"fa fa-user-circle-o\"></i> {{editingUserName ? ('users.management.EditUser' | translate:editingUserName) : ('users.management.NewUser' | translate)}}</h4>\n                    <button type=\"button\" class=\"close pull-right\" title=\"Close\" (click)=\"editorModal.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <user-info #userEditor [isGeneralEditor]=\"true\"></user-info>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/controls/users-management.component.ts":
/*!*************************************************************************!*\
  !*** ./ClientApp/app/components/controls/users-management.component.ts ***!
  \*************************************************************************/
/*! exports provided: UsersManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersManagementComponent", function() { return UsersManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alert.service */ "./ClientApp/app/services/alert.service.ts");
/* harmony import */ var _services_app_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app-translation.service */ "./ClientApp/app/services/app-translation.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/account.service */ "./ClientApp/app/services/account.service.ts");
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utilities */ "./ClientApp/app/services/utilities.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/user.model */ "./ClientApp/app/models/user.model.ts");
/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/role.model */ "./ClientApp/app/models/role.model.ts");
/* harmony import */ var _models_permission_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/permission.model */ "./ClientApp/app/models/permission.model.ts");
/* harmony import */ var _user_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-info.component */ "./ClientApp/app/components/controls/user-info.component.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UsersManagementComponent = /** @class */ (function () {
    function UsersManagementComponent(alertService, translationService, accountService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.columns = [];
        this.rows = [];
        this.rowsCache = [];
        this.allRoles = [];
    }
    UsersManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        var gT = function (key) { return _this.translationService.getTranslation(key); };
        this.columns = [
            { prop: "index", name: '#', width: 40, cellTemplate: this.indexTemplate, canAutoResize: false },
            { prop: 'jobTitle', name: gT('users.management.Title'), width: 50 },
            { prop: 'userName', name: gT('users.management.UserName'), width: 90, cellTemplate: this.userNameTemplate },
            { prop: 'fullName', name: gT('users.management.FullName'), width: 120 },
            { prop: 'email', name: gT('users.management.Email'), width: 140 },
            { prop: 'roles', name: gT('users.management.Roles'), width: 120, cellTemplate: this.rolesTemplate },
            { prop: 'phoneNumber', name: gT('users.management.PhoneNumber'), width: 100 }
        ];
        if (this.canManageUsers)
            this.columns.push({ name: '', width: 130, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false });
        this.loadData();
    };
    UsersManagementComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.userEditor.changesSavedCallback = function () {
            _this.addNewUserToList();
            _this.editorModal.hide();
        };
        this.userEditor.changesCancelledCallback = function () {
            _this.editedUser = null;
            _this.sourceUser = null;
            _this.editorModal.hide();
        };
    };
    UsersManagementComponent.prototype.addNewUserToList = function () {
        if (this.sourceUser) {
            Object.assign(this.sourceUser, this.editedUser);
            var sourceIndex = this.rowsCache.indexOf(this.sourceUser, 0);
            if (sourceIndex > -1)
                _services_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].moveArrayItem(this.rowsCache, sourceIndex, 0);
            sourceIndex = this.rows.indexOf(this.sourceUser, 0);
            if (sourceIndex > -1)
                _services_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].moveArrayItem(this.rows, sourceIndex, 0);
            this.editedUser = null;
            this.sourceUser = null;
        }
        else {
            var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
            Object.assign(user, this.editedUser);
            this.editedUser = null;
            var maxIndex = 0;
            for (var _i = 0, _a = this.rowsCache; _i < _a.length; _i++) {
                var u = _a[_i];
                if (u.index > maxIndex)
                    maxIndex = u.index;
            }
            user.index = maxIndex + 1;
            this.rowsCache.splice(0, 0, user);
            this.rows.splice(0, 0, user);
        }
    };
    UsersManagementComponent.prototype.loadData = function () {
        var _this = this;
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        if (this.canViewRoles) {
            this.accountService.getUsersAndRoles().subscribe(function (results) { return _this.onDataLoadSuccessful(results[0], results[1]); }, function (error) { return _this.onDataLoadFailed(error); });
        }
        else {
            this.accountService.getUsers().subscribe(function (users) { return _this.onDataLoadSuccessful(users, _this.accountService.currentUser.roles.map(function (x) { return new _models_role_model__WEBPACK_IMPORTED_MODULE_7__["Role"](x); })); }, function (error) { return _this.onDataLoadFailed(error); });
        }
    };
    UsersManagementComponent.prototype.onDataLoadSuccessful = function (users, roles) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        users.forEach(function (user, index, users) {
            user.index = index + 1;
        });
        this.rowsCache = users.slice();
        this.rows = users;
        this.allRoles = roles;
    };
    UsersManagementComponent.prototype.onDataLoadFailed = function (error) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        this.alertService.showStickyMessage("Load Error", "Unable to retrieve users from the server.\r\nErrors: \"" + _services_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].getHttpResponseMessage(error) + "\"", _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["MessageSeverity"].error, error);
    };
    UsersManagementComponent.prototype.onSearchChanged = function (value) {
        this.rows = this.rowsCache.filter(function (r) { return _services_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].searchArray(value, false, r.userName, r.fullName, r.email, r.phoneNumber, r.jobTitle, r.roles); });
    };
    UsersManagementComponent.prototype.onEditorModalHidden = function () {
        this.editingUserName = null;
        this.userEditor.resetForm(true);
    };
    UsersManagementComponent.prototype.newUser = function () {
        this.editingUserName = null;
        this.sourceUser = null;
        this.editedUser = this.userEditor.newUser(this.allRoles);
        this.editorModal.show();
    };
    UsersManagementComponent.prototype.editUser = function (row) {
        this.editingUserName = { name: row.userName };
        this.sourceUser = row;
        this.editedUser = this.userEditor.editUser(row, this.allRoles);
        this.editorModal.show();
    };
    UsersManagementComponent.prototype.deleteUser = function (row) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete \"' + row.userName + '\"?', _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["DialogType"].confirm, function () { return _this.deleteUserHelper(row); });
    };
    UsersManagementComponent.prototype.deleteUserHelper = function (row) {
        var _this = this;
        this.alertService.startLoadingMessage("Deleting...");
        this.loadingIndicator = true;
        this.accountService.deleteUser(row)
            .subscribe(function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.rowsCache = _this.rowsCache.filter(function (item) { return item !== row; });
            _this.rows = _this.rows.filter(function (item) { return item !== row; });
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage("Delete Error", "An error occured whilst deleting the user.\r\nError: \"" + _services_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].getHttpResponseMessage(error) + "\"", _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["MessageSeverity"].error, error);
        });
    };
    Object.defineProperty(UsersManagementComponent.prototype, "canAssignRoles", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_8__["Permission"].assignRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersManagementComponent.prototype, "canViewRoles", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_8__["Permission"].viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersManagementComponent.prototype, "canManageUsers", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_8__["Permission"].manageUsersPermission);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('indexTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], UsersManagementComponent.prototype, "indexTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userNameTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], UsersManagementComponent.prototype, "userNameTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rolesTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], UsersManagementComponent.prototype, "rolesTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('actionsTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], UsersManagementComponent.prototype, "actionsTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editorModal'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], UsersManagementComponent.prototype, "editorModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userEditor'),
        __metadata("design:type", _user_info_component__WEBPACK_IMPORTED_MODULE_9__["UserInfoComponent"])
    ], UsersManagementComponent.prototype, "userEditor", void 0);
    UsersManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'users-management',
            template: __webpack_require__(/*! ./users-management.component.html */ "./ClientApp/app/components/controls/users-management.component.html"),
            styles: [__webpack_require__(/*! ./users-management.component.css */ "./ClientApp/app/components/controls/users-management.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _services_app_translation_service__WEBPACK_IMPORTED_MODULE_3__["AppTranslationService"], _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
    ], UsersManagementComponent);
    return UsersManagementComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/customers/customers.component.css":
/*!********************************************************************!*\
  !*** ./ClientApp/app/components/customers/customers.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/components/customers/customers.component.html":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/components/customers/customers.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header class=\"pageHeader\">\n        <h3><i class=\"fa fa-handshake-o fa-lg page-caption\" aria-hidden=\"true\"></i> {{'pageHeader.Customers' | translate}}</h3>\n    </header>\n\n    <div [@fadeInOut]>\n        <!---- Sample Page Content ---->\n        <todo-demo verticalScrollbar=\"true\"></todo-demo>\n    </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/customers/customers.component.ts":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/components/customers/customers.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/animations */ "./ClientApp/app/services/animations.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomersComponent = /** @class */ (function () {
    function CustomersComponent() {
    }
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./ClientApp/app/components/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./ClientApp/app/components/customers/customers.component.css")],
            animations: [_services_animations__WEBPACK_IMPORTED_MODULE_1__["fadeInOut"]]
        })
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/home/home.component.css":
/*!**********************************************************!*\
  !*** ./ClientApp/app/components/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.bottom-space {\n    margin-bottom: 40px;\n}\n\n.no-bottom-space {\n    margin-bottom: 0;\n}\n\n.statistics-close-btn {\n}\n\n.todo-close-btn {\n    margin: 0 10px -25px 0;\n    position: relative;\n    z-index: 1;\n}\n\n.banner-close-btn {\n    margin: 0 10px -25px 0;\n    position: relative;\n    z-index: 1;\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/home/home.component.html":
/*!***********************************************************!*\
  !*** ./ClientApp/app/components/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header class=\"pageHeader\">\n        <h3><i class=\"fa fa-tachometer fa-lg page-caption\" aria-hidden=\"true\"></i> {{'pageHeader.Dashboard' | translate}}</h3>\n    </header>\n\n    <div [@fadeInOut]>\n        <div *ngIf=\"!configurations.showDashboardStatistics && !configurations.showDashboardNotifications && !configurations.showDashboardTodo && !configurations.showDashboardBanner\" class=\"well well-lg\">\n            <h4 class=\"text-muted text-center\">\n                {{'home.NoWidgets1' | translate}} <a routerLink=\"/settings\" fragment=\"preferences\"><i class=\"fa fa-sliders\"></i> {{'settings.tab.Preferences' | translate}}</a>\n                {{'home.NoWidgets2' | translate}}\n            </h4>\n        </div>\n\n        <div *ngIf=\"configurations.showDashboardStatistics\" class=\"row bottom-space well well-sm\">\n            <h4 class=\"text-muted inline-block\">{{'home.StatisticsTitle' | translate}}</h4>\n            <button type=\"button\" class=\"close pull-right statistics-close-btn\" aria-label=\"Close\" title=\"Close\" (click)=\"configurations.showDashboardStatistics = false\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <div class=\"clearfix\"></div>\n            <statistics-demo></statistics-demo>\n        </div>\n\n        <div *ngIf=\"configurations.showDashboardNotifications\" class=\"row bottom-space\">\n            <button type=\"button\" class=\"close pull-right todo-close-btn\" aria-label=\"Close\" title=\"Close\" (click)=\"configurations.showDashboardNotifications = false\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <div class=\"clearfix\"></div>\n            <notifications-viewer></notifications-viewer>\n        </div>\n\n        <div *ngIf=\"configurations.showDashboardTodo\" class=\"row bottom-space\">\n            <button type=\"button\" class=\"close pull-right todo-close-btn\" aria-label=\"Close\" title=\"Close\" (click)=\"configurations.showDashboardTodo = false\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <div class=\"clearfix\"></div>\n            <todo-demo></todo-demo>\n        </div>\n\n        <div *ngIf=\"configurations.showDashboardBanner\" class=\"row no-bottom-space\">\n            <button type=\"button\" class=\"close pull-right banner-close-btn\" aria-label=\"Close\" title=\"Close\" (click)=\"configurations.showDashboardBanner = false\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <div class=\"clearfix\"></div>\n            <banner-demo></banner-demo>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./ClientApp/app/components/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/animations */ "./ClientApp/app/services/animations.ts");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/configuration.service */ "./ClientApp/app/services/configuration.service.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(configurations) {
        this.configurations = configurations;
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./ClientApp/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./ClientApp/app/components/home/home.component.css")],
            animations: [_services_animations__WEBPACK_IMPORTED_MODULE_1__["fadeInOut"]]
        }),
        __metadata("design:paramtypes", [_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/login/login.component.css":
/*!************************************************************!*\
  !*** ./ClientApp/app/components/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boxshadow {\n    position: relative;\n    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);\n    padding: 10px;\n    background: white;\n}\n\n\n    .boxshadow::after {\n        content: '';\n        position: absolute;\n        z-index: -1; /* hide shadow behind image */\n        box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);\n        width: 70%;\n        left: 15%; /* one half of the remaining 30% */\n        height: 100px;\n        bottom: 0;\n    }\n\n\n    .cardshadow {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n\n    .separator-hr {\n    margin: 0;\n}\n\n\n    .last-control-group {\n    margin-bottom: -25px;\n}\n\n\n    @media (min-width: 768px) {\n    .login-container {\n        width: 700px;\n    }\n}\n\n\n    /*@media (min-width: 992px) {\n    .login-container {\n        width: 700px;\n    }\n}*/\n\n\n    @media (min-width: 1200px) {\n    .login-container {\n        width: 730px;\n    }\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/login/login.component.html":
/*!*************************************************************!*\
  !*** ./ClientApp/app/components/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-center-flex\">\n    <div class=\"login-container center-block\">\n        <div class=\"panel panel-primary boxshadow\">\n            <div class=\"panel-heading\">\n                <span class=\"glyphicon glyphicon-lock\"></span> Login\n                <button *ngIf=\"isModal\" type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeModal()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"col-md-8 col-md-offset-2\">\n                    <form *ngIf=\"formResetToggle\" class=\"form-horizontal login\" name=\"loginForm\" #f=\"ngForm\" novalidate\n                          (ngSubmit)=\"f.form.valid ? login() :\n                          (!email.valid && showErrorAlert('Email is required', 'Please enter a valid email'));\n                          (!password.valid && showErrorAlert('Password is required', 'Please enter a valid password'))\">\n                        <div class=\"form-group has-feedback\">\n                            <label class=\"control-label col-md-2\" for=\"login-email\">Email:</label>\n                            <div class=\"col-md-10\" [ngClass]=\"{'has-success': f.submitted && email.valid, 'has-error' : f.submitted && !email.valid}\">\n                                <input type=\"text\" id=\"login-email\" name=\"email\" placeholder=\"Enter email or username\" class=\"form-control\" [(ngModel)]=\"userLogin.email\" #email=\"ngModel\" required />\n                                <span *ngIf=\"f.submitted\" class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok ': email.valid, 'glyphicon-remove' : !email.valid}\" aria-hidden=\"true\"></span>\n                                <span class=\"errorMessage\" *ngIf=\"f.submitted && !email.valid\">\n                                    Email is required\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                            <label class=\"control-label col-md-2\" for=\"login-password\">Password:</label>\n                            <div class=\"col-md-10\" [ngClass]=\"{'has-success': f.submitted && password.valid, 'has-error' : f.submitted && !password.valid}\">\n                                <input type=\"password\" id=\"login-password\" name=\"password\" placeholder=\"Enter password\" class=\"form-control\" [(ngModel)]=\"userLogin.password\" #password=\"ngModel\" required />\n                                <span *ngIf=\"f.submitted\" class=\"glyphicon form-control-feedback\" [ngClass]=\"{'glyphicon-ok ': password.valid, 'glyphicon-remove' : !password.valid}\" aria-hidden=\"true\"></span>\n                                <span class=\"errorMessage\" *ngIf=\"f.submitted && !password.valid\">\n                                    Password is required\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-md-offset-2 col-md-10\">\n                                <div class=\"checkbox\">\n                                    <label><input type=\"checkbox\" name=\"rememberMe\" [(ngModel)]=\"userLogin.rememberMe\"> Remember me</label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-md-offset-2 col-md-10\">\n                                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isLoading\"><i *ngIf=\"isLoading\" class='fa fa-circle-o-notch fa-spin'></i> {{isLoading ? 'Loggin in...' : 'Login'}}</button>\n                            </div>\n                        </div>\n\n                        <!--<div *ngIf=\"!isModal\" class=\"col-md-12\">\n                            <hr class=\"separator-hr\" />\n                        </div>\n\n                        <div *ngIf=\"!isModal\" class=\"col-md-12 last-control-group\">\n                            <span>Don't have an account?</span><a href=\"javascript:;\" class=\"btn btn-link\" (click)=\"signUp()\">Sign Up</a>\n                        </div>-->\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./ClientApp/app/components/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alert.service */ "./ClientApp/app/services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./ClientApp/app/services/auth.service.ts");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/configuration.service */ "./ClientApp/app/services/configuration.service.ts");
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utilities */ "./ClientApp/app/services/utilities.ts");
/* harmony import */ var _models_user_login_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user-login.model */ "./ClientApp/app/models/user-login.model.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(alertService, authService, configurations) {
        this.alertService = alertService;
        this.authService = authService;
        this.configurations = configurations;
        this.userLogin = new _models_user_login_model__WEBPACK_IMPORTED_MODULE_5__["UserLogin"]();
        this.isLoading = false;
        this.formResetToggle = true;
        this.isModal = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userLogin.rememberMe = this.authService.rememberMe;
        if (this.getShouldRedirect()) {
            this.authService.redirectLoginUser();
        }
        else {
            this.loginStatusSubscription = this.authService.getLoginStatusEvent().subscribe(function (isLoggedIn) {
                if (_this.getShouldRedirect()) {
                    _this.authService.redirectLoginUser();
                }
            });
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.loginStatusSubscription)
            this.loginStatusSubscription.unsubscribe();
    };
    LoginComponent.prototype.getShouldRedirect = function () {
        return !this.isModal && this.authService.isLoggedIn && !this.authService.isSessionExpired;
    };
    LoginComponent.prototype.showErrorAlert = function (caption, message) {
        this.alertService.showMessage(caption, message, _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error);
    };
    LoginComponent.prototype.closeModal = function () {
        if (this.modalClosedCallback) {
            this.modalClosedCallback();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        this.alertService.startLoadingMessage("", "Attempting login...");
        this.authService.login(this.userLogin.email, this.userLogin.password, this.userLogin.rememberMe)
            .subscribe(function (user) {
            setTimeout(function () {
                _this.alertService.stopLoadingMessage();
                _this.isLoading = false;
                _this.reset();
                if (!_this.isModal) {
                    _this.alertService.showMessage("Login", "Welcome " + user.userName + "!", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].success);
                }
                else {
                    _this.alertService.showMessage("Login", "Session for " + user.userName + " restored!", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].success);
                    setTimeout(function () {
                        _this.alertService.showStickyMessage("Session Restored", "Please try your last operation again", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].default);
                    }, 500);
                    _this.closeModal();
                }
            }, 500);
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            if (_services_utilities__WEBPACK_IMPORTED_MODULE_4__["Utilities"].checkNoNetwork(error)) {
                _this.alertService.showStickyMessage(_services_utilities__WEBPACK_IMPORTED_MODULE_4__["Utilities"].noNetworkMessageCaption, _services_utilities__WEBPACK_IMPORTED_MODULE_4__["Utilities"].noNetworkMessageDetail, _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
                _this.offerAlternateHost();
            }
            else {
                var errorMessage = _services_utilities__WEBPACK_IMPORTED_MODULE_4__["Utilities"].findHttpResponseMessage("error_description", error);
                if (errorMessage)
                    _this.alertService.showStickyMessage("Unable to login", errorMessage, _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
                else
                    _this.alertService.showStickyMessage("Unable to login", "An error occured whilst logging in, please try again later.\nError: " + error.statusText || error.status, _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].error, error);
            }
            setTimeout(function () {
                _this.isLoading = false;
            }, 500);
        });
    };
    LoginComponent.prototype.offerAlternateHost = function () {
        var _this = this;
        if (_services_utilities__WEBPACK_IMPORTED_MODULE_4__["Utilities"].checkIsLocalHost(location.origin) && _services_utilities__WEBPACK_IMPORTED_MODULE_4__["Utilities"].checkIsLocalHost(this.configurations.baseUrl)) {
            this.alertService.showDialog("Dear Developer!\nIt appears your backend Web API service is not running...\n" +
                "Would you want to temporarily switch to the online Demo API below?(Or specify another)", _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["DialogType"].prompt, function (value) {
                _this.configurations.baseUrl = value;
                _this.alertService.showStickyMessage("API Changed!", "The target Web API has been changed to: " + value, _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["MessageSeverity"].warn);
            }, null, null, null, this.configurations.fallbackBaseUrl);
        }
    };
    LoginComponent.prototype.reset = function () {
        var _this = this;
        this.formResetToggle = false;
        setTimeout(function () {
            _this.formResetToggle = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "isModal", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./ClientApp/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./ClientApp/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/not-found/not-found.component.css":
/*!********************************************************************!*\
  !*** ./ClientApp/app/components/not-found/not-found.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vertical-center-flex {\n    min-height: 60vh;\n}\n\n.icon-container {\n    font-size: 5em;\n}\n\n.error-description {\n    font-size: 1.5em;\n    padding-bottom: 10px;\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/not-found/not-found.component.html":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/components/not-found/not-found.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header class=\"pageHeader\">\n        <h3><i class=\"fa fa-exclamation-circle fa-lg page-caption\" aria-hidden=\"true\"></i> {{'pageHeader.NotFound' | translate}}</h3>\n    </header>\n\n    <div [@fadeInOut] class=\"vertical-center-flex\">\n        <div class=\"center-block\">\n            <div class=\"icon-container\"><i class='fa fa-exclamation-circle'></i> {{'notFound.404' | translate}}</div>\n            <div class=\"text-muted error-description\">{{'notFound.pageNotFound' | translate}}</div>\n            <div><a class=\"btn btn-primary\" routerLink=\"/\"><i class='fa fa-home'></i> {{'notFound.backToHome' | translate}}</a></div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/not-found/not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/components/not-found/not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/animations */ "./ClientApp/app/services/animations.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./ClientApp/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./ClientApp/app/components/not-found/not-found.component.css")],
            animations: [_services_animations__WEBPACK_IMPORTED_MODULE_1__["fadeInOut"]]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/orders/orders.component.css":
/*!**************************************************************!*\
  !*** ./ClientApp/app/components/orders/orders.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/components/orders/orders.component.html":
/*!***************************************************************!*\
  !*** ./ClientApp/app/components/orders/orders.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header class=\"pageHeader\">\n        <h3><i class=\"fa fa-shopping-cart fa-lg page-caption\" aria-hidden=\"true\"></i> {{'pageHeader.Orders' | translate}}</h3>\n    </header>\n\n    <div [@fadeInOut]>\n        <span class=\"text-muted\">-- Sample Page --</span>\n    </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/orders/orders.component.ts":
/*!*************************************************************!*\
  !*** ./ClientApp/app/components/orders/orders.component.ts ***!
  \*************************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/animations */ "./ClientApp/app/services/animations.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./ClientApp/app/components/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./ClientApp/app/components/orders/orders.component.css")],
            animations: [_services_animations__WEBPACK_IMPORTED_MODULE_1__["fadeInOut"]]
        })
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/products/products.component.css":
/*!******************************************************************!*\
  !*** ./ClientApp/app/components/products/products.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/components/products/products.component.html":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/components/products/products.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header class=\"pageHeader\">\n        <h3><i class=\"fa fa-truck fa-lg page-caption\" aria-hidden=\"true\"></i> {{'pageHeader.Products' | translate}}</h3>\n    </header>\n\n    <div [@fadeInOut]>\n        <span class=\"text-muted\">-- Sample Page --</span>\n    </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/products/products.component.ts":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/components/products/products.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/animations */ "./ClientApp/app/services/animations.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'products',
            template: __webpack_require__(/*! ./products.component.html */ "./ClientApp/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./ClientApp/app/components/products/products.component.css")],
            animations: [_services_animations__WEBPACK_IMPORTED_MODULE_1__["fadeInOut"]]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/settings/settings.component.css":
/*!******************************************************************!*\
  !*** ./ClientApp/app/components/settings/settings.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-menu {\n    min-width: 120px;\n}\n\n.separator-hr {\n    margin-top: 0;\n    margin-bottom: 10px;\n}\n\n[hidden] {\n    display: none;\n}\n"

/***/ }),

/***/ "./ClientApp/app/components/settings/settings.component.html":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/components/settings/settings.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header class=\"pageHeader\">\n        <h3><i class=\"fa fa-cog fa-lg page-caption\" aria-hidden=\"true\"></i> {{'pageHeader.Settings' | translate}}</h3>\n    </header>\n\n    <div [@fadeInOut] class=\"row\">\n        <div class=\"col-sm-2 side-menu\">\n            <ul bootstrapTab #tab=\"bootstrap-tab\" class=\"nav nav-tabs tabs-left\" (showBSTab)=\"onShowTab($event)\">\n                <li class=\"active\">\n                    <a id=\"profileTab\" [routerLink]=\"[]\" fragment=\"profile\" href=\"#profile\" data-toggle=\"tab\"><i class=\"fa fa-user-circle-o fa-fw\" aria-hidden=\"true\"></i> {{'settings.tab.Profile' | translate}}</a>\n                </li>\n                <li>\n                    <a id=\"preferencesTab\" [routerLink]=\"[]\" fragment=\"preferences\" href=\"#preferences\" data-toggle=\"tab\"><i class=\"fa fa-sliders fa-fw\" aria-hidden=\"true\"></i> {{'settings.tab.Preferences' | translate}}</a>\n                </li>\n                <li [hidden]=\"!canViewUsers\">\n                    <a id=\"usersTab\" [routerLink]=\"[]\" fragment=\"users\" href=\"#users\" data-toggle=\"tab\"><i class=\"fa fa-users fa-fw\" aria-hidden=\"true\"></i> {{'settings.tab.Users' | translate}}</a>\n                </li>\n                <li [hidden]=\"!canViewRoles\">\n                    <a id=\"rolesTab\" [routerLink]=\"[]\" fragment=\"roles\" href=\"#roles\" data-toggle=\"tab\"><i class=\"fa fa-shield fa-fw\" aria-hidden=\"true\"></i> {{'settings.tab.Roles' | translate}}</a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-sm-10\">\n            <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"profile\">\n                    <h4>{{'settings.header.UserProfile' | translate}}</h4>\n                    <hr class=\"separator-hr\" />\n                    <div [@fadeInOut] *ngIf=\"isProfileActivated\" class=\"content-container\">\n                        <user-info></user-info>\n                    </div>\n                </div>\n\n                <div class=\"tab-pane\" id=\"preferences\">\n                    <h4>{{'settings.header.UserPreferences' | translate}}</h4>\n                    <hr class=\"separator-hr\" />\n                    <div [@fadeInOut] *ngIf=\"isPreferencesActivated\" class=\"content-container\">\n                        <user-preferences></user-preferences>\n                    </div>\n                </div>\n\n                <div class=\"tab-pane\" id=\"users\">\n                    <h4>{{'settings.header.UsersManagements' | translate}}</h4>\n                    <hr class=\"separator-hr\" />\n                    <div [@fadeInOut] *ngIf=\"canViewUsers && isUsersActivated\" class=\"content-container\">\n                        <users-management></users-management>\n                    </div>\n                </div>\n\n                <div class=\"tab-pane\" id=\"roles\">\n                    <h4>{{'settings.header.RolesManagement' | translate}}</h4>\n                    <hr class=\"separator-hr\" />\n                    <div [@fadeInOut] *ngIf=\"canViewRoles && isRolesActivated\" class=\"content-container\">\n                        <roles-management></roles-management>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/components/settings/settings.component.ts":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/components/settings/settings.component.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var _services_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/animations */ "./ClientApp/app/services/animations.ts");
/* harmony import */ var _directives_bootstrap_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/bootstrap-tab.directive */ "./ClientApp/app/directives/bootstrap-tab.directive.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/account.service */ "./ClientApp/app/services/account.service.ts");
/* harmony import */ var _models_permission_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/permission.model */ "./ClientApp/app/models/permission.model.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(route, accountService) {
        this.route = route;
        this.accountService = accountService;
        this.isProfileActivated = true;
        this.isPreferencesActivated = false;
        this.isUsersActivated = false;
        this.isRolesActivated = false;
        this.profileTab = "profile";
        this.preferencesTab = "preferences";
        this.usersTab = "users";
        this.rolesTab = "roles";
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubscription = this.route.fragment.subscribe(function (anchor) { return _this.showContent(anchor); });
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.fragmentSubscription.unsubscribe();
    };
    SettingsComponent.prototype.showContent = function (anchor) {
        if ((this.isFragmentEquals(anchor, this.usersTab) && !this.canViewUsers) ||
            (this.isFragmentEquals(anchor, this.rolesTab) && !this.canViewRoles))
            return;
        this.tab.show("#" + (anchor || this.profileTab) + "Tab");
    };
    SettingsComponent.prototype.isFragmentEquals = function (fragment1, fragment2) {
        if (fragment1 == null)
            fragment1 = "";
        if (fragment2 == null)
            fragment2 = "";
        return fragment1.toLowerCase() == fragment2.toLowerCase();
    };
    SettingsComponent.prototype.onShowTab = function (event) {
        var activeTab = event.target.hash.split("#", 2).pop();
        this.isProfileActivated = activeTab == this.profileTab;
        this.isPreferencesActivated = activeTab == this.preferencesTab;
        this.isUsersActivated = activeTab == this.usersTab;
        this.isRolesActivated = activeTab == this.rolesTab;
    };
    Object.defineProperty(SettingsComponent.prototype, "canViewUsers", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_6__["Permission"].viewUsersPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "canViewRoles", {
        get: function () {
            return this.accountService.userHasPermission(_models_permission_model__WEBPACK_IMPORTED_MODULE_6__["Permission"].viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("tab"),
        __metadata("design:type", _directives_bootstrap_tab_directive__WEBPACK_IMPORTED_MODULE_4__["BootstrapTabDirective"])
    ], SettingsComponent.prototype, "tab", void 0);
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./ClientApp/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./ClientApp/app/components/settings/settings.component.css")],
            animations: [_services_animations__WEBPACK_IMPORTED_MODULE_3__["fadeInOut"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./ClientApp/app/directives/autofocus.directive.ts":
/*!*********************************************************!*\
  !*** ./ClientApp/app/directives/autofocus.directive.ts ***!
  \*********************************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    AutofocusDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.renderer.invokeElementMethod(_this.elementRef.nativeElement, 'focus', []); }, 500);
    };
    AutofocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[autofocus]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "./ClientApp/app/directives/bootstrap-datepicker.directive.ts":
/*!********************************************************************!*\
  !*** ./ClientApp/app/directives/bootstrap-datepicker.directive.ts ***!
  \********************************************************************/
/*! exports provided: BootstrapDatepickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapDatepickerDirective", function() { return BootstrapDatepickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/add/observable/fromEvent.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_datepicker_dist_js_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-datepicker/dist/js/bootstrap-datepicker */ "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js");
/* harmony import */ var bootstrap_datepicker_dist_js_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_datepicker_dist_js_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__);
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BootstrapDatepickerDirective = /** @class */ (function () {
    function BootstrapDatepickerDirective(el) {
        var _this = this;
        this.el = el;
        this._isShown = false;
        this.options = {};
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changedSubscription = rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromEvent(jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement), 'change').subscribe(function (e) { return setTimeout(function () { return _this.ngModelChange.emit(e.target.value); }); });
        this.shownSubscription = rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromEvent(jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement), 'show').subscribe(function (e) { return _this._isShown = true; });
        this.hiddenSubscription = rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromEvent(jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement), 'hide').subscribe(function (e) { return _this._isShown = false; });
    }
    Object.defineProperty(BootstrapDatepickerDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapDatepickerDirective.prototype, "ngModel", {
        set: function (value) {
            this.tryUpdate(value);
        },
        enumerable: true,
        configurable: true
    });
    BootstrapDatepickerDirective.prototype.ngOnInit = function () {
        this.initialize(this.options);
    };
    BootstrapDatepickerDirective.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    BootstrapDatepickerDirective.prototype.initialize = function (options) {
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).datepicker(options);
    };
    BootstrapDatepickerDirective.prototype.destroy = function () {
        if (this.changedSubscription) {
            this.changedSubscription.unsubscribe();
            this.shownSubscription.unsubscribe();
            this.hiddenSubscription.unsubscribe();
        }
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).datepicker('destroy');
    };
    BootstrapDatepickerDirective.prototype.show = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).datepicker('show');
    };
    BootstrapDatepickerDirective.prototype.hide = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).datepicker('hide');
    };
    BootstrapDatepickerDirective.prototype.toggle = function () {
        this.isShown ? this.hide() : this.show();
    };
    BootstrapDatepickerDirective.prototype.tryUpdate = function (value) {
        var _this = this;
        clearTimeout(this.updateTimeout);
        if (!jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).is(":focus")) {
            this.update(value);
        }
        else {
            this.updateTimeout = setTimeout(function () {
                _this.updateTimeout = null;
                _this.tryUpdate(value);
            }, 100);
        }
    };
    BootstrapDatepickerDirective.prototype.update = function (value) {
        var _this = this;
        setTimeout(function () { return jquery__WEBPACK_IMPORTED_MODULE_3__(_this.el.nativeElement).datepicker('update', value); });
    };
    BootstrapDatepickerDirective.prototype.setDate = function (value) {
        var _this = this;
        setTimeout(function () { return jquery__WEBPACK_IMPORTED_MODULE_3__(_this.el.nativeElement).datepicker('setDate', value); });
    };
    BootstrapDatepickerDirective.prototype.setUTCDate = function (value) {
        var _this = this;
        setTimeout(function () { return jquery__WEBPACK_IMPORTED_MODULE_3__(_this.el.nativeElement).datepicker('setUTCDate', value); });
    };
    BootstrapDatepickerDirective.prototype.clearDates = function () {
        var _this = this;
        setTimeout(function () { return jquery__WEBPACK_IMPORTED_MODULE_3__(_this.el.nativeElement).datepicker('clearDates'); });
    };
    BootstrapDatepickerDirective.prototype.getDate = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).datepicker('getDate');
    };
    BootstrapDatepickerDirective.prototype.getUTCDate = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).datepicker('getUTCDate');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BootstrapDatepickerDirective.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BootstrapDatepickerDirective.prototype, "ngModel", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BootstrapDatepickerDirective.prototype, "ngModelChange", void 0);
    BootstrapDatepickerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[bootstrapDatepicker]',
            exportAs: 'bootstrap-datepicker'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], BootstrapDatepickerDirective);
    return BootstrapDatepickerDirective;
}());



/***/ }),

/***/ "./ClientApp/app/directives/bootstrap-select.directive.ts":
/*!****************************************************************!*\
  !*** ./ClientApp/app/directives/bootstrap-select.directive.ts ***!
  \****************************************************************/
/*! exports provided: BootstrapSelectDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapSelectDirective", function() { return BootstrapSelectDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/add/observable/fromEvent.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_select_dist_js_bootstrap_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-select/dist/js/bootstrap-select */ "./node_modules/bootstrap-select/dist/js/bootstrap-select.js");
/* harmony import */ var bootstrap_select_dist_js_bootstrap_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_select_dist_js_bootstrap_select__WEBPACK_IMPORTED_MODULE_4__);
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BootstrapSelectDirective = /** @class */ (function () {
    function BootstrapSelectDirective(el) {
        var _this = this;
        this.el = el;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changedSubscription = rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromEvent(jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement), 'changed.bs.select').subscribe(function (e) { return setTimeout(function () { return _this.ngModelChange.emit(_this.selected); }); });
        this.shownSubscription = rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromEvent(jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement), 'shown.bs.select').subscribe(function (e) { return setTimeout(function () { return _this.shown.emit(); }); });
        this.hiddenSubscription = rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromEvent(jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement), 'hidden.bs.select').subscribe(function (e) { return setTimeout(function () { return _this.hidden.emit(); }); });
    }
    Object.defineProperty(BootstrapSelectDirective.prototype, "ngModel", {
        set: function (values) {
            var _this = this;
            setTimeout(function () { return _this.selected = values; });
        },
        enumerable: true,
        configurable: true
    });
    BootstrapSelectDirective.prototype.ngOnInit = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).selectpicker();
        if (this.requiredAttribute)
            jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).selectpicker('setStyle', 'required', 'add');
        setTimeout(function () {
            _this.refresh();
            _this.doValidation();
        });
    };
    BootstrapSelectDirective.prototype.ngOnDestroy = function () {
        if (this.changedSubscription)
            this.changedSubscription.unsubscribe();
        if (this.shownSubscription)
            this.shownSubscription.unsubscribe();
        if (this.hiddenSubscription)
            this.hiddenSubscription.unsubscribe();
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).selectpicker('destroy');
    };
    BootstrapSelectDirective.prototype.doValidation = function () {
        if (this.requiredAttribute) {
            jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).selectpicker('setStyle', !this.valid ? 'ng-valid' : 'ng-invalid', 'remove');
            jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).selectpicker('setStyle', this.valid ? 'ng-valid' : 'ng-invalid', 'add');
        }
    };
    Object.defineProperty(BootstrapSelectDirective.prototype, "requiredAttribute", {
        get: function () {
            return this.required === "" || this.required == "true";
        },
        enumerable: true,
        configurable: true
    });
    BootstrapSelectDirective.prototype.refresh = function () {
        var _this = this;
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(_this.el.nativeElement).selectpicker('refresh');
        });
    };
    BootstrapSelectDirective.prototype.render = function () {
        var _this = this;
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(_this.el.nativeElement).selectpicker('render');
        });
    };
    Object.defineProperty(BootstrapSelectDirective.prototype, "valid", {
        get: function () {
            return this.requiredAttribute ? this.selected && this.selected.length > 0 : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSelectDirective.prototype, "selected", {
        get: function () {
            return jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).selectpicker('val');
        },
        set: function (values) {
            jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).selectpicker('val', values);
            this.doValidation();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BootstrapSelectDirective.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BootstrapSelectDirective.prototype, "ngModel", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BootstrapSelectDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BootstrapSelectDirective.prototype, "shown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BootstrapSelectDirective.prototype, "hidden", void 0);
    BootstrapSelectDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[bootstrapSelect]',
            exportAs: 'bootstrap-select'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], BootstrapSelectDirective);
    return BootstrapSelectDirective;
}());



/***/ }),

/***/ "./ClientApp/app/directives/bootstrap-tab.directive.ts":
/*!*************************************************************!*\
  !*** ./ClientApp/app/directives/bootstrap-tab.directive.ts ***!
  \*************************************************************/
/*! exports provided: BootstrapTabDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapTabDirective", function() { return BootstrapTabDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/add/observable/fromEvent.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BootstrapTabDirective = /** @class */ (function () {
    function BootstrapTabDirective(el, zone) {
        var _this = this;
        this.el = el;
        this.zone = zone;
        this.showBSTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideBSTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabShownSubscription = rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromEvent(jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement), 'show.bs.tab')
            .subscribe(function (e) {
            _this.runInZone(function () { return _this.showBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }); });
        });
        this.tabHiddenSubscription = rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromEvent(jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement), 'hidden.bs.tab')
            .subscribe(function (e) {
            _this.runInZone(function () { return _this.hideBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }); });
        });
    }
    BootstrapTabDirective.prototype.ngOnDestroy = function () {
        this.tabShownSubscription.unsubscribe();
        this.tabHiddenSubscription.unsubscribe();
    };
    BootstrapTabDirective.prototype.runInZone = function (delegate) {
        this.zone.run(function () {
            delegate();
        });
    };
    BootstrapTabDirective.prototype.show = function (selector) {
        jquery__WEBPACK_IMPORTED_MODULE_3__(selector).tab('show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BootstrapTabDirective.prototype, "showBSTab", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BootstrapTabDirective.prototype, "hideBSTab", void 0);
    BootstrapTabDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[bootstrapTab]',
            exportAs: 'bootstrap-tab'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], BootstrapTabDirective);
    return BootstrapTabDirective;
}());



/***/ }),

/***/ "./ClientApp/app/directives/bootstrap-toggle.directive.ts":
/*!****************************************************************!*\
  !*** ./ClientApp/app/directives/bootstrap-toggle.directive.ts ***!
  \****************************************************************/
/*! exports provided: BootstrapToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapToggleDirective", function() { return BootstrapToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/add/observable/fromEvent.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_toggle_js_bootstrap_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-toggle/js/bootstrap-toggle */ "./node_modules/bootstrap-toggle/js/bootstrap-toggle.js");
/* harmony import */ var bootstrap_toggle_js_bootstrap_toggle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_toggle_js_bootstrap_toggle__WEBPACK_IMPORTED_MODULE_4__);
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BootstrapToggleDirective = /** @class */ (function () {
    function BootstrapToggleDirective(el) {
        var _this = this;
        this.el = el;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checkedSubscription = rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromEvent(jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement), 'change')
            .subscribe(function (e) { return _this.ngModelChange.emit(e.target.checked); });
    }
    Object.defineProperty(BootstrapToggleDirective.prototype, "ngModel", {
        set: function (value) {
            this.toggle(value);
        },
        enumerable: true,
        configurable: true
    });
    BootstrapToggleDirective.prototype.ngOnInit = function () {
        this.initialize();
    };
    BootstrapToggleDirective.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    BootstrapToggleDirective.prototype.initialize = function (options) {
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).bootstrapToggle(options);
    };
    BootstrapToggleDirective.prototype.destroy = function () {
        if (this.checkedSubscription)
            this.checkedSubscription.unsubscribe();
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).bootstrapToggle('destroy');
    };
    BootstrapToggleDirective.prototype.toggleOn = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).bootstrapToggle('on');
    };
    BootstrapToggleDirective.prototype.toggleOff = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).bootstrapToggle('off');
    };
    BootstrapToggleDirective.prototype.toggle = function (value) {
        if (value == null)
            jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).bootstrapToggle('toggle');
        else
            jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).prop('checked', value).change();
    };
    BootstrapToggleDirective.prototype.enable = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).bootstrapToggle('enable');
    };
    BootstrapToggleDirective.prototype.disable = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(this.el.nativeElement).bootstrapToggle('disable');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BootstrapToggleDirective.prototype, "ngModel", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BootstrapToggleDirective.prototype, "ngModelChange", void 0);
    BootstrapToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[bootstrapToggle]',
            exportAs: 'bootstrap-toggle'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], BootstrapToggleDirective);
    return BootstrapToggleDirective;
}());



/***/ }),

/***/ "./ClientApp/app/directives/equal-validator.directive.ts":
/*!***************************************************************!*\
  !*** ./ClientApp/app/directives/equal-validator.directive.ts ***!
  \***************************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    EqualValidator.prototype.validate = function (c) {
        var other = c.root.get(this.validateEqual);
        if (!other)
            return null;
        return this.reverse === 'true' ? this.validateReverse(c, other) : this.validateNoReverse(c, other);
    };
    EqualValidator.prototype.validateNoReverse = function (c, other) {
        return other.value === c.value ? null : { validateEqual: true };
    };
    EqualValidator.prototype.validateReverse = function (c, other) {
        if (c.value === other.value) {
            if (other.errors) {
                delete other.errors['validateEqual'];
                if (Object.keys(other.errors).length == 0) {
                    other.setErrors(null);
                }
                ;
            }
        }
        else {
            other.setErrors({ validateEqual: true });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('validateEqual')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "./ClientApp/app/directives/last-element.directive.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/directives/last-element.directive.ts ***!
  \************************************************************/
/*! exports provided: LastElementDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastElementDirective", function() { return LastElementDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LastElementDirective = /** @class */ (function () {
    function LastElementDirective() {
        this.lastFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(LastElementDirective.prototype, "lastElement", {
        set: function (isLastElement) {
            var _this = this;
            if (isLastElement) {
                setTimeout(function () {
                    _this.lastFunction.emit();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LastElementDirective.prototype, "lastElement", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LastElementDirective.prototype, "lastFunction", void 0);
    LastElementDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[lastElement]'
        })
    ], LastElementDirective);
    return LastElementDirective;
}());



/***/ }),

/***/ "./ClientApp/app/models/notification.model.ts":
/*!****************************************************!*\
  !*** ./ClientApp/app/models/notification.model.ts ***!
  \****************************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
// import { Utilities } from "../services/utilities";
var Notification = /** @class */ (function () {
    function Notification() {
    }
    Notification.Create = function (data) {
        var n = new Notification();
        Object.assign(n, data);
        if (n.date)
            // n.date = Utilities.parseDate(n.date);
            return n;
    };
    return Notification;
}());



/***/ }),

/***/ "./ClientApp/app/models/permission.model.ts":
/*!**************************************************!*\
  !*** ./ClientApp/app/models/permission.model.ts ***!
  \**************************************************/
/*! exports provided: Permission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var Permission = /** @class */ (function () {
    function Permission(name, value, groupName, description) {
        this.name = name;
        this.value = value;
        this.groupName = groupName;
        this.description = description;
    }
    Permission.viewUsersPermission = "users.view";
    Permission.manageUsersPermission = "users.manage";
    Permission.viewRolesPermission = "roles.view";
    Permission.manageRolesPermission = "roles.manage";
    Permission.assignRolesPermission = "roles.assign";
    return Permission;
}());



/***/ }),

/***/ "./ClientApp/app/models/role.model.ts":
/*!********************************************!*\
  !*** ./ClientApp/app/models/role.model.ts ***!
  \********************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var Role = /** @class */ (function () {
    function Role(name, description, permissions) {
        this.name = name;
        this.description = description;
        this.permissions = permissions;
    }
    return Role;
}());



/***/ }),

/***/ "./ClientApp/app/models/user-edit.model.ts":
/*!*************************************************!*\
  !*** ./ClientApp/app/models/user-edit.model.ts ***!
  \*************************************************/
/*! exports provided: UserEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEdit", function() { return UserEdit; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./ClientApp/app/models/user.model.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UserEdit = /** @class */ (function (_super) {
    __extends(UserEdit, _super);
    function UserEdit(currentPassword, newPassword, confirmPassword) {
        var _this = _super.call(this) || this;
        _this.currentPassword = currentPassword;
        _this.newPassword = newPassword;
        _this.confirmPassword = confirmPassword;
        return _this;
    }
    return UserEdit;
}(_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]));



/***/ }),

/***/ "./ClientApp/app/models/user-login.model.ts":
/*!**************************************************!*\
  !*** ./ClientApp/app/models/user-login.model.ts ***!
  \**************************************************/
/*! exports provided: UserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var UserLogin = /** @class */ (function () {
    function UserLogin(email, password, rememberMe) {
        this.email = email;
        this.password = password;
        this.rememberMe = rememberMe;
    }
    return UserLogin;
}());



/***/ }),

/***/ "./ClientApp/app/models/user.model.ts":
/*!********************************************!*\
  !*** ./ClientApp/app/models/user.model.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var User = /** @class */ (function () {
    // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
    function User(id, userName, fullName, email, jobTitle, phoneNumber, roles) {
        this.id = id;
        this.userName = userName;
        this.fullName = fullName;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phoneNumber = phoneNumber;
        this.roles = roles;
    }
    Object.defineProperty(User.prototype, "friendlyName", {
        get: function () {
            var name = this.fullName || this.userName;
            if (this.jobTitle)
                name = this.jobTitle + " " + name;
            return name;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());



/***/ }),

/***/ "./ClientApp/app/pipes/group-by.pipe.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/pipes/group-by.pipe.ts ***!
  \**********************************************/
/*! exports provided: GroupByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (value, field) {
        if (!value)
            return value;
        var groupedObj = value.reduce(function (prev, cur) {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        return Object.keys(groupedObj).map(function (key) { return ({ key: key, value: groupedObj[key] }); });
    };
    GroupByPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'groupBy' })
    ], GroupByPipe);
    return GroupByPipe;
}());



/***/ }),

/***/ "./ClientApp/app/services/account-endpoint.service.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/services/account-endpoint.service.ts ***!
  \************************************************************/
/*! exports provided: AccountEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEndpoint", function() { return AccountEndpoint; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _endpoint_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endpoint-factory.service */ "./ClientApp/app/services/endpoint-factory.service.ts");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration.service */ "./ClientApp/app/services/configuration.service.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountEndpoint = /** @class */ (function (_super) {
    __extends(AccountEndpoint, _super);
    function AccountEndpoint(http, configurations, injector) {
        var _this = _super.call(this, http, configurations, injector) || this;
        _this._usersUrl = "/api/account/users";
        _this._userByUserNameUrl = "/api/account/users/username";
        _this._currentUserUrl = "/api/account/users/me";
        _this._currentUserPreferencesUrl = "/api/account/users/me/preferences";
        _this._unblockUserUrl = "/api/account/users/unblock";
        _this._rolesUrl = "/api/account/roles";
        _this._roleByRoleNameUrl = "/api/account/roles/name";
        _this._permissionsUrl = "/api/account/permissions";
        return _this;
    }
    Object.defineProperty(AccountEndpoint.prototype, "usersUrl", {
        get: function () { return this.configurations.baseUrl + this._usersUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "userByUserNameUrl", {
        get: function () { return this.configurations.baseUrl + this._userByUserNameUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "currentUserUrl", {
        get: function () { return this.configurations.baseUrl + this._currentUserUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "currentUserPreferencesUrl", {
        get: function () { return this.configurations.baseUrl + this._currentUserPreferencesUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "unblockUserUrl", {
        get: function () { return this.configurations.baseUrl + this._unblockUserUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "rolesUrl", {
        get: function () { return this.configurations.baseUrl + this._rolesUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "roleByRoleNameUrl", {
        get: function () { return this.configurations.baseUrl + this._roleByRoleNameUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "permissionsUrl", {
        get: function () { return this.configurations.baseUrl + this._permissionsUrl; },
        enumerable: true,
        configurable: true
    });
    AccountEndpoint.prototype.getUserEndpoint = function (userId) {
        var _this = this;
        var endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
        return this.http.get(endpointUrl, this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getUserEndpoint(userId); });
        });
    };
    AccountEndpoint.prototype.getUserByUserNameEndpoint = function (userName) {
        var _this = this;
        var endpointUrl = this.userByUserNameUrl + "/" + userName;
        return this.http.get(endpointUrl, this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getUserByUserNameEndpoint(userName); });
        });
    };
    AccountEndpoint.prototype.getUsersEndpoint = function (page, pageSize) {
        var _this = this;
        var endpointUrl = page && pageSize ? this.usersUrl + "/" + page + "/" + pageSize : this.usersUrl;
        return this.http.get(endpointUrl, this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getUsersEndpoint(page, pageSize); });
        });
    };
    AccountEndpoint.prototype.getNewUserEndpoint = function (userObject) {
        var _this = this;
        return this.http.post(this.usersUrl, JSON.stringify(userObject), this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getNewUserEndpoint(userObject); });
        });
    };
    AccountEndpoint.prototype.getUpdateUserEndpoint = function (userObject, userId) {
        var _this = this;
        var endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
        return this.http.put(endpointUrl, JSON.stringify(userObject), this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getUpdateUserEndpoint(userObject, userId); });
        });
    };
    AccountEndpoint.prototype.getPatchUpdateUserEndpoint = function (valueOrPatch, opOrUserId, path, from, userId) {
        var _this = this;
        var endpointUrl;
        var patchDocument;
        if (path) {
            endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
            patchDocument = from ?
                [{ "value": valueOrPatch, "path": path, "op": opOrUserId, "from": from }] :
                [{ "value": valueOrPatch, "path": path, "op": opOrUserId }];
        }
        else {
            endpointUrl = opOrUserId ? this.usersUrl + "/" + opOrUserId : this.currentUserUrl;
            patchDocument = valueOrPatch;
        }
        return this.http.patch(endpointUrl, JSON.stringify(patchDocument), this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getPatchUpdateUserEndpoint(valueOrPatch, opOrUserId, path, from, userId); });
        });
    };
    AccountEndpoint.prototype.getUserPreferencesEndpoint = function () {
        var _this = this;
        return this.http.get(this.currentUserPreferencesUrl, this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getUserPreferencesEndpoint(); });
        });
    };
    AccountEndpoint.prototype.getUpdateUserPreferencesEndpoint = function (configuration) {
        var _this = this;
        return this.http.put(this.currentUserPreferencesUrl, JSON.stringify(configuration), this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getUpdateUserPreferencesEndpoint(configuration); });
        });
    };
    AccountEndpoint.prototype.getUnblockUserEndpoint = function (userId) {
        var _this = this;
        var endpointUrl = this.unblockUserUrl + "/" + userId;
        return this.http.put(endpointUrl, null, this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getUnblockUserEndpoint(userId); });
        });
    };
    AccountEndpoint.prototype.getDeleteUserEndpoint = function (userId) {
        var _this = this;
        var endpointUrl = this.usersUrl + "/" + userId;
        return this.http.delete(endpointUrl, this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getDeleteUserEndpoint(userId); });
        });
    };
    AccountEndpoint.prototype.getRoleEndpoint = function (roleId) {
        var _this = this;
        var endpointUrl = this.rolesUrl + "/" + roleId;
        return this.http.get(endpointUrl, this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getRoleEndpoint(roleId); });
        });
    };
    AccountEndpoint.prototype.getRoleByRoleNameEndpoint = function (roleName) {
        var _this = this;
        var endpointUrl = this.roleByRoleNameUrl + "/" + roleName;
        return this.http.get(endpointUrl, this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getRoleByRoleNameEndpoint(roleName); });
        });
    };
    AccountEndpoint.prototype.getRolesEndpoint = function (page, pageSize) {
        var _this = this;
        var endpointUrl = page && pageSize ? this.rolesUrl + "/" + page + "/" + pageSize : this.rolesUrl;
        return this.http.get(endpointUrl, this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getRolesEndpoint(page, pageSize); });
        });
    };
    AccountEndpoint.prototype.getNewRoleEndpoint = function (roleObject) {
        var _this = this;
        return this.http.post(this.rolesUrl, JSON.stringify(roleObject), this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getNewRoleEndpoint(roleObject); });
        });
    };
    AccountEndpoint.prototype.getUpdateRoleEndpoint = function (roleObject, roleId) {
        var _this = this;
        var endpointUrl = this.rolesUrl + "/" + roleId;
        return this.http.put(endpointUrl, JSON.stringify(roleObject), this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getUpdateRoleEndpoint(roleObject, roleId); });
        });
    };
    AccountEndpoint.prototype.getDeleteRoleEndpoint = function (roleId) {
        var _this = this;
        var endpointUrl = this.rolesUrl + "/" + roleId;
        return this.http.delete(endpointUrl, this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getDeleteRoleEndpoint(roleId); });
        });
    };
    AccountEndpoint.prototype.getPermissionsEndpoint = function () {
        var _this = this;
        return this.http.get(this.permissionsUrl, this.getRequestHeaders())
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getPermissionsEndpoint(); });
        });
    };
    AccountEndpoint = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AccountEndpoint);
    return AccountEndpoint;
}(_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_3__["EndpointFactory"]));



/***/ }),

/***/ "./ClientApp/app/services/account.service.ts":
/*!***************************************************!*\
  !*** ./ClientApp/app/services/account.service.ts ***!
  \***************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _account_endpoint_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account-endpoint.service */ "./ClientApp/app/services/account-endpoint.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./ClientApp/app/services/auth.service.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AccountService = /** @class */ (function () {
    function AccountService(router, http, authService, accountEndpoint) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.accountEndpoint = accountEndpoint;
        this._rolesChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AccountService_1 = AccountService;
    AccountService.prototype.getUser = function (userId) {
        return this.accountEndpoint.getUserEndpoint(userId);
    };
    AccountService.prototype.getUserAndRoles = function (userId) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].forkJoin(this.accountEndpoint.getUserEndpoint(userId), this.accountEndpoint.getRolesEndpoint());
    };
    AccountService.prototype.getUsers = function (page, pageSize) {
        return this.accountEndpoint.getUsersEndpoint(page, pageSize);
    };
    AccountService.prototype.getUsersAndRoles = function (page, pageSize) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].forkJoin(this.accountEndpoint.getUsersEndpoint(page, pageSize), this.accountEndpoint.getRolesEndpoint());
    };
    AccountService.prototype.updateUser = function (user) {
        var _this = this;
        if (user.id) {
            return this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
        }
        else {
            return this.accountEndpoint.getUserByUserNameEndpoint(user.userName)
                .mergeMap(function (foundUser) {
                user.id = foundUser.id;
                return _this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
            });
        }
    };
    AccountService.prototype.newUser = function (user) {
        return this.accountEndpoint.getNewUserEndpoint(user);
    };
    AccountService.prototype.getUserPreferences = function () {
        return this.accountEndpoint.getUserPreferencesEndpoint();
    };
    AccountService.prototype.updateUserPreferences = function (configuration) {
        return this.accountEndpoint.getUpdateUserPreferencesEndpoint(configuration);
    };
    AccountService.prototype.deleteUser = function (userOrUserId) {
        var _this = this;
        if (typeof userOrUserId === 'string' || userOrUserId instanceof String) {
            return this.accountEndpoint.getDeleteUserEndpoint(userOrUserId)
                .do(function (data) { return _this.onRolesUserCountChanged(data.roles); });
        }
        else {
            if (userOrUserId.id) {
                return this.deleteUser(userOrUserId.id);
            }
            else {
                return this.accountEndpoint.getUserByUserNameEndpoint(userOrUserId.userName)
                    .mergeMap(function (user) { return _this.deleteUser(user.id); });
            }
        }
    };
    AccountService.prototype.unblockUser = function (userId) {
        return this.accountEndpoint.getUnblockUserEndpoint(userId);
    };
    AccountService.prototype.userHasPermission = function (permissionValue) {
        return this.permissions.some(function (p) { return p == permissionValue; });
    };
    AccountService.prototype.refreshLoggedInUser = function () {
        return this.authService.refreshLogin();
    };
    AccountService.prototype.getRoles = function (page, pageSize) {
        return this.accountEndpoint.getRolesEndpoint(page, pageSize);
    };
    AccountService.prototype.getRolesAndPermissions = function (page, pageSize) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].forkJoin(this.accountEndpoint.getRolesEndpoint(page, pageSize), this.accountEndpoint.getPermissionsEndpoint());
    };
    AccountService.prototype.updateRole = function (role) {
        var _this = this;
        if (role.id) {
            return this.accountEndpoint.getUpdateRoleEndpoint(role, role.id)
                .do(function (data) { return _this.onRolesChanged([role], AccountService_1.roleModifiedOperation); });
        }
        else {
            return this.accountEndpoint.getRoleByRoleNameEndpoint(role.name)
                .mergeMap(function (foundRole) {
                role.id = foundRole.id;
                return _this.accountEndpoint.getUpdateRoleEndpoint(role, role.id);
            })
                .do(function (data) { return _this.onRolesChanged([role], AccountService_1.roleModifiedOperation); });
        }
    };
    AccountService.prototype.newRole = function (role) {
        var _this = this;
        return this.accountEndpoint.getNewRoleEndpoint(role)
            .do(function (data) { return _this.onRolesChanged([role], AccountService_1.roleAddedOperation); });
    };
    AccountService.prototype.deleteRole = function (roleOrRoleId) {
        var _this = this;
        if (typeof roleOrRoleId === 'string' || roleOrRoleId instanceof String) {
            return this.accountEndpoint.getDeleteRoleEndpoint(roleOrRoleId)
                .do(function (data) { return _this.onRolesChanged([data], AccountService_1.roleDeletedOperation); });
        }
        else {
            if (roleOrRoleId.id) {
                return this.deleteRole(roleOrRoleId.id);
            }
            else {
                return this.accountEndpoint.getRoleByRoleNameEndpoint(roleOrRoleId.name)
                    .mergeMap(function (role) { return _this.deleteRole(role.id); });
            }
        }
    };
    AccountService.prototype.getPermissions = function () {
        return this.accountEndpoint.getPermissionsEndpoint();
    };
    AccountService.prototype.onRolesChanged = function (roles, op) {
        this._rolesChanged.next({ roles: roles, operation: op });
    };
    AccountService.prototype.onRolesUserCountChanged = function (roles) {
        return this.onRolesChanged(roles, AccountService_1.roleModifiedOperation);
    };
    AccountService.prototype.getRolesChangedEvent = function () {
        return this._rolesChanged.asObservable();
    };
    Object.defineProperty(AccountService.prototype, "permissions", {
        get: function () {
            return this.authService.userPermissions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "currentUser", {
        get: function () {
            return this.authService.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    AccountService.roleAddedOperation = "add";
    AccountService.roleDeletedOperation = "delete";
    AccountService.roleModifiedOperation = "modify";
    AccountService = AccountService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _account_endpoint_service__WEBPACK_IMPORTED_MODULE_8__["AccountEndpoint"]])
    ], AccountService);
    return AccountService;
    var AccountService_1;
}());



/***/ }),

/***/ "./ClientApp/app/services/alert.service.ts":
/*!*************************************************!*\
  !*** ./ClientApp/app/services/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService, AlertDialog, DialogType, AlertMessage, MessageSeverity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialog", function() { return AlertDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogType", function() { return DialogType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessage", function() { return AlertMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSeverity", function() { return MessageSeverity; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utilities */ "./ClientApp/app/services/utilities.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlertService = /** @class */ (function () {
    function AlertService() {
        this.messages = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stickyMessages = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dialogs = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._isLoading = false;
    }
    AlertService.prototype.showDialog = function (message, type, okCallback, cancelCallback, okLabel, cancelLabel, defaultValue) {
        if (!type)
            type = DialogType.alert;
        this.dialogs.next({ message: message, type: type, okCallback: okCallback, cancelCallback: cancelCallback, okLabel: okLabel, cancelLabel: cancelLabel, defaultValue: defaultValue });
    };
    AlertService.prototype.showMessage = function (data, separatorOrDetail, severity) {
        if (!severity)
            severity = MessageSeverity.default;
        if (data instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponseBase"]) {
            data = _services_utilities__WEBPACK_IMPORTED_MODULE_3__["Utilities"].getHttpResponseMessage(data);
            separatorOrDetail = _services_utilities__WEBPACK_IMPORTED_MODULE_3__["Utilities"].captionAndMessageSeparator;
        }
        if (data instanceof Array) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var message = data_1[_i];
                var msgObject = _services_utilities__WEBPACK_IMPORTED_MODULE_3__["Utilities"].splitInTwo(message, separatorOrDetail);
                this.showMessageHelper(msgObject.firstPart, msgObject.secondPart, severity, false);
            }
        }
        else {
            this.showMessageHelper(data, separatorOrDetail, severity, false);
        }
    };
    AlertService.prototype.showStickyMessage = function (data, separatorOrDetail, severity, error) {
        if (!severity)
            severity = MessageSeverity.default;
        if (data instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponseBase"]) {
            data = _services_utilities__WEBPACK_IMPORTED_MODULE_3__["Utilities"].getHttpResponseMessage(data);
            separatorOrDetail = _services_utilities__WEBPACK_IMPORTED_MODULE_3__["Utilities"].captionAndMessageSeparator;
        }
        if (data instanceof Array) {
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var message = data_2[_i];
                var msgObject = _services_utilities__WEBPACK_IMPORTED_MODULE_3__["Utilities"].splitInTwo(message, separatorOrDetail);
                this.showMessageHelper(msgObject.firstPart, msgObject.secondPart, severity, true);
            }
        }
        else {
            if (error) {
                var msg = "Severity: \"" + MessageSeverity[severity] + "\", Summary: \"" + data + "\", Detail: \"" + separatorOrDetail + "\", Error: \"" + _services_utilities__WEBPACK_IMPORTED_MODULE_3__["Utilities"].safeStringify(error) + "\"";
                switch (severity) {
                    case MessageSeverity.default:
                        this.logInfo(msg);
                        break;
                    case MessageSeverity.info:
                        this.logInfo(msg);
                        break;
                    case MessageSeverity.success:
                        this.logMessage(msg);
                        break;
                    case MessageSeverity.error:
                        this.logError(msg);
                        break;
                    case MessageSeverity.warn:
                        this.logWarning(msg);
                        break;
                    case MessageSeverity.wait:
                        this.logTrace(msg);
                        break;
                }
            }
            this.showMessageHelper(data, separatorOrDetail, severity, true);
        }
    };
    AlertService.prototype.showMessageHelper = function (summary, detail, severity, isSticky) {
        if (isSticky)
            this.stickyMessages.next({ severity: severity, summary: summary, detail: detail });
        else
            this.messages.next({ severity: severity, summary: summary, detail: detail });
    };
    AlertService.prototype.startLoadingMessage = function (message, caption) {
        var _this = this;
        if (message === void 0) { message = "Loading..."; }
        if (caption === void 0) { caption = ""; }
        this._isLoading = true;
        clearTimeout(this.loadingMessageId);
        this.loadingMessageId = setTimeout(function () {
            _this.showStickyMessage(caption, message, MessageSeverity.wait);
        }, 1000);
    };
    AlertService.prototype.stopLoadingMessage = function () {
        this._isLoading = false;
        clearTimeout(this.loadingMessageId);
        this.resetStickyMessage();
    };
    AlertService.prototype.logDebug = function (msg) {
        console.debug(msg);
    };
    AlertService.prototype.logError = function (msg) {
        console.error(msg);
    };
    AlertService.prototype.logInfo = function (msg) {
        console.info(msg);
    };
    AlertService.prototype.logMessage = function (msg) {
        console.log(msg);
    };
    AlertService.prototype.logTrace = function (msg) {
        console.trace(msg);
    };
    AlertService.prototype.logWarning = function (msg) {
        console.warn(msg);
    };
    AlertService.prototype.resetStickyMessage = function () {
        this.stickyMessages.next();
    };
    AlertService.prototype.getDialogEvent = function () {
        return this.dialogs.asObservable();
    };
    AlertService.prototype.getMessageEvent = function () {
        return this.messages.asObservable();
    };
    AlertService.prototype.getStickyMessageEvent = function () {
        return this.stickyMessages.asObservable();
    };
    Object.defineProperty(AlertService.prototype, "isLoadingInProgress", {
        get: function () {
            return this._isLoading;
        },
        enumerable: true,
        configurable: true
    });
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AlertService);
    return AlertService;
}());

//******************** Dialog ********************//
var AlertDialog = /** @class */ (function () {
    function AlertDialog(message, type, okCallback, cancelCallback, defaultValue, okLabel, cancelLabel) {
        this.message = message;
        this.type = type;
        this.okCallback = okCallback;
        this.cancelCallback = cancelCallback;
        this.defaultValue = defaultValue;
        this.okLabel = okLabel;
        this.cancelLabel = cancelLabel;
    }
    return AlertDialog;
}());

var DialogType;
(function (DialogType) {
    DialogType[DialogType["alert"] = 0] = "alert";
    DialogType[DialogType["confirm"] = 1] = "confirm";
    DialogType[DialogType["prompt"] = 2] = "prompt";
})(DialogType || (DialogType = {}));
//******************** End ********************//
//******************** Growls ********************//
var AlertMessage = /** @class */ (function () {
    function AlertMessage(severity, summary, detail) {
        this.severity = severity;
        this.summary = summary;
        this.detail = detail;
    }
    return AlertMessage;
}());

var MessageSeverity;
(function (MessageSeverity) {
    MessageSeverity[MessageSeverity["default"] = 0] = "default";
    MessageSeverity[MessageSeverity["info"] = 1] = "info";
    MessageSeverity[MessageSeverity["success"] = 2] = "success";
    MessageSeverity[MessageSeverity["error"] = 3] = "error";
    MessageSeverity[MessageSeverity["warn"] = 4] = "warn";
    MessageSeverity[MessageSeverity["wait"] = 5] = "wait";
})(MessageSeverity || (MessageSeverity = {}));
//******************** End ********************//


/***/ }),

/***/ "./ClientApp/app/services/animations.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/services/animations.ts ***!
  \**********************************************/
/*! exports provided: fadeInOut, flyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return fadeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================

var fadeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s 10ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))])
]);
function flyInOut(duration) {
    if (duration === void 0) { duration = 0.2; }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-100%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(duration + "s ease-in")]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(duration + "s 10ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(100%)' }))])
    ]);
}


/***/ }),

/***/ "./ClientApp/app/services/app-title.service.ts":
/*!*****************************************************!*\
  !*** ./ClientApp/app/services/app-title.service.ts ***!
  \*****************************************************/
/*! exports provided: AppTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTitleService", function() { return AppTitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities */ "./ClientApp/app/services/utilities.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppTitleService = /** @class */ (function () {
    function AppTitleService(titleService, router) {
        var _this = this;
        this.titleService = titleService;
        this.router = router;
        this.sub = this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })
            .map(function (_) { return _this.router.routerState.root; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .flatMap(function (route) { return route.data; })
            .subscribe(function (data) {
            var title = data['title'];
            if (title) {
                var fragment = _this.router.url.split('#')[1];
                if (fragment)
                    title += " | " + _utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].toTitleCase(fragment);
            }
            if (title && _this.appName)
                title += ' - ' + _this.appName;
            else if (_this.appName)
                title = _this.appName;
            if (title)
                _this.titleService.setTitle(title);
        });
    }
    AppTitleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppTitleService);
    return AppTitleService;
}());



/***/ }),

/***/ "./ClientApp/app/services/app-translation.service.ts":
/*!***********************************************************!*\
  !*** ./ClientApp/app/services/app-translation.service.ts ***!
  \***********************************************************/
/*! exports provided: AppTranslationService, TranslateLanguageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTranslationService", function() { return AppTranslationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateLanguageLoader", function() { return TranslateLanguageLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppTranslationService = /** @class */ (function () {
    function AppTranslationService(translate) {
        this.translate = translate;
        this._languageChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.defaultLanguage = "en";
        this.setDefaultLanguage(this.defaultLanguage);
    }
    AppTranslationService.prototype.addLanguages = function (lang) {
        this.translate.addLangs(lang);
    };
    AppTranslationService.prototype.setDefaultLanguage = function (lang) {
        this.translate.setDefaultLang(lang);
    };
    AppTranslationService.prototype.getDefaultLanguage = function () {
        return this.translate.defaultLang;
    };
    AppTranslationService.prototype.getBrowserLanguage = function () {
        return this.translate.getBrowserLang();
    };
    AppTranslationService.prototype.useBrowserLanguage = function () {
        var browserLang = this.getBrowserLanguage();
        if (browserLang.match(/en|fr|de|ar|ko|pt/)) {
            this.changeLanguage(browserLang);
            return browserLang;
        }
    };
    AppTranslationService.prototype.changeLanguage = function (language) {
        var _this = this;
        if (language === void 0) { language = "en"; }
        if (!language)
            language = this.translate.defaultLang;
        if (language != this.translate.currentLang) {
            setTimeout(function () {
                _this.translate.use(language);
                _this._languageChanged.next(language);
            });
        }
        return language;
    };
    AppTranslationService.prototype.getTranslation = function (key, interpolateParams) {
        return this.translate.instant(key, interpolateParams);
    };
    AppTranslationService.prototype.getTranslationAsync = function (key, interpolateParams) {
        return this.translate.get(key, interpolateParams);
    };
    AppTranslationService.prototype.languageChangedEvent = function () {
        return this._languageChanged.asObservable();
    };
    AppTranslationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppTranslationService);
    return AppTranslationService;
}());

var TranslateLanguageLoader = /** @class */ (function () {
    function TranslateLanguageLoader(inej) {
        this.inej = inej;
    }
    /**
     * Gets the translations from webpack
     *
     * @param lang
     * @returns {any}
     */
    TranslateLanguageLoader.prototype.getTranslation = function (lang) {
        var http = this.inej.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]);
        console.log(http.get("../../assets/i18n/" + lang + ".json"));
        return http.get("../../assets/i18n/" + lang + ".json");
    };
    TranslateLanguageLoader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TranslateLanguageLoader);
    return TranslateLanguageLoader;
}());



/***/ }),

/***/ "./ClientApp/app/services/auth-guard.service.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/services/auth-guard.service.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./ClientApp/app/services/auth.service.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.loginRedirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./ClientApp/app/services/auth.service.ts":
/*!************************************************!*\
  !*** ./ClientApp/app/services/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _local_store_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-store-manager.service */ "./ClientApp/app/services/local-store-manager.service.ts");
/* harmony import */ var _endpoint_factory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endpoint-factory.service */ "./ClientApp/app/services/endpoint-factory.service.ts");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration.service */ "./ClientApp/app/services/configuration.service.ts");
/* harmony import */ var _db_Keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./db-Keys */ "./ClientApp/app/services/db-Keys.ts");
/* harmony import */ var _jwt_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jwt-helper */ "./ClientApp/app/services/jwt-helper.ts");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities */ "./ClientApp/app/services/utilities.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/user.model */ "./ClientApp/app/models/user.model.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AuthService = /** @class */ (function () {
    function AuthService(router, configurations, endpointFactory, localStorage) {
        this.router = router;
        this.configurations = configurations;
        this.endpointFactory = endpointFactory;
        this.localStorage = localStorage;
        this.previousIsLoggedInCheck = false;
        this._loginStatus = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.initializeLoginStatus();
    }
    Object.defineProperty(AuthService.prototype, "loginUrl", {
        get: function () { return this.configurations.loginUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "homeUrl", {
        get: function () { return this.configurations.homeUrl; },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.initializeLoginStatus = function () {
        var _this = this;
        this.localStorage.getInitEvent().subscribe(function () {
            _this.reevaluateLoginStatus();
        });
    };
    AuthService.prototype.gotoPage = function (page, preserveParams) {
        if (preserveParams === void 0) { preserveParams = true; }
        var navigationExtras = {
            queryParamsHandling: preserveParams ? "merge" : "", preserveFragment: preserveParams
        };
        this.router.navigate([page], navigationExtras);
    };
    AuthService.prototype.redirectLoginUser = function () {
        var redirect = this.loginRedirectUrl && this.loginRedirectUrl != '/' && this.loginRedirectUrl != _configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"].defaultHomeUrl ? this.loginRedirectUrl : this.homeUrl;
        this.loginRedirectUrl = null;
        var urlParamsAndFragment = _utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].splitInTwo(redirect, '#');
        var urlAndParams = _utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].splitInTwo(urlParamsAndFragment.firstPart, '?');
        var navigationExtras = {
            fragment: urlParamsAndFragment.secondPart,
            queryParams: _utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getQueryParamsFromString(urlAndParams.secondPart),
            queryParamsHandling: "merge"
        };
        this.router.navigate([urlAndParams.firstPart], navigationExtras);
    };
    AuthService.prototype.redirectLogoutUser = function () {
        var redirect = this.logoutRedirectUrl ? this.logoutRedirectUrl : this.loginUrl;
        this.logoutRedirectUrl = null;
        this.router.navigate([redirect]);
    };
    AuthService.prototype.redirectForLogin = function () {
        this.loginRedirectUrl = this.router.url;
        this.router.navigate([this.loginUrl]);
    };
    AuthService.prototype.reLogin = function () {
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].TOKEN_EXPIRES_IN);
        if (this.reLoginDelegate) {
            this.reLoginDelegate();
        }
        else {
            this.redirectForLogin();
        }
    };
    AuthService.prototype.refreshLogin = function () {
        var _this = this;
        return this.endpointFactory.getRefreshLoginEndpoint()
            .map(function (response) { return _this.processLoginResponse(response, _this.rememberMe); });
    };
    AuthService.prototype.login = function (userName, password, rememberMe) {
        var _this = this;
        if (this.isLoggedIn)
            this.logout();
        return this.endpointFactory.getLoginEndpoint(userName, password)
            .map(function (response) { return _this.processLoginResponse(response, rememberMe); });
    };
    AuthService.prototype.processLoginResponse = function (response, rememberMe) {
        var accessToken = response.access_token;
        if (accessToken == null)
            throw new Error("Received accessToken was empty");
        var idToken = response.id_token;
        var refreshToken = response.refresh_token || this.refreshToken;
        var expiresIn = response.expires_in;
        var tokenExpiryDate = new Date();
        tokenExpiryDate.setSeconds(tokenExpiryDate.getSeconds() + expiresIn);
        var accessTokenExpiry = tokenExpiryDate;
        var jwtHelper = new _jwt_helper__WEBPACK_IMPORTED_MODULE_8__["JwtHelper"]();
        var decodedIdToken = jwtHelper.decodeToken(response.id_token);
        var permissions = Array.isArray(decodedIdToken.permission) ? decodedIdToken.permission : [decodedIdToken.permission];
        if (!this.isLoggedIn)
            this.configurations.import(decodedIdToken.configuration);
        var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_10__["User"](decodedIdToken.sub, decodedIdToken.name, decodedIdToken.fullname, decodedIdToken.email, decodedIdToken.jobtitle, decodedIdToken.phone, Array.isArray(decodedIdToken.role) ? decodedIdToken.role : [decodedIdToken.role]);
        user.isEnabled = true;
        this.saveUserDetails(user, permissions, accessToken, idToken, refreshToken, accessTokenExpiry, rememberMe);
        this.reevaluateLoginStatus(user);
        return user;
    };
    AuthService.prototype.saveUserDetails = function (user, permissions, accessToken, idToken, refreshToken, expiresIn, rememberMe) {
        if (rememberMe) {
            this.localStorage.savePermanentData(accessToken, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].ACCESS_TOKEN);
            this.localStorage.savePermanentData(idToken, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].ID_TOKEN);
            this.localStorage.savePermanentData(refreshToken, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].REFRESH_TOKEN);
            this.localStorage.savePermanentData(expiresIn, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].TOKEN_EXPIRES_IN);
            this.localStorage.savePermanentData(permissions, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].USER_PERMISSIONS);
            this.localStorage.savePermanentData(user, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].CURRENT_USER);
        }
        else {
            this.localStorage.saveSyncedSessionData(accessToken, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].ACCESS_TOKEN);
            this.localStorage.saveSyncedSessionData(idToken, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].ID_TOKEN);
            this.localStorage.saveSyncedSessionData(refreshToken, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].REFRESH_TOKEN);
            this.localStorage.saveSyncedSessionData(expiresIn, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].TOKEN_EXPIRES_IN);
            this.localStorage.saveSyncedSessionData(permissions, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].USER_PERMISSIONS);
            this.localStorage.saveSyncedSessionData(user, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].CURRENT_USER);
        }
        this.localStorage.savePermanentData(rememberMe, _db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].REMEMBER_ME);
    };
    AuthService.prototype.logout = function () {
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].ACCESS_TOKEN);
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].ID_TOKEN);
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].REFRESH_TOKEN);
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].TOKEN_EXPIRES_IN);
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].USER_PERMISSIONS);
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].CURRENT_USER);
        this.configurations.clearLocalChanges();
        this.reevaluateLoginStatus();
    };
    AuthService.prototype.reevaluateLoginStatus = function (currentUser) {
        var _this = this;
        var user = currentUser || this.localStorage.getDataObject(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].CURRENT_USER);
        var isLoggedIn = user != null;
        if (this.previousIsLoggedInCheck != isLoggedIn) {
            setTimeout(function () {
                _this._loginStatus.next(isLoggedIn);
            });
        }
        this.previousIsLoggedInCheck = isLoggedIn;
    };
    AuthService.prototype.getLoginStatusEvent = function () {
        return this._loginStatus.asObservable();
    };
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            var user = this.localStorage.getDataObject(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].CURRENT_USER);
            this.reevaluateLoginStatus(user);
            return user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "userPermissions", {
        get: function () {
            return this.localStorage.getDataObject(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].USER_PERMISSIONS) || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "accessToken", {
        get: function () {
            this.reevaluateLoginStatus();
            return this.localStorage.getData(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].ACCESS_TOKEN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "accessTokenExpiryDate", {
        get: function () {
            this.reevaluateLoginStatus();
            return this.localStorage.getDataObject(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].TOKEN_EXPIRES_IN, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isSessionExpired", {
        get: function () {
            if (this.accessTokenExpiryDate == null) {
                return true;
            }
            return !(this.accessTokenExpiryDate.valueOf() > new Date().valueOf());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "idToken", {
        get: function () {
            this.reevaluateLoginStatus();
            return this.localStorage.getData(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].ID_TOKEN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "refreshToken", {
        get: function () {
            this.reevaluateLoginStatus();
            return this.localStorage.getData(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].REFRESH_TOKEN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.currentUser != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "rememberMe", {
        get: function () {
            return this.localStorage.getDataObject(_db_Keys__WEBPACK_IMPORTED_MODULE_7__["DBkeys"].REMEMBER_ME) == true;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"], _endpoint_factory_service__WEBPACK_IMPORTED_MODULE_5__["EndpointFactory"], _local_store_manager_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreManager"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./ClientApp/app/services/configuration.service.ts":
/*!*********************************************************!*\
  !*** ./ClientApp/app/services/configuration.service.ts ***!
  \*********************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-translation.service */ "./ClientApp/app/services/app-translation.service.ts");
/* harmony import */ var _local_store_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-store-manager.service */ "./ClientApp/app/services/local-store-manager.service.ts");
/* harmony import */ var _db_Keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db-Keys */ "./ClientApp/app/services/db-Keys.ts");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities */ "./ClientApp/app/services/utilities.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(localStorage, translationService) {
        this.localStorage = localStorage;
        this.translationService = translationService;
        this.baseUrl = _utilities__WEBPACK_IMPORTED_MODULE_4__["Utilities"].baseUrl();
        this.fallbackBaseUrl = "http://quickapp.ebenmonney.com";
        this.loginUrl = "/Login";
        //***End of defaults***  
        this._language = null;
        this._homeUrl = null;
        this._theme = null;
        this._showDashboardStatistics = null;
        this._showDashboardNotifications = null;
        this._showDashboardTodo = null;
        this._showDashboardBanner = null;
        this.loadLocalChanges();
    }
    ConfigurationService_1 = ConfigurationService;
    ConfigurationService.prototype.loadLocalChanges = function () {
        if (this.localStorage.exists(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].LANGUAGE)) {
            this._language = this.localStorage.getDataObject(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].LANGUAGE);
            this.translationService.changeLanguage(this._language);
        }
        else {
            this.resetLanguage();
        }
        if (this.localStorage.exists(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].HOME_URL))
            this._homeUrl = this.localStorage.getDataObject(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].HOME_URL);
        if (this.localStorage.exists(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].THEME))
            this._theme = this.localStorage.getDataObject(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].THEME);
        if (this.localStorage.exists(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_STATISTICS))
            this._showDashboardStatistics = this.localStorage.getDataObject(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_STATISTICS);
        if (this.localStorage.exists(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_NOTIFICATIONS))
            this._showDashboardNotifications = this.localStorage.getDataObject(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_NOTIFICATIONS);
        if (this.localStorage.exists(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_TODO))
            this._showDashboardTodo = this.localStorage.getDataObject(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_TODO);
        if (this.localStorage.exists(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_BANNER))
            this._showDashboardBanner = this.localStorage.getDataObject(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_BANNER);
    };
    ConfigurationService.prototype.saveToLocalStore = function (data, key) {
        var _this = this;
        setTimeout(function () { return _this.localStorage.savePermanentData(data, key); });
    };
    ConfigurationService.prototype.import = function (jsonValue) {
        this.clearLocalChanges();
        if (!jsonValue)
            return;
        var importValue = _utilities__WEBPACK_IMPORTED_MODULE_4__["Utilities"].JSonTryParse(jsonValue);
        if (importValue.language != null)
            this.language = importValue.language;
        if (importValue.homeUrl != null)
            this.homeUrl = importValue.homeUrl;
        if (importValue.theme != null)
            this.theme = importValue.theme;
        if (importValue.showDashboardStatistics != null)
            this.showDashboardStatistics = importValue.showDashboardStatistics;
        if (importValue.showDashboardNotifications != null)
            this.showDashboardNotifications = importValue.showDashboardNotifications;
        if (importValue.showDashboardTodo != null)
            this.showDashboardTodo = importValue.showDashboardTodo;
        if (importValue.showDashboardBanner != null)
            this.showDashboardBanner = importValue.showDashboardBanner;
    };
    ConfigurationService.prototype.export = function (changesOnly) {
        if (changesOnly === void 0) { changesOnly = true; }
        var exportValue = {
            language: changesOnly ? this._language : this.language,
            homeUrl: changesOnly ? this._homeUrl : this.homeUrl,
            theme: changesOnly ? this._theme : this.theme,
            showDashboardStatistics: changesOnly ? this._showDashboardStatistics : this.showDashboardStatistics,
            showDashboardNotifications: changesOnly ? this._showDashboardNotifications : this.showDashboardNotifications,
            showDashboardTodo: changesOnly ? this._showDashboardTodo : this.showDashboardTodo,
            showDashboardBanner: changesOnly ? this._showDashboardBanner : this.showDashboardBanner
        };
        return JSON.stringify(exportValue);
    };
    ConfigurationService.prototype.clearLocalChanges = function () {
        this._language = null;
        this._homeUrl = null;
        this._theme = null;
        this._showDashboardStatistics = null;
        this._showDashboardNotifications = null;
        this._showDashboardTodo = null;
        this._showDashboardBanner = null;
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].LANGUAGE);
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].HOME_URL);
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].THEME);
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_STATISTICS);
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_NOTIFICATIONS);
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_TODO);
        this.localStorage.deleteData(_db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_BANNER);
        this.resetLanguage();
    };
    ConfigurationService.prototype.resetLanguage = function () {
        var language = this.translationService.useBrowserLanguage();
        if (language) {
            this._language = language;
        }
        else {
            this._language = this.translationService.changeLanguage();
        }
    };
    Object.defineProperty(ConfigurationService.prototype, "language", {
        get: function () {
            if (this._language != null)
                return this._language;
            return ConfigurationService_1.defaultLanguage;
        },
        set: function (value) {
            this._language = value;
            this.saveToLocalStore(value, _db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].LANGUAGE);
            this.translationService.changeLanguage(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationService.prototype, "homeUrl", {
        get: function () {
            if (this._homeUrl != null)
                return this._homeUrl;
            return ConfigurationService_1.defaultHomeUrl;
        },
        set: function (value) {
            this._homeUrl = value;
            this.saveToLocalStore(value, _db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].HOME_URL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationService.prototype, "theme", {
        get: function () {
            if (this._theme != null)
                return this._theme;
            return ConfigurationService_1.defaultTheme;
        },
        set: function (value) {
            this._theme = value;
            this.saveToLocalStore(value, _db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].THEME);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationService.prototype, "showDashboardStatistics", {
        get: function () {
            if (this._showDashboardStatistics != null)
                return this._showDashboardStatistics;
            return ConfigurationService_1.defaultShowDashboardStatistics;
        },
        set: function (value) {
            this._showDashboardStatistics = value;
            this.saveToLocalStore(value, _db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_STATISTICS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationService.prototype, "showDashboardNotifications", {
        get: function () {
            if (this._showDashboardNotifications != null)
                return this._showDashboardNotifications;
            return ConfigurationService_1.defaultShowDashboardNotifications;
        },
        set: function (value) {
            this._showDashboardNotifications = value;
            this.saveToLocalStore(value, _db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_NOTIFICATIONS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationService.prototype, "showDashboardTodo", {
        get: function () {
            if (this._showDashboardTodo != null)
                return this._showDashboardTodo;
            return ConfigurationService_1.defaultShowDashboardTodo;
        },
        set: function (value) {
            this._showDashboardTodo = value;
            this.saveToLocalStore(value, _db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_TODO);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationService.prototype, "showDashboardBanner", {
        get: function () {
            if (this._showDashboardBanner != null)
                return this._showDashboardBanner;
            return ConfigurationService_1.defaultShowDashboardBanner;
        },
        set: function (value) {
            this._showDashboardBanner = value;
            this.saveToLocalStore(value, _db_Keys__WEBPACK_IMPORTED_MODULE_3__["DBkeys"].SHOW_DASHBOARD_BANNER);
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService.appVersion = "1.0.0";
    //***Specify default configurations here***
    ConfigurationService.defaultLanguage = "en";
    ConfigurationService.defaultHomeUrl = "/";
    ConfigurationService.defaultTheme = "Default";
    ConfigurationService.defaultShowDashboardStatistics = true;
    ConfigurationService.defaultShowDashboardNotifications = true;
    ConfigurationService.defaultShowDashboardTodo = false;
    ConfigurationService.defaultShowDashboardBanner = true;
    ConfigurationService = ConfigurationService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_local_store_manager_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreManager"], _app_translation_service__WEBPACK_IMPORTED_MODULE_1__["AppTranslationService"]])
    ], ConfigurationService);
    return ConfigurationService;
    var ConfigurationService_1;
}());



/***/ }),

/***/ "./ClientApp/app/services/db-Keys.ts":
/*!*******************************************!*\
  !*** ./ClientApp/app/services/db-Keys.ts ***!
  \*******************************************/
/*! exports provided: DBkeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBkeys", function() { return DBkeys; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DBkeys = /** @class */ (function () {
    function DBkeys() {
    }
    DBkeys.CURRENT_USER = "current_user";
    DBkeys.USER_PERMISSIONS = "user_permissions";
    DBkeys.ACCESS_TOKEN = "access_token";
    DBkeys.ID_TOKEN = "id_token";
    DBkeys.REFRESH_TOKEN = "refresh_token";
    DBkeys.TOKEN_EXPIRES_IN = "expires_in";
    DBkeys.REMEMBER_ME = "remember_me";
    DBkeys.LANGUAGE = "language";
    DBkeys.HOME_URL = "home_url";
    DBkeys.THEME = "theme";
    DBkeys.SHOW_DASHBOARD_STATISTICS = "show_dashboard_statistics";
    DBkeys.SHOW_DASHBOARD_NOTIFICATIONS = "show_dashboard_notifications";
    DBkeys.SHOW_DASHBOARD_TODO = "show_dashboard_todo";
    DBkeys.SHOW_DASHBOARD_BANNER = "show_dashboard_banner";
    DBkeys = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DBkeys);
    return DBkeys;
}());



/***/ }),

/***/ "./ClientApp/app/services/endpoint-factory.service.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/services/endpoint-factory.service.ts ***!
  \************************************************************/
/*! exports provided: EndpointFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointFactory", function() { return EndpointFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./ClientApp/app/services/auth.service.ts");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configuration.service */ "./ClientApp/app/services/configuration.service.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var EndpointFactory = /** @class */ (function () {
    function EndpointFactory(http, configurations, injector) {
        this.http = http;
        this.configurations = configurations;
        this.injector = injector;
        this._loginUrl = "/connect/token";
    }
    EndpointFactory_1 = EndpointFactory;
    Object.defineProperty(EndpointFactory.prototype, "loginUrl", {
        get: function () { return this.configurations.baseUrl + this._loginUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EndpointFactory.prototype, "authService", {
        get: function () {
            if (!this._authService)
                this._authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]);
            return this._authService;
        },
        enumerable: true,
        configurable: true
    });
    EndpointFactory.prototype.getLoginEndpoint = function (userName, password) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .append('username', userName)
            .append('password', password)
            .append('grant_type', 'password')
            .append('scope', 'openid email phone profile offline_access roles')
            .append('resource', window.location.origin);
        var requestBody = params.toString();
        return this.http.post(this.loginUrl, requestBody, { headers: header });
    };
    EndpointFactory.prototype.getRefreshLoginEndpoint = function () {
        var _this = this;
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .append('refresh_token', this.authService.refreshToken)
            .append('grant_type', 'refresh_token')
            .append('scope', 'openid email phone profile offline_access roles');
        var requestBody = params.toString();
        return this.http.post(this.loginUrl, requestBody, { headers: header })
            .catch(function (error) {
            return _this.handleError(error, function () { return _this.getRefreshLoginEndpoint(); });
        });
    };
    EndpointFactory.prototype.getRequestHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.authService.accessToken,
            'Content-Type': 'application/json',
            'Accept': "application/vnd.iman.v" + EndpointFactory_1.apiVersion + "+json, application/json, text/plain, */*",
            'App-Version': _configuration_service__WEBPACK_IMPORTED_MODULE_10__["ConfigurationService"].appVersion
        });
        return { headers: headers };
    };
    EndpointFactory.prototype.handleError = function (error, continuation) {
        var _this = this;
        if (error.status == 401) {
            if (this.isRefreshingLogin) {
                return this.pauseTask(continuation);
            }
            this.isRefreshingLogin = true;
            return this.authService.refreshLogin()
                .mergeMap(function (data) {
                _this.isRefreshingLogin = false;
                _this.resumeTasks(true);
                return continuation();
            })
                .catch(function (refreshLoginError) {
                _this.isRefreshingLogin = false;
                _this.resumeTasks(false);
                if (refreshLoginError.status == 401 || (refreshLoginError.url && refreshLoginError.url.toLowerCase().includes(_this.loginUrl.toLowerCase()))) {
                    _this.authService.reLogin();
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('session expired');
                }
                else {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(refreshLoginError || 'server error');
                }
            });
        }
        if (error.url && error.url.toLowerCase().includes(this.loginUrl.toLowerCase())) {
            this.authService.reLogin();
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw((error.error && error.error.error_description) ? "session expired (" + error.error.error_description + ")" : 'session expired');
        }
        else {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }
    };
    EndpointFactory.prototype.pauseTask = function (continuation) {
        if (!this.taskPauser)
            this.taskPauser = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        return this.taskPauser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (continueOp) {
            return continueOp ? continuation() : rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('session expired');
        }));
    };
    EndpointFactory.prototype.resumeTasks = function (continueOp) {
        var _this = this;
        setTimeout(function () {
            if (_this.taskPauser) {
                _this.taskPauser.next(continueOp);
                _this.taskPauser.complete();
                _this.taskPauser = null;
            }
        });
    };
    EndpointFactory.apiVersion = "1";
    EndpointFactory = EndpointFactory_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_10__["ConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], EndpointFactory);
    return EndpointFactory;
    var EndpointFactory_1;
}());



/***/ }),

/***/ "./ClientApp/app/services/jwt-helper.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/services/jwt-helper.ts ***!
  \**********************************************/
/*! exports provided: JwtHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtHelper", function() { return JwtHelper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Helper class to decode and find JWT expiration.
 */

var JwtHelper = /** @class */ (function () {
    function JwtHelper() {
    }
    JwtHelper.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw 'Illegal base64url string!';
            }
        }
        return this.b64DecodeUnicode(output);
    };
    // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    JwtHelper.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    JwtHelper.prototype.decodeToken = function (token) {
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    JwtHelper.prototype.getTokenExpirationDate = function (token) {
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date == null) {
            return false;
        }
        // Token expired?
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    JwtHelper = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtHelper);
    return JwtHelper;
}());



/***/ }),

/***/ "./ClientApp/app/services/local-store-manager.service.ts":
/*!***************************************************************!*\
  !*** ./ClientApp/app/services/local-store-manager.service.ts ***!
  \***************************************************************/
/*! exports provided: LocalStoreManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStoreManager", function() { return LocalStoreManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./ClientApp/app/services/utilities.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocalStoreManager = /** @class */ (function () {
    function LocalStoreManager() {
        var _this = this;
        this.syncKeys = [];
        this.initEvent = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.reservedKeys = ['sync_keys', 'addToSyncKeys', 'removeFromSyncKeys',
            'getSessionStorage', 'setSessionStorage', 'addToSessionStorage', 'removeFromSessionStorage', 'clearAllSessionsStorage'];
        this.sessionStorageTransferHandler = function (event) {
            if (!event.newValue)
                return;
            if (event.key == 'getSessionStorage') {
                if (sessionStorage.length) {
                    _this.localStorageSetItem('setSessionStorage', sessionStorage);
                    localStorage.removeItem('setSessionStorage');
                }
            }
            else if (event.key == 'setSessionStorage') {
                if (!_this.syncKeys.length)
                    _this.loadSyncKeys();
                var data = JSON.parse(event.newValue);
                //console.info("Set => Key: Transfer setSessionStorage" + ",  data: " + JSON.stringify(data));
                for (var key in data) {
                    if (_this.syncKeysContains(key))
                        _this.sessionStorageSetItem(key, JSON.parse(data[key]));
                }
                _this.onInit();
            }
            else if (event.key == 'addToSessionStorage') {
                var data = JSON.parse(event.newValue);
                //console.warn("Set => Key: Transfer addToSessionStorage" + ",  data: " + JSON.stringify(data));
                _this.addToSessionStorageHelper(data["data"], data["key"]);
            }
            else if (event.key == 'removeFromSessionStorage') {
                _this.removeFromSessionStorageHelper(event.newValue);
            }
            else if (event.key == 'clearAllSessionsStorage' && sessionStorage.length) {
                _this.clearInstanceSessionStorage();
            }
            else if (event.key == 'addToSyncKeys') {
                _this.addToSyncKeysHelper(event.newValue);
            }
            else if (event.key == 'removeFromSyncKeys') {
                _this.removeFromSyncKeysHelper(event.newValue);
            }
        };
    }
    LocalStoreManager_1 = LocalStoreManager;
    //Todo: Implement EventListeners for the various event operations and a SessionStorageEvent for specific data keys
    LocalStoreManager.prototype.initialiseStorageSyncListener = function () {
        if (LocalStoreManager_1.syncListenerInitialised == true)
            return;
        LocalStoreManager_1.syncListenerInitialised = true;
        window.addEventListener("storage", this.sessionStorageTransferHandler, false);
        this.syncSessionStorage();
    };
    LocalStoreManager.prototype.deinitialiseStorageSyncListener = function () {
        window.removeEventListener("storage", this.sessionStorageTransferHandler, false);
        LocalStoreManager_1.syncListenerInitialised = false;
    };
    LocalStoreManager.prototype.syncSessionStorage = function () {
        localStorage.setItem('getSessionStorage', '_dummy');
        localStorage.removeItem('getSessionStorage');
    };
    LocalStoreManager.prototype.clearAllStorage = function () {
        this.clearAllSessionsStorage();
        this.clearLocalStorage();
    };
    LocalStoreManager.prototype.clearAllSessionsStorage = function () {
        this.clearInstanceSessionStorage();
        localStorage.removeItem(LocalStoreManager_1.DBKEY_SYNC_KEYS);
        localStorage.setItem('clearAllSessionsStorage', '_dummy');
        localStorage.removeItem('clearAllSessionsStorage');
    };
    LocalStoreManager.prototype.clearInstanceSessionStorage = function () {
        sessionStorage.clear();
        this.syncKeys = [];
    };
    LocalStoreManager.prototype.clearLocalStorage = function () {
        localStorage.clear();
    };
    LocalStoreManager.prototype.addToSessionStorage = function (data, key) {
        this.addToSessionStorageHelper(data, key);
        this.addToSyncKeysBackup(key);
        this.localStorageSetItem('addToSessionStorage', { key: key, data: data });
        localStorage.removeItem('addToSessionStorage');
    };
    LocalStoreManager.prototype.addToSessionStorageHelper = function (data, key) {
        this.addToSyncKeysHelper(key);
        this.sessionStorageSetItem(key, data);
    };
    LocalStoreManager.prototype.removeFromSessionStorage = function (keyToRemove) {
        this.removeFromSessionStorageHelper(keyToRemove);
        this.removeFromSyncKeysBackup(keyToRemove);
        localStorage.setItem('removeFromSessionStorage', keyToRemove);
        localStorage.removeItem('removeFromSessionStorage');
    };
    LocalStoreManager.prototype.removeFromSessionStorageHelper = function (keyToRemove) {
        sessionStorage.removeItem(keyToRemove);
        this.removeFromSyncKeysHelper(keyToRemove);
    };
    LocalStoreManager.prototype.testForInvalidKeys = function (key) {
        if (!key)
            throw new Error("key cannot be empty");
        if (this.reservedKeys.some(function (x) { return x == key; }))
            throw new Error("The storage key \"" + key + "\" is reserved and cannot be used. Please use a different key");
    };
    LocalStoreManager.prototype.syncKeysContains = function (key) {
        return this.syncKeys.some(function (x) { return x == key; });
    };
    LocalStoreManager.prototype.loadSyncKeys = function () {
        if (this.syncKeys.length)
            return;
        this.syncKeys = this.getSyncKeysFromStorage();
    };
    LocalStoreManager.prototype.getSyncKeysFromStorage = function (defaultValue) {
        if (defaultValue === void 0) { defaultValue = []; }
        var data = this.localStorageGetItem(LocalStoreManager_1.DBKEY_SYNC_KEYS);
        if (data == null)
            return defaultValue;
        else
            return data;
    };
    LocalStoreManager.prototype.addToSyncKeys = function (key) {
        this.addToSyncKeysHelper(key);
        this.addToSyncKeysBackup(key);
        localStorage.setItem('addToSyncKeys', key);
        localStorage.removeItem('addToSyncKeys');
    };
    LocalStoreManager.prototype.addToSyncKeysBackup = function (key) {
        var storedSyncKeys = this.getSyncKeysFromStorage();
        if (!storedSyncKeys.some(function (x) { return x == key; })) {
            storedSyncKeys.push(key);
            this.localStorageSetItem(LocalStoreManager_1.DBKEY_SYNC_KEYS, storedSyncKeys);
        }
    };
    LocalStoreManager.prototype.removeFromSyncKeysBackup = function (key) {
        var storedSyncKeys = this.getSyncKeysFromStorage();
        var index = storedSyncKeys.indexOf(key);
        if (index > -1) {
            storedSyncKeys.splice(index, 1);
            this.localStorageSetItem(LocalStoreManager_1.DBKEY_SYNC_KEYS, storedSyncKeys);
        }
    };
    LocalStoreManager.prototype.addToSyncKeysHelper = function (key) {
        if (!this.syncKeysContains(key))
            this.syncKeys.push(key);
    };
    LocalStoreManager.prototype.removeFromSyncKeys = function (key) {
        this.removeFromSyncKeysHelper(key);
        this.removeFromSyncKeysBackup(key);
        localStorage.setItem('removeFromSyncKeys', key);
        localStorage.removeItem('removeFromSyncKeys');
    };
    LocalStoreManager.prototype.removeFromSyncKeysHelper = function (key) {
        var index = this.syncKeys.indexOf(key);
        if (index > -1) {
            this.syncKeys.splice(index, 1);
        }
    };
    LocalStoreManager.prototype.saveSessionData = function (data, key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        this.removeFromSyncKeys(key);
        localStorage.removeItem(key);
        this.sessionStorageSetItem(key, data);
    };
    LocalStoreManager.prototype.saveSyncedSessionData = function (data, key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        localStorage.removeItem(key);
        this.addToSessionStorage(data, key);
    };
    LocalStoreManager.prototype.savePermanentData = function (data, key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        this.removeFromSessionStorage(key);
        this.localStorageSetItem(key, data);
    };
    LocalStoreManager.prototype.moveDataToSessionStorage = function (key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        var data = this.getData(key);
        if (data == null)
            return;
        this.saveSessionData(data, key);
    };
    LocalStoreManager.prototype.moveDataToSyncedSessionStorage = function (key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        var data = this.getData(key);
        if (data == null)
            return;
        this.saveSyncedSessionData(data, key);
    };
    LocalStoreManager.prototype.moveDataToPermanentStorage = function (key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        var data = this.getData(key);
        if (data == null)
            return;
        this.savePermanentData(data, key);
    };
    LocalStoreManager.prototype.exists = function (key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        var data = sessionStorage.getItem(key);
        if (data == null)
            data = localStorage.getItem(key);
        return data != null;
    };
    LocalStoreManager.prototype.getData = function (key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        var data = this.sessionStorageGetItem(key);
        if (data == null)
            data = this.localStorageGetItem(key);
        return data;
    };
    LocalStoreManager.prototype.getDataObject = function (key, isDateType) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        if (isDateType === void 0) { isDateType = false; }
        var data = this.getData(key);
        if (data != null) {
            if (isDateType)
                data = new Date(data);
            return data;
        }
        else {
            return null;
        }
    };
    LocalStoreManager.prototype.deleteData = function (key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        this.removeFromSessionStorage(key);
        localStorage.removeItem(key);
    };
    LocalStoreManager.prototype.localStorageSetItem = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };
    LocalStoreManager.prototype.sessionStorageSetItem = function (key, data) {
        sessionStorage.setItem(key, JSON.stringify(data));
    };
    LocalStoreManager.prototype.localStorageGetItem = function (key) {
        return _utilities__WEBPACK_IMPORTED_MODULE_2__["Utilities"].JSonTryParse(localStorage.getItem(key));
    };
    LocalStoreManager.prototype.sessionStorageGetItem = function (key) {
        return _utilities__WEBPACK_IMPORTED_MODULE_2__["Utilities"].JSonTryParse(sessionStorage.getItem(key));
    };
    LocalStoreManager.prototype.onInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initEvent.next();
            _this.initEvent.complete();
        });
    };
    LocalStoreManager.prototype.getInitEvent = function () {
        return this.initEvent.asObservable();
    };
    LocalStoreManager.syncListenerInitialised = false;
    LocalStoreManager.DBKEY_USER_DATA = "user_data";
    LocalStoreManager.DBKEY_SYNC_KEYS = "sync_keys";
    LocalStoreManager = LocalStoreManager_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LocalStoreManager);
    return LocalStoreManager;
    var LocalStoreManager_1;
}());



/***/ }),

/***/ "./ClientApp/app/services/notification-endpoint.service.ts":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/services/notification-endpoint.service.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationEndpoint", function() { return NotificationEndpoint; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NotificationEndpoint = /** @class */ (function () {
    function NotificationEndpoint() {
        this.demoNotifications = [
            {
                "id": 1,
                "header": "20 New Products were added to your inventory by \"administrator\"",
                "body": "20 new \"BMW M6\" were added to your stock by \"administrator\" on 5/28/2017 4:54:13 PM",
                "isRead": true,
                "isPinned": true,
                "date": "2017-05-28T16:29:13.5877958"
            },
            {
                "id": 2,
                "header": "1 Product running low",
                "body": "You are running low on \"Nissan Patrol\". 2 Items remaining",
                "isRead": false,
                "isPinned": false,
                "date": "2017-05-28T19:54:42.4144502"
            },
            {
                "id": 3,
                "header": "Tomorrow is half day",
                "body": "Guys, tomorrow we close by midday. Please check in your sales before noon. Thanx. Alex.",
                "isRead": false,
                "isPinned": false,
                "date": "2017-05-30T11:13:42.4144502"
            }
        ];
    }
    NotificationEndpoint.prototype.getNotificationEndpoint = function (notificationId) {
        var notification = this.demoNotifications.find(function (val) { return val.id == notificationId; });
        var response;
        if (notification) {
            response = this.createResponse(notification, 200);
        }
        else {
            response = this.createResponse(null, 404);
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(response.body);
    };
    NotificationEndpoint.prototype.getNotificationsEndpoint = function (page, pageSize) {
        var notifications = this.demoNotifications;
        var response = this.createResponse(this.demoNotifications, 200);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(response.body);
    };
    NotificationEndpoint.prototype.getUnreadNotificationsEndpoint = function (userId) {
        var unreadNotifications = this.demoNotifications.filter(function (val) { return !val.isRead; });
        var response = this.createResponse(unreadNotifications, 200);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(response.body);
    };
    NotificationEndpoint.prototype.getNewNotificationsEndpoint = function (lastNotificationDate) {
        var unreadNotifications = this.demoNotifications;
        var response = this.createResponse(unreadNotifications, 200);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(response.body);
    };
    NotificationEndpoint.prototype.getPinUnpinNotificationEndpoint = function (notificationId, isPinned) {
        var notification = this.demoNotifications.find(function (val) { return val.id == notificationId; });
        var response;
        if (notification) {
            response = this.createResponse(null, 204);
            if (isPinned == null)
                isPinned = !notification.isPinned;
            notification.isPinned = isPinned;
            notification.isRead = true;
        }
        else {
            response = this.createResponse(null, 404);
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(response.body);
    };
    NotificationEndpoint.prototype.getReadUnreadNotificationEndpoint = function (notificationIds, isRead) {
        var _loop_1 = function (notificationId) {
            var notification = this_1.demoNotifications.find(function (val) { return val.id == notificationId; });
            if (notification) {
                notification.isRead = isRead;
            }
        };
        var this_1 = this;
        for (var _i = 0, notificationIds_1 = notificationIds; _i < notificationIds_1.length; _i++) {
            var notificationId = notificationIds_1[_i];
            _loop_1(notificationId);
        }
        var response = this.createResponse(null, 204);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(response.body);
    };
    NotificationEndpoint.prototype.getDeleteNotificationEndpoint = function (notificationId) {
        var notification = this.demoNotifications.find(function (val) { return val.id == notificationId; });
        var response;
        if (notification) {
            this.demoNotifications = this.demoNotifications.filter(function (val) { return val.id != notificationId; });
            response = this.createResponse(notification, 200);
        }
        else {
            response = this.createResponse(null, 404);
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(response.body);
    };
    NotificationEndpoint.prototype.createResponse = function (body, status) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ body: body, status: status });
    };
    NotificationEndpoint = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NotificationEndpoint);
    return NotificationEndpoint;
}());



/***/ }),

/***/ "./ClientApp/app/services/notification.service.ts":
/*!********************************************************!*\
  !*** ./ClientApp/app/services/notification.service.ts ***!
  \********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var rxjs_add_operator_startWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/startWith */ "./node_modules/rxjs-compat/_esm5/add/operator/startWith.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./ClientApp/app/services/auth.service.ts");
/* harmony import */ var _notification_endpoint_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-endpoint.service */ "./ClientApp/app/services/notification-endpoint.service.ts");
/* harmony import */ var _models_notification_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/notification.model */ "./ClientApp/app/models/notification.model.ts");
// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotificationService = /** @class */ (function () {
    function NotificationService(notificationEndpoint, authService) {
        this.notificationEndpoint = notificationEndpoint;
        this.authService = authService;
    }
    Object.defineProperty(NotificationService.prototype, "recentNotifications", {
        get: function () {
            return this._recentNotifications;
        },
        set: function (notifications) {
            this._recentNotifications = notifications;
        },
        enumerable: true,
        configurable: true
    });
    NotificationService.prototype.getNotification = function (notificationId) {
        return this.notificationEndpoint.getNotificationEndpoint(notificationId)
            .map(function (response) { return _models_notification_model__WEBPACK_IMPORTED_MODULE_7__["Notification"].Create(response); });
    };
    NotificationService.prototype.getNotifications = function (page, pageSize) {
        var _this = this;
        return this.notificationEndpoint.getNotificationsEndpoint(page, pageSize)
            .map(function (response) {
            return _this.getNotificationsFromResponse(response);
        });
    };
    NotificationService.prototype.getUnreadNotifications = function (userId) {
        var _this = this;
        return this.notificationEndpoint.getUnreadNotificationsEndpoint(userId)
            .map(function (response) { return _this.getNotificationsFromResponse(response); });
    };
    NotificationService.prototype.getNewNotifications = function () {
        var _this = this;
        return this.notificationEndpoint.getNewNotificationsEndpoint(this.lastNotificationDate)
            .map(function (response) { return _this.processNewNotificationsFromResponse(response); });
    };
    NotificationService.prototype.getNewNotificationsPeriodically = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].interval(10000)
            .startWith(0)
            .flatMap(function () {
            return _this.notificationEndpoint.getNewNotificationsEndpoint(_this.lastNotificationDate)
                .map(function (response) { return _this.processNewNotificationsFromResponse(response); });
        });
    };
    NotificationService.prototype.pinUnpinNotification = function (notificationOrNotificationId, isPinned) {
        if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) {
            return this.notificationEndpoint.getPinUnpinNotificationEndpoint(notificationOrNotificationId, isPinned);
        }
        else {
            return this.pinUnpinNotification(notificationOrNotificationId.id);
        }
    };
    NotificationService.prototype.readUnreadNotification = function (notificationIds, isRead) {
        return this.notificationEndpoint.getReadUnreadNotificationEndpoint(notificationIds, isRead);
    };
    NotificationService.prototype.deleteNotification = function (notificationOrNotificationId) {
        var _this = this;
        if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) {
            return this.notificationEndpoint.getDeleteNotificationEndpoint(notificationOrNotificationId)
                .map(function (response) {
                _this.recentNotifications = _this.recentNotifications.filter(function (n) { return n.id != notificationOrNotificationId; });
                return _models_notification_model__WEBPACK_IMPORTED_MODULE_7__["Notification"].Create(response);
            });
        }
        else {
            return this.deleteNotification(notificationOrNotificationId.id);
        }
    };
    NotificationService.prototype.processNewNotificationsFromResponse = function (response) {
        var notifications = this.getNotificationsFromResponse(response);
        for (var _i = 0, notifications_1 = notifications; _i < notifications_1.length; _i++) {
            var n = notifications_1[_i];
            if (n.date > this.lastNotificationDate)
                this.lastNotificationDate = n.date;
        }
        return notifications;
    };
    NotificationService.prototype.getNotificationsFromResponse = function (response) {
        var notifications = [];
        for (var i in response) {
            notifications[i] = _models_notification_model__WEBPACK_IMPORTED_MODULE_7__["Notification"].Create(response[i]);
        }
        notifications.sort(function (a, b) { return b.date.valueOf() - a.date.valueOf(); });
        notifications.sort(function (a, b) { return (a.isPinned === b.isPinned) ? 0 : a.isPinned ? -1 : 1; });
        this.recentNotifications = notifications;
        return notifications;
    };
    Object.defineProperty(NotificationService.prototype, "currentUser", {
        get: function () {
            return this.authService.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_notification_endpoint_service__WEBPACK_IMPORTED_MODULE_6__["NotificationEndpoint"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./ClientApp/app/services/utilities.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/services/utilities.ts ***!
  \*********************************************/
/*! exports provided: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return Utilities; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    Utilities_1 = Utilities;
    Utilities.getHttpResponseMessage = function (data) {
        var responses = [];
        if (data instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponseBase"]) {
            if (this.checkNoNetwork(data)) {
                responses.push("" + this.noNetworkMessageCaption + this.captionAndMessageSeparator + " " + this.noNetworkMessageDetail);
            }
            else {
                var responseObject = this.getResponseBody(data);
                if (responseObject && (typeof responseObject === 'object' || responseObject instanceof Object)) {
                    for (var key in responseObject) {
                        if (key)
                            responses.push("" + key + this.captionAndMessageSeparator + " " + responseObject[key]);
                        else if (responseObject[key])
                            responses.push(responseObject[key].toString());
                    }
                }
            }
            if (!responses.length && this.getResponseBody(data))
                responses.push(data.statusText + ": " + this.getResponseBody(data).toString());
        }
        if (!responses.length)
            responses.push(data.toString());
        if (this.checkAccessDenied(data))
            responses.splice(0, 0, "" + this.accessDeniedMessageCaption + this.captionAndMessageSeparator + " " + this.accessDeniedMessageDetail);
        return responses;
    };
    Utilities.findHttpResponseMessage = function (messageToFind, data, seachInCaptionOnly, includeCaptionInResult) {
        if (seachInCaptionOnly === void 0) { seachInCaptionOnly = true; }
        if (includeCaptionInResult === void 0) { includeCaptionInResult = false; }
        var searchString = messageToFind.toLowerCase();
        var httpMessages = this.getHttpResponseMessage(data);
        for (var _i = 0, httpMessages_1 = httpMessages; _i < httpMessages_1.length; _i++) {
            var message = httpMessages_1[_i];
            var fullMessage = Utilities_1.splitInTwo(message, this.captionAndMessageSeparator);
            if (fullMessage.firstPart && fullMessage.firstPart.toLowerCase().indexOf(searchString) != -1) {
                return includeCaptionInResult ? message : fullMessage.secondPart || fullMessage.firstPart;
            }
        }
        if (!seachInCaptionOnly) {
            for (var _a = 0, httpMessages_2 = httpMessages; _a < httpMessages_2.length; _a++) {
                var message = httpMessages_2[_a];
                if (message.toLowerCase().indexOf(searchString) != -1) {
                    if (includeCaptionInResult) {
                        return message;
                    }
                    else {
                        var fullMessage = Utilities_1.splitInTwo(message, this.captionAndMessageSeparator);
                        return fullMessage.secondPart || fullMessage.firstPart;
                    }
                }
            }
        }
        return null;
    };
    Utilities.getResponseBody = function (response) {
        if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"])
            return response.body;
        if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"])
            return response.error || response.message || response.statusText;
    };
    Utilities.checkNoNetwork = function (response) {
        if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponseBase"]) {
            return response.status == 0;
        }
        return false;
    };
    Utilities.checkAccessDenied = function (response) {
        if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponseBase"]) {
            return response.status == 403;
        }
        return false;
    };
    Utilities.checkNotFound = function (response) {
        if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponseBase"]) {
            return response.status == 404;
        }
        return false;
    };
    Utilities.checkIsLocalHost = function (url, base) {
        if (url) {
            var location_1 = new URL(url, base);
            return location_1.hostname === "localhost" || location_1.hostname === "127.0.0.1";
        }
        return false;
    };
    Utilities.getQueryParamsFromString = function (paramString) {
        if (!paramString)
            return null;
        var params = {};
        for (var _i = 0, _a = paramString.split("&"); _i < _a.length; _i++) {
            var param = _a[_i];
            var keyValue = Utilities_1.splitInTwo(param, "=");
            params[keyValue.firstPart] = keyValue.secondPart;
        }
        return params;
    };
    Utilities.splitInTwo = function (text, separator) {
        var separatorIndex = text.indexOf(separator);
        if (separatorIndex == -1)
            return { firstPart: text, secondPart: null };
        var part1 = text.substr(0, separatorIndex).trim();
        var part2 = text.substr(separatorIndex + 1).trim();
        return { firstPart: part1, secondPart: part2 };
    };
    Utilities.safeStringify = function (object) {
        var result;
        try {
            result = JSON.stringify(object);
            return result;
        }
        catch (error) {
        }
        var simpleObject = {};
        for (var prop in object) {
            if (!object.hasOwnProperty(prop)) {
                continue;
            }
            if (typeof (object[prop]) == 'object') {
                continue;
            }
            if (typeof (object[prop]) == 'function') {
                continue;
            }
            simpleObject[prop] = object[prop];
        }
        result = "[***Sanitized Object***]: " + JSON.stringify(simpleObject);
        return result;
    };
    Utilities.JSonTryParse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            if (value === "undefined")
                return void 0;
            return value;
        }
    };
    Utilities.TestIsObjectEmpty = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    Utilities.TestIsUndefined = function (value) {
        return typeof value === 'undefined';
        //return value === undefined;
    };
    Utilities.TestIsString = function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    Utilities.capitalizeFirstLetter = function (text) {
        if (text)
            return text.charAt(0).toUpperCase() + text.slice(1);
        else
            return text;
    };
    Utilities.toTitleCase = function (text) {
        return text.replace(/\w\S*/g, function (subString) {
            return subString.charAt(0).toUpperCase() + subString.substr(1).toLowerCase();
        });
    };
    Utilities.toLowerCase = function (items) {
        if (items instanceof Array) {
            var loweredRoles = [];
            for (var i = 0; i < items.length; i++) {
                loweredRoles[i] = items[i].toLowerCase();
            }
            return loweredRoles;
        }
        else if (typeof items === 'string' || items instanceof String) {
            return items.toLowerCase();
        }
    };
    Utilities.uniqueId = function () {
        return this.randomNumber(1000000, 9000000).toString();
    };
    Utilities.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Utilities.baseUrl = function () {
        var base = '';
        if (window.location.origin)
            base = window.location.origin;
        else
            base = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        return base.replace(/\/$/, '');
    };
    Utilities.printDateOnly = function (date) {
        date = new Date(date);
        var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        var monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        var dayOfWeek = date.getDay();
        var dayOfMonth = date.getDate();
        var sup = "";
        var month = date.getMonth();
        var year = date.getFullYear();
        if (dayOfMonth == 1 || dayOfMonth == 21 || dayOfMonth == 31) {
            sup = "st";
        }
        else if (dayOfMonth == 2 || dayOfMonth == 22) {
            sup = "nd";
        }
        else if (dayOfMonth == 3 || dayOfMonth == 23) {
            sup = "rd";
        }
        else {
            sup = "th";
        }
        var dateString = dayNames[dayOfWeek] + ", " + dayOfMonth + sup + " " + monthNames[month] + " " + year;
        return dateString;
    };
    Utilities.printTimeOnly = function (date) {
        date = new Date(date);
        var period = "";
        var minute = date.getMinutes().toString();
        var hour = date.getHours();
        period = hour < 12 ? "AM" : "PM";
        if (hour == 0) {
            hour = 12;
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if (minute.length == 1) {
            minute = "0" + minute;
        }
        var timeString = hour + ":" + minute + " " + period;
        return timeString;
    };
    Utilities.printDate = function (date, separator) {
        if (separator === void 0) { separator = "at"; }
        return Utilities_1.printDateOnly(date) + " " + separator + " " + Utilities_1.printTimeOnly(date);
    };
    Utilities.printFriendlyDate = function (date, separator) {
        if (separator === void 0) { separator = "-"; }
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        var test = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        if (test.toDateString() == today.toDateString())
            return "Today " + separator + " " + Utilities_1.printTimeOnly(date);
        if (test.toDateString() == yesterday.toDateString())
            return "Yesterday " + separator + " " + Utilities_1.printTimeOnly(date);
        else
            return Utilities_1.printDate(date, separator);
    };
    Utilities.printShortDate = function (date, separator, dateTimeSeparator) {
        if (separator === void 0) { separator = "/"; }
        if (dateTimeSeparator === void 0) { dateTimeSeparator = "-"; }
        var day = date.getDate().toString();
        var month = (date.getMonth() + 1).toString();
        var year = date.getFullYear();
        if (day.length == 1)
            day = "0" + day;
        if (month.length == 1)
            month = "0" + month;
        return "" + month + separator + day + separator + year + " " + dateTimeSeparator + " " + Utilities_1.printTimeOnly(date);
    };
    Utilities.parseDate = function (date) {
        if (date) {
            if (date instanceof Date) {
                return date;
            }
            if (typeof date === 'string' || date instanceof String) {
                if (date.search(/[a-su-z+]/i) == -1)
                    date = date + "Z";
                return new Date(date);
            }
            if (typeof date === 'number' || date instanceof Number) {
                return new Date(date);
            }
        }
    };
    Utilities.printDuration = function (start, end) {
        start = new Date(start);
        end = new Date(end);
        // get total seconds between the times
        var delta = Math.abs(start.valueOf() - end.valueOf()) / 1000;
        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        // what's left is seconds
        var seconds = delta % 60; // in theory the modulus is not required
        var printedDays = "";
        if (days)
            printedDays = days + " days";
        if (hours)
            printedDays += printedDays ? ", " + hours + " hours" : hours + " hours";
        if (minutes)
            printedDays += printedDays ? ", " + minutes + " minutes" : minutes + " minutes";
        if (seconds)
            printedDays += printedDays ? " and " + seconds + " seconds" : seconds + " seconds";
        if (!printedDays)
            printedDays = "0";
        return printedDays;
    };
    Utilities.getAge = function (birthDate, otherDate) {
        birthDate = new Date(birthDate);
        otherDate = new Date(otherDate);
        var years = (otherDate.getFullYear() - birthDate.getFullYear());
        if (otherDate.getMonth() < birthDate.getMonth() ||
            otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
            years--;
        }
        return years;
    };
    Utilities.searchArray = function (searchTerm, caseSensitive) {
        var values = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            values[_i - 2] = arguments[_i];
        }
        if (!searchTerm)
            return true;
        if (!caseSensitive)
            searchTerm = searchTerm.toLowerCase();
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var value = values_1[_a];
            if (value != null) {
                var strValue = value.toString();
                if (!caseSensitive)
                    strValue = strValue.toLowerCase();
                if (strValue.indexOf(searchTerm) !== -1)
                    return true;
            }
        }
        return false;
    };
    Utilities.moveArrayItem = function (array, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += this.length;
        }
        while (newIndex < 0) {
            newIndex += this.length;
        }
        if (newIndex >= this.length) {
            var k = newIndex - this.length;
            while ((k--) + 1) {
                array.push(undefined);
            }
        }
        array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
    };
    Utilities.expandCamelCase = function (text) {
        if (!text)
            return text;
        return text.replace(/([A-Z][a-z]+)/g, " $1")
            .replace(/([A-Z][A-Z]+)/g, " $1")
            .replace(/([^A-Za-z ]+)/g, " $1");
    };
    Utilities.testIsAbsoluteUrl = function (url) {
        var r = new RegExp('^(?:[a-z]+:)?//', 'i');
        return r.test(url);
    };
    Utilities.convertToAbsoluteUrl = function (url) {
        return Utilities_1.testIsAbsoluteUrl(url) ? url : '//' + url;
    };
    Utilities.removeNulls = function (obj) {
        var isArray = obj instanceof Array;
        for (var k in obj) {
            if (obj[k] === null) {
                isArray ? obj.splice(k, 1) : delete obj[k];
            }
            else if (typeof obj[k] == "object") {
                Utilities_1.removeNulls(obj[k]);
            }
            if (isArray && obj.length == k) {
                Utilities_1.removeNulls(obj);
            }
        }
        return obj;
    };
    Utilities.debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this;
            var args_ = arguments;
            var later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args_);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args_);
        };
    };
    Utilities.captionAndMessageSeparator = ":";
    Utilities.noNetworkMessageCaption = "No Network";
    Utilities.noNetworkMessageDetail = "The server cannot be reached";
    Utilities.accessDeniedMessageCaption = "Access Denied!";
    Utilities.accessDeniedMessageDetail = "";
    Utilities.cookies = {
        getItem: function (sKey) {
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        },
        setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                return false;
            }
            var sExpires = "";
            if (vEnd) {
                switch (vEnd.constructor) {
                    case Number:
                        sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                        break;
                    case String:
                        sExpires = "; expires=" + vEnd;
                        break;
                    case Date:
                        sExpires = "; expires=" + vEnd.toUTCString();
                        break;
                }
            }
            document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
            return true;
        },
        removeItem: function (sKey, sPath, sDomain) {
            if (!sKey) {
                return false;
            }
            document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
            return true;
        },
        hasItem: function (sKey) {
            return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
        },
        keys: function () {
            var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
            for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
                aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
            }
            return aKeys;
        }
    };
    Utilities = Utilities_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Utilities);
    return Utilities;
    var Utilities_1;
}());



/***/ }),

/***/ "./ClientApp/assets/images/demo/banner1.png":
/*!**************************************************!*\
  !*** ./ClientApp/assets/images/demo/banner1.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner1.png";

/***/ }),

/***/ "./ClientApp/assets/images/demo/banner2.png":
/*!**************************************************!*\
  !*** ./ClientApp/assets/images/demo/banner2.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner2.png";

/***/ }),

/***/ "./ClientApp/assets/images/demo/banner3.png":
/*!**************************************************!*\
  !*** ./ClientApp/assets/images/demo/banner3.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner3.png";

/***/ }),

/***/ "./ClientApp/assets/images/demo/banner4.png":
/*!**************************************************!*\
  !*** ./ClientApp/assets/images/demo/banner4.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner4.png";

/***/ }),

/***/ "./ClientApp/assets/images/logo.png":
/*!******************************************!*\
  !*** ./ClientApp/assets/images/logo.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ8AAAD9CAYAAACiAvKYAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAACAASURBVHic7Z3rjyTndd5/3dMzsytrL9y5kBSXFKmQWtomBYuBowQQqRiilA+GINsUjMD+YMtCAuQP8gd/ceQYDowwiiX7m2VFtsggkEk71o3kUqIu1N5ndneWa3N359KdD6fOVk1NX+ryVnVV1/MDGrOXufR01/vUOc9533N6o9GIiB5wHHgMOAc8CnwE+BzwYWCZcOwBPwP+CvgxcAE4D/wcuAMcBPxZQogK6EXi0QNWgbPArwIvAQ8Da9HjAWAp4M89AG4C16PHVeCvgX/AhGQL2A/484QQgemNRqOkcHwC+CIWeaxhgrEE9DGBCcUIGGIi4kJyBfge8KfAG5iA1B2BjGZ/ihACYIClKh/ChOMPgKeBjej/QgpGkh6xMI2AB7Ho5hQmVH+EiUud0ccQS6d2o48SEiGm0BuNRk8DHwe+BPwi1QvHOEbR4x7wNvAXmBeyV+NzOAC2gXewKGi3xp8tROsYAM8Av009Ecck/OetYFHQf8RSmWGNz2EX+CHw58ANJB5CTGWApSsfBdaZj3A4PSxlOYOlLx6N1MVu9PMfBI4B71OveAnRKgbAbwCnma9wOEkvpG76WOT1IGYW38bSKCHEGPrYHo4Hoj93mSXsdXgB2+OyMt+nI0SzGRB281eb6WPp0jqWOnkkpqqLEGPoerSRxFOm5ejRhDROiMYi8ThMj8PRh6IyISbQJ65qKDyX7yFEZvrYRiwdRDMm+R5CiBQD4CdUc/itKMlzL3kjoh6xd1HkPM4k30NRmRApBsBfAr8OnCD8Abi8jLDzLDew07a3yLdRyyOHNYpHDmnf4z2030OIIwyAbwNPYgtmk/mF6i4cW9j5lq+R/2TtErbJ6/PYyeB18kdTSd/jB8AlJB5CHGGALZCXgZOYaMzrYJwLx1vAfwX+Mfp73sjjkejPX6JYKtbHdtxuYOKzEv2btqoLkWAAvIst3D7Wy2NEfM6l6jTGvYSkcPwxFg1dxO74efwGLz1fxVKeIl6F+x4PEJ+zyZs+CbHwDLC2fxeivw+BLwBPYQLi/TWq5ADzOM4DX8aE4wL5hQPiHiB7xFWkEfkF0MXjk8DrwGXU2UyIQwyI+2hcIO5pcQ74NYp5BnkYYadZrwBfxVKVIhFH8vu54bqNRQyrFE9dNrE06C1MZIUQEYPoowvIRazK8TNswZyh+shjF2t8fAVLXYoKR/r7fQvrUeLtFPOyhHVZO458DyGOMEj82aOAfeCnWKjuvkdVeKTg7f+GlN9TscfhyKOo79HHTOTT0ccdJB5C3Gcw5t+G2ELepZ6KS+gNWElBku8hREXMiipGNTxCM873KBIxpH0PHZITIsGinqpN+h43KX52Z5zvIYRgcRdDVb7Hor5eQuRmURfDJN8jL0tYxel5rGyt1EWIiEUXjxC+h5/5OYvEQ4j7LKp4QDjfY4CNYjiGfA8h7rPIC2EP2/C2he3RKFLd8f4gpzg8DlO0mNFoxHA45ODggOFwSDTsXeRk3D6PRcH3q9yNHvsUayuY3O/xGnZEX/s92kGfMY2hRqMRt2/f7o1Go1Gv1xueOHFiv9fraQNgThZZPMCijwvANcz3OEaxcy5J30PnXJpLUiyWsCpZskteD+iPRiNGo1Hv/Pnzo3Pnzl0ZjUZXsShVApKDLojHdeBV4FmKH/Qb53voQmsGLhQDTCRcLJajP3+GuMXEMtCL4Ny5c/d6vd4Per3en6GOcblZdPEYYhHHTeL9Hnm3qo/zPXTOZX5Mii7WsQZOn4n+voyV2R+KPt5PX3q9Xu/EiROj0Wh0r9frnez1eq9jVbmr6H3NTBfEI6Tv8QJ2zkW+R71Miy7WgRextHKdw2LhX3OoM14UeYyirz8L/Aesn8w2Eo/MLLp4QFjfYx075/Im8j2qJEt04Zv21rC+tT6k64hYRIyLNn0T4Dqa15ybroiHfI9mM83oXCGOLryvrEcXA+Lowg1RZ1Zq6v/vXsgyzRg90hq6IB4hfQ9vjLwG3EYGWxmyGp0uHhsUiy5msUQc1ZzG0lvdFDLQFfHYxdKMO4TxPTSSIT9Fjc4y0UUWBphf8iLwBvk79neWLogHWOpyEfM9dijveyQHSml74mSyRBcb0WOm0RkRukGVfI+CdEk8tol9jw3yi4dGUc6mSHThf69LLMZ9b/keBeiKeAyxTUA70UfvlapRlOUJWkalWrGYhHyPAnRJPJK+R5nOYl33Peoqo9bJAHue8j1y0BXxAPkeRZlHGbVu/KYg3yMHXRMP+R7ZyFNGddFoenQxibTvsYJ8j0x0STx8v8cN4uZA8j2MppZR62QJ+33XkO+Ria6Jxy4WfXiDoE3y32UWxfdoQxm1Tny/x2eQ75GJLokHhBlF2Vbfo21l1Lrxm4KLqHyPGXRNPEKNZGiL7zEpuljhcHTR5DJqHSR9jxXke2Sia+IRahRlU32PPGXUdSxMb6vRWQXue2i/Rwa6Kh7J6GOV9voeXSij1skAe61exN5X+R5T6Jp4QPt9jy6VUevGz7n46zbAIlQxhi6KR9t8D5VR68FfE0/pNjBRvoeij7F0UTza4HuojDo/Bthr+hmsY5xSlwl0WTya5HuojNocBthrrJLtDLooHhDO9/DOYu4xFGlN2I9+vncoW0Vl1Hnhr2EyJVXJdgJdFY+QvscD2MI+RbGB2ktYyfR3gHPYgT2VUeeLG6faqj6FropHKN8jOYrydeAy+Ucy9DGxeAb4t8AHkNE5b+R7ZKCr+dw436PIxeGpyyY2kmG5wPfoRV93DPgg8AvRnz3SSD5EPcj3yECXX5Sk7+GnbIuwBByPHu57FCEtFBKM+eCvu3yPGXRZPEL5Hn3gJBaBnKT4azpKPMT8SfseXV4rY+nyCzLJ98hL0vfwcyN58Z6qEo7mkPQ9ilTjFh6JRzN8jxEmYDLlmoN8jxl0/QUJ5XsMKOd7KGVpFvI9MtB18fA5tt5ZrMgC9gvtFHaHOkW+13WERRz7KH1pGvI9ptD1F8NbE96NHnn3aDhJ38O3jed5DjcxEbtR4jmI8Mj3mELXxQPikQxlfY9TmO9xlnzicYAJx9eBK0g8moR8jynoxYhHMoTwPY5Fjzy+h0ceW9Hz2EOpSxOQ7zEDiUc8kuEm8X6Pun2PfeKu7jcoLmAiPPI9JqAXohm+h6cuf4OJiFKX5iDfYwISD2MPuICNopyH7zHEqj0efSjyaA7yPSagF8Lwku2rzMf3IPqZu9FjH/keTcDTUR/JIN8jgcTDCOl7eIOgMiXbMgImwrNE3NlNvkeEXgQjtO/xAvAodrfKSrJke63EcxDh8VGULyLf4z4Sj5iQvkd6JEMW3Pe4jnkfijyag1dc1pHvcR+9CDG+3+MVipdLJ41kyIr7HnvI92gKSd9D+z0SSDxihtj4hJ3oo58zyUt6JIN8j8VAvkeKzr8ACdz3uBM9ynQWk++xeMj3SCHxOIyfc7mGRSDyPYQj3yNF51+AFO57lNnvId9j8Uj7Hiso8pB4pPD9HjeIxWNevsc2OufSNJaw91TnXOj4Lz8G9z18m3jR1CWE7/E3yPdoGu576JwLEo9xhGhNGML32MZERJFHc/Cbgs650PFffgIhR1GW8T28q7t8j2Yg3yOFxOMooUYyyPdYTOR7RHT2F59CqJEM8j0Wk7b7Hj6obCl69Ck4mbCrg65nkfQ9nqbYRTLJ98gSxcj3aC5t9D36xKmWD1A/gV2P97Br7B45I2yJx3iq9D2yfi/3PZL9Pfz7ivngr73392iq7+H+jAvGKiZ2jxKn0CeBc8DfAf8PuIRda5mReIxnku+Rd+GmfY/3MIXPQnokwwcoNo1OhGcJ69ni51zuMv9pf+nowjugPYo9100shV6P/u8Edl0/hN0gt5F4BGGc77FK/rtM0vf4AabuWcUjec7ll7A3WeIxP5IRo29V/zXge5gvVbd49IkFw0UjHV2sY9feZvRv3px7Cbux7QK3o/9fBd4nx+8h8ZhMU3wPjzzke9TPKPXnA+ymco+4aVSdJfRkdLFCfG09go063SCOLpaJu/mfZrJB+gB2bZ4iZ3FA4jGZJvke6ZKxfI9qSL8vHoF6CnsdizKuAZeB/xn9W1VRx7Towm9In8Qih+OYSKSji2kVlWTH/9ej3ylzZU/iMRn5Ht0gHV24WBxEjxvYJL9tTDS8fL4VPUKKR9roXMEEwaOLY8TRxQa28D2y8BtTnvJrP/razej7v4W1o8iExGMy8j0WkyzRxRXsffe/f514op83anKBKSsc04xO34zmqcgx4uginYpAsYh0CYtajhN3/M/0O0k8phPK9/CO6uvke4Pke5RnmlikowuPJr6OveZ7HO7sFkIwspRRk0anRxenKBZdzHoufaxsezr6mPkwqMRjOiF9j6LGlHyP/EwyOv2ji8W06GKHWCjKCkaeMuo0oxPCv++FfQ+Jx3RC+R5ljCn5HrOZlYrcwHwKHyS+TbXRRYgyaqjoIstzLeR7SDymE8r3KGNMyfcYT9bownuzuFjsEotFVdFFqDJqXQwo4HtIPGYTwveA4saUfA8jaxnVBaKOVKTKMmpduAfjYnaKjL6HxGM2oXyPwsYU3fQ98hidyTKqpyZVG51Vl1HrJJlWv4ZVBGem1RKP2cj3qI82GZ11lFHrwndCbwJnyZhWSzxmI9+jOrIYne5ZeG/ZrpRR62aACeAxMqbVEo9shPI9ChlTLJbvkdfo9FSkDqOzaWXUuijke0g8suEhsndU956ieS6WwsZURFt9j6Jl1HkYnU0ro9ZJbt9D4pENH8lwl/g0ZZ62gk4hYyrxHNrie+Q5LzKpjFrVFvBkGfUsh43OJpZR6yK37yHxyM4ecAG7S97CLrqiR/RzGVMRTfY9QpwXqbuM+jz2PiSNzkWPLmaRy/eQeGTHL/pXgWexi7Co75HLmIrwyMMX3F70PaD+C7zp50WylFH9qEDbjc5Q+Gvo57DWsEZBEw9xSjyy46MobxLv96jb99gnDvU9danrPVQZdfHJdQJc4pGd0L7HC9h+jzy+R3Ikw8ew1KWq91Bl1O6Rq/OdxCMfIX0PD6nfJLvvkRzJsEX4kq3KqN0mV+c7iUc+5u17gC3IXcKMZFAZVaTJ3PlO4pGPkL5HZmNqzHNIpgS/QL73UWVUMY3MvofEIx/ue9yJHiF8jzKtCZ9htu+hMqrIQ2bfQ+KRnz3gIhbO71De9ygzkmGbo76HyqiiDJl9D4lHfjz3d99jg/ziEWIkw270XNKzQ9pURt3AqiYqozaLTL6HxCM/Q+zF3Ik+DpnPSIYbxIv/WPT9/PyLyqiiDJnSaolHftK+R9FyaVnfYwv4H9jde4gtPK+MqIwqypAprZZ4FKMJvsd1bI/IHwIvRV/7v1EZVZQnU1ot8ShGE3yPfeBq9PFS9LU3URlVhGFmWi3xKIbv97iBLdZ5jKIEEwkfeejPS2VUEYKZabXEoxjue7i/sIMtqDpHUSafS1HBUBlVTGJmWi3xKE6oUZRFfY+iqIwqsjAzrZZ4FCfkKMqivkfWn6EyqijC1LRa4lGcUCMZyvoe41AZVYRgalot8ShOqJEMIXwP/z5J70JlVFGWqWm1xKMcTfE9+tHP/hDwBM2fjSrawdS0WuJRjqb4HkuYWPwutu/kgxz2LhRdiKJMTKslHuVoku+xjAnIU8TH9CUWoiwT0+r+lC8SsxnnexTZc5F8gx4lf4+QIdZQ6DXsvM0g+h4ecQhRFB+TuoHd3LzzncQjAEnfw3eb5mXiG5SRESZcOxRPn4QYh6e7yQ2CEo9AhPQ9jrxBGfEeHt7fIzmOUoiyJCcdugEv8QjAJN8jL2PfoJzPoWz6JMQ4PDLexI4tSDwCEWrhjn2DchAifRJiEkvYFoDjRGm1xCMMoRbukTcox9eGSJ+EGEcPuxZPYje4k0g8ghHK9zjyBuX4+lDpkxDjWCJuybAOLEs8wiDfQyw6vhN6E2sGtSLxCIN8D9EFkpMOVyUe4Qi1cAfI9xDNw1s7+BmpByQe4fB5KN5ZzEdR5iH9BhXZ7yHfQ1SFp9XPAw9LPMLhrQnvRo/9gt8n6XusId9DNIek7/GExCMsPpKhrO+RNKbke4gm4Wn1CYlHWHwkQwjfw40p+R6iKXha/QDwuMQjLD6S4SbxwpXvIRaJJSyd/nWJR1jke4hFx7cTKPKogD3gAjaKUr6HWESW0A7TSvCS7avM1/coWzYWIolfQ0Ps+tpVG8LwTPI98nT0Gud77JA9ihmXPuXtTiaEi4X7ZvvYdXgTeE/iEZ5QCzfZmvB1rHdkHg8lXTY+Rv7O7qJbpMXigPhGuIO1uLyGRdU7Eo9qSPseRRau+x4b2DmXN7E3L89z8LLxL2MH7SQeIk1SMA6II4tbHL6GtrDrz29Iijwqwl/0V4BnKL5wB9ggqaTvkSd1KZs+icVjWnRxA7vhfQu7fn3P0M8xD22XeAvAUOJRDUNsfMJO9HFIcd/DGyOvYR3Ss45kkO8hIDbKs0QX17AI4+eYaOxHDxeNQzcuiUc1+MK9Ez3KdBYrM4oyRPok2sc4o9Oji5tMjy7uEYvF1CqdxKM63LC8hil9Gd+j6CjKZNn4WeR7LCrToosdLPJ0o/M6JhqZootpSDyqw8NBX7gb5F+4ZUdRyvdYXKaVUW9i6YcbnXexCPR69Dm7ZIwupiHxqI4QvgeUG0Up32NxyFNG9aMJY41OAh1XkHhUh3wPUZaiZdRbHI4uKjnbJPGolqb4HiHKxqJ6gpVRqeEwpMSjWprie4RIn0R4Kiuj1oHEo1rcsLxBfEhuXr5H2fRJhKGWMmodSDyqxRfuNvEJ103yRx8hfI+y6ZMoxiyjs5Iyah1IPKon2VvjaWyn6Lx8jzLpk8hOHqOzkjJqHUg8qifUKMoQ+z3Kpk9iPK0yOkMh8aieST1F5+F7lE2fhNFqozMUEo/qGddTdJX6fY8Q6VOXWRijcwp94ig32bnOf2+v1AESj7poiu+hkQzZmXVe5B7xFvBWGZ0J/OT2MrbzeAU7xX2auGv/AbE4bmG/DyDxqIsm+B6h0qdFJmt04Uan7+hsk9HZJxaLQfQ4AzyK3ZjWsK79p7HrbQ94B3gZS5UlHjXTBN8jVPq0SBQto7bJ6OwTC4aLxhomFmeif1vH0uFNoiHWxJHHLvAB4P8AbwDvE/2uEo96kO/RHEKVUZsqFnA4ulghvuGcxfb4bGDX0Hr0ed5o26MN9zw82t0EHoo+/5+JrjmJR33I95gPXSijTosu/Fp5HhOBY5hIeHSxxGGTNB0NT7xhSTzqo+jCTV/8ZUZIdsH36EIZdZLRuY41y05GFxvY4j+DiYXfcCaJRRqfELcZfa9V4F9QD9Naybpwp90pb2Gh9A+J75R5RGRRfY+ulFFnGZ0uFqvE0UU6FYH8vXSXop+1SaKXrsSjPqYt3Kx5+DbxZq93oj/n5R7wLvBN4CnsoshyB2oSXSyjrpLd6MwbXcxibOoi8aiXcb4HxKIyKw/3i3+P+OLPyz5wBTgPvE0ckg5otohMii78dUu33Vu0MuoG9j5lMToh7PvoqctG9LNXgL7Eo168IfFV7CL/EHZM3iOJv2V2Hl724h9ii+tHWO0e4KMcNmGbICJZy6ivUFPbvQrIW0Y9Q3ajMyT+c5LeyS2JR734wr2K3fn97vlNzMf4KfXk4XvAZeDvsYV3Dvg08K+Yr4gUKaPW1nYvECHLqHXi4vFJbPzpZYlH/exiUcafY4v0FuZBXMUWRB0X/wgTqIuYWP0ME6+nqFdEVEYtV0atk2TV5RHgvMSjfvYwz+EGtjAPsIW8T70LYIQtwH0s4rkK/ITDIvIkdidM7ikp+zNBZdRQZdS6GQDHo8cxiUf9+KLdJd8Gr6rw4/r7mP+SFJFzwG9insgG8b6gPBe1yqjVlVHrJD3+9EGJx3zJuhh6iUf6uPQkkgs2y8IbJyLvYov59zAhue+0M/kizzK9zKMLlVGbKxbjcN/jU8C7Eo/mkr6bLWEXX/K49CS8c9hO9PGA7IsyKSI/IR4a9ZvALwEPczSNURl1fmXUuvANjSew32tN4tEs+thFucr4u9lpDh+XnoTf7V+NPo5LB2b5LMPocy4kPj4HfIG4tOtpl8qo8yujVsm4m4J3o9vqjUZNFfrO0MMuMA9/H2T83WxAfDfLGnm4EelvetKI9ArPHaaLiD+/Y9i+lH+DpTEPRf93G5VR511GDUWWvTWXgb8Avi/xmC8uGutYOvBhbIF+inJ3sywlUN9b8hOyi8gqtpCei57jm9H3VBl1MQQjy96an2PVwm2Jx3xws83v5h8DPoeV8lw0Qt7Nxl0gvqv1G8QicoV4r8m4C8MF5EFsAd2Jvldbjc5FKqNmJcTeml1gKPGoH1+AD2P7KH4R+Hz0Z09PqrxA/eJJHtJzETmPbVu/jPkckwQk2UckWdFpIl0oo06jsr01Eo/6SHsHvwq8RLyHwisY/rlVM05Efgh8BXgNOzl5l/aNp+xqGTVJLXtrVG2pB482Nog9AxcOjzbqvliTi8RTJfdYTmMC4qbnPs2NLEBl1LnsrVHkUT0uHI8A/5pYNMbtl5gnyX4jl7C+DX+GmaJXmZzGzAOVUcdHFy4YteytkXhUS7JC8Qngi8Q7NZdp3sXrF+QuJhhvAV/GTlFeZL4CojLq9DLqHeJO77XsrVHaUh1p4fgDrAFQ0TMideC+zCrmyywD/wl7vt8m3jBWh4CojJqvjHqHOLqoZW+NxKMaZglHky9mf27L2MLsYc8f7GKuKgJRGbVlLQokHuHpYRf+I9huzDYJh+PPcYA9b7CUy2v8lwhThVEZ1WhliwKJR3j62MX+cWzBtU04kviejg3s4nyJ+OJ9n/zRh8qoC9SiQOIRlh4WXp/FTqGeo73C4biArGNVoueIzbgs6UvysJ/KqOPLqONGWjYiupiGxCMsy9jW7V/Bdo76Ho42XvRplrHy8kvYRT/EDNRdpu9EPY4donsMlVEnlVEnjbSce3QxDYlHOHz36JPAZ7EFszLXZxQOr8KcwaKp3yc+1n+Z8f5HD0tJngKewdoabqAyaltbFBxB4hGGpEn6NO0dpjSNpP/h7Qk9vL7D0Tukp3AvYiVVf00WIbrIY3TOpYxaBxKPMHhI/3HgN2i/zzGJpP/xNPAsdhL3AkejD19gFzHRWMd8j7a+JmWMztZGF9OQeJQnma741nOPOhaVFSwt+yy2jd3vrsnoY8ThPL9tC6YLIy1LIfEozwBbSOew0HyRTNJxJP2PJzE/4xJHow+fDfMzLDrZoflDtbNGF23uxRoMiUc5PK9/HDMEqxaO9N1w3EWa7rJe1XPxHaifBr6LLaw7qc/xodyvYCKzXvFzykvWkZbpMurCpiJ5kHiUo49VFD4CPIFVEKpIV5IXuZf9bgDvcVQ8+sTVjKomvnn08QBWmn4MayR0j8OLaEi8rXoLe52WAz6PIhQZaTmujNo5sUgj8SjHCkdPc4ZcpC4MflT+OrYQr2B3c99vkWQpei7/nqMT3wj8/Lz68jAmIu9jiyv5/O9hzZavYIu07tSlVedF2oTEozh++O0xzPM4Tdiow1OSfewu+Dbwl9id8F3sYp8UeZzBjtOfw1ocuhcza2BTHjw1OoM1Q34D8z52U5/nd/NXserMBtWKR6vPi7QJiUdxfJFuEG9+CoULh8+1fRP4E+A7xP1F/eIe53m8F32dm5WfZ/LApjIkhx/74bV/4Wjq8h62gN9LPOfQEdpCnBdpExKP4vjIhOex3N83P5UlKRyXMTPyj7A7+xWiztUzvt7F5R7wz1ik8hzw29j+jFDGZTL62MT8n9vRz3W8udCd6BHiNK7KqA1A4lGcZeJRCaFTln2sk9d3gT/E9lJcI18vUZ/4dpn4DgzW3OckViUKgc8vfSF6npc4LB5gi/Qi9jvsRD87b+rShZGWrULiUQzfaeljIUPl8EmP400s4vgBJiT7Bb/fAWZkXgD+EYtg1jCfJkT64tUd7+6VHMvgFPE9spZR2zzSstVIPIrhpcrkXooQKYuXNn+I9Q59gzjiKMOIuOz4NeJDe+uUF770azEuAkv7HpPu/EXKqAt1XqRNSDyK0cNCf59YH8rrOMDunF/DzNErlBcOZ4gttO9G3z+ZboXwPtJimt6q7sKQTBtURm0xEo9ieJ7/75g9sT4P7nVcwLyKSb0yijCKvt9l4slwa5iIhIg+kqnLexz1PdIm5y4qo7YaiUcxPM/3BrwhzNIhtoiuYNWR9G7NEAyxcP+nwN9ih/jWKC8es0xT93LuYf6LD9ZWGbXFSDyKkwzTQ3CALaZXiRdSFexhC3MLu+v7oiyTumQxTXexYdrfxaKf11EZtdVIPMrRI5xZOuLoZqoq8H0Xd6PHPuU7nmUxTfewiORPsDL3bVRGbTUSj+YwyVSsgj3MV7mGeQ1F9l3k5QCLMm5gYuO/p6KLlrLIDWvEZNyY9D0SIXZ9ZmGIRTp70c+UcLQYiUc3GWHb1m9HH4XIjcSjm/SADwInoo9C5Ebi0U18dsrzxB3NyzCa8FEsMBKPcowIZ2561SbkdvdJLGNT7TYJt0/FN37tku8An2gpEo9i+FbqkKZfcsv7Sap7b/pYafZY9AhRcRtiVZtrWBWnqj0qokFIPIoxwhaL97YMISC+S/OTxC0Nq2AZ21W6gQlViCjnAKvavEK1G9xEg5B4FMPPZPzf6GOIUqc3FPa5rquEf398xszjWI9Tb2JUlro2uIkGIfEoRnqxhMrvB1gj4bNYy8AVwnkfPhLzYay36ZOEGU6V3NzmD/kdHUA7TIvhnoefxfAj5WUWurf0W8N6jm5j5uO0SfR56GPp0Mei7x9yJOYBlqrILO0QEo9i+ClR72B1izAdxbyp8keB3yNejJcotyh9ONVZ4m7qoUZiulm6hbX+k9/REZS2FGcXOw36Lew0bAjfIzmJ/mlMQJ4FPkSxIdEezXwAE47nsC7qISfb+Wng5LF60QEkHsXxUwHs+QAAA+1JREFUo+3XiM+HhNrvMcD2YPwy8F+AT2DNlvOYqP3o8x/GBOjTWPd091JC4OnbTcJWnkQLUNpSHO9OvkXcFTxEVy5ngC30AfCfsZ6m/0C2uS3LWJryMLHHkZzbEmrw0xD7va8RezQSj44g8SjHPSx1+TusgrFGuJ6gEA+T7gFfwtKNi9gwp+uY1zBpYtzjVDsxzn2fbeCbxN3PREeQeJTDe45exiKQJwi3ucsXuHsgS5iQ+KzaVxm/x6SuWbXe6f0drNt70fEQoqVIPMrhqYuPdfRBziGn0rsHso5t6nocE41nmRx5nIo+10Uj5POBw1HHN7D2gndQytIpJB7l2cXuut/ASqxnCDeNzfGqSR+LbFYxMRl3KK+X+vwqDtgp6hASjwAMsZTl+9gk+01sl2ioUmgS/35LVN82cBKKOgQg8QiBD5a+CHwVEw7vlzGvBV4Vvg3do463CTuYSrQI7fMIg0cf38EEZIvF3aa9hwnGX2MCchdFHZ1E4hEGn8Z2CRtQ/TYW1i+SgCTTlbeBf8JERDtKO4rSlnD4NLYfAV/Bqh1eJanKuKwLF44t4C3gf2EH9u6yOOIocqLIIyx72J6P14CXsUjET8S2dZGlhePL2E7XLZSudBqJR1iS5unrWAWmzWXMpEF6Hvhj4NvY73eP9gqiCIDSlvC4gFwA/ju2w9O3mVdRvq0Kj5bcy3kZ+Hvs95JwCEUeFeGjFd/Ewvy3OFyBafrC8+folZXvY6mYIg5xH0Ue1eHnXl7H9nt8EevRsUbYA2qh8VRlFxOO7wD/DQmHSNEbjXQtVEgP20r+CNaI57cwAfGj8U1LY5Id0i4B3wP+FIug2uzdiAqQeFSPC8gGsYh8ATsu731E/fPmhUcbyX0cLxOnKp5yCXEfpS3V4wbqJeyO7n04fp/5pzF+5/BoYwsTjq9w2OMI0WJRLBgSj3rwdn3vY82D3FP4LSwCeYjqjs9Pe07+PK5jp2O/iqUoPyLuWKbQVIxFaUv9pNOYXwE+izXuWeewiPjnh8Lf7CFWSbmJmaLnMeH4DhYh3Y3+XxeHmIjEYz74QOtj2CncJ7FeIJ8GPoKJyGlMRLwvh39dXjzC8AbN+1gzoW3gx9gBt38i9jbUh1RkQuIxX5LNih/CuoR9BPhU9HePRE4RH++f1OwnLRLJKOMWFmXsYL03rmGjEn6MpShXiU/H6oIQmZB4NIM+FmUcIx5C/Ri2K/V5LDpZjT53CYtK1jg8azY9AuEg8e/bWJPmLUw8PMq4jlIUURCJR7PwiMKjkQ1s4NMTwHHifqYfBj4XffSGy3tYL9W/ij56afUAiyzeIY4wdqPPDzVrRnSQ/w94AJ3braa44gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./ClientApp/assets/scripts/alertify.js":
/*!**********************************************!*\
  !*** ./ClientApp/assets/scripts/alertify.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================

/**
 * alertify
 * An unobtrusive customizable JavaScript notification system
 *
 * @author Fabien Doiron <fabien.doiron@gmail.com>
 * @copyright Fabien Doiron 2013
 * @license MIT <http://opensource.org/licenses/mit-license.php>
 * @link http://fabien-d.github.com/alertify.js/
 * @module alertify
 * @version 0.3.11
 */
(function (global, undefined) {
	"use strict";

	var document = global.document,
	    Alertify;

	Alertify = function () {

		var _alertify = {},
		    dialogs   = {},
		    isopen    = false,
		    keys      = { ENTER: 13, ESC: 27, SPACE: 32 },
		    queue     = [],
		    $, btnCancel, btnOK, btnReset, btnResetBack, btnFocus, elCallee, elCover, elDialog, elLog, form, input, getTransitionEvent;

		/**
		 * Markup pieces
		 * @type {Object}
		 */
		dialogs = {
			buttons : {
				holder : "<nav class=\"alertify-buttons\">{{buttons}}</nav>",
				submit : "<button type=\"submit\" class=\"alertify-button alertify-button-ok\" id=\"alertify-ok\">{{ok}}</button>",
				ok     : "<button class=\"alertify-button alertify-button-ok\" id=\"alertify-ok\">{{ok}}</button>",
				cancel : "<button class=\"alertify-button alertify-button-cancel\" id=\"alertify-cancel\">{{cancel}}</button>"
			},
			input   : "<div class=\"alertify-text-wrapper\"><input type=\"text\" class=\"alertify-text\" id=\"alertify-text\"></div>",
			message : "<p class=\"alertify-message\">{{message}}</p>",
			log     : "<article class=\"alertify-log{{class}}\">{{message}}</article>"
		};

		/**
		 * Return the proper transitionend event
		 * @return {String}    Transition type string
		 */
		getTransitionEvent = function () {
			var t,
			    type,
			    supported   = false,
			    el          = document.createElement("fakeelement"),
			    transitions = {
				    "WebkitTransition" : "webkitTransitionEnd",
				    "MozTransition"    : "transitionend",
				    "OTransition"      : "otransitionend",
				    "transition"       : "transitionend"
			    };

			for (t in transitions) {
				if (el.style[t] !== undefined) {
					type      = transitions[t];
					supported = true;
					break;
				}
			}

			return {
				type      : type,
				supported : supported
			};
		};

		/**
		 * Shorthand for document.getElementById()
		 *
		 * @param  {String} id    A specific element ID
		 * @return {Object}       HTML element
		 */
		$ = function (id) {
			return document.getElementById(id);
		};

		/**
		 * Alertify private object
		 * @type {Object}
		 */
		_alertify = {

			/**
			 * Labels object
			 * @type {Object}
			 */
			labels : {
				ok     : "OK",
				cancel : "Cancel"
			},

			/**
			 * Delay number
			 * @type {Number}
			 */
			delay : 5000,

			/**
			 * Whether buttons are reversed (default is secondary/primary)
			 * @type {Boolean}
			 */
			buttonReverse : false,

			/**
			 * Which button should be focused by default
			 * @type {String}	"ok" (default), "cancel", or "none"
			 */
			buttonFocus : "ok",

			/**
			 * Set the transition event on load
			 * @type {[type]}
			 */
			transition : undefined,

			/**
			 * Set the proper button click events
			 *
			 * @param {Function} fn    [Optional] Callback function
			 *
			 * @return {undefined}
			 */
			addListeners : function (fn) {
				var hasOK     = (typeof btnOK !== "undefined"),
				    hasCancel = (typeof btnCancel !== "undefined"),
				    hasInput  = (typeof input !== "undefined"),
				    val       = "",
				    self      = this,
				    ok, cancel, common, key, reset;

				// ok event handler
				ok = function (event) {
					if (typeof event.preventDefault !== "undefined") event.preventDefault();
					common(event);
					if (typeof input !== "undefined") val = input.value;
					if (typeof fn === "function") {
						if (typeof input !== "undefined") {
							fn(true, val);
						}
						else fn(true);
					}
					return false;
				};

				// cancel event handler
				cancel = function (event) {
					if (typeof event.preventDefault !== "undefined") event.preventDefault();
					common(event);
					if (typeof fn === "function") fn(false);
					return false;
				};

				// common event handler (keyup, ok and cancel)
				common = function (event) {
					self.hide();
					self.unbind(document.body, "keyup", key);
					self.unbind(btnReset, "focus", reset);
					if (hasOK) self.unbind(btnOK, "click", ok);
					if (hasCancel) self.unbind(btnCancel, "click", cancel);
				};

				// keyup handler
				key = function (event) {
					var keyCode = event.keyCode;
					if ((keyCode === keys.SPACE && !hasInput) || (hasInput && keyCode === keys.ENTER)) ok(event);
					if (keyCode === keys.ESC && hasCancel) cancel(event);
				};

				// reset focus to first item in the dialog
				reset = function (event) {
					if (hasInput) input.focus();
					else if (!hasCancel || self.buttonReverse) btnOK.focus();
					else btnCancel.focus();
				};

				// handle reset focus link
				// this ensures that the keyboard focus does not
				// ever leave the dialog box until an action has
				// been taken
				this.bind(btnReset, "focus", reset);
				this.bind(btnResetBack, "focus", reset);
				// handle OK click
				if (hasOK) this.bind(btnOK, "click", ok);
				// handle Cancel click
				if (hasCancel) this.bind(btnCancel, "click", cancel);
				// listen for keys, Cancel => ESC
				this.bind(document.body, "keyup", key);
				if (!this.transition.supported) {
					this.setFocus();
				}
			},

			/**
			 * Bind events to elements
			 *
			 * @param  {Object}   el       HTML Object
			 * @param  {Event}    event    Event to attach to element
			 * @param  {Function} fn       Callback function
			 *
			 * @return {undefined}
			 */
			bind : function (el, event, fn) {
				if (typeof el.addEventListener === "function") {
					el.addEventListener(event, fn, false);
				} else if (el.attachEvent) {
					el.attachEvent("on" + event, fn);
				}
			},

			/**
			 * Use alertify as the global error handler (using window.onerror)
			 *
			 * @return {boolean} success
			 */
			handleErrors : function () {
				if (typeof global.onerror !== "undefined") {
					var self = this;
					global.onerror = function (msg, url, line) {
						self.error("[" + msg + " on line " + line + " of " + url + "]", 0);
					};
					return true;
				} else {
					return false;
				}
			},

			/**
			 * Append button HTML strings
			 *
			 * @param {String} secondary    The secondary button HTML string
			 * @param {String} primary      The primary button HTML string
			 *
			 * @return {String}             The appended button HTML strings
			 */
			appendButtons : function (secondary, primary) {
				return this.buttonReverse ? primary + secondary : secondary + primary;
			},

			/**
			 * Build the proper message box
			 *
			 * @param  {Object} item    Current object in the queue
			 *
			 * @return {String}         An HTML string of the message box
			 */
			build : function (item) {
				var html    = "",
				    type    = item.type,
				    message = item.message,
				    css     = item.cssClass || "";

				html += "<div class=\"alertify-dialog\">";
				html += "<a id=\"alertify-resetFocusBack\" class=\"alertify-resetFocus\" href=\"#\">Reset Focus</a>";

				if (_alertify.buttonFocus === "none") html += "<a href=\"#\" id=\"alertify-noneFocus\" class=\"alertify-hidden\"></a>";

				// doens't require an actual form
				if (type === "prompt") html += "<div id=\"alertify-form\">";

				html += "<article class=\"alertify-inner\">";
				html += dialogs.message.replace("{{message}}", message);

				if (type === "prompt") html += dialogs.input;

				html += dialogs.buttons.holder;
				html += "</article>";

				if (type === "prompt") html += "</div>";

				html += "<a id=\"alertify-resetFocus\" class=\"alertify-resetFocus\" href=\"#\">Reset Focus</a>";
				html += "</div>";

				switch (type) {
				case "confirm":
					html = html.replace("{{buttons}}", this.appendButtons(dialogs.buttons.cancel, dialogs.buttons.ok));
					html = html.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
					break;
				case "prompt":
					html = html.replace("{{buttons}}", this.appendButtons(dialogs.buttons.cancel, dialogs.buttons.submit));
					html = html.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
					break;
				case "alert":
					html = html.replace("{{buttons}}", dialogs.buttons.ok);
					html = html.replace("{{ok}}", this.labels.ok);
					break;
				default:
					break;
				}

				elDialog.className = "alertify alertify-" + type + " " + css;
				elCover.className  = "alertify-cover";
				return html;
			},

			/**
			 * Close the log messages
			 *
			 * @param  {Object} elem    HTML Element of log message to close
			 * @param  {Number} wait    [optional] Time (in ms) to wait before automatically hiding the message, if 0 never hide
			 *
			 * @return {undefined}
			 */
			close : function (elem, wait) {
				// Unary Plus: +"2" === 2
				var timer = (wait && !isNaN(wait)) ? +wait : this.delay,
				    self  = this,
				    hideElement, transitionDone;

				// set click event on log messages
				this.bind(elem, "click", function () {
					hideElement(elem);
				});
				// Hide the dialog box after transition
				// This ensure it doens't block any element from being clicked
				transitionDone = function (event) {
					event.stopPropagation();
					// unbind event so function only gets called once
					self.unbind(this, self.transition.type, transitionDone);
					// remove log message
					elLog.removeChild(this);
					if (!elLog.hasChildNodes()) elLog.className += " alertify-logs-hidden";
				};
				// this sets the hide class to transition out
				// or removes the child if css transitions aren't supported
				hideElement = function (el) {
					// ensure element exists
					if (typeof el !== "undefined" && el.parentNode === elLog) {
						// whether CSS transition exists
						if (self.transition.supported) {
							self.bind(el, self.transition.type, transitionDone);
							el.className += " alertify-log-hide";
						} else {
							elLog.removeChild(el);
							if (!elLog.hasChildNodes()) elLog.className += " alertify-logs-hidden";
						}
					}
				};
				// never close (until click) if wait is set to 0
				if (wait === 0) return;
				// set timeout to auto close the log message
				setTimeout(function () { hideElement(elem); }, timer);
			},

			/**
			 * Create a dialog box
			 *
			 * @param  {String}   message        The message passed from the callee
			 * @param  {String}   type           Type of dialog to create
			 * @param  {Function} fn             [Optional] Callback function
			 * @param  {String}   placeholder    [Optional] Default value for prompt input field
			 * @param  {String}   cssClass       [Optional] Class(es) to append to dialog box
			 *
			 * @return {Object}
			 */
			dialog : function (message, type, fn, placeholder, cssClass) {
				// set the current active element
				// this allows the keyboard focus to be resetted
				// after the dialog box is closed
				elCallee = document.activeElement;
				// check to ensure the alertify dialog element
				// has been successfully created
				var check = function () {
					if ((elLog && elLog.scrollTop !== null) && (elCover && elCover.scrollTop !== null)) return;
					else check();
				};
				// error catching
				if (typeof message !== "string") throw new Error("message must be a string");
				if (typeof type !== "string") throw new Error("type must be a string");
				if (typeof fn !== "undefined" && typeof fn !== "function") throw new Error("fn must be a function");
				// initialize alertify if it hasn't already been done
				this.init();
				check();

				queue.push({ type: type, message: message, callback: fn, placeholder: placeholder, cssClass: cssClass });
				if (!isopen) this.setup();

				return this;
			},

			/**
			 * Extend the log method to create custom methods
			 *
			 * @param  {String} type    Custom method name
			 *
			 * @return {Function}
			 */
			extend : function (type) {
				if (typeof type !== "string") throw new Error("extend method must have exactly one paramter");
				return function (message, wait) {
					this.log(message, type, wait);
					return this;
				};
			},

			/**
			 * Hide the dialog and rest to defaults
			 *
			 * @return {undefined}
			 */
			hide : function () {
				var transitionDone,
				    self = this;
				// remove reference from queue
				queue.splice(0,1);
				// if items remaining in the queue
				if (queue.length > 0) this.setup(true);
				else {
					isopen = false;
					// Hide the dialog box after transition
					// This ensure it doens't block any element from being clicked
					transitionDone = function (event) {
						event.stopPropagation();
						// unbind event so function only gets called once
						self.unbind(elDialog, self.transition.type, transitionDone);
					};
					// whether CSS transition exists
					if (this.transition.supported) {
						this.bind(elDialog, this.transition.type, transitionDone);
						elDialog.className = "alertify alertify-hide alertify-hidden";
					} else {
						elDialog.className = "alertify alertify-hide alertify-hidden alertify-isHidden";
					}
					elCover.className  = "alertify-cover alertify-cover-hidden";
					// set focus to the last element or body
					// after the dialog is closed
					elCallee.focus();
				}
			},

			/**
			 * Initialize Alertify
			 * Create the 2 main elements
			 *
			 * @return {undefined}
			 */
			init : function () {
				// ensure legacy browsers support html5 tags
				document.createElement("nav");
				document.createElement("article");
				document.createElement("section");
				// cover
				if ($("alertify-cover") == null) {
					elCover = document.createElement("div");
					elCover.setAttribute("id", "alertify-cover");
					elCover.className = "alertify-cover alertify-cover-hidden";
					document.body.appendChild(elCover);
				}
				// main element
				if ($("alertify") == null) {
					isopen = false;
					queue = [];
					elDialog = document.createElement("section");
					elDialog.setAttribute("id", "alertify");
					elDialog.className = "alertify alertify-hidden";
					document.body.appendChild(elDialog);
				}
				// log element
				if ($("alertify-logs") == null) {
					elLog = document.createElement("section");
					elLog.setAttribute("id", "alertify-logs");
					elLog.className = "alertify-logs alertify-logs-hidden";
					document.body.appendChild(elLog);
				}
				// set tabindex attribute on body element
				// this allows script to give it focus
				// after the dialog is closed
				document.body.setAttribute("tabindex", "0");
				// set transition type
				this.transition = getTransitionEvent();
			},

			/**
			 * Show a new log message box
			 *
			 * @param  {String} message    The message passed from the callee
			 * @param  {String} type       [Optional] Optional type of log message
			 * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding the log
			 *
			 * @return {Object}
			 */
			log : function (message, type, wait) {
				// check to ensure the alertify dialog element
				// has been successfully created
				var check = function () {
					if (elLog && elLog.scrollTop !== null) return;
					else check();
				};
				// initialize alertify if it hasn't already been done
				this.init();
				check();

				elLog.className = "alertify-logs";
				this.notify(message, type, wait);
				return this;
			},

			/**
			 * Add new log message
			 * If a type is passed, a class name "alertify-log-{type}" will get added.
			 * This allows for custom look and feel for various types of notifications.
			 *
			 * @param  {String} message    The message passed from the callee
			 * @param  {String} type       [Optional] Type of log message
			 * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding
			 *
			 * @return {undefined}
			 */
			notify : function (message, type, wait) {
				var log = document.createElement("article");
				log.className = "alertify-log" + ((typeof type === "string" && type !== "") ? " alertify-log-" + type : "");
				log.innerHTML = message;
				// append child
				elLog.appendChild(log);
				// triggers the CSS animation
				setTimeout(function() { log.className = log.className + " alertify-log-show"; }, 50);
				this.close(log, wait);
			},

			/**
			 * Set properties
			 *
			 * @param {Object} args     Passing parameters
			 *
			 * @return {undefined}
			 */
			set : function (args) {
				var k;
				// error catching
				if (typeof args !== "object" && args instanceof Array) throw new Error("args must be an object");
				// set parameters
				for (k in args) {
					if (args.hasOwnProperty(k)) {
						this[k] = args[k];
					}
				}
			},

			/**
			 * Common place to set focus to proper element
			 *
			 * @return {undefined}
			 */
			setFocus : function () {
				if (input) {
					input.focus();
					input.select();
				}
				else btnFocus.focus();
			},

			/**
			 * Initiate all the required pieces for the dialog box
			 *
			 * @return {undefined}
			 */
			setup : function (fromQueue) {
				var item = queue[0],
				    self = this,
				    transitionDone;

				// dialog is open
				isopen = true;
				// Set button focus after transition
				transitionDone = function (event) {
					event.stopPropagation();
					self.setFocus();
					// unbind event so function only gets called once
					self.unbind(elDialog, self.transition.type, transitionDone);
				};
				// whether CSS transition exists
				if (this.transition.supported && !fromQueue) {
					this.bind(elDialog, this.transition.type, transitionDone);
				}
				// build the proper dialog HTML
				elDialog.innerHTML = this.build(item);
				// assign all the common elements
				btnReset  = $("alertify-resetFocus");
				btnResetBack  = $("alertify-resetFocusBack");
				btnOK     = $("alertify-ok")     || undefined;
				btnCancel = $("alertify-cancel") || undefined;
				btnFocus  = (_alertify.buttonFocus === "cancel") ? btnCancel : ((_alertify.buttonFocus === "none") ? $("alertify-noneFocus") : btnOK),
				input     = $("alertify-text")   || undefined;
				form      = $("alertify-form")   || undefined;
				// add placeholder value to the input field
				if (typeof item.placeholder === "string" && item.placeholder !== "") input.value = item.placeholder;
				if (fromQueue) this.setFocus();
				this.addListeners(item.callback);
			},

			/**
			 * Unbind events to elements
			 *
			 * @param  {Object}   el       HTML Object
			 * @param  {Event}    event    Event to detach to element
			 * @param  {Function} fn       Callback function
			 *
			 * @return {undefined}
			 */
			unbind : function (el, event, fn) {
				if (typeof el.removeEventListener === "function") {
					el.removeEventListener(event, fn, false);
				} else if (el.detachEvent) {
					el.detachEvent("on" + event, fn);
				}
			}
		};

		return {
			alert   : function (message, fn, cssClass) { _alertify.dialog(message, "alert", fn, "", cssClass); return this; },
			confirm : function (message, fn, cssClass) { _alertify.dialog(message, "confirm", fn, "", cssClass); return this; },
			extend  : _alertify.extend,
			init    : _alertify.init,
			log     : function (message, type, wait) { _alertify.log(message, type, wait); return this; },
			prompt  : function (message, fn, placeholder, cssClass) { _alertify.dialog(message, "prompt", fn, placeholder, cssClass); return this; },
			success : function (message, wait) { _alertify.log(message, "success", wait); return this; },
			error   : function (message, wait) { _alertify.log(message, "error", wait); return this; },
			set     : function (args) { _alertify.set(args); },
			labels  : _alertify.labels,
			debug   : _alertify.handleErrors
		};
	};

	// AMD and window support
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () { return new Alertify(); }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(window));


/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./ClientApp/styles.css":
/*!******************************!*\
  !*** ./ClientApp/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.ngx-datatable.material.table-shadow {\r\n    background: #FFF;\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);\r\n    /**\r\n\t * Shared Styles\r\n\t */\r\n    /**\r\n\t * Global Row Styles\r\n\t */\r\n    /**\r\n\t * Header Styles\r\n\t */\r\n    /**\r\n\t * Body Styles\r\n\t */\r\n    /**\r\n\t * Footer Styles\r\n\t */\r\n}\r\n\r\n.ngx-datatable.material.xs {\r\n    font-size: 10px;\r\n}\r\n\r\n.ngx-datatable.material.sm {\r\n    font-size: 12px;\r\n}\r\n\r\n.ngx-datatable.material.md {\r\n    font-size: 14px;\r\n}\r\n\r\n.ngx-datatable.material.lg {\r\n    font-size: 16px;\r\n}\r\n\r\n.ngx-datatable.material.table-striped .datatable-row-even {\r\n    background: #f9f9f9;\r\n}\r\n\r\n.ngx-datatable.material.single-selection .datatable-body-row.active,\r\n.ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active,\r\n.ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active,\r\n.ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\r\n    background-color: #304FFE;\r\n    color: #FFF;\r\n}\r\n\r\n.ngx-datatable.material.single-selection .datatable-body-row.active:hover,\r\n    .ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover,\r\n    .ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover,\r\n    .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\r\n        background-color: #193AE4;\r\n        color: #FFF;\r\n    }\r\n\r\n.ngx-datatable.material.single-selection .datatable-body-row.active:focus,\r\n    .ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus,\r\n    .ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus,\r\n    .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group {\r\n        background-color: #2041EF;\r\n        color: #FFF;\r\n    }\r\n\r\n.ngx-datatable.material.table-hover:not(.cell-selection) .datatable-body-row:hover,\r\n.ngx-datatable.material.table-hover:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {\r\n    background-color: #f5f5f5;\r\n    /*transition-property: background;\r\n        transition-duration: .3s;\r\n        transition-timing-function: linear;*/\r\n}\r\n\r\n.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus,\r\n.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group {\r\n    background-color: #ddd;\r\n}\r\n\r\n.ngx-datatable.material.cell-selection.table-hover .datatable-body-cell:hover,\r\n.ngx-datatable.material.cell-selection.table-hover .datatable-body-cell:hover .datatable-row-group {\r\n    background-color: #f5f5f5;\r\n    /*transition-property: background;\r\n        transition-duration: .3s;\r\n        transition-timing-function: linear;*/\r\n}\r\n\r\n.ngx-datatable.material.cell-selection .datatable-body-cell:focus,\r\n.ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group {\r\n    background-color: #ddd;\r\n}\r\n\r\n.ngx-datatable.material.cell-selection .datatable-body-cell.active,\r\n.ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group {\r\n    background-color: #304FFE;\r\n    color: #FFF;\r\n}\r\n\r\n.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover,\r\n    .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group {\r\n        background-color: #193AE4;\r\n        color: #FFF;\r\n    }\r\n\r\n.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus,\r\n    .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group {\r\n        background-color: #2041EF;\r\n        color: #FFF;\r\n    }\r\n\r\n.ngx-datatable.material .empty-row {\r\n    height: 50px;\r\n    text-align: left;\r\n    padding: .5rem 1.2rem;\r\n    vertical-align: top;\r\n    border-top: 0;\r\n}\r\n\r\n.ngx-datatable.material .loading-row {\r\n    text-align: left;\r\n    padding: .5rem 1.2rem;\r\n    vertical-align: top;\r\n    border-top: 0;\r\n}\r\n\r\n.ngx-datatable.material .datatable-header .datatable-row-left,\r\n.ngx-datatable.material .datatable-body .datatable-row-left {\r\n    background-color: #FFF;\r\n    background-position: 100% 0;\r\n    background-repeat: repeat-y;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==);\r\n}\r\n\r\n.ngx-datatable.material .datatable-header .datatable-row-right,\r\n.ngx-datatable.material .datatable-body .datatable-row-right {\r\n    background-position: 0 0;\r\n    background-color: #fff;\r\n    background-repeat: repeat-y;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==);\r\n}\r\n\r\n.ngx-datatable.material .datatable-header {\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.ngx-datatable.material.colored-header .datatable-header {\r\n    padding: .9rem 0;\r\n    color: #fff;\r\n    background-color: #027FF4;\r\n}\r\n\r\n.ngx-datatable.material.table .datatable-body .datatable-body-row,\r\n.ngx-datatable.material.table-bordered .datatable-body .datatable-body-row {\r\n    border-top: 1px solid #ddd;\r\n}\r\n\r\n.ngx-datatable.material.table-bordered .datatable-header .datatable-header-cell {\r\n    padding: .9rem 1.2rem;\r\n}\r\n\r\n.ngx-datatable.material.full-header .datatable-header .datatable-header-cell {\r\n    padding: .9rem 1.2rem;\r\n}\r\n\r\n.ngx-datatable.material .datatable-header .datatable-header-cell {\r\n    text-align: left;\r\n    padding: .1rem 1.2rem;\r\n    font-weight: 400;\r\n    font-weight: bold;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.ngx-datatable.material .datatable-header .datatable-header-cell.longpress {\r\n        color: #027FF4;\r\n        background-color: whitesmoke;\r\n    }\r\n\r\n.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle {\r\n        border-right: none;\r\n    }\r\n\r\n.ngx-datatable.material .datatable-header .resize-handle {\r\n    border-right: solid 1px #eee;\r\n}\r\n\r\n.ngx-datatable.material .datatable-body .datatable-row-detail {\r\n    background: #f5f5f5;\r\n    padding: 10px;\r\n}\r\n\r\n.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\r\n    text-align: left;\r\n    padding: .7rem 1.2rem;\r\n    vertical-align: top;\r\n    border-top: 0;\r\n    transition: width 0.3s ease;\r\n}\r\n\r\n.ngx-datatable.material .datatable-body .progress-linear {\r\n    display: block;\r\n    width: 100%;\r\n    height: 5px;\r\n    padding: 0;\r\n    margin: 0;\r\n    position: absolute;\r\n    z-index:9999;\r\n}\r\n\r\n.ngx-datatable.material .datatable-body .progress-linear .container {\r\n        display: block;\r\n        position: relative;\r\n        overflow: hidden;\r\n        width: 100%;\r\n        height: 5px;\r\n        -webkit-transform: translate(0, 0) scale(1, 1);\r\n        transform: translate(0, 0) scale(1, 1);\r\n        background-color: #aad1f9;\r\n    }\r\n\r\n.ngx-datatable.material .datatable-body .progress-linear .container .bar {\r\n            transition: all .2s linear;\r\n            -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\r\n            animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\r\n            transition: -webkit-transform .2s linear;\r\n            transition: transform .2s linear;\r\n            transition: transform .2s linear, -webkit-transform .2s linear;\r\n            background-color: #106cc8;\r\n            position: absolute;\r\n            left: 0;\r\n            top: 0;\r\n            bottom: 0;\r\n            width: 100%;\r\n            height: 5px;\r\n        }\r\n\r\n.ngx-datatable.material .datatable-footer {\r\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\r\n    font-size: 14px;\r\n    color: #777;\r\n}\r\n\r\n.ngx-datatable.material .datatable-footer .page-count {\r\n        line-height: 50px;\r\n        height: 50px;\r\n        padding: 0 1.2rem;\r\n    }\r\n\r\n.ngx-datatable.material .datatable-footer .datatable-pager {\r\n        margin: 0 10px;\r\n    }\r\n\r\n.ngx-datatable.material .datatable-footer .datatable-pager li {\r\n            vertical-align: middle;\r\n        }\r\n\r\n.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a {\r\n                color: rgba(0, 0, 0, 0.26) !important;\r\n                background-color: transparent !important;\r\n            }\r\n\r\n.ngx-datatable.material .datatable-footer .datatable-pager li.active a {\r\n                background-color: rgba(158, 158, 158, 0.2);\r\n                font-weight: bold;\r\n            }\r\n\r\n.ngx-datatable.material .datatable-footer .datatable-pager a {\r\n            height: 22px;\r\n            min-width: 24px;\r\n            line-height: 22px;\r\n            padding: 0 6px;\r\n            border-radius: 3px;\r\n            margin: 6px 3px;\r\n            text-align: center;\r\n            vertical-align: top;\r\n            color: rgba(0, 0, 0, 0.54);\r\n            text-decoration: none;\r\n            vertical-align: bottom;\r\n        }\r\n\r\n.ngx-datatable.material .datatable-footer .datatable-pager a:hover {\r\n                color: rgba(0, 0, 0, 0.75);\r\n                background-color: rgba(158, 158, 158, 0.2);\r\n            }\r\n\r\n.ngx-datatable.material .datatable-footer .datatable-pager .icon-left,\r\n        .ngx-datatable.material .datatable-footer .datatable-pager .icon-skip,\r\n        .ngx-datatable.material .datatable-footer .datatable-pager .icon-right,\r\n        .ngx-datatable.material .datatable-footer .datatable-pager .icon-prev {\r\n            font-size: 20px;\r\n            line-height: 20px;\r\n            padding: 0 3px;\r\n        }\r\n\r\n/**\r\n * Checkboxes\r\n**/\r\n\r\n.datatable-checkbox {\r\n    position: relative;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n    padding: 10px 0;\r\n}\r\n\r\n.datatable-checkbox input[type='checkbox'] {\r\n        position: relative;\r\n        margin: 0 1rem 0 0;\r\n        cursor: pointer;\r\n        outline: none;\r\n    }\r\n\r\n.datatable-checkbox input[type='checkbox']:before {\r\n            transition: all 0.3s ease-in-out;\r\n            content: \"\";\r\n            position: absolute;\r\n            left: 0;\r\n            z-index: 1;\r\n            width: 1rem;\r\n            height: 1rem;\r\n            border: 2px solid #f2f2f2;\r\n        }\r\n\r\n.datatable-checkbox input[type='checkbox']:checked:before {\r\n            -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n            height: .5rem;\r\n            border-color: #009688;\r\n            border-top-style: none;\r\n            border-right-style: none;\r\n        }\r\n\r\n.datatable-checkbox input[type='checkbox']:after {\r\n            content: \"\";\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            width: 1rem;\r\n            height: 1rem;\r\n            background: #fff;\r\n            cursor: pointer;\r\n        }\r\n\r\n/**\r\n * Progress bar animations\r\n */\r\n\r\n@-webkit-keyframes query {\r\n    0% {\r\n        opacity: 1;\r\n        -webkit-transform: translateX(35%) scale(0.3, 1);\r\n                transform: translateX(35%) scale(0.3, 1);\r\n    }\r\n\r\n    100% {\r\n        opacity: 0;\r\n        -webkit-transform: translateX(-50%) scale(0, 1);\r\n                transform: translateX(-50%) scale(0, 1);\r\n    }\r\n}\r\n\r\n@keyframes query {\r\n    0% {\r\n        opacity: 1;\r\n        -webkit-transform: translateX(35%) scale(0.3, 1);\r\n                transform: translateX(35%) scale(0.3, 1);\r\n    }\r\n\r\n    100% {\r\n        opacity: 0;\r\n        -webkit-transform: translateX(-50%) scale(0, 1);\r\n                transform: translateX(-50%) scale(0, 1);\r\n    }\r\n}\r\n\r\n.alertify,\r\n.alertify-show,\r\n.alertify-log {\r\n\ttransition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275); /* easeOutBack */\r\n}\r\n\r\n.alertify-hide {\r\n\ttransition: all 250ms cubic-bezier(0.600, -0.280, 0.735, 0.045); /* easeInBack */\r\n}\r\n\r\n.alertify-log-hide {\r\n\ttransition: all 500ms cubic-bezier(0.600, -0.280, 0.735, 0.045); /* easeInBack */\r\n}\r\n\r\n.alertify-cover {\r\n\tposition: fixed; z-index: 99999;\r\n\ttop: 0; right: 0; bottom: 0; left: 0;\r\n\tbackground-color:white;\r\n\tfilter:alpha(opacity=0);\r\n\topacity:0;\r\n}\r\n\r\n.alertify-cover-hidden {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n.alertify {\r\n\tposition: fixed; z-index: 99999;\r\n\ttop: 50px; left: 50%;\r\n\twidth: 550px;\r\n\tmargin-left: -275px;\r\n\topacity: 1;\r\n}\r\n\r\n.alertify-hidden {\r\n\t\t-webkit-transform: translate(0,-150px);\r\n\t\t        transform: translate(0,-150px);\r\n\t\topacity: 0;\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n/* overwrite display: none; for everything except IE6-8 */\r\n\r\n:root *> .alertify-hidden {\r\n\t\tdisplay: block;\r\n\t\tvisibility: hidden;\r\n\t}\r\n\r\n.alertify-logs {\r\n\tposition: fixed;\r\n\tz-index: 5000;\r\n\tbottom: 10px;\r\n\tright: 10px;\r\n\twidth: 300px;\r\n}\r\n\r\n.alertify-logs-hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n.alertify-log {\r\n\t\tdisplay: block;\r\n\t\tmargin-top: 10px;\r\n\t\tposition: relative;\r\n\t\tright: -300px;\r\n\t\topacity: 0;\r\n\t}\r\n\r\n.alertify-log-show {\r\n\t\tright: 0;\r\n\t\topacity: 1;\r\n\t}\r\n\r\n.alertify-log-hide {\r\n\t\t-webkit-transform: translate(300px, 0);\r\n\t\t        transform: translate(300px, 0);\r\n\t\topacity: 0;\r\n\t}\r\n\r\n.alertify-dialog {\r\n\t\tpadding: 25px;\r\n\t}\r\n\r\n.alertify-resetFocus {\r\n\t\t\tborder: 0;\r\n\t\t\tclip: rect(0 0 0 0);\r\n\t\t\theight: 1px;\r\n\t\t\tmargin: -1px;\r\n\t\t\toverflow: hidden;\r\n\t\t\tpadding: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 1px;\r\n\t\t}\r\n\r\n.alertify-inner {\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\r\n.alertify-text {\r\n\t\t\tmargin-bottom: 15px;\r\n\t\t\twidth: 100%;\r\n\t\t\tbox-sizing: border-box;\r\n\t\t\tfont-size: 100%;\r\n\t\t}\r\n\r\n.alertify-buttons {\r\n\t\t}\r\n\r\n.alertify-button,\r\n\t\t\t.alertify-button:hover,\r\n\t\t\t.alertify-button:active,\r\n\t\t\t.alertify-button:visited {\r\n\t\t\t\tbackground: none;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t\tborder: none;\r\n\t\t\t\t/* line-height and font-size for input button */\r\n\t\t\t\tline-height: 1.5;\r\n\t\t\t\tfont-size: 100%;\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\tmargin-left: 5px;\r\n\t\t\t}\r\n\r\n@media only screen and (max-width: 680px) {\r\n\t.alertify,\r\n\t.alertify-logs {\r\n\t\twidth: 90%;\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\t.alertify {\r\n\t\tleft: 5%;\r\n\t\tmargin: 0;\r\n\t}\r\n}\r\n\r\n/**\r\n * Twitter Bootstrap Look and Feel\r\n * Based on http://twitter.github.com/bootstrap/\r\n */\r\n\r\n.alertify,\r\n.alertify-log {\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n.alertify {\r\n\tbackground: #FFF;\r\n\tborder: 1px solid #8E8E8E; /* browsers that don't support rgba */\r\n\tborder: 1px solid rgba(0,0,0,.3);\r\n\tborder-radius: 6px;\r\n\tbox-shadow: 0 3px 7px rgba(0,0,0,.3);     /* Safari 4? Chrome 6? */     /* Firefox 3.6 */\r\n\tbackground-clip: padding-box; /* Firefox 4, Safari 5, Opera 10, IE 9 */\r\n}\r\n\r\n.alertify-dialog {\r\n\tpadding: 0;\r\n}\r\n\r\n.alertify-inner {\r\n\t\ttext-align: left;\r\n\t}\r\n\r\n.alertify-message {\r\n\t\t\tpadding: 15px;\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\r\n.alertify-text-wrapper {\r\n\t\t\tpadding: 0 15px;\r\n\t\t}\r\n\r\n.alertify-text {\r\n\t\t\t\tcolor: #555;\r\n\t\t\t\tborder-radius: 4px;\r\n\t\t\t\tpadding: 8px;\r\n\t\t\t\tbackground-color: #FFF;\r\n\t\t\t\tborder: 1px solid #CCC;\r\n\t\t\t\tbox-shadow: inset 0 1px 1px rgba(0,0,0,.075);\r\n\t\t\t}\r\n\r\n.alertify-text:focus {\r\n\t\t\t\tborder-color: rgba(82,168,236,.8);\r\n\t\t\t\toutline: 0;\r\n\t\t\t\tbox-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);\r\n\t\t\t}\r\n\r\n.alertify-buttons {\r\n\t\t\tpadding: 14px 15px 15px;\r\n\t\t\tbackground: #F5F5F5;\r\n\t\t\tborder-top: 1px solid #DDD;\r\n\t\t\tborder-radius: 0 0 6px 6px;\r\n\t\t\tbox-shadow: inset 0 1px 0 #FFF;\r\n\t\t\ttext-align: right;\r\n\t\t}\r\n\r\n.alertify-button,\r\n\t\t\t.alertify-button:hover,\r\n\t\t\t.alertify-button:focus,\r\n\t\t\t.alertify-button:active {\r\n\t\t\t\tmargin-left: 10px;\r\n\t\t\t\tborder-radius: 4px;\r\n\t\t\t\tfont-weight: normal;\r\n\t\t\t\tpadding: 4px 12px;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t\tbox-shadow: inset 0 1px 0 rgba(255, 255, 255, .2), 0 1px 2px rgba(0, 0, 0, .05);\r\n\t\t\t\tbackground-image:         linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));\r\n\t\t\t}\r\n\r\n.alertify-button:focus {\r\n\t\t\t\toutline: none;\r\n\t\t\t\tbox-shadow: 0 0 5px #2B72D5;\r\n\t\t\t}\r\n\r\n.alertify-button:active {\r\n\t\t\t\tposition: relative;\r\n\t\t\t\tbox-shadow: inset 0 2px 4px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.05);\r\n\t\t\t}\r\n\r\n.alertify-button-cancel,\r\n\t\t\t\t.alertify-button-cancel:hover,\r\n\t\t\t\t.alertify-button-cancel:focus,\r\n\t\t\t\t.alertify-button-cancel:active {\r\n\t\t\t\t\ttext-shadow: 0 -1px 0 rgba(255,255,255,.75);\r\n\t\t\t\t\tbackground-color: #E6E6E6;\r\n\t\t\t\t\tborder: 1px solid #BBB;\r\n\t\t\t\t\tcolor: #333;\r\n\t\t\t\t\tbackground-image:         linear-gradient(top, #FFF, #E6E6E6);\r\n\t\t\t\t}\r\n\r\n.alertify-button-cancel:hover,\r\n\t\t\t\t.alertify-button-cancel:focus,\r\n\t\t\t\t.alertify-button-cancel:active {\r\n\t\t\t\t\tbackground: #E6E6E6;\r\n\t\t\t\t}\r\n\r\n.alertify-button-ok,\r\n\t\t\t\t.alertify-button-ok:hover,\r\n\t\t\t\t.alertify-button-ok:focus,\r\n\t\t\t\t.alertify-button-ok:active {\r\n\t\t\t\t\ttext-shadow: 0 -1px 0 rgba(0,0,0,.25);\r\n\t\t\t\t\tbackground-color: #04C;\r\n\t\t\t\t\tborder: 1px solid #04C;\r\n\t\t\t\t\tborder-color: #04C #04C #002A80;\r\n\t\t\t\t\tborder-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n\t\t\t\t\tcolor: #FFF;\r\n\t\t\t\t}\r\n\r\n.alertify-button-ok:hover,\r\n\t\t\t\t.alertify-button-ok:focus,\r\n\t\t\t\t.alertify-button-ok:active {\r\n\t\t\t\t\tbackground: #04C;\r\n\t\t\t\t}\r\n\r\n.alertify-log {\r\n\tbackground: #D9EDF7;\r\n\tpadding: 8px 14px;\r\n\tborder-radius: 4px;\r\n\tcolor: #3A8ABF;\r\n\ttext-shadow: 0 1px 0 rgba(255,255,255,.5);\r\n\tborder: 1px solid #BCE8F1;\r\n}\r\n\r\n.alertify-log-error {\r\n\t\tcolor: #B94A48;\r\n\t\tbackground: #F2DEDE;\r\n\t\tborder: 1px solid #EED3D7;\r\n\t}\r\n\r\n.alertify-log-success {\r\n\t\tcolor: #468847;\r\n\t\tbackground: #DFF0D8;\r\n\t\tborder: 1px solid #D6E9C6;\r\n\t}\r\n\r\n.navbar .nav li a:hover,\r\n.navbar.nav li.toolbaritem a:hover,\r\n.nav.nav-tabsNOTUSE li a:hover {\r\n    color: #E03930;\r\n}\r\n\r\n.navbar .nav > .active > a, .navbar .nav > .active > a:hover, .navbar .nav > .active > a:focus {\r\n    background-color: #efefef;\r\n}\r\n\r\n.nav.nav-tabsNOTUSED li.active a {\r\n    color: #555;\r\n}\r\n\r\n.disabledContainer {\r\n    pointer-events: none;\r\n    opacity: 0.4;\r\n}\r\n\r\ninput.form-control.is-required-status, textarea.form-control.is-required-status, .bootstrap-select.is-required-status > .dropdown-toggle {\r\n    border-left-width: 5px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required {\r\n    border-left: 5px solid #42A948; /*57A83F*/\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: 5px solid #a94442; /*E03930*/\r\n}\r\n\r\n.bootstrap-select.ng-novalidation > .dropdown-toggle {\r\n    border-left-width: 5px;\r\n}\r\n\r\n.has-success .bootstrap-select .dropdown-toggle,\r\n.success .bootstrap-select .dropdown-toggle {\r\n    border-color: #3c763d;\r\n}\r\n\r\n.has-error .bootstrap-select .dropdown-toggle,\r\n.error .bootstrap-select .dropdown-toggle {\r\n    border-color: #a94442;\r\n}\r\n\r\n.bootstrap-select .btn-default .badge {\r\n    color: #fff;\r\n    background-color: #777;\r\n}\r\n\r\n.pageHeader {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.errorMessage {\r\n    padding: 5px 10px;\r\n    color: #a94442;\r\n}\r\n\r\n.appName {\r\n    font-family: monospace;\r\n}\r\n\r\ni.page-caption {\r\n    vertical-align: baseline;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.alertify {\r\n    top: 75px;\r\n}\r\n\r\n.alertify-message {\r\n    font-size: 1.2em;\r\n}\r\n\r\n#toasty.toasty-position-top-right {\r\n    top: 20px;\r\n    right: 20px;\r\n}\r\n\r\n#toasty .toast.toasty-theme-bootstrap {\r\n    font-size: 1em;\r\n}\r\n\r\n#toasty .toast.toasty-theme-bootstrap .toast-text .toast-title {\r\n        font-size: 1.04em;\r\n    }\r\n\r\n/*-webkit-filter: blur(5px) grayscale(90%);*/\r\n\r\n/*body.modal-open .container {\r\n    -webkit-filter: blur(1px);\r\n    -moz-filter: blur(1px);\r\n    -o-filter: blur(1px);\r\n    -ms-filter: blur(1px);\r\n    filter: blur(1px);\r\n    filter: url(\"https://gist.githubusercontent.com/amitabhaghosh197/b7865b409e835b5a43b5/raw/1a255b551091924971e7dee8935fd38a7fdf7311/blur\".svg#blur);\r\n    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='1');\r\n}*/\r\n\r\n.notifications-popup .popover {\r\n    color: #333 !important;\r\n    max-width: 500px;\r\n    width: 500px;\r\n}\r\n\r\n.vertical-center-flex {\r\n    min-height: 80vh;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n/*Hack stop get ngx-datatable width to be full when inside bootstrap tab control*/\r\n\r\n.tab-pane .datatable-scroll {\r\n    width: 100% !important;\r\n}\r\n\r\n.ngx-datatable.scroll-vertical {\r\n    height: 64vh;\r\n}\r\n\r\n.boldFont.app-component {\r\n    font-weight: bold;\r\n}\r\n\r\n.black-anchor {\r\n    color: #333;\r\n}\r\n\r\n.form-group .icon-addon .form-control {\r\n    border-radius: 25px;\r\n}\r\n\r\n.icon-addon {\r\n    position: relative;\r\n    color: #555;\r\n    display: block;\r\n}\r\n\r\n.icon-addon:after,\r\n    .icon-addon:before {\r\n        display: table;\r\n        content: \" \";\r\n    }\r\n\r\n.icon-addon:after {\r\n        clear: both;\r\n    }\r\n\r\n.icon-addon.addon-md .glyphicon,\r\n    .icon-addon .glyphicon,\r\n    .icon-addon.addon-md .fa,\r\n    .icon-addon .fa {\r\n        position: absolute;\r\n        z-index: 2;\r\n        font-size: 14px;\r\n        width: 20px;\r\n        text-align: center;\r\n        padding: 10px 0;\r\n        top: 1px;\r\n    }\r\n\r\n.icon-addon .fa.left-icon {\r\n            left: 10px;\r\n            margin-left: -2.5px;\r\n        }\r\n\r\n.icon-addon .fa.right-icon {\r\n            right: 10px;\r\n            margin-right: -2.5px;\r\n        }\r\n\r\n.icon-addon.addon-lg .form-control {\r\n        line-height: 1.33;\r\n        height: 46px;\r\n        font-size: 18px;\r\n    }\r\n\r\n.icon-addon.addon-lg .form-control.left-icon {\r\n            padding-top: 10px;\r\n            padding-right: 16px;\r\n            padding-bottom: 10px;\r\n            padding-left: 40px !important;\r\n        }\r\n\r\n.icon-addon.addon-lg .form-control.right-icon {\r\n            padding-top: 10px;\r\n            padding-right: 40px !important;\r\n            padding-bottom: 10px;\r\n            padding-left: 16px;\r\n        }\r\n\r\n.icon-addon.addon-sm .form-control {\r\n        height: 30px;\r\n        font-size: 12px;\r\n        line-height: 1.5;\r\n    }\r\n\r\n.icon-addon.addon-sm .form-control.left-icon {\r\n            padding-top: 5px;\r\n            padding-right: 10px;\r\n            padding-bottom: 5px;\r\n            padding-left: 28px !important;\r\n        }\r\n\r\n.icon-addon.addon-sm .form-control.right-icon {\r\n            padding-top: 5px;\r\n            padding-right: 28px !important;\r\n            padding-bottom: 5px;\r\n            padding-left: 10px;\r\n        }\r\n\r\n.icon-addon.addon-lg .fa,\r\n    .icon-addon.addon-lg .glyphicon {\r\n        font-size: 18px;\r\n        top: 4px;\r\n    }\r\n\r\n.icon-addon.addon-lg .fa.left-icon,\r\n        .icon-addon.addon-lg .glyphicon.left-icon {\r\n            margin-left: 0;\r\n            left: 11px;\r\n        }\r\n\r\n.icon-addon.addon-lg .fa.right-icon,\r\n        .icon-addon.addon-lg .glyphicon.right-icon {\r\n            margin-right: 0;\r\n            right: 11px;\r\n        }\r\n\r\n.icon-addon.addon-md .form-control,\r\n    .icon-addon .form-control {\r\n        font-weight: normal;\r\n    }\r\n\r\n.icon-addon.addon-md .form-control.left-icon,\r\n        .icon-addon .form-control.left-icon {\r\n            float: left;\r\n            padding-left: 30px;\r\n        }\r\n\r\n.icon-addon.addon-md .form-control.right-icon,\r\n        .icon-addon .form-control.right-icon {\r\n            float: right;\r\n            padding-right: 30px;\r\n        }\r\n\r\n.icon-addon.addon-sm .fa,\r\n    .icon-addon.addon-sm .glyphicon {\r\n        font-size: 12px;\r\n        top: -1px;\r\n    }\r\n\r\n.icon-addon.addon-sm .fa.left-icon,\r\n        .icon-addon.addon-sm .glyphicon.left-icon {\r\n            margin-left: 0;\r\n            left: 5px;\r\n        }\r\n\r\n.icon-addon.addon-sm .fa.right-icon,\r\n        .icon-addon.addon-sm .glyphicon.right-icon {\r\n            margin-right: 0;\r\n            right: 5px;\r\n        }\r\n\r\n.icon-addon .form-control:focus + .glyphicon,\r\n    .icon-addon:hover .glyphicon,\r\n    .icon-addon .form-control:focus + .fa,\r\n    .icon-addon:hover .fa {\r\n        color: #2580db;\r\n    }\r\n\r\n.clear-input {\r\n    text-decoration: none !important;\r\n    color: #b3b3b3 !important;\r\n}\r\n\r\n.clear-input:hover {\r\n        color: #2580db !important;\r\n    }\r\n\r\n.inline-block {\r\n    display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/themes.css":
/*!******************************!*\
  !*** ./ClientApp/themes.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/**********************************************************************************************************\r\n***********************************************************************************************************\r\nNOTE: SASS is already configured in this project template. To use SASS change your css file extension from\r\n    *.css to *.scss and you're good to go.\r\n\r\n    Example: To use SASS for this file instead of regular CSS follow the below steps\r\n    1. Uncomment the below SASS and comment out the CSS version of this document\r\n    2. Change file extension from css to scss\r\n    3. Change references to this file to use the sass extension\r\n        i.e. This file is being referenced from \"app.component.ts\". So replace references to\r\n            \"../themes.css\" with \"../themes.scss\"\r\n***********************************************************************************************************\r\n**********************************************************************************************************/\r\n\r\n\r\n\r\n\r\n/*//*********** SASS VERSION ***********\r\n        \r\n    @mixin app-theme($theme, $color, $footer:#f5f5f5) {\r\n    .#{$theme}-theme .navbar-inner.app-component {\r\n        background-color: $color; //#027FF4;\r\n    }\r\n             \r\n    .#{$theme}-theme .panel-primary > .panel-heading {\r\n        background-color: $color;\r\n        border-color: $color;\r\n    }\r\n\r\n    .#{$theme}-theme .panel-primary {\r\n        border-color: $color;\r\n    }\r\n\r\n    .#{$theme}-theme .navbar-inner.footer.app-component {\r\n        background-color: $footer;\r\n    }\r\n\r\n\r\n    .#{$theme}-theme .icon-addon .form-control:focus + .glyphicon,\r\n    .#{$theme}-theme .icon-addon:hover .glyphicon,\r\n    .#{$theme}-theme .icon-addon .form-control:focus + .fa,\r\n    .#{$theme}-theme .icon-addon:hover .fa {\r\n        color: $color; //#2580db;\r\n    }\r\n\r\n    .#{$theme}-theme .clear-input:hover {\r\n        color: $color !important; //#2580db !important;\r\n    }\r\n\r\n    .#{$theme}-theme .ngx-datatable.material.colored-header .datatable-header {\r\n        background-color: $color; //#027FF4;\r\n    }\r\n              \r\n\r\n    .#{$theme}-theme-option {\r\n        background: $color;        \r\n        color:white;\r\n        font-weight:bold;\r\n        display:inline-block;\r\n        width:100%;\r\n        height:100%;\r\n        text-align:center;\r\n    }\r\n}\r\n\r\n\r\n.default-theme-option {\r\n    background: #027FF4;\r\n    color:white;\r\n    font-weight:bold;\r\n    display:inline-block;\r\n    width:100%;\r\n    height:100%;\r\n    text-align:center;\r\n}\r\n\r\n\r\n//----------- black theme -----------\r\n@include app-theme('black', black);\r\n\r\n\r\n//----------- red theme -----------\r\n@include app-theme('red', red);\r\n\r\n\r\n//----------- orange theme -----------\r\n@include app-theme('orange', orange);\r\n\r\n\r\n//----------- green theme -----------\r\n@include app-theme('green', green);\r\n\r\n\r\n//----------- gray theme -----------\r\n@include app-theme('gray', gray);\r\n\r\n\r\n*/\r\n\r\n\r\n\r\n\r\n/*********** CSS VERSION ***********/\r\n\r\n\r\n\r\n\r\n.default-theme-option {\r\n  background: #027FF4;\r\n  color: white;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n/*----------- black theme -----------*/\r\n\r\n\r\n\r\n\r\n.black-theme .navbar-inner.app-component {\r\n  background-color: black;  /*#027FF4;*/\r\n}\r\n\r\n\r\n\r\n\r\n.black-theme .panel-primary > .panel-heading {\r\n  background-color: black;\r\n  border-color: black;\r\n}\r\n\r\n\r\n\r\n\r\n.black-theme .panel-primary {\r\n  border-color: black;\r\n}\r\n\r\n\r\n\r\n\r\n.black-theme .navbar-inner.footer.app-component {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n\r\n\r\n\r\n.black-theme .icon-addon .form-control:focus + .glyphicon,\r\n.black-theme .icon-addon:hover .glyphicon,\r\n.black-theme .icon-addon .form-control:focus + .fa,\r\n.black-theme .icon-addon:hover .fa {\r\n  color: black;  /*#2580db;*/\r\n}\r\n\r\n\r\n\r\n\r\n.black-theme .clear-input:hover {\r\n  color: black !important;  /*#2580db !important;*/\r\n}\r\n\r\n\r\n\r\n\r\n.black-theme .ngx-datatable.material.colored-header .datatable-header {\r\n  background-color: black;  /*#027FF4;*/\r\n}\r\n\r\n\r\n\r\n\r\n.black-theme-option {\r\n  background: black;\r\n  color: white;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n/*----------- red theme -----------*/\r\n\r\n\r\n\r\n\r\n.red-theme .navbar-inner.app-component {\r\n  background-color: red;  /*#027FF4;*/\r\n}\r\n\r\n\r\n\r\n\r\n.red-theme .panel-primary > .panel-heading {\r\n  background-color: red;\r\n  border-color: red;\r\n}\r\n\r\n\r\n\r\n\r\n.red-theme .panel-primary {\r\n  border-color: red;\r\n}\r\n\r\n\r\n\r\n\r\n.red-theme .navbar-inner.footer.app-component {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n\r\n\r\n\r\n.red-theme .icon-addon .form-control:focus + .glyphicon,\r\n.red-theme .icon-addon:hover .glyphicon,\r\n.red-theme .icon-addon .form-control:focus + .fa,\r\n.red-theme .icon-addon:hover .fa {\r\n  color: red;  /*#2580db;*/\r\n}\r\n\r\n\r\n\r\n\r\n.red-theme .clear-input:hover {\r\n  color: red !important;  /*#2580db !important;*/\r\n}\r\n\r\n\r\n\r\n\r\n.red-theme .ngx-datatable.material.colored-header .datatable-header {\r\n  background-color: red;  /*#027FF4;*/\r\n}\r\n\r\n\r\n\r\n\r\n.red-theme-option {\r\n  background: red;\r\n  color: white;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n/*----------- orange theme -----------*/\r\n\r\n\r\n\r\n\r\n.orange-theme .navbar-inner.app-component {\r\n  background-color: orange;  /*#027FF4;*/\r\n}\r\n\r\n\r\n\r\n\r\n.orange-theme .panel-primary > .panel-heading {\r\n  background-color: orange;\r\n  border-color: orange;\r\n}\r\n\r\n\r\n\r\n\r\n.orange-theme .panel-primary {\r\n  border-color: orange;\r\n}\r\n\r\n\r\n\r\n\r\n.orange-theme .navbar-inner.footer.app-component {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n\r\n\r\n\r\n.orange-theme .icon-addon .form-control:focus + .glyphicon,\r\n.orange-theme .icon-addon:hover .glyphicon,\r\n.orange-theme .icon-addon .form-control:focus + .fa,\r\n.orange-theme .icon-addon:hover .fa {\r\n  color: orange;  /*#2580db;*/\r\n}\r\n\r\n\r\n\r\n\r\n.orange-theme .clear-input:hover {\r\n  color: orange !important;  /*#2580db !important;*/\r\n}\r\n\r\n\r\n\r\n\r\n.orange-theme .ngx-datatable.material.colored-header .datatable-header {\r\n  background-color: orange;  /*#027FF4;*/\r\n}\r\n\r\n\r\n\r\n\r\n.orange-theme-option {\r\n  background: orange;\r\n  color: white;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n/*----------- green theme -----------*/\r\n\r\n\r\n\r\n\r\n.green-theme .navbar-inner.app-component {\r\n  background-color: green;  /*#027FF4;*/\r\n}\r\n\r\n\r\n\r\n\r\n.green-theme .panel-primary > .panel-heading {\r\n  background-color: green;\r\n  border-color: green;\r\n}\r\n\r\n\r\n\r\n\r\n.green-theme .panel-primary {\r\n  border-color: green;\r\n}\r\n\r\n\r\n\r\n\r\n.green-theme .navbar-inner.footer.app-component {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n\r\n\r\n\r\n.green-theme .icon-addon .form-control:focus + .glyphicon,\r\n.green-theme .icon-addon:hover .glyphicon,\r\n.green-theme .icon-addon .form-control:focus + .fa,\r\n.green-theme .icon-addon:hover .fa {\r\n  color: green;  /*#2580db;*/\r\n}\r\n\r\n\r\n\r\n\r\n.green-theme .clear-input:hover {\r\n  color: green !important;  /*#2580db !important;*/\r\n}\r\n\r\n\r\n\r\n\r\n.green-theme .ngx-datatable.material.colored-header .datatable-header {\r\n  background-color: green;  /*#027FF4;*/\r\n}\r\n\r\n\r\n\r\n\r\n.green-theme-option {\r\n  background: green;\r\n  color: white;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n/*----------- gray theme -----------*/\r\n\r\n\r\n\r\n\r\n.gray-theme .navbar-inner.app-component {\r\n  background-color: gray;  /*#027FF4;*/\r\n}\r\n\r\n\r\n\r\n\r\n.gray-theme .panel-primary > .panel-heading {\r\n  background-color: gray;\r\n  border-color: gray;\r\n}\r\n\r\n\r\n\r\n\r\n.gray-theme .panel-primary {\r\n  border-color: gray;\r\n}\r\n\r\n\r\n\r\n\r\n.gray-theme .navbar-inner.footer.app-component {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n\r\n\r\n\r\n.gray-theme .icon-addon .form-control:focus + .glyphicon,\r\n.gray-theme .icon-addon:hover .glyphicon,\r\n.gray-theme .icon-addon .form-control:focus + .fa,\r\n.gray-theme .icon-addon:hover .fa {\r\n  color: gray;  /*#2580db;*/\r\n}\r\n\r\n\r\n\r\n\r\n.gray-theme .clear-input:hover {\r\n  color: gray !important;  /*#2580db !important;*/\r\n}\r\n\r\n\r\n\r\n\r\n.gray-theme .ngx-datatable.material.colored-header .datatable-header {\r\n  background-color: gray;  /*#027FF4;*/\r\n}\r\n\r\n\r\n\r\n\r\n.gray-theme-option {\r\n  background: gray;\r\n  color: white;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\ASPDOTNETCORE\NGGPMS\NGGPMS\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map