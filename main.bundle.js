webpackJsonp(["main"],{

/***/ "../../../../../src/app/accordion/accordion-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\" [attr.accordion-child-id]=\"id\" [attr.aria-expanded]=\"isExpanded\">\n  <div class=\"cbp-panel-heading\" role=\"tab\">\n    <a (click)=\"toggleHeading()\" tabindex=\"1\" class=\"cbp-panel-title\">\n      <i class=\"panel-heading-indicator fa fa-fw fa-angle-right\" [@indicatorAnimation]=\"getExpandedState()\"></i>{{panelTitle}}\n    </a>\n  </div>\n  <div [@bodyExpansion]=\"getExpandedState()\" class=\"cbp-panel-body\">\n   <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/accordion/accordion-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n.cbp-accordion .panel[accordion-child-id=\"1\"] {\n  border-top: none; }\n\n.cbp-accordion .panel {\n  border-top: 1px solid #eeeeee; }\n\n.cbp-panel-body {\n  padding: 15px; }\n\n.cbp-panel-title {\n  font-size: 17px;\n  padding: 2px 5px 2px 0;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  font-weight: 500; }\n  .cbp-panel-title:focus {\n    outline: 1px dotted #1461ab !important;\n    border-color: transparent; }\n\n.cbp-panel-heading {\n  padding: 10px 15px; }\n  .cbp-panel-heading:hover {\n    text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accordion/accordion-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EXPANSION_PANEL_ANIMATION_TIMING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAccordionPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_component__ = __webpack_require__("../../../../../src/app/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EXPANSION_PANEL_ANIMATION_TIMING = '250ms cubic-bezier(0.4,0.0,0.2,1)';
var CBPAccordionPanelComponent = /** @class */ (function () {
    function CBPAccordionPanelComponent(parentAccordion) {
        this.isExpanded = true;
        this.id = 0;
        this.id = parentAccordion.getNextChildId();
    }
    CBPAccordionPanelComponent.prototype.ngOnInit = function () {
    };
    CBPAccordionPanelComponent.prototype.toggleHeading = function () {
        this.isExpanded = !this.isExpanded;
    };
    CBPAccordionPanelComponent.prototype.getExpandedState = function () {
        return this.isExpanded ? 'expanded' : 'collapsed';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CBPAccordionPanelComponent.prototype, "panelTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CBPAccordionPanelComponent.prototype, "isExpanded", void 0);
    CBPAccordionPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cbp-accordion-panel',
            template: __webpack_require__("../../../../../src/app/accordion/accordion-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/accordion/accordion-panel.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('bodyExpansion', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ height: '0px', visibility: 'hidden', opacity: '0', 'padding-top': '0', 'padding-bottom': '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ height: '*', visibility: 'visible' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(EXPANSION_PANEL_ANIMATION_TIMING)),
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('indicatorAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'rotate(0deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'rotate(90deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(EXPANSION_PANEL_ANIMATION_TIMING)),
                ])
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewEncapsulation */].None
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Host */])()),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordion_component__["a" /* CBPAccordionComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__accordion_component__["a" /* CBPAccordionComponent */]) === "function" && _a || Object])
    ], CBPAccordionPanelComponent);
    return CBPAccordionPanelComponent;
    var _a;
}());

//# sourceMappingURL=accordion-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/accordion/accordion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cbp-accordion\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/accordion/accordion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accordion/accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CBPAccordionComponent = /** @class */ (function () {
    function CBPAccordionComponent() {
        this.nextChildId = 0;
    }
    CBPAccordionComponent.prototype.ngOnInit = function () {
    };
    CBPAccordionComponent.prototype.getNextChildId = function () {
        return (++this.nextChildId);
    };
    CBPAccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cbp-accordion',
            template: __webpack_require__("../../../../../src/app/accordion/accordion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/accordion/accordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CBPAccordionComponent);
    return CBPAccordionComponent;
}());

//# sourceMappingURL=accordion.component.js.map

/***/ }),

/***/ "../../../../../src/app/accordion/accordion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAccordionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_component__ = __webpack_require__("../../../../../src/app/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_panel_component__ = __webpack_require__("../../../../../src/app/accordion/accordion-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CBPAccordionModule = /** @class */ (function () {
    function CBPAccordionModule() {
    }
    CBPAccordionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdButtonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* CBPAccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_panel_component__["a" /* CBPAccordionPanelComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* CBPAccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_panel_component__["a" /* CBPAccordionPanelComponent */]
            ]
        })
    ], CBPAccordionModule);
    return CBPAccordionModule;
}());

//# sourceMappingURL=accordion.module.js.map

/***/ }),

/***/ "../../../../../src/app/accordion/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_component__ = __webpack_require__("../../../../../src/app/accordion/accordion.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_panel_component__ = __webpack_require__("../../../../../src/app/accordion/accordion-panel.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_module__ = __webpack_require__("../../../../../src/app/accordion/accordion.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/applications/applications-menu/applications-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cbp-applications-navitem\" [mdMenuTriggerFor]=\"cbpMenu\" >\n  <ng-template [ngTemplateOutlet]=\"application\"></ng-template>\n</div>\n<div class=\"cbp-applications-navitem\" *ngIf=\"menuDataLoaded && applicationsData.lastRetrieved !== null && !isXS\">\n\n</div>\n<div class=\"applications-expansion-panel inverse\" *ngIf=\"isApplicationsExpanded  && menuDataLoaded\">\n  <ng-template [ngTemplateOutlet]=\"applicationsPanel\" ></ng-template>\n</div>\n\n<md-menu #cbpMenu=\"mdMenu\" yPosition=\"above\" xPosition=\"after\" [overlapTrigger]=\"false\" class=\"cbp-menu-with-category applications-expansion-panel\" >\n  <ng-template [ngTemplateOutlet]=\"applicationsPanel\"></ng-template>\n</md-menu>\n\n\n<ng-template #applicationsPanel>\n  <ng-container *ngIf=\"applicationsData\">\n    <div class=\"cbp-menu-item-category\" *ngIf=\"applicationsData.recents?.length > 0\">Recent Apps</div>\n    <div class=\"mat-menu-item\" *ngFor=\"let app of applicationsData.recents\">\n      <div class=\"cbp-applications-remove-icon\"><md-icon  fontSet=\"fontawesome\" fontIcon=\"fa-times\" (click)=\"removeFromRecent(app, $event)\" fxFlexAlign=\"center\"></md-icon></div>\n      <a class=\"cbp-applications-link\"  title=\"{{app.description}}\" href=\"{{app.href}}\" fxFlex=\"\" >\n        {{app.name}}\n      </a>\n    </div>\n\n    <md-divider *ngIf=\"applicationsData.recents?.length > 0\"></md-divider>\n\n    <div class=\"cbp-menu-item-category\" *ngIf=\"applicationsData.favorites?.length > 0\">Favorite Apps</div>\n    <div class=\"mat-menu-item\" *ngFor=\"let app of applicationsData.favorites\">\n      <div class=\"cbp-applications-remove-icon\"><md-icon  fontSet=\"fontawesome\" fontIcon=\"fa-times\" (click)=\"removeFromFavorite(app, $event)\" fxFlexAlign=\"center\"></md-icon></div>\n      <a class=\"cbp-applications-link\"  title=\"{{app.description}}\" href=\"{{app.href}}\" fxFlex=\"\" >\n        {{app.name}}\n      </a>\n    </div>\n\n    <md-divider *ngIf=\"applicationsData.favorites.length > 0 || applicationsData.recents.length > 0\"></md-divider>\n\n    <div class=\"mat-menu-item cbp-applications-refresh\" (click)=\"reloadApplicationsData($event)\">Refresh\n      <small>Updated {{applicationsData.lastRetrieved | datetime}}</small>\n    </div>\n  </ng-container>\n\n</ng-template>\n<ng-template #application>\n  <div class=\"cbp-current-application\" fxShow=\"false\" fxShow.gt-xs fxShow.lt-sm fxLayout=\"column\" fxLayoutAlign=\"center start\" (click)=\"toggleApplicationsMenu($event)\">\n    <div *ngIf=\"applicationsDataLoading\" class=\"cbp-menu-loading\" style=\"color: white\">\n      <cbp-loading></cbp-loading>\n    </div>\n    <div *ngIf=\"menuDataLoaded && !applicationsDataLoading\" class=\"cbp-current-application-name\">{{applicationsData.currentApp.name}}\n      <md-icon *ngIf=\"applicationsData.lastRetrieved\" fontSet=\"fontawesome\" fontIcon=\"fa-caret-down\"></md-icon>\n    </div>\n    <div *ngIf=\"menuDataLoaded\" class=\"cbp-current-application-version\" fxShow=\"false\" fxShow.gt-xs>{{applicationsData.currentApp.version}}</div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/applications/applications-menu/applications-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n.cbp-header .cbp-current-application {\n  height: 50px; }\n\n.cbp-header .cbp-current-application-name {\n  line-height: 1em; }\n  .cbp-header .cbp-current-application-name .mat-icon {\n    margin-left: 5px;\n    height: 14px; }\n\n.cbp-header .cbp-current-application-version {\n  line-height: 1.42857143;\n  font-size: 12px;\n  font-style: italic; }\n\n.cbp-menu-item-category {\n  margin-left: 10px;\n  pointer-events: none;\n  padding: 5px 5px; }\n\n.mat-menu-item {\n  cursor: inherit; }\n\n.mat-menu-item .cbp-applications-link {\n  text-decoration: none;\n  color: #333333; }\n  .mat-menu-item .cbp-applications-link:hover, .mat-menu-item .cbp-applications-link:focus {\n    text-decoration: underline; }\n\n.mat-menu-item .cbp-applications-remove-icon .mat-icon {\n  vertical-align: inherit; }\n  .mat-menu-item .cbp-applications-remove-icon .mat-icon:hover, .mat-menu-item .cbp-applications-remove-icon .mat-icon:focus {\n    color: #222222;\n    cursor: pointer; }\n\n.cbp-applications-refresh {\n  cursor: pointer; }\n\n.applications-expansion-panel.inverse .cbp-applications-refresh,\n.applications-expansion-panel.inverse .cbp-applications-link,\n.applications-expansion-panel.inverse .cbp-applications-remove-icon .mat-icon {\n  color: #fff !important; }\n\n.applications-expansion-panel {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.cbp-menu-item-category {\n  margin-left: 10px;\n  pointer-events: none;\n  padding: 5px 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/applications/applications-menu/applications-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPApplicationsMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cbp_applications_service__ = __webpack_require__("../../../../../src/app/applications/cbp-applications-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CBPApplicationsMenuComponent = /** @class */ (function () {
    function CBPApplicationsMenuComponent(applicationsService, media) {
        this.applicationsService = applicationsService;
        this.media = media;
        this.menuDataLoaded = false;
        this.applicationsDataLoading = true;
        this.isApplicationsExpanded = false;
        this.isXS = false;
    }
    CBPApplicationsMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.media) {
            this.mediaSubscription = this.media.subscribe(function (change) {
                if (change && change.mqAlias !== 'xs') {
                    _this._isToolbarExpanded = false;
                    _this.isApplicationsExpanded = false;
                    setTimeout(function () {
                        _this.isXS = false;
                    });
                }
                if (_this.cbpMenu && change && change.mqAlias === 'xs') {
                    // TODO this.cbpMenu._emitCloseEvent();
                    setTimeout(function () {
                        _this.isXS = true;
                    });
                }
            });
        }
        if (this.applicationsService) {
            this.applicationsServiceSubscription = this.applicationsService.getApplicationsData().subscribe(function (data) {
                _this.applicationsData = data;
                if (data) {
                    _this.menuDataLoaded = true;
                    _this.applicationsDataLoading = false;
                }
            }, function (err) {
                _this.error = err;
                _this.applicationsDataLoading = false;
            });
        }
    };
    CBPApplicationsMenuComponent.prototype.removeFromFavorite = function (app, $event) {
        this.applicationsService.removeFavoriteApplication(app);
        $event.stopPropagation();
    };
    CBPApplicationsMenuComponent.prototype.removeFromRecent = function (app, $event) {
        this.applicationsService.removeRecentApplication(app);
        $event.stopPropagation();
    };
    CBPApplicationsMenuComponent.prototype.ngOnDestroy = function () {
        console.log('ngDestroy Called');
        if (this.applicationsServiceSubscription) {
            this.applicationsServiceSubscription.unsubscribe();
        }
        if (this.mediaSubscription) {
            this.mediaSubscription.unsubscribe();
        }
    };
    CBPApplicationsMenuComponent.prototype.reloadApplicationsData = function ($event) {
        this.applicationsService.refresh();
        this.applicationsDataLoading = true;
        $event.stopPropagation();
    };
    CBPApplicationsMenuComponent.prototype.toggleApplicationsMenu = function ($event) {
        if (this.menuDataLoaded && this._isToolbarExpanded) {
            this.isApplicationsExpanded = !this.isApplicationsExpanded;
            $event.stopPropagation();
        }
    };
    Object.defineProperty(CBPApplicationsMenuComponent.prototype, "toolbarExpanded", {
        get: function () { return this._isToolbarExpanded; },
        set: function (expanded) {
            this._isToolbarExpanded = expanded;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdMenu */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdMenu */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdMenu */]) === "function" && _a || Object)
    ], CBPApplicationsMenuComponent.prototype, "cbpMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CBPApplicationsMenuComponent.prototype, "toolbarExpanded", null);
    CBPApplicationsMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cbp-applications-menu',
            template: __webpack_require__("../../../../../src/app/applications/applications-menu/applications-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/applications/applications-menu/applications-menu.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__cbp_applications_service__["d" /* CBP_APPLICATIONS_SERVICE */])),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__cbp_applications_service__["c" /* CBPApplicationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cbp_applications_service__["c" /* CBPApplicationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _c || Object])
    ], CBPApplicationsMenuComponent);
    return CBPApplicationsMenuComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=applications-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/applications/applications.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPApplicationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applications_menu_applications_menu_component__ = __webpack_require__("../../../../../src/app/applications/applications-menu/applications-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_progress_module__ = __webpack_require__("../../../../../src/app/progress/progress.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__("../../../../../src/app/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CBPApplicationsModule = /** @class */ (function () {
    function CBPApplicationsModule() {
    }
    CBPApplicationsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdMenuModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_4__progress_progress_module__["a" /* CBPProgressModule */], __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CBPPipesModule */], __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__applications_menu_applications_menu_component__["a" /* CBPApplicationsMenuComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__applications_menu_applications_menu_component__["a" /* CBPApplicationsMenuComponent */]]
        })
    ], CBPApplicationsModule);
    return CBPApplicationsModule;
}());

//# sourceMappingURL=applications.module.js.map

/***/ }),

/***/ "../../../../../src/app/applications/cbp-applications-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CBPApplicationsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CBPApplicationsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CBP_APPLICATIONS_SERVICE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

/**
 * Each application in the drop down and this application to refer by name/id etc.
 */
var CBPApplication = /** @class */ (function () {
    function CBPApplication(name, href) {
        this.name = name;
        this.href = href;
    }
    return CBPApplication;
}());

/**
 * Models list of applications, recents, favorites etc.
 */
var CBPApplicationsData = /** @class */ (function () {
    function CBPApplicationsData() {
        this.list = [];
        this.recents = [];
        this.favorites = [];
        this.currentApp = new CBPApplication();
    }
    return CBPApplicationsData;
}());

var CBPApplicationsService = /** @class */ (function () {
    function CBPApplicationsService() {
    }
    return CBPApplicationsService;
}());

var CBP_APPLICATIONS_SERVICE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('cbp-applications-service');
//# sourceMappingURL=cbp-applications-service.js.map

/***/ }),

/***/ "../../../../../src/app/cbp-root/cbp-root.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Generated from ngx-cbp-theme -->\n<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/app/cbp-root/cbp-root.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n/** Hacks - Certain material2 components can't be styled well without this higher level css */\n.cbp-theme .mat-toolbar.cbp-header .mat-toolbar-row {\n  height: 50px;\n  border-bottom: 1px solid; }\n\n.cbp-theme .mat-toolbar.cbp-app-header .mat-toolbar-row {\n  height: 48px;\n  border-bottom: 1px solid; }\n\n.cbp-theme .mat-toolbar.cbp-header .mat-toolbar-row {\n  border-bottom-color: #0A3055; }\n\n.cbp-theme .mat-toolbar.cbp-app-header .mat-toolbar-row {\n  border-bottom-color: #adadad; }\n\n.cbp-theme .cbp-app-header.mat-toolbar,\n.cbp-theme .cbp-header.mat-toolbar {\n  padding: 0;\n  min-height: inherit; }\n\n.cbp-theme .mat-toolbar {\n  font-weight: inherit !important;\n  min-height: inherit; }\n\n.cbp-theme .mat-tab-label, .cbp-theme .mat-tab-link {\n  font-size: 15px !important;\n  opacity: inherit !important; }\n\ncbp-root {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh; }\n  cbp-root cbp-app-header {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cbp-root/cbp-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CBPRootComponent = /** @class */ (function () {
    function CBPRootComponent() {
    }
    CBPRootComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.cbp-theme'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CBPRootComponent.prototype, "ngOnInit", null);
    CBPRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cbp-root',
            template: __webpack_require__("../../../../../src/app/cbp-root/cbp-root.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cbp-root/cbp-root.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], CBPRootComponent);
    return CBPRootComponent;
}());

//# sourceMappingURL=cbp-root.component.js.map

/***/ }),

/***/ "../../../../../src/app/cbp-root/cbp-root.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPRootModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cbp_root_component__ = __webpack_require__("../../../../../src/app/cbp-root/cbp-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_progress_module__ = __webpack_require__("../../../../../src/app/progress/progress.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_cbp_header_cbp_header_module__ = __webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_pipes_module__ = __webpack_require__("../../../../../src/app/pipes/pipes.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CBPRootModule = /** @class */ (function () {
    function CBPRootModule(mdIconRegistry) {
        mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    CBPRootModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__cbp_root_component__["a" /* CBPRootComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cbp_root_component__["a" /* CBPRootComponent */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__progress_progress_module__["a" /* CBPProgressModule */], __WEBPACK_IMPORTED_MODULE_7__header_cbp_header_cbp_header_module__["a" /* CBPHeaderModule */], __WEBPACK_IMPORTED_MODULE_8__pipes_pipes_module__["a" /* CBPPipesModule */]
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdIconRegistry */]) === "function" && _a || Object])
    ], CBPRootModule);
    return CBPRootModule;
    var _a;
}());

//# sourceMappingURL=cbp-root.module.js.map

/***/ }),

/***/ "../../../../../src/app/cbp-root/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cbp_root_module__ = __webpack_require__("../../../../../src/app/cbp-root/cbp-root.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cbp_root_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cbp_root_component__ = __webpack_require__("../../../../../src/app/cbp-root/cbp-root.component.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"cbp-app-header\" fxLayout=\"column\" fxLayoutAlign.gt-xs=\"center stretch\" fxLayoutAlign.lt-sm=\"end stretch\" [@appHeaderState]=\"appHeaderState\">\n\n  <div class=\"app-header-title-container\">\n    <ng-content select=\"cbp-app-title\"></ng-content>\n  </div>\n\n  <div class=\"app-header-left-nav-container\" style=\"overflow-x: hidden;\" fxShow=\"false\" fxShow.gt-xs>\n    <ng-content select=\"cbp-app-main-nav\"></ng-content>\n  </div>\n\n  <div class=\"app-header-right-nav-container\"  fxFlex=\"\" fxLayoutAlign.gt-xs=\"end stretch\" >\n    <ng-content select=\"cbp-app-right-nav\"></ng-content>\n  </div>\n\n\n  <div class=\"cbp-toolbar-expansion-container\" fxFlex=\"\" fxFlexAlign=\"stretch\" fxLayout=\"row\" fxLayoutAlign=\"end stretch\" fxHide=\"false\" fxHide.gt-xs>\n    <div class=\"cbp-toolbar-expansion\" (click)=\"isToolbarExpanded = ! isToolbarExpanded\">\n      <div class=\"cbp-toolbar-expansion-icon\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </div>\n    </div>\n  </div>\n\n  <div fxShow=\"false\" fxShow.lt-sm *ngIf=\"isToolbarExpanded ? true : false\">\n    <ng-content select=\".app-left-nav-items\"></ng-content>\n  </div>\n\n\n</md-toolbar>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n.cbp-app-header {\n  position: fixed;\n  top: 50px;\n  z-index: 1000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cbp_header_cbp_header_component__ = __webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CBPAppHeaderComponent = /** @class */ (function () {
    function CBPAppHeaderComponent() {
    }
    CBPAppHeaderComponent.prototype.ngOnInit = function () {
        this.appHeaderState = 'initial';
        this.lastScrollY = 0;
    };
    CBPAppHeaderComponent.prototype.scrolled = function () {
        this.appHeaderState = this.lastScrollY > window.pageYOffset ? 'initial' : 'up';
        this.lastScrollY = window.pageYOffset;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], CBPAppHeaderComponent.prototype, "appHeaderState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CBPAppHeaderComponent.prototype, "scrolled", null);
    CBPAppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cbp-app-header',
            template: __webpack_require__("../../../../../src/app/header/app-header/app-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/app-header/app-header.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('appHeaderState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('initial', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ top: '*' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('up', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ top: '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('initial => up, up => initial', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(__WEBPACK_IMPORTED_MODULE_2__cbp_header_cbp_header_component__["b" /* HEADER_SHRINK_TRANSITION */]))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CBPAppHeaderComponent);
    return CBPAppHeaderComponent;
}());

//# sourceMappingURL=app-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAppHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_header_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_title_app_title_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-title/app-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_main_nav_app_main_nav_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_right_nav_app_right_nav_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.ts");
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CBPAppHeaderModule = /** @class */ (function () {
    function CBPAppHeaderModule() {
    }
    CBPAppHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdMenuModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdCoreModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_header_component__["a" /* CBPAppHeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__app_title_app_title_component__["a" /* CBPAppTitleComponent */], __WEBPACK_IMPORTED_MODULE_6__app_main_nav_app_main_nav_component__["a" /* CBPAppMainNavComponent */], __WEBPACK_IMPORTED_MODULE_7__app_right_nav_app_right_nav_component__["a" /* CBPAppRightNavComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__app_header_component__["a" /* CBPAppHeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__app_title_app_title_component__["a" /* CBPAppTitleComponent */], __WEBPACK_IMPORTED_MODULE_6__app_main_nav_app_main_nav_component__["a" /* CBPAppMainNavComponent */], __WEBPACK_IMPORTED_MODULE_7__app_right_nav_app_right_nav_component__["a" /* CBPAppRightNavComponent */]]
        })
    ], CBPAppHeaderModule);
    return CBPAppHeaderModule;
}());

//# sourceMappingURL=app-header.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAppMainNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CBPAppMainNavComponent = /** @class */ (function () {
    function CBPAppMainNavComponent() {
    }
    CBPAppMainNavComponent.prototype.ngOnInit = function () {
    };
    CBPAppMainNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cbp-app-main-nav',
            template: __webpack_require__("../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CBPAppMainNavComponent);
    return CBPAppMainNavComponent;
}());

//# sourceMappingURL=app-main-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAppRightNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CBPAppRightNavComponent = /** @class */ (function () {
    function CBPAppRightNavComponent() {
    }
    CBPAppRightNavComponent.prototype.ngOnInit = function () {
    };
    CBPAppRightNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cbp-app-right-nav',
            template: __webpack_require__("../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CBPAppRightNavComponent);
    return CBPAppRightNavComponent;
}());

//# sourceMappingURL=app-right-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-title/app-title.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-title/app-title.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-title/app-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAppTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CBPAppTitleComponent = /** @class */ (function () {
    function CBPAppTitleComponent() {
    }
    CBPAppTitleComponent.prototype.ngOnInit = function () {
    };
    CBPAppTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cbp-app-title',
            template: __webpack_require__("../../../../../src/app/header/app-header/app-title/app-title.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/app-header/app-title/app-title.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CBPAppTitleComponent);
    return CBPAppTitleComponent;
}());

//# sourceMappingURL=app-title.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/cbp-header/cbp-header.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\" class=\"cbp-header\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\"  [@cbpHeaderState]=\"cbpHeaderState\">\n  <div class=\"cbp-brand-nav\" fxFlexAlign=\"stretch\" fxLayout=\"row\">\n    <div fxFlexAlign=\"center\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n      <div class=\"cbp-brand\"  fxShow=\"false\" fxShow.gt-sm>U.S. Customs & Border Protection</div>\n      <div class=\"cbp-brand-short\" fxShow=\"false\" fxShow.lt-md>U.S. CBP</div>\n      <div class=\"dhs-brand\"  fxShow=\"false\" fxShow.gt-sm>U.S. Department of Homeland Security</div>\n    </div>\n  </div>\n  <div fxFlex=\"\" fxFlexAlign=\"stretch\" fxLayout=\"row\" fxLayoutAlign=\"start stretch\" fxShow=\"false\" fxShow.gt-xs>\n    <ng-template [ngTemplateOutlet]=\"cbpApplicationsDropdown\"></ng-template>\n  </div>\n  <div fxFlex=\"\" fxFlexAlign=\"stretch\" fxLayout=\"row\" fxLayoutAlign=\"end stretch\" fxShow=\"false\" fxShow.gt-xs>\n    <ng-template [ngTemplateOutlet]=\"feedbackNavItem\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"userNavItem\"></ng-template>\n  </div>\n  <div fxFlex=\"\" class=\"cbp-toolbar-expansion-container\" fxFlexAlign=\"stretch\" fxLayout=\"row\" fxLayoutAlign=\"end stretch\" fxHide=\"false\" fxHide.gt-xs>\n    <div class=\"cbp-toolbar-expansion\" (click)=\"isToolbarExpanded = ! isToolbarExpanded\">\n      <div class=\"cbp-toolbar-expansion-icon\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </div>\n    </div>\n  </div>\n\n</md-toolbar>\n<md-toolbar color=\"primary\" class=\"toolbar-expansion-panel\" fxLayoutAlign=\"start start\" fxLayout=\"start\" *ngIf=\"isToolbarExpanded\" fxHide.gt-xs>\n  <ng-template [ngTemplateOutlet]=\"cbpApplicationsDropdown\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"feedbackNavItem\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"userNavItem\"></ng-template>\n</md-toolbar>\n\n<ng-template #cbpApplicationsDropdown>\n  <cbp-applications-menu [toolbarExpanded]=\"isToolbarExpanded\"></cbp-applications-menu>\n</ng-template>\n\n<!-- templates -->\n<ng-template #feedbackNavItem>\n  <div class=\"cbp-feedback-navitem\" (click)=\"handleFeedback()\">\n    <md-icon fontSet=\"fontawesome\" fontIcon=\"fa-comment\"></md-icon>\n    <span fxShow=\"false\" fxShow.gt-sm fxShow.lt-sm>Feedback</span>\n  </div>\n</ng-template>\n\n<ng-template #userNavItem>\n  <cbp-user-menu [toolbarExpanded]=\"isToolbarExpanded\"></cbp-user-menu>\n</ng-template>\n\n<!-- hack  for md-divider to work outside of md-list-->\n<md-list style=\"display: none\"></md-list>"

/***/ }),

/***/ "../../../../../src/app/header/cbp-header/cbp-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n/** CBP VARIABLES **/\n.cbp-navbar-item, .cbp-brand-nav, .cbp-applications-navitem, .cbp-user-navitem, .cbp-feedback-navitem, .cbp-toolbar-expansion {\n  font-size: 15px;\n  cursor: pointer;\n  line-height: 50px;\n  padding: 0 15px; }\n  .cbp-navbar-item:hover, .cbp-brand-nav:hover, .cbp-applications-navitem:hover, .cbp-user-navitem:hover, .cbp-feedback-navitem:hover, .cbp-toolbar-expansion:hover, .cbp-navbar-item:focus, .cbp-brand-nav:focus, .cbp-applications-navitem:focus, .cbp-user-navitem:focus, .cbp-feedback-navitem:focus, .cbp-toolbar-expansion:focus {\n    outline: thin dotted;\n    outline-offset: -2px;\n    text-decoration: none; }\n\n.cbp-toolbar-expansion-container:hover {\n  outline: none; }\n\n.cbp-toolbar-expansion-container .cbp-toolbar-expansion:hover {\n  outline: none; }\n\n.cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon {\n  border: 1px solid #ddd;\n  position: relative;\n  margin-top: 8px;\n  cursor: inherit;\n  padding: 9px 10px;\n  border-radius: 2px;\n  min-width: inherit;\n  background-color: #f8f8f8; }\n  .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon:hover {\n    background-color: #ddd; }\n  .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon:focus {\n    border-color: #ddd;\n    outline: 1px dotted white !important; }\n\n.mat-primary .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon {\n  border: 1px solid #003456;\n  background-color: #003e65; }\n  .mat-primary .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon:hover {\n    background-color: #333; }\n  .mat-primary .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon:focus {\n    border-color: #333;\n    outline: 1px dotted #1461ab !important; }\n\n.icon-bar + .icon-bar {\n  margin-top: 4px; }\n\n.icon-bar {\n  background-color: #888;\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px; }\n\n.mat-primary .icon-bar {\n  background-color: #fff; }\n\n.toolbar-expansion-panel.mat-toolbar {\n  padding: 0;\n  width: 100%;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1); }\n\n.toolbar-expansion-panel {\n  z-index: 1010;\n  position: fixed;\n  top: 50px; }\n  .toolbar-expansion-panel .mat-toolbar-layout {\n    width: 100%; }\n  .toolbar-expansion-panel md-toolbar-row.mat-toolbar-row {\n    height: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n  .toolbar-expansion-panel .applications-expansion-panel {\n    font-size: 15px; }\n    .toolbar-expansion-panel .applications-expansion-panel .cbp-navbar-item, .toolbar-expansion-panel .applications-expansion-panel .cbp-brand-nav, .toolbar-expansion-panel .applications-expansion-panel .cbp-applications-navitem, .toolbar-expansion-panel .applications-expansion-panel .cbp-user-navitem, .toolbar-expansion-panel .applications-expansion-panel .cbp-feedback-navitem, .toolbar-expansion-panel .applications-expansion-panel .cbp-toolbar-expansion {\n      line-height: 21px;\n      padding: 5px 25px; }\n\n.cbp-header {\n  position: fixed;\n  top: 0;\n  z-index: 1010; }\n\n.cbp-brand-nav {\n  font-size: 19px;\n  transition: color 200ms ease-in-out;\n  padding: 0 70px 0 15px; }\n  .cbp-brand-nav .cbp-brand {\n    font-size: 19px;\n    line-height: 21px; }\n  .cbp-brand-nav .dhs-brand {\n    line-height: 14px;\n    margin: 0;\n    font-size: 12px;\n    font-style: italic; }\n\n.mat-menu-item {\n  padding-left: 21px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/cbp-header/cbp-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HEADER_SHRINK_TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_service__ = __webpack_require__("../../../../../src/app/header/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HEADER_SHRINK_TRANSITION = '250ms cubic-bezier(0.4,0.0,0.2,1)';
var CBPHeaderComponent = /** @class */ (function () {
    function CBPHeaderComponent(media) {
        this.media = media;
        if (this.feedbackService) {
            this.feedbackService.onFeedbackClose(this.feedbackDone);
        }
    }
    ;
    CBPHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cbpHeaderState = 'initial';
        this.lastScrollY = 0;
        this.mediaSubscription = this.media.subscribe(function (change) {
            if (change && change.mqAlias !== 'xs') {
                _this.isToolbarExpanded = false;
            }
        });
    };
    CBPHeaderComponent.prototype.ngOnDestroy = function () {
        this.mediaSubscription.unsubscribe();
    };
    CBPHeaderComponent.prototype.scrolled = function () {
        this.cbpHeaderState = this.lastScrollY > window.pageYOffset ? 'initial' : 'up';
        this.lastScrollY = window.pageYOffset;
        this.isToolbarExpanded = false;
    };
    CBPHeaderComponent.prototype.handleFeedback = function () {
        if (this.feedbackService) {
            this.feedbackService.handleFeedback();
        }
    };
    /**
     * Not sure what we do here but we have it.
     */
    CBPHeaderComponent.prototype.feedbackDone = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], CBPHeaderComponent.prototype, "cbpHeaderState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__feedback_service__["b" /* CBP_FEEDBACK_SERVICE */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__feedback_service__["a" /* CBPFeedbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__feedback_service__["a" /* CBPFeedbackService */]) === "function" && _a || Object)
    ], CBPHeaderComponent.prototype, "feedbackService", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CBPHeaderComponent.prototype, "scrolled", null);
    CBPHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cbp-header',
            template: __webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewEncapsulation */].None,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('cbpHeaderState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('initial', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ top: '*' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('up', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ top: '-50px' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('initial => up, up => initial', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(HEADER_SHRINK_TRANSITION))
                ])
            ]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])(),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _b || Object])
    ], CBPHeaderComponent);
    return CBPHeaderComponent;
    var _a, _b;
}());

//# sourceMappingURL=cbp-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/cbp-header/cbp-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cbp_header_component__ = __webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__applications_applications_module__ = __webpack_require__("../../../../../src/app/applications/applications.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CBPHeaderModule = /** @class */ (function () {
    function CBPHeaderModule() {
    }
    CBPHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__user_user_module__["a" /* CBPUserModule */],
                __WEBPACK_IMPORTED_MODULE_6__applications_applications_module__["a" /* CBPApplicationsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__cbp_header_component__["a" /* CBPHeaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__cbp_header_component__["a" /* CBPHeaderComponent */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_5__user_user_module__["a" /* CBPUserModule */], __WEBPACK_IMPORTED_MODULE_6__applications_applications_module__["a" /* CBPApplicationsModule */]]
        })
    ], CBPHeaderModule);
    return CBPHeaderModule;
}());

//# sourceMappingURL=cbp-header.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/feedback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPFeedbackService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CBP_FEEDBACK_SERVICE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

/**
 * Feedback service implementation is beyond the scope of this library.
 * We recommend developing an independent module that implements the following service.
 */
var CBPFeedbackService = /** @class */ (function () {
    function CBPFeedbackService() {
    }
    return CBPFeedbackService;
}());

var CBP_FEEDBACK_SERVICE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('cbp-feedback-service');
//# sourceMappingURL=feedback.service.js.map

/***/ }),

/***/ "../../../../../src/app/header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_header_app_header_module__ = __webpack_require__("../../../../../src/app/header/app-header/app-header.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_header_app_header_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_header_app_header_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-header.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_header_app_title_app_title_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-title/app-title.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_header_app_main_nav_app_main_nav_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_header_app_right_nav_app_right_nav_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cbp_header_cbp_header_module__ = __webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__cbp_header_cbp_header_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cbp_header_cbp_header_component__ = __webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feedback_service__ = __webpack_require__("../../../../../src/app/header/feedback.service.ts");
/* unused harmony namespace reexport */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/datetime.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATE_FORMAT_DayOfWeek_ShortDate_Time */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPDatetimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DATE_FORMAT_DayOfWeek_ShortDate_Time = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
};
var CBPDatetimePipe = /** @class */ (function () {
    function CBPDatetimePipe() {
    }
    CBPDatetimePipe.prototype.transform = function (value) {
        return new Intl.DateTimeFormat('en-US', DATE_FORMAT_DayOfWeek_ShortDate_Time).format(value);
    };
    CBPDatetimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
            name: 'datetime'
        })
    ], CBPDatetimePipe);
    return CBPDatetimePipe;
}());

//# sourceMappingURL=datetime.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPPipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datetime_pipe__ = __webpack_require__("../../../../../src/app/pipes/datetime.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CBPPipesModule = /** @class */ (function () {
    function CBPPipesModule() {
    }
    CBPPipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__datetime_pipe__["a" /* CBPDatetimePipe */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__datetime_pipe__["a" /* CBPDatetimePipe */]]
        })
    ], CBPPipesModule);
    return CBPPipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ "../../../../../src/app/progress/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-spinner fa-spin\"></i><span>&nbsp;Loading ...</span>"

/***/ }),

/***/ "../../../../../src/app/progress/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/progress/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPLoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CBPLoadingComponent = /** @class */ (function () {
    function CBPLoadingComponent() {
    }
    CBPLoadingComponent.prototype.ngOnInit = function () {
    };
    CBPLoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cbp-loading',
            template: __webpack_require__("../../../../../src/app/progress/loading/loading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/progress/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CBPLoadingComponent);
    return CBPLoadingComponent;
}());

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../src/app/progress/progress.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPProgressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading_component__ = __webpack_require__("../../../../../src/app/progress/loading/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CBPProgressModule = /** @class */ (function () {
    function CBPProgressModule() {
    }
    CBPProgressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__loading_loading_component__["a" /* CBPLoadingComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__loading_loading_component__["a" /* CBPLoadingComponent */]]
        })
    ], CBPProgressModule);
    return CBPProgressModule;
}());

//# sourceMappingURL=progress.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-menu/user-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLoggedIn && !loginProgress\" class=\"cbp-user-navitem\" (click)=\"login()\">\n  <i class=\"fa fa-sign-in\"></i><span>&nbsp;Login</span>\n</div>\n<div *ngIf=\"!isLoggedIn && loginProgress\" class=\"cbp-user-navitem\">\n  <cbp-loading></cbp-loading>\n</div>\n<div *ngIf=\"isLoggedIn && userDataLoaded && !toolbarExpanded\" class=\"cbp-user-navitem\" [mdMenuTriggerFor]=\"userMenu\">\n  <md-icon fontSet=\"fontawesome\" fontIcon=\"fa-user\"></md-icon>\n  <span fxShow=\"false\" fxShow.gt-sm fxShow.lt-sm>{{user.firstName}} {{user.lastName}}</span>\n  <md-icon fontSet=\"fontawesome\" fontIcon=\"fa-caret-down\"></md-icon>\n</div>\n\n<div *ngIf=\"isLoggedIn && userDataLoaded && toolbarExpanded\" class=\"cbp-user-navitem non-menu\" (click)=\"toggleMenu()\">\n  <md-icon fontSet=\"fontawesome\" fontIcon=\"fa-user\"></md-icon>\n  <span fxShow=\"false\" fxShow.gt-sm fxShow.lt-sm>{{user.firstName}} {{user.lastName}}</span>\n  <md-icon fontSet=\"fontawesome\" fontIcon=\"fa-caret-down\"></md-icon>\n</div>\n\n<div class=\"cbp-user-navitem expanded\" *ngIf=\"toolbarExpanded && userMenuExpanded\">\n  <ng-template [ngTemplateOutlet]=\"userMenuContents\"></ng-template>\n</div>\n\n<md-menu #userMenu=\"mdMenu\" yPosition=\"above\" xPosition=\"before\" [overlapTrigger]=\"false\">\n  <ng-template [ngTemplateOutlet]=\"userMenuContents\"></ng-template>\n</md-menu>\n\n<ng-template #userMenuContents let-fromMenu=\"fromMenu\">\n  <div class=\"mat-menu-item\" (click)=\"logout()\">Logout</div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-menu/user-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n:host {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.cbp-user-navitem.expanded .mat-menu-item {\n  color: #fff !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-menu/user-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPUserMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CBPUserMenuComponent = /** @class */ (function () {
    function CBPUserMenuComponent(userService) {
        this.userService = userService;
        this._isToolbarExpanded = false;
        this.userMenuExpanded = false;
        this.loginProgress = false;
        this.isLoggedIn = false;
        this.userDataLoaded = false;
    }
    CBPUserMenuComponent.prototype.ngOnInit = function () { };
    CBPUserMenuComponent.prototype.login = function () {
        var _this = this;
        this.loginProgress = true;
        this.isLoggedIn = false;
        if (this.userServiceSubscription) {
            this.userService.login();
        }
        else {
            this.userServiceSubscription = this.userService.login().subscribe({
                next: function (data) {
                    if (data) {
                        _this.user = data;
                        _this.userDataLoaded = true;
                        _this.loginProgress = false;
                        _this.isLoggedIn = true;
                    }
                    else {
                        _this.loginProgress = false;
                        _this.isLoggedIn = false;
                        _this.user = data;
                        _this.userDataLoaded = false;
                    }
                },
                error: function (err) {
                    console.log('errr' + err);
                    _this.loginProgress = false;
                    _this.isLoggedIn = false;
                    _this.error = err;
                    _this.userDataLoaded = false;
                },
                complete: function () {
                    console.log('completed');
                }
            });
        }
    };
    CBPUserMenuComponent.prototype.ngOnDestroy = function () {
        if (this.userServiceSubscription) {
            this.userServiceSubscription.unsubscribe();
        }
        this.user = undefined;
        this.userDataLoaded = false;
    };
    CBPUserMenuComponent.prototype.logout = function () {
        this.userService.logout();
        // this._isToolbarExpanded = false;
    };
    CBPUserMenuComponent.prototype.toggleMenu = function () {
        this.userMenuExpanded = !this.userMenuExpanded;
    };
    Object.defineProperty(CBPUserMenuComponent.prototype, "toolbarExpanded", {
        get: function () { return this._isToolbarExpanded; },
        set: function (expanded) {
            this._isToolbarExpanded = expanded;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CBPUserMenuComponent.prototype, "toolbarExpanded", null);
    CBPUserMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cbp-user-menu',
            template: __webpack_require__("../../../../../src/app/user/user-menu/user-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-menu/user-menu.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__user__["c" /* CBP_USER_SERVICE */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user__["b" /* CBPUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user__["b" /* CBPUserService */]) === "function" && _a || Object])
    ], CBPUserMenuComponent);
    return CBPUserMenuComponent;
    var _a;
}());

//# sourceMappingURL=user-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPUserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_menu_user_menu_component__ = __webpack_require__("../../../../../src/app/user/user-menu/user-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_progress_module__ = __webpack_require__("../../../../../src/app/progress/progress.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CBPUserModule = /** @class */ (function () {
    function CBPUserModule() {
    }
    CBPUserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdMenuModule */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_5__progress_progress_module__["a" /* CBPProgressModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__user_menu_user_menu_component__["a" /* CBPUserMenuComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__user_menu_user_menu_component__["a" /* CBPUserMenuComponent */]]
        })
    ], CBPUserModule);
    return CBPUserModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CBPUserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CBP_USER_SERVICE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

/**
 * CBPUser class can be extended by the library users to include additional attributes.
 */
var CBPUser = /** @class */ (function () {
    function CBPUser() {
    }
    return CBPUser;
}());

/**
 * The implementation is beyond the scope of this library since it involves fetching the authenticated
 *  user who is accessing your application.
 * This service must be implemented by library users or by another CF components.
 */
var CBPUserService = /** @class */ (function () {
    function CBPUserService() {
    }
    return CBPUserService;
}());

/**
 * Injectable token that mus be provided by library users.
 * @type {InjectionToken<CBPUserService>}
 */
var CBP_USER_SERVICE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('cbp-user-service');
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/demo/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/demo/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/demo/app/demo-app-header/demo-app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<cbp-app-header>\n\n  <cbp-app-title>\n    <h1 class=\"app-title\">\n      Kitchen Sink\n      <small>Demo</small>\n    </h1>\n  </cbp-app-title>\n\n  <cbp-app-main-nav>\n    <ng-template [ngTemplateOutlet]=\"tabbedAppNav\"></ng-template>\n  </cbp-app-main-nav>\n\n  <cbp-app-right-nav>\n    <div class=\"app-right-nav-items\">\n      <div class=\"cbp-navbar-item\">\n        <md-icon  fontSet=\"fontawesome\" fontIcon=\"fa-print\"></md-icon>\n      </div>\n      <div class=\"cbp-navbar-item\">\n        <md-icon  fontSet=\"fontawesome\" fontIcon=\"fa-wifi\"></md-icon>\n      </div>\n    </div>\n  </cbp-app-right-nav>\n</cbp-app-header>\n\n<ng-template #tabbedAppNav>\n  <md-tab-group>\n    <md-tab label=\"Info\" ></md-tab>\n    <md-tab label=\"Findings\"></md-tab>\n    <md-tab label=\"Attachments\"></md-tab>\n    <md-tab label=\"Results\"></md-tab>\n    <md-tab label=\"Some\"></md-tab>\n    <md-tab label=\"More\"></md-tab>\n    <md-tab label=\"Items\"></md-tab>\n    <md-tab label=\"Remarks\"></md-tab>\n    <md-tab label=\"History\"></md-tab>\n    <md-tab label=\"Notes\"></md-tab>\n  </md-tab-group>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/demo/app/demo-app-header/demo-app-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n.app-right-nav-items {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.app-title {\n  padding: 0 15px;\n  margin-right: 10px;\n  border-right: 1px solid #adadad; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/demo-app-header/demo-app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoAppHeaderComponent = /** @class */ (function () {
    function DemoAppHeaderComponent() {
    }
    DemoAppHeaderComponent.prototype.ngOnInit = function () {
    };
    DemoAppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'demo-demo-app-header',
            template: __webpack_require__("../../../../../src/demo/app/demo-app-header/demo-app-header.component.html"),
            styles: [__webpack_require__("../../../../../src/demo/app/demo-app-header/demo-app-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoAppHeaderComponent);
    return DemoAppHeaderComponent;
}());

//# sourceMappingURL=demo-app-header.component.js.map

/***/ }),

/***/ "../../../../../src/demo/app/demo-app-header/demo-app-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAppHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_app_header_component__ = __webpack_require__("../../../../../src/demo/app/demo-app-header/demo-app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_header_app_header_app_header_module__ = __webpack_require__("../../../../../src/app/header/app-header/app-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DemoAppHeaderModule = /** @class */ (function () {
    function DemoAppHeaderModule() {
    }
    DemoAppHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__app_header_app_header_app_header_module__["a" /* CBPAppHeaderModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__demo_app_header_component__["a" /* DemoAppHeaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__demo_app_header_component__["a" /* DemoAppHeaderComponent */]]
        })
    ], DemoAppHeaderModule);
    return DemoAppHeaderModule;
}());

//# sourceMappingURL=demo-app-header.module.js.map

/***/ }),

/***/ "../../../../../src/demo/app/demo-buttons/demo-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Buttons</h2>\n\n<button md-raised-button color=\"primary\">Primary</button>\n<button md-raised-button color=\"accent\">Accent</button>\n<button md-raised-button color=\"warn\">Danger</button>\n<button md-button>Default</button>\n<a href md-button md-button-link>SomeLink</a>\n\n<h3>Disabled Buttons</h3>\n\n<button md-raised-button color=\"primary\" disabled>Primary</button>\n<button md-raised-button color=\"accent\" disabled>Accent</button>\n<button md-raised-button color=\"warn\" disabled>Danger</button>\n<button md-button disabled>Default</button>\n<a href md-button md-button-link disabled>SomeLink</a>"

/***/ }),

/***/ "../../../../../src/demo/app/demo-buttons/demo-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/demo-buttons/demo-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoButtonsComponent = /** @class */ (function () {
    function DemoButtonsComponent() {
    }
    DemoButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'demo-buttons',
            template: __webpack_require__("../../../../../src/demo/app/demo-buttons/demo-buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/demo/app/demo-buttons/demo-buttons.component.scss")]
        })
    ], DemoButtonsComponent);
    return DemoButtonsComponent;
}());

//# sourceMappingURL=demo-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/demo/app/demo-buttons/demo-buttons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_buttons_component__ = __webpack_require__("../../../../../src/demo/app/demo-buttons/demo-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DemoButtonsModule = /** @class */ (function () {
    function DemoButtonsModule() {
    }
    DemoButtonsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__demo_buttons_component__["a" /* DemoButtonsComponent */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__demo_buttons_component__["a" /* DemoButtonsComponent */]]
        })
    ], DemoButtonsModule);
    return DemoButtonsModule;
}());

//# sourceMappingURL=demo-buttons.module.js.map

/***/ }),

/***/ "../../../../../src/demo/app/demo-cbp-accordion/demo-cbp-accordion.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>CBP Accordion Lite</h1>\n<cbp-accordion>\n    <cbp-accordion-panel [panelTitle]=\"'Goods/Services'\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\n        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea\n        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </cbp-accordion-panel>\n    <cbp-accordion-panel [isExpanded]=\"false\" [panelTitle]=\"'Mark Info'\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\n        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea\n        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </cbp-accordion-panel>\n    <cbp-accordion-panel [isExpanded]=\"false\" [panelTitle]=\"'Owner/Assignment'\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\n        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea\n        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </cbp-accordion-panel>\n</cbp-accordion>"

/***/ }),

/***/ "../../../../../src/demo/app/demo-cbp-accordion/demo-cbp-accordion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/demo-cbp-accordion/demo-cbp-accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoCBPAccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoCBPAccordionComponent = /** @class */ (function () {
    function DemoCBPAccordionComponent() {
    }
    DemoCBPAccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'demo-cbp-accordion',
            template: __webpack_require__("../../../../../src/demo/app/demo-cbp-accordion/demo-cbp-accordion.component.html"),
            styles: [__webpack_require__("../../../../../src/demo/app/demo-cbp-accordion/demo-cbp-accordion.component.scss")]
        })
    ], DemoCBPAccordionComponent);
    return DemoCBPAccordionComponent;
}());

//# sourceMappingURL=demo-cbp-accordion.component.js.map

/***/ }),

/***/ "../../../../../src/demo/app/demo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        children: []
    }
];
var DemoAppRoutingModule = /** @class */ (function () {
    function DemoAppRoutingModule() {
    }
    DemoAppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], DemoAppRoutingModule);
    return DemoAppRoutingModule;
}());

//# sourceMappingURL=demo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/demo/app/demo-typograqphy/demo-typography.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Typography</h1>\n<h1>h1. Main Heading\n    <small>Secondary text</small>\n</h1>\n<h2>h2. Sub Heading\n    <small>Secondary text</small>\n</h2>\n<h3>h3. Sub Sub Heading\n    <small>Secondary text</small>\n</h3>\n<h4>h4. Sub Sub Sub Heading\n    <small>Secondary text</small>\n</h4>\n<h5>h5. Sub Sub Sub Sub Heading\n    <small>Secondary text</small>\n</h5>\n<h6>h6. Sub Sub Sub Sub Sub Heading\n    <small>Secondary text</small>\n</h6>\n"

/***/ }),

/***/ "../../../../../src/demo/app/demo-typograqphy/demo-typography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/demo-typograqphy/demo-typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoTypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoTypographyComponent = /** @class */ (function () {
    function DemoTypographyComponent() {
    }
    DemoTypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'demo-typography',
            template: __webpack_require__("../../../../../src/demo/app/demo-typograqphy/demo-typography.component.html"),
            styles: [__webpack_require__("../../../../../src/demo/app/demo-typograqphy/demo-typography.component.scss")]
        })
    ], DemoTypographyComponent);
    return DemoTypographyComponent;
}());

//# sourceMappingURL=demo-typography.component.js.map

/***/ }),

/***/ "../../../../../src/demo/app/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<!--This is \"THE\" Kitchen Sink Demo -->\n<cbp-root>\n    <cbp-header></cbp-header>\n    <demo-demo-app-header></demo-demo-app-header>\n    <div class=\"app-content\">\n        <demo-typography></demo-typography>\n        <demo-buttons></demo-buttons>\n        <demo-cbp-accordion></demo-cbp-accordion>\n    </div>\n</cbp-root>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/demo/app/demo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n.app-content {\n  padding: 98px 20px 20px 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_services_user_mock_service__ = __webpack_require__("../../../../../src/mock-services/user.mock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_user_user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_applications_cbp_applications_service__ = __webpack_require__("../../../../../src/app/applications/cbp-applications-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mock_services_applications_mock_service__ = __webpack_require__("../../../../../src/mock-services/applications.mock.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DemoAppComponent = /** @class */ (function () {
    function DemoAppComponent() {
    }
    DemoAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'demo-app-root',
            template: __webpack_require__("../../../../../src/demo/app/demo.component.html"),
            styles: [__webpack_require__("../../../../../src/demo/app/demo.component.scss")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__app_user_user__["c" /* CBP_USER_SERVICE */], useClass: __WEBPACK_IMPORTED_MODULE_1__mock_services_user_mock_service__["a" /* MockUserService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_3__app_applications_cbp_applications_service__["d" /* CBP_APPLICATIONS_SERVICE */], useClass: __WEBPACK_IMPORTED_MODULE_4__mock_services_applications_mock_service__["a" /* MockApplicationsService */] }
            ]
        })
    ], DemoAppComponent);
    return DemoAppComponent;
}());

//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ "../../../../../src/demo/app/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_cbp_root___ = __webpack_require__("../../../../../src/app/cbp-root/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_header___ = __webpack_require__("../../../../../src/app/header/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_accordion___ = __webpack_require__("../../../../../src/app/accordion/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_routing_module__ = __webpack_require__("../../../../../src/demo/app/demo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_component__ = __webpack_require__("../../../../../src/demo/app/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mock_services_user_mock_service__ = __webpack_require__("../../../../../src/mock-services/user.mock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demo_cbp_accordion_demo_cbp_accordion_component__ = __webpack_require__("../../../../../src/demo/app/demo-cbp-accordion/demo-cbp-accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demo_typograqphy_demo_typography_component__ = __webpack_require__("../../../../../src/demo/app/demo-typograqphy/demo-typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__demo_buttons_demo_buttons_module__ = __webpack_require__("../../../../../src/demo/app/demo-buttons/demo-buttons.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__demo_app_header_demo_app_header_module__ = __webpack_require__("../../../../../src/demo/app/demo-app-header/demo-app-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var DemoAppModule = /** @class */ (function () {
    function DemoAppModule() {
    }
    DemoAppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__demo_component__["a" /* DemoAppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__demo_cbp_accordion_demo_cbp_accordion_component__["a" /* DemoCBPAccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__demo_typograqphy_demo_typography_component__["a" /* DemoTypographyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__demo_routing_module__["a" /* DemoAppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_cbp_root___["a" /* CBPRootModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_accordion___["a" /* CBPAccordionModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_header___["b" /* CBPHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_header___["a" /* CBPAppHeaderModule */],
                // CBPProgressModule,
                // demo
                __WEBPACK_IMPORTED_MODULE_11__demo_buttons_demo_buttons_module__["a" /* DemoButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_12__demo_app_header_demo_app_header_module__["a" /* DemoAppHeaderModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_11__demo_buttons_demo_buttons_module__["a" /* DemoButtonsModule */], __WEBPACK_IMPORTED_MODULE_12__demo_app_header_demo_app_header_module__["a" /* DemoAppHeaderModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__mock_services_user_mock_service__["a" /* MockUserService */]],
            schemas: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__demo_component__["a" /* DemoAppComponent */]]
        })
    ], DemoAppModule);
    return DemoAppModule;
}());

//# sourceMappingURL=demo.module.js.map

/***/ }),

/***/ "../../../../../src/demo/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_demo_module__ = __webpack_require__("../../../../../src/demo/app/demo.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_demo_module__["a" /* DemoAppModule */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/mock-services/applications.mock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockApplicationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_user_user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_applications_cbp_applications_service__ = __webpack_require__("../../../../../src/app/applications/cbp-applications-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var MockApplicationsService = /** @class */ (function () {
    function MockApplicationsService(userService) {
        this.userService = userService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.loaded = false;
    }
    MockApplicationsService.prototype.getApplicationsData = function () {
        this._load();
        return this.subject;
    };
    MockApplicationsService.prototype.refresh = function () {
        this.loaded = false;
        this._load();
        return null;
    };
    MockApplicationsService.prototype.search = function (token) {
        return null;
    };
    MockApplicationsService.prototype.removeFavoriteApplication = function (favoriteApplication) {
        var data = this.subject.getValue();
        return this._removeAppFromArray(favoriteApplication, data.favorites);
    };
    MockApplicationsService.prototype.removeRecentApplication = function (recentApplication) {
        var data = this.subject.getValue();
        return this._removeAppFromArray(recentApplication, data.recents);
    };
    MockApplicationsService.prototype._removeAppFromArray = function (app, fromArray) {
        var index = fromArray.indexOf(app);
        if (index >= 0) {
            fromArray.splice(index, 1);
        }
        return null;
    };
    MockApplicationsService.prototype._load = function () {
        var _this = this;
        if (!this.loaded) {
            this.loaded = true;
            // simulates fetching some data
            setTimeout(function () {
                _this._getData().subscribe({ next: function (data) {
                        // next() few items then we send other items
                        _this.subject.next(data);
                        // we enhance data from user later
                        _this.userService.getUser().subscribe({ next: function (user) {
                                _this.subject.next(_this._applyUserToApplications(user, data));
                            } });
                    } });
            }, 2000);
        }
    };
    MockApplicationsService.prototype._getData = function () {
        return this._getMockHttpData()
            .map(function (data) {
            data.currentApp = new __WEBPACK_IMPORTED_MODULE_7__app_applications_cbp_applications_service__["a" /* CBPApplication */]('Kitchen Sink v4.0.1.0', null);
            data.lastRetrieved = new Date();
            return data;
        });
    };
    MockApplicationsService.prototype._getMockHttpData = function () {
        var rawList = [];
        var count = 100;
        do {
            rawList.push({ name: "App " + count, description: "Description " + count, href: "http://example.com/app-" + count });
        } while (count-- >= 0);
        var data = new __WEBPACK_IMPORTED_MODULE_7__app_applications_cbp_applications_service__["b" /* CBPApplicationsData */]();
        data.list = rawList;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(data);
    };
    /**
     * Fakeology - it does not even use user object
     * @param {CBPUser} user
     * @param {CBPApplicationsData} data
     * @returns {CBPApplicationsData}
     * @private
     */
    MockApplicationsService.prototype._applyUserToApplications = function (user, data) {
        var applications = data.list;
        if (applications) {
            var random = 0;
            data.recents = [];
            data.favorites = [];
            // randomly assign few a favorites and some as recent
            random = this._randomIndex(0, applications.length / 10);
            data.recents.push(applications[random]);
            random = this._randomIndex(applications.length / 10, 2 * applications.length / 10);
            data.recents.push(applications[random]);
            random = this._randomIndex(2 * applications.length / 10, 3 * applications.length / 10);
            data.favorites.push(applications[random]);
            random = this._randomIndex(3 * applications.length / 10, 4 * applications.length / 10);
            data.favorites.push(applications[random]);
            random = this._randomIndex(4 * applications.length / 10, 5 * applications.length / 10);
            data.favorites.push(applications[random]);
        }
        return data;
    };
    MockApplicationsService.prototype._randomIndex = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    MockApplicationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__app_user_user__["c" /* CBP_USER_SERVICE */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__app_user_user__["b" /* CBPUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_user_user__["b" /* CBPUserService */]) === "function" && _a || Object])
    ], MockApplicationsService);
    return MockApplicationsService;
    var _a;
}());

//# sourceMappingURL=applications.mock.service.js.map

/***/ }),

/***/ "../../../../../src/mock-services/user.mock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_user_user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MockUserService = /** @class */ (function () {
    function MockUserService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"]();
        this.loggedIn = false;
    }
    ;
    MockUserService.prototype.getUser = function () {
        return this.subject;
    };
    MockUserService.prototype.login = function () {
        var _this = this;
        setTimeout(function () {
            _this.loggedIn = true;
            var user = new __WEBPACK_IMPORTED_MODULE_1__app_user_user__["a" /* CBPUser */]();
            user.firstName = 'First';
            user.lastName = 'LastName';
            _this.subject.next(user);
            // this.subject.complete();
        }, 3000);
        return this.subject;
    };
    MockUserService.prototype.logout = function () {
        this.loggedIn = false;
        this.subject.next(null);
        console.log('mock logout');
    };
    MockUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MockUserService);
    return MockUserService;
}());

//# sourceMappingURL=user.mock.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/demo/index.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map