function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div (click)=\"onBackClick()\" class=\"back-icon\">\n    <app-back-icon></app-back-icon>\n</div>\n<span class=\"overlay\"></span>\n<div class=\"container\">\n    <div class=\"side1\">\n        <h1 class=\"skill-header\">ABOUT</h1>\n        <app-dp-logo height=\"13rem\" width=\"13rem\" class=\"dp-logo\"></app-dp-logo>\n        <div class=\"text-container\">\n            <p>\n                Since graduated NSU in 2013 with bachelor's degree in computer science, I have been working as \n                a web developer in several companies.\n\n            </p>\n            <br>\n            <p>\n                I've built a number of web application using various modern techs and methods.\n                I love my job and I always try to learn cutting-edge technologies.\n            </p>\n            <br>\n            <p>\n                Apart from web development, I like IOT & play with Arduino.\n            </p>\n        </div>\n    </div>\n    <div class=\"side2\">\n        <div class=\"skill-container\">\n            <h1 class=\"skill-header\">\n                Skills\n            </h1>\n            <div *ngFor=\"let skill of skills\">\n                <h4 class=\"skill-type\">{{skill.type}}</h4>\n                <h4 class=\"skill-names\">{{skill.names.join(', ')}}</h4>\n            </div>\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div [@routerTransition]=\"triggerAnimation(outlet)\">\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div (click)=\"onBackClick()\" class=\"back-icon\">\n    <app-back-icon></app-back-icon>\n</div>\n\n<div class=\"root\">\n    <div>\n        <h1 class=\"page-header\">CONTACT & PROFILES</h1>\n    </div>\n    <div class=\"container\">\n        <div class=\"part part1\">\n            <div class=\"section min-section\">\n                <a class=\"img icon\" [href]=\"email.url\" target=\"_top\">\n                    <img [title]=\"email.name\" [src]=\"email.iconUrl\" [alt]=\"email.name\">\n                </a>\n                <p>{{email.url.replace('mailto:', '')}}</p>\n            </div>\n            <div class=\"section icons flex-1\">\n                <a *ngFor=\"let workProfile of contactProfile.work\" class=\"img icon\" [href]=\"workProfile.url\"\n                    target=\"_blank\">\n                    <img [title]=\"workProfile.name\" [src]=\"workProfile.iconUrl\" [alt]=\"workProfile.name\">\n                </a>\n            </div>\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/dp-logo/dp-logo.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dp-logo/dp-logo.component.html ***!
    \**************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDpLogoDpLogoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"profile-logo\" [ngStyle]=\"logoStyles\">\n    <img [ngStyle]=\"imgStyle\" src=\"assets/img/me.jpg\" alt=\"my pic\">\n  </div>\n  ";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/expense-entry-list/expense-entry-list.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense-entry-list/expense-entry-list.component.html ***!
    \************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExpenseEntryListExpenseEntryListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\" style=\"padding-top: 20px;\">\n\n            <div class=\"container\" style=\"padding-left: 0px; padding-right: 0px;\">\n                <div class=\"row\">\n                    <div class=\"col-sm\" style=\"text-align: left;\"> {{ title }} </div>\n                    <div class=\"col-sm\" style=\"text-align: right;\"> <button type=\"button\"\n                            class=\"btn btnprimary\">Edit</button> </div>\n                </div>\n            </div>\n            <div class=\"container box\" style=\"margin-top: 10px;\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th>Item</th>\n                            <th>Amount</th>\n                            <th>Category</th>\n                            <th>Location</th>\n                            <th>Spent On</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let entry of expenseEntries\">\n                            <th scope=\"row\">{{ entry.item }}</th>\n                            <th>{{ entry.amount }}</th>\n                            <td>{{ entry.category }}</td>\n                            <td>{{ entry.location }}</td>\n                            <td>{{ entry.spendOn | date: 'short' }}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/expense-entry/expense-entry.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense-entry/expense-entry.component.html ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExpenseEntryExpenseEntryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<!-- Page Content -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\" style=\"padding-top: 20px;\">\n            <div class=\"container\" style=\"padding-left: 0px; padding-right: 0px;\">\n                <div class=\"row\">\n                    <div class=\"col-sm\" style=\"text-align: left;\"> {{ title }} </div>\n                    <div class=\"col-sm\" style=\"text-align: right;\"> <button type=\"button\"\n                            class=\"btn btnprimary\">Edit</button> </div>\n                </div>\n            </div>\n            <div class=\"container box\" style=\"margin-top: 10px;\">\n                <div class=\"row\">\n                    <div class=\"col-2\" style=\"text-align: right;\"> <strong><em>Item:</em></strong> </div>\n                    <div class=\"col\" style=\"text-align: left;\"> {{ expenseEntry.item }} </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-2\" style=\"text-align: right;\"> <strong><em>Amount:</em></strong> </div>\n                    <div class=\"col\" style=\"text-align: left;\">\n\n                        {{ expenseEntry.amount }} </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-2\" style=\"text-align: right;\"> <strong><em>Category:</em></strong> </div>\n                    <div class=\"col\" style=\"text-align: left;\"> {{ expenseEntry.category }} </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-2\" style=\"text-align: right;\"> <strong><em>Location:</em></strong> </div>\n                    <div class=\"col\" style=\"text-align: left;\"> {{ expenseEntry.location }} </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-2\" style=\"text-align: right;\">\n\n                        <strong><em>Spend On:</em></strong>\n                    </div>\n                    <div class=\"col\" style=\"text-align: left;\"> {{ expenseEntry.spendOn }} </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/key-skill-btn/key-skill-btn.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/key-skill-btn/key-skill-btn.component.html ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKeySkillBtnKeySkillBtnComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"key-skills\">\n    <button class=\"key-skill\" *ngFor=\"let keySkill of keySkills\" (click)=\"toogleSkillSelection(keySkill)\"\n        [disabled]=\"disableIfOneBtn(keySkill)\" [ngClass]=\"{'key-skill--disabled':!keySkill.isSelected}\">\n        {{keySkill.displayName}}\n    </button>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingPageLandingPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"overlay\"></div>\n<div class=\"root-container\">\n  <div class=\"navbar\">\n    <div class=\"nav-items\">\n      <a [routerLink]=\"['/portfolio']\" class=\"nav-item\">Portfolio</a>\n      <a [routerLink]=\"['/about']\" class=\"nav-item\">About & Skills</a>\n      <a [routerLink]=\"['/profiles']\" class=\"nav-item\">Profiles</a>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <app-dp-logo class=\"dp-logo\" height=\"20rem\" width=\"20rem\"></app-dp-logo>\n    <h4 class=\"short-bio\">Senior FullStack Developer</h4>\n\n    <q class=\"quote\">I love angular. I built my portfolio as Angluar Standalone, No Dependency!</q>\n    <div class=\"name\">\n      <p>\n        PATRICK CLIFFORD\n      </p>\n      <div class=\"strip\"></div>\n    </div>\n\n    <span (click)=\"onExploreMeClick()\" (mouseover)=\"startTadaAnimation = false\" [ngClass]=\"{'tada-animation':startTadaAnimation}\">\n      <button class=\"special-btn\">\n        <span>\n          Explore Me\n        </span>\n      </button>\n    </span>\n\n    <div class=\"stick\">\n      <div class=\"stick-design\"></div>\n    </div>\n  </div>\n\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/navigator/navigator.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigator/navigator.component.html ***!
    \******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigatorNavigatorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"navigator-container\" appEscCancelation (appEscCancelation)=\"onBgClick()\" (click)=\"onBgClick()\">\n    <div class=\"navLinks\" @slideIn>\n        <div *ngFor=\"let nav of navLinks; let isEven = even\" (click)=\"onNavItemClick($event, nav.url)\"\n            [ngStyle]=\"{transform: isEven ? 'translateX(10%)' : 'translateX(-10%)'}\" class=\"navLink\">\n            <div [ngStyle]=\"{transform: isEven ? 'translateX(-10%)' : 'translateX(10%)'}\">\n                {{nav.displayName}}\n            </div>\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html ***!
    \******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPortfolioPortfolioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"portfolio-bg\">\n    <div class=\"portfolio-container\">\n      <div class=\"portfolio-header\" #portfolioHeader>\n        <app-dp-logo\n          [height]=\"dpLogoStyle.height\"\n          [width]=\"dpLogoStyle.width\"\n          [borderWidth]=\"dpLogoStyle.borderWidth\">\n        </app-dp-logo>\n        <app-typing\n          time=\"2000\"\n          delay=\"1500\"\n          [text]=\"animatedTypingText\">\n        </app-typing>\n      </div>\n      <div class=\"portfolio-area\" #portfolioArea>\n        <div class=\"back-icon\" (click)=\"onBackBtnClick()\">\n          <app-back-icon></app-back-icon>\n        </div>\n        <div class=\"portfolio-selection\" #portfolioSelectionArea [ngClass]=\"{'portfolio-selection__fixed': setFixedPostion }\">\n          <h1>PORTFOLIO</h1>\n          <app-key-skill-btn></app-key-skill-btn>\n        </div>\n        <app-projects></app-projects>\n      </div>\n    </div>\n  </div>\n  ";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/profile-card/profile-card.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-card/profile-card.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileCardProfileCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"card\">\n        <div class=\"strip-block\">\n            <div class=\"profile-logo\">\n                <img src=\"assets/img/me.jpg\" alt=\"\">\n            </div>\n            <div class=\"strip\"></div>\n            <div class=\"short-details\">\n                <h4 class=\"tagLine\">\n                    Senior FullStack Developer\n                </h4>\n                <blockquote class=\"quote\">\n                    \"Nothing great is easy!\"\n                </blockquote>\n            </div>\n        </div>\n\n        <div class=\"details\">\n            <div class=\"nameBlock\">\n                <h1 class=\"round-shape name\">\n                    Patrick Clifford\n                </h1>\n                <div class=\"divider\">\n                    <div class=\"stick stick1\"></div>\n                    <div class=\"stick stick2\"></div>\n                </div>\n            </div>\n            <p class=\"bio\">\n                I love coding, new technologies. I'm mostly interested in Full Stack Web Development.\n                <br> I love to work with Node.js, Java, PHP, Angular & React.\n            </p>\n            <div (mouseover)=\"startTadaAnimation = false\" [ngClass]=\"{'tada-animation':startTadaAnimation}\">\n                <a class=\"round-shape projects-link\" (click)=\"onExploreMeClick()\">\n                    <span>\n                        Explore Me\n                    </span>\n                </a>\n            </div>\n        </div>\n        <div class=\"divider\">\n            <div class=\"stick stick1\"></div>\n            <div class=\"stick stick2\"></div>\n        </div>\n\n        <div class=\"social\">\n            <div class=\"social-icon\">\n                <a href=\"https://www.github.com/ulter-super-dev\" target=\"_blank\">\n                    <img src=\"./assets/icons/github.svg\" alt=\"github icon\">\n                </a>\n            </div>\n            <div class=\"social-icon\">\n                <a href=\"https://www.linkedin.com/in/patrick-clifford-1b052323a/\" target=\"_blank\">\n                    <img src=\"./assets/icons/linkedin.svg\" alt=\"linkedin icon\">\n                </a>\n            </div>\n            <div class=\"social-icon\">\n                <a href=\"patrickclifford0417@gamil.com\">\n                    <img src=\"./assets/icons/email.svg\" alt=\"email icon\">\n                </a>\n            </div>\n        </div>\n\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div @animate>\n    <app-navigator *ngIf=\"showNavigationMenu\" (cancellation)=\"showNavigationMenu = false\"></app-navigator>\n</div>\n<app-landing-page (ExploreMe)=\"showNavigationMenu = true\"></app-landing-page>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/project-card/project-card.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-card/project-card.component.html ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectCardProjectCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"card-outer\" (click)=\"onCardClick(project)\">\n    <div class=\"card card__front\" [ngClass]=\"{'card__featured':project.isFeatured}\">\n        <div class=\"card-container\">\n            <h4 class=\"card-header\">{{project.name | noEmoji}}</h4>\n            <p class=\"card-short-details\">\n                {{project.description}}\n            </p>\n        </div>\n    </div>\n    <div class=\"card card__back\">\n        <div class=\"card-container\">\n            <h4 class=\"card-header\">{{project.name}}</h4>\n            <div class=\"card-short-details\">\n                <div class=\"tech-stuff-details\">\n                    <span>Tech Stuff: </span>\n                    <p>{{project.techStuff.join(' , ') | maxLength:100:true}}</p>\n                </div>\n                <button class=\"full-width-btn\">More Details</button>\n            </div>\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/project-details/project-details.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-details/project-details.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectDetailsProjectDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"project-details-container\" enable-cancellation=\"true\" (appEscCancelation)=\"onCancellation(null, true)\"\n    (click)=\"onCancellation($event)\">\n    <div class=\"project-details\" @slideIn>\n        <div class=\"project-details-header\">\n            <div (click)=\"onCancellation(null, true)\" class=\"cancellation-icon\">\n                <app-cross-icon></app-cross-icon>\n            </div>\n            <h4 class=\"poject-section project-title\">{{project.name}}</h4>\n        </div>\n        <div class=\"project-content\">\n            <p class=\"poject-section project-description\">{{project.description}}</p>\n            <div class=\"poject-section project-links\">\n                <div class=\"project-link\" *ngIf=\"project.projectLink\">\n                    <h4 class=\"project-section__header\">Project Link:</h4>\n                    <a [href]=\"project.projectLink\" target=\"_blank\">{{project.projectLink}}</a>\n                </div>\n                <div class=\"project-link\" *ngIf=\"project.liveUrl\">\n                    <h4 class=\"project-section__header\">Live Url:</h4>\n                    <a [href]=\"project.liveUrl\" target=\"_blank\">{{project.liveUrl}}</a>\n                </div>\n            </div>\n\n            <div *ngIf=\"project.techStuff && project.techStuff.length > 0\" class=\"poject-section project-features\">\n                <h4 class=\"project-section__header\">Tech Stuff: </h4>\n                <ul class=\"project-features-details\">\n                    <li *ngFor=\"let tech of project.techStuff\">{{tech}}</li>\n                </ul>\n            </div>\n\n            <div *ngIf=\"project.features && project.features.length > 0\" class=\"poject-section project-features\">\n                <h4 class=\"project-section__header\">Features: </h4>\n                <ul class=\"project-features-details\">\n                    <li *ngFor=\"let features of project.features\">{{features}}</li>\n                </ul>\n            </div>\n\n            <div *ngIf=\"project.additionalData\">\n                <div *ngFor=\"let ad of project.additionalData\" class=\"poject-section project-features\">\n                    <h4 class=\"project-section__header\">{{ad.title}}: </h4>\n                    <ul class=\"project-features-details\">\n                        <li *ngFor=\"let _data of ad.data\">{{ _data}}</li>\n                    </ul>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"end-section\">\n            :wq!\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div [@slideIn]=\"projects?.length\" (@slideIn.done)=\"renderProjects()\" class=\"project-container\">\n    <app-project-card *ngFor=\"let project of projects\" [project]=\"project\" (select)=\"onProjectCardClick($event)\" class=\"project-card\">\n    </app-project-card>\n  </div>\n  <div [@animateChildren]=\"selectedProject\">\n    <app-project-details [project]=\"selectedProject\" (cancellation)=\"selectedProject = null\" *ngIf=\"selectedProject\"></app-project-details>\n  </div>\n  ";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/typing/typing.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typing/typing.component.html ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTypingTypingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<span class=\"text\">\n    {{displayText}}\n    <span #cursor class=\"cursor cursor__animate\">|</span>\n</span>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/ui/back-icon/back-icon/back-icon.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/back-icon/back-icon/back-icon.component.html ***!
    \*******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiBackIconBackIconBackIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"icon\">\n    <img\n        src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAxIDUxMi4wMDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDEgNTEyLjAwMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4NC44MzQsMTgwLjY5OWMtMC42OTgsMC0zNDguNzMzLDAtMzQ4LjczMywwbDczLjMyNi04Mi4xODdjNC43NTUtNS4zMyw0LjI4OS0xMy41MDUtMS4wNDEtMTguMjYgICAgYy01LjMyOC00Ljc1NC0xMy41MDUtNC4yOS0xOC4yNiwxLjA0MWwtODIuNTgyLDkyLjU2Yy0xMC4wNTksMTEuMjc4LTEwLjA1OCwyOC4yODIsMC4wMDEsMzkuNTU3bDgyLjU4Miw5Mi41NjEgICAgYzIuNTU2LDIuODY1LDYuMDk3LDQuMzIzLDkuNjU0LDQuMzIzYzMuMDY0LDAsNi4xMzktMS4wODMsOC42MDYtMy4yODJjNS4zMy00Ljc1NSw1Ljc5NS0xMi45MywxLjA0MS0xOC4yNmwtNzMuMzI2LTgyLjE4OCAgICBjMCwwLDM0OC4wMzQsMCwzNDguNzMzLDBjNTUuODU4LDAsMTAxLjMsNDUuNDQ0LDEwMS4zLDEwMS4zcy00NS40NDMsMTAxLjMtMTAxLjMsMTAxLjNoLTYxLjU4ICAgIGMtNy4xNDMsMC0xMi45MzMsNS43OTEtMTIuOTMzLDEyLjkzM2MwLDcuMTQyLDUuNzksMTIuOTMzLDEyLjkzMywxMi45MzNoNjEuNThjNzAuMTIsMCwxMjcuMTY2LTU3LjA0NiwxMjcuMTY2LTEyNy4xNjYgICAgQzUxMiwyMzcuNzQ1LDQ1NC45NTQsMTgwLjY5OSwzODQuODM0LDE4MC42OTl6IiBmaWxsPSIjZTc0YzNjIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\" />\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/ui/cross-icon/cross-icon.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/cross-icon/cross-icon.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiCrossIconCrossIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"icon\">\n    <img\n        src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIxLjkgMjEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjEuOSAyMS45IiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiPgogIDxwYXRoIGQ9Ik0xNC4xLDExLjNjLTAuMi0wLjItMC4yLTAuNSwwLTAuN2w3LjUtNy41YzAuMi0wLjIsMC4zLTAuNSwwLjMtMC43cy0wLjEtMC41LTAuMy0wLjdsLTEuNC0xLjRDMjAsMC4xLDE5LjcsMCwxOS41LDAgIGMtMC4zLDAtMC41LDAuMS0wLjcsMC4zbC03LjUsNy41Yy0wLjIsMC4yLTAuNSwwLjItMC43LDBMMy4xLDAuM0MyLjksMC4xLDIuNiwwLDIuNCwwUzEuOSwwLjEsMS43LDAuM0wwLjMsMS43QzAuMSwxLjksMCwyLjIsMCwyLjQgIHMwLjEsMC41LDAuMywwLjdsNy41LDcuNWMwLjIsMC4yLDAuMiwwLjUsMCwwLjdsLTcuNSw3LjVDMC4xLDE5LDAsMTkuMywwLDE5LjVzMC4xLDAuNSwwLjMsMC43bDEuNCwxLjRjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjMgIHMwLjUtMC4xLDAuNy0wLjNsNy41LTcuNWMwLjItMC4yLDAuNS0wLjIsMC43LDBsNy41LDcuNWMwLjIsMC4yLDAuNSwwLjMsMC43LDAuM3MwLjUtMC4xLDAuNy0wLjNsMS40LTEuNGMwLjItMC4yLDAuMy0wLjUsMC4zLTAuNyAgcy0wLjEtMC41LTAuMy0wLjdMMTQuMSwxMS4zeiIgZmlsbD0iI2U3NGMzYyIvPgo8L3N2Zz4K\" />\n</div>";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/app/about/about.component.scss":
  /*!********************************************!*\
    !*** ./src/app/about/about.component.scss ***!
    \********************************************/
  /*! exports provided: default */
  /***/
  function srcAppAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".overlay {\n  display: inline-block;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: -100%;\n  position: fixed;\n  background: #2c3e50;\n  transform: scale(2) skew(-10deg);\n  z-index: -1;\n  transition: 0.3s all ease-in-out;\n}\n@media (max-width: 1040px) {\n  .overlay {\n    transform: scale(2) skew(-55deg);\n  }\n}\n.container {\n  font-size: 1.4rem;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  color: #f8f8f8;\n  padding: 5rem;\n}\n@media (max-width: 1040px) {\n  .container {\n    flex-direction: column;\n  }\n}\n.container .side1 {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media (max-width: 1040px) {\n  .container .side1 {\n    flex: none;\n    height: auto;\n  }\n}\n.container .side1 > h1 {\n  margin-bottom: 0;\n  padding: 3rem 0.8rem 0.2rem;\n}\n.container .side2 {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.text-container {\n  height: auto;\n  max-width: 32rem;\n  background: #e74c3c;\n  padding: 3rem 1.8rem;\n  padding-top: 5.8rem;\n  border-radius: 2rem;\n  min-width: 34rem;\n}\n.dp-logo {\n  font-size: 1.6rem;\n  transform: translate(0, 45%);\n}\n.skill-container {\n  padding: 3rem 1.8rem;\n  margin-left: 5rem;\n}\n@media (max-width: 1040px) {\n  .skill-container {\n    margin: auto;\n  }\n}\n.skill-header {\n  margin: 2rem 0;\n  margin-bottom: 3.8rem;\n  position: relative;\n  letter-spacing: 2px;\n  padding-bottom: 0rem;\n  font-size: 3.2rem;\n  font-family: \"Cormorant Garamond\", serif;\n  justify-content: flex-start;\n}\n.skill-header:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 100%;\n  height: 3px;\n  top: 100%;\n  left: 0;\n  background: #f8f8f8;\n}\n.skill-type {\n  position: relative;\n  margin: 1.2rem 0;\n  padding-bottom: 0.2rem;\n  font-size: 1.6rem;\n}\n.skill-type:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 70%;\n  height: 1.5px;\n  top: 100%;\n  left: 0;\n  background: #f8f8f8;\n}\n.skill-names {\n  margin-left: 2.8rem;\n  margin-bottom: 2rem;\n  margin-top: -0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXHdvcmtzcGFjZVxcbXlfdXBkYXRlZF9wb3J0Zm9saW8vc3JjXFxhcHBcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvRDpcXHdvcmtzcGFjZVxcbXlfdXBkYXRlZF9wb3J0Zm9saW8vc3JjXFxhcHBcXF92YXIuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJDVEs7RURVTCxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBRUhKO0FGS0k7RUFaSjtJQWFRLGdDQUFBO0VFRk47QUFDRjtBRktBO0VBQ0ksaUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQ3JCUTtFRHNCUixhQUFBO0FFSEo7QUZLSTtFQVZKO0lBV1Esc0JBQUE7RUVGTjtBQUNGO0FGSUk7RUFDSSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FFRlI7QUZJUTtFQVBKO0lBUVEsVUFBQTtJQUNBLFlBQUE7RUVEVjtBQUNGO0FGR1E7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0FFRFo7QUZLSTtFQUNJLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUVIUjtBRk9BO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRUpKO0FGT0E7RUFDSSxpQkFBQTtFQUNBLDRCQUFBO0FFSko7QUZPQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUVKSjtBRk1JO0VBSko7SUFLUSxZQUFBO0VFSE47QUFDRjtBRk1BO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0FFSEo7QUZLSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQ2pHSTtBQzhGWjtBRk9BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUVKSjtBRk1JO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUJDbkhJO0FDK0daO0FGUUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUVMSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdmFyJztcclxuJHRleHQtY2FyZC1zaGlmdDogNDUlO1xyXG4kcm93LWNvbG91bS1icmstcG9pbnQ6ICdtYXgtd2lkdGg6IDEwNDBweCc7XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3IyO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKSBza2V3KC0xMGRlZyk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIEBtZWRpYSAoJHJvdy1jb2xvdW0tYnJrLXBvaW50KSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKSBza2V3KC01NWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAvL2hlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgY29sb3I6ICRvZmYtd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA1cmVtO1xyXG5cclxuICAgIEBtZWRpYSAoJHJvdy1jb2xvdW0tYnJrLXBvaW50KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZTEge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBAbWVkaWEgKCRyb3ctY29sb3VtLWJyay1wb2ludCkge1xyXG4gICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmPmgxIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwLjhyZW0gMC4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2lkZTIge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzMnJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNlNzRjM2M7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDEuOHJlbTtcclxuICAgIHBhZGRpbmctdG9wOiA1LjhyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgbWluLXdpZHRoOiAzNHJlbTtcclxufVxyXG5cclxuLmRwLWxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA0NSUpO1xyXG59XHJcblxyXG4uc2tpbGwtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDNyZW0gMS44cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcblxyXG4gICAgQG1lZGlhICgkcm93LWNvbG91bS1icmstcG9pbnQpIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5za2lsbC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzLjhyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDByZW07XHJcbiAgICBmb250LXNpemU6IDMuMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkb2ZmLXdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2tpbGwtdHlwZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDEuMnJlbSAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDEuNXB4O1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRvZmYtd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5za2lsbC1uYW1lcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMi44cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IC0wLjZyZW07XHJcbn0iLCIkYmctY29sb3I6ICMxN2E1OTg7XHJcbiRjb2xvcjE6ICNlNzRjM2M7XHJcbiRjb2xvcjI6ICMyYzNlNTA7XHJcbiRjb2xvcjM6ICNkYjM4MWI7XHJcbiRncmVlbjogIzE3YTU5ODtcclxuJHRleHQtY29sb3I6ICNmZmZmZmY7XHJcbiRibGFjazogIzU1NTtcclxuJG9mZi13aGl0ZTogI2Y4ZjhmODtcclxuJHdoaXRlOiAjZmZmOyIsIi5vdmVybGF5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHRvcDogMDtcbiAgbGVmdDogLTEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogIzJjM2U1MDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKSBza2V3KC0xMGRlZyk7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDQwcHgpIHtcbiAgLm92ZXJsYXkge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMikgc2tldygtNTVkZWcpO1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIHBhZGRpbmc6IDVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5jb250YWluZXIgLnNpZGUxIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNDBweCkge1xuICAuY29udGFpbmVyIC5zaWRlMSB7XG4gICAgZmxleDogbm9uZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbi5jb250YWluZXIgLnNpZGUxID4gaDEge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAzcmVtIDAuOHJlbSAwLjJyZW07XG59XG4uY29udGFpbmVyIC5zaWRlMiB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRleHQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDMycmVtO1xuICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xuICBwYWRkaW5nOiAzcmVtIDEuOHJlbTtcbiAgcGFkZGluZy10b3A6IDUuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgbWluLXdpZHRoOiAzNHJlbTtcbn1cblxuLmRwLWxvZ28ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNDUlKTtcbn1cblxuLnNraWxsLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDNyZW0gMS44cmVtO1xuICBtYXJnaW4tbGVmdDogNXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDQwcHgpIHtcbiAgLnNraWxsLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi5za2lsbC1oZWFkZXIge1xuICBtYXJnaW46IDJyZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogMy44cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IEdhcmFtb25kXCIsIHNlcmlmO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uc2tpbGwtaGVhZGVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNweDtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuXG4uc2tpbGwtdHlwZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxLjJyZW0gMDtcbiAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG4uc2tpbGwtdHlwZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDEuNXB4O1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG5cbi5za2lsbC1uYW1lcyB7XG4gIG1hcmdpbi1sZWZ0OiAyLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIG1hcmdpbi10b3A6IC0wLjZyZW07XG59Il19 */";

    /***/
  },

  /***/"./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/
  /*! exports provided: AboutComponent */
  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_skills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./../services/skills.service */"./src/app/services/skills.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(skillsService, router) {
        _classCallCheck(this, AboutComponent);
        this.skillsService = skillsService;
        this.router = router;
      }
      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.skills = this.skillsService.getSkills();
        }
      }, {
        key: "onBackClick",
        value: function onBackClick() {
          this.router.navigateByUrl('/');
        }
      }]);
      return AboutComponent;
    }();
    AboutComponent.ctorParameters = function () {
      return [{
        type: _services_skills_service__WEBPACK_IMPORTED_MODULE_2__["SkillsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./about.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./about.component.scss */"./src/app/about/about.component.scss"))["default"]]
    })], AboutComponent);

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: appRouting, AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "appRouting", function () {
      return appRouting;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./profile/profile.component */"./src/app/profile/profile.component.ts");
    /* harmony import */
    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./portfolio/portfolio.component */"./src/app/portfolio/portfolio.component.ts");
    /* harmony import */
    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./about/about.component */"./src/app/about/about.component.ts");
    /* harmony import */
    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./contact/contact.component */"./src/app/contact/contact.component.ts");
    /* harmony import */
    var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./profile-card/profile-card.component */"./src/app/profile-card/profile-card.component.ts");
    var APP_ROUTES = [{
      path: '',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
      pathMatch: 'full',
      data: {
        animation: 'landing-page'
      }
    }, {
      path: 'profile-card',
      component: _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_7__["ProfileCardComponent"],
      data: {
        animation: 'profile-card'
      }
    }, {
      path: 'portfolio',
      component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"],
      data: {
        animation: 'portfolio'
      }
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
      data: {
        animation: 'about'
      }
    }, {
      path: 'contact',
      redirectTo: '/profiles'
    }, {
      path: 'profiles',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
      data: {
        animation: 'contact'
      }
    }, {
      path: '**',
      redirectTo: '/'
    }];
    var appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(APP_ROUTES, {
      useHash: true
    });
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(APP_ROUTES, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }
      _createClass(AppComponent, [{
        key: "triggerAnimation",
        value: function triggerAnimation(outlet) {
          return outlet.activatedRouteData.animation || null;
        }
      }]);
      return AppComponent;
    }();
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('routerTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        position: 'fixed',
        width: '100%'
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(100%)',
        opacity: 0
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["sequence"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(0%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.8s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(-100%)',
        opacity: 0
      }))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(100%)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.8s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(0%)',
        opacity: 1
      }))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*, :enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()], {
        optional: true
      })])])])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _expense_entry_expense_entry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./expense-entry/expense-entry.component */"./src/app/expense-entry/expense-entry.component.ts");
    /* harmony import */
    var _expense_entry_list_expense_entry_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./expense-entry-list/expense-entry-list.component */"./src/app/expense-entry-list/expense-entry-list.component.ts");
    /* harmony import */
    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./profile/profile.component */"./src/app/profile/profile.component.ts");
    /* harmony import */
    var _directives_esc_cancelation_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./directives/esc-cancelation.directive */"./src/app/directives/esc-cancelation.directive.ts");
    /* harmony import */
    var _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./navigator/navigator.component */"./src/app/navigator/navigator.component.ts");
    /* harmony import */
    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./landing-page/landing-page.component */"./src/app/landing-page/landing-page.component.ts");
    /* harmony import */
    var _dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./dp-logo/dp-logo.component */"./src/app/dp-logo/dp-logo.component.ts");
    /* harmony import */
    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./portfolio/portfolio.component */"./src/app/portfolio/portfolio.component.ts");
    /* harmony import */
    var _typing_typing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./typing/typing.component */"./src/app/typing/typing.component.ts");
    /* harmony import */
    var _ui_back_icon_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./ui/back-icon/back-icon/back-icon.component */"./src/app/ui/back-icon/back-icon/back-icon.component.ts");
    /* harmony import */
    var _key_skill_btn_key_skill_btn_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./key-skill-btn/key-skill-btn.component */"./src/app/key-skill-btn/key-skill-btn.component.ts");
    /* harmony import */
    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./projects/projects.component */"./src/app/projects/projects.component.ts");
    /* harmony import */
    var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ./project-card/project-card.component */"./src/app/project-card/project-card.component.ts");
    /* harmony import */
    var _pipes_no_emoji_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./pipes/no-emoji.pipe */"./src/app/pipes/no-emoji.pipe.ts");
    /* harmony import */
    var _pipes_max_length_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ./pipes/max-length.pipe */"./src/app/pipes/max-length.pipe.ts");
    /* harmony import */
    var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ./project-details/project-details.component */"./src/app/project-details/project-details.component.ts");
    /* harmony import */
    var _ui_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! ./ui/cross-icon/cross-icon.component */"./src/app/ui/cross-icon/cross-icon.component.ts");
    /* harmony import */
    var _about_about_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! ./about/about.component */"./src/app/about/about.component.ts");
    /* harmony import */
    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! ./contact/contact.component */"./src/app/contact/contact.component.ts");
    /* harmony import */
    var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! ./profile-card/profile-card.component */"./src/app/profile-card/profile-card.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _expense_entry_expense_entry_component__WEBPACK_IMPORTED_MODULE_8__["ExpenseEntryComponent"], _expense_entry_list_expense_entry_list_component__WEBPACK_IMPORTED_MODULE_9__["ExpenseEntryListComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], _directives_esc_cancelation_directive__WEBPACK_IMPORTED_MODULE_11__["EscCancelationDirective"], _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_12__["NavigatorComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_13__["LandingPageComponent"], _dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_14__["DpLogoComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["PortfolioComponent"], _typing_typing_component__WEBPACK_IMPORTED_MODULE_16__["TypingComponent"], _ui_back_icon_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_17__["BackIconComponent"], _key_skill_btn_key_skill_btn_component__WEBPACK_IMPORTED_MODULE_18__["KeySkillBtnComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"], _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_20__["ProjectCardComponent"], _pipes_no_emoji_pipe__WEBPACK_IMPORTED_MODULE_21__["NoEmojiPipe"], _pipes_max_length_pipe__WEBPACK_IMPORTED_MODULE_22__["MaxLengthPipe"], _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_23__["ProjectDetailsComponent"], _ui_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_24__["CrossIconComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_25__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_26__["ContactComponent"], _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_27__["ProfileCardComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"],
        useValue: '!'
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/contact/contact.component.scss":
  /*!************************************************!*\
    !*** ./src/app/contact/contact.component.scss ***!
    \************************************************/
  /*! exports provided: default */
  /***/
  function srcAppContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "a {\n  text-decoration: none;\n  color: #f2f2f2;\n}\n\n.root {\n  min-height: 100vh;\n  min-width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.root > :nth-child(1) {\n  flex: 6;\n  display: flex;\n  align-items: center;\n}\n\n.root > :nth-child(2) {\n  flex: 8;\n}\n\n.page-header {\n  color: #f8f8f8;\n  position: relative;\n  font-size: 3rem;\n  letter-spacing: 1px;\n  word-spacing: 1.5px;\n  margin: 2rem 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-family: \"Cormorant Garamond\", serif;\n}\n\n.page-header:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 100%;\n  height: 2px;\n  top: 100%;\n  left: 0;\n  background: #f8f8f8;\n}\n\n.icon {\n  height: 5rem;\n  width: 5rem;\n  cursor: pointer;\n  transition: 0.3s all ease-in-out;\n  -webkit-animation: fade 1.4s ease-in-out 0.4s 1 both;\n          animation: fade 1.4s ease-in-out 0.4s 1 both;\n}\n\n.icon:hover {\n  transform: scale(1.1);\n}\n\n@media (max-width: 690px) {\n  .icon {\n    height: 3rem;\n    width: 3rem;\n  }\n}\n\n@media (max-width: 350px) {\n  .icon {\n    height: 2rem;\n    width: 2rem;\n  }\n}\n\n.img > img {\n  width: 100%;\n  height: 100%;\n}\n\n.container {\n  width: 95%;\n  max-width: 75rem;\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n\n.icons {\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n.section {\n  background: #2c3e50;\n  display: flex;\n  margin: 2px;\n  justify-content: space-around;\n  align-items: center;\n  padding-top: 2.4rem;\n  padding-bottom: 2.4rem;\n}\n\n.section.min-section {\n  width: 35%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #f8f8f8;\n  font-size: 1.6rem;\n}\n\n@media (max-width: 690px) {\n  .section.min-section {\n    font-size: 1.2rem;\n  }\n}\n\n@media (max-width: 350px) {\n  .section.min-section {\n    font-size: 0.8rem;\n  }\n}\n\n.section.min-section > p {\n  margin: 0px 1rem;\n  width: 90%;\n  text-align: center;\n  word-break: break-word;\n  padding-top: 0.8rem;\n  margin-bottom: -0.8rem;\n}\n\n.part {\n  display: flex;\n  width: 100%;\n}\n\n.flex-1 {\n  flex: 1;\n}\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOlxcd29ya3NwYWNlXFxteV91cGRhdGVkX3BvcnRmb2xpby9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDREo7O0FER0k7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRFI7O0FESUk7RUFDSSxPQUFBO0FDRlI7O0FETUE7RUFDSSxjRXBCUTtFRnFCUixrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7QUNISjs7QURLSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1CRXJDSTtBRGtDWjs7QURPQTtFQUVJLFlBRG1CO0VBRW5CLFdBRm1CO0VBR25CLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9EQUFBO1VBQUEsNENBQUE7QUNMSjs7QURPSTtFQUNJLHFCQUFBO0FDTFI7O0FEUUk7RUFaSjtJQWNRLFlBRG1CO0lBRW5CLFdBRm1CO0VDSnpCO0FBQ0Y7O0FEUUk7RUFsQko7SUFvQlEsWUFEbUI7SUFFbkIsV0FGbUI7RUNKekI7QUFDRjs7QURVSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDUFI7O0FEV0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ1JKOztBRFdBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ1JKOztBRFdBO0VBQ0ksbUJFOUZLO0VGK0ZMLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNSSjs7QURXSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0V4R0k7RUZ5R0osaUJBQUE7QUNUUjs7QURXUTtFQVRKO0lBVVEsaUJBQUE7RUNSVjtBQUNGOztBRFVRO0VBYko7SUFjUSxpQkFBQTtFQ1BWO0FBQ0Y7O0FEU1E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ1BaOztBRFlBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNUSjs7QURZQTtFQUNJLE9BQUE7QUNUSjs7QURZQTtFQUNJO0lBQ0ksVUFBQTtFQ1ROO0VEWUU7SUFDSSxVQUFBO0VDVk47QUFDRjs7QURHQTtFQUNJO0lBQ0ksVUFBQTtFQ1ROO0VEWUU7SUFDSSxVQUFBO0VDVk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3Zhcic7XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4ucm9vdCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAmPjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGZsZXg6IDY7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICY+Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgZmxleDogODtcclxuICAgIH1cclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAkb2ZmLXdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHdvcmQtc3BhY2luZzogMS41cHg7XHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjsgLy8gZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRvZmYtd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgICRtYXgtd2lkdGgtaGVpZ2h0OiA1cmVtO1xyXG4gICAgaGVpZ2h0OiAkbWF4LXdpZHRoLWhlaWdodDtcclxuICAgIHdpZHRoOiAkbWF4LXdpZHRoLWhlaWdodDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlIDEuNHMgZWFzZS1pbi1vdXQgMC40cyAxIGJvdGg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTBweCkge1xyXG4gICAgICAgICRtYXgtd2lkdGgtaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGhlaWdodDogJG1heC13aWR0aC1oZWlnaHQ7XHJcbiAgICAgICAgd2lkdGg6ICRtYXgtd2lkdGgtaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICAgICAgICRtYXgtd2lkdGgtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogJG1heC13aWR0aC1oZWlnaHQ7XHJcbiAgICAgICAgd2lkdGg6ICRtYXgtd2lkdGgtaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW1nIHtcclxuICAgICY+aW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1heC13aWR0aDogNzVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaWNvbnMge1xyXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyLjRyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi40cmVtO1xyXG5cclxuXHJcbiAgICAmLm1pbi1zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGNvbG9yOiAkb2ZmLXdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmPnAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAxcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjhyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0wLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGFydCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mbGV4LTEge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn0iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2YyZjJmMjtcbn1cblxuLnJvb3Qge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm9vdCA+IDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiA2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJvb3QgPiA6bnRoLWNoaWxkKDIpIHtcbiAgZmxleDogODtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB3b3JkLXNwYWNpbmc6IDEuNXB4O1xuICBtYXJnaW46IDJyZW0gMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvcm1vcmFudCBHYXJhbW9uZFwiLCBzZXJpZjtcbn1cbi5wYWdlLWhlYWRlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDVyZW07XG4gIHdpZHRoOiA1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IGZhZGUgMS40cyBlYXNlLWluLW91dCAwLjRzIDEgYm90aDtcbn1cbi5pY29uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY5MHB4KSB7XG4gIC5pY29uIHtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgd2lkdGg6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xuICAuaWNvbiB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICB9XG59XG5cbi5pbWcgPiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWF4LXdpZHRoOiA3NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaWNvbnMge1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzJjM2U1MDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAycHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMi40cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMi40cmVtO1xufVxuLnNlY3Rpb24ubWluLXNlY3Rpb24ge1xuICB3aWR0aDogMzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY5MHB4KSB7XG4gIC5zZWN0aW9uLm1pbi1zZWN0aW9uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIC5zZWN0aW9uLm1pbi1zZWN0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxufVxuLnNlY3Rpb24ubWluLXNlY3Rpb24gPiBwIHtcbiAgbWFyZ2luOiAwcHggMXJlbTtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBwYWRkaW5nLXRvcDogMC44cmVtO1xuICBtYXJnaW4tYm90dG9tOiAtMC44cmVtO1xufVxuXG4ucGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleC0xIHtcbiAgZmxleDogMTtcbn1cblxuQGtleWZyYW1lcyBmYWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIiRiZy1jb2xvcjogIzE3YTU5ODtcclxuJGNvbG9yMTogI2U3NGMzYztcclxuJGNvbG9yMjogIzJjM2U1MDtcclxuJGNvbG9yMzogI2RiMzgxYjtcclxuJGdyZWVuOiAjMTdhNTk4O1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJsYWNrOiAjNTU1O1xyXG4kb2ZmLXdoaXRlOiAjZjhmOGY4O1xyXG4kd2hpdGU6ICNmZmY7Il19 */";

    /***/
  },

  /***/"./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/
  /*! exports provided: ContactComponent */
  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(router) {
        _classCallCheck(this, ContactComponent);
        this.router = router;
        this.contactProfile = {
          profile: [{
            name: 'Facebook',
            url: 'https://facebook.com/deyRitwick',
            iconUrl: './assets/icons/facebook.svg'
          }, {
            name: 'Twitter',
            url: 'https://twitter.com/dey_ritwick',
            iconUrl: './assets/icons/twitter.svg'
          }, {
            name: 'Instagram',
            url: 'https://www.instagram.com/ritwickdey/',
            iconUrl: './assets/icons/instagram.svg'
          }, {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/ritwickdey',
            iconUrl: './assets/icons/linkedin.svg'
          }],
          work: [{
            name: 'GitHub',
            url: 'https://github.com/ulter-super-dev',
            iconUrl: './assets/icons/github.svg'
          }, {
            name: 'Hackerrank',
            url: 'https://hackerrank.com/patrick',
            iconUrl: './assets/icons/hackerrank.svg'
          }, {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/patrick-clifford-1b052323a/',
            iconUrl: './assets/icons/linkedin.svg'
          }]
        };
        this.email = {
          name: 'Email',
          url: 'patrickclifford0417@gmail.com',
          iconUrl: './assets/icons/email.svg'
        };
        this.vscodeMarketplace = {
          name: 'VSCode Extension Publisher',
          url: 'https://marketplace.visualstudio.com/publishers/ritwickdey',
          iconUrl: './assets/icons/vscode.svg'
        };
      }
      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onBackClick",
        value: function onBackClick() {
          this.router.navigateByUrl('/');
        }
      }]);
      return ContactComponent;
    }();
    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./contact.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./contact.component.scss */"./src/app/contact/contact.component.scss"))["default"]]
    })], ContactComponent);

    /***/
  },

  /***/"./src/app/directives/esc-cancelation.directive.ts":
  /*!*********************************************************!*\
    !*** ./src/app/directives/esc-cancelation.directive.ts ***!
    \*********************************************************/
  /*! exports provided: EscCancelationDirective */
  /***/
  function srcAppDirectivesEscCancelationDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EscCancelationDirective", function () {
      return EscCancelationDirective;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var EscCancelationDirective = /*#__PURE__*/function () {
      function EscCancelationDirective() {
        _classCallCheck(this, EscCancelationDirective);
        this.appEscCancelation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      _createClass(EscCancelationDirective, [{
        key: "onKeydownHandler",
        value: function onKeydownHandler(event) {
          if (event.key === 'Escape') this.appEscCancelation.emit({
            msg: 'Escape Btn Clicked',
            event: event
          });
        }
      }]);
      return EscCancelationDirective;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('appEscCancelation')], EscCancelationDirective.prototype, "appEscCancelation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])], EscCancelationDirective.prototype, "onKeydownHandler", null);
    EscCancelationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appEscCancelation]'
    })], EscCancelationDirective);

    /***/
  },

  /***/"./src/app/dp-logo/dp-logo.component.scss":
  /*!************************************************!*\
    !*** ./src/app/dp-logo/dp-logo.component.scss ***!
    \************************************************/
  /*! exports provided: default */
  /***/
  function srcAppDpLogoDpLogoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".profile-logo {\n  height: 14rem;\n  width: 14rem;\n  display: inline-block;\n  position: relative;\n  z-index: 5;\n  border-radius: 50%;\n  perspective: 1500px;\n  transition: all 0.2s ease-in-out;\n  -webkit-animation: dropin 1s ease-in-out 0.4s 1 normal both;\n          animation: dropin 1s ease-in-out 0.4s 1 normal both;\n}\n.profile-logo img {\n  position: relative;\n  border: 0.8rem solid #e74c3c;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all 0.5s ease-in-out;\n  perspective: 1500px;\n}\n.profile-logo::after {\n  content: \"Patrick\";\n  display: flex;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  color: #fff;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: #e74c3c;\n  border: 0.8rem solid #db381b;\n  top: 0px;\n  left: 0px;\n  z-index: 10;\n  font-size: 0.8em;\n  transition: all 0.5s ease-in-out;\n  transform: rotateY(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1500px;\n}\n.profile-logo:hover img {\n  transform: rotateY(180deg);\n}\n.profile-logo:hover::after {\n  transform: rotateY(0deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHAtbG9nby9EOlxcd29ya3NwYWNlXFxteV91cGRhdGVkX3BvcnRmb2xpby9zcmNcXGFwcFxcZHAtbG9nb1xcZHAtbG9nby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZHAtbG9nby9kcC1sb2dvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kcC1sb2dvL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUVBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBQ0ZGO0FER0U7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDREo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJFaENLO0VGaUNMLDRCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FDREo7QURJSTtFQUNFLDBCQUFBO0FDRk47QURLRTtFQUNFLHdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9kcC1sb2dvL2RwLWxvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi92YXInO1xyXG5cclxuLnByb2ZpbGUtbG9nbyB7XHJcbiAgaGVpZ2h0OiAxNHJlbTtcclxuICB3aWR0aDogMTRyZW07XHJcbiAgLy8gbWFyZ2luLXRvcDogNnJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBlcnNwZWN0aXZlOiAxNTAwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMC40cyAxIG5vcm1hbCBib3RoO1xyXG4gIGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDAuOHJlbSBzb2xpZCAkY29sb3IxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XHJcbiAgfVxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdQYXRyaWNrJztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgIGJvcmRlcjogMC44cmVtIHNvbGlkICRjb2xvcjM7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsIi5wcm9maWxlLWxvZ28ge1xuICBoZWlnaHQ6IDE0cmVtO1xuICB3aWR0aDogMTRyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjRzIDEgbm9ybWFsIGJvdGg7XG59XG4ucHJvZmlsZS1sb2dvIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAwLjhyZW0gc29saWQgI2U3NGMzYztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xufVxuLnByb2ZpbGUtbG9nbzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlBhdHJpY2tcIjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgYm9yZGVyOiAwLjhyZW0gc29saWQgI2RiMzgxYjtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xufVxuLnByb2ZpbGUtbG9nbzpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5wcm9maWxlLWxvZ286aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xufSIsIiRiZy1jb2xvcjogIzE3YTU5ODtcclxuJGNvbG9yMTogI2U3NGMzYztcclxuJGNvbG9yMjogIzJjM2U1MDtcclxuJGNvbG9yMzogI2RiMzgxYjtcclxuJGdyZWVuOiAjMTdhNTk4O1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJsYWNrOiAjNTU1O1xyXG4kb2ZmLXdoaXRlOiAjZjhmOGY4O1xyXG4kd2hpdGU6ICNmZmY7Il19 */";

    /***/
  },

  /***/"./src/app/dp-logo/dp-logo.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/dp-logo/dp-logo.component.ts ***!
    \**********************************************/
  /*! exports provided: DpLogoComponent */
  /***/
  function srcAppDpLogoDpLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DpLogoComponent", function () {
      return DpLogoComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var DpLogoComponent = /*#__PURE__*/function () {
      function DpLogoComponent() {
        _classCallCheck(this, DpLogoComponent);
      }
      _createClass(DpLogoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.logoStyles = {
            height: this.height,
            width: this.width
          };
          this.imgStyle = {
            borderWidth: this.borderWidth
          };
          // console.log(this.height);
          // console.log(this.width);
          // console.log(this.borderWidth);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.ngOnInit();
        }
      }]);
      return DpLogoComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('height')], DpLogoComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('width')], DpLogoComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('borderWidth')], DpLogoComponent.prototype, "borderWidth", void 0);
    DpLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dp-logo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./dp-logo.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/dp-logo/dp-logo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./dp-logo.component.scss */"./src/app/dp-logo/dp-logo.component.scss"))["default"]]
    })], DpLogoComponent);

    /***/
  },

  /***/"./src/app/expense-entry-list/expense-entry-list.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/expense-entry-list/expense-entry-list.component.scss ***!
    \**********************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppExpenseEntryListExpenseEntryListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2UtZW50cnktbGlzdC9leHBlbnNlLWVudHJ5LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  },

  /***/"./src/app/expense-entry-list/expense-entry-list.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/expense-entry-list/expense-entry-list.component.ts ***!
    \********************************************************************/
  /*! exports provided: ExpenseEntryListComponent */
  /***/
  function srcAppExpenseEntryListExpenseEntryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ExpenseEntryListComponent", function () {
      return ExpenseEntryListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ExpenseEntryListComponent = /*#__PURE__*/function () {
      function ExpenseEntryListComponent() {
        _classCallCheck(this, ExpenseEntryListComponent);
      }
      _createClass(ExpenseEntryListComponent, [{
        key: "getExpenseEntries",
        value: function getExpenseEntries() {
          var mockExpenseEntries = [{
            id: 1,
            item: "Pizza",
            amount: Math.floor(Math.random() * 10 + 1),
            category: "Food",
            location: "Mcdonald",
            spendOn: new Date(2020, 4, Math.floor(Math.random() * 30 + 1), 10, 10, 10),
            createdOn: new Date(2020, 4, Math.floor(Math.random() * 30 + 1), 10, 10, 10)
          }, {
            id: 1,
            item: "Pizza",
            amount: Math.floor(Math.random() * 10 + 1),
            category: "Food",
            location: "KFC",
            spendOn: new Date(2020, 4, Math.floor(Math.random() * 30 + 1), 10, 10, 10),
            createdOn: new Date(2020, 4, Math.floor(Math.random() * 30 + 1), 10, 10, 10)
          }, {
            id: 1,
            item: "Pizza",
            amount: Math.floor(Math.random() * 10 + 1),
            category: "Food",
            location: "Mcdonald",
            spendOn: new Date(2020, 4, Math.floor(Math.random() * 30 + 1), 10, 10, 10),
            createdOn: new Date(2020, 4, Math.floor(Math.random() * 30 + 1), 10, 10, 10)
          }, {
            id: 1,
            item: "Pizza",
            amount: Math.floor(Math.random() * 10 + 1),
            category: "Food",
            location: "KFC",
            spendOn: new Date(2020, 4, Math.floor(Math.random() * 30 + 1), 10, 10, 10),
            createdOn: new Date(2020, 4, Math.floor(Math.random() * 30 + 1), 10, 10, 10)
          }, {
            id: 1,
            item: "Pizza",
            amount: Math.floor(Math.random() * 10 + 1),
            category: "Food",
            location: "KFC",
            spendOn: new Date(2020, 4, Math.floor(Math.random() * 30 + 1), 10, 10, 10),
            createdOn: new Date(2020, 4, Math.floor(Math.random() * 30 + 1), 10, 10, 10)
          }];
          return mockExpenseEntries;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.title = "Expense Entry List";
          this.expenseEntries = this.getExpenseEntries();
        }
      }]);
      return ExpenseEntryListComponent;
    }();
    ExpenseEntryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expense-entry-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./expense-entry-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/expense-entry-list/expense-entry-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./expense-entry-list.component.scss */"./src/app/expense-entry-list/expense-entry-list.component.scss"))["default"]]
    })], ExpenseEntryListComponent);

    /***/
  },

  /***/"./src/app/expense-entry/expense-entry.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/expense-entry/expense-entry.component.scss ***!
    \************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppExpenseEntryExpenseEntryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2UtZW50cnkvZXhwZW5zZS1lbnRyeS5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/expense-entry/expense-entry.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/expense-entry/expense-entry.component.ts ***!
    \**********************************************************/
  /*! exports provided: ExpenseEntryComponent */
  /***/
  function srcAppExpenseEntryExpenseEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ExpenseEntryComponent", function () {
      return ExpenseEntryComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ExpenseEntryComponent = /*#__PURE__*/function () {
      function ExpenseEntryComponent() {
        _classCallCheck(this, ExpenseEntryComponent);
      }
      _createClass(ExpenseEntryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.title = "Expense Entry";
          this.expenseEntry = {
            id: 1,
            item: "Pizza",
            amount: 21,
            category: "Food",
            location: "Zomato",
            spendOn: new Date(2020, 6, 1, 10, 10, 10),
            createdOn: new Date(2020, 6, 1, 10, 10, 10)
          };
        }
      }]);
      return ExpenseEntryComponent;
    }();
    ExpenseEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expense-entry',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./expense-entry.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/expense-entry/expense-entry.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./expense-entry.component.scss */"./src/app/expense-entry/expense-entry.component.scss"))["default"]]
    })], ExpenseEntryComponent);

    /***/
  },

  /***/"./src/app/key-skill-btn/key-skill-btn.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/key-skill-btn/key-skill-btn.component.scss ***!
    \************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppKeySkillBtnKeySkillBtnComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".key-skills {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 1rem auto;\n}\n.key-skills .key-skill {\n  z-index: 99;\n  position: relative;\n  font-size: 1.6rem;\n  margin: 0.6rem;\n  padding: 0.4rem 2rem;\n  border: 2px solid #db381b;\n  border-radius: 50rem;\n  cursor: pointer;\n  color: #fff;\n  line-height: 1.5;\n  background-color: #db381b;\n  transition: all 0.3s ease-in-out;\n  outline: none;\n  box-shadow: 0.4rem 0.5rem 0.9rem rgba(0, 0, 0, 0.25);\n}\n.key-skills .key-skill:disabled {\n  background-color: #e85a41;\n  border: 2px solid #e85a41;\n  box-shadow: none;\n}\n.key-skills .key-skill:hover:disabled {\n  margin: 0.6rem;\n  padding: 0.4rem 2rem;\n  cursor: not-allowed;\n}\n.key-skills .key-skill:hover {\n  padding: 0.4rem 3.2rem;\n  margin: 0.6rem 2rem;\n}\n@media screen and (max-width: 640px) {\n  .key-skills .key-skill:hover {\n    margin: 0.6rem;\n    padding: 0.4rem 2rem;\n  }\n}\n.key-skills .key-skill.key-skill--disabled {\n  border: 2px solid #db381b;\n  background-color: transparent;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n}\n.key-skills .key-skill.key-skill--disabled:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #db381b;\n  top: 50%;\n  left: 0;\n  transform: rotateZ(-14deg);\n  transition: all 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2V5LXNraWxsLWJ0bi9EOlxcd29ya3NwYWNlXFxteV91cGRhdGVkX3BvcnRmb2xpby9zcmNcXGFwcFxca2V5LXNraWxsLWJ0blxca2V5LXNraWxsLWJ0bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2V5LXNraWxsLWJ0bi9rZXktc2tpbGwtYnRuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9rZXktc2tpbGwtYnRuL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNESjtBRE1JO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQVBlO0VBUWYsb0JBUGdCO0VBUWhCLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJFbkJDO0VGb0JELGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO0FDSlI7QURNUTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0paO0FET1E7RUFDSSxjQTFCVztFQTJCWCxvQkExQlk7RUEyQlosbUJBQUE7QUNMWjtBRFNRO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBQ1BaO0FEU1k7RUFKSjtJQUtRLGNBckNPO0lBc0NQLG9CQXJDUTtFQytCdEI7QUFDRjtBRFNRO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNQWjtBRFVRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJFNURIO0VGNkRHLFFBQUE7RUFDQSxPQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQ1JaIiwiZmlsZSI6InNyYy9hcHAva2V5LXNraWxsLWJ0bi9rZXktc2tpbGwtYnRuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdmFyJztcclxuXHJcbi5rZXktc2tpbGxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG5cclxuICAgICRrZXlfc2tpbGxfbWFyZ2luOiAwLjZyZW07XHJcbiAgICAka2V5X3NraWxsX3BhZGRpbmc6IDAuNHJlbSAycmVtO1xyXG5cclxuICAgIC5rZXktc2tpbGwge1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICBtYXJnaW46ICRrZXlfc2tpbGxfbWFyZ2luO1xyXG4gICAgICAgIHBhZGRpbmc6ICRrZXlfc2tpbGxfcGFkZGluZztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3IzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwLjRyZW0gMC41cmVtIDAuOXJlbSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3IzLCAkYW1vdW50OiAxMCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0ZW4oJGNvbG9yMywgJGFtb3VudDogMTApO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlcjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJGtleV9za2lsbF9tYXJnaW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICRrZXlfc2tpbGxfcGFkZGluZztcclxuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICQua2V5LXNraWxsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbSAzLjJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC42cmVtIDJyZW07XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAka2V5X3NraWxsX21hcmdpbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICRrZXlfc2tpbGxfcGFkZGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5rZXktc2tpbGwtLWRpc2FibGVkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yMztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5rZXktc2tpbGwtLWRpc2FibGVkOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMztcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtMTRkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgLy8gYW5pbWF0aW9uOiBzbGlkZUluIDAuNnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xyXG4vLyAgIDAlIHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4vLyAgICAgb3BhY2l0eTogMDtcclxuLy8gICB9XHJcbi8vICAgMTAwJSB7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSk7XHJcbi8vICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gQGtleWZyYW1lcyBzbGlkZU91dHtcclxuLy8gICAwJSB7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSk7XHJcbi8vICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgIH1cclxuLy8gICAxMDAlIHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSk7XHJcbi8vICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgIH1cclxuLy8gfSIsIi5rZXktc2tpbGxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG4ua2V5LXNraWxscyAua2V5LXNraWxsIHtcbiAgei1pbmRleDogOTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG1hcmdpbjogMC42cmVtO1xuICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2RiMzgxYjtcbiAgYm9yZGVyLXJhZGl1czogNTByZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjM4MWI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwLjRyZW0gMC41cmVtIDAuOXJlbSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLmtleS1za2lsbHMgLmtleS1za2lsbDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODVhNDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlODVhNDE7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ua2V5LXNraWxscyAua2V5LXNraWxsOmhvdmVyOmRpc2FibGVkIHtcbiAgbWFyZ2luOiAwLjZyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAycmVtO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmtleS1za2lsbHMgLmtleS1za2lsbDpob3ZlciB7XG4gIHBhZGRpbmc6IDAuNHJlbSAzLjJyZW07XG4gIG1hcmdpbjogMC42cmVtIDJyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAua2V5LXNraWxscyAua2V5LXNraWxsOmhvdmVyIHtcbiAgICBtYXJnaW46IDAuNnJlbTtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcbiAgfVxufVxuLmtleS1za2lsbHMgLmtleS1za2lsbC5rZXktc2tpbGwtLWRpc2FibGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2RiMzgxYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmtleS1za2lsbHMgLmtleS1za2lsbC5rZXktc2tpbGwtLWRpc2FibGVkOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIzODFiO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKC0xNGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufSIsIiRiZy1jb2xvcjogIzE3YTU5ODtcclxuJGNvbG9yMTogI2U3NGMzYztcclxuJGNvbG9yMjogIzJjM2U1MDtcclxuJGNvbG9yMzogI2RiMzgxYjtcclxuJGdyZWVuOiAjMTdhNTk4O1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJsYWNrOiAjNTU1O1xyXG4kb2ZmLXdoaXRlOiAjZjhmOGY4O1xyXG4kd2hpdGU6ICNmZmY7Il19 */";

    /***/
  },

  /***/"./src/app/key-skill-btn/key-skill-btn.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/key-skill-btn/key-skill-btn.component.ts ***!
    \**********************************************************/
  /*! exports provided: KeySkillBtnComponent */
  /***/
  function srcAppKeySkillBtnKeySkillBtnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "KeySkillBtnComponent", function () {
      return KeySkillBtnComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _services_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./../services/tags.service */"./src/app/services/tags.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var KeySkillBtnComponent = /*#__PURE__*/function () {
      function KeySkillBtnComponent(tagsService) {
        _classCallCheck(this, KeySkillBtnComponent);
        this.tagsService = tagsService;
        this.keySkills = tagsService.tags;
      }
      _createClass(KeySkillBtnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toogleSkillSelection",
        value: function toogleSkillSelection(tag) {
          this.tagsService.toggleSelection(tag.displayName);
        }
      }, {
        key: "disableIfOneBtn",
        value: function disableIfOneBtn(keySkill) {
          var targetKeySkills = this.keySkills.filter(function (e) {
            return e.isSelected;
          });
          return targetKeySkills.length === 1 && targetKeySkills[0].displayName === keySkill.displayName;
        }
      }]);
      return KeySkillBtnComponent;
    }();
    KeySkillBtnComponent.ctorParameters = function () {
      return [{
        type: _services_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"]
      }];
    };
    KeySkillBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-key-skill-btn',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./key-skill-btn.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/key-skill-btn/key-skill-btn.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./key-skill-btn.component.scss */"./src/app/key-skill-btn/key-skill-btn.component.scss"))["default"]]
    })], KeySkillBtnComponent);

    /***/
  },

  /***/"./src/app/landing-page/landing-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.scss ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppLandingPageLandingPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.root-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n}\n.overlay {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background: #2c3e50;\n  position: fixed;\n  right: 0;\n  top: 0;\n  pointer-events: none;\n  -webkit-clip-path: ellipse(50vw 40vh at 50% 50%);\n          clip-path: ellipse(50vw 40vh at 50% 50%);\n  transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n  -webkit-animation: 1s ease-in-out 0.2s both leftToRight;\n          animation: 1s ease-in-out 0.2s both leftToRight;\n}\n.dp-logo {\n  font-size: 2rem;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn;\n}\n.navbar {\n  width: 100%;\n  color: #f8f8f8;\n  font-size: 2rem;\n  padding: 1.6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nav-items .nav-item {\n  display: inline-block;\n  padding: 0.2rem 0;\n  margin: 0.6rem 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  border-bottom: 0.3rem solid #17a598;\n  color: #f8f8f8;\n  text-decoration: none;\n}\n.container {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 1.6rem;\n  color: #f8f8f8;\n  margin-top: 2%;\n}\n.short-bio {\n  font-size: 1.6rem;\n  padding: 1.6rem;\n  font-weight: normal;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn;\n}\n.quote {\n  font-family: \"Cormorant Garamond\", serif;\n  font-size: 1.8rem;\n  padding: 1rem;\n  padding-top: 0rem;\n  -webkit-animation: 1s ease-in-out 0.4s both fadeIn;\n          animation: 1s ease-in-out 0.4s both fadeIn;\n}\n.name {\n  font-family: \"Cormorant Garamond\", serif;\n  font-size: 2.4rem;\n  font-weight: bold;\n  line-height: 1.6;\n  padding-top: 0.6rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  word-spacing: 0.2rem;\n  text-align: center;\n  margin-bottom: -2.5rem;\n  -webkit-animation: 1s ease-in-out 0.6s both fadeIn;\n          animation: 1s ease-in-out 0.6s both fadeIn;\n}\n.name:hover .strip::after {\n  left: -1rem;\n}\n.name:hover .strip::before {\n  left: 1rem;\n}\n.strip {\n  display: inline-block;\n  position: relative;\n  width: 28rem;\n  margin: auto;\n  margin-bottom: 2rem;\n  -webkit-animation: 1s ease-in-out 0.8s both fadeIn;\n          animation: 1s ease-in-out 0.8s both fadeIn;\n}\n.strip::before {\n  transition: 0.3s all ease-in-out;\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  height: 2px;\n  background-color: #e74c3c;\n  margin: 2px 0;\n  width: 100%;\n  margin: auto;\n  top: 0;\n  left: -1rem;\n}\n.strip::after {\n  transition: 0.3s all ease-in-out;\n  position: absolute;\n  display: inline-block;\n  content: \"\";\n  height: 2px;\n  background-color: #e74c3c;\n  margin: 2px 0;\n  width: 100%;\n  margin: auto;\n  top: 4px;\n  left: 1rem;\n}\n.special-btn {\n  min-width: 15rem;\n  line-height: 2.2;\n  font-size: 1.4rem;\n  padding: 0.5rem;\n  margin-top: 2rem;\n  background-color: #e74c3c;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 100rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  -webkit-animation: fadeIn 1s ease-in-out 1s both;\n          animation: fadeIn 1s ease-in-out 1s both;\n  box-shadow: 7px 5px 8px 0 rgba(0, 0, 0, 0.31);\n  position: relative;\n}\n.special-btn span {\n  position: relative;\n  transform: translateX(0.7rem);\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n.special-btn:hover {\n  background-color: #db381b;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.special-btn:hover::after {\n  transform: translateX(0.2rem);\n  opacity: 1;\n}\n.special-btn:hover span {\n  transform: translateX(-0.2rem);\n}\n.special-btn:active {\n  transform: scale(0.8);\n  box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.31);\n}\n.special-btn::after {\n  content: \"»\";\n  position: relative;\n  opacity: 0;\n  vertical-align: sub;\n  font-size: 2.7rem;\n  line-height: 0;\n  transform: translateX(25px);\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n.stick {\n  flex: 1;\n  margin-top: -1rem;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  z-index: -1;\n  -webkit-animation: 1s ease-in-out 1s both fadeIn;\n          animation: 1s ease-in-out 1s both fadeIn;\n}\n.stick::after {\n  content: \"\";\n  height: 200vh;\n  width: 1.6rem;\n  display: inline-block;\n  position: absolute;\n  background-color: #e74c3c;\n  left: 50%;\n  top: 0;\n  z-index: 5;\n  transform: translate(-50%);\n  box-shadow: 7px 5px 8px 0 rgba(0, 0, 0, 0.31);\n}\n.stick .stick-design {\n  background-color: #e74c3c;\n  padding: 1.4rem;\n  position: absolute;\n  left: 50%;\n  min-width: 8.5rem;\n  top: 3.5rem;\n  border-radius: 100rem;\n  transform: translate(-50%);\n  z-index: 6;\n  box-shadow: 13px 0px 20px 0 rgba(0, 0, 0, 0.2);\n  transition: 1s all ease-in-out;\n}\n.stick .stick-design::after {\n  content: \"\";\n  height: 0.8rem;\n  width: 0.8rem;\n  position: absolute;\n  border-radius: 50%;\n  background-color: #2c3e50;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 2rem 0px 0px #2c3e50, -2rem 0px 0px #2c3e50;\n}\n.tada-animation {\n  -webkit-animation: tada 1s ease-in-out 0s 2 normal both;\n          animation: tada 1s ease-in-out 0s 2 normal both;\n}\n@-webkit-keyframes leftToRight {\n  0% {\n    display: relative;\n    opacity: 0.1;\n    left: -20%;\n  }\n  100% {\n    display: relative;\n    opacity: 1;\n    left: 0%;\n  }\n}\n@keyframes leftToRight {\n  0% {\n    display: relative;\n    opacity: 0.1;\n    left: -20%;\n  }\n  100% {\n    display: relative;\n    opacity: 1;\n    left: 0%;\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes tada {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  10% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  20% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  30% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  40% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  50% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  60% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  70% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  80% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  90% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n  }\n}\n@keyframes tada {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  10% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  20% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  30% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  40% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  50% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  60% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  70% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  80% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  90% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n  }\n}\n@-webkit-keyframes stripAnimation {\n  0% {\n    transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1;\n  }\n}\n@keyframes stripAnimation {\n  0% {\n    transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy1wYWdlL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxsYW5kaW5nLXBhZ2VcXGxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy1wYWdlL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURBRjtBQ0dBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJDYk87RURjUCxlQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO1VBQUEsd0NBQUE7RUFDQSx5REFBQTtFQUNBLHVEQUFBO1VBQUEsK0NBQUE7QURBRjtBQ0dBO0VBQ0UsZUFBQTtFQUNBLGtEQUFBO1VBQUEsMENBQUE7QURBRjtBQ0dBO0VBQ0UsV0FBQTtFQUNBLGNDekJVO0VEMEJWLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURBRjtBQ0lFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQ3pDUTtFRDBDUixxQkFBQTtBRERKO0FDS0E7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNDdERVO0VEdURWLGNBQUE7QURGRjtBQ0tBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtVQUFBLDBDQUFBO0FERkY7QUNLQTtFQUNFLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrREFBQTtVQUFBLDBDQUFBO0FERkY7QUNLQTtFQUNFLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7VUFBQSwwQ0FBQTtBREZGO0FDSUk7RUFDRSxXQUFBO0FERk47QUNJSTtFQUNFLFVBQUE7QURGTjtBQ09BO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtVQUFBLDBDQUFBO0FESkY7QUNLRTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBREhKO0FDS0U7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QURISjtBQ09BO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJDOUlPO0VEK0lQLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7QURKRjtBQ0tFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QURISjtBQ0tFO0VBQ0UseUJDN0pLO0VEOEpMLG9DQUFBO1VBQUEsNEJBQUE7QURISjtBQ0lJO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FERk47QUNJSTtFQUNFLDhCQUFBO0FERk47QUNLRTtFQUNFLHFCQUFBO0VBQ0EsK0NBQUE7QURISjtBQ0tFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FESEo7QUNPQTtFQUNFLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO1VBQUEsd0NBQUE7QURKRjtBQ0tFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ3hNSztFRHlNTCxTQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDZDQUFBO0FESEo7QUNLRTtFQUNFLHlCQ2hOSztFRGlOTCxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0FESEo7QUNJSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNoT0c7RURpT0gsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVEQUFBO0FERk47QUNPQTtFQUNFLHVEQUFBO1VBQUEsK0NBQUE7QURKRjtBQ09BO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VESkY7RUNNQTtJQUNFLGlCQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7RURKRjtBQUNGO0FDTkE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RURKRjtFQ01BO0lBQ0UsaUJBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtFREpGO0FBQ0Y7QUNPQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VETEY7RUNPQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFRExGO0FBQ0Y7QUNIQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VETEY7RUNPQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFRExGO0FBQ0Y7QUNRQTtFQUNFO0lBQ0UsZ0NBQUE7RURORjtFQ1FBO0lBQ0UsbUNBQUE7RURORjtFQ1FBO0lBQ0Usa0NBQUE7RURORjtFQ1FBO0lBQ0UsbUNBQUE7RURORjtFQ1FBO0lBQ0Usa0NBQUE7RURORjtFQ1FBO0lBQ0UsbUNBQUE7RURORjtFQ1FBO0lBQ0Usa0NBQUE7RURORjtFQ1FBO0lBQ0UsbUNBQUE7RURORjtFQ1FBO0lBQ0Usa0NBQUE7RURORjtFQ1FBO0lBQ0UsbUNBQUE7RURORjtFQ1FBO0lBQ0UsZ0NBQUE7RURORjtBQUNGO0FDM0JBO0VBQ0U7SUFDRSxnQ0FBQTtFRE5GO0VDUUE7SUFDRSxtQ0FBQTtFRE5GO0VDUUE7SUFDRSxrQ0FBQTtFRE5GO0VDUUE7SUFDRSxtQ0FBQTtFRE5GO0VDUUE7SUFDRSxrQ0FBQTtFRE5GO0VDUUE7SUFDRSxtQ0FBQTtFRE5GO0VDUUE7SUFDRSxrQ0FBQTtFRE5GO0VDUUE7SUFDRSxtQ0FBQTtFRE5GO0VDUUE7SUFDRSxrQ0FBQTtFRE5GO0VDUUE7SUFDRSxtQ0FBQTtFRE5GO0VDUUE7SUFDRSxnQ0FBQTtFRE5GO0FBQ0Y7QUNTQTtFQUNFO0lBQ0UsMENBQUE7SUFDQSxVQUFBO0VEUEY7RUNTQTtJQUNFLDBDQUFBO0lBQ0EsVUFBQTtFRFBGO0FBQ0Y7QUNEQTtFQUNFO0lBQ0UsMENBQUE7SUFDQSxVQUFBO0VEUEY7RUNTQTtJQUNFLDBDQUFBO0lBQ0EsVUFBQTtFRFBGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnJvb3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ub3ZlcmxheSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogLTE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjbGlwLXBhdGg6IGVsbGlwc2UoNTB2dyA0MHZoIGF0IDUwJSA1MCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpIHRyYW5zbGF0ZSgyN3Z3LCAtMTh2aCkgcm90YXRlKDMzNWRlZyk7XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGxlZnRUb1JpZ2h0O1xufVxuXG4uZHAtbG9nbyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggZmFkZUluO1xufVxuXG4ubmF2YmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZjhmOGY4O1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDEuNnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtaXRlbXMgLm5hdi1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjJyZW0gMDtcbiAgbWFyZ2luOiAwLjZyZW0gMXJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMC4zcmVtIHNvbGlkICMxN2E1OTg7XG4gIGNvbG9yOiAjZjhmOGY4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uc2hvcnQtYmlvIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggZmFkZUluO1xufVxuXG4ucXVvdGUge1xuICBmb250LWZhbWlseTogXCJDb3Jtb3JhbnQgR2FyYW1vbmRcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjRzIGJvdGggZmFkZUluO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvcm1vcmFudCBHYXJhbW9uZFwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBwYWRkaW5nLXRvcDogMC42cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC40cmVtO1xuICB3b3JkLXNwYWNpbmc6IDAuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAtMi41cmVtO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuNnMgYm90aCBmYWRlSW47XG59XG4ubmFtZTpob3ZlciAuc3RyaXA6OmFmdGVyIHtcbiAgbGVmdDogLTFyZW07XG59XG4ubmFtZTpob3ZlciAuc3RyaXA6OmJlZm9yZSB7XG4gIGxlZnQ6IDFyZW07XG59XG5cbi5zdHJpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjhyZW07XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjhzIGJvdGggZmFkZUluO1xufVxuLnN0cmlwOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICBtYXJnaW46IDJweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xcmVtO1xufVxuLnN0cmlwOjphZnRlciB7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIG1hcmdpbjogMnB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogNHB4O1xuICBsZWZ0OiAxcmVtO1xufVxuXG4uc3BlY2lhbC1idG4ge1xuICBtaW4td2lkdGg6IDE1cmVtO1xuICBsaW5lLWhlaWdodDogMi4yO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMDByZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW4tb3V0IDFzIGJvdGg7XG4gIGJveC1zaGFkb3c6IDdweCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMxKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNwZWNpYWwtYnRuIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjdyZW0pO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnNwZWNpYWwtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiMzgxYjtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cbi5zcGVjaWFsLWJ0bjpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4ycmVtKTtcbiAgb3BhY2l0eTogMTtcbn1cbi5zcGVjaWFsLWJ0bjpob3ZlciBzcGFuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjJyZW0pO1xufVxuLnNwZWNpYWwtYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgYm94LXNoYWRvdzogNHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zMSk7XG59XG4uc3BlY2lhbC1idG46OmFmdGVyIHtcbiAgY29udGVudDogXCLCu1wiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIGZvbnQtc2l6ZTogMi43cmVtO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uc3RpY2sge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMXMgYm90aCBmYWRlSW47XG59XG4uc3RpY2s6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyMDB2aDtcbiAgd2lkdGg6IDEuNnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgYm94LXNoYWRvdzogN3B4IDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMzEpO1xufVxuLnN0aWNrIC5zdGljay1kZXNpZ24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICBwYWRkaW5nOiAxLjRyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtaW4td2lkdGg6IDguNXJlbTtcbiAgdG9wOiAzLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIHotaW5kZXg6IDY7XG4gIGJveC1zaGFkb3c6IDEzcHggMHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlLWluLW91dDtcbn1cbi5zdGljayAuc3RpY2stZGVzaWduOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMC44cmVtO1xuICB3aWR0aDogMC44cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJveC1zaGFkb3c6IDJyZW0gMHB4IDBweCAjMmMzZTUwLCAtMnJlbSAwcHggMHB4ICMyYzNlNTA7XG59XG5cbi50YWRhLWFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbjogdGFkYSAxcyBlYXNlLWluLW91dCAwcyAyIG5vcm1hbCBib3RoO1xufVxuXG5Aa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcbiAgMCUge1xuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICBsZWZ0OiAtMjAlO1xuICB9XG4gIDEwMCUge1xuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbGVmdDogMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdGFkYSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcbiAgfVxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN0cmlwQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCkgcm90YXRlWigwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZVooLTE2ZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiQGltcG9ydCAnLi4vdmFyJztcclxuJHNtX2JyZWFrX3BvaW50OjU2MHB4O1xyXG4ucm9vdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogLTE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yMjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGNsaXAtcGF0aDogZWxsaXBzZSg1MHZ3IDQwdmggYXQgNTAlIDUwJSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKSB0cmFuc2xhdGUoMjd2dywgLTE4dmgpIHJvdGF0ZSgzMzVkZWcpO1xyXG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGxlZnRUb1JpZ2h0O1xyXG59XHJcblxyXG4uZHAtbG9nbyB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGZhZGVJbjtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICRvZmYtd2hpdGU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHBhZGRpbmc6IDEuNnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtaXRlbXMge1xyXG4gIC5uYXYtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW0gMDtcclxuICAgIG1hcmdpbjogMC42cmVtIDFyZW07XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCAkZ3JlZW47XHJcbiAgICBjb2xvcjogJG9mZi13aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGNvbG9yOiAkb2ZmLXdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uc2hvcnQtYmlvIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBwYWRkaW5nOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCBmYWRlSW47XHJcbn1cclxuXHJcbi5xdW90ZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAwcmVtO1xyXG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC40cyBib3RoIGZhZGVJbjtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBwYWRkaW5nLXRvcDogMC42cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHJlbTtcclxuICB3b3JkLXNwYWNpbmc6IDAuMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTIuNXJlbTtcclxuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuNnMgYm90aCBmYWRlSW47XHJcbiAgJjpob3ZlciB7XHJcbiAgICAuc3RyaXA6OmFmdGVyIHtcclxuICAgICAgbGVmdDogLTFyZW07XHJcbiAgICB9XHJcbiAgICAuc3RyaXA6OmJlZm9yZSB7XHJcbiAgICAgIGxlZnQ6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RyaXAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI4cmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC44cyBib3RoIGZhZGVJbjtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcclxuICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IC0xcmVtO1xyXG4gIH1cclxuICAmOjphZnRlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xyXG4gICAgbWFyZ2luOiAycHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnNwZWNpYWwtYnRuIHtcclxuICBtaW4td2lkdGg6IDE1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjI7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1pbi1vdXQgMXMgYm90aDtcclxuICBib3gtc2hhZG93OiA3cHggNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgLjMxKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC43cmVtKTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjM7XHJcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4ycmVtKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMnJlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIGJveC1zaGFkb3c6IDRweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzEpO1xyXG4gIH1cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnXFwwMGJiJztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gICAgZm9udC1zaXplOiAyLjdyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNXB4KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLnN0aWNrIHtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbi10b3A6IC0xcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMXMgYm90aCBmYWRlSW47XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBoZWlnaHQ6IDIwMHZoO1xyXG4gICAgd2lkdGg6IDEuNnJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgICBib3gtc2hhZG93OiA3cHggNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgLjMxKTtcclxuICB9XHJcbiAgLnN0aWNrLWRlc2lnbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgcGFkZGluZzogMS40cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWluLXdpZHRoOiA4LjVyZW07XHJcbiAgICB0b3A6IDMuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gICAgei1pbmRleDogNjtcclxuICAgIGJveC1zaGFkb3c6IDEzcHggMHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBoZWlnaHQ6IDAuOHJlbTtcclxuICAgICAgd2lkdGg6IDAuOHJlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAycmVtIDBweCAwcHggJGNvbG9yMiwgLTJyZW0gMHB4IDBweCAkY29sb3IyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRhZGEtYW5pbWF0aW9uIHtcclxuICBhbmltYXRpb246IHRhZGEgMXMgZWFzZS1pbi1vdXQgMHMgMiBub3JtYWwgYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsZWZ0VG9SaWdodCB7XHJcbiAgMCUge1xyXG4gICAgZGlzcGxheTogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICBsZWZ0OiAtMjAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0YWRhIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcclxuICB9XHJcbiAgNzAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcclxuICB9XHJcbiAgOTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzdHJpcEFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KSByb3RhdGVaKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGVaKC0xNmRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG4iLCIkYmctY29sb3I6ICMxN2E1OTg7XHJcbiRjb2xvcjE6ICNlNzRjM2M7XHJcbiRjb2xvcjI6ICMyYzNlNTA7XHJcbiRjb2xvcjM6ICNkYjM4MWI7XHJcbiRncmVlbjogIzE3YTU5ODtcclxuJHRleHQtY29sb3I6ICNmZmZmZmY7XHJcbiRibGFjazogIzU1NTtcclxuJG9mZi13aGl0ZTogI2Y4ZjhmODtcclxuJHdoaXRlOiAjZmZmOyJdfQ== */";

    /***/
  },

  /***/"./src/app/landing-page/landing-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.ts ***!
    \********************************************************/
  /*! exports provided: LandingPageComponent */
  /***/
  function srcAppLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var LandingPageComponent = /*#__PURE__*/function () {
      function LandingPageComponent() {
        _classCallCheck(this, LandingPageComponent);
        this.ExploreMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.startTadaAnimation = false;
      }
      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          setInterval(function () {
            _this.startTadaAnimation = !_this.startTadaAnimation;
          }, 3000);
        }
      }, {
        key: "onExploreMeClick",
        value: function onExploreMeClick() {
          this.ExploreMe.emit();
        }
      }]);
      return LandingPageComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('ExploreMe')], LandingPageComponent.prototype, "ExploreMe", void 0);
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./landing-page.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./landing-page.component.scss */"./src/app/landing-page/landing-page.component.scss"))["default"]]
    })], LandingPageComponent);

    /***/
  },

  /***/"./src/app/navigator/navigator.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/navigator/navigator.component.scss ***!
    \****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppNavigatorNavigatorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "* {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.navigator-container {\n  font-family: \"Cormorant Garamond\", serif;\n  display: flex;\n  position: fixed;\n  min-width: 100vw;\n  min-height: 100vh;\n  background: rgba(85, 85, 85, 0.9);\n  top: 0;\n  left: 0;\n  z-index: 5;\n  justify-content: center;\n  align-items: center;\n}\n\n.navLinks {\n  width: 90vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.navLink {\n  padding: 2rem 0;\n  margin: 1rem 0;\n  width: 40%;\n  min-width: 40rem;\n  font-size: 2.4rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-align: center;\n  background: rgba(248, 248, 248, 0.5);\n  cursor: pointer;\n  border-radius: 0.5rem;\n}\n\n@media (max-width: 1300px) {\n  .navLink {\n    width: 60%;\n  }\n}\n\n@media (max-width: 640px) {\n  .navLink {\n    width: 100%;\n  }\n}\n\n.navLink > * {\n  color: #fff;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdG9yL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxuYXZpZ2F0b3JcXG5hdmlnYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2aWdhdG9yL25hdmlnYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQUk7RUFiRjtJQWNJLFVBQUE7RUNHSjtBQUNGOztBREZJO0VBaEJGO0lBaUJJLFdBQUE7RUNLSjtBQUNGOztBREZFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0b3IvbmF2aWdhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmlnYXRvci1jb250YWluZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCM1NTUsIDAuOSk7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm5hdkxpbmtzIHtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZMaW5rIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1pbi13aWR0aDogNDByZW07XHJcbiAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCNmOGY4ZjgsIDAuNSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZMaW5rPioge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gICIsIioge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5hdmlnYXRvci1jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJDb3Jtb3JhbnQgR2FyYW1vbmRcIiwgc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoODUsIDg1LCA4NSwgMC45KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA1O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdkxpbmtzIHtcbiAgd2lkdGg6IDkwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubmF2TGluayB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHdpZHRoOiA0MCU7XG4gIG1pbi13aWR0aDogNDByZW07XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ4LCAyNDgsIDAuNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAubmF2TGluayB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5uYXZMaW5rIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4ubmF2TGluayA+ICoge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/navigator/navigator.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/navigator/navigator.component.ts ***!
    \**************************************************/
  /*! exports provided: NavigatorComponent */
  /***/
  function srcAppNavigatorNavigatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavigatorComponent", function () {
      return NavigatorComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var NavigatorComponent = /*#__PURE__*/function () {
      function NavigatorComponent(router) {
        _classCallCheck(this, NavigatorComponent);
        this.router = router;
        this.navLinks = [{
          displayName: 'Portfolio',
          url: '/portfolio'
        }, {
          displayName: 'About & Skills',
          url: '/about'
        }, {
          displayName: 'Contacts & Profiles',
          url: '/profiles'
        }, {
          displayName: 'Profile Card',
          url: '/profile-card'
        }];
        this.cancellation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      _createClass(NavigatorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onBgClick",
        value: function onBgClick() {
          this.cancellation.emit();
        }
      }, {
        key: "onNavItemClick",
        value: function onNavItemClick(e, url) {
          e.stopPropagation();
          this.router.navigateByUrl(url);
        }
      }]);
      return NavigatorComponent;
    }();
    NavigatorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("cancellation")], NavigatorComponent.prototype, "cancellation", void 0);
    NavigatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./navigator.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/navigator/navigator.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        marginLeft: '50%',
        opacity: 0
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        marginLeft: '0%',
        opacity: 1
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('0.2s', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        marginLeft: '0%',
        opacity: 0.8,
        offset: 0.8
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        marginLeft: '-10%',
        opacity: 1,
        offset: 0.9
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        marginLeft: '0%',
        opacity: 1,
        offset: 1
      })]))])], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('0.2s', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        marginLeft: '10%',
        offset: 0.1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        marginLeft: '0%',
        offset: 0.4
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        marginLeft: '-50%',
        opacity: 0,
        offset: 1
      })]))])], {
        optional: true
      })])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./navigator.component.scss */"./src/app/navigator/navigator.component.scss"))["default"]]
    })], NavigatorComponent);

    /***/
  },

  /***/"./src/app/pipes/max-length.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/pipes/max-length.pipe.ts ***!
    \******************************************/
  /*! exports provided: MaxLengthPipe */
  /***/
  function srcAppPipesMaxLengthPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MaxLengthPipe", function () {
      return MaxLengthPipe;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var MaxLengthPipe = /*#__PURE__*/function () {
      function MaxLengthPipe() {
        _classCallCheck(this, MaxLengthPipe);
      }
      _createClass(MaxLengthPipe, [{
        key: "transform",
        value: function transform(value) {
          var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          var prettier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var transformedValue = value.slice(0, maxLength);
          if (value.length > maxLength) {
            if (prettier) transformedValue = this.makePrettier(transformedValue);
            transformedValue += '...';
          }
          return transformedValue;
        }
      }, {
        key: "makePrettier",
        value: function makePrettier(value) {
          return value.split(' , ').filter(function (_, index, arr) {
            return arr.length - 1 !== index && arr.length >= 1;
          }).join(', ');
        }
      }]);
      return MaxLengthPipe;
    }();
    MaxLengthPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'maxLength'
    })], MaxLengthPipe);

    /***/
  },

  /***/"./src/app/pipes/no-emoji.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/no-emoji.pipe.ts ***!
    \****************************************/
  /*! exports provided: NoEmojiPipe */
  /***/
  function srcAppPipesNoEmojiPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NoEmojiPipe", function () {
      return NoEmojiPipe;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var NoEmojiPipe = /*#__PURE__*/function () {
      function NoEmojiPipe() {
        _classCallCheck(this, NoEmojiPipe);
      }
      _createClass(NoEmojiPipe, [{
        key: "transform",
        value: function transform(value) {
          return value.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, '');
        }
      }]);
      return NoEmojiPipe;
    }();
    NoEmojiPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'noEmoji'
    })], NoEmojiPipe);

    /***/
  },

  /***/"./src/app/portfolio/portfolio.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/portfolio/portfolio.component.scss ***!
    \****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppPortfolioPortfolioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".portfolio-bg {\n  min-height: 100vh;\n  min-width: 100vw;\n  position: relative;\n  background-color: #17a598;\n  overflow: hidden;\n  display: flex;\n}\n.portfolio-bg::after {\n  content: \"\";\n  position: fixed;\n  display: block;\n  height: 100vh;\n  min-height: 500px;\n  width: 100vw;\n  min-width: 500px;\n  overflow: hidden;\n  background-color: #2c3e50;\n  transform: rotateZ(-11deg) scale(1.5);\n  top: -65vh;\n  left: -25vw;\n}\n.portfolio-container {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  z-index: 10;\n  padding: 3.5rem;\n  flex-direction: column;\n  color: #fff;\n}\n.portfolio-container .portfolio-header {\n  display: flex;\n  justify-content: stretch;\n  margin: auto;\n  align-items: center;\n  font-size: 1.8rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.portfolio-container .portfolio-header > * {\n  display: inline-block;\n  padding: 1rem 2rem;\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.portfolio-container .portfolio-area {\n  margin: 0.4rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 50;\n  position: relative;\n}\n.portfolio-container .portfolio-area .portfolio-selection {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.portfolio-container .portfolio-area .portfolio-selection.portfolio-selection__fixed {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  background-color: #2c3e50;\n  width: 100%;\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);\n}\n.portfolio-container .portfolio-area .portfolio-selection > h1 {\n  font-family: \"Cormorant Garamond\", serif;\n  font-weight: normal;\n  font-size: 3.2rem;\n  letter-spacing: 1px;\n  margin: 1rem auto;\n  text-align: center;\n}\n@media (max-width: 900px) {\n  .portfolio-container {\n    padding: 3.5rem 0.5rem;\n  }\n}\n@media (max-width: 74rem) {\n  .portfolio-header {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxwb3J0Zm9saW9cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxfdmFyLnNjc3MiLCJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNOUztFRE9ULGdCQUFBO0VBQ0EsYUFBQTtBRURGO0FGR0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQ2pCSztFRGtCTCxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FFREo7QUZNQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUVIRjtBRktFO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBRUhKO0FGS0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7QUVITjtBRlFFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FFTko7QUZRSTtFQUVFLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FFUE47QUZTTTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQ3RFQztFRHVFRCxXQUFBO0VBQ0EsMkNBQUE7QUVQUjtBRldNO0VBQ0Usd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FFVFI7QUZlQTtFQUNFO0lBQ0Usc0JBQUE7RUVaRjtBQUNGO0FGZUE7RUFDRTtJQUNFLHNCQUFBO0VFYkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi92YXInO1xyXG5cclxuLnBvcnRmb2xpby1iZyB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWigtMTFkZWcpIHNjYWxlKDEuNSk7XHJcbiAgICB0b3A6IC02NXZoO1xyXG4gICAgbGVmdDogLTI1dnc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnBvcnRmb2xpby1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMDtcclxuICBwYWRkaW5nOiAzLjVyZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgLnBvcnRmb2xpby1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICYgPiAqIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAucG9ydGZvbGlvLWFyZWEge1xyXG4gICAgbWFyZ2luOiAwLjRyZW0gMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogNTA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLnBvcnRmb2xpby1zZWxlY3Rpb24ge1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICYucG9ydGZvbGlvLXNlbGVjdGlvbl9fZml4ZWQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCByZ2JhKCRjb2xvcjogIzAwMCwgJGFscGhhOiAwLjQpO1xyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmID4gaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDMuMnJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLnBvcnRmb2xpby1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMy41cmVtIDAuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NHJlbSkge1xyXG4gIC5wb3J0Zm9saW8taGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcbiIsIiRiZy1jb2xvcjogIzE3YTU5ODtcclxuJGNvbG9yMTogI2U3NGMzYztcclxuJGNvbG9yMjogIzJjM2U1MDtcclxuJGNvbG9yMzogI2RiMzgxYjtcclxuJGdyZWVuOiAjMTdhNTk4O1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJsYWNrOiAjNTU1O1xyXG4kb2ZmLXdoaXRlOiAjZjhmOGY4O1xyXG4kd2hpdGU6ICNmZmY7IiwiLnBvcnRmb2xpby1iZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2E1OTg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucG9ydGZvbGlvLWJnOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMTAwdnc7XG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG4gIHRyYW5zZm9ybTogcm90YXRlWigtMTFkZWcpIHNjYWxlKDEuNSk7XG4gIHRvcDogLTY1dmg7XG4gIGxlZnQ6IC0yNXZ3O1xufVxuXG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZzogMy41cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wb3J0Zm9saW8tY29udGFpbmVyIC5wb3J0Zm9saW8taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5wb3J0Zm9saW8tY29udGFpbmVyIC5wb3J0Zm9saW8taGVhZGVyID4gKiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4ucG9ydGZvbGlvLWNvbnRhaW5lciAucG9ydGZvbGlvLWFyZWEge1xuICBtYXJnaW46IDAuNHJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogNTA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wb3J0Zm9saW8tY29udGFpbmVyIC5wb3J0Zm9saW8tYXJlYSAucG9ydGZvbGlvLXNlbGVjdGlvbiB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnBvcnRmb2xpby1jb250YWluZXIgLnBvcnRmb2xpby1hcmVhIC5wb3J0Zm9saW8tc2VsZWN0aW9uLnBvcnRmb2xpby1zZWxlY3Rpb25fX2ZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLnBvcnRmb2xpby1jb250YWluZXIgLnBvcnRmb2xpby1hcmVhIC5wb3J0Zm9saW8tc2VsZWN0aW9uID4gaDEge1xuICBmb250LWZhbWlseTogXCJDb3Jtb3JhbnQgR2FyYW1vbmRcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnBvcnRmb2xpby1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDMuNXJlbSAwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NHJlbSkge1xuICAucG9ydGZvbGlvLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSJdfQ== */";

    /***/
  },

  /***/"./src/app/portfolio/portfolio.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/portfolio/portfolio.component.ts ***!
    \**************************************************/
  /*! exports provided: PortfolioComponent */
  /***/
  function srcAppPortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./../services/tags.service */"./src/app/services/tags.service.ts");
    var PortfolioComponent = /*#__PURE__*/function () {
      function PortfolioComponent(router, tagsService) {
        _classCallCheck(this, PortfolioComponent);
        this.router = router;
        this.tagsService = tagsService;
        this.animatedTypingText = '🙋 Hey, sort my projects by clicking the categories. ';
        this.dpLogoStyle = {
          height: '12rem',
          width: '12rem',
          borderWidth: '3px'
        };
        this.setFixedPostion = false;
      }
      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateAnimatedTextOnce();
        }
      }, {
        key: "updateAnimatedTextOnce",
        value: function updateAnimatedTextOnce() {
          var _this2 = this;
          var updateCount = 0;
          this.tagsService.onTagUpdate.subscribe(function () {
            if (updateCount === 0) {
              _this2.animatedTypingText = 'Great! Have a great day! 😊';
              updateCount++;
            }
          });
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          var portfolioHeader = this.portfolioHeaderRef.nativeElement;
          var portfolioArea = this.portfolioAreaRef.nativeElement;
          var portfolioSelectionArea = this.portfolioSelectionAreaRef.nativeElement;
          var thresoldHeight = portfolioHeader.scrollHeight + portfolioHeader.offsetTop;
          var portfolioSelectionHeight = portfolioSelectionArea.scrollHeight + portfolioSelectionArea.offsetTop;
          if (window.scrollY > thresoldHeight) {
            portfolioArea.style.marginTop = "".concat(portfolioSelectionHeight + 5, "px");
            this.setFixedPostion = true;
          } else {
            portfolioArea.style.marginTop = "inherit";
            this.setFixedPostion = false;
            var factor = 1 - window.scrollY / (thresoldHeight + 40);
            // const netFactor = window.innerWidth < 900 ? 1 : 1 - factor;
            this.dpLogoStyle = Object.assign({}, this.dpLogoStyle, {
              height: "".concat(12 * factor, "rem"),
              width: "".concat(12 * factor, "rem")
            });
            portfolioHeader.style.opacity = factor.toString();
          }
        }
      }, {
        key: "onBackBtnClick",
        value: function onBackBtnClick() {
          this.router.navigateByUrl('/');
        }
      }]);
      return PortfolioComponent;
    }();
    PortfolioComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('portfolioHeader', {
      "static": true
    })], PortfolioComponent.prototype, "portfolioHeaderRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('portfolioArea', {
      "static": true
    })], PortfolioComponent.prototype, "portfolioAreaRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('portfolioSelectionArea', {
      "static": true
    })], PortfolioComponent.prototype, "portfolioSelectionAreaRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')], PortfolioComponent.prototype, "onScroll", null);
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portfolio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./portfolio.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./portfolio.component.scss */"./src/app/portfolio/portfolio.component.scss"))["default"]]
    })], PortfolioComponent);

    /***/
  },

  /***/"./src/app/profile-card/profile-card.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/profile-card/profile-card.component.scss ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppProfileCardProfileCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.container {\n  display: flex;\n  width: 100%;\n  min-height: 100vh;\n  align-items: center;\n  padding: 2rem 0;\n  justify-content: center;\n  background-color: #17a598;\n  color: #ffffff;\n}\n.container .card {\n  background-color: #2c3e50;\n  height: auto;\n  max-height: 90%;\n  width: 45rem;\n  text-align: center;\n  overflow-x: hidden;\n  position: relative;\n  z-index: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  border-radius: 5px;\n  box-shadow: 12px 11px 14px 0px rgba(0, 0, 0, 0.36);\n  transition: all 0.3s ease-in-out;\n  -webkit-animation: dropin 1s ease-in-out 0s 1 normal both;\n          animation: dropin 1s ease-in-out 0s 1 normal both;\n}\n.container .profile-logo {\n  height: 14rem;\n  width: 14rem;\n  margin-top: 5.5rem;\n  display: inline-block;\n  position: relative;\n  z-index: 5;\n  border-radius: 50%;\n  perspective: 1500px;\n  -webkit-animation: dropin 1s ease-in-out 0.4s 1 normal both;\n          animation: dropin 1s ease-in-out 0.4s 1 normal both;\n}\n.container .profile-logo img {\n  position: relative;\n  border: 0.8rem solid #e74c3c;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all 0.5s ease-in-out;\n  perspective: 1500px;\n}\n.container .profile-logo::after {\n  content: \"Ritwick Dey\";\n  display: flex;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: #e74c3c;\n  border: 0.8rem solid #db381b;\n  top: 0px;\n  left: 0px;\n  z-index: 10;\n  font-size: 2rem;\n  transition: all 0.5s ease-in-out;\n  transform: rotateY(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1500px;\n}\n.container .profile-logo:hover img {\n  transform: rotateY(180deg);\n}\n.container .profile-logo:hover::after {\n  transform: rotateY(0deg);\n}\n.container .strip {\n  background-color: #e74c3c;\n  height: 16.2rem;\n  width: 150%;\n  margin-left: -5rem;\n  margin-top: -8rem;\n  transform: rotateZ(-16deg);\n  z-index: -1;\n  position: absolute;\n  -webkit-animation: stripAnimation 1s ease-in-out 1.4s 1 normal both;\n          animation: stripAnimation 1s ease-in-out 1.4s 1 normal both;\n}\n.container .strip::after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  height: 100%;\n  width: 20%;\n  background-color: #ffffff;\n  opacity: 0;\n  top: 0;\n  left: 0;\n}\n.container .strip:hover::after {\n  -webkit-animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n          animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n}\n.container .strip-block:hover .strip:after {\n  -webkit-animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n          animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n}\n.container .short-details {\n  position: relative;\n  -webkit-animation: dropin 1s ease-in-out 0.4s 1 normal both;\n          animation: dropin 1s ease-in-out 0.4s 1 normal both;\n}\n.container .short-details .tagLine {\n  display: block;\n  width: 100%;\n  font-size: 1.6rem;\n  font-weight: lighter;\n  font-style: italic;\n  padding: 0.5rem;\n}\n.container .short-details .quote {\n  font-family: \"Cormorant Garamond\", serif;\n  display: inline-block;\n  font-size: 2rem;\n  font-weight: 400;\n  width: 65%;\n  padding: 0.5rem 2rem;\n  padding-bottom: 1rem;\n  line-height: 1.2;\n}\n.container .details {\n  margin-top: 6rem;\n}\n.container .details .nameBlock {\n  transition: all 0.3s ease-in-out;\n  -webkit-animation: dropin 1s ease-in-out 0.6s 1 normal both;\n          animation: dropin 1s ease-in-out 0.6s 1 normal both;\n}\n.container .details .nameBlock:hover .divider > .stick1 {\n  transform: translateX(-2rem) !important;\n}\n.container .details .nameBlock:hover .divider > .stick2 {\n  transform: translateX(2rem) !important;\n}\n.container .details .name {\n  display: inline-block;\n  position: relative;\n  width: 60%;\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.6;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n}\n.container .details .bio {\n  display: inline-block;\n  width: 70%;\n  font-size: 1.6rem;\n  margin: 0.4rem;\n  line-height: 1.2;\n  font-weight: lighter;\n  margin-bottom: 0.8rem;\n  text-align: center;\n  word-spacing: 1px;\n  -webkit-animation: dropin 1s ease-in-out 0.8s 1 normal both;\n          animation: dropin 1s ease-in-out 0.8s 1 normal both;\n}\n.container .details .projects-link {\n  display: inline-block;\n  width: 15rem;\n  line-height: 2.2;\n  font-size: 1.4rem;\n  padding: 0.5rem;\n  margin-top: 1.5rem;\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n  vertical-align: middle;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 7px 5px 8px 0px rgba(0, 0, 0, 0.31);\n  -webkit-animation: dropin 1s ease-in-out 1s 1 normal both;\n          animation: dropin 1s ease-in-out 1s 1 normal both;\n}\n.container .details .projects-link span {\n  transform: translateX(0.7rem);\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n.container .details .projects-link:hover {\n  background-color: #db381b;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.container .details .projects-link:hover::after {\n  transform: translateX(0.2rem);\n  opacity: 1;\n}\n.container .details .projects-link:hover span {\n  transform: translateX(-0.2rem);\n}\n.container .details .projects-link:active {\n  transform: scale(0.8);\n  box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.31);\n}\n.container .details .projects-link::after {\n  content: \"»\";\n  position: relative;\n  opacity: 0;\n  vertical-align: sub;\n  font-size: 2.7rem;\n  line-height: 0;\n  transform: translateX(25px);\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n.container .social {\n  display: block;\n  padding: 3rem 3rem;\n  padding-top: 0;\n  margin-top: 0.6rem;\n  -webkit-animation: dropin 1s ease-in-out 1.2s 1 normal both;\n          animation: dropin 1s ease-in-out 1.2s 1 normal both;\n}\n.container .social .social-icon {\n  display: inline-block;\n  width: 3.4rem;\n  height: 3.4rem;\n  margin: 0.2rem 0.5rem;\n  transition: all 0.3s ease-in-out;\n}\n.container .social .social-icon img {\n  height: 100%;\n  width: 100%;\n}\n.container .social .social-icon:hover {\n  transform: scale(1.3);\n}\n.divider {\n  padding: 1rem;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  position: relative;\n}\n.divider .stick {\n  display: inline-block;\n  position: relative;\n  height: 2px;\n  background-color: #e74c3c;\n  margin: 2px 0;\n  width: 75%;\n  clear: both;\n}\n.divider .stick1 {\n  transform: translateX(1.5rem);\n  transition: all 0.3s ease-in-out;\n}\n.divider .stick2 {\n  transform: translateX(-1.5rem);\n  transition: all 0.3s ease-in-out;\n}\n.divider:hover .stick1 {\n  transform: translateX(-1.5rem) !important;\n}\n.divider:hover .stick2 {\n  transform: translateX(1.5rem) !important;\n}\n.round-shape {\n  background-color: #e74c3c;\n  border-radius: 100rem;\n  padding: 0.2rem 2rem;\n}\n.tada-animation {\n  -webkit-animation: tada 1s ease-in-out 0s 2 normal both;\n          animation: tada 1s ease-in-out 0s 2 normal both;\n}\n@media (max-height: 740px) and (min-width: 436px) {\n  html {\n    font-size: 8px;\n  }\n}\n@media (max-height: 660px) and (min-width: 436px) {\n  html {\n    font-size: 6px;\n  }\n\n  .container .details {\n    margin-top: 8rem;\n  }\n}\n@media (max-height: 740px) {\n  .container .card {\n    overflow-y: auto;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .container .profile-logo {\n    margin-top: 30px !important;\n  }\n  .container .details {\n    margin-top: 8rem !important;\n  }\n}\n@media (max-width: 460px) and (min-height: 100px) {\n  html {\n    font-size: 8px;\n  }\n\n  .container .card {\n    width: 90vw;\n  }\n  .container .profile-logo {\n    width: 14rem;\n    height: 14rem;\n    margin-top: 14rem;\n  }\n  .container .details {\n    margin-top: 10rem;\n  }\n}\n@media (max-width: 360px) and (min-height: 100px) {\n  html {\n    font-size: 7px;\n  }\n\n  .container .details {\n    margin-top: 7rem;\n  }\n  .container .social .social-icon {\n    width: 2.4rem;\n    height: 2.4rem;\n  }\n}\n@media (max-width: 270px) and (min-height: 100px) {\n  html {\n    font-size: 5px;\n  }\n\n  .container .social .social-icon {\n    width: 1.4rem;\n    height: 1.4rem;\n  }\n}\n@media (max-width: 170px) and (min-height: 100px) {\n  html {\n    font-size: 1px;\n  }\n}\n@-webkit-keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%;\n  }\n  100% {\n    opacity: 0.7;\n    left: 120%;\n  }\n}\n@keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%;\n  }\n  100% {\n    opacity: 0.7;\n    left: 120%;\n  }\n}\n@-webkit-keyframes dropin {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes dropin {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes tada {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  10% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  20% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  30% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  40% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  50% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  60% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  70% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  80% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  90% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n  }\n}\n@keyframes tada {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  10% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  20% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  30% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  40% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  50% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  60% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  70% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  80% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  90% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n  }\n}\n@-webkit-keyframes stripAnimation {\n  0% {\n    transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1;\n  }\n}\n@keyframes stripAnimation {\n  0% {\n    transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1jYXJkL3Byb2ZpbGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS1jYXJkL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxwcm9maWxlLWNhcmRcXHByb2ZpbGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS1jYXJkL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJDVE87RURVUCxjQ0xTO0FGS2I7QUNFSTtFQUNJLHlCQ1hDO0VEWUQsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5REFBQTtVQUFBLGlEQUFBO0FEQVI7QUNHSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FERFI7QUNHUTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUREWjtBQ0lRO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQzNESDtFRDRERyw0QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FERlo7QUNNWTtFQUNJLDBCQUFBO0FESmhCO0FDUVE7RUFDSSx3QkFBQTtBRE5aO0FDVUk7RUFDSSx5QkNuRkM7RURvRkQsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0FEUlI7QUNVUTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBRFJaO0FDV1E7RUFDSSxrRUFBQTtVQUFBLDBEQUFBO0FEVFo7QUNjUTtFQUNJLGtFQUFBO1VBQUEsMERBQUE7QURaWjtBQ2dCSTtFQUNJLGtCQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBRGRSO0FDZ0JRO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEZFo7QUNpQlE7RUFDSSx3Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBRGZaO0FDbUJJO0VBQ0ksZ0JBQUE7QURqQlI7QUNtQlE7RUFDSSxnQ0FBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QURqQlo7QUNvQmdCO0VBQ0ksdUNBQUE7QURsQnBCO0FDcUJnQjtFQUNJLHNDQUFBO0FEbkJwQjtBQ3dCUTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FEdEJaO0FDeUJRO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QUR2Qlo7QUMwQlE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQ0FBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7QUR4Qlo7QUMyQlk7RUFDSSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUR6QmhCO0FDNEJZO0VBQ0kseUJDNU1QO0VENk1PLG9DQUFBO1VBQUEsNEJBQUE7QUQxQmhCO0FDNEJnQjtFQUNJLDZCQUFBO0VBQ0EsVUFBQTtBRDFCcEI7QUM2QmdCO0VBQ0ksOEJBQUE7QUQzQnBCO0FDK0JZO0VBQ0kscUJBQUE7RUFDQSwrQ0FBQTtBRDdCaEI7QUNnQ1k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUQ5QmhCO0FDbUNJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBRGpDUjtBQ21DUTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUVBLGdDQUFBO0FEbENaO0FDb0NZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QURsQ2hCO0FDcUNZO0VBQ0kscUJBQUE7QURuQ2hCO0FDeUNBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUR0Q0o7QUN3Q0k7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ3BSQztFRHFSRCxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUR0Q1I7QUN5Q0k7RUFDSSw2QkFBQTtFQUNBLGdDQUFBO0FEdkNSO0FDMENJO0VBQ0ksOEJBQUE7RUFDQSxnQ0FBQTtBRHhDUjtBQzRDUTtFQUNJLHlDQUFBO0FEMUNaO0FDNkNRO0VBQ0ksd0NBQUE7QUQzQ1o7QUNnREE7RUFDSSx5QkNoVEs7RURpVEwscUJBQUE7RUFDQSxvQkFBQTtBRDdDSjtBQ2dEQTtFQUNJLHVEQUFBO1VBQUEsK0NBQUE7QUQ3Q0o7QUNnREE7RUFDSTtJQUNJLGNBQUE7RUQ3Q047QUFDRjtBQ2dEQTtFQUNJO0lBQ0ksY0FBQTtFRDlDTjs7RUNrRE07SUFDSSxnQkFBQTtFRC9DVjtBQUNGO0FDbURBO0VBRVE7SUFDSSxnQkFBQTtFRGxEVjtBQUNGO0FDc0RBO0VBRVE7SUFDSSwyQkFBQTtFRHJEVjtFQ3dETTtJQUNJLDJCQUFBO0VEdERWO0FBQ0Y7QUMwREE7RUFDSTtJQUNJLGNBQUE7RUR4RE47O0VDNERNO0lBQ0ksV0FBQTtFRHpEVjtFQzRETTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RUQxRFY7RUM2RE07SUFDSSxpQkFBQTtFRDNEVjtBQUNGO0FDK0RBO0VBQ0k7SUFDSSxjQUFBO0VEN0ROOztFQ2lFTTtJQUNJLGdCQUFBO0VEOURWO0VDa0VVO0lBQ0ksYUFBQTtJQUNBLGNBQUE7RURoRWQ7QUFDRjtBQ3FFQTtFQUNJO0lBQ0ksY0FBQTtFRG5FTjs7RUN3RVU7SUFDSSxhQUFBO0lBQ0EsY0FBQTtFRHJFZDtBQUNGO0FDMEVBO0VBQ0k7SUFDSSxjQUFBO0VEeEVOO0FBQ0Y7QUMyRUE7RUFDSTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VEekVOO0VDNEVFO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUQxRU47QUFDRjtBQ2lFQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUR6RU47RUM0RUU7SUFDSSxZQUFBO0lBQ0EsVUFBQTtFRDFFTjtBQUNGO0FDNkVBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsbUJBQUE7RUQzRU47RUM4RUU7SUFDSSxVQUFBO0lBQ0EsbUJBQUE7RUQ1RU47QUFDRjtBQ21FQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG1CQUFBO0VEM0VOO0VDOEVFO0lBQ0ksVUFBQTtJQUNBLG1CQUFBO0VENUVOO0FBQ0Y7QUMrRUE7RUFDSTtJQUNJLGdDQUFBO0VEN0VOO0VDZ0ZFO0lBQ0ksbUNBQUE7RUQ5RU47RUNpRkU7SUFDSSxrQ0FBQTtFRC9FTjtFQ2tGRTtJQUNJLG1DQUFBO0VEaEZOO0VDbUZFO0lBQ0ksa0NBQUE7RURqRk47RUNvRkU7SUFDSSxtQ0FBQTtFRGxGTjtFQ3FGRTtJQUNJLGtDQUFBO0VEbkZOO0VDc0ZFO0lBQ0ksbUNBQUE7RURwRk47RUN1RkU7SUFDSSxrQ0FBQTtFRHJGTjtFQ3dGRTtJQUNJLG1DQUFBO0VEdEZOO0VDeUZFO0lBQ0ksZ0NBQUE7RUR2Rk47QUFDRjtBQzRDQTtFQUNJO0lBQ0ksZ0NBQUE7RUQ3RU47RUNnRkU7SUFDSSxtQ0FBQTtFRDlFTjtFQ2lGRTtJQUNJLGtDQUFBO0VEL0VOO0VDa0ZFO0lBQ0ksbUNBQUE7RURoRk47RUNtRkU7SUFDSSxrQ0FBQTtFRGpGTjtFQ29GRTtJQUNJLG1DQUFBO0VEbEZOO0VDcUZFO0lBQ0ksa0NBQUE7RURuRk47RUNzRkU7SUFDSSxtQ0FBQTtFRHBGTjtFQ3VGRTtJQUNJLGtDQUFBO0VEckZOO0VDd0ZFO0lBQ0ksbUNBQUE7RUR0Rk47RUN5RkU7SUFDSSxnQ0FBQTtFRHZGTjtBQUNGO0FDMEZBO0VBQ0k7SUFDSSwwQ0FBQTtJQUNBLFVBQUE7RUR4Rk47RUMyRkU7SUFDSSwwQ0FBQTtJQUNBLFVBQUE7RUR6Rk47QUFDRjtBQ2dGQTtFQUNJO0lBQ0ksMENBQUE7SUFDQSxVQUFBO0VEeEZOO0VDMkZFO0lBQ0ksMENBQUE7SUFDQSxVQUFBO0VEekZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlLWNhcmQvcHJvZmlsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTU5ODtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY29udGFpbmVyIC5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiA0NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMTJweCAxMXB4IDE0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwcyAxIG5vcm1hbCBib3RoO1xufVxuLmNvbnRhaW5lciAucHJvZmlsZS1sb2dvIHtcbiAgaGVpZ2h0OiAxNHJlbTtcbiAgd2lkdGg6IDE0cmVtO1xuICBtYXJnaW4tdG9wOiA1LjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG4gIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNHMgMSBub3JtYWwgYm90aDtcbn1cbi5jb250YWluZXIgLnByb2ZpbGUtbG9nbyBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMC44cmVtIHNvbGlkICNlNzRjM2M7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgcGVyc3BlY3RpdmU6IDE1MDBweDtcbn1cbi5jb250YWluZXIgLnByb2ZpbGUtbG9nbzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlJpdHdpY2sgRGV5XCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgYm9yZGVyOiAwLjhyZW0gc29saWQgI2RiMzgxYjtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG59XG4uY29udGFpbmVyIC5wcm9maWxlLWxvZ286aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uY29udGFpbmVyIC5wcm9maWxlLWxvZ286aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xufVxuLmNvbnRhaW5lciAuc3RyaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICBoZWlnaHQ6IDE2LjJyZW07XG4gIHdpZHRoOiAxNTAlO1xuICBtYXJnaW4tbGVmdDogLTVyZW07XG4gIG1hcmdpbi10b3A6IC04cmVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTE2ZGVnKTtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYW5pbWF0aW9uOiBzdHJpcEFuaW1hdGlvbiAxcyBlYXNlLWluLW91dCAxLjRzIDEgbm9ybWFsIGJvdGg7XG59XG4uY29udGFpbmVyIC5zdHJpcDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4uY29udGFpbmVyIC5zdHJpcDpob3Zlcjo6YWZ0ZXIge1xuICBhbmltYXRpb246IGZhZGVMZWZ0VG9SaWdodCAxcyBlYXNlLWluLW91dCAwcyAxIG5vcm1hbCBib3RoO1xufVxuLmNvbnRhaW5lciAuc3RyaXAtYmxvY2s6aG92ZXIgLnN0cmlwOmFmdGVyIHtcbiAgYW5pbWF0aW9uOiBmYWRlTGVmdFRvUmlnaHQgMXMgZWFzZS1pbi1vdXQgMHMgMSBub3JtYWwgYm90aDtcbn1cbi5jb250YWluZXIgLnNob3J0LWRldGFpbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNHMgMSBub3JtYWwgYm90aDtcbn1cbi5jb250YWluZXIgLnNob3J0LWRldGFpbHMgLnRhZ0xpbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4uY29udGFpbmVyIC5zaG9ydC1kZXRhaWxzIC5xdW90ZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvcm1vcmFudCBHYXJhbW9uZFwiLCBzZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdpZHRoOiA2NSU7XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5jb250YWluZXIgLmRldGFpbHMge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAubmFtZUJsb2NrIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNnMgMSBub3JtYWwgYm90aDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLm5hbWVCbG9jazpob3ZlciAuZGl2aWRlciA+IC5zdGljazEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5uYW1lQmxvY2s6aG92ZXIgLmRpdmlkZXIgPiAuc3RpY2syIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLmJpbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDcwJTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG1hcmdpbjogMC40cmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtc3BhY2luZzogMXB4O1xuICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjhzIDEgbm9ybWFsIGJvdGg7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5wcm9qZWN0cy1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogN3B4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zMSk7XG4gIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDFzIDEgbm9ybWFsIGJvdGg7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5wcm9qZWN0cy1saW5rIHNwYW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC43cmVtKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLnByb2plY3RzLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIzODFiO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAucHJvamVjdHMtbGluazpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4ycmVtKTtcbiAgb3BhY2l0eTogMTtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLnByb2plY3RzLWxpbms6aG92ZXIgc3BhbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4ycmVtKTtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLnByb2plY3RzLWxpbms6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBib3gtc2hhZG93OiA0cHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMxKTtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLnByb2plY3RzLWxpbms6OmFmdGVyIHtcbiAgY29udGVudDogXCLCu1wiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIGZvbnQtc2l6ZTogMi43cmVtO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmNvbnRhaW5lciAuc29jaWFsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDNyZW0gM3JlbTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcbiAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMS4ycyAxIG5vcm1hbCBib3RoO1xufVxuLmNvbnRhaW5lciAuc29jaWFsIC5zb2NpYWwtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMuNHJlbTtcbiAgaGVpZ2h0OiAzLjRyZW07XG4gIG1hcmdpbjogMC4ycmVtIDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uY29udGFpbmVyIC5zb2NpYWwgLnNvY2lhbC1pY29uIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5zb2NpYWwgLnNvY2lhbC1pY29uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xufVxuXG4uZGl2aWRlciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2aWRlciAuc3RpY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIG1hcmdpbjogMnB4IDA7XG4gIHdpZHRoOiA3NSU7XG4gIGNsZWFyOiBib3RoO1xufVxuLmRpdmlkZXIgLnN0aWNrMSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjVyZW0pO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5kaXZpZGVyIC5zdGljazIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNXJlbSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmRpdmlkZXI6aG92ZXIgLnN0aWNrMSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS41cmVtKSAhaW1wb3J0YW50O1xufVxuLmRpdmlkZXI6aG92ZXIgLnN0aWNrMiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjVyZW0pICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZC1zaGFwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcbiAgcGFkZGluZzogMC4ycmVtIDJyZW07XG59XG5cbi50YWRhLWFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbjogdGFkYSAxcyBlYXNlLWluLW91dCAwcyAyIG5vcm1hbCBib3RoO1xufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc0MHB4KSBhbmQgKG1pbi13aWR0aDogNDM2cHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LWhlaWdodDogNjYwcHgpIGFuZCAobWluLXdpZHRoOiA0MzZweCkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDZweDtcbiAgfVxuXG4gIC5jb250YWluZXIgLmRldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LWhlaWdodDogNzQwcHgpIHtcbiAgLmNvbnRhaW5lciAuY2FyZCB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIC5wcm9maWxlLWxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFpbmVyIC5kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiA4cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkgYW5kIChtaW4taGVpZ2h0OiAxMDBweCkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuXG4gIC5jb250YWluZXIgLmNhcmQge1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG4gIC5jb250YWluZXIgLnByb2ZpbGUtbG9nbyB7XG4gICAgd2lkdGg6IDE0cmVtO1xuICAgIGhlaWdodDogMTRyZW07XG4gICAgbWFyZ2luLXRvcDogMTRyZW07XG4gIH1cbiAgLmNvbnRhaW5lciAuZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogMTByZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkgYW5kIChtaW4taGVpZ2h0OiAxMDBweCkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDdweDtcbiAgfVxuXG4gIC5jb250YWluZXIgLmRldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDdyZW07XG4gIH1cbiAgLmNvbnRhaW5lciAuc29jaWFsIC5zb2NpYWwtaWNvbiB7XG4gICAgd2lkdGg6IDIuNHJlbTtcbiAgICBoZWlnaHQ6IDIuNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDI3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDEwMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogNXB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciAuc29jaWFsIC5zb2NpYWwtaWNvbiB7XG4gICAgd2lkdGg6IDEuNHJlbTtcbiAgICBoZWlnaHQ6IDEuNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDEwMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMXB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVMZWZ0VG9SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gICAgbGVmdDogLTEwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbGVmdDogMTIwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBkcm9waW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyB0YWRhIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICB9XG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3RyaXBBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KSByb3RhdGVaKDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgcm90YXRlWigtMTZkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi92YXInO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgICAgIHdpZHRoOiA0NXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDEycHggMTFweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDBzIDEgbm9ybWFsIGJvdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtbG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHJlbTtcclxuICAgICAgICB3aWR0aDogMTRyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNS41cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgcGVyc3BlY3RpdmU6IDE1MDBweDtcclxuICAgICAgICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjRzIDEgbm9ybWFsIGJvdGg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjhyZW0gc29saWQgJGNvbG9yMTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnUml0d2ljayBEZXknO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC44cmVtIHNvbGlkICRjb2xvcjM7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdHJpcCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgICAgICBoZWlnaHQ6IDE2LjJyZW07XHJcbiAgICAgICAgd2lkdGg6IDE1MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC04cmVtO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtMTZkZWcpO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBhbmltYXRpb246IHN0cmlwQW5pbWF0aW9uIDFzIGVhc2UtaW4tb3V0IDEuNHMgMSBub3JtYWwgYm90aDtcclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVMZWZ0VG9SaWdodCAxcyBlYXNlLWluLW91dCAwcyAxIG5vcm1hbCBib3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RyaXAtYmxvY2s6aG92ZXIge1xyXG4gICAgICAgIC5zdHJpcDphZnRlciB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUxlZnRUb1JpZ2h0IDFzIGVhc2UtaW4tb3V0IDBzIDEgbm9ybWFsIGJvdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaG9ydC1kZXRhaWxzIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMC40cyAxIG5vcm1hbCBib3RoO1xyXG5cclxuICAgICAgICAudGFnTGluZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5xdW90ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG5cclxuICAgICAgICAubmFtZUJsb2NrIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNnMgMSBub3JtYWwgYm90aDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLmRpdmlkZXI+LnN0aWNrMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kaXZpZGVyPi5zdGljazIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycmVtKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmlvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjRyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd29yZC1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuOHMgMSBub3JtYWwgYm90aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0cy1saW5rIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogN3B4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zMSk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDFzIDEgbm9ybWFsIGJvdGg7XHJcblxyXG4gICAgICAgICAgICAvLyBhbmltYXRpb246IHRhZGEgMXMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgbm9ybWFsIGJvdGg7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuN3JlbSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMnJlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMnJlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDRweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnXFwwMGJiJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNXB4KTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgcGFkZGluZzogM3JlbSAzcmVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNnJlbTtcclxuICAgICAgICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAxLjJzIDEgbm9ybWFsIGJvdGg7XHJcblxyXG4gICAgICAgIC5zb2NpYWwtaWNvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDMuNHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzLjRyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC4ycmVtIDAuNXJlbTtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuc3RpY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0aWNrMSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNXJlbSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0aWNrMiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVyZW0pO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5zdGljazEge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNXJlbSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGljazIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS41cmVtKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnJvdW5kLXNoYXBlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDByZW07XHJcbiAgICBwYWRkaW5nOiAwLjJyZW0gMnJlbTtcclxufVxyXG5cclxuLnRhZGEtYW5pbWF0aW9uIHtcclxuICAgIGFuaW1hdGlvbjogdGFkYSAxcyBlYXNlLWluLW91dCAwcyAyIG5vcm1hbCBib3RoO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc0MHB4KSBhbmQgKG1pbi13aWR0aDogNDM2cHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY2MHB4KSBhbmQgKG1pbi13aWR0aDogNDM2cHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWhlaWdodDogNzQwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIC5wcm9maWxlLWxvZ28ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkgYW5kIChtaW4taGVpZ2h0OiAxMDBweCkge1xyXG4gICAgaHRtbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTB2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9maWxlLWxvZ28ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTRyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMTRyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkgYW5kIChtaW4taGVpZ2h0OiAxMDBweCkge1xyXG4gICAgaHRtbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY2lhbCB7XHJcbiAgICAgICAgICAgIC5zb2NpYWwtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMi40cmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAyNzBweCkgYW5kIChtaW4taGVpZ2h0OiAxMDBweCkge1xyXG4gICAgaHRtbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgLnNvY2lhbCB7XHJcbiAgICAgICAgICAgIC5zb2NpYWwtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNzBweCkgYW5kIChtaW4taGVpZ2h0OiAxMDBweCkge1xyXG4gICAgaHRtbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUxlZnRUb1JpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICAgICAgbGVmdDogLTEwJTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgbGVmdDogMTIwJTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkcm9waW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdGFkYSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAyMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMzAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA0MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA2MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgNzAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA4MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgOTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzdHJpcEFuaW1hdGlvbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KSByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgcm90YXRlWigtMTZkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn0iLCIkYmctY29sb3I6ICMxN2E1OTg7XHJcbiRjb2xvcjE6ICNlNzRjM2M7XHJcbiRjb2xvcjI6ICMyYzNlNTA7XHJcbiRjb2xvcjM6ICNkYjM4MWI7XHJcbiRncmVlbjogIzE3YTU5ODtcclxuJHRleHQtY29sb3I6ICNmZmZmZmY7XHJcbiRibGFjazogIzU1NTtcclxuJG9mZi13aGl0ZTogI2Y4ZjhmODtcclxuJHdoaXRlOiAjZmZmOyJdfQ== */";

    /***/
  },

  /***/"./src/app/profile-card/profile-card.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/profile-card/profile-card.component.ts ***!
    \********************************************************/
  /*! exports provided: ProfileCardComponent */
  /***/
  function srcAppProfileCardProfileCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProfileCardComponent", function () {
      return ProfileCardComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ProfileCardComponent = /*#__PURE__*/function () {
      function ProfileCardComponent(router) {
        _classCallCheck(this, ProfileCardComponent);
        this.router = router;
        this.ExploreMe = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.startTadaAnimation = false;
      }
      _createClass(ProfileCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;
          setInterval(function () {
            _this3.startTadaAnimation = !_this3.startTadaAnimation;
          }, 3000);
        }
      }, {
        key: "onExploreMeClick",
        value: function onExploreMeClick() {
          console.log(123);
          this.ExploreMe.emit();
          this.router.navigateByUrl('/');
        }
      }]);
      return ProfileCardComponent;
    }();
    ProfileCardComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], ProfileCardComponent.prototype, "ExploreMe", void 0);
    ProfileCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-profile-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./profile-card.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/profile-card/profile-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./profile-card.component.scss */"./src/app/profile-card/profile-card.component.scss"))["default"]]
    })], ProfileCardComponent);

    /***/
  },

  /***/"./src/app/profile/profile.component.scss":
  /*!************************************************!*\
    !*** ./src/app/profile/profile.component.scss ***!
    \************************************************/
  /*! exports provided: default */
  /***/
  function srcAppProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/
  /*! exports provided: ProfileComponent */
  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
        this.showNavigationMenu = false;
      }
      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return ProfileComponent;
    }();
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./profile.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("animate", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("* => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(":leave, :enter", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), {
        optional: true
      })])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./profile.component.scss */"./src/app/profile/profile.component.scss"))["default"]]
    })], ProfileComponent);

    /***/
  },

  /***/"./src/app/project-card/project-card.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/project-card/project-card.component.scss ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppProjectCardProjectCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.card-outer {\n  position: relative;\n  font-family: \"Lato\", sans-serif;\n  font-weight: normal;\n  color: #555;\n  cursor: pointer;\n}\n.card-outer:hover .card__front {\n  cursor: pointer;\n  transform: rotateY(180deg);\n}\n.card-outer:hover .card__back {\n  cursor: pointer;\n  transform: rotateY(0deg);\n}\n.card {\n  width: 100%;\n  min-width: 20rem;\n  min-height: 18rem;\n  background: #fff;\n  border-radius: 0.6rem;\n  cursor: pointer;\n  overflow: hidden;\n  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.3);\n  transition: 0.8s ease-in-out;\n  perspective: 15000px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.card.card__front {\n  transform: rotateY(0deg);\n}\n.card.card__back {\n  background: #eee;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transform: rotateY(180deg);\n}\n.card.card__featured::before {\n  content: \"⚝\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  font-size: 1.6rem;\n  padding: 0 0.4rem;\n  color: #fff;\n}\n.card.card__featured:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 3.2rem;\n  height: 3.2rem;\n  background-color: #327e36;\n  transform: rotateZ(45deg) translate(-88%) scale(2);\n}\n.card .card-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 0.6rem 1.6rem;\n  width: 100%;\n  height: 100%;\n}\n.card .card-container .card-header {\n  font-family: \"Cormorant Garamond\", serif;\n  width: 100%;\n  font-size: 2.4rem;\n  margin: 1rem 0;\n  font-weight: bold;\n}\n.card .card-container .card-short-details {\n  width: 100%;\n  flex: 1;\n  font-size: 1.6rem;\n  margin: 0.6rem 0;\n}\n.card .card-container .tech-stuff-details > span {\n  font-weight: bold;\n  display: inline-block;\n}\n.card .card-container .tech-stuff-details > p {\n  display: inline;\n  margin-left: 0.3rem;\n  word-break: break-word;\n}\n.card .card-container .full-width-btn {\n  display: block;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  background: #e74c3c;\n  padding: 0.8rem 0.3rem;\n  line-height: 2;\n  font-size: 1.6rem;\n  color: #fff;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n}\n@-webkit-keyframes slideIn {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n}\n@keyframes slideIn {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n}\n@media (min-width: 1080px) {\n  .card {\n    min-width: 28rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1jYXJkL3Byb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdC1jYXJkL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxwcm9qZWN0LWNhcmRcXHByb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdC1jYXJkL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDS2hCO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURIRjtBQ01JO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FESk47QUNNSTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBREpOO0FDU0E7RUFDRSxXQUFBO0VBQ0EsZ0JBdkJVO0VBd0JWLGlCQXpCVztFQTBCWCxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FETkY7QUNRRTtFQUNFLHdCQUFBO0FETko7QUNTRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBRFBKO0FDV0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBRFROO0FDV0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrREFBQTtBRFROO0FDYUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRFhKO0FDYUk7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRFhOO0FDY0k7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURaTjtBQ2dCTTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QURkUjtBQ2lCTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEZlI7QUNtQkk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQ25IRztFRG9ISCxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QURqQk47QUN1QkE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFRHBCRjtFQ3NCQTtJQUNFLHlCQUFBO0lBQ0EsVUFBQTtFRHBCRjtBQUNGO0FDWUE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFRHBCRjtFQ3NCQTtJQUNFLHlCQUFBO0lBQ0EsVUFBQTtFRHBCRjtBQUNGO0FDdUJBO0VBQ0U7SUFDRSxnQkFBQTtFRHJCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1jYXJkL3Byb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jYXJkLW91dGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNTU1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZC1vdXRlcjpob3ZlciAuY2FyZF9fZnJvbnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLmNhcmQtb3V0ZXI6aG92ZXIgLmNhcmRfX2JhY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgbWluLWhlaWdodDogMThyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiA2cHggNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2UtaW4tb3V0O1xuICBwZXJzcGVjdGl2ZTogMTUwMDBweDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5jYXJkLmNhcmRfX2Zyb250IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xufVxuLmNhcmQuY2FyZF9fYmFjayB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uY2FyZC5jYXJkX19mZWF0dXJlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLimp1cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAwIDAuNHJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyZC5jYXJkX19mZWF0dXJlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMy4ycmVtO1xuICBoZWlnaHQ6IDMuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyN2UzNjtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKSB0cmFuc2xhdGUoLTg4JSkgc2NhbGUoMik7XG59XG4uY2FyZCAuY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDAuNnJlbSAxLjZyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FyZCAuY2FyZC1jb250YWluZXIgLmNhcmQtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IEdhcmFtb25kXCIsIHNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJkIC5jYXJkLWNvbnRhaW5lciAuY2FyZC1zaG9ydC1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBtYXJnaW46IDAuNnJlbSAwO1xufVxuLmNhcmQgLmNhcmQtY29udGFpbmVyIC50ZWNoLXN0dWZmLWRldGFpbHMgPiBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jYXJkIC5jYXJkLWNvbnRhaW5lciAudGVjaC1zdHVmZi1kZXRhaWxzID4gcCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cbi5jYXJkIC5jYXJkLWNvbnRhaW5lciAuZnVsbC13aWR0aC1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xuICBwYWRkaW5nOiAwLjhyZW0gMC4zcmVtO1xuICBsaW5lLWhlaWdodDogMjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDgwcHgpIHtcbiAgLmNhcmQge1xuICAgIG1pbi13aWR0aDogMjhyZW07XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi92YXInO1xyXG5cclxuJG1pbi1oZWlnaHQ6IDE4cmVtO1xyXG4kbWluLXdpZHRoOiAyMHJlbTtcclxuXHJcbi5jYXJkLW91dGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAuY2FyZF9fZnJvbnQge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfX2JhY2sge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XHJcbiAgbWluLWhlaWdodDogJG1pbi1oZWlnaHQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxNXB4IHJnYmEoIzAwMDAwMCwgMC4zKTtcclxuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2UtaW4tb3V0O1xyXG4gIHBlcnNwZWN0aXZlOiAxNTAwMHB4O1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJi5jYXJkX19mcm9udCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgfVxyXG5cclxuICAmLmNhcmRfX2JhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIH1cclxuXHJcbiAgJi5jYXJkX19mZWF0dXJlZCB7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnXFwyNjlEJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICBwYWRkaW5nOiAwIDAuNHJlbTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMy4ycmVtO1xyXG4gICAgICBoZWlnaHQ6IDMuMnJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMyN2UzNjtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKSB0cmFuc2xhdGUoLTg4JSkgc2NhbGUoMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwLjZyZW0gMS42cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtc2hvcnQtZGV0YWlscyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgbWFyZ2luOiAwLjZyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAudGVjaC1zdHVmZi1kZXRhaWxzIHtcclxuICAgICAgJiA+IHNwYW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgJiA+IHAge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZnVsbC13aWR0aC1idG4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3IxO1xyXG4gICAgICBwYWRkaW5nOiAwLjhyZW0gMC4zcmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgLy8gYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDgwcHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICBtaW4td2lkdGg6IDI4cmVtO1xyXG4gIH1cclxufVxyXG4iLCIkYmctY29sb3I6ICMxN2E1OTg7XHJcbiRjb2xvcjE6ICNlNzRjM2M7XHJcbiRjb2xvcjI6ICMyYzNlNTA7XHJcbiRjb2xvcjM6ICNkYjM4MWI7XHJcbiRncmVlbjogIzE3YTU5ODtcclxuJHRleHQtY29sb3I6ICNmZmZmZmY7XHJcbiRibGFjazogIzU1NTtcclxuJG9mZi13aGl0ZTogI2Y4ZjhmODtcclxuJHdoaXRlOiAjZmZmOyJdfQ== */";

    /***/
  },

  /***/"./src/app/project-card/project-card.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/project-card/project-card.component.ts ***!
    \********************************************************/
  /*! exports provided: ProjectCardComponent */
  /***/
  function srcAppProjectCardProjectCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function () {
      return ProjectCardComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ProjectCardComponent = /*#__PURE__*/function () {
      function ProjectCardComponent() {
        _classCallCheck(this, ProjectCardComponent);
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      _createClass(ProjectCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCardClick",
        value: function onCardClick(project) {
          this.select.emit({
            project: project
          });
        }
      }]);
      return ProjectCardComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('project')], ProjectCardComponent.prototype, "project", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('select')], ProjectCardComponent.prototype, "select", void 0);
    ProjectCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-project-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./project-card.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/project-card/project-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./project-card.component.scss */"./src/app/project-card/project-card.component.scss"))["default"]]
    })], ProjectCardComponent);

    /***/
  },

  /***/"./src/app/project-details/project-details.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/project-details/project-details.component.scss ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppProjectDetailsProjectDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.project-details-container {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 990;\n  background-color: rgba(0, 0, 0, 0.4);\n  font-family: Helvetica, Arial, sans-serif;\n}\n.project-details-container .poject-section {\n  margin: 2rem 0;\n}\n.project-details-container .poject-section .project-section__header {\n  display: inline-block;\n  font-size: 2rem;\n}\n.project-details-container .project-details {\n  height: 100vh;\n  width: 75vw;\n  position: relative;\n  margin-left: auto;\n  margin-right: 0;\n  top: 0;\n  right: 0;\n  color: #555;\n  background-color: #f2f2f2;\n  padding: 1.6rem;\n  padding-top: 0;\n  padding-left: 0;\n  z-index: 999;\n  overflow: hidden;\n  overflow-y: auto;\n  box-shadow: -5px 9px 20px rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 640px) {\n  .project-details-container .project-details {\n    width: 95vw;\n  }\n}\n.project-details-container .project-details .project-details-header {\n  position: fixed;\n  width: inherit;\n  background-color: inherit;\n  margin-bottom: 1rem;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n}\n.project-details-container .project-details .project-details-header .project-title {\n  font-size: 3.2rem;\n  padding: 1rem;\n  text-align: center;\n  font-family: \"Cormorant Garamond\", serif;\n}\n@media (max-width: 640px) {\n  .project-details-container .project-details .project-details-header .project-title {\n    text-align: left;\n    font-size: 2.6rem;\n  }\n}\n.project-details-container .project-details .project-details-header .cancellation-icon {\n  width: 2.6rem;\n  display: inline-block;\n  float: left;\n  top: 0;\n  left: 0;\n  margin: 3.5rem 2.5rem;\n  cursor: pointer;\n}\n.project-details-container .project-details .end-section {\n  font-family: \"Cormorant Garamond\", serif;\n  width: inherit;\n  text-align: center;\n  font-weight: bold;\n  font-size: 2rem;\n  margin-top: 2rem;\n  padding: 1rem 0;\n  border-top: 1px solid #555;\n}\n.project-details-container .project-content {\n  width: 80%;\n  margin: auto;\n  margin-top: 12rem;\n  padding-top: 1.5rem;\n  font-size: 1.8rem;\n  letter-spacing: 0.6px;\n}\n.project-details-container .project-content .project-description {\n  margin-bottom: 2rem;\n}\n.project-details-container .project-content .project-links {\n  padding: 1.6rem 0;\n  padding-bottom: 0.5rem;\n}\n.project-details-container .project-content .project-links .project-link {\n  font-weight: bold;\n  padding: 0.6rem 0;\n}\n.project-details-container .project-content .project-links .project-link a {\n  font-weight: normal;\n  color: #17a598;\n  text-decoration: none;\n  font-style: italic;\n}\n.project-details-container .project-content .project-features h4 {\n  font-weight: bold;\n  padding: 0.8rem 0;\n}\n.project-details-container .project-content .project-features .project-features-details {\n  padding-left: 3rem;\n  list-style-type: none;\n}\n.project-details-container .project-content .project-features .project-features-details > li {\n  line-height: 1;\n  line-height: 1.3;\n  padding: 0.4rem 0;\n}\n.project-details-container .project-content .project-features .project-features-details > li::before {\n  content: \"➺\";\n  padding-right: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxwcm9qZWN0LWRldGFpbHNcXHByb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtBREFKO0FDRUk7RUFDSSxjQUFBO0FEQVI7QUNFUTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBREFaO0FDSUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQ3ZCQTtFRHdCQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QURGUjtBQ0lRO0VBbEJKO0lBbUJRLFdBQUE7RUREVjtBQUNGO0FDR1E7RUFDSSxlQUFBO0VBRUEsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBREZaO0FDSVk7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FERmhCO0FDSWdCO0VBTko7SUFPUSxnQkFBQTtJQUNBLGlCQUFBO0VERGxCO0FBQ0Y7QUNJWTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBREZoQjtBQ01RO0VBQ0ksd0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBREpaO0FDUUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FETlI7QUNRUTtFQUNJLG1CQUFBO0FETlo7QUNTUTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7QURQWjtBQ1NZO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBRFBoQjtBQ1NnQjtFQUNJLG1CQUFBO0VBQ0EsY0N4R1o7RUR5R1kscUJBQUE7RUFDQSxrQkFBQTtBRFBwQjtBQ2FZO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBRFhoQjtBQ2NZO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBRFpoQjtBQ2NnQjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEWnBCO0FDZWdCO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FEYnBCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTkwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnBvamVjdC1zZWN0aW9uIHtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucG9qZWN0LXNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbl9faGVhZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDJyZW07XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1kZXRhaWxzIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDc1dnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgY29sb3I6ICM1NTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDEuNnJlbTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2hhZG93OiAtNXB4IDlweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1kZXRhaWxzIHtcbiAgICB3aWR0aDogOTV2dztcbiAgfVxufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtZGV0YWlscyAucHJvamVjdC1kZXRhaWxzLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1kZXRhaWxzIC5wcm9qZWN0LWRldGFpbHMtaGVhZGVyIC5wcm9qZWN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IEdhcmFtb25kXCIsIHNlcmlmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWRldGFpbHMgLnByb2plY3QtZGV0YWlscy1oZWFkZXIgLnByb2plY3QtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gIH1cbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWRldGFpbHMgLnByb2plY3QtZGV0YWlscy1oZWFkZXIgLmNhbmNlbGxhdGlvbi1pY29uIHtcbiAgd2lkdGg6IDIuNnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDMuNXJlbSAyLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWRldGFpbHMgLmVuZC1zZWN0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IEdhcmFtb25kXCIsIHNlcmlmO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNTU1O1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtY29udGVudCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTJyZW07XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1jb250ZW50IC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtbGlua3Mge1xuICBwYWRkaW5nOiAxLjZyZW0gMDtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtbGlua3MgLnByb2plY3QtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwLjZyZW0gMDtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtbGlua3MgLnByb2plY3QtbGluayBhIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMxN2E1OTg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtY29udGVudCAucHJvamVjdC1mZWF0dXJlcyBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwLjhyZW0gMDtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtZmVhdHVyZXMgLnByb2plY3QtZmVhdHVyZXMtZGV0YWlscyB7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtY29udGVudCAucHJvamVjdC1mZWF0dXJlcyAucHJvamVjdC1mZWF0dXJlcy1kZXRhaWxzID4gbGkge1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgcGFkZGluZzogMC40cmVtIDA7XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1jb250ZW50IC5wcm9qZWN0LWZlYXR1cmVzIC5wcm9qZWN0LWZlYXR1cmVzLWRldGFpbHMgPiBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLinrpcIjtcbiAgcGFkZGluZy1yaWdodDogMC41ZW07XG59IiwiQGltcG9ydCAnLi4vdmFyJztcclxuXHJcbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTkwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwMDAwLCAwLjQpO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgLnBvamVjdC1zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuXHJcbiAgICAgICAgLnByb2plY3Qtc2VjdGlvbl9faGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0LWRldGFpbHMge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgd2lkdGg6IDc1dnc7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNnJlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBib3gtc2hhZG93OiAtNXB4IDlweCAyMHB4IHJnYmEoIzAwMDAwMCwgMC4zKTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NXZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3QtZGV0YWlscy1oZWFkZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIC8vIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMik7XHJcblxyXG4gICAgICAgICAgICAucHJvamVjdC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuMnJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjZyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYW5jZWxsYXRpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMi42cmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzLjVyZW0gMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZW5kLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xyXG4gICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0LWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycmVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG5cclxuICAgICAgICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdC1saW5rcyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNnJlbSAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG5cclxuICAgICAgICAgICAgLnByb2plY3QtbGluayB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdC1mZWF0dXJlcyB7XHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC44cmVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWZlYXR1cmVzLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICY+bGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC40cmVtIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJj5saTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFwyN0JBJztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRiZy1jb2xvcjogIzE3YTU5ODtcclxuJGNvbG9yMTogI2U3NGMzYztcclxuJGNvbG9yMjogIzJjM2U1MDtcclxuJGNvbG9yMzogI2RiMzgxYjtcclxuJGdyZWVuOiAjMTdhNTk4O1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJsYWNrOiAjNTU1O1xyXG4kb2ZmLXdoaXRlOiAjZjhmOGY4O1xyXG4kd2hpdGU6ICNmZmY7Il19 */";

    /***/
  },

  /***/"./src/app/project-details/project-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/project-details/project-details.component.ts ***!
    \**************************************************************/
  /*! exports provided: ProjectDetailsComponent */
  /***/
  function srcAppProjectDetailsProjectDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function () {
      return ProjectDetailsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    var ProjectDetailsComponent = /*#__PURE__*/function () {
      function ProjectDetailsComponent(renderer) {
        _classCallCheck(this, ProjectDetailsComponent);
        this.renderer = renderer;
        this.cancellation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      _createClass(ProjectDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.renderer.addClass(document.body, 'isSideDrawerOpen');
        }
      }, {
        key: "onCancellation",
        value: function onCancellation(e) {
          var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var cancelAttribute = force || e.target.attributes.getNamedItem('enable-cancellation');
          if (force || cancelAttribute && cancelAttribute.value) this.cancellation.emit();
          this.renderer.removeClass(document.body, 'isSideDrawerOpen');
        }
      }]);
      return ProjectDetailsComponent;
    }();
    ProjectDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('project')], ProjectDetailsComponent.prototype, "project", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('cancellation')], ProjectDetailsComponent.prototype, "cancellation", void 0);
    ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-project-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./project-details.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/project-details/project-details.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(0%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(0%)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(100%)',
        offset: 1
      })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(100%)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(0%)',
        offset: 1
      })]))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./project-details.component.scss */"./src/app/project-details/project-details.component.scss"))["default"]]
    })], ProjectDetailsComponent);

    /***/
  },

  /***/"./src/app/projects/projects.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/projects/projects.component.scss ***!
    \**************************************************/
  /*! exports provided: default */
  /***/
  function srcAppProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".project-container {\n  width: 70%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n}\n.project-container .project-card {\n  padding: 1rem;\n  flex-basis: 33.3%;\n  transition: all 0.5s ease-in-out;\n}\n@media (max-width: 1300px) {\n  .project-container {\n    width: 90%;\n  }\n  .project-container .project-card {\n    flex-basis: 33.3%;\n  }\n}\n@media (max-width: 970px) {\n  .project-container {\n    width: 95%;\n  }\n  .project-container .project-card {\n    flex-basis: 50%;\n  }\n}\n@media (max-width: 660px) {\n  .project-container {\n    width: 90%;\n  }\n  .project-container .project-card {\n    flex-basis: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvRDpcXHdvcmtzcGFjZVxcbXlfdXBkYXRlZF9wb3J0Zm9saW8vc3JjXFxhcHBcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ0NOO0FER0U7RUFDRTtJQUNFLFVBQUE7RUNBSjtFRENJO0lBQ0UsaUJBQUE7RUNDTjtBQUNGO0FER0U7RUFDRTtJQUNFLFVBQUE7RUNESjtFREVJO0lBQ0UsZUFBQTtFQ0FOO0FBQ0Y7QURJRTtFQUNFO0lBQ0UsVUFBQTtFQ0ZKO0VER0k7SUFDRSxnQkFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICBcclxuICAgIC5wcm9qZWN0LWNhcmQge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBmbGV4LWJhc2lzOiAzMy4zJTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIC5wcm9qZWN0LWNhcmQge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDMzLjMlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NzBweCkge1xyXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgLnByb2plY3QtY2FyZCB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICAgLnByb2plY3QtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgLnByb2plY3QtY2FyZCB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiLCIucHJvamVjdC1jb250YWluZXIge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ucHJvamVjdC1jb250YWluZXIgLnByb2plY3QtY2FyZCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZsZXgtYmFzaXM6IDMzLjMlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAucHJvamVjdC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LWNhcmQge1xuICAgIGZsZXgtYmFzaXM6IDMzLjMlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTcwcHgpIHtcbiAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC1jYXJkIHtcbiAgICBmbGV4LWJhc2lzOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xuICAucHJvamVjdC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LWNhcmQge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gIH1cbn0iXX0= */";

    /***/
  },

  /***/"./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/
  /*! exports provided: ProjectsComponent */
  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/animations */"./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */
    var _services_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./../services/tags.service */"./src/app/services/tags.service.ts");
    /* harmony import */
    var _services_project_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./../services/project-data.service */"./src/app/services/project-data.service.ts");
    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(tagsService, projectService) {
        _classCallCheck(this, ProjectsComponent);
        this.tagsService = tagsService;
        this.projectService = projectService;
      }
      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;
          this.renderProjects();
          this.tagSubscription$ = this.tagsService.onTagUpdate;
          this.tagSubscription$.subscribe(function () {
            if (_this4.projects.length === 0) _this4.renderProjects();else _this4.projects = [];
          });
        }
      }, {
        key: "onProjectCardClick",
        value: function onProjectCardClick(data) {
          this.selectedProject = data.project;
        }
      }, {
        key: "renderProjects",
        value: function renderProjects() {
          var _this5 = this;
          this.projects = this.projectService.getProjects().filter(function (project) {
            return _this5.tagsService.tags.filter(function (tag) {
              return tag.isSelected;
            }).reduce(function (prev, tag) {
              return prev || project.tags.indexOf(tag.displayName.toLowerCase()) !== -1;
            }, false);
          });
        }
      }]);
      return ProjectsComponent;
    }();
    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"]
      }, {
        type: _services_project_data_service__WEBPACK_IMPORTED_MODULE_4__["ProjectDataService"]
      }];
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./projects.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(-25%)',
        opacity: 0
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0%)',
        opacity: 1
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('0.05s', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(-25%)',
        opacity: 0,
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0%)',
        opacity: 1,
        offset: 1
      })]))])], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('0.05s', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0%)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(-25%)',
        opacity: 0,
        offset: 1
      })]))])], {
        optional: true
      })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animateChildren', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*, :enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()], {
        optional: true
      })])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./projects.component.scss */"./src/app/projects/projects.component.scss"))["default"]]
    })], ProjectsComponent);

    /***/
  },

  /***/"./src/app/services/project-data.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/project-data.service.ts ***!
    \**************************************************/
  /*! exports provided: ProjectDataService */
  /***/
  function srcAppServicesProjectDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectDataService", function () {
      return ProjectDataService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _utils_project_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../utils/project-data */"./src/app/utils/project-data.ts");
    var ProjectDataService = /*#__PURE__*/function () {
      function ProjectDataService() {
        _classCallCheck(this, ProjectDataService);
      }
      _createClass(ProjectDataService, [{
        key: "getProjects",
        value: function getProjects() {
          return _utils_project_data__WEBPACK_IMPORTED_MODULE_2__["ALL_PROJECT_DATA"];
        }
      }]);
      return ProjectDataService;
    }();
    ProjectDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectDataService);

    /***/
  },

  /***/"./src/app/services/skills.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/skills.service.ts ***!
    \********************************************/
  /*! exports provided: SkillsService */
  /***/
  function srcAppServicesSkillsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SkillsService", function () {
      return SkillsService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _utils_data_skills_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../utils/data/skills.data */"./src/app/utils/data/skills.data.ts");
    var SkillsService = /*#__PURE__*/function () {
      function SkillsService() {
        _classCallCheck(this, SkillsService);
      }
      _createClass(SkillsService, [{
        key: "getSkills",
        value: function getSkills() {
          return _utils_data_skills_data__WEBPACK_IMPORTED_MODULE_2__["SKILLS_DATA"];
        }
      }]);
      return SkillsService;
    }();
    SkillsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SkillsService);

    /***/
  },

  /***/"./src/app/services/tags.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/tags.service.ts ***!
    \******************************************/
  /*! exports provided: TagsService */
  /***/
  function srcAppServicesTagsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TagsService", function () {
      return TagsService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _utils_tags_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../utils/tags-data */"./src/app/utils/tags-data.ts");
    var TagsService = /*#__PURE__*/function () {
      function TagsService() {
        _classCallCheck(this, TagsService);
        this.onTagUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tags = _utils_tags_data__WEBPACK_IMPORTED_MODULE_2__["tagData"];
      }
      _createClass(TagsService, [{
        key: "toggleSelection",
        value: function toggleSelection(tagName) {
          var totoalSelection = this.tags.reduce(function (prev, current) {
            return prev + (current.isSelected ? 1 : 0);
          }, 0);
          var selectedSkill = this.tags.find(function (e) {
            return e.displayName === tagName;
          });
          if (totoalSelection <= 1 && selectedSkill.isSelected) return;
          selectedSkill.isSelected = !selectedSkill.isSelected;
          this.onTagUpdate.emit({
            tags: this.tags.filter(function (e) {
              return e.isSelected;
            })
          });
        }
      }]);
      return TagsService;
    }();
    TagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], TagsService);

    /***/
  },

  /***/"./src/app/typing/typing.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/typing/typing.component.scss ***!
    \**********************************************/
  /*! exports provided: default */
  /***/
  function srcAppTypingTypingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".text {\n  display: inline-block;\n}\n\n.cursor {\n  content: \"|\";\n  display: inline-block;\n}\n\n.cursor__animate {\n  -webkit-animation: fadeInOut 0.8s cubic-bezier(1, -0.18, 0, 1.35) 0.5s infinite;\n          animation: fadeInOut 0.8s cubic-bezier(1, -0.18, 0, 1.35) 0.5s infinite;\n}\n\n@-webkit-keyframes fadeInOut {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeInOut {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwaW5nL0Q6XFx3b3Jrc3BhY2VcXG15X3VwZGF0ZWRfcG9ydGZvbGlvL3NyY1xcYXBwXFx0eXBpbmdcXHR5cGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHlwaW5nL3R5cGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLCtFQUFBO1VBQUEsdUVBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksVUFBQTtFQ0NOO0VERUU7SUFDSSxVQUFBO0VDQU47QUFDRjs7QURQQTtFQUNJO0lBQ0ksVUFBQTtFQ0NOO0VERUU7SUFDSSxVQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3R5cGluZy90eXBpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jdXJzb3Ige1xyXG4gICAgY29udGVudDogJ3wnO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY3Vyc29yX19hbmltYXRlIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluT3V0IDAuOHMgY3ViaWMtYmV6aWVyKDEsIC0wLjE4LCAwLCAxLjM1KSAwLjVzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbk91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59IiwiLnRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jdXJzb3Ige1xuICBjb250ZW50OiBcInxcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY3Vyc29yX19hbmltYXRlIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgMC44cyBjdWJpYy1iZXppZXIoMSwgLTAuMTgsIDAsIDEuMzUpIDAuNXMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluT3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";

    /***/
  },

  /***/"./src/app/typing/typing.component.ts":
  /*!********************************************!*\
    !*** ./src/app/typing/typing.component.ts ***!
    \********************************************/
  /*! exports provided: TypingComponent */
  /***/
  function srcAppTypingTypingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TypingComponent", function () {
      return TypingComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var TypingComponent = /*#__PURE__*/function () {
      function TypingComponent() {
        _classCallCheck(this, TypingComponent);
        this.text = "";
        this.time = 1000;
        this.delay = 500;
        this.displayText = "";
        this.isProcessRunning = false;
      }
      _createClass(TypingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.text) this.startRendering();
        }
      }, {
        key: "startRendering",
        value: function startRendering() {
          var _this6 = this;
          this.displayText = "";
          if (!this.isProcessRunning) {
            setTimeout(function () {
              var eachTime = Math.round(_this6.time / _this6.text.length);
              var textArr = _this6.text.split('');
              _this6.renderTextByLetter(textArr, eachTime);
            }, this.delay);
          }
          this.isProcessRunning = true;
        }
      }, {
        key: "renderTextByLetter",
        value: function renderTextByLetter(textArr, timeInterval) {
          var _this7 = this;
          var letter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : textArr[0];
          if (!textArr || textArr.length <= 0) {
            var cursor = this.cursorRef.nativeElement;
            cursor.classList.add("cursor__animation");
            this.isProcessRunning = false;
            return;
          }
          setTimeout(function () {
            _this7.displayText += letter;
            var nextTextArr = textArr.slice(1);
            _this7.renderTextByLetter(nextTextArr, timeInterval);
          }, timeInterval);
        }
      }]);
      return TypingComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("text")], TypingComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("time")], TypingComponent.prototype, "time", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("delay")], TypingComponent.prototype, "delay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cursor', {
      "static": true
    })], TypingComponent.prototype, "cursorRef", void 0);
    TypingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-typing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./typing.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/typing/typing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./typing.component.scss */"./src/app/typing/typing.component.scss"))["default"]]
    })], TypingComponent);

    /***/
  },

  /***/"./src/app/ui/back-icon/back-icon/back-icon.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/ui/back-icon/back-icon/back-icon.component.scss ***!
    \*****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUiBackIconBackIconBackIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".icon {\n  width: 100%;\n  height: 100%;\n  max-width: 25rem;\n  max-height: 25rem;\n  display: inline-block;\n}\n.icon img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvYmFjay1pY29uL2JhY2staWNvbi9EOlxcd29ya3NwYWNlXFxteV91cGRhdGVkX3BvcnRmb2xpby9zcmNcXGFwcFxcdWlcXGJhY2staWNvblxcYmFjay1pY29uXFxiYWNrLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2JhY2staWNvbi9iYWNrLWljb24vYmFjay1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNDSjtBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3VpL2JhY2staWNvbi9iYWNrLWljb24vYmFjay1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xyXG4gICAgbWF4LWhlaWdodDogMjVyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIuaWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMjVyZW07XG4gIG1heC1oZWlnaHQ6IDI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaWNvbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/ui/back-icon/back-icon/back-icon.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ui/back-icon/back-icon/back-icon.component.ts ***!
    \***************************************************************/
  /*! exports provided: BackIconComponent */
  /***/
  function srcAppUiBackIconBackIconBackIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BackIconComponent", function () {
      return BackIconComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var BackIconComponent = /*#__PURE__*/function () {
      function BackIconComponent() {
        _classCallCheck(this, BackIconComponent);
      }
      _createClass(BackIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return BackIconComponent;
    }();
    BackIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-back-icon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./back-icon.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/ui/back-icon/back-icon/back-icon.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./back-icon.component.scss */"./src/app/ui/back-icon/back-icon/back-icon.component.scss"))["default"]]
    })], BackIconComponent);

    /***/
  },

  /***/"./src/app/ui/cross-icon/cross-icon.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/ui/cross-icon/cross-icon.component.scss ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppUiCrossIconCrossIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".icon {\n  width: 100%;\n  height: 100%;\n  max-width: 25rem;\n  max-height: 25rem;\n  display: inline-block;\n}\n.icon img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY3Jvc3MtaWNvbi9EOlxcd29ya3NwYWNlXFxteV91cGRhdGVkX3BvcnRmb2xpby9zcmNcXGFwcFxcdWlcXGNyb3NzLWljb25cXGNyb3NzLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2Nyb3NzLWljb24vY3Jvc3MtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC91aS9jcm9zcy1pY29uL2Nyb3NzLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjVyZW07XHJcbiAgICBtYXgtaGVpZ2h0OiAyNXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufSIsIi5pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyNXJlbTtcbiAgbWF4LWhlaWdodDogMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5pY29uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";

    /***/
  },

  /***/"./src/app/ui/cross-icon/cross-icon.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ui/cross-icon/cross-icon.component.ts ***!
    \*******************************************************/
  /*! exports provided: CrossIconComponent */
  /***/
  function srcAppUiCrossIconCrossIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CrossIconComponent", function () {
      return CrossIconComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var CrossIconComponent = /*#__PURE__*/function () {
      function CrossIconComponent() {
        _classCallCheck(this, CrossIconComponent);
      }
      _createClass(CrossIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return CrossIconComponent;
    }();
    CrossIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cross-icon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./cross-icon.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/ui/cross-icon/cross-icon.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./cross-icon.component.scss */"./src/app/ui/cross-icon/cross-icon.component.scss"))["default"]]
    })], CrossIconComponent);

    /***/
  },

  /***/"./src/app/utils/data/abe.data.ts":
  /*!****************************************!*\
    !*** ./src/app/utils/data/abe.data.ts ***!
    \****************************************/
  /*! exports provided: Abe */
  /***/
  function srcAppUtilsDataAbeDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Abe", function () {
      return Abe;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Abe = {
      id: '7',
      name: 'Abe (MERN Stack)',
      description: 'Abe is the next-gen sports betting intelligence platform that helps you find the best odds for the bet you want to make. \
    This web site was built on Wordpress and I rebuilt this with React Gastsby.',
      // Technologies: React, React Gatsby, Graphql, Contentful, Python, AWS ',
      projectLink: null,
      liveUrl: 'https://www.abebets.com/',
      isFeatured: false,
      features: ["Added new pages and components for insight and blog pages", "Rebuilt everything using React Gatsby and migrated all assets to Contentful", "Worked on replacing libraries and rebuilding components for minimized bundle size", "Worked on SEO optimizations and accessibility integration and got up to 90% SEO score"],
      tags: ["react.js", "Gatsby", "Graphql", "Contentful", "python", "aws"],
      techStuff: ['React', 'Gatsby', 'Graphql', "Contentful", "Python", "AWS"],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/data/advinow.data.ts":
  /*!********************************************!*\
    !*** ./src/app/utils/data/advinow.data.ts ***!
    \********************************************/
  /*! exports provided: Advinow */
  /***/
  function srcAppUtilsDataAdvinowDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Advinow", function () {
      return Advinow;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Advinow = {
      id: '10',
      name: 'advinow',
      description: 'This is the healthcare project when I built with adviNOW Medical company based in Scottsdale, Arizona, the states.',
      projectLink: null,
      liveUrl: 'http://tools.advinow.net/WebKiosk/',
      isFeatured: false,
      features: ["Improved SEO", "Using Angular 9", "Using GraphQL to increase dev speed and improve the performance of the app"],
      tags: ["angular", "graphql", "aws"],
      techStuff: ['Angular', 'GraphQL', "AWS"],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/data/aradas.data.ts":
  /*!*******************************************!*\
    !*** ./src/app/utils/data/aradas.data.ts ***!
    \*******************************************/
  /*! exports provided: Aradas */
  /***/
  function srcAppUtilsDataAradasDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Aradas", function () {
      return Aradas;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Aradas = {
      id: '2',
      name: 'Aradas',
      description: 'Customer Software Development Site',
      projectLink: null,
      liveUrl: 'https://ardas-it.com',
      isFeatured: false,
      features: [],
      tags: ['laravel'],
      techStuff: ['laravel', 'jQuery & Bootstap 5', 'HTML & CSS'],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/data/balyans.data.ts":
  /*!********************************************!*\
    !*** ./src/app/utils/data/balyans.data.ts ***!
    \********************************************/
  /*! exports provided: Baliyans */
  /***/
  function srcAppUtilsDataBalyansDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Baliyans", function () {
      return Baliyans;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Baliyans = {
      id: '9',
      name: 'baliyans (MEAN Stack)',
      description: 'This website provides IAS(International Accounting Standards) test series designed by experts, comprehensive video lectures. So the users will be ready to face the toughest examination in the world with the confidence.',
      projectLink: null,
      liveUrl: 'https://baliyans.com/',
      isFeatured: false,
      features: ["Optimized application performance and user experience by implementing caching, lazy loading, and other techniques", "Using Angular 9, got up to 95% SEO score", "Using MongoDB to imporove the performance of the app"],
      tags: ["angular", "mongodb", "aws"],
      techStuff: ['Angular', 'Mongodb', "AWS"],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/data/fit4bond.data.ts":
  /*!*********************************************!*\
    !*** ./src/app/utils/data/fit4bond.data.ts ***!
    \*********************************************/
  /*! exports provided: Fire4Bond */
  /***/
  function srcAppUtilsDataFit4bondDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Fire4Bond", function () {
      return Fire4Bond;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Fire4Bond = {
      id: '3',
      name: 'fit4bond',
      description: 'Custom Tailoring Software Site',
      projectLink: null,
      liveUrl: 'https://www.fit4bond.net/',
      isFeatured: false,
      features: [],
      tags: ['angular'],
      techStuff: ['angular', 'tailwind'],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/data/godaddy.data.ts":
  /*!********************************************!*\
    !*** ./src/app/utils/data/godaddy.data.ts ***!
    \********************************************/
  /*! exports provided: GoDaddy */
  /***/
  function srcAppUtilsDataGodaddyDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GoDaddy", function () {
      return GoDaddy;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var GoDaddy = {
      id: '6',
      name: 'GoDaddy',
      description: 'Food Delivery Online Site',
      projectLink: null,
      liveUrl: 'https://www.godaddy.com/',
      isFeatured: false,
      features: [],
      tags: ['spring mvc'],
      techStuff: ['Spring MVC', 'JSP', 'Oracle'],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/data/herotraveler.data.ts":
  /*!*************************************************!*\
    !*** ./src/app/utils/data/herotraveler.data.ts ***!
    \*************************************************/
  /*! exports provided: Herotraveler */
  /***/
  function srcAppUtilsDataHerotravelerDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Herotraveler", function () {
      return Herotraveler;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Herotraveler = {
      id: '11',
      name: 'Herotraveler(MEVN Stack)',
      description: 'Hero Traveler is a new travel media and entertainment platform, powered by a curated community of travel creators and influencers..',
      projectLink: null,
      liveUrl: 'https://herotraveler.com/',
      isFeatured: false,
      features: ["Worked as a full engineer, vue for frontend. ", "Created of different reusable components on the company-specific component library ", "Actively reviewed pull requests from different team members."],
      tags: ["vue.js", "django", "aws"],
      techStuff: ['Vue.js', 'Django', "AWS"],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/data/printcloud.data.ts":
  /*!***********************************************!*\
    !*** ./src/app/utils/data/printcloud.data.ts ***!
    \***********************************************/
  /*! exports provided: PrintCloud */
  /***/
  function srcAppUtilsDataPrintcloudDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PrintCloud", function () {
      return PrintCloud;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var PrintCloud = {
      id: '1',
      name: 'Print Cloud',
      description: 'Printing Service online site',
      projectLink: null,
      liveUrl: 'https://printcloud.ca/',
      isFeatured: false,
      features: [],
      tags: ['laravel'],
      techStuff: ['laravel', 'jQuery & Bootstap 4'],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/data/shashlikyan.data.ts":
  /*!************************************************!*\
    !*** ./src/app/utils/data/shashlikyan.data.ts ***!
    \************************************************/
  /*! exports provided: ShashlikYan */
  /***/
  function srcAppUtilsDataShashlikyanDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ShashlikYan", function () {
      return ShashlikYan;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var ShashlikYan = {
      id: '12',
      name: 'ShashlikYan',
      description: 'This is called “ShashlikYan kebab shop” is a eCommerce website that sells food to consumers.',
      projectLink: null,
      liveUrl: 'https://shashlikyan.ua/',
      isFeatured: false,
      features: ["Worked as a full engineer, Nuxt.js for frontend. "],
      tags: ["vue.js", "nuxt.js", "aws"],
      techStuff: ['Vue.js', 'Nuxt.js', 'Django', "AWS"],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/data/skills.data.ts":
  /*!*******************************************!*\
    !*** ./src/app/utils/data/skills.data.ts ***!
    \*******************************************/
  /*! exports provided: SKILLS_DATA */
  /***/
  function srcAppUtilsDataSkillsDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SKILLS_DATA", function () {
      return SKILLS_DATA;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var SKILLS_DATA = [{
      type: 'Programming Language',
      names: ["Node.js", "Typescript", "PHP", "python", "java", "C#", 'HTML5', 'XML', 'CSS', 'SASS', 'Less']
    }, {
      type: 'Backend',
      names: ['Express.js', 'Spring MVC', 'Spring Boot', 'ASP.NET', 'Laravel', 'Symfony', 'Django']
    }, {
      type: 'Frontend',
      names: ['Angular', 'React.js', 'Vue.js', 'Next.js', 'Nuxt.js']
    }, {
      type: 'Database & ORM',
      names: ['SQL Server', 'MongoDB', 'Entity Framework', 'Mongoose']
    }, {
      type: 'Cloud',
      names: ['Azure Web Service & Storage', 'Firebase DB & Functions', 'Heroku']
    }, {
      type: 'Testing',
      names: ['Jest', 'Mocha']
    }, {
      type: 'Others',
      names: ['Git & GitHub', 'CI/CD', 'REST API', 'JWT', 'Auth0', 'Jenkins', 'Travis CI', 'JIRA', 'Confluence']
    }];

    /***/
  },

  /***/"./src/app/utils/data/sweet.data.ts":
  /*!******************************************!*\
    !*** ./src/app/utils/data/sweet.data.ts ***!
    \******************************************/
  /*! exports provided: SweetIo */
  /***/
  function srcAppUtilsDataSweetDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SweetIo", function () {
      return SweetIo;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var SweetIo = {
      id: '13',
      name: 'sweet.io',
      description: 'Sweet is a NFT marketplace where the users can buy, sell and trade.\
    Here you can build your own awesome collection or show off how big of a fan you are for your favorite sports teams such as the New York Knicks, Chicago Blackhawks, McLaren, the Australian Open, and so on.',
      projectLink: null,
      liveUrl: 'https://sweet.io',
      isFeatured: false,
      features: ["Blochain and Dapp, NFT development. "],
      tags: ["ethereum", "NFT"],
      techStuff: ['NFT', 'ethereum', 'solidty'],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/data/trust-pilot.data.ts":
  /*!************************************************!*\
    !*** ./src/app/utils/data/trust-pilot.data.ts ***!
    \************************************************/
  /*! exports provided: TrustPilot */
  /***/
  function srcAppUtilsDataTrustPilotDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TrustPilot", function () {
      return TrustPilot;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var TrustPilot = {
      id: '5',
      name: 'Trustpilot',
      description: 'Online Shopping Site',
      projectLink: null,
      liveUrl: 'https://www.trustpilot.com/review/minisplits4less.com',
      isFeatured: false,
      features: [],
      tags: ['react.js', 'spring mvc'],
      techStuff: ['React.js', 'tailwind', 'Spring MVC'],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/data/uber-eats.data.ts":
  /*!**********************************************!*\
    !*** ./src/app/utils/data/uber-eats.data.ts ***!
    \**********************************************/
  /*! exports provided: UberDelibery */
  /***/
  function srcAppUtilsDataUberEatsDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UberDelibery", function () {
      return UberDelibery;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var UberDelibery = {
      id: '4',
      name: 'Uber Eats Home',
      description: 'Food Delivery Online Site',
      projectLink: null,
      liveUrl: 'https://www.ubereats.com/',
      isFeatured: false,
      features: [],
      tags: ['react.js'],
      techStuff: ['React.js', 'tailwind', 'Spring MVC'],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/data/wunderflats.ts":
  /*!*******************************************!*\
    !*** ./src/app/utils/data/wunderflats.ts ***!
    \*******************************************/
  /*! exports provided: Wonderflats */
  /***/
  function srcAppUtilsDataWunderflatsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Wonderflats", function () {
      return Wonderflats;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Wonderflats = {
      id: '8',
      name: 'Wonderflats',
      description: 'This is a house renting platform that is verified and complete online booking for relocation, business or students.',
      // Technologies: React, React Gatsby, Graphql, Contentful, Python, AWS ',
      projectLink: null,
      liveUrl: 'https://wunderflats.com/en',
      isFeatured: false,
      features: ["Using Next.js, Worked on SEO optimizations and accessibility integration and got up to 90% SEO score"],
      tags: ["react.js", "next.js", "Graphql", "aws"],
      techStuff: ['React', 'next.js', 'Graphql', "AWS"],
      additionalData: []
    };

    /***/
  },

  /***/"./src/app/utils/project-data.ts":
  /*!***************************************!*\
    !*** ./src/app/utils/project-data.ts ***!
    \***************************************/
  /*! exports provided: ALL_PROJECT_DATA */
  /***/
  function srcAppUtilsProjectDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ALL_PROJECT_DATA", function () {
      return ALL_PROJECT_DATA;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../environments/environment */"./src/environments/environment.ts");
    /* harmony import */
    var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./utils */"./src/app/utils/utils.ts");
    /* harmony import */
    var _data_printcloud_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./data/printcloud.data */"./src/app/utils/data/printcloud.data.ts");
    /* harmony import */
    var _data_aradas_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./data/aradas.data */"./src/app/utils/data/aradas.data.ts");
    /* harmony import */
    var _data_fit4bond_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./data/fit4bond.data */"./src/app/utils/data/fit4bond.data.ts");
    /* harmony import */
    var _data_uber_eats_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./data/uber-eats.data */"./src/app/utils/data/uber-eats.data.ts");
    /* harmony import */
    var _data_trust_pilot_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./data/trust-pilot.data */"./src/app/utils/data/trust-pilot.data.ts");
    /* harmony import */
    var _data_godaddy_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./data/godaddy.data */"./src/app/utils/data/godaddy.data.ts");
    /* harmony import */
    var _data_abe_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./data/abe.data */"./src/app/utils/data/abe.data.ts");
    /* harmony import */
    var _data_wunderflats__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./data/wunderflats */"./src/app/utils/data/wunderflats.ts");
    /* harmony import */
    var _data_balyans_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./data/balyans.data */"./src/app/utils/data/balyans.data.ts");
    /* harmony import */
    var _data_advinow_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./data/advinow.data */"./src/app/utils/data/advinow.data.ts");
    /* harmony import */
    var _data_herotraveler_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./data/herotraveler.data */"./src/app/utils/data/herotraveler.data.ts");
    /* harmony import */
    var _data_shashlikyan_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./data/shashlikyan.data */"./src/app/utils/data/shashlikyan.data.ts");
    /* harmony import */
    var _data_sweet_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./data/sweet.data */"./src/app/utils/data/sweet.data.ts");
    var getAllProject = function getAllProject() {
      var projects = [_data_abe_data__WEBPACK_IMPORTED_MODULE_9__["Abe"], _data_wunderflats__WEBPACK_IMPORTED_MODULE_10__["Wonderflats"], _data_balyans_data__WEBPACK_IMPORTED_MODULE_11__["Baliyans"], _data_advinow_data__WEBPACK_IMPORTED_MODULE_12__["Advinow"], _data_herotraveler_data__WEBPACK_IMPORTED_MODULE_13__["Herotraveler"], _data_shashlikyan_data__WEBPACK_IMPORTED_MODULE_14__["ShashlikYan"], _data_sweet_data__WEBPACK_IMPORTED_MODULE_15__["SweetIo"], _data_printcloud_data__WEBPACK_IMPORTED_MODULE_3__["PrintCloud"], _data_aradas_data__WEBPACK_IMPORTED_MODULE_4__["Aradas"], _data_fit4bond_data__WEBPACK_IMPORTED_MODULE_5__["Fire4Bond"], _data_uber_eats_data__WEBPACK_IMPORTED_MODULE_6__["UberDelibery"], _data_trust_pilot_data__WEBPACK_IMPORTED_MODULE_7__["TrustPilot"], _data_godaddy_data__WEBPACK_IMPORTED_MODULE_8__["GoDaddy"]];
      if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        var result = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["testUniqueness"])(projects, function (project) {
          return project.id;
        });
        if (result.error) {
          var errorLog = [];
          result.duplicates.forEach(function (project) {
            errorLog.push("Duplicate E-id ".concat(project.id, " of ").concat(project.name, " "));
          });
          throw new Error(JSON.stringify(errorLog));
        }
      }
      return projects;
    };
    var ALL_PROJECT_DATA = getAllProject();

    /***/
  },

  /***/"./src/app/utils/tags-data.ts":
  /*!************************************!*\
    !*** ./src/app/utils/tags-data.ts ***!
    \************************************/
  /*! exports provided: tagData */
  /***/
  function srcAppUtilsTagsDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "tagData", function () {
      return tagData;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var tagData = [{
      displayName: 'Angular',
      isSelected: true
    }, {
      displayName: 'React.js',
      isSelected: true
    }, {
      displayName: 'Vue.js',
      isSelected: true
    }, {
      displayName: 'Spring MVC',
      isSelected: true
    }, {
      displayName: 'Laravel',
      isSelected: true
    }, {
      displayName: 'Others',
      isSelected: !true
    }];

    /***/
  },

  /***/"./src/app/utils/utils.ts":
  /*!********************************!*\
    !*** ./src/app/utils/utils.ts ***!
    \********************************/
  /*! exports provided: testUniqueness */
  /***/
  function srcAppUtilsUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "testUniqueness", function () {
      return testUniqueness;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var testUniqueness = function testUniqueness(allData, uKeyFn) {
      var result = {
        error: null,
        duplicates: []
      };
      allData.forEach(function (data, i, alldata) {
        if (alldata.filter(function (p) {
          return uKeyFn(p) === uKeyFn(data);
        }).length !== 1) {
          result.error = 'Duplicate Key';
          result.duplicates.push(data);
        }
      });
      return result;
    };

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! D:\workspace\my_updated_portfolio\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map