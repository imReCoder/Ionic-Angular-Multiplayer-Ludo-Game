function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-play-game-play-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game-play/game-play.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game-play/game-play.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGamePlayGamePlayPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-content class=\"padding\">\r\n  <!-- <h1>{{pieces[turn]}} turn</h1>\r\n  <ion-input [(ngModel)]=\"random\"></ion-input> -->\r\n\r\n  <div class=\"main\">\r\n    <div class=\"main-dice\">\r\n      <div class=\"dice-red\" *ngIf=\"playerNum!=2\">\r\n        <div class=\"location-user-wrapper\">\r\n        <div class=\"location-user location-red\"></div>\r\n        </div>\r\n        <div class=\"dice-wrapper\">\r\n      <section class=\"container container-red\">\r\n        <div id=\"cubeRed\" class=\"cube\" (click)=\"rollDice()\" [hidden]=\"turn!=0\" >\r\n          <div class=\"front\" [ngStyle]=\"{'background-color': diceColor}\">\r\n            <span class=\"dot dot1\"></span>\r\n          </div>\r\n          <div class=\"back\" [ngStyle]=\"{'background-color': diceColor}\">\r\n            <span class=\"dot dot1\"></span>\r\n            <span class=\"dot dot2\"></span>\r\n          </div>\r\n          <div class=\"right\" [ngStyle]=\"{'background-color': diceColor}\">\r\n            <span class=\"dot dot1\"></span>\r\n            <span class=\"dot dot2\"></span>\r\n            <span class=\"dot dot3\"></span>\r\n          </div>\r\n          <div class=\"left\" [ngStyle]=\"{'background-color': diceColor}\">\r\n            <span class=\"dot dot1\"></span>\r\n            <span class=\"dot dot2\"></span>\r\n            <span class=\"dot dot3\"></span>\r\n            <span class=\"dot dot4\"></span>\r\n          </div>\r\n          <div class=\"top\" [ngStyle]=\"{'background-color': diceColor}\">\r\n            <span class=\"dot dot1\"></span>\r\n            <span class=\"dot dot2\"></span>\r\n            <span class=\"dot dot3\"></span>\r\n            <span class=\"dot dot4\"></span>\r\n            <span class=\"dot dot5\"></span>\r\n          </div>\r\n          <div class=\"bottom\" [ngStyle]=\"{'background-color': diceColor}\">\r\n            <span class=\"dot dot1\"></span>\r\n            <span class=\"dot dot2\"></span>\r\n            <span class=\"dot dot3\"></span>\r\n            <span class=\"dot dot4\"></span>\r\n            <span class=\"dot dot5\"></span>\r\n            <span class=\"dot dot6\"></span>\r\n          </div>\r\n        </div>\r\n        </section>\r\n      </div>\r\n        </div>\r\n        <div class=\"dice-green\" slot=\"start\" >\r\n          <div class=\"location-user-wrapper\">\r\n            <div class=\"location-user location-green\"></div>\r\n          </div>\r\n          <div class=\"dice-wrapper\">\r\n          <section class=\"container container-green\">\r\n        <div id=\"cubeGreen\" class=\"cube\" (click)=\"rollDice()\" [hidden]=\"turn!=1\">\r\n          <div class=\"front\" [ngStyle]=\"{'background-color': diceColor}\">\r\n            <span class=\"dot dot1\"></span>\r\n          </div>\r\n          <div class=\"back\" [ngStyle]=\"{'background-color': diceColor}\">\r\n            <span class=\"dot dot1\"></span>\r\n            <span class=\"dot dot2\"></span>\r\n          </div>\r\n          <div class=\"right\" [ngStyle]=\"{'background-color': diceColor}\">\r\n            <span class=\"dot dot1\"></span>\r\n            <span class=\"dot dot2\"></span>\r\n            <span class=\"dot dot3\"></span>\r\n          </div>\r\n          <div class=\"left\" [ngStyle]=\"{'background-color': diceColor}\">\r\n            <span class=\"dot dot1\"></span>\r\n            <span class=\"dot dot2\"></span>\r\n            <span class=\"dot dot3\"></span>\r\n            <span class=\"dot dot4\"></span>\r\n          </div>\r\n          <div class=\"top\" [ngStyle]=\"{'background-color': diceColor}\">\r\n            <span class=\"dot dot1\"></span>\r\n            <span class=\"dot dot2\"></span>\r\n            <span class=\"dot dot3\"></span>\r\n            <span class=\"dot dot4\"></span>\r\n            <span class=\"dot dot5\"></span>\r\n          </div>\r\n          <div class=\"bottom\" [ngStyle]=\"{'background-color': diceColor}\">\r\n            <span class=\"dot dot1\"></span>\r\n            <span class=\"dot dot2\"></span>\r\n            <span class=\"dot dot3\"></span>\r\n            <span class=\"dot dot4\"></span>\r\n            <span class=\"dot dot5\"></span>\r\n            <span class=\"dot dot6\"></span>\r\n          </div>\r\n        </div>\r\n        </section>\r\n      </div>\r\n      </div>\r\n        </div>\r\n        <div class=\"main-ludo\">\r\n\r\n    <div class=\"wrapper wrapperTop wrapperTopBottom\">\r\n      <ion-grid>\r\n        <ion-row class=\"row\">\r\n          <ion-col class=\"box1 box playerBox player1Box\"  size='4.7'>\r\n<p class=\"text text-red\">{{player2}}</p>\r\n            <div class=\"innerBox\">\r\n              <ion-grid>\r\n                <ion-row class=\"smallBoxRow\">\r\n                  <ion-col class=\"locaton-pos\" >\r\n                    <div class=\"location location-red {{animateHome[0]}}\" (click)=\"moveOut('red',3)\" [hidden]=\"homeShow[0][3]==0\" *ngIf=\"playerNum!=2\">\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col class=\"locaton-pos\">\r\n                    <div class=\"location location-red {{animateHome[0]}}\" (click)=\"moveOut('red',2)\"[hidden]=\"homeShow[0][2]==0\" *ngIf=\"playerNum!=2\">\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"smallBoxRow\">\r\n                  <ion-col class=\"locaton-pos\" >\r\n                    <div class=\"location location-red {{animateHome[0]}}\" (click)=\"moveOut('red',1)\"[hidden]=\"homeShow[0][1]==0\" *ngIf=\"playerNum!=2\">\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col class=\"locaton-pos\" >\r\n                    <div class=\"location location-red {{animateHome[0]}}\" (click)=\"moveOut('red',0)\" [hidden]=\"homeShow[0][0]==0\" *ngIf=\"playerNum!=2\">\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"box2 box \" size=\"2.6\">\r\n            <ion-grid class=\"border-top\">\r\n              <ion-row class=\"row1\">\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][10][0]}}\" (click)=\"move('red',10)\"  [hidden]=\"locationShow[0][10][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][10][0]}}\" (click)=\"move('green',10)\"  [hidden]=\"locationShow[1][10][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][10][0]}}\" (click)=\"move('blue',10)\"  [hidden]=\"locationShow[2][10][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][10][0]}}\" (click)=\"move('yellow',10)\"  [hidden]=\"locationShow[3][10][0]!=1\">\r\n                  </div>\r\n\r\n                  11\r\n                </ion-col>\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][11][0]}}\"  (click)=\"move('red',11)\" [hidden]=\"locationShow[0][11][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][11][0]}}\"  (click)=\"move('green',11)\" [hidden]=\"locationShow[1][11][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][11][0]}}\"  (click)=\"move('blue',11)\" [hidden]=\"locationShow[2][11][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][11][0]}}\"  (click)=\"move('yellow',11)\" [hidden]=\"locationShow[3][11][0]!=1\">\r\n                  </div>\r\n                  12\r\n                </ion-col>\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][12][0]}}\"  (click)=\"move('red',12)\" [hidden]=\"locationShow[0][12][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][12][0]}}\"  (click)=\"move('green',12)\" [hidden]=\"locationShow[1][12][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][12][0]}}\"  (click)=\"move('blue',12)\" [hidden]=\"locationShow[2][12][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][12][0]}}\"  (click)=\"move('yellow',12)\" [hidden]=\"locationShow[3][12][0]!=1\">\r\n                  </div>\r\n                  13\r\n                </ion-col>\r\n              </ion-row >\r\n              <ion-row class=\"row2\">\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][9][0]}}\" (click)=\"move('red',9)\"  [hidden]=\"locationShow[0][9][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][9][0]}}\" (click)=\"move('green',9)\"  [hidden]=\"locationShow[1][9][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][9][0]}}\" (click)=\"move('blue',9)\"  [hidden]=\"locationShow[2][9][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][9][0]}}\" (click)=\"move('yellow',9)\"  [hidden]=\"locationShow[3][9][0]!=1\">\r\n                  </div>\r\n                  10\r\n                </ion-col>\r\n                <ion-col size='4' class=\"greenCol\">\r\n                  <div class=\"location location-green {{animateCol[0][50][0]}}\"  (click)=\"moveColored('green',0)\" [hidden]=\"locationShowColored[1][0][0]!=1\">\r\n                  </div>\r\n                  G1\r\n                </ion-col>\r\n                <ion-col size='4'  class=\"greenCol greenStart\">\r\n                  <div class=\"location location-red {{animateCol[0][13][0]}}\"  (click)=\"move('red',13)\" [hidden]=\"locationShow[0][13][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][13][0]}}\"  (click)=\"move('green',13)\" [hidden]=\"locationShow[1][13][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][13][0]}}\"  (click)=\"move('blue',13)\" [hidden]=\"locationShow[2][13][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][13][0]}}\"  (click)=\"move('yellow',13)\" [hidden]=\"locationShow[3][13][0]!=1\">\r\n                  </div>\r\n                  14\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"row3\">\r\n                <ion-col size='4' class=\"col-star\">\r\n                  <div class=\"location location-red {{animateCol[0][8][0]}}\"  (click)=\"move('red',8)\" [hidden]=\"locationShow[0][8][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][8][0]}}\"  (click)=\"move('green',8)\" [hidden]=\"locationShow[1][8][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][8][0]}}\"  (click)=\"move('blue',8)\" [hidden]=\"locationShow[2][8][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][8][0]}}\"  (click)=\"move('yellow',8)\" [hidden]=\"locationShow[3][8][0]!=1\">\r\n                  </div>\r\n\r\n                </ion-col>\r\n                <ion-col size='4' class=\"greenCol\">\r\n                  <div class=\"location location-green {{animateCol[1][50][0]}}\"  (click)=\"moveColored('green',1)\" [hidden]=\"locationShowColored[1][1][0]!=1\">\r\n                  </div>\r\n                  G2\r\n                </ion-col>\r\n                <ion-col size='4' >\r\n                  <div class=\"location location-red {{animateCol[0][14][0]}}\"  (click)=\"move('red',14)\" [hidden]=\"locationShow[0][14][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][14][0]}}\"  (click)=\"move('green',14)\" [hidden]=\"locationShow[1][14][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][14][0]}}\"  (click)=\"move('blue',14)\" [hidden]=\"locationShow[2][14][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][14][0]}}\"  (click)=\"move('yellow',14)\" [hidden]=\"locationShow[3][14][0]!=1\">\r\n                  </div>\r\n                  15\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"row4\">\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][7][0]}}\"  (click)=\"move('red',7)\" [hidden]=\"locationShow[0][7][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][7][0]}}\"  (click)=\"move('green',7)\" [hidden]=\"locationShow[1][7][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][7][0]}}\"  (click)=\"move('blue',7)\" [hidden]=\"locationShow[2][7][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][7][0]}}\"  (click)=\"move('yellow',7)\" [hidden]=\"locationShow[3][7][0]!=1\">\r\n                  </div>\r\n                  8\r\n                </ion-col>\r\n                <ion-col size='4' class=\"greenCol\">\r\n                  <div class=\"location location-green {{animateCol[1][50][0]}}\"  (click)=\"moveColored('green',2)\" [hidden]=\"locationShowColored[1][2][0]!=1\">\r\n                  </div>\r\n                  G3\r\n                </ion-col>\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][15][0]}}\"  (click)=\"move('red',15)\" [hidden]=\"locationShow[0][15][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][15][0]}}\"  (click)=\"move('green',15)\" [hidden]=\"locationShow[1][15][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][15][0]}}\"  (click)=\"move('blue',15)\" [hidden]=\"locationShow[2][15][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][15][0]}}\"  (click)=\"move('yellow',15)\" [hidden]=\"locationShow[3][15][0]!=1\">\r\n                  </div>\r\n                  16\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"row5\">\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][6][0]}}\" (click)=\"move('red',6)\"  [hidden]=\"locationShow[0][6][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][6][0]}}\" (click)=\"move('green',6)\"  [hidden]=\"locationShow[1][6][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][6][0]}}\" (click)=\"move('blue',6)\"  [hidden]=\"locationShow[2][6][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][6][0]}}\" (click)=\"move('yellow',6)\"  [hidden]=\"locationShow[3][6][0]!=1\">\r\n                  </div>\r\n                  7\r\n                </ion-col>\r\n                <ion-col size='4' class=\"greenCol\">\r\n                  <div class=\"location location-green {{animateCol[1][50][0]}}\"  (click)=\"moveColored('green',3)\" [hidden]=\"locationShowColored[1][3][0]!=1\">\r\n                  </div>\r\n                  G4\r\n                </ion-col>\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][16][0]}}\"  (click)=\"move('red',16)\" [hidden]=\"locationShow[0][16][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][16][0]}}\"  (click)=\"move('green',16)\" [hidden]=\"locationShow[1][16][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][16][0]}}\"  (click)=\"move('blue',16)\" [hidden]=\"locationShow[2][16][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][16][0]}}\"  (click)=\"move('yellow',16)\" [hidden]=\"locationShow[3][16][0]!=1\">\r\n                  </div>\r\n                  17\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"row6\">\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][5][0]}}\" (click)=\"move('red',5)\"  [hidden]=\"locationShow[0][5][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][5][0]}}\" (click)=\"move('green',5)\"  [hidden]=\"locationShow[1][5][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][5][0]}}\" (click)=\"move('blue',5)\"  [hidden]=\"locationShow[2][5][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][5][0]}}\" (click)=\"move('yellow',5)\"  [hidden]=\"locationShow[3][5][0]!=1\">\r\n                  </div>\r\n                  6\r\n                </ion-col>\r\n                <ion-col size='4' class=\"greenCol\">\r\n                  <div class=\"location location-green {{animateCol[1][50][0]}}\"  (click)=\"moveColored('green',4)\" [hidden]=\"locationShowColored[1][4][0]!=1\">\r\n                  </div>\r\n                  G5\r\n                </ion-col>\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][17][0]}}\"  (click)=\"move('red',17)\" [hidden]=\"locationShow[0][17][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][17][0]}}\"  (click)=\"move('green',17)\" [hidden]=\"locationShow[1][17][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][17][0]}}\"  (click)=\"move('blue',17)\" [hidden]=\"locationShow[2][17][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][17][0]}}\"  (click)=\"move('yellow',17)\" [hidden]=\"locationShow[3][17][0]!=1\">\r\n                  </div>\r\n                  18\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-col>\r\n          <ion-col class=\"box3 box playerBox player2Box\" size='4.7'>\r\n            <p class=\"text text-green\">{{player3}}</p>\r\n\r\n            <div class=\"innerBox\">\r\n\r\n              <ion-grid>\r\n                <ion-row class=\"smallBoxRow\">\r\n                  <ion-col class=\"locaton-pos\" >\r\n                    <div class=\"location location-green {{animateHome[1]}}\" (click)=\"moveOut('green',2)\" [hidden]=\"homeShow[1][2]==0\">\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col class=\"locaton-pos\" >\r\n                    <div class=\"location location-green {{animateHome[1]}}\" (click)=\"moveOut('green',3)\" [hidden]=\"homeShow[1][3]==0\">\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"smallBoxRow\">\r\n                  <ion-col class=\"locaton-pos\" >\r\n                    <div class=\"location location-green {{animateHome[1]}}\" (click)=\"moveOut('green',1)\" [hidden]=\"homeShow[1][1]==0\">\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col class=\"locaton-pos\" >\r\n                    <div class=\"location location-green {{animateHome[1]}}\" (click)=\"moveOut('green',0)\" [hidden]=\"homeShow[1][0]==0\">\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n\r\n    <div class=\"wrapper wrapperMiddle\">\r\n      <ion-grid>\r\n        <ion-row class=\"row\">\r\n          <ion-col class=\"box1 box\"  size='4.7'>\r\n            <ion-grid class=\"border-leftTop\">\r\n              <ion-row class=\"rowM1\">\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][51][0]}}\"  (click)=\"move('red',51)\" [hidden]=\"locationShow[0][51][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][51][0]}}\"  (click)=\"move('green',51)\" [hidden]=\"locationShow[1][51][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][51][0]}}\"  (click)=\"move('blue',51)\" [hidden]=\"locationShow[2][51][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][51][0]}}\"  (click)=\"move('yellow',51)\" [hidden]=\"locationShow[3][51][0]!=1\">\r\n                  </div>\r\n\r\n                  52</ion-col>\r\n                <ion-col size=\"2\" class=\"redCol redStart location-pos box-one\">\r\n                  <div class=\"location location-red {{animateCol[0][0][0]}}\" (click)=\"move('red',0)\"   [hidden]=\"locationShow[0][0][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][0][0]}}\" (click)=\"move('green',0)\"   [hidden]=\"locationShow[1][0][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][0][0]}}\" (click)=\"move('blue',0)\"   [hidden]=\"locationShow[2][0][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][0][0]}}\" (click)=\"move('yellow',0)\"   [hidden]=\"locationShow[3][0][0]!=1\">\r\n                  </div>\r\n                  1\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"box-2\">\r\n                  <div class=\"location location-red {{animateCol[0][1][0]}}\"  (click)=\"move('red',1)\" [hidden]=\"locationShow[0][1][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][0][0]}}\" (click)=\"move('green',1)\"   [hidden]=\"locationShow[1][1][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][1][0]}}\"  (click)=\"move('blue',1)\" [hidden]=\"locationShow[2][1][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][0][0]}}\" (click)=\"move('yellow',1)\"   [hidden]=\"locationShow[3][1][0]!=1\">\r\n                  </div>\r\n                  2\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"box-3\">\r\n                  <div class=\"location location-red {{animateCol[0][2][0]}}\"  (click)=\"move('red',2)\"  [hidden]=\"locationShow[0][2][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][2][0]}}\"  (click)=\"move('green',2)\"  [hidden]=\"locationShow[1][2][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][2][0]}}\"  (click)=\"move('blue',2)\"  [hidden]=\"locationShow[2][2][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][2][0]}}\"  (click)=\"move('yellow',2)\"  [hidden]=\"locationShow[3][2][0]!=1\">\r\n                  </div>\r\n                  3\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][3][0]}}\" (click)=\"move('red',3)\"  [hidden]=\"locationShow[0][3][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][3][0]}}\"  (click)=\"move('green',3)\"  [hidden]=\"locationShow[1][3][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][3][0]}}\" (click)=\"move('blue',3)\"  [hidden]=\"locationShow[2][3][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][3][0]}}\"  (click)=\"move('yellow',3)\"  [hidden]=\"locationShow[3][3][0]!=1\">\r\n                  </div>\r\n                  4\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][4][0]}}\" (click)=\"move('red',4)\"  [hidden]=\"locationShow[0][4][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][4][0]}}\" (click)=\"move('green',4)\"  [hidden]=\"locationShow[1][4][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][4][0]}}\" (click)=\"move('blue',4)\"  [hidden]=\"locationShow[2][4][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][4][0]}}\" (click)=\"move('yellow',4)\"  [hidden]=\"locationShow[3][4][0]!=1\">\r\n                  </div>\r\n                  5\r\n                </ion-col>\r\n              </ion-row >\r\n              <ion-row class=\"rowM2\">\r\n                <ion-col size=\"2\" >\r\n                  <div class=\"location location-red {{animateCol[0][50][0]}}\"  (click)=\"move('red',50)\" [hidden]=\"locationShow[0][50][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][50][0]}}\"  (click)=\"move('green',50)\" [hidden]=\"locationShow[1][50][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][50][0]}}\"  (click)=\"move('blue',50)\" [hidden]=\"locationShow[2][50][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][50][0]}}\"  (click)=\"move('yellow',50)\" [hidden]=\"locationShow[3][50][0]!=1\">\r\n                  </div>\r\n                  51</ion-col>\r\n                <ion-col size=\"2\" class=\"redCol\">\r\n                  <div class=\"location location-red {{animateCol[0][50][0]}}\"  (click)=\"moveColored('red',0)\" [hidden]=\"locationShowColored[0][0][0]!=1\">\r\n                  </div>\r\n                  R1</ion-col>\r\n                <ion-col size=\"2\" class=\"redCol\">\r\n                  <div class=\"location location-red {{animateCol[0][50][0]}}\"  (click)=\"moveColored('red',1)\" [hidden]=\"locationShowColored[0][1][0]!=1\">\r\n                  </div>\r\n                  R2</ion-col>\r\n                <ion-col size=\"2\" class=\"redCol\">\r\n                  <div class=\"location location-red {{animateCol[0][50][0]}}\"  (click)=\"moveColored('red',2)\" [hidden]=\"locationShowColored[0][2][0]!=1\">\r\n                  </div>\r\n                  R3</ion-col>\r\n                <ion-col size=\"2\" class=\"redCol\">\r\n                  <div class=\"location location-red {{animateCol[0][50][0]}}\"  (click)=\"moveColored('red',3)\" [hidden]=\"locationShowColored[0][3][0]!=1\">\r\n                  </div>R4</ion-col>\r\n\r\n                <ion-col size=\"2\" class=\"redCol\">\r\n                  <div class=\"location location-red {{animateCol[0][50][0]}}\"  (click)=\"moveColored('red',4)\" [hidden]=\"locationShowColored[0][4][0]!=1\">\r\n                  </div>\r\n                  R5</ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"rowM3\">\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][49][0]}}\"  (click)=\"move('red',49)\" [hidden]=\"locationShow[0][49][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][49][0]}}\"  (click)=\"move('green',49)\" [hidden]=\"locationShow[1][49][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][49][0]}}\"  (click)=\"move('blue',49)\" [hidden]=\"locationShow[2][49][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][49][0]}}\"  (click)=\"move('yellow',49)\" [hidden]=\"locationShow[3][49][0]!=1\">\r\n                  </div>\r\n                  50</ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][48][0]}}\"  (click)=\"move('red',48)\" [hidden]=\"locationShow[0][48][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][48][0]}}\"  (click)=\"move('green',48)\" [hidden]=\"locationShow[1][48][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][48][0]}}\"  (click)=\"move('blue',48)\" [hidden]=\"locationShow[2][48][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][48][0]}}\"  (click)=\"move('yellow',48)\" [hidden]=\"locationShow[3][48][0]!=1\">\r\n                  </div>\r\n                  49</ion-col>\r\n                <ion-col size=\"2\" class=\"col-star\">\r\n                  <div class=\"location location-red {{animateCol[0][47][0]}}\"  (click)=\"move('red',47)\" [hidden]=\"locationShow[0][47][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][47][0]}}\"  (click)=\"move('green',47)\" [hidden]=\"locationShow[1][47][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][47][0]}}\"  (click)=\"move('blue',47)\" [hidden]=\"locationShow[2][47][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][47][0]}}\"  (click)=\"move('yellow',47)\" [hidden]=\"locationShow[3][47][0]!=1\">\r\n                  </div>\r\n                  </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][46][0]}}\"  (click)=\"move('red',46)\" [hidden]=\"locationShow[0][46][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][46][0]}}\"  (click)=\"move('green',46)\" [hidden]=\"locationShow[1][46][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][46][0]}}\"  (click)=\"move('blue',46)\" [hidden]=\"locationShow[2][46][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][46][0]}}\"  (click)=\"move('yellow',46)\" [hidden]=\"locationShow[3][46][0]!=1\">\r\n                  </div>\r\n\r\n                  47</ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][45][0]}}\"  (click)=\"move('red',45)\" [hidden]=\"locationShow[0][45][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][45][0]}}\"  (click)=\"move('green',45)\" [hidden]=\"locationShow[1][45][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][45][0]}}\"  (click)=\"move('blue',45)\" [hidden]=\"locationShow[2][45][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][45][0]}}\"  (click)=\"move('yellow',45)\" [hidden]=\"locationShow[3][45][0]!=1\">\r\n                  </div>\r\n                  46</ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][44][0]}}\"  (click)=\"move('red',44)\" [hidden]=\"locationShow[0][44][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][44][0]}}\"  (click)=\"move('green',44)\" [hidden]=\"locationShow[1][44][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][44][0]}}\"  (click)=\"move('blue',44)\" [hidden]=\"locationShow[2][44][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][44][0]}}\"  (click)=\"move('yellow',44)\" [hidden]=\"locationShow[3][44][0]!=1\">\r\n                  </div>\r\n\r\n                  45</ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-col>\r\n          <ion-col class=\"box2 box center \" size=\"2.6\">\r\n            <div class=\"colorHomeAnimation\" [hidden]=\"!showColoredAnimation\">\r\n              <div class=\"pyro\">\r\n            <div class=\"before\"></div>\r\n            <div class=\"after\"></div>\r\n          </div>\r\n            </div>\r\n            <!-- <div class=\"triangle\"></div> -->\r\n          </ion-col>\r\n          <ion-col class=\"box3 box\" size='4.7'>\r\n            <ion-grid class=\"border-rightTop\">\r\n              <ion-row class=\"rowM1\">\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][18][0]}}\"  (click)=\"move('red',18)\" [hidden]=\"locationShow[0][18][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][18][0]}}\"  (click)=\"move('green',18)\" [hidden]=\"locationShow[1][18][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][18][0]}}\"  (click)=\"move('blue',18)\" [hidden]=\"locationShow[2][18][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][18][0]}}\"  (click)=\"move('yellow',18)\" [hidden]=\"locationShow[3][18][0]!=1\">\r\n                  </div>\r\n\r\n                  19</ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][19][0]}}\"  (click)=\"move('red',19)\" [hidden]=\"locationShow[0][19][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][19][0]}}\"  (click)=\"move('green',19)\" [hidden]=\"locationShow[1][19][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][19][0]}}\"  (click)=\"move('blue',19)\" [hidden]=\"locationShow[2][19][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][19][0]}}\"  (click)=\"move('yellow',19)\" [hidden]=\"locationShow[3][19][0]!=1\">\r\n                  </div>\r\n\r\n                  20</ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][20][0]}}\"  (click)=\"move('red',20)\" [hidden]=\"locationShow[0][20][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][20][0]}}\"  (click)=\"move('green',20)\" [hidden]=\"locationShow[1][20][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][20][0]}}\"  (click)=\"move('blue',20)\" [hidden]=\"locationShow[2][20][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][20][0]}}\"  (click)=\"move('yellow',20)\" [hidden]=\"locationShow[3][20][0]!=1\">\r\n                  </div>\r\n\r\n                  21</ion-col>\r\n                <ion-col size=\"2\" class=\"col-star\">\r\n                  <div class=\"location location-red {{animateCol[0][21][0]}}\"  (click)=\"move('red',21)\" [hidden]=\"locationShow[0][21][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][21][0]}}\"  (click)=\"move('green',21)\" [hidden]=\"locationShow[1][21][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][21][0]}}\"  (click)=\"move('blue',21)\" [hidden]=\"locationShow[2][21][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][21][0]}}\"  (click)=\"move('yellow',21)\" [hidden]=\"locationShow[3][21][0]!=1\">\r\n                  </div>\r\n\r\n                  </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][22][0]}}\"  (click)=\"move('red',22)\" [hidden]=\"locationShow[0][22][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][22][0]}}\"  (click)=\"move('green',22)\" [hidden]=\"locationShow[1][22][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][22][0]}}\"  (click)=\"move('blue',22)\" [hidden]=\"locationShow[2][22][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][22][0]}}\"  (click)=\"move('yellow',22)\" [hidden]=\"locationShow[3][22][0]!=1\">\r\n                  </div>\r\n\r\n                  23</ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][23][0]}}\"  (click)=\"move('red',23)\" [hidden]=\"locationShow[0][23][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][23][0]}}\"  (click)=\"move('green',23)\" [hidden]=\"locationShow[1][23][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][23][0]}}\"  (click)=\"move('blue',23)\" [hidden]=\"locationShow[2][23][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][23][0]}}\"  (click)=\"move('yellow',23)\" [hidden]=\"locationShow[3][23][0]!=1\">\r\n                  </div>\r\n\r\n                  24</ion-col>\r\n              </ion-row >\r\n              <ion-row class=\"rowM2\">\r\n                <ion-col size=\"2\" class=\"blueCol\">\r\n                  <div class=\"location location-blue {{animateCol[2][50][0]}}\"  (click)=\"moveColored('blue',4)\" [hidden]=\"locationShowColored[2][4][0]!=1\">\r\n                  </div>\r\n                  B5</ion-col>\r\n                <ion-col size=\"2\" class=\"blueCol\">\r\n                  <div class=\"location location-blue {{animateCol[2][50][0]}}\"  (click)=\"moveColored('blue',3)\" [hidden]=\"locationShowColored[2][3][0]!=1\">\r\n                  </div>\r\n                  B4</ion-col>\r\n                <ion-col size=\"2\" class=\"blueCol\">\r\n                  <div class=\"location location-blue {{animateCol[2][50][0]}}\"  (click)=\"moveColored('blue',2)\" [hidden]=\"locationShowColored[2][2][0]!=1\">\r\n                  </div>\r\n                  B3</ion-col>\r\n                <ion-col size=\"2\" class=\"blueCol\">\r\n                  <div class=\"location location-blue {{animateCol[2][50][0]}}\"  (click)=\"moveColored('blue',1)\" [hidden]=\"locationShowColored[2][1][0]!=1\">\r\n                  </div>\r\n                  B2</ion-col>\r\n                <ion-col size=\"2\" class=\"blueCol\">\r\n                  <div class=\"location location-blue {{animateCol[2][50][0]}}\"  (click)=\"moveColored('blue',0)\" [hidden]=\"locationShowColored[2][0][0]!=1\">\r\n                  </div>\r\n                  B1</ion-col>\r\n                <ion-col size=\"2\" >\r\n                  <div class=\"location location-red {{animateCol[0][24][0]}}\"  (click)=\"move('red',24)\" [hidden]=\"locationShow[0][24][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][24][0]}}\"  (click)=\"move('green',24)\" [hidden]=\"locationShow[1][24][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][24][0]}}\"  (click)=\"move('blue',24)\" [hidden]=\"locationShow[2][24][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][24][0]}}\"  (click)=\"move('yellow',24)\" [hidden]=\"locationShow[3][24][0]!=1\">\r\n                  </div>\r\n\r\n                  25</ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"rowM3\">\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][30][0]}}\"  (click)=\"move('red',30)\" [hidden]=\"locationShow[0][30][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][30][0]}}\"  (click)=\"move('green',30)\" [hidden]=\"locationShow[1][30][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][30][0]}}\"  (click)=\"move('blue',30)\" [hidden]=\"locationShow[2][30][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][30][0]}}\"  (click)=\"move('yellow',30)\" [hidden]=\"locationShow[3][30][0]!=1\">\r\n                  </div>\r\n\r\n                  31</ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][29][0]}}\"  (click)=\"move('red',29)\" [hidden]=\"locationShow[0][29][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][29][0]}}\"  (click)=\"move('green',29)\" [hidden]=\"locationShow[1][29][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][29][0]}}\"  (click)=\"move('blue',29)\" [hidden]=\"locationShow[2][29][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][29][0]}}\"  (click)=\"move('yellow',29)\" [hidden]=\"locationShow[3][29][0]!=1\">\r\n                  </div>\r\n\r\n                  30</ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][28][0]}}\"  (click)=\"move('red',28)\" [hidden]=\"locationShow[0][28][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][28][0]}}\"  (click)=\"move('green',28)\" [hidden]=\"locationShow[1][28][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][28][0]}}\"  (click)=\"move('blue',28)\" [hidden]=\"locationShow[2][28][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][28][0]}}\"  (click)=\"move('yellow',28)\" [hidden]=\"locationShow[3][28][0]!=1\">\r\n                  </div>\r\n\r\n                  29</ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][27][0]}}\"  (click)=\"move('red',27)\" [hidden]=\"locationShow[0][27][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][27][0]}}\"  (click)=\"move('green',27)\" [hidden]=\"locationShow[1][27][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][27][0]}}\"  (click)=\"move('blue',27)\" [hidden]=\"locationShow[2][27][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[1][27][0]}}\"  (click)=\"move('yellow',27)\" [hidden]=\"locationShow[3][27][0]!=1\">\r\n                  </div>\r\n                  28</ion-col>\r\n                <ion-col size=\"2\" class=\"blueCol blueStart\">\r\n                  <div class=\"location location-red {{animateCol[0][12][0]}}\"  (click)=\"move('red',26)\" [hidden]=\"locationShow[0][26][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][12][0]}}\"  (click)=\"move('green',26)\" [hidden]=\"locationShow[1][26][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][12][0]}}\"  (click)=\"move('blue',26)\" [hidden]=\"locationShow[2][26][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][12][0]}}\"  (click)=\"move('yellow',26)\" [hidden]=\"locationShow[3][26][0]!=1\">\r\n                  </div>\r\n                  27</ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div class=\"location location-red {{animateCol[0][12][0]}}\"  (click)=\"move('red',25)\" [hidden]=\"locationShow[0][25][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][12][0]}}\"  (click)=\"move('green',25)\" [hidden]=\"locationShow[1][25][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][12][0]}}\"  (click)=\"move('blue',25)\" [hidden]=\"locationShow[2][25][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][12][0]}}\"  (click)=\"move('yellow',25)\" [hidden]=\"locationShow[3][25][0]!=1\">\r\n                  </div>\r\n\r\n                  26</ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n\r\n    <div class=\"wrapper wrapperBottom wrapperTopBottom box-shadow\">\r\n      <ion-grid>\r\n        <ion-row class=\"row\">\r\n          <ion-col class=\"box1 box playerBox player3Box\" size=\"4.7\">\r\n            <p class=\"text text-yellow\">{{player1}}</p>\r\n\r\n            <div class=\"innerBox\">\r\n              <ion-grid>\r\n                <ion-row class=\"smallBoxRow\">\r\n                  <ion-col>\r\n                    <div class=\"location location-yellow {{animateHome[3]}}\"  (click)=\"moveOut('yellow',0)\" [hidden]=\"homeShow[3][0]!=1\">\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <div class=\"location location-yellow {{animateHome[3]}}\"  (click)=\"moveOut('yellow',1)\" [hidden]=\"homeShow[3][1]!=1\">\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"smallBoxRow\">\r\n                  <ion-col>\r\n                    <div class=\"location location-yellow {{animateHome[3]}}\"  (click)=\"moveOut('yellow',2)\" [hidden]=\"homeShow[3][2]!=1\">\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <div class=\"location location-yellow {{animateHome[3]}}\"  (click)=\"moveOut('yellow',3)\" [hidden]=\"homeShow[3][3]!=1\">\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"box2 box \" size=\"2.6\">\r\n\r\n            <ion-grid class=\"border-top\">\r\n              <ion-row class=\"row1\">\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][43][0]}}\"  (click)=\"move('red',43)\" [hidden]=\"locationShow[0][43][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][43][0]}}\"  (click)=\"move('green',43)\" [hidden]=\"locationShow[1][43][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][43][0]}}\"  (click)=\"move('blue',43)\" [hidden]=\"locationShow[2][43][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][43][0]}}\"  (click)=\"move('yellow',43)\" [hidden]=\"locationShow[3][43][0]!=1\">\r\n                  </div>\r\n                  44\r\n                </ion-col>\r\n                <ion-col size='4' class=\"yellowCol\">\r\n                  <div class=\"location location-yellow {{animateCol[3][50][0]}}\"  (click)=\"moveColored('yellow',4)\" [hidden]=\"locationShowColored[3][4][0]!=1\">\r\n                  </div>\r\n                  Y5\r\n                </ion-col>\r\n                <ion-col size='4'>\r\n\r\n                  <div class=\"location location-green {{animateCol[1][31][0]}}\"  (click)=\"move('green',31)\" [hidden]=\"locationShow[1][31][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][31][0]}}\"  (click)=\"move('blue',31)\" [hidden]=\"locationShow[2][31][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][31][0]}}\"  (click)=\"move('yellow',31)\" [hidden]=\"locationShow[3][31][0]!=1\">\r\n                  </div>\r\n\r\n                  32\r\n                </ion-col>\r\n              </ion-row >\r\n              <ion-row class=\"row2\">\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][42][0]}}\"  (click)=\"move('red',42)\" [hidden]=\"locationShow[0][42][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][42][0]}}\"  (click)=\"move('green',42)\" [hidden]=\"locationShow[1][42][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][42][0]}}\"  (click)=\"move('blue',42)\" [hidden]=\"locationShow[2][42][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][42][0]}}\"  (click)=\"move('yellow',42)\" [hidden]=\"locationShow[3][42][0]!=1\">\r\n                  </div>\r\n\r\n                  43\r\n                </ion-col>\r\n                <ion-col size='4' class=\"yellowCol\">\r\n                  <div class=\"location location-yellow {{animateCol[3][50][0]}}\"  (click)=\"moveColored('yellow',3)\" [hidden]=\"locationShowColored[3][3][0]!=1\">\r\n                  </div>\r\n                  Y4\r\n                </ion-col>\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][32][0]}}\"  (click)=\"move('red',32)\" [hidden]=\"locationShow[0][32][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][32][0]}}\"  (click)=\"move('green',32)\" [hidden]=\"locationShow[1][32][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][32][0]}}\"  (click)=\"move('blue',32)\" [hidden]=\"locationShow[2][32][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][32][0]}}\"  (click)=\"move('yellow',32)\" [hidden]=\"locationShow[3][32][0]!=1\">\r\n                  </div>\r\n\r\n                  33\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"row3\">\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][41][0]}}\"  (click)=\"move('red',41)\" [hidden]=\"locationShow[0][41][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][41][0]}}\"  (click)=\"move('green',41)\" [hidden]=\"locationShow[1][41][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][41][0]}}\"  (click)=\"move('blue',41)\" [hidden]=\"locationShow[2][41][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][41][0]}}\"  (click)=\"move('yellow',41)\" [hidden]=\"locationShow[3][41][0]!=1\">\r\n                  </div>\r\n\r\n                  42\r\n                </ion-col>\r\n                <ion-col size='4' class=\"yellowCol\">\r\n                  <div class=\"location location-yellow {{animateCol[3][50][0]}}\"  (click)=\"moveColored('yellow',2)\" [hidden]=\"locationShowColored[3][2][0]!=1\">\r\n                  </div>\r\n                  Y3\r\n                </ion-col>\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][33][0]}}\"  (click)=\"move('red',33)\" [hidden]=\"locationShow[0][33][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][33][0]}}\"  (click)=\"move('green',33)\" [hidden]=\"locationShow[1][33][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][33][0]}}\"  (click)=\"move('blue',33)\" [hidden]=\"locationShow[2][33][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][33][0]}}\"  (click)=\"move('yellow',33)\" [hidden]=\"locationShow[3][33][0]!=1\">\r\n                  </div>\r\n\r\n                  34\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"row4\">\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][40][0]}}\"  (click)=\"move('red',40)\" [hidden]=\"locationShow[0][40][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][40][0]}}\"  (click)=\"move('green',40)\" [hidden]=\"locationShow[1][40][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][40][0]}}\"  (click)=\"move('blue',40)\" [hidden]=\"locationShow[2][40][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][40][0]}}\"  (click)=\"move('yellow',40)\" [hidden]=\"locationShow[3][40][0]!=1\">\r\n                  </div>\r\n\r\n                  41\r\n                </ion-col>\r\n                <ion-col size='4' class=\"yellowCol\">\r\n                  <div class=\"location location-yellow {{animateCol[3][50][0]}}\"  (click)=\"moveColored('yellow',1)\" [hidden]=\"locationShowColored[3][1][0]!=1\">\r\n                  </div>\r\n                  Y2\r\n                </ion-col>\r\n                <ion-col size='4' class=\"col-star\">\r\n                  <div class=\"location location-red {{animateCol[0][34][0]}}\"  (click)=\"move('red',34)\" [hidden]=\"locationShow[0][34][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][34][0]}}\"  (click)=\"move('green',34)\" [hidden]=\"locationShow[1][34][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][34][0]}}\"  (click)=\"move('blue',34)\" [hidden]=\"locationShow[2][34][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][34][0]}}\"  (click)=\"move('yellow',34)\" [hidden]=\"locationShow[3][34][0]!=1\">\r\n                  </div>\r\n\r\n\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"row5\">\r\n                <ion-col size='4' class=\"yellowCol yellowStart\">\r\n                  <div class=\"location location-red {{animateCol[0][39][0]}}\"  (click)=\"move('red',39)\" [hidden]=\"locationShow[0][39][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][39][0]}}\"  (click)=\"move('green',39)\" [hidden]=\"locationShow[1][39][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][39][0]}}\"  (click)=\"move('blue',39)\" [hidden]=\"locationShow[2][39][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][39][0]}}\"  (click)=\"move('yellow',39)\" [hidden]=\"locationShow[3][39][0]!=1\">\r\n                  </div>\r\n\r\n                  40\r\n                </ion-col>\r\n                <ion-col size='4' class=\"yellowCol\">\r\n                  <div class=\"location location-yellow {{animateCol[3][50][0]}}\"  (click)=\"moveColored('yellow',0)\" [hidden]=\"locationShowColored[3][0][0]!=1\">\r\n                  </div>\r\n                  Y1\r\n                </ion-col>\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][35][0]}}\"  (click)=\"move('red',35)\" [hidden]=\"locationShow[0][35][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][35][0]}}\"  (click)=\"move('green',35)\" [hidden]=\"locationShow[1][35][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][35][0]}}\"  (click)=\"move('blue',35)\" [hidden]=\"locationShow[2][35][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][35][0]}}\"  (click)=\"move('yellow',35)\" [hidden]=\"locationShow[3][35][0]!=1\">\r\n                  </div>\r\n\r\n                  36\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"row6\">\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][38][0]}}\"  (click)=\"move('red',38)\" [hidden]=\"locationShow[0][38][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][38][0]}}\"  (click)=\"move('green',38)\" [hidden]=\"locationShow[1][38][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][38][0]}}\"  (click)=\"move('blue',38)\" [hidden]=\"locationShow[2][38][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][38][0]}}\"  (click)=\"move('yellow',38)\" [hidden]=\"locationShow[3][38][0]!=1\">\r\n                  </div>\r\n\r\n                  39\r\n                </ion-col >\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][37][0]}}\"  (click)=\"move('red',37)\" [hidden]=\"locationShow[0][37][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][37][0]}}\"  (click)=\"move('green',37)\" [hidden]=\"locationShow[1][37][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][37][0]}}\"  (click)=\"move('blue',37)\" [hidden]=\"locationShow[2][37][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][37][0]}}\"  (click)=\"move('yellow',37)\" [hidden]=\"locationShow[3][37][0]!=1\">\r\n                  </div>\r\n\r\n                  38\r\n                </ion-col>\r\n                <ion-col size='4'>\r\n                  <div class=\"location location-red {{animateCol[0][36][0]}}\"  (click)=\"move('red',36)\" [hidden]=\"locationShow[0][36][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-green {{animateCol[1][36][0]}}\"  (click)=\"move('green',36)\" [hidden]=\"locationShow[1][36][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-blue {{animateCol[2][36][0]}}\"  (click)=\"move('blue',36)\" [hidden]=\"locationShow[2][36][0]!=1\">\r\n                  </div>\r\n                  <div class=\"location location-yellow {{animateCol[3][36][0]}}\"  (click)=\"move('yellow',36)\" [hidden]=\"locationShow[3][36][0]!=1\">\r\n                  </div>\r\n\r\n                  37\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n\r\n          </ion-col>\r\n          <ion-col class=\"box3 box playerBox player4Box\" size=\"4.7\">\r\n            <p class=\"text text-blue\">{{player4}}</p>\r\n\r\n            <div class=\"innerBox\">\r\n\r\n              <ion-grid>\r\n                <ion-row class=\"smallBoxRow\">\r\n                  <ion-col>\r\n                    <div class=\"location location-blue {{animateHome[2]}}\"  (click)=\"moveOut('blue',1)\" [hidden]=\"homeShow[2][0]!=1\" *ngIf=\"playerNum==4\">\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <div class=\"location location-blue {{animateHome[2]}}\"  (click)=\"moveOut('blue',2)\" [hidden]=\"homeShow[2][1]!=1\" *ngIf=\"playerNum==4\">\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"smallBoxRow\">\r\n                  <ion-col>\r\n                    <div class=\"location location-blue {{animateHome[2]}}\"  (click)=\"moveOut('blue',3)\" [hidden]=\"homeShow[2][2]!=1\" *ngIf=\"playerNum==4\">\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <div class=\"location location-blue {{animateHome[2]}}\"  (click)=\"moveOut('blue',4)\" [hidden]=\"homeShow[2][3]!=1\" *ngIf=\"playerNum==4\">\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"main-dice\">\r\n    <div class=\"dice-red\">\r\n      <div class=\"location-user-wrapper\">\r\n      <div class=\"location-user location-yellow\"></div>\r\n      </div>\r\n      <div class=\"dice-wrapper\">\r\n    <section class=\"container container-red\">\r\n      <div id=\"cubeYellow\" class=\"cube\" (click)=\"rollDice()\" [hidden]=\"turn!=3\" >\r\n        <div class=\"front\" [ngStyle]=\"{'background-color': diceColor}\">\r\n          <span class=\"dot dot1\"></span>\r\n        </div>\r\n        <div class=\"back\" [ngStyle]=\"{'background-color': diceColor}\">\r\n          <span class=\"dot dot1\"></span>\r\n          <span class=\"dot dot2\"></span>\r\n        </div>\r\n        <div class=\"right\" [ngStyle]=\"{'background-color': diceColor}\">\r\n          <span class=\"dot dot1\"></span>\r\n          <span class=\"dot dot2\"></span>\r\n          <span class=\"dot dot3\"></span>\r\n        </div>\r\n        <div class=\"left\" [ngStyle]=\"{'background-color': diceColor}\">\r\n          <span class=\"dot dot1\"></span>\r\n          <span class=\"dot dot2\"></span>\r\n          <span class=\"dot dot3\"></span>\r\n          <span class=\"dot dot4\"></span>\r\n        </div>\r\n        <div class=\"top\" [ngStyle]=\"{'background-color': diceColor}\">\r\n          <span class=\"dot dot1\"></span>\r\n          <span class=\"dot dot2\"></span>\r\n          <span class=\"dot dot3\"></span>\r\n          <span class=\"dot dot4\"></span>\r\n          <span class=\"dot dot5\"></span>\r\n        </div>\r\n        <div class=\"bottom\" [ngStyle]=\"{'background-color': diceColor}\">\r\n          <span class=\"dot dot1\"></span>\r\n          <span class=\"dot dot2\"></span>\r\n          <span class=\"dot dot3\"></span>\r\n          <span class=\"dot dot4\"></span>\r\n          <span class=\"dot dot5\"></span>\r\n          <span class=\"dot dot6\"></span>\r\n        </div>\r\n      </div>\r\n      </section>\r\n    </div>\r\n      </div>\r\n      <div class=\"dice-green\" *ngIf=\"playerNum==4\">\r\n        <div class=\"location-user-wrapper\">\r\n          <div class=\"location-user location-blue\"></div>\r\n        </div>\r\n        <div class=\"dice-wrapper\">\r\n        <section class=\"container container-green\">\r\n      <div id=\"cubeBlue\" class=\"cube\" (click)=\"rollDice()\" [hidden]=\"turn!=2\">\r\n        <div class=\"front\" [ngStyle]=\"{'background-color': diceColor}\">\r\n          <span class=\"dot dot1\"></span>\r\n        </div>\r\n        <div class=\"back\" [ngStyle]=\"{'background-color': diceColor}\">\r\n          <span class=\"dot dot1\"></span>\r\n          <span class=\"dot dot2\"></span>\r\n        </div>\r\n        <div class=\"right\" [ngStyle]=\"{'background-color': diceColor}\">\r\n          <span class=\"dot dot1\"></span>\r\n          <span class=\"dot dot2\"></span>\r\n          <span class=\"dot dot3\"></span>\r\n        </div>\r\n        <div class=\"left\" [ngStyle]=\"{'background-color': diceColor}\">\r\n          <span class=\"dot dot1\"></span>\r\n          <span class=\"dot dot2\"></span>\r\n          <span class=\"dot dot3\"></span>\r\n          <span class=\"dot dot4\"></span>\r\n        </div>\r\n        <div class=\"top\" [ngStyle]=\"{'background-color': diceColor}\">\r\n          <span class=\"dot dot1\"></span>\r\n          <span class=\"dot dot2\"></span>\r\n          <span class=\"dot dot3\"></span>\r\n          <span class=\"dot dot4\"></span>\r\n          <span class=\"dot dot5\"></span>\r\n        </div>\r\n        <div class=\"bottom\" [ngStyle]=\"{'background-color': diceColor}\">\r\n          <span class=\"dot dot1\"></span>\r\n          <span class=\"dot dot2\"></span>\r\n          <span class=\"dot dot3\"></span>\r\n          <span class=\"dot dot4\"></span>\r\n          <span class=\"dot dot5\"></span>\r\n          <span class=\"dot dot6\"></span>\r\n        </div>\r\n      </div>\r\n      </section>\r\n    </div>\r\n    </div>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/game-play/game-play-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/game-play/game-play-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: GamePlayPageRoutingModule */

  /***/
  function srcAppPagesGamePlayGamePlayRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamePlayPageRoutingModule", function () {
      return GamePlayPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _game_play_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./game-play.page */
    "./src/app/pages/game-play/game-play.page.ts");

    var routes = [{
      path: '',
      component: _game_play_page__WEBPACK_IMPORTED_MODULE_3__["GamePlayPage"]
    }];

    var GamePlayPageRoutingModule = function GamePlayPageRoutingModule() {
      _classCallCheck(this, GamePlayPageRoutingModule);
    };

    GamePlayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GamePlayPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/game-play/game-play.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/game-play/game-play.module.ts ***!
    \*****************************************************/

  /*! exports provided: GamePlayPageModule */

  /***/
  function srcAppPagesGamePlayGamePlayModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamePlayPageModule", function () {
      return GamePlayPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _game_play_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./game-play-routing.module */
    "./src/app/pages/game-play/game-play-routing.module.ts");
    /* harmony import */


    var _game_play_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./game-play.page */
    "./src/app/pages/game-play/game-play.page.ts");

    var GamePlayPageModule = function GamePlayPageModule() {
      _classCallCheck(this, GamePlayPageModule);
    };

    GamePlayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _game_play_routing_module__WEBPACK_IMPORTED_MODULE_5__["GamePlayPageRoutingModule"]],
      declarations: [_game_play_page__WEBPACK_IMPORTED_MODULE_6__["GamePlayPage"]]
    })], GamePlayPageModule);
    /***/
  },

  /***/
  "./src/app/pages/game-play/game-play.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/game-play/game-play.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGamePlayGamePlayPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background:url('bg.jpg') no-repeat center center / cover;\n  --background-size:cover;\n  font-family: \"Fredoka One\";\n}\n\n.box-shadow {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.main {\n  margin-top: 10vh;\n  position: relative;\n}\n\n.main .main-ludo {\n  height: calc(100vw - 5px);\n  width: calc(100vw - 5px);\n  max-height: 500px;\n  min-height: 280px;\n  max-width: 500px;\n  min-width: 280px;\n  margin: auto;\n  margin-bottom: 10px;\n}\n\n.wrapper {\n  width: 100%;\n}\n\n.wrapperMiddle {\n  height: 20%;\n  max-height: 100px;\n  min-height: 60px;\n}\n\n.wrapperTopBottom {\n  height: 40%;\n  max-height: 200px;\n  min-height: 120px;\n}\n\n.row, ion-grid {\n  height: 100%;\n  border-collapse: collapse;\n  --ion-grid-padding:0;\n}\n\n.box ion-grid {\n  border-collapse: collapse;\n  --ion-grid-padding:0;\n  --ion-grid-padding-lg:0;\n  --ion-grid-padding-md:0;\n  --ion-grid-padding-xl:0;\n  --ion-grid-padding-xs:0;\n  --ion-grid-padding-sm:0;\n}\n\n.border-leftTop ion-col {\n  border-left: solid #595959 1px;\n  border-top: solid #595959 1px;\n}\n\n.border-leftTop .location {\n  position: absolute;\n  top: -20px;\n}\n\n.border-rightTop ion-col {\n  border-right: solid #595959 1px;\n  border-top: solid #595959 1px;\n}\n\n.border-rightTop .location {\n  position: absolute;\n  top: -20px;\n}\n\n.border-top ion-col {\n  border-right: solid #595959 1px;\n  border-top: solid #595959 1px;\n}\n\n.border-top .location {\n  position: absolute;\n  top: -20px;\n}\n\nion-col {\n  padding: 0;\n  margin: 0;\n  font-size: 12px;\n  position: relative;\n  background-color: whitesmoke;\n  color: white;\n}\n\n.col-star {\n  background-image: url('star.png');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #ebebeb;\n}\n\n.row1, .row2, .row3, .row4, .row5, .row6 {\n  height: 16.6%;\n  --ion-grid-padding:0;\n}\n\n.rowM1, .rowM2, .rowM3, .rowM4, .rowM5, .rowM6 {\n  height: 33.33%;\n  width: 100%;\n  --ion-grid-padding:0;\n}\n\n.innerBox {\n  border: solid #bdbdbd 0.5px;\n  height: 100%;\n  width: 100%;\n  background-color: white !important;\n  border-radius: 5px;\n}\n\n.playerBox {\n  position: relative;\n  padding: calc(1.5vw + 18px);\n  border-collapse: collapse;\n}\n\n.playerBox .location {\n  margin-top: -14px;\n}\n\n.playerBox .text {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  text-align: center;\n  font-size: calc(1vw + 10px);\n}\n\n.playerBox .text-yellow, .playerBox .text-blue {\n  bottom: calc(-1vw - 5px );\n}\n\n.playerBox .text-red, .playerBox .text-green {\n  top: calc(-1vw - 5px );\n  -webkit-transform: rotateY(180deg) rotateX(180deg);\n          transform: rotateY(180deg) rotateX(180deg);\n}\n\n.player1Box {\n  background-color: #FF0000;\n}\n\n.player1Box ion-col {\n  background-color: #FF0000;\n}\n\n.player2Box {\n  background-color: #00a800;\n}\n\n.player2Box ion-col {\n  background-color: #00a800;\n}\n\n.player3Box {\n  background-color: #f4ca16;\n}\n\n.player3Box ion-col {\n  background-color: #f4ca16;\n  border: solid #bdbdbd 0.5px;\n}\n\n.player4Box {\n  background-color: #007BC4;\n}\n\n.player4Box ion-col {\n  background-color: #007BC4;\n}\n\n.smallBoxRow {\n  height: 50%;\n}\n\n.smallBoxRow ion-col {\n  margin: calc(3% + 2px);\n  border: solid #bdbdbd 0.5px;\n  border-radius: 50%;\n}\n\n.greenCol {\n  background-color: #00a800;\n  color: #00a800;\n}\n\n.redCol {\n  background-color: #FF0000;\n  color: #FF0000;\n}\n\n.blueCol {\n  background-color: #007BC4;\n  color: #007BC4;\n}\n\n.yellowCol {\n  background-color: #f4ca16;\n  color: #f4ca16;\n}\n\n.center {\n  border-left: solid #FF0000 20px;\n  border-right: solid #007BC4 20px;\n  border-top: solid #00a800 20px;\n  border-bottom: solid #f4ca16 20px;\n  background-size: cover;\n  background-position: center;\n}\n\n.main-dice {\n  display: -webkit-box;\n  display: flex;\n  max-width: 500px;\n  position: relative;\n  padding: 5px;\n  margin: auto;\n  width: 100%;\n  height: 80px;\n}\n\n.main-dice .cube .front {\n  -webkit-transform: translateZ(22.5px);\n          transform: translateZ(22.5px);\n  background-size: cover;\n}\n\n.main-dice .dice-red {\n  margin-left: 10px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.main-dice .dice-green {\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  right: 10px;\n}\n\n.main-dice .location-user-wrapper {\n  border: solid black 1px;\n  padding: 3px;\n  margin-top: 2%;\n  height: 60px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #0f0c29;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#24243e), color-stop(#302b63), to(#0f0c29));\n  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.main-dice .dice-wrapper {\n  border-top: solid black 1px;\n  border-right: solid black 1px;\n  border-bottom: solid black 1px;\n  background: #ff7e5f;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#feb47b), to(#ff7e5f));\n  background: linear-gradient(to right, #feb47b, #ff7e5f);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  padding-bottom: 5px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-top-right-radius: 10px;\n  overflow: hidden;\n}\n\n.main-dice .location-user {\n  background-color: lightgrey;\n  width: calc(5vw + 5px);\n  height: calc(5vw + 5px);\n  max-width: 30px;\n  max-height: 30px;\n  border-radius: 50% 50% 50% 0;\n  -webkit-transform: rotate(-45deg) translate(0, 0);\n          transform: rotate(-45deg) translate(0, 0);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 7px auto;\n}\n\n.main-dice .cube .front {\n  background-image: url('d1.png');\n  background-size: cover;\n}\n\n.main-dice .cube .back {\n  -webkit-transform: rotateX(-180deg) translateZ(22.5px);\n          transform: rotateX(-180deg) translateZ(22.5px);\n  background-image: url('d2.png');\n  background-size: cover;\n}\n\n.main-dice .cube .right {\n  -webkit-transform: rotateY(90deg) translateZ(22.5px);\n          transform: rotateY(90deg) translateZ(22.5px);\n  background-image: url('d3.png');\n  background-size: cover;\n}\n\n.main-dice .cube .left {\n  -webkit-transform: rotateY(-90deg) translateZ(22.5px);\n          transform: rotateY(-90deg) translateZ(22.5px);\n  background-image: url('d4.png');\n  background-size: cover;\n}\n\n.main-dice .cube .top {\n  -webkit-transform: rotateX(90deg) translateZ(22.5px);\n          transform: rotateX(90deg) translateZ(22.5px);\n  background-image: url('d5.png');\n  background-size: cover;\n}\n\n.main-dice .cube .bottom {\n  -webkit-transform: rotateX(-90deg) translateZ(22.5px);\n          transform: rotateX(-90deg) translateZ(22.5px);\n  background-image: url('d6.png');\n  background-size: cover;\n}\n\n.main-dice .container {\n  width: 45px;\n  height: 45px;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  -webkit-perspective-origin: 50% 100%;\n          perspective-origin: 50% 100%;\n  display: inline-block;\n  margin: auto;\n}\n\n.main-dice .cube {\n  width: 100%;\n  height: 100%;\n  right: 0;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transition: -webkit-transform 0.6s;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s;\n}\n\n.main-dice .cube:hover {\n  cursor: pointer;\n}\n\n.main-dice .cube div {\n  display: block;\n  box-shadow: inset 0px 0px 25px rgba(0, 0, 0, 0.5);\n  position: absolute;\n  width: 45px;\n  height: 45px;\n  border-radius: 3px;\n  margin: 0px auto;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 500%;\n  text-align: center;\n  padding: 11.25px 0;\n}\n\n.main-dice .dot {\n  display: none;\n  position: relative;\n  width: 8px;\n  height: 8px;\n  border: solid transparent 3px;\n  background: white;\n  border-radius: 15px;\n}\n\n.main-dice .front .dot1 {\n  top: 41%;\n  left: 40%;\n}\n\n.main-dice .back .dot1 {\n  top: -10%;\n  left: 40%;\n}\n\n.main-dice .back .dot2 {\n  top: 50%;\n  left: 40%;\n}\n\n.main-dice .left .dot1 {\n  top: -20%;\n  left: 15%;\n}\n\n.main-dice .left .dot2 {\n  top: 60%;\n  left: 15%;\n}\n\n.main-dice .left .dot3 {\n  top: -95%;\n  left: 65%;\n}\n\n.main-dice .left .dot4 {\n  top: -20%;\n  left: 65%;\n}\n\n.main-dice .top .dot1 {\n  top: -10%;\n  left: 10%;\n}\n\n.main-dice .top .dot2 {\n  top: 45%;\n  left: 10%;\n}\n\n.main-dice .top .dot3 {\n  top: -85%;\n  left: 65%;\n}\n\n.main-dice .top .dot4 {\n  top: -32%;\n  left: 65%;\n}\n\n.main-dice .top .dot5 {\n  top: -110%;\n  left: 37%;\n}\n\n.main-dice .bottom .dot1 {\n  top: -22%;\n  left: 15%;\n}\n\n.main-dice .bottom .dot2 {\n  top: 10%;\n  left: 15%;\n}\n\n.main-dice .bottom .dot3 {\n  top: 30%;\n  left: 15%;\n}\n\n.main-dice .bottom .dot4 {\n  top: -132%;\n  left: 65%;\n}\n\n.main-dice .bottom .dot5 {\n  top: -100%;\n  left: 65%;\n}\n\n.main-dice .bottom .dot6 {\n  top: -80%;\n  left: 65%;\n}\n\n.animateP {\n  -webkit-animation: up 1s infinite ease;\n          animation: up 1s infinite ease;\n}\n\n.location-red::before {\n  content: \"\";\n  display: -webkit-box;\n  display: flex;\n  width: calc(1.5vw + 5px);\n  max-width: 16px;\n  max-height: 16px;\n  height: calc(1.5vw + 5px);\n  background-color: #FF0000;\n  border-radius: 50%;\n  border: solid #7d7d7d 0.5px;\n}\n\n.location-green::before {\n  content: \"\";\n  display: -webkit-box;\n  display: flex;\n  width: calc(1.5vw + 5px);\n  height: calc(1.5vw + 5px);\n  max-width: 16px;\n  border: solid #7d7d7d 0.5px;\n  max-height: 16px;\n  background-color: #00a800;\n  border-radius: 50%;\n}\n\n.location-blue::before {\n  content: \"\";\n  display: -webkit-box;\n  display: flex;\n  width: calc(1.5vw + 5px);\n  height: calc(1.5vw + 5px);\n  max-width: 16px;\n  border: solid #7d7d7d 0.5px;\n  max-height: 16px;\n  background-color: #007BC4;\n  border-radius: 50%;\n}\n\n.location-yellow::before {\n  content: \"\";\n  display: -webkit-box;\n  display: flex;\n  width: calc(1.5vw + 5px);\n  height: calc(1.5vw + 5px);\n  max-width: 16px;\n  border: solid #7d7d7d 0.5px;\n  max-height: 16px;\n  background-color: #f4ca16;\n  border-radius: 50%;\n}\n\n.location.ng-hide {\n  opacity: 0;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n}\n\n.location {\n  background-color: lightgrey;\n  width: calc(5vw + 5px);\n  height: calc(5vw + 5px);\n  max-width: 30px;\n  max-height: 30px;\n  border: solid #7d7d7d 0.5px;\n  border-radius: 50% 50% 50% 0;\n  -webkit-transform: rotate(-45deg) translate(0, 0);\n          transform: rotate(-45deg) translate(0, 0);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: auto;\n  -webkit-transition: all linear 0.5s;\n  transition: all linear 0.5s;\n  z-index: 10;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.2);\n}\n\n.location::after {\n  content: \"\";\n  position: absolute;\n  width: 20px;\n  height: 8px;\n  border-radius: 50%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  background-color: rgba(55, 44, 68, 0.5);\n  bottom: -10px;\n  left: -15px;\n  -webkit-filter: blur(2px);\n          filter: blur(2px);\n}\n\n.location-pos {\n  position: relative;\n}\n\n.location-animate {\n  -webkit-animation: moveForwardFive 2s forwards ease;\n          animation: moveForwardFive 2s forwards ease;\n  z-index: 100;\n}\n\n@-webkit-keyframes up {\n  50% {\n    -webkit-transform: rotate(-45deg) translate(5px, -5px);\n            transform: rotate(-45deg) translate(5px, -5px);\n  }\n}\n\n@keyframes up {\n  50% {\n    -webkit-transform: rotate(-45deg) translate(5px, -5px);\n            transform: rotate(-45deg) translate(5px, -5px);\n  }\n}\n\n@media (max-width: 300px) {\n  @-webkit-keyframes moveForwardFive {\n    0% {\n      left: 0;\n    }\n    20% {\n      left: 16px;\n    }\n    40% {\n      left: 32px;\n    }\n    60% {\n      left: 48px;\n    }\n    80% {\n      left: 64px;\n    }\n    100% {\n      left: 80px;\n    }\n  }\n  @keyframes moveForwardFive {\n    0% {\n      left: 0;\n    }\n    20% {\n      left: 16px;\n    }\n    40% {\n      left: 32px;\n    }\n    60% {\n      left: 48px;\n    }\n    80% {\n      left: 64px;\n    }\n    100% {\n      left: 80px;\n    }\n  }\n}\n\n@media (min-width: 301px) and (max-width: 320px) {\n  @-webkit-keyframes moveForwardFive {\n    0% {\n      left: 0;\n    }\n    20% {\n      left: 18px;\n    }\n    40% {\n      left: 36px;\n    }\n    60% {\n      left: 54px;\n    }\n    80% {\n      left: 72px;\n    }\n    100% {\n      left: 90px;\n    }\n  }\n  @keyframes moveForwardFive {\n    0% {\n      left: 0;\n    }\n    20% {\n      left: 18px;\n    }\n    40% {\n      left: 36px;\n    }\n    60% {\n      left: 54px;\n    }\n    80% {\n      left: 72px;\n    }\n    100% {\n      left: 90px;\n    }\n  }\n}\n\n@media (min-width: 321px) and (max-width: 364px) {\n  @-webkit-keyframes moveForwardFive {\n    0% {\n      left: 0;\n    }\n    20% {\n      left: 20px;\n    }\n    40% {\n      left: 40px;\n    }\n    60% {\n      left: 60px;\n    }\n    80% {\n      left: 80px;\n    }\n    100% {\n      left: 100px;\n    }\n  }\n  @keyframes moveForwardFive {\n    0% {\n      left: 0;\n    }\n    20% {\n      left: 20px;\n    }\n    40% {\n      left: 40px;\n    }\n    60% {\n      left: 60px;\n    }\n    80% {\n      left: 80px;\n    }\n    100% {\n      left: 100px;\n    }\n  }\n}\n\n@media (min-width: 365px) and (max-width: 400px) {\n  @-webkit-keyframes moveForwardFive {\n    0% {\n      left: 0;\n    }\n    20% {\n      left: 23px;\n    }\n    40% {\n      left: 46px;\n    }\n    60% {\n      left: 69px;\n    }\n    80% {\n      left: 92px;\n    }\n    100% {\n      left: 115px;\n    }\n  }\n  @keyframes moveForwardFive {\n    0% {\n      left: 0;\n    }\n    20% {\n      left: 23px;\n    }\n    40% {\n      left: 46px;\n    }\n    60% {\n      left: 69px;\n    }\n    80% {\n      left: 92px;\n    }\n    100% {\n      left: 115px;\n    }\n  }\n}\n\n@media (min-width: 401px) and (max-width: 440px) {\n  @-webkit-keyframes moveForwardFive {\n    0% {\n      left: 0;\n    }\n    20% {\n      left: 25px;\n    }\n    40% {\n      left: 50px;\n    }\n    60% {\n      left: 75px;\n    }\n    80% {\n      left: 100px;\n    }\n    100% {\n      left: 125px;\n      display: none !important;\n    }\n  }\n  @keyframes moveForwardFive {\n    0% {\n      left: 0;\n    }\n    20% {\n      left: 25px;\n    }\n    40% {\n      left: 50px;\n    }\n    60% {\n      left: 75px;\n    }\n    80% {\n      left: 100px;\n    }\n    100% {\n      left: 125px;\n      display: none !important;\n    }\n  }\n}\n\n@media (min-width: 441px) and (max-width: 460px) {\n  @-webkit-keyframes moveForwardFive {\n    0% {\n      left: 0;\n    }\n    20% {\n      left: 27px;\n    }\n    40% {\n      left: 54px;\n    }\n    60% {\n      left: 81px;\n    }\n    80% {\n      left: 108px;\n    }\n    100% {\n      left: 135px;\n      display: none !important;\n    }\n  }\n  @keyframes moveForwardFive {\n    0% {\n      left: 0;\n    }\n    20% {\n      left: 27px;\n    }\n    40% {\n      left: 54px;\n    }\n    60% {\n      left: 81px;\n    }\n    80% {\n      left: 108px;\n    }\n    100% {\n      left: 135px;\n      display: none !important;\n    }\n  }\n}\n\n@-webkit-keyframes down {\n  50% {\n    -webkit-transform: rotate(45deg) translate(0, 26px) scale(0.2);\n            transform: rotate(45deg) translate(0, 26px) scale(0.2);\n  }\n}\n\n@keyframes down {\n  50% {\n    -webkit-transform: rotate(45deg) translate(0, 26px) scale(0.2);\n            transform: rotate(45deg) translate(0, 26px) scale(0.2);\n  }\n}\n\n.colorHomeAnimation {\n  position: absolute;\n  top: 45%;\n  left: 45%;\n}\n\n.colorHomeAnimation .pyro > .before, .colorHomeAnimation .pyro > .after {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n  -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;\n  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;\n}\n\n.colorHomeAnimation .pyro > .after {\n  -webkit-animation-delay: 1.25s, 1.25s, 1.25s;\n  animation-delay: 1.25s, 1.25s, 1.25s;\n  -webkit-animation-duration: 1.25s, 1.25s, 6.25s;\n  animation-duration: 1.25s, 1.25s, 6.25s;\n}\n\n@-webkit-keyframes bang {\n  to {\n    box-shadow: 234px -266.3333333333px darkorange, 322px -385.3333333333px #9d00ff, -267px -348.3333333333px #cc00ff, 127px -19.3333333333px #00f7ff, 287px -52.3333333333px #d9ff00, -297px -503.3333333333px #ff9d00, 298px -428.3333333333px #ff8000, -85px 92.6666666667px #ff0033, -314px -92.3333333333px #00ffbb, 2px -487.3333333333px #ffa600, 193px -326.3333333333px #ff3700, -168px -298.3333333333px #001eff, -187px 103.6666666667px #00ffa6, -108px -403.3333333333px #00aaff, -237px -175.3333333333px #00ff40, 56px -317.3333333333px #73ff00, 315px -61.3333333333px #5eff00, 145px 92.6666666667px #00f2ff, -46px -518.3333333333px #62ff00, -209px -236.3333333333px #ff0073, 77px 4.6666666667px #cc00ff, 126px 56.6666666667px #ff4800, -328px 68.6666666667px #8800ff, 30px -92.3333333333px #1aff00, 147px -191.3333333333px #00ff1e, -142px -377.3333333333px #ff0009, 300px -86.3333333333px #00ffe1, -149px 81.6666666667px #59ff00, -136px -419.3333333333px #00ff48, 292px -295.3333333333px #c8ff00, -123px -230.3333333333px #ffbf00, 278px -388.3333333333px #0073ff, -7px -438.3333333333px #00ff5e, 247px -408.3333333333px #0055ff, -184px -15.3333333333px #ff4800, -83px -376.3333333333px #3c00ff, 213px -274.3333333333px #0080ff, 63px 6.6666666667px #cc00ff, 49px 105.6666666667px #00b7ff, -229px -558.3333333333px #fff700, 226px -302.3333333333px #ff0066, -266px 59.6666666667px #66ff00, -55px -473.3333333333px #b700ff, 84px -130.3333333333px #09ff00, -279px 97.6666666667px #ff0022, 19px -108.3333333333px #00a2ff, -7px -549.3333333333px #ffea00, -28px -125.3333333333px #ff2600, 25px -5.3333333333px yellow, -201px -1.3333333333px #00ff4d, 289px -8.3333333333px #ff00d5;\n  }\n}\n\n@keyframes bang {\n  to {\n    box-shadow: 234px -266.3333333333px darkorange, 322px -385.3333333333px #9d00ff, -267px -348.3333333333px #cc00ff, 127px -19.3333333333px #00f7ff, 287px -52.3333333333px #d9ff00, -297px -503.3333333333px #ff9d00, 298px -428.3333333333px #ff8000, -85px 92.6666666667px #ff0033, -314px -92.3333333333px #00ffbb, 2px -487.3333333333px #ffa600, 193px -326.3333333333px #ff3700, -168px -298.3333333333px #001eff, -187px 103.6666666667px #00ffa6, -108px -403.3333333333px #00aaff, -237px -175.3333333333px #00ff40, 56px -317.3333333333px #73ff00, 315px -61.3333333333px #5eff00, 145px 92.6666666667px #00f2ff, -46px -518.3333333333px #62ff00, -209px -236.3333333333px #ff0073, 77px 4.6666666667px #cc00ff, 126px 56.6666666667px #ff4800, -328px 68.6666666667px #8800ff, 30px -92.3333333333px #1aff00, 147px -191.3333333333px #00ff1e, -142px -377.3333333333px #ff0009, 300px -86.3333333333px #00ffe1, -149px 81.6666666667px #59ff00, -136px -419.3333333333px #00ff48, 292px -295.3333333333px #c8ff00, -123px -230.3333333333px #ffbf00, 278px -388.3333333333px #0073ff, -7px -438.3333333333px #00ff5e, 247px -408.3333333333px #0055ff, -184px -15.3333333333px #ff4800, -83px -376.3333333333px #3c00ff, 213px -274.3333333333px #0080ff, 63px 6.6666666667px #cc00ff, 49px 105.6666666667px #00b7ff, -229px -558.3333333333px #fff700, 226px -302.3333333333px #ff0066, -266px 59.6666666667px #66ff00, -55px -473.3333333333px #b700ff, 84px -130.3333333333px #09ff00, -279px 97.6666666667px #ff0022, 19px -108.3333333333px #00a2ff, -7px -549.3333333333px #ffea00, -28px -125.3333333333px #ff2600, 25px -5.3333333333px yellow, -201px -1.3333333333px #00ff4d, 289px -8.3333333333px #ff00d5;\n  }\n}\n\n@-webkit-keyframes gravity {\n  to {\n    transform: translateY(200px);\n    -moz-transform: translateY(200px);\n    -webkit-transform: translateY(200px);\n    -o-transform: translateY(200px);\n    -ms-transform: translateY(200px);\n    opacity: 0;\n  }\n}\n\n@keyframes gravity {\n  to {\n    transform: translateY(200px);\n    -moz-transform: translateY(200px);\n    -webkit-transform: translateY(200px);\n    -o-transform: translateY(200px);\n    -ms-transform: translateY(200px);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes position {\n  0%, 49.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  50%, 100% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n}\n\n@keyframes position {\n  0%, 49.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  50%, 100% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS1wbGF5L0Q6XFxQcm9qZWN0c1xcSW9uaWMtQW5ndWxhci1NdWx0aXBsYXllci1MdWRvLUdhbWUvc3JjXFxhcHBcXHBhZ2VzXFxnYW1lLXBsYXlcXGdhbWUtcGxheS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2dhbWUtcGxheS9nYW1lLXBsYXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQTtFQUNFLDBEQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQ2ZGOztBRDRCQTtFQUNFLDRFQUFBO0FDekJGOztBRDJCQTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7QUN6QkY7O0FEZ0NFO0VBRUUseUJBUk07RUFTTix3QkFSSztFQVNMLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDL0JKOztBRHFDQTtFQUNFLFdBQUE7QUNsQ0Y7O0FEcUNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNsQ0Y7O0FEb0NBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNqQ0Y7O0FEb0NBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNqQ0Y7O0FEcUNFO0VBQ0UseUJBQUE7RUFFQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNuQ0o7O0FEeUNFO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtBQ3RDSjs7QUR3Q0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUN0Q0o7O0FEMENFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3ZDSjs7QUR5Q0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUN2Q0o7O0FENENFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3pDSjs7QUQyQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUN6Q0o7O0FENENBO0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUMxQ0Y7O0FENkNBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQzFDRjs7QUQ2Q0E7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUMxQ0Y7O0FEOENBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQzNDRjs7QUQ4Q0E7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQzNDRjs7QUQ4Q0E7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUMzQ0Y7O0FENENBO0VBQ0UsaUJBQUE7QUMxQ0Y7O0FENENBO0VBR0UsV0FBQTtFQUNBLGtCQUFBO0VBRUEsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUM3Q0Y7O0FEK0NBO0VBQ0EseUJBQUE7QUM3Q0E7O0FEZ0RBO0VBQ0Esc0JBQUE7RUFDQSxrREFBQTtVQUFBLDBDQUFBO0FDOUNBOztBRG9EQTtFQUVFLHlCQWpNUztBQytJWDs7QURtREU7RUFDRSx5QkFuTU87QUNrSlg7O0FEd0RBO0VBQ0UseUJBMU1XO0FDcUpiOztBRHdERTtFQUNFLHlCQTlNUztBQ3dKYjs7QUQ0REE7RUFDRSx5QkFuTlk7QUMwSmQ7O0FENERFO0VBQ0UseUJBdk5VO0VBd05WLDJCQUFBO0FDMURKOztBRCtEQTtFQUVFLHlCQWhPVTtBQ21LWjs7QUQrREU7RUFDRSx5QkFuT1E7QUNzS1o7O0FEaUVBO0VBU0UsV0FBQTtBQ3RFRjs7QUQrREU7RUFHRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUMvREo7O0FEb0VBO0VBQ0UseUJBclBXO0VBc1BYLGNBdFBXO0FDcUxiOztBRG1FQTtFQUNFLHlCQTFQUztFQTJQVCxjQTNQUztBQzJMWDs7QURrRUE7RUFDRSx5QkE1UFU7RUE2UFYsY0E3UFU7QUM4TFo7O0FEaUVBO0VBQ0UseUJBL1BZO0VBZ1FaLGNBaFFZO0FDa01kOztBRGlFQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBRUEsc0JBQUE7RUFDQSwyQkFBQTtBQy9ERjs7QUQwRUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0QsWUFBQTtBQ3pFRDs7QUQwRUU7RUFDRSxxQ0FDQTtVQURBLDZCQUNBO0VBQ0Esc0JBQUE7QUN6RUo7O0FENEVBO0VBSUEsaUJBQUE7RUFDQyxvQkFBQTtFQUFBLGFBQUE7QUM3RUQ7O0FEK0VDO0VBRUMsb0JBQUE7RUFBQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0FDL0VGOztBRG1GQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQXNCLDhCQUFBO0VBQ3FELCtCQUFBO0VBQzNFLDBHQUFBO0VBQUEsZ0VBQUE7RUFBa0UscUVBQUE7RUFFcEUsNEJBQUE7RUFDQSwrQkFBQTtBQy9FQTs7QURtRkE7RUFDRSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUFzQiw4QkFBQTtFQUM0QywrQkFBQTtFQUNsRSxxRkFBQTtFQUFBLHVEQUFBO0VBQXlELHFFQUFBO0VBRXpELGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBR0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDRixnQkFBQTtBQ2pGQTs7QURvRkE7RUFDRSwyQkFBQTtFQUNBLHNCQXhWYztFQXlWZCx1QkF6VmM7RUEwVmQsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ2xGRjs7QURzRkU7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0FDcEZKOztBRHNGRTtFQUNFLHNEQUNBO1VBREEsOENBQ0E7RUFFQSwrQkFBQTtFQUNBLHNCQUFBO0FDdEZKOztBRHlGRTtFQUNFLG9EQUNBO1VBREEsNENBQ0E7RUFFQSwrQkFBQTtFQUNBLHNCQUFBO0FDekZKOztBRDRGRTtFQUNFLHFEQUNBO1VBREEsNkNBQ0E7RUFFQSwrQkFBQTtFQUNBLHNCQUFBO0FDNUZKOztBRCtGRTtFQUNFLG9EQUNBO1VBREEsNENBQ0E7RUFFQSwrQkFBQTtFQUNBLHNCQUFBO0FDL0ZKOztBRGtHRTtFQUNFLHFEQUNBO1VBREEsNkNBQ0E7RUFFQSwrQkFBQTtFQUNBLHNCQUFBO0FDbEdKOztBRHFHRTtFQUVFLFdBclpRO0VBc1pSLFlBdFpRO0VBdVpSLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDcEdKOztBRDJIRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBR0EsUUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSwwQ0FBQTtFQUFBLGtDQUFBO0VBQUEsMEJBQUE7RUFBQSxrREFBQTtBQzNISjs7QUQrSEU7RUFDRSxlQUFBO0FDN0hKOztBRGdJRTtFQUNFLGNBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FwY1E7RUFxY1IsWUFyY1E7RUFzY1Isa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUM5SEo7O0FEc0lFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNwSUo7O0FEd0lFO0VBQWUsUUFBQTtFQUFVLFNBQUE7QUNwSTNCOztBRHNJRTtFQUFjLFNBQUE7RUFBVyxTQUFBO0FDbEkzQjs7QURtSUU7RUFBYyxRQUFBO0VBQVUsU0FBQTtBQy9IMUI7O0FEbUlFO0VBQWMsU0FBQTtFQUFXLFNBQUE7QUMvSDNCOztBRGdJRTtFQUFjLFFBQUE7RUFBVSxTQUFBO0FDNUgxQjs7QUQ2SEU7RUFBYyxTQUFBO0VBQVcsU0FBQTtBQ3pIM0I7O0FEMEhFO0VBQWMsU0FBQTtFQUFXLFNBQUE7QUN0SDNCOztBRHdIRTtFQUFhLFNBQUE7RUFBVyxTQUFBO0FDcEgxQjs7QURxSEU7RUFBYSxRQUFBO0VBQVUsU0FBQTtBQ2pIekI7O0FEa0hFO0VBQWEsU0FBQTtFQUFXLFNBQUE7QUM5RzFCOztBRCtHRTtFQUFhLFNBQUE7RUFBVyxTQUFBO0FDM0cxQjs7QUQ0R0U7RUFBYSxVQUFBO0VBQVksU0FBQTtBQ3hHM0I7O0FEMEdFO0VBQWdCLFNBQUE7RUFBVyxTQUFBO0FDdEc3Qjs7QUR1R0U7RUFBZ0IsUUFBQTtFQUFVLFNBQUE7QUNuRzVCOztBRG9HRTtFQUFnQixRQUFBO0VBQVUsU0FBQTtBQ2hHNUI7O0FEaUdFO0VBQWdCLFVBQUE7RUFBWSxTQUFBO0FDN0Y5Qjs7QUQ4RkU7RUFBZ0IsVUFBQTtFQUFZLFNBQUE7QUMxRjlCOztBRDJGRTtFQUFnQixTQUFBO0VBQVcsU0FBQTtBQ3ZGN0I7O0FEMEZBO0VBQ0Usc0NBQUE7VUFBQSw4QkFBQTtBQ3ZGRjs7QUQ2RkU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBL2ZrQjtFQWdnQmxCLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQWxnQmtCO0VBbWdCbEIseUJBM2dCTztFQTRnQlAsa0JBQUE7RUFDQSwyQkFBQTtBQzFGSjs7QURpR0U7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBL2dCa0I7RUFnaEJsQix5QkFoaEJrQjtFQWloQmxCLGVBQUE7RUFDQSwyQkFBQTtFQUVBLGdCQUFBO0VBQ0EseUJBNWhCUztFQTZoQlQsa0JBQUE7QUMvRko7O0FEc0dFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQWhpQmtCO0VBaWlCbEIseUJBamlCa0I7RUFraUJsQixlQUFBO0VBQ0EsMkJBQUE7RUFFQSxnQkFBQTtFQUNBLHlCQTVpQlE7RUE2aUJSLGtCQUFBO0FDcEdKOztBRDBHRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFoakJrQjtFQWlqQmxCLHlCQWpqQmtCO0VBa2pCbEIsZUFBQTtFQUNBLDJCQUFBO0VBRUEsZ0JBQUE7RUFDQSx5QkEzakJVO0VBNGpCVixrQkFBQTtBQ3hHSjs7QUQ0R0E7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ3pHRjs7QUQyR0E7RUFDRSwyQkFBQTtFQUNBLHNCQWxrQmM7RUFta0JkLHVCQW5rQmM7RUFva0JkLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFFQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFJQSw0RUFBQTtFQUNBLGdEQUFBO0FDNUdGOztBRDhHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBRUEsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUM3R0o7O0FEa0hBO0VBQ0Usa0JBQUE7QUMvR0Y7O0FEaUhBO0VBRUUsbURBQUE7VUFBQSwyQ0FBQTtFQUNBLFlBQUE7QUMvR0Y7O0FEa0hBO0VBQ0U7SUFDRSxzREFBQTtZQUFBLDhDQUFBO0VDL0dGO0FBQ0Y7O0FENEdBO0VBQ0U7SUFDRSxzREFBQTtZQUFBLDhDQUFBO0VDL0dGO0FBQ0Y7O0FEbUhBO0VBR0U7SUFDRTtNQUNFLE9BQUE7SUNuSEY7SURxSEE7TUFDRSxVQUFBO0lDbkhGO0lEcUhBO01BQ0UsVUFBQTtJQ25IRjtJRHFIQTtNQUNFLFVBQUE7SUNuSEY7SURxSEE7TUFDRSxVQUFBO0lDbkhGO0lEcUhBO01BQ0UsVUFBQTtJQ25IRjtFQUNGO0VEaUdBO0lBQ0U7TUFDRSxPQUFBO0lDbkhGO0lEcUhBO01BQ0UsVUFBQTtJQ25IRjtJRHFIQTtNQUNFLFVBQUE7SUNuSEY7SURxSEE7TUFDRSxVQUFBO0lDbkhGO0lEcUhBO01BQ0UsVUFBQTtJQ25IRjtJRHFIQTtNQUNFLFVBQUE7SUNuSEY7RUFDRjtBQUNGOztBRHFIQTtFQUdFO0lBQ0U7TUFDRSxPQUFBO0lDckhGO0lEdUhBO01BQ0UsVUFBQTtJQ3JIRjtJRHVIQTtNQUNFLFVBQUE7SUNySEY7SUR1SEE7TUFDRSxVQUFBO0lDckhGO0lEdUhBO01BQ0UsVUFBQTtJQ3JIRjtJRHVIQTtNQUNFLFVBQUE7SUNySEY7RUFDRjtFRG1HQTtJQUNFO01BQ0UsT0FBQTtJQ3JIRjtJRHVIQTtNQUNFLFVBQUE7SUNySEY7SUR1SEE7TUFDRSxVQUFBO0lDckhGO0lEdUhBO01BQ0UsVUFBQTtJQ3JIRjtJRHVIQTtNQUNFLFVBQUE7SUNySEY7SUR1SEE7TUFDRSxVQUFBO0lDckhGO0VBQ0Y7QUFDRjs7QUR5SEE7RUFHRTtJQUNFO01BQ0UsT0FBQTtJQ3pIRjtJRDJIQTtNQUNFLFVBQUE7SUN6SEY7SUQySEE7TUFDRSxVQUFBO0lDekhGO0lEMkhBO01BQ0UsVUFBQTtJQ3pIRjtJRDJIQTtNQUNFLFVBQUE7SUN6SEY7SUQySEE7TUFDRSxXQUFBO0lDekhGO0VBQ0Y7RUR1R0E7SUFDRTtNQUNFLE9BQUE7SUN6SEY7SUQySEE7TUFDRSxVQUFBO0lDekhGO0lEMkhBO01BQ0UsVUFBQTtJQ3pIRjtJRDJIQTtNQUNFLFVBQUE7SUN6SEY7SUQySEE7TUFDRSxVQUFBO0lDekhGO0lEMkhBO01BQ0UsV0FBQTtJQ3pIRjtFQUNGO0FBQ0Y7O0FENEhBO0VBR0U7SUFDRTtNQUNFLE9BQUE7SUM1SEY7SUQ4SEE7TUFDRSxVQUFBO0lDNUhGO0lEOEhBO01BQ0UsVUFBQTtJQzVIRjtJRDhIQTtNQUNFLFVBQUE7SUM1SEY7SUQ4SEE7TUFDRSxVQUFBO0lDNUhGO0lEOEhBO01BQ0UsV0FBQTtJQzVIRjtFQUNGO0VEMEdBO0lBQ0U7TUFDRSxPQUFBO0lDNUhGO0lEOEhBO01BQ0UsVUFBQTtJQzVIRjtJRDhIQTtNQUNFLFVBQUE7SUM1SEY7SUQ4SEE7TUFDRSxVQUFBO0lDNUhGO0lEOEhBO01BQ0UsVUFBQTtJQzVIRjtJRDhIQTtNQUNFLFdBQUE7SUM1SEY7RUFDRjtBQUNGOztBRCtIQTtFQUdFO0lBQ0U7TUFDRSxPQUFBO0lDL0hGO0lEaUlBO01BQ0UsVUFBQTtJQy9IRjtJRGlJQTtNQUNFLFVBQUE7SUMvSEY7SURpSUE7TUFDRSxVQUFBO0lDL0hGO0lEaUlBO01BQ0UsV0FBQTtJQy9IRjtJRGlJQTtNQUNFLFdBQUE7TUFDQSx3QkFBQTtJQy9IRjtFQUNGO0VENEdBO0lBQ0U7TUFDRSxPQUFBO0lDL0hGO0lEaUlBO01BQ0UsVUFBQTtJQy9IRjtJRGlJQTtNQUNFLFVBQUE7SUMvSEY7SURpSUE7TUFDRSxVQUFBO0lDL0hGO0lEaUlBO01BQ0UsV0FBQTtJQy9IRjtJRGlJQTtNQUNFLFdBQUE7TUFDQSx3QkFBQTtJQy9IRjtFQUNGO0FBQ0Y7O0FEa0lBO0VBR0U7SUFDRTtNQUNFLE9BQUE7SUNsSUY7SURvSUE7TUFDRSxVQUFBO0lDbElGO0lEb0lBO01BQ0UsVUFBQTtJQ2xJRjtJRG9JQTtNQUNFLFVBQUE7SUNsSUY7SURvSUE7TUFDRSxXQUFBO0lDbElGO0lEb0lBO01BQ0UsV0FBQTtNQUNBLHdCQUFBO0lDbElGO0VBQ0Y7RUQrR0E7SUFDRTtNQUNFLE9BQUE7SUNsSUY7SURvSUE7TUFDRSxVQUFBO0lDbElGO0lEb0lBO01BQ0UsVUFBQTtJQ2xJRjtJRG9JQTtNQUNFLFVBQUE7SUNsSUY7SURvSUE7TUFDRSxXQUFBO0lDbElGO0lEb0lBO01BQ0UsV0FBQTtNQUNBLHdCQUFBO0lDbElGO0VBQ0Y7QUFDRjs7QURxSUE7RUFDRTtJQUNFLDhEQUFBO1lBQUEsc0RBQUE7RUNuSUY7QUFDRjs7QURnSUE7RUFDRTtJQUNFLDhEQUFBO1lBQUEsc0RBQUE7RUNuSUY7QUFDRjs7QUR3SUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDdElBOztBRDRNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdnQkE3RGM7RUEwQ1osb0lBb0JpQjtFQWpCakIsNEhBaUJpQjtBQ3RNckI7O0FEeU1BO0VBdkNJLDRDQXdDdUI7RUFyQ3ZCLG9DQXFDdUI7RUFoQ3ZCLCtDQWlDMEI7RUE5QjFCLHVDQThCMEI7QUMvTDlCOztBRCtISTtFQW9FRjtJQUNFLGtvREE1RVc7RUNwSGI7QUFDRjs7QUQwSUk7RUFvREY7SUFDRSxrb0RBNUVXO0VDaEdiO0FBQ0Y7O0FEc0dJO0VBMEVGO0lBNUJFLDRCQTZCbUI7SUE1Qm5CLGlDQTRCbUI7SUEzQm5CLG9DQTJCbUI7SUExQm5CLCtCQTBCbUI7SUF6Qm5CLGdDQXlCbUI7SUFDbkIsVUFBQTtFQ3pLRjtBQUNGOztBRDRHSTtFQTBERjtJQTVCRSw0QkE2Qm1CO0lBNUJuQixpQ0E0Qm1CO0lBM0JuQixvQ0EyQm1CO0lBMUJuQiwrQkEwQm1CO0lBekJuQixnQ0F5Qm1CO0lBQ25CLFVBQUE7RUNqSUY7QUFDRjs7QURvREk7RUFrRkY7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUNuSUY7RURxSUE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUNuSUY7QUFDRjs7QUQwREk7RUFrRUY7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMzRkY7RUQ2RkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUMzRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUtcGxheS9nYW1lLXBsYXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4kcmVkLWNvbG9yOiNGRjAwMDA7XHJcbiRncmVlbi1jb2xvcjojMDBhODAwO1xyXG4kYmx1ZS1jb2xvcjojMDA3QkM0O1xyXG4keWVsbG93LWNvbG9yOiNmNGNhMTY7XHJcblxyXG4kc2l6ZS1kaWNlOiA0NXB4O1xyXG5cclxuJGxvY2F0aW9uLXNpemU6IGNhbGMoNXZ3ICsgNXB4KTtcclxuJGxvY2F0aW9uLWNpcmNsZS1zaXplOmNhbGMoMS41dncgKyA1cHgpOztcclxuXHJcbiRjbHI6ICMzNzJjNDQ7XHJcblxyXG5cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDp1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLmpwZ1wiKSAgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICAtLWJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBmb250LWZhbWlseTpcIkZyZWRva2EgT25lXCI7XHJcblxyXG4gIC8vIC0tcGFkZGluZy10b3A6MTVweDtcclxuICAvLyAtLXBhZGRpbmctYm90dG9tOjE1cHg7XHJcbiAgLy8gLS1wYWRkaW5nLXN0YXJ0OjE1cHg7XHJcbiAgLy8gLS1wYWRkaW5nLWVuZDoxNXB4O1xyXG59XHJcblxyXG4udGV4dC15ZWxsb3d7XHJcblxyXG59XHJcblxyXG5cclxuLmJveC1zaGFkb3d7XHJcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxufVxyXG4ubWFpbntcclxuLy8gICRtYXJnaW4tdG9wOmNhbGMoY2FsYygxMDB2aCAtIGNhbGMoMTAwdncgLSAyMHB4ICkpKTtcclxuICBtYXJnaW4tdG9wOjEwdmg7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgJGhlaWdodDpjYWxjKDEwMHZ3IC0gNXB4KTtcclxuICAkd2lkdGg6Y2FsYygxMDB2dyAtIDVweCk7XHJcbiAgLy8gQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAvLyAgICRoZWlnaHQ6Y2FsYygxMDB2aCAtIDVweCk7XHJcbiAgLy8gICAkd2lkdGg6Y2FsYygxMDB2aCAtIDVweCk7XHJcbiAgLy8gfVxyXG4gIC5tYWluLWx1ZG97XHJcbiAgICAvLyAgYm9yZGVyOnNvbGlkIGJsdWUgMnB4O1xyXG4gICAgaGVpZ2h0OiRoZWlnaHQ7XHJcbiAgICB3aWR0aDokd2lkdGg7XHJcbiAgICBtYXgtaGVpZ2h0OjUwMHB4O1xyXG4gICAgbWluLWhlaWdodDoyODBweDtcclxuICAgIG1heC13aWR0aDo1MDBweDtcclxuICAgIG1pbi13aWR0aDoyODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIC8vdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi53cmFwcGVyTWlkZGxle1xyXG4gIGhlaWdodDoyMCU7XHJcbiAgbWF4LWhlaWdodDoxMDBweDtcclxuICBtaW4taGVpZ2h0OjYwcHg7XHJcbn1cclxuLndyYXBwZXJUb3BCb3R0b217XHJcbiAgaGVpZ2h0OjQwJTtcclxuICBtYXgtaGVpZ2h0OjIwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6MTIwcHg7XHJcbn1cclxuXHJcbi5yb3csaW9uLWdyaWR7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1xyXG4gIC0taW9uLWdyaWQtcGFkZGluZzowO1xyXG59XHJcblxyXG4uYm94e1xyXG4gIGlvbi1ncmlke1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1xyXG5cclxuICAgIC0taW9uLWdyaWQtcGFkZGluZzowO1xyXG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nLWxnOjA7XHJcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmctbWQ6MDtcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZy14bDowO1xyXG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nLXhzOjA7XHJcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmctc206MDtcclxuICB9XHJcbn1cclxuXHJcbiRib3JkZXItY29sb3I6IzU5NTk1OTtcclxuLmJvcmRlci1sZWZ0VG9we1xyXG4gIGlvbi1jb2x7XHJcbiAgICBib3JkZXItbGVmdDpzb2xpZCAkYm9yZGVyLWNvbG9yIDFweDtcclxuICAgIGJvcmRlci10b3A6c29saWQgJGJvcmRlci1jb2xvciAxcHg7XHJcbiAgfVxyXG4gIC5sb2NhdGlvbntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOi0yMHB4O1xyXG4gIH1cclxufVxyXG4uYm9yZGVyLXJpZ2h0VG9we1xyXG4gIGlvbi1jb2x7XHJcbiAgICBib3JkZXItcmlnaHQ6c29saWQgJGJvcmRlci1jb2xvciAxcHg7XHJcbiAgICBib3JkZXItdG9wOnNvbGlkICRib3JkZXItY29sb3IgMXB4O1xyXG4gIH1cclxuICAubG9jYXRpb257XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDotMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3JkZXItdG9we1xyXG4gIGlvbi1jb2x7XHJcbiAgICBib3JkZXItcmlnaHQ6c29saWQgJGJvcmRlci1jb2xvciAxcHg7XHJcbiAgICBib3JkZXItdG9wOnNvbGlkICRib3JkZXItY29sb3IgMXB4O1xyXG4gIH1cclxuICAubG9jYXRpb257XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDotMjBweDtcclxuICB9XHJcbn1cclxuaW9uLWNvbHtcclxuLy8gIGJvcmRlcjpzb2xpZCAjYjViNWI1IDFweDtcclxuICBwYWRkaW5nOjA7XHJcbiAgbWFyZ2luOjA7XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xyXG4gIGNvbG9yOndoaXRlO1xyXG5cclxufVxyXG4uY29sLXN0YXJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3N0YXIucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZWJlYmViO1xyXG59XHJcblxyXG4ucm93MSwucm93Miwucm93Mywucm93NCwucm93NSwucm93NntcclxuICBoZWlnaHQ6MTYuNiU7XHJcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOjA7XHJcbn1cclxuXHJcblxyXG4ucm93TTEsLnJvd00yLC5yb3dNMywucm93TTQsLnJvd001LC5yb3dNNntcclxuICBoZWlnaHQ6MzMuMzMlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOjA7XHJcbn1cclxuXHJcbi5pbm5lckJveHtcclxuICBib3JkZXI6c29saWQgI2JkYmRiZCAwLjVweDtcclxuICBoZWlnaHQ6MTAwJTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG5cclxuLnBsYXllckJveHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBwYWRkaW5nOmNhbGMoMS41dncgKyAxOHB4KTtcclxuICBib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7XHJcbi5sb2NhdGlvbntcclxuICBtYXJnaW4tdG9wOi0xNHB4O1xyXG59XHJcbi50ZXh0e1xyXG5cclxuLy8gIGJvcmRlcjpzb2xpZCBibHVlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbi8vICB0b3A6Y2FsYygtMXZ3IC0gNXB4ICk7XHJcbiAgbGVmdDowO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGZvbnQtc2l6ZTpjYWxjKDF2dyArIDEwcHgpO1xyXG59XHJcbi50ZXh0LXllbGxvdyAsIC50ZXh0LWJsdWV7XHJcbmJvdHRvbTpjYWxjKC0xdncgLSA1cHggKTtcclxufVxyXG5cclxuLnRleHQtcmVkICwgLnRleHQtZ3JlZW57XHJcbnRvcDpjYWxjKC0xdncgLSA1cHggKTtcclxudHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKSByb3RhdGVYKDE4MGRlZyk7XHJcbn1cclxuXHJcblxyXG59XHJcblxyXG4ucGxheWVyMUJveHtcclxuLy8gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWNvbG9yO1xyXG4gIGlvbi1jb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRyZWQtY29sb3I7XHJcbiAgICAvLyAgYm9yZGVyOiBzb2xpZCBibGFjayAwLjVweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLnBsYXllcjJCb3h7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjokZ3JlZW4tY29sb3I7XHJcbiAgLy9ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG5cclxuICBpb24tY29se1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokZ3JlZW4tY29sb3I7XHJcbiAgICAvLyAgYm9yZGVyOiBzb2xpZCBibGFjayAwLjVweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4ucGxheWVyM0JveHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LWNvbG9yO1xyXG4gIC8vYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxMHB4O1xyXG5cclxuICBpb24tY29se1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokeWVsbG93LWNvbG9yO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjYmRiZGJkICAwLjVweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4ucGxheWVyNEJveHtcclxuICAvL2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XHJcblxyXG4gIGlvbi1jb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRibHVlLWNvbG9yO1xyXG4gIH1cclxuXHJcbn1cclxuLnNtYWxsQm94Um93e1xyXG5cclxuICBpb24tY29se1xyXG5cclxuICAgIC8vbWFyZ2luOjEuOXZ3O1xyXG4gICAgbWFyZ2luOmNhbGMoMyUgKyAycHgpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjYmRiZGJkIDAuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgfVxyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4uZ3JlZW5Db2x7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjokZ3JlZW4tY29sb3I7XHJcbiAgY29sb3I6JGdyZWVuLWNvbG9yXHJcbn1cclxuLnJlZENvbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiRyZWQtY29sb3I7XHJcbiAgY29sb3I6JHJlZC1jb2xvcjtcclxufVxyXG4uYmx1ZUNvbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiRibHVlLWNvbG9yO1xyXG4gIGNvbG9yOiRibHVlLWNvbG9yO1xyXG59XHJcbi55ZWxsb3dDb2x7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjokeWVsbG93LWNvbG9yO1xyXG4gIGNvbG9yOiR5ZWxsb3ctY29sb3I7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgYm9yZGVyLWxlZnQ6c29saWQgJHJlZC1jb2xvciAyMHB4O1xyXG4gIGJvcmRlci1yaWdodDpzb2xpZCAkYmx1ZS1jb2xvciAyMHB4O1xyXG4gIGJvcmRlci10b3A6c29saWQgJGdyZWVuLWNvbG9yIDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTpzb2xpZCAkeWVsbG93LWNvbG9yIDIwcHg7XHJcbi8vICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZS5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG59XHJcblxyXG5cclxuLnJlZFN0YXJ0LC5ibHVlU3RhcnQsLnllbGxvd1N0YXJ0LC5ncmVlblN0YXJ0e1xyXG4gIC8vXHJcbiAgLy8gLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCA2MSUgMzUlLCA5OCUgMzUlLCA2OCUgNTclLCA3OSUgOTElLCA1MCUgNzAlLCAyMSUgOTElLCAzMiUgNTclLCAyJSAzNSUsIDM5JSAzNSUpO1xyXG4gIC8vIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDYxJSAzNSUsIDk4JSAzNSUsIDY4JSA1NyUsIDc5JSA5MSUsIDUwJSA3MCUsIDIxJSA5MSUsIDMyJSA1NyUsIDIlIDM1JSwgMzklIDM1JSk7XHJcbn1cclxuXHJcblxyXG4ubWFpbi1kaWNle1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuXHJcbiAvL2JvcmRlcjpzb2xpZCByZWQgMnB4O1xyXG4gIG1heC13aWR0aDo1MDBweDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBwYWRkaW5nOjVweDtcclxuICBtYXJnaW46YXV0bztcclxuICB3aWR0aDoxMDAlO1xyXG4gaGVpZ2h0OjgwcHg7XHJcbiAgLmN1YmUgLmZyb250IHtcclxuICAgIHRyYW5zZm9ybTpcclxuICAgIHRyYW5zbGF0ZVooJHNpemUtZGljZS8yKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICB9XHJcblxyXG4uZGljZS1yZWR7XHJcbiAvL2JvcmRlcjpzb2xpZCBwaW5rO1xyXG4vLyB3aWR0aDoxMDBweDtcclxuLy8gbGVmdDoxMHB4O1xyXG5tYXJnaW4tbGVmdDoxMHB4O1xyXG4gZGlzcGxheTpmbGV4O1xyXG59XHJcbiAuZGljZS1ncmVlbntcclxuLy8gIGJvcmRlcjpzb2xpZCBwaW5rO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuLy8gIG1hcmdpbi1sZWZ0OjQwJTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICByaWdodDoxMHB4O1xyXG59XHJcblxyXG5cclxuLmxvY2F0aW9uLXVzZXItd3JhcHBlcntcclxuICBib3JkZXI6c29saWQgYmxhY2sgMXB4O1xyXG4gIHBhZGRpbmc6M3B4O1xyXG4gIG1hcmdpbi10b3A6MiU7XHJcbiAgaGVpZ2h0OjYwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwZjBjMjk7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbi8vICB3aWR0aDoyMCU7XHJcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTBweDtcclxuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxMHB4O1xyXG4vL2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7XHJcbi8vYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxufVxyXG4uZGljZS13cmFwcGVye1xyXG4gIGJvcmRlci10b3A6c29saWQgYmxhY2sgMXB4O1xyXG4gIGJvcmRlci1yaWdodDpzb2xpZCBibGFjayAxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTpzb2xpZCBibGFjayAxcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmN2U1ZjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZlYjQ3YiwgI2ZmN2U1Zik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZlYjQ3YiwgI2ZmN2U1Zik7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuXHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206NXB4O1xyXG5cclxuICAvL3BhZGRpbmctcmlnaHQ6MTNweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcclxub3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4ubG9jYXRpb24tdXNlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gIHdpZHRoOiAkbG9jYXRpb24tc2l6ZTtcclxuICBoZWlnaHQ6ICRsb2NhdGlvbi1zaXplO1xyXG4gIG1heC13aWR0aDogMzBweDtcclxuICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDA7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjo3cHggYXV0bztcclxufVxyXG5cclxuXHJcbiAgLmN1YmUgLmZyb250e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2ZhY2VzL2QxLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIH1cclxuICAuY3ViZSAuYmFjayB7XHJcbiAgICB0cmFuc2Zvcm06XHJcbiAgICByb3RhdGVYKC0xODBkZWcpXHJcbiAgICB0cmFuc2xhdGVaKCRzaXplLWRpY2UvMik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvZmFjZXMvZDIucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgfVxyXG5cclxuICAuY3ViZSAucmlnaHQge1xyXG4gICAgdHJhbnNmb3JtOlxyXG4gICAgcm90YXRlWSg5MGRlZylcclxuICAgIHRyYW5zbGF0ZVooJHNpemUtZGljZS8yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9mYWNlcy9kMy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5jdWJlIC5sZWZ0IHtcclxuICAgIHRyYW5zZm9ybTpcclxuICAgIHJvdGF0ZVkoLTkwZGVnKVxyXG4gICAgdHJhbnNsYXRlWigkc2l6ZS1kaWNlLzIpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2ZhY2VzL2Q0LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmN1YmUgLnRvcCB7XHJcbiAgICB0cmFuc2Zvcm06XHJcbiAgICByb3RhdGVYKDkwZGVnKVxyXG4gICAgdHJhbnNsYXRlWigkc2l6ZS1kaWNlLzIpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2ZhY2VzL2Q1LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmN1YmUgLmJvdHRvbSB7XHJcbiAgICB0cmFuc2Zvcm06XHJcbiAgICByb3RhdGVYKC05MGRlZylcclxuICAgIHRyYW5zbGF0ZVooJHNpemUtZGljZS8yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9mYWNlcy9kNi5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgICAvL2JvcmRlcjpzb2xpZCBibHVlO1xyXG4gICAgd2lkdGg6ICRzaXplLWRpY2U7XHJcbiAgICBoZWlnaHQ6ICRzaXplLWRpY2U7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICAvLyAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgICAvLyAgYm9yZGVyOnNvbGlkIG9yYW5nZSAycHg7XHJcbiAgfVxyXG4gIC8vXHJcbiAgLy8gLmNvbnRhaW5lci1yZWR7XHJcbiAgLy8gICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIC8vIH1cclxuICAvLyAuY29udGFpbmVyLWdyZWVue1xyXG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICAgcmlnaHQ6MTBweDtcclxuICAvLyB9XHJcbiAgLy9cclxuICAvLyAuY29udGFpbmVyLXllbGxvd3tcclxuICAvLyAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgLy8gfVxyXG4gIC8vXHJcbiAgLy8gLmNvbnRhaW5lci1ibHVle1xyXG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICAgcmlnaHQ6MTBweDtcclxuICAvLyB9XHJcblxyXG5cclxuICAuY3ViZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vdG9wOiAxMDBweDtcclxuICAvLyAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcclxuICAgIC8vIGJvcmRlcjpzb2xpZCB5ZWxsb3cgN3B4O1xyXG4gIH1cclxuXHJcbiAgLmN1YmU6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmN1YmUgZGl2IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzppbnNldCAwcHggMHB4IDI1cHggcmdiYSgwLDAsMCwuNSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogJHNpemUtZGljZTtcclxuICAgIGhlaWdodDogJHNpemUtZGljZTtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA1MDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogJHNpemUtZGljZS80IDA7XHJcbiAgICAvLyAgYm9yZGVyOnNvbGlkIGdyZWVuO1xyXG4gICAgLy8gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgzLCA4MiwgMjE3LDEpO1xyXG4gICAgLy8gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAvLyAgYmFja2dyb3VuZDp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvZmFjZXMvZDIyLnBuZycpO1xyXG4gICAgLy8gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICB9XHJcblxyXG4gIC5kb3Qge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6OHB4O1xyXG4gICAgYm9yZGVyOnNvbGlkIHRyYW5zcGFyZW50IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZnJvbnQgLmRvdDEgeyB0b3A6IDQxJTsgbGVmdDogNDAlOyB9XHJcblxyXG4gIC5iYWNrIC5kb3QxIHsgdG9wOiAtMTAlOyBsZWZ0OiA0MCU7IH1cclxuICAuYmFjayAuZG90MiB7IHRvcDogNTAlOyBsZWZ0OiA0MCU7IH1cclxuICAvLyAucmlnaHQgLmRvdDEgeyB0b3A6IDVweDsgbGVmdDogNXB4OyB9XHJcbiAgLy8gLnJpZ2h0IC5kb3QyIHsgdG9wOiA1cHg7IGxlZnQ6IDVweDsgfVxyXG4gIC8vIC5yaWdodCAuZG90MyB7IHRvcDogMjVweDsgbGVmdDogMjVweDsgfVxyXG4gIC5sZWZ0IC5kb3QxIHsgdG9wOiAtMjAlOyBsZWZ0OiAxNSU7IH1cclxuICAubGVmdCAuZG90MiB7IHRvcDogNjAlOyBsZWZ0OjE1JTsgfVxyXG4gIC5sZWZ0IC5kb3QzIHsgdG9wOiAtOTUlOyBsZWZ0OiA2NSU7IH1cclxuICAubGVmdCAuZG90NCB7IHRvcDogLTIwJTsgbGVmdDogNjUlOyB9XHJcblxyXG4gIC50b3AgLmRvdDEgeyB0b3A6IC0xMCU7IGxlZnQ6IDEwJTsgfVxyXG4gIC50b3AgLmRvdDIgeyB0b3A6IDQ1JTsgbGVmdDogMTAlOyB9XHJcbiAgLnRvcCAuZG90MyB7IHRvcDogLTg1JTsgbGVmdDogNjUlOyB9XHJcbiAgLnRvcCAuZG90NCB7IHRvcDogLTMyJTsgbGVmdDogNjUlOyB9XHJcbiAgLnRvcCAuZG90NSB7IHRvcDogLTExMCU7IGxlZnQ6IDM3JTsgfVxyXG5cclxuICAuYm90dG9tIC5kb3QxIHsgdG9wOiAtMjIlOyBsZWZ0OiAxNSU7IH1cclxuICAuYm90dG9tIC5kb3QyIHsgdG9wOiAxMCU7IGxlZnQ6IDE1JTsgfVxyXG4gIC5ib3R0b20gLmRvdDMgeyB0b3A6IDMwJTsgbGVmdDogMTUlOyB9XHJcbiAgLmJvdHRvbSAuZG90NCB7IHRvcDogLTEzMiU7IGxlZnQ6IDY1JTsgfVxyXG4gIC5ib3R0b20gLmRvdDUgeyB0b3A6IC0xMDAlOyBsZWZ0OiA2NSU7IH1cclxuICAuYm90dG9tIC5kb3Q2IHsgdG9wOiAtODAlOyBsZWZ0OiA2NSU7IH1cclxufVxyXG5cclxuLmFuaW1hdGVQe1xyXG4gIGFuaW1hdGlvbjogdXAgMXMgaW5maW5pdGUgZWFzZTtcclxufVxyXG5cclxuLmxvY2F0aW9uLXJlZHtcclxuICAvLyAgYm9yZGVyOnNvbGlkIHJlZDtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6ICRsb2NhdGlvbi1jaXJjbGUtc2l6ZTtcclxuICAgIG1heC13aWR0aDogMTZweDtcclxuICAgIG1heC1oZWlnaHQ6IDE2cHg7XHJcbiAgICBoZWlnaHQ6ICRsb2NhdGlvbi1jaXJjbGUtc2l6ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6c29saWQgIzdkN2Q3ZCAwLjVweDtcclxuXHJcbiAgfVxyXG59XHJcbi5sb2NhdGlvbi1ncmVlbntcclxuICAvLyAgYm9yZGVyOnNvbGlkIGdyZWVuO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogJGxvY2F0aW9uLWNpcmNsZS1zaXplO1xyXG4gICAgaGVpZ2h0OiAkbG9jYXRpb24tY2lyY2xlLXNpemU7XHJcbiAgICBtYXgtd2lkdGg6IDE2cHg7XHJcbiAgICBib3JkZXI6c29saWQgIzdkN2Q3ZCAwLjVweDtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbn1cclxuLmxvY2F0aW9uLWJsdWV7XHJcbiAgLy8gIGJvcmRlcjpzb2xpZCBibHVlO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogJGxvY2F0aW9uLWNpcmNsZS1zaXplO1xyXG4gICAgaGVpZ2h0OiAkbG9jYXRpb24tY2lyY2xlLXNpemU7XHJcbiAgICBtYXgtd2lkdGg6IDE2cHg7XHJcbiAgICBib3JkZXI6c29saWQgIzdkN2Q3ZCAwLjVweDtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcbi5sb2NhdGlvbi15ZWxsb3d7XHJcbiAgLy9ib3JkZXI6c29saWQgeWVsbG93O1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogJGxvY2F0aW9uLWNpcmNsZS1zaXplO1xyXG4gICAgaGVpZ2h0OiAkbG9jYXRpb24tY2lyY2xlLXNpemU7XHJcbiAgICBtYXgtd2lkdGg6IDE2cHg7XHJcbiAgICBib3JkZXI6c29saWQgIzdkN2Q3ZCAwLjVweDtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdy1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2NhdGlvbi5uZy1oaWRlIHtcclxuICBvcGFjaXR5OjA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59XHJcbi5sb2NhdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gIHdpZHRoOiAkbG9jYXRpb24tc2l6ZTtcclxuICBoZWlnaHQ6ICRsb2NhdGlvbi1zaXplO1xyXG4gIG1heC13aWR0aDogMzBweDtcclxuICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjpzb2xpZCAjN2Q3ZDdkIDAuNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDA7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgbGluZWFyIDAuNXM7XHJcbiAgdHJhbnNpdGlvbjphbGwgbGluZWFyIDAuNXM7XHJcbiAgei1pbmRleDoxMDtcclxuICAvL3RvcDotMjBweDtcclxuICAvL2xlZnQ6MSU7XHJcbiAgLy8gIGFuaW1hdGlvbjogdXAgMnMgaW5maW5pdGUgZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMjIpO1xyXG4gIGJveC1zaGFkb3c6aW5zZXQgMHB4IDBweCAzcHggcmdiYSgwLDAsMCwuMik7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNsciwgMC41KTtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICBsZWZ0OiAtMTVweDtcclxuICAgIGZpbHRlcjpibHVyKDJweCk7XHJcblxyXG4gICAgLy9hbmltYXRpb246IGRvd24gMnMgaW5maW5pdGUgZWFzZTtcclxuICB9XHJcbn1cclxuLmxvY2F0aW9uLXBvc3tcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4ubG9jYXRpb24tYW5pbWF0ZXtcclxuXHJcbiAgYW5pbWF0aW9uOiBtb3ZlRm9yd2FyZEZpdmUgMnMgICBmb3J3YXJkcyAgZWFzZTtcclxuICB6LWluZGV4OjEwMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyB1cCB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDVweCwgLTVweCk7XHJcbiAgfVxyXG59XHJcblxyXG4kbWVkaWEtc2l6ZToyMHB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcclxuXHJcblxyXG4gIEBrZXlmcmFtZXMgbW92ZUZvcndhcmRGaXZlIHtcclxuICAgIDAle1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICB9XHJcbiAgICAyMCV7XHJcbiAgICAgIGxlZnQ6MTZweDtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgIGxlZnQ6MzJweCA7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICBsZWZ0OjQ4cHggO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgbGVmdDo2NHB4IDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBsZWZ0OjgwcHggO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzAxcHggKWFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG5cclxuXHJcbiAgQGtleWZyYW1lcyBtb3ZlRm9yd2FyZEZpdmUge1xyXG4gICAgMCV7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgIH1cclxuICAgIDIwJXtcclxuICAgICAgbGVmdDoxOHB4O1xyXG4gICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgbGVmdDozNnB4IDtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIGxlZnQ6NTRweCA7XHJcbiAgICB9XHJcbiAgICA4MCUge1xyXG4gICAgICBsZWZ0OjcycHggO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGxlZnQ6OTBweCA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMXB4IClhbmQgKG1heC13aWR0aDogMzY0cHgpIHtcclxuXHJcblxyXG4gIEBrZXlmcmFtZXMgbW92ZUZvcndhcmRGaXZlIHtcclxuICAgIDAle1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICB9XHJcbiAgICAyMCV7XHJcbiAgICAgIGxlZnQ6MjBweDtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgIGxlZnQ6NDBweCA7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICBsZWZ0OjYwcHggO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgbGVmdDo4MHB4IDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBsZWZ0OjEwMHB4IDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNjVweCApYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblxyXG5cclxuICBAa2V5ZnJhbWVzIG1vdmVGb3J3YXJkRml2ZSB7XHJcbiAgICAwJXtcclxuICAgICAgbGVmdDowO1xyXG4gICAgfVxyXG4gICAgMjAle1xyXG4gICAgICBsZWZ0OjIzcHg7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBsZWZ0OjQ2cHggO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgbGVmdDo2OXB4IDtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgIGxlZnQ6OTJweCA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgbGVmdDoxMTVweCA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDAxcHggKWFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xyXG5cclxuXHJcbiAgQGtleWZyYW1lcyBtb3ZlRm9yd2FyZEZpdmUge1xyXG4gICAgMCV7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgIH1cclxuICAgIDIwJXtcclxuICAgICAgbGVmdDoyNXB4O1xyXG4gICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgbGVmdDo1MHB4IDtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIGxlZnQ6NzVweCA7XHJcbiAgICB9XHJcbiAgICA4MCUge1xyXG4gICAgICBsZWZ0OjEwMHB4IDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBsZWZ0OjEyNXB4IDtcclxuICAgICAgZGlzcGxheTpub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0NDFweCApYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcblxyXG5cclxuICBAa2V5ZnJhbWVzIG1vdmVGb3J3YXJkRml2ZSB7XHJcbiAgICAwJXtcclxuICAgICAgbGVmdDowO1xyXG4gICAgfVxyXG4gICAgMjAle1xyXG4gICAgICBsZWZ0OjI3cHg7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBsZWZ0OjU0cHggO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgbGVmdDo4MXB4IDtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgIGxlZnQ6MTA4cHggO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGxlZnQ6MTM1cHggO1xyXG4gICAgICBkaXNwbGF5Om5vbmUhaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBkb3duIHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgwLCAyNnB4KSBzY2FsZSguMik7XHJcbiAgICAvL2ZpbHRlcjpibHVyKDQwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5jb2xvckhvbWVBbmltYXRpb257XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6NDUlO1xyXG5sZWZ0OjQ1JTtcclxuXHJcbiAgJHBhcnRpY2xlczogNTA7XHJcbiR3aWR0aDogNzAwO1xyXG4kaGVpZ2h0OiA3MDA7XHJcblxyXG4vLyBDcmVhdGUgdGhlIGV4cGxvc2lvbi4uLlxyXG4kYm94LXNoYWRvdzogKCk7XHJcbiRib3gtc2hhZG93MjogKCk7XHJcbkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggJHBhcnRpY2xlcyB7XHJcbiAgJGJveC1zaGFkb3c6ICRib3gtc2hhZG93LFxyXG4gICAgICAgICAgICAgICByYW5kb20oJHdpZHRoKS0kd2lkdGggLyAyICsgcHhcclxuICAgICAgICAgICAgICAgcmFuZG9tKCRoZWlnaHQpLSRoZWlnaHQgLyAxLjIgKyBweFxyXG4gICAgICAgICAgICAgICBoc2wocmFuZG9tKDM2MCksIDEwMCwgNTApO1xyXG4gICRib3gtc2hhZG93MjogJGJveC1zaGFkb3cyLCAwIDAgI2ZmZlxyXG59XHJcbkBtaXhpbiBrZXlmcmFtZXMgKCRhbmltYXRpb25OYW1lKSB7XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEAtbW96LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQC1vLWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQC1tcy1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkc2V0dGluZ3MpIHtcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHNldHRpbmdzO1xyXG4gICAgLW8tYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbiAgICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAkc2V0dGluZ3M7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6ICRzZXR0aW5ncztcclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbi1kdXJhdGlvbiAoJHNldHRpbmdzKSB7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246ICRzZXR0aW5ncztcclxuICAgIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG4gICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogJHNldHRpbmdzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkc2V0dGluZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24gKCRzZXR0aW5ncykge1xyXG4gICAgLW1vei1hbmltYXRpb246ICRzZXR0aW5ncztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAkc2V0dGluZ3M7XHJcbiAgICAtby1hbmltYXRpb246ICRzZXR0aW5ncztcclxuICAgIC1tcy1hbmltYXRpb246ICRzZXR0aW5ncztcclxuICAgIGFuaW1hdGlvbjogJHNldHRpbmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtICgkc2V0dGluZ3MpIHtcclxuICAgIHRyYW5zZm9ybTogJHNldHRpbmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRzZXR0aW5ncztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkc2V0dGluZ3M7XHJcbiAgICAtby10cmFuc2Zvcm06ICRzZXR0aW5ncztcclxuICAgIC1tcy10cmFuc2Zvcm06ICRzZXR0aW5ncztcclxufVxyXG5cclxuLnB5cm8gPiAuYmVmb3JlLCAucHlybyA+IC5hZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93MjtcclxuICBAaW5jbHVkZSBhbmltYXRpb24oKDFzIGJhbmcgZWFzZS1vdXQgaW5maW5pdGUgYmFja3dhcmRzLCAxcyBncmF2aXR5IGVhc2UtaW4gaW5maW5pdGUgYmFja3dhcmRzLCA1cyBwb3NpdGlvbiBsaW5lYXIgaW5maW5pdGUgYmFja3dhcmRzKSk7XHJcbn1cclxuXHJcbi5weXJvID4gLmFmdGVyIHtcclxuICBAaW5jbHVkZSBhbmltYXRpb24tZGVsYXkoKDEuMjVzLCAxLjI1cywgMS4yNXMpKTtcclxuICBAaW5jbHVkZSBhbmltYXRpb24tZHVyYXRpb24oKDEuMjVzLCAxLjI1cywgNi4yNXMpKTtcclxufVxyXG5cclxuQGluY2x1ZGUga2V5ZnJhbWVzKGJhbmcpIHtcclxuICB0byB7XHJcbiAgICBib3gtc2hhZG93OiRib3gtc2hhZG93O1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUga2V5ZnJhbWVzKGdyYXZpdHkpICB7XHJcbiAgdG8ge1xyXG4gICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoMjAwcHgpKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQGluY2x1ZGUga2V5ZnJhbWVzKHBvc2l0aW9uKSB7XHJcbiAgMCUsIDQ5LjklIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgfVxyXG4gIDUwJSwgMTAwJSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIH1cclxuXHJcbn1cclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDp1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICAtLWJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgZm9udC1mYW1pbHk6IFwiRnJlZG9rYSBPbmVcIjtcbn1cblxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xufVxuXG4ubWFpbiB7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluIC5tYWluLWx1ZG8ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdncgLSA1cHgpO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDVweCk7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4taGVpZ2h0OiAyODBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud3JhcHBlck1pZGRsZSB7XG4gIGhlaWdodDogMjAlO1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cblxuLndyYXBwZXJUb3BCb3R0b20ge1xuICBoZWlnaHQ6IDQwJTtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xufVxuXG4ucm93LCBpb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOjA7XG59XG5cbi5ib3ggaW9uLWdyaWQge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6MDtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nLWxnOjA7XG4gIC0taW9uLWdyaWQtcGFkZGluZy1tZDowO1xuICAtLWlvbi1ncmlkLXBhZGRpbmcteGw6MDtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nLXhzOjA7XG4gIC0taW9uLWdyaWQtcGFkZGluZy1zbTowO1xufVxuXG4uYm9yZGVyLWxlZnRUb3AgaW9uLWNvbCB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAjNTk1OTU5IDFweDtcbiAgYm9yZGVyLXRvcDogc29saWQgIzU5NTk1OSAxcHg7XG59XG4uYm9yZGVyLWxlZnRUb3AgLmxvY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xufVxuXG4uYm9yZGVyLXJpZ2h0VG9wIGlvbi1jb2wge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkICM1OTU5NTkgMXB4O1xuICBib3JkZXItdG9wOiBzb2xpZCAjNTk1OTU5IDFweDtcbn1cbi5ib3JkZXItcmlnaHRUb3AgLmxvY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xufVxuXG4uYm9yZGVyLXRvcCBpb24tY29sIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjNTk1OTU5IDFweDtcbiAgYm9yZGVyLXRvcDogc29saWQgIzU5NTk1OSAxcHg7XG59XG4uYm9yZGVyLXRvcCAubG9jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb2wtc3RhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvc3Rhci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbn1cblxuLnJvdzEsIC5yb3cyLCAucm93MywgLnJvdzQsIC5yb3c1LCAucm93NiB7XG4gIGhlaWdodDogMTYuNiU7XG4gIC0taW9uLWdyaWQtcGFkZGluZzowO1xufVxuXG4ucm93TTEsIC5yb3dNMiwgLnJvd00zLCAucm93TTQsIC5yb3dNNSwgLnJvd002IHtcbiAgaGVpZ2h0OiAzMy4zMyU7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6MDtcbn1cblxuLmlubmVyQm94IHtcbiAgYm9yZGVyOiBzb2xpZCAjYmRiZGJkIDAuNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wbGF5ZXJCb3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IGNhbGMoMS41dncgKyAxOHB4KTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5wbGF5ZXJCb3ggLmxvY2F0aW9uIHtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG59XG4ucGxheWVyQm94IC50ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IGNhbGMoMXZ3ICsgMTBweCk7XG59XG4ucGxheWVyQm94IC50ZXh0LXllbGxvdywgLnBsYXllckJveCAudGV4dC1ibHVlIHtcbiAgYm90dG9tOiBjYWxjKC0xdncgLSA1cHggKTtcbn1cbi5wbGF5ZXJCb3ggLnRleHQtcmVkLCAucGxheWVyQm94IC50ZXh0LWdyZWVuIHtcbiAgdG9wOiBjYWxjKC0xdncgLSA1cHggKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgcm90YXRlWCgxODBkZWcpO1xufVxuXG4ucGxheWVyMUJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XG59XG4ucGxheWVyMUJveCBpb24tY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcbn1cblxuLnBsYXllcjJCb3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhODAwO1xufVxuLnBsYXllcjJCb3ggaW9uLWNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE4MDA7XG59XG5cbi5wbGF5ZXIzQm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0Y2ExNjtcbn1cbi5wbGF5ZXIzQm94IGlvbi1jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRjYTE2O1xuICBib3JkZXI6IHNvbGlkICNiZGJkYmQgMC41cHg7XG59XG5cbi5wbGF5ZXI0Qm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0JDNDtcbn1cbi5wbGF5ZXI0Qm94IGlvbi1jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkM0O1xufVxuXG4uc21hbGxCb3hSb3cge1xuICBoZWlnaHQ6IDUwJTtcbn1cbi5zbWFsbEJveFJvdyBpb24tY29sIHtcbiAgbWFyZ2luOiBjYWxjKDMlICsgMnB4KTtcbiAgYm9yZGVyOiBzb2xpZCAjYmRiZGJkIDAuNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ncmVlbkNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE4MDA7XG4gIGNvbG9yOiAjMDBhODAwO1xufVxuXG4ucmVkQ29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcbiAgY29sb3I6ICNGRjAwMDA7XG59XG5cbi5ibHVlQ29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0JDNDtcbiAgY29sb3I6ICMwMDdCQzQ7XG59XG5cbi55ZWxsb3dDb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRjYTE2O1xuICBjb2xvcjogI2Y0Y2ExNjtcbn1cblxuLmNlbnRlciB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAjRkYwMDAwIDIwcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgIzAwN0JDNCAyMHB4O1xuICBib3JkZXItdG9wOiBzb2xpZCAjMDBhODAwIDIwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkICNmNGNhMTYgMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ubWFpbi1kaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbn1cbi5tYWluLWRpY2UgLmN1YmUgLmZyb250IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIyLjVweCk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbi1kaWNlIC5kaWNlLXJlZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4tZGljZSAuZGljZS1ncmVlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG59XG4ubWFpbi1kaWNlIC5sb2NhdGlvbi11c2VyLXdyYXBwZXIge1xuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwZjBjMjk7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI0M2UsICMzMDJiNjMsICMwZjBjMjkpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG4ubWFpbi1kaWNlIC5kaWNlLXdyYXBwZXIge1xuICBib3JkZXItdG9wOiBzb2xpZCBibGFjayAxcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgYmxhY2sgMXB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayAxcHg7XG4gIGJhY2tncm91bmQ6ICNmZjdlNWY7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZWI0N2IsICNmZjdlNWYpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZWI0N2IsICNmZjdlNWYpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLWRpY2UgLmxvY2F0aW9uLXVzZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIHdpZHRoOiBjYWxjKDV2dyArIDVweCk7XG4gIGhlaWdodDogY2FsYyg1dncgKyA1cHgpO1xuICBtYXgtd2lkdGg6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDAsIDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA3cHggYXV0bztcbn1cbi5tYWluLWRpY2UgLmN1YmUgLmZyb250IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9mYWNlcy9kMS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbi1kaWNlIC5jdWJlIC5iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpIHRyYW5zbGF0ZVooMjIuNXB4KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9mYWNlcy9kMi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbi1kaWNlIC5jdWJlIC5yaWdodCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigyMi41cHgpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2ZhY2VzL2QzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYWluLWRpY2UgLmN1YmUgLmxlZnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDIyLjVweCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvZmFjZXMvZDQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLm1haW4tZGljZSAuY3ViZSAudG9wIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDIyLjVweCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvZmFjZXMvZDUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLm1haW4tZGljZSAuY3ViZSAuYm90dG9tIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigyMi41cHgpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2ZhY2VzL2Q2LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYWluLWRpY2UgLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIHBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLm1haW4tZGljZSAuY3ViZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcbn1cbi5tYWluLWRpY2UgLmN1YmU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbi1kaWNlIC5jdWJlIGRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMS4yNXB4IDA7XG59XG4ubWFpbi1kaWNlIC5kb3Qge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50IDNweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4ubWFpbi1kaWNlIC5mcm9udCAuZG90MSB7XG4gIHRvcDogNDElO1xuICBsZWZ0OiA0MCU7XG59XG4ubWFpbi1kaWNlIC5iYWNrIC5kb3QxIHtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiA0MCU7XG59XG4ubWFpbi1kaWNlIC5iYWNrIC5kb3QyIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDQwJTtcbn1cbi5tYWluLWRpY2UgLmxlZnQgLmRvdDEge1xuICB0b3A6IC0yMCU7XG4gIGxlZnQ6IDE1JTtcbn1cbi5tYWluLWRpY2UgLmxlZnQgLmRvdDIge1xuICB0b3A6IDYwJTtcbiAgbGVmdDogMTUlO1xufVxuLm1haW4tZGljZSAubGVmdCAuZG90MyB7XG4gIHRvcDogLTk1JTtcbiAgbGVmdDogNjUlO1xufVxuLm1haW4tZGljZSAubGVmdCAuZG90NCB7XG4gIHRvcDogLTIwJTtcbiAgbGVmdDogNjUlO1xufVxuLm1haW4tZGljZSAudG9wIC5kb3QxIHtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiAxMCU7XG59XG4ubWFpbi1kaWNlIC50b3AgLmRvdDIge1xuICB0b3A6IDQ1JTtcbiAgbGVmdDogMTAlO1xufVxuLm1haW4tZGljZSAudG9wIC5kb3QzIHtcbiAgdG9wOiAtODUlO1xuICBsZWZ0OiA2NSU7XG59XG4ubWFpbi1kaWNlIC50b3AgLmRvdDQge1xuICB0b3A6IC0zMiU7XG4gIGxlZnQ6IDY1JTtcbn1cbi5tYWluLWRpY2UgLnRvcCAuZG90NSB7XG4gIHRvcDogLTExMCU7XG4gIGxlZnQ6IDM3JTtcbn1cbi5tYWluLWRpY2UgLmJvdHRvbSAuZG90MSB7XG4gIHRvcDogLTIyJTtcbiAgbGVmdDogMTUlO1xufVxuLm1haW4tZGljZSAuYm90dG9tIC5kb3QyIHtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDE1JTtcbn1cbi5tYWluLWRpY2UgLmJvdHRvbSAuZG90MyB7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiAxNSU7XG59XG4ubWFpbi1kaWNlIC5ib3R0b20gLmRvdDQge1xuICB0b3A6IC0xMzIlO1xuICBsZWZ0OiA2NSU7XG59XG4ubWFpbi1kaWNlIC5ib3R0b20gLmRvdDUge1xuICB0b3A6IC0xMDAlO1xuICBsZWZ0OiA2NSU7XG59XG4ubWFpbi1kaWNlIC5ib3R0b20gLmRvdDYge1xuICB0b3A6IC04MCU7XG4gIGxlZnQ6IDY1JTtcbn1cblxuLmFuaW1hdGVQIHtcbiAgYW5pbWF0aW9uOiB1cCAxcyBpbmZpbml0ZSBlYXNlO1xufVxuXG4ubG9jYXRpb24tcmVkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYygxLjV2dyArIDVweCk7XG4gIG1heC13aWR0aDogMTZweDtcbiAgbWF4LWhlaWdodDogMTZweDtcbiAgaGVpZ2h0OiBjYWxjKDEuNXZ3ICsgNXB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkICM3ZDdkN2QgMC41cHg7XG59XG5cbi5sb2NhdGlvbi1ncmVlbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGNhbGMoMS41dncgKyA1cHgpO1xuICBoZWlnaHQ6IGNhbGMoMS41dncgKyA1cHgpO1xuICBtYXgtd2lkdGg6IDE2cHg7XG4gIGJvcmRlcjogc29saWQgIzdkN2Q3ZCAwLjVweDtcbiAgbWF4LWhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTgwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubG9jYXRpb24tYmx1ZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGNhbGMoMS41dncgKyA1cHgpO1xuICBoZWlnaHQ6IGNhbGMoMS41dncgKyA1cHgpO1xuICBtYXgtd2lkdGg6IDE2cHg7XG4gIGJvcmRlcjogc29saWQgIzdkN2Q3ZCAwLjVweDtcbiAgbWF4LWhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0JDNDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubG9jYXRpb24teWVsbG93OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYygxLjV2dyArIDVweCk7XG4gIGhlaWdodDogY2FsYygxLjV2dyArIDVweCk7XG4gIG1heC13aWR0aDogMTZweDtcbiAgYm9yZGVyOiBzb2xpZCAjN2Q3ZDdkIDAuNXB4O1xuICBtYXgtaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRjYTE2O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sb2NhdGlvbi5uZy1oaWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xufVxuXG4ubG9jYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIHdpZHRoOiBjYWxjKDV2dyArIDVweCk7XG4gIGhlaWdodDogY2FsYyg1dncgKyA1cHgpO1xuICBtYXgtd2lkdGg6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogc29saWQgIzdkN2Q3ZCAwLjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjVzO1xuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuNXM7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubG9jYXRpb246OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LCA0NCwgNjgsIDAuNSk7XG4gIGJvdHRvbTogLTEwcHg7XG4gIGxlZnQ6IC0xNXB4O1xuICBmaWx0ZXI6IGJsdXIoMnB4KTtcbn1cblxuLmxvY2F0aW9uLXBvcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvY2F0aW9uLWFuaW1hdGUge1xuICBhbmltYXRpb246IG1vdmVGb3J3YXJkRml2ZSAycyBmb3J3YXJkcyBlYXNlO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbkBrZXlmcmFtZXMgdXAge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDVweCwgLTVweCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xuICBAa2V5ZnJhbWVzIG1vdmVGb3J3YXJkRml2ZSB7XG4gICAgMCUge1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIGxlZnQ6IDE2cHg7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBsZWZ0OiAzMnB4O1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgbGVmdDogNDhweDtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIGxlZnQ6IDY0cHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgbGVmdDogODBweDtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMDFweCkgYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIEBrZXlmcmFtZXMgbW92ZUZvcndhcmRGaXZlIHtcbiAgICAwJSB7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgbGVmdDogMThweDtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIGxlZnQ6IDM2cHg7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICBsZWZ0OiA1NHB4O1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgbGVmdDogNzJweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBsZWZ0OiA5MHB4O1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMXB4KSBhbmQgKG1heC13aWR0aDogMzY0cHgpIHtcbiAgQGtleWZyYW1lcyBtb3ZlRm9yd2FyZEZpdmUge1xuICAgIDAlIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBsZWZ0OiAyMHB4O1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgbGVmdDogNDBweDtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgIGxlZnQ6IDYwcHg7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICBsZWZ0OiA4MHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGxlZnQ6IDEwMHB4O1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM2NXB4KSBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgQGtleWZyYW1lcyBtb3ZlRm9yd2FyZEZpdmUge1xuICAgIDAlIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBsZWZ0OiAyM3B4O1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgbGVmdDogNDZweDtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgIGxlZnQ6IDY5cHg7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICBsZWZ0OiA5MnB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGxlZnQ6IDExNXB4O1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcbiAgQGtleWZyYW1lcyBtb3ZlRm9yd2FyZEZpdmUge1xuICAgIDAlIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBsZWZ0OiAyNXB4O1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgbGVmdDogNTBweDtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgIGxlZnQ6IDc1cHg7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICBsZWZ0OiAxMDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBsZWZ0OiAxMjVweDtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0NDFweCkgYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gIEBrZXlmcmFtZXMgbW92ZUZvcndhcmRGaXZlIHtcbiAgICAwJSB7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgbGVmdDogMjdweDtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIGxlZnQ6IDU0cHg7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICBsZWZ0OiA4MXB4O1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgbGVmdDogMTA4cHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgbGVmdDogMTM1cHg7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5Aa2V5ZnJhbWVzIGRvd24ge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoMCwgMjZweCkgc2NhbGUoMC4yKTtcbiAgfVxufVxuLmNvbG9ySG9tZUFuaW1hdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDQ1JTtcbn1cbi5jb2xvckhvbWVBbmltYXRpb24gLnB5cm8gPiAuYmVmb3JlLCAuY29sb3JIb21lQW5pbWF0aW9uIC5weXJvID4gLmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmLCAwIDAgI2ZmZiwgMCAwICNmZmYsIDAgMCAjZmZmO1xuICAtbW96LWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiAxcyBiYW5nIGVhc2Utb3V0IGluZmluaXRlIGJhY2t3YXJkcywgMXMgZ3Jhdml0eSBlYXNlLWluIGluZmluaXRlIGJhY2t3YXJkcywgNXMgcG9zaXRpb24gbGluZWFyIGluZmluaXRlIGJhY2t3YXJkcztcbiAgLW1zLWFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG4gIGFuaW1hdGlvbjogMXMgYmFuZyBlYXNlLW91dCBpbmZpbml0ZSBiYWNrd2FyZHMsIDFzIGdyYXZpdHkgZWFzZS1pbiBpbmZpbml0ZSBiYWNrd2FyZHMsIDVzIHBvc2l0aW9uIGxpbmVhciBpbmZpbml0ZSBiYWNrd2FyZHM7XG59XG4uY29sb3JIb21lQW5pbWF0aW9uIC5weXJvID4gLmFmdGVyIHtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjI1cywgMS4yNXMsIDEuMjVzO1xuICAtby1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDEuMjVzLCAxLjI1cywgMS4yNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNXMsIDEuMjVzLCAxLjI1cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cywgMS4yNXMsIDYuMjVzO1xuICAtby1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDEuMjVzLCAxLjI1cywgNi4yNXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4yNXMsIDEuMjVzLCA2LjI1cztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDIzNHB4IC0yNjYuMzMzMzMzMzMzM3B4IGRhcmtvcmFuZ2UsIDMyMnB4IC0zODUuMzMzMzMzMzMzM3B4ICM5ZDAwZmYsIC0yNjdweCAtMzQ4LjMzMzMzMzMzMzNweCAjY2MwMGZmLCAxMjdweCAtMTkuMzMzMzMzMzMzM3B4ICMwMGY3ZmYsIDI4N3B4IC01Mi4zMzMzMzMzMzMzcHggI2Q5ZmYwMCwgLTI5N3B4IC01MDMuMzMzMzMzMzMzM3B4ICNmZjlkMDAsIDI5OHB4IC00MjguMzMzMzMzMzMzM3B4ICNmZjgwMDAsIC04NXB4IDkyLjY2NjY2NjY2NjdweCAjZmYwMDMzLCAtMzE0cHggLTkyLjMzMzMzMzMzMzNweCAjMDBmZmJiLCAycHggLTQ4Ny4zMzMzMzMzMzMzcHggI2ZmYTYwMCwgMTkzcHggLTMyNi4zMzMzMzMzMzMzcHggI2ZmMzcwMCwgLTE2OHB4IC0yOTguMzMzMzMzMzMzM3B4ICMwMDFlZmYsIC0xODdweCAxMDMuNjY2NjY2NjY2N3B4ICMwMGZmYTYsIC0xMDhweCAtNDAzLjMzMzMzMzMzMzNweCAjMDBhYWZmLCAtMjM3cHggLTE3NS4zMzMzMzMzMzMzcHggIzAwZmY0MCwgNTZweCAtMzE3LjMzMzMzMzMzMzNweCAjNzNmZjAwLCAzMTVweCAtNjEuMzMzMzMzMzMzM3B4ICM1ZWZmMDAsIDE0NXB4IDkyLjY2NjY2NjY2NjdweCAjMDBmMmZmLCAtNDZweCAtNTE4LjMzMzMzMzMzMzNweCAjNjJmZjAwLCAtMjA5cHggLTIzNi4zMzMzMzMzMzMzcHggI2ZmMDA3MywgNzdweCA0LjY2NjY2NjY2NjdweCAjY2MwMGZmLCAxMjZweCA1Ni42NjY2NjY2NjY3cHggI2ZmNDgwMCwgLTMyOHB4IDY4LjY2NjY2NjY2NjdweCAjODgwMGZmLCAzMHB4IC05Mi4zMzMzMzMzMzMzcHggIzFhZmYwMCwgMTQ3cHggLTE5MS4zMzMzMzMzMzMzcHggIzAwZmYxZSwgLTE0MnB4IC0zNzcuMzMzMzMzMzMzM3B4ICNmZjAwMDksIDMwMHB4IC04Ni4zMzMzMzMzMzMzcHggIzAwZmZlMSwgLTE0OXB4IDgxLjY2NjY2NjY2NjdweCAjNTlmZjAwLCAtMTM2cHggLTQxOS4zMzMzMzMzMzMzcHggIzAwZmY0OCwgMjkycHggLTI5NS4zMzMzMzMzMzMzcHggI2M4ZmYwMCwgLTEyM3B4IC0yMzAuMzMzMzMzMzMzM3B4ICNmZmJmMDAsIDI3OHB4IC0zODguMzMzMzMzMzMzM3B4ICMwMDczZmYsIC03cHggLTQzOC4zMzMzMzMzMzMzcHggIzAwZmY1ZSwgMjQ3cHggLTQwOC4zMzMzMzMzMzMzcHggIzAwNTVmZiwgLTE4NHB4IC0xNS4zMzMzMzMzMzMzcHggI2ZmNDgwMCwgLTgzcHggLTM3Ni4zMzMzMzMzMzMzcHggIzNjMDBmZiwgMjEzcHggLTI3NC4zMzMzMzMzMzMzcHggIzAwODBmZiwgNjNweCA2LjY2NjY2NjY2NjdweCAjY2MwMGZmLCA0OXB4IDEwNS42NjY2NjY2NjY3cHggIzAwYjdmZiwgLTIyOXB4IC01NTguMzMzMzMzMzMzM3B4ICNmZmY3MDAsIDIyNnB4IC0zMDIuMzMzMzMzMzMzM3B4ICNmZjAwNjYsIC0yNjZweCA1OS42NjY2NjY2NjY3cHggIzY2ZmYwMCwgLTU1cHggLTQ3My4zMzMzMzMzMzMzcHggI2I3MDBmZiwgODRweCAtMTMwLjMzMzMzMzMzMzNweCAjMDlmZjAwLCAtMjc5cHggOTcuNjY2NjY2NjY2N3B4ICNmZjAwMjIsIDE5cHggLTEwOC4zMzMzMzMzMzMzcHggIzAwYTJmZiwgLTdweCAtNTQ5LjMzMzMzMzMzMzNweCAjZmZlYTAwLCAtMjhweCAtMTI1LjMzMzMzMzMzMzNweCAjZmYyNjAwLCAyNXB4IC01LjMzMzMzMzMzMzNweCB5ZWxsb3csIC0yMDFweCAtMS4zMzMzMzMzMzMzcHggIzAwZmY0ZCwgMjg5cHggLTguMzMzMzMzMzMzM3B4ICNmZjAwZDU7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDIzNHB4IC0yNjYuMzMzMzMzMzMzM3B4IGRhcmtvcmFuZ2UsIDMyMnB4IC0zODUuMzMzMzMzMzMzM3B4ICM5ZDAwZmYsIC0yNjdweCAtMzQ4LjMzMzMzMzMzMzNweCAjY2MwMGZmLCAxMjdweCAtMTkuMzMzMzMzMzMzM3B4ICMwMGY3ZmYsIDI4N3B4IC01Mi4zMzMzMzMzMzMzcHggI2Q5ZmYwMCwgLTI5N3B4IC01MDMuMzMzMzMzMzMzM3B4ICNmZjlkMDAsIDI5OHB4IC00MjguMzMzMzMzMzMzM3B4ICNmZjgwMDAsIC04NXB4IDkyLjY2NjY2NjY2NjdweCAjZmYwMDMzLCAtMzE0cHggLTkyLjMzMzMzMzMzMzNweCAjMDBmZmJiLCAycHggLTQ4Ny4zMzMzMzMzMzMzcHggI2ZmYTYwMCwgMTkzcHggLTMyNi4zMzMzMzMzMzMzcHggI2ZmMzcwMCwgLTE2OHB4IC0yOTguMzMzMzMzMzMzM3B4ICMwMDFlZmYsIC0xODdweCAxMDMuNjY2NjY2NjY2N3B4ICMwMGZmYTYsIC0xMDhweCAtNDAzLjMzMzMzMzMzMzNweCAjMDBhYWZmLCAtMjM3cHggLTE3NS4zMzMzMzMzMzMzcHggIzAwZmY0MCwgNTZweCAtMzE3LjMzMzMzMzMzMzNweCAjNzNmZjAwLCAzMTVweCAtNjEuMzMzMzMzMzMzM3B4ICM1ZWZmMDAsIDE0NXB4IDkyLjY2NjY2NjY2NjdweCAjMDBmMmZmLCAtNDZweCAtNTE4LjMzMzMzMzMzMzNweCAjNjJmZjAwLCAtMjA5cHggLTIzNi4zMzMzMzMzMzMzcHggI2ZmMDA3MywgNzdweCA0LjY2NjY2NjY2NjdweCAjY2MwMGZmLCAxMjZweCA1Ni42NjY2NjY2NjY3cHggI2ZmNDgwMCwgLTMyOHB4IDY4LjY2NjY2NjY2NjdweCAjODgwMGZmLCAzMHB4IC05Mi4zMzMzMzMzMzMzcHggIzFhZmYwMCwgMTQ3cHggLTE5MS4zMzMzMzMzMzMzcHggIzAwZmYxZSwgLTE0MnB4IC0zNzcuMzMzMzMzMzMzM3B4ICNmZjAwMDksIDMwMHB4IC04Ni4zMzMzMzMzMzMzcHggIzAwZmZlMSwgLTE0OXB4IDgxLjY2NjY2NjY2NjdweCAjNTlmZjAwLCAtMTM2cHggLTQxOS4zMzMzMzMzMzMzcHggIzAwZmY0OCwgMjkycHggLTI5NS4zMzMzMzMzMzMzcHggI2M4ZmYwMCwgLTEyM3B4IC0yMzAuMzMzMzMzMzMzM3B4ICNmZmJmMDAsIDI3OHB4IC0zODguMzMzMzMzMzMzM3B4ICMwMDczZmYsIC03cHggLTQzOC4zMzMzMzMzMzMzcHggIzAwZmY1ZSwgMjQ3cHggLTQwOC4zMzMzMzMzMzMzcHggIzAwNTVmZiwgLTE4NHB4IC0xNS4zMzMzMzMzMzMzcHggI2ZmNDgwMCwgLTgzcHggLTM3Ni4zMzMzMzMzMzMzcHggIzNjMDBmZiwgMjEzcHggLTI3NC4zMzMzMzMzMzMzcHggIzAwODBmZiwgNjNweCA2LjY2NjY2NjY2NjdweCAjY2MwMGZmLCA0OXB4IDEwNS42NjY2NjY2NjY3cHggIzAwYjdmZiwgLTIyOXB4IC01NTguMzMzMzMzMzMzM3B4ICNmZmY3MDAsIDIyNnB4IC0zMDIuMzMzMzMzMzMzM3B4ICNmZjAwNjYsIC0yNjZweCA1OS42NjY2NjY2NjY3cHggIzY2ZmYwMCwgLTU1cHggLTQ3My4zMzMzMzMzMzMzcHggI2I3MDBmZiwgODRweCAtMTMwLjMzMzMzMzMzMzNweCAjMDlmZjAwLCAtMjc5cHggOTcuNjY2NjY2NjY2N3B4ICNmZjAwMjIsIDE5cHggLTEwOC4zMzMzMzMzMzMzcHggIzAwYTJmZiwgLTdweCAtNTQ5LjMzMzMzMzMzMzNweCAjZmZlYTAwLCAtMjhweCAtMTI1LjMzMzMzMzMzMzNweCAjZmYyNjAwLCAyNXB4IC01LjMzMzMzMzMzMzNweCB5ZWxsb3csIC0yMDFweCAtMS4zMzMzMzMzMzMzcHggIzAwZmY0ZCwgMjg5cHggLTguMzMzMzMzMzMzM3B4ICNmZjAwZDU7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYmFuZyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAyMzRweCAtMjY2LjMzMzMzMzMzMzNweCBkYXJrb3JhbmdlLCAzMjJweCAtMzg1LjMzMzMzMzMzMzNweCAjOWQwMGZmLCAtMjY3cHggLTM0OC4zMzMzMzMzMzMzcHggI2NjMDBmZiwgMTI3cHggLTE5LjMzMzMzMzMzMzNweCAjMDBmN2ZmLCAyODdweCAtNTIuMzMzMzMzMzMzM3B4ICNkOWZmMDAsIC0yOTdweCAtNTAzLjMzMzMzMzMzMzNweCAjZmY5ZDAwLCAyOThweCAtNDI4LjMzMzMzMzMzMzNweCAjZmY4MDAwLCAtODVweCA5Mi42NjY2NjY2NjY3cHggI2ZmMDAzMywgLTMxNHB4IC05Mi4zMzMzMzMzMzMzcHggIzAwZmZiYiwgMnB4IC00ODcuMzMzMzMzMzMzM3B4ICNmZmE2MDAsIDE5M3B4IC0zMjYuMzMzMzMzMzMzM3B4ICNmZjM3MDAsIC0xNjhweCAtMjk4LjMzMzMzMzMzMzNweCAjMDAxZWZmLCAtMTg3cHggMTAzLjY2NjY2NjY2NjdweCAjMDBmZmE2LCAtMTA4cHggLTQwMy4zMzMzMzMzMzMzcHggIzAwYWFmZiwgLTIzN3B4IC0xNzUuMzMzMzMzMzMzM3B4ICMwMGZmNDAsIDU2cHggLTMxNy4zMzMzMzMzMzMzcHggIzczZmYwMCwgMzE1cHggLTYxLjMzMzMzMzMzMzNweCAjNWVmZjAwLCAxNDVweCA5Mi42NjY2NjY2NjY3cHggIzAwZjJmZiwgLTQ2cHggLTUxOC4zMzMzMzMzMzMzcHggIzYyZmYwMCwgLTIwOXB4IC0yMzYuMzMzMzMzMzMzM3B4ICNmZjAwNzMsIDc3cHggNC42NjY2NjY2NjY3cHggI2NjMDBmZiwgMTI2cHggNTYuNjY2NjY2NjY2N3B4ICNmZjQ4MDAsIC0zMjhweCA2OC42NjY2NjY2NjY3cHggIzg4MDBmZiwgMzBweCAtOTIuMzMzMzMzMzMzM3B4ICMxYWZmMDAsIDE0N3B4IC0xOTEuMzMzMzMzMzMzM3B4ICMwMGZmMWUsIC0xNDJweCAtMzc3LjMzMzMzMzMzMzNweCAjZmYwMDA5LCAzMDBweCAtODYuMzMzMzMzMzMzM3B4ICMwMGZmZTEsIC0xNDlweCA4MS42NjY2NjY2NjY3cHggIzU5ZmYwMCwgLTEzNnB4IC00MTkuMzMzMzMzMzMzM3B4ICMwMGZmNDgsIDI5MnB4IC0yOTUuMzMzMzMzMzMzM3B4ICNjOGZmMDAsIC0xMjNweCAtMjMwLjMzMzMzMzMzMzNweCAjZmZiZjAwLCAyNzhweCAtMzg4LjMzMzMzMzMzMzNweCAjMDA3M2ZmLCAtN3B4IC00MzguMzMzMzMzMzMzM3B4ICMwMGZmNWUsIDI0N3B4IC00MDguMzMzMzMzMzMzM3B4ICMwMDU1ZmYsIC0xODRweCAtMTUuMzMzMzMzMzMzM3B4ICNmZjQ4MDAsIC04M3B4IC0zNzYuMzMzMzMzMzMzM3B4ICMzYzAwZmYsIDIxM3B4IC0yNzQuMzMzMzMzMzMzM3B4ICMwMDgwZmYsIDYzcHggNi42NjY2NjY2NjY3cHggI2NjMDBmZiwgNDlweCAxMDUuNjY2NjY2NjY2N3B4ICMwMGI3ZmYsIC0yMjlweCAtNTU4LjMzMzMzMzMzMzNweCAjZmZmNzAwLCAyMjZweCAtMzAyLjMzMzMzMzMzMzNweCAjZmYwMDY2LCAtMjY2cHggNTkuNjY2NjY2NjY2N3B4ICM2NmZmMDAsIC01NXB4IC00NzMuMzMzMzMzMzMzM3B4ICNiNzAwZmYsIDg0cHggLTEzMC4zMzMzMzMzMzMzcHggIzA5ZmYwMCwgLTI3OXB4IDk3LjY2NjY2NjY2NjdweCAjZmYwMDIyLCAxOXB4IC0xMDguMzMzMzMzMzMzM3B4ICMwMGEyZmYsIC03cHggLTU0OS4zMzMzMzMzMzMzcHggI2ZmZWEwMCwgLTI4cHggLTEyNS4zMzMzMzMzMzMzcHggI2ZmMjYwMCwgMjVweCAtNS4zMzMzMzMzMzMzcHggeWVsbG93LCAtMjAxcHggLTEuMzMzMzMzMzMzM3B4ICMwMGZmNGQsIDI4OXB4IC04LjMzMzMzMzMzMzNweCAjZmYwMGQ1O1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBiYW5nIHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDIzNHB4IC0yNjYuMzMzMzMzMzMzM3B4IGRhcmtvcmFuZ2UsIDMyMnB4IC0zODUuMzMzMzMzMzMzM3B4ICM5ZDAwZmYsIC0yNjdweCAtMzQ4LjMzMzMzMzMzMzNweCAjY2MwMGZmLCAxMjdweCAtMTkuMzMzMzMzMzMzM3B4ICMwMGY3ZmYsIDI4N3B4IC01Mi4zMzMzMzMzMzMzcHggI2Q5ZmYwMCwgLTI5N3B4IC01MDMuMzMzMzMzMzMzM3B4ICNmZjlkMDAsIDI5OHB4IC00MjguMzMzMzMzMzMzM3B4ICNmZjgwMDAsIC04NXB4IDkyLjY2NjY2NjY2NjdweCAjZmYwMDMzLCAtMzE0cHggLTkyLjMzMzMzMzMzMzNweCAjMDBmZmJiLCAycHggLTQ4Ny4zMzMzMzMzMzMzcHggI2ZmYTYwMCwgMTkzcHggLTMyNi4zMzMzMzMzMzMzcHggI2ZmMzcwMCwgLTE2OHB4IC0yOTguMzMzMzMzMzMzM3B4ICMwMDFlZmYsIC0xODdweCAxMDMuNjY2NjY2NjY2N3B4ICMwMGZmYTYsIC0xMDhweCAtNDAzLjMzMzMzMzMzMzNweCAjMDBhYWZmLCAtMjM3cHggLTE3NS4zMzMzMzMzMzMzcHggIzAwZmY0MCwgNTZweCAtMzE3LjMzMzMzMzMzMzNweCAjNzNmZjAwLCAzMTVweCAtNjEuMzMzMzMzMzMzM3B4ICM1ZWZmMDAsIDE0NXB4IDkyLjY2NjY2NjY2NjdweCAjMDBmMmZmLCAtNDZweCAtNTE4LjMzMzMzMzMzMzNweCAjNjJmZjAwLCAtMjA5cHggLTIzNi4zMzMzMzMzMzMzcHggI2ZmMDA3MywgNzdweCA0LjY2NjY2NjY2NjdweCAjY2MwMGZmLCAxMjZweCA1Ni42NjY2NjY2NjY3cHggI2ZmNDgwMCwgLTMyOHB4IDY4LjY2NjY2NjY2NjdweCAjODgwMGZmLCAzMHB4IC05Mi4zMzMzMzMzMzMzcHggIzFhZmYwMCwgMTQ3cHggLTE5MS4zMzMzMzMzMzMzcHggIzAwZmYxZSwgLTE0MnB4IC0zNzcuMzMzMzMzMzMzM3B4ICNmZjAwMDksIDMwMHB4IC04Ni4zMzMzMzMzMzMzcHggIzAwZmZlMSwgLTE0OXB4IDgxLjY2NjY2NjY2NjdweCAjNTlmZjAwLCAtMTM2cHggLTQxOS4zMzMzMzMzMzMzcHggIzAwZmY0OCwgMjkycHggLTI5NS4zMzMzMzMzMzMzcHggI2M4ZmYwMCwgLTEyM3B4IC0yMzAuMzMzMzMzMzMzM3B4ICNmZmJmMDAsIDI3OHB4IC0zODguMzMzMzMzMzMzM3B4ICMwMDczZmYsIC03cHggLTQzOC4zMzMzMzMzMzMzcHggIzAwZmY1ZSwgMjQ3cHggLTQwOC4zMzMzMzMzMzMzcHggIzAwNTVmZiwgLTE4NHB4IC0xNS4zMzMzMzMzMzMzcHggI2ZmNDgwMCwgLTgzcHggLTM3Ni4zMzMzMzMzMzMzcHggIzNjMDBmZiwgMjEzcHggLTI3NC4zMzMzMzMzMzMzcHggIzAwODBmZiwgNjNweCA2LjY2NjY2NjY2NjdweCAjY2MwMGZmLCA0OXB4IDEwNS42NjY2NjY2NjY3cHggIzAwYjdmZiwgLTIyOXB4IC01NTguMzMzMzMzMzMzM3B4ICNmZmY3MDAsIDIyNnB4IC0zMDIuMzMzMzMzMzMzM3B4ICNmZjAwNjYsIC0yNjZweCA1OS42NjY2NjY2NjY3cHggIzY2ZmYwMCwgLTU1cHggLTQ3My4zMzMzMzMzMzMzcHggI2I3MDBmZiwgODRweCAtMTMwLjMzMzMzMzMzMzNweCAjMDlmZjAwLCAtMjc5cHggOTcuNjY2NjY2NjY2N3B4ICNmZjAwMjIsIDE5cHggLTEwOC4zMzMzMzMzMzMzcHggIzAwYTJmZiwgLTdweCAtNTQ5LjMzMzMzMzMzMzNweCAjZmZlYTAwLCAtMjhweCAtMTI1LjMzMzMzMzMzMzNweCAjZmYyNjAwLCAyNXB4IC01LjMzMzMzMzMzMzNweCB5ZWxsb3csIC0yMDFweCAtMS4zMzMzMzMzMzMzcHggIzAwZmY0ZCwgMjg5cHggLTguMzMzMzMzMzMzM3B4ICNmZjAwZDU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFuZyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAyMzRweCAtMjY2LjMzMzMzMzMzMzNweCBkYXJrb3JhbmdlLCAzMjJweCAtMzg1LjMzMzMzMzMzMzNweCAjOWQwMGZmLCAtMjY3cHggLTM0OC4zMzMzMzMzMzMzcHggI2NjMDBmZiwgMTI3cHggLTE5LjMzMzMzMzMzMzNweCAjMDBmN2ZmLCAyODdweCAtNTIuMzMzMzMzMzMzM3B4ICNkOWZmMDAsIC0yOTdweCAtNTAzLjMzMzMzMzMzMzNweCAjZmY5ZDAwLCAyOThweCAtNDI4LjMzMzMzMzMzMzNweCAjZmY4MDAwLCAtODVweCA5Mi42NjY2NjY2NjY3cHggI2ZmMDAzMywgLTMxNHB4IC05Mi4zMzMzMzMzMzMzcHggIzAwZmZiYiwgMnB4IC00ODcuMzMzMzMzMzMzM3B4ICNmZmE2MDAsIDE5M3B4IC0zMjYuMzMzMzMzMzMzM3B4ICNmZjM3MDAsIC0xNjhweCAtMjk4LjMzMzMzMzMzMzNweCAjMDAxZWZmLCAtMTg3cHggMTAzLjY2NjY2NjY2NjdweCAjMDBmZmE2LCAtMTA4cHggLTQwMy4zMzMzMzMzMzMzcHggIzAwYWFmZiwgLTIzN3B4IC0xNzUuMzMzMzMzMzMzM3B4ICMwMGZmNDAsIDU2cHggLTMxNy4zMzMzMzMzMzMzcHggIzczZmYwMCwgMzE1cHggLTYxLjMzMzMzMzMzMzNweCAjNWVmZjAwLCAxNDVweCA5Mi42NjY2NjY2NjY3cHggIzAwZjJmZiwgLTQ2cHggLTUxOC4zMzMzMzMzMzMzcHggIzYyZmYwMCwgLTIwOXB4IC0yMzYuMzMzMzMzMzMzM3B4ICNmZjAwNzMsIDc3cHggNC42NjY2NjY2NjY3cHggI2NjMDBmZiwgMTI2cHggNTYuNjY2NjY2NjY2N3B4ICNmZjQ4MDAsIC0zMjhweCA2OC42NjY2NjY2NjY3cHggIzg4MDBmZiwgMzBweCAtOTIuMzMzMzMzMzMzM3B4ICMxYWZmMDAsIDE0N3B4IC0xOTEuMzMzMzMzMzMzM3B4ICMwMGZmMWUsIC0xNDJweCAtMzc3LjMzMzMzMzMzMzNweCAjZmYwMDA5LCAzMDBweCAtODYuMzMzMzMzMzMzM3B4ICMwMGZmZTEsIC0xNDlweCA4MS42NjY2NjY2NjY3cHggIzU5ZmYwMCwgLTEzNnB4IC00MTkuMzMzMzMzMzMzM3B4ICMwMGZmNDgsIDI5MnB4IC0yOTUuMzMzMzMzMzMzM3B4ICNjOGZmMDAsIC0xMjNweCAtMjMwLjMzMzMzMzMzMzNweCAjZmZiZjAwLCAyNzhweCAtMzg4LjMzMzMzMzMzMzNweCAjMDA3M2ZmLCAtN3B4IC00MzguMzMzMzMzMzMzM3B4ICMwMGZmNWUsIDI0N3B4IC00MDguMzMzMzMzMzMzM3B4ICMwMDU1ZmYsIC0xODRweCAtMTUuMzMzMzMzMzMzM3B4ICNmZjQ4MDAsIC04M3B4IC0zNzYuMzMzMzMzMzMzM3B4ICMzYzAwZmYsIDIxM3B4IC0yNzQuMzMzMzMzMzMzM3B4ICMwMDgwZmYsIDYzcHggNi42NjY2NjY2NjY3cHggI2NjMDBmZiwgNDlweCAxMDUuNjY2NjY2NjY2N3B4ICMwMGI3ZmYsIC0yMjlweCAtNTU4LjMzMzMzMzMzMzNweCAjZmZmNzAwLCAyMjZweCAtMzAyLjMzMzMzMzMzMzNweCAjZmYwMDY2LCAtMjY2cHggNTkuNjY2NjY2NjY2N3B4ICM2NmZmMDAsIC01NXB4IC00NzMuMzMzMzMzMzMzM3B4ICNiNzAwZmYsIDg0cHggLTEzMC4zMzMzMzMzMzMzcHggIzA5ZmYwMCwgLTI3OXB4IDk3LjY2NjY2NjY2NjdweCAjZmYwMDIyLCAxOXB4IC0xMDguMzMzMzMzMzMzM3B4ICMwMGEyZmYsIC03cHggLTU0OS4zMzMzMzMzMzMzcHggI2ZmZWEwMCwgLTI4cHggLTEyNS4zMzMzMzMzMzMzcHggI2ZmMjYwMCwgMjVweCAtNS4zMzMzMzMzMzMzcHggeWVsbG93LCAtMjAxcHggLTEuMzMzMzMzMzMzM3B4ICMwMGZmNGQsIDI4OXB4IC04LjMzMzMzMzMzMzNweCAjZmYwMGQ1O1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgZ3Jhdml0eSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGdyYXZpdHkge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDQ5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICA1MCUsIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgNDkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDUwJSwgMTAwJSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcG9zaXRpb24ge1xuICAwJSwgNDkuOSUge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIDUwJSwgMTAwJSB7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDQ5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICA1MCUsIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBvc2l0aW9uIHtcbiAgMCUsIDQ5LjklIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxuICA1MCUsIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/game-play/game-play.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/game-play/game-play.page.ts ***!
    \***************************************************/

  /*! exports provided: GamePlayPage */

  /***/
  function srcAppPagesGamePlayGamePlayPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamePlayPage", function () {
      return GamePlayPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/audio.service */
    "./src/app/services/audio.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var GamePlayPage =
    /*#__PURE__*/
    function () {
      function GamePlayPage(audio, route, router) {
        var _this = this;

        _classCallCheck(this, GamePlayPage);

        this.audio = audio;
        this.route = route;
        this.router = router;
        this.turnArray = [];
        this.turn = 0;
        this.showColoredAnimation = false;
        this.animateHome = ['', '', '', ''];
        this.animateCol = [[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]]];
        this.rollDiceB = true;
        this.posStart = [0, 13, 26, 39]; //red ,green ,blue ,yellow

        this.homeShow = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
        this.locationShow = [[[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]], [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]]];
        this.locationShowColored = [[[0], [0], [0], [0], [0]], [[0], [0], [0], [0], [0]], [[0], [0], [0], [0], [0]], [[0], [0], [0], [0], [0]]];
        this.homeLeft = [4, 4, 4, 4];
        this.homeWon = [0, 0, 0, 0];
        this.pieces = {
          0: 'red',
          1: 'green',
          2: 'blue',
          3: 'yellow'
        };
        this.diceColor = 'white';
        this.random = 0;
        this.dice = ['cubeRed', 'cubeGreen', 'cubeBlue', 'cubeYellow'];
        this.turnCounter = -1;
        this.loop = true;
        this.valueMove = 0;
        this.posCounterMove = 0;
        this.y = 0;
        this.posCounter = 0;
        this.posCounterColored = 0;
        this.valueColored = 0;
        this.six = false;
        this.route.queryParams.subscribe(function (params) {
          if (params && params.special) {
            _this.playerNum = JSON.parse(params.special).playerNum;
            _this.players = JSON.parse(params.special).players;
          }

          console.log(_this.playerNum, _this.players);

          if (_this.playerNum == 2) {
            _this.turnArray = [3, 1];
          } else if (_this.playerNum == 3) {
            _this.turnArray = [3, 0, 1];
          } else if (_this.playerNum == 4) {
            _this.turnArray = [3, 0, 1, 2];
          }

          for (var i = 0; i < 4 - _this.playerNum; i++) {
            _this.players.pop();
          }

          console.log(_this.players);

          if (_this.players.length == 2) {
            _this.player1 = _this.players[0];
            _this.player3 = _this.players[1];
          } else if (_this.players.length == 3) {
            _this.player1 = _this.players[0];
            _this.player2 = _this.players[1];
            _this.player3 = _this.players[2];
          } else if (_this.players.length == 4) {
            _this.player1 = _this.players[0];
            _this.player2 = _this.players[1];
            _this.player3 = _this.players[2];
            _this.player4 = _this.players[3];
          }

          _this.nextTurn();
        });
      }

      _createClass(GamePlayPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeDiceColor",
        value: function changeDiceColor(color) {//    this.diceColor=color;
        }
      }, {
        key: "nextTurn",
        value: function nextTurn() {
          this.turnCounter++;

          if (this.turnCounter >= this.playerNum) {
            this.turnCounter = 0;
          }

          this.turn = this.turnArray[this.turnCounter];
          this.rollDiceB = true;
        }
      }, {
        key: "rollDice",
        value: function rollDice() {
          var _this2 = this;

          if (this.rollDiceB) {
            this.rollDiceB = false;
            var min = 1;
            var max = 24;
            var xRand = 360; //this.getRandom(max,min);

            var yRand = 1440; //this.getRandom(max,min);
            //  console.log(xRand,yRand);

            this.audio.play('roll');
            var cube = document.getElementById(this.dice[this.turn]);
            cube.style.webkitTransform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
            cube.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
            setTimeout(function () {
              var random = _this2.getRandomNumber(7, 1);

              if (random == 6) {
                xRand = 90; // this.getRandom(max, min);

                yRand = 180; //this.getRandom(max, min);

                _this2.six = true;
              } else if (random == 1) {
                xRand = 180;
                yRand = 180;
                _this2.six = false;
              } else if (random == 2) {
                xRand = 180;
                yRand = 0;
                _this2.six = false;
              } else if (random == 3) {
                xRand = 180;
                yRand = 90;
                _this2.six = false;
              } else if (random == 5) {
                xRand = -90;
                yRand = 0;
                _this2.six = false;
              } else if (random == 4) {
                xRand = 0;
                yRand = 90;
                _this2.six = false;
              } //  console.log(xRand,yRand);


              cube.style.webkitTransform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
              cube.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)'; //console.log(random);

              setTimeout(function () {
                if (random == 6) {
                  var colorP = 0;

                  for (var i = 0; i < 5; i++) {
                    if (_this2.locationShowColored[_this2.turn][i][1]) {
                      colorP = _this2.locationShowColored[_this2.turn][i][1];
                    } else if (_this2.locationShowColored[_this2.turn][i][0]) {
                      colorP++;
                    }
                  }

                  if (!_this2.homeLeft[_this2.turn] && _this2.homeWon[_this2.turn] + colorP == 4) {
                    _this2.nextTurn();
                  }

                  console.log(random);

                  if (_this2.homeLeft[_this2.turn] + _this2.homeWon[_this2.turn] == 4) {
                    _this2.locationShow[_this2.turn][_this2.posStart[_this2.turn]][0] = 1;
                    _this2.homeLeft[_this2.turn]--;
                    _this2.homeShow[_this2.turn][0] = 0;

                    _this2.locationShow[_this2.turn][_this2.posStart[_this2.turn]].push(1);

                    console.log('roll dice again');
                    _this2.rollDiceB = true;
                  } else {
                    console.log('choose your move');
                    _this2.lastThrowValue = random;
                    _this2.animateHome[0] = '';
                    _this2.animateHome[1] = '';
                    _this2.animateHome[2] = '';
                    _this2.animateHome[3] = '';
                    _this2.animateHome[_this2.turn] = 'animateP';

                    for (var p = 0; p < _this2.animateCol[_this2.turn].length; p++) {
                      _this2.animateCol[0][p][0] = 0;
                      _this2.animateCol[1][p][0] = 0;
                      _this2.animateCol[2][p][0] = 0;
                      _this2.animateCol[3][p][0] = 0;
                    }

                    for (var k = 0; k < _this2.animateCol[_this2.turn].length; k++) {
                      _this2.animateCol[_this2.turn][k][0] = 'animateP';
                    }
                  }

                  _this2.audio.play('six');
                } else {
                  var positions = [];
                  var colorP = 0;

                  for (var i = 0; i < 5; i++) {
                    if (_this2.locationShowColored[_this2.turn][i][1]) {
                      colorP += _this2.locationShowColored[_this2.turn][i][1];
                      positions.push(i);
                    } else if (_this2.locationShowColored[_this2.turn][i][0]) {
                      colorP++;
                    }
                  }

                  var next = true;

                  if (!_this2.homeLeft[_this2.turn] && _this2.homeWon[_this2.turn] + colorP == 4 && positions.length >= 1) {
                    for (var t = 0; t < positions.length; t++) {
                      if (5 - positions[t] <= random) {
                        next = false;
                      } else {}
                    }

                    if (next) {
                      _this2.nextTurn();
                    }
                  }

                  console.log("pieces in colored regin is ", colorP);

                  if (_this2.homeLeft[_this2.turn] + _this2.homeWon[_this2.turn] == 4) {
                    setTimeout(function () {
                      _this2.nextTurn();

                      console.log('next turn ', _this2.turn);
                    }, 250);
                  } else {
                    _this2.lastThrowValue = random;
                    console.log('choose your move');

                    for (var _p = 0; _p < _this2.animateCol[_this2.turn].length; _p++) {
                      _this2.animateCol[0][_p][0] = 0;
                      _this2.animateCol[1][_p][0] = 0;
                      _this2.animateCol[2][_p][0] = 0;
                      _this2.animateCol[3][_p][0] = 0;
                    }

                    for (var _k = 0; _k < _this2.animateCol[_this2.turn].length; _k++) {
                      _this2.animateCol[_this2.turn][_k][0] = 'animateP';
                    }
                  }
                }
              }, 500);
            }, 500);
          } else {
            console.log("not allowed to roll dice");
          }
        }
      }, {
        key: "getRandom",
        value: function getRandom(max, min) {
          return (Math.floor(Math.random() * (max - min)) + min) * 90;
        }
      }, {
        key: "getRandomNumber",
        value: function getRandomNumber(max, min) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
      }, {
        key: "moveOut",
        value: function moveOut(p, pos) {
          console.log('moving out ', p);

          if (this.pieces[this.turn] == p) {
            //  var index= this.lastThrowValue.findIndex(v=>v==6);
            //  console.log(index);
            var start = this.posStart[this.turn];
            var value = this.lastThrowValue;

            if (value == 6) {
              this.lastThrowValue = 0;

              if (this.locationShow[this.turn][start][0] == 1) {
                this.locationShow[this.turn][start][0] = 1;

                if (this.locationShow[this.turn][start][1]) {
                  this.locationShow[this.turn][start][1] += 1;
                } else if (this.locationShow[this.turn][start][1] == 0) {
                  this.locationShow[this.turn][start][1] += 1;
                } else {
                  this.locationShow[this.turn][start].push(1);
                }
              } else {
                if (this.locationShow[this.turn][start][1]) {
                  this.locationShow[this.turn][start][1] += 1;
                } else if (this.locationShow[this.turn][start][1] == 0) {
                  this.locationShow[this.turn][start][1] += 1;
                } else {
                  this.locationShow[this.turn][start].push(1);
                }

                this.homeShow[this.turn][pos] = 0;
                this.locationShow[this.turn][start][0] = 1;
              }

              for (var k = 0; k < this.animateCol[this.turn].length; k++) {
                this.animateCol[0][k][0] = 0;
                this.animateCol[1][k][0] = 0;
                this.animateCol[2][k][0] = 0;
                this.animateCol[3][k][0] = 0;
              }

              this.animateHome[0] = '';
              this.animateHome[1] = '';
              this.animateHome[2] = '';
              this.animateHome[3] = '';
              this.homeShow[this.turn][pos] = 0;
              console.log(p, ' position showed on box 0');
              this.homeLeft[this.turn] -= 1;
              this.rollDiceB = true;
            } else {
              console.log('no 6 to move out');
            }
          } else {
            console.log("its not your turn");
          }
        }
      }, {
        key: "move",
        value: function move(p, k, call) {
          var _this3 = this;

          var moveDelay = 0;

          if (this.pieces[this.turn] == p) {
            if (this.posCounterMove == 0) {
              this.y = k;
              this.valueMove = this.lastThrowValue;

              if (k == 0 && p != 'red' && call) {
                if (this.locationShow[this.turn][0][1]) {
                  this.locationShow[this.turn][0][1] -= 1;

                  if (this.locationShow[this.turn][0][1]) {//  this.locationShow[this.turn][0][1]-=1;
                  } else {
                    this.locationShow[this.turn][0][0] = 0;
                  }
                } else {
                  this.locationShow[this.turn][0][0] = 0;
                }
              }
            }

            if (this.valueMove) {
              this.audio.play('move');

              for (var _k2 = 0; _k2 < this.animateCol[this.turn].length; _k2++) {
                this.animateCol[0][_k2][0] = 0;
                this.animateCol[1][_k2][0] = 0;
                this.animateCol[2][_k2][0] = 0;
                this.animateCol[3][_k2][0] = 0;
              }

              this.animateHome[0] = '';
              this.animateHome[1] = '';
              this.animateHome[2] = '';
              this.animateHome[3] = '';
              var counter = 0;
              var value = this.valueMove;
              var start = this.posStart[this.turn];
              var y = this.y; //  for (let i = y+1; i <=y+value;i++) {

              var i = y + 1 + this.posCounterMove;
              console.log("i is y is  value move is ", i + " ", y, " " + value);

              if (i == 51 && p == 'red') {
                this.loop = false;
                console.log("red should be inside");
                this.lastThrowValue = value - this.posCounterMove - 1;

                if (y == 50) {
                  if (this.locationShow[this.turn][50][1]) {
                    this.locationShow[this.turn][50][1] -= 1;

                    if (this.locationShow[this.turn][50][1]) {} else {
                      this.locationShow[this.turn][50][0] = 0;
                    }
                  } else {
                    this.locationShow[this.turn][50][0] = 0;
                  }
                }

                if (this.locationShow[this.turn][50][1]) {} else {
                  this.locationShow[this.turn][50][0] = 0;
                }

                this.moveColored(p, 0, true);
                this.posCounterMove = 0;
                this.y = 0; //break;
              } else if (i == 12 && p == 'green') {
                this.loop = false;
                console.log('green shoul be inside here');
                this.lastThrowValue = value - this.posCounterMove - 1;

                if (y == 11) {
                  if (this.locationShow[this.turn][11][1]) {
                    this.locationShow[this.turn][11][1] -= 1;

                    if (this.locationShow[this.turn][11][1]) {} else {
                      this.locationShow[this.turn][11][0] = 0;
                    }
                  } else {
                    this.locationShow[this.turn][11][0] = 0;
                  }
                }

                if (this.locationShow[this.turn][11][1]) {} else {
                  this.locationShow[this.turn][11][0] = 0;
                }

                this.moveColored(p, 0, true);
                this.posCounterMove = 0;
                this.y = 0; //break;
              } else if (i == 25 && p == 'blue') {
                this.loop = false;
                this.lastThrowValue = value - this.posCounterMove - 1;

                if (y == 24) {
                  if (this.locationShow[this.turn][24][1]) {
                    this.locationShow[this.turn][24][1] -= 1;

                    if (this.locationShow[this.turn][24][1]) {} else {
                      this.locationShow[this.turn][24][0] = 0;
                    }
                  } else {
                    this.locationShow[this.turn][24][0] = 0;
                  }
                }

                if (this.locationShow[this.turn][25][1]) {} else {
                  this.locationShow[this.turn][25][0] = 0;
                }

                console.log('blue shoul be inside here');
                this.moveColored(p, 0, true);
                this.posCounterMove = 0;
                this.y = 0; //  break;
              } else if (i == 38 && p == 'yellow') {
                this.loop = false;
                this.lastThrowValue = value - this.posCounterMove - 1;
                console.log('yellow shoul be inside here'); //this.lastThrowValue=value-this.posCounterMove;

                if (y == 37) {
                  if (this.locationShow[this.turn][37][1]) {
                    this.locationShow[this.turn][37][1] -= 1;

                    if (this.locationShow[this.turn][37][1]) {} else {
                      this.locationShow[this.turn][37][0] = 0;
                    }
                  } else {
                    this.locationShow[this.turn][37][0] = 0;
                  }
                }

                if (this.locationShow[this.turn][37][1]) {} else {
                  this.locationShow[this.turn][37][0] = 0;
                }

                this.moveColored(p, 0, true);
                this.posCounterMove = 0;
                this.y = 0; //    break;
              } else if (i == 52 && p != 'red') {
                //   this.loop=false;
                //   console.log("its ",p,' last col',i);
                //   console.log('moving ',p," from 0 to ",value-this.posCounterMove);
                //   this.lastThrowValue=value-this.posCounterMove;
                // //  alert(this.lastThrowValue);
                //
                /// decrease number of piece on first move
                if (this.locationShow[this.turn][51][1]) {
                  this.locationShow[this.turn][51][1] -= 1;

                  if (this.locationShow[this.turn][51][1]) {} else {
                    this.locationShow[this.turn][51][0] = 0;
                  }
                } else {
                  this.locationShow[this.turn][51][0] = 0;
                }

                if (this.valueMove == 1) {
                  //if value is 1 just show 0 and increase piece else
                  if (this.locationShow[this.turn][0][1]) {
                    this.locationShow[this.turn][0][1] += 1;
                  } else {
                    this.locationShow[this.turn][0][1] = 1;
                  }

                  this.locationShow[this.turn][0][0] = 1;
                  this.posCounterMove = 0;
                  this.rollDiceB = true;
                  this.nextTurn(); //    this.changeDiceColor(this.pieces[this.turn]);
                } else {
                  this.lastThrowValue = this.lastThrowValue - this.posCounterMove - 1;
                  console.log("calling move functioon with vlue ", this.lastThrowValue, this.posCounterMove);
                  console.log(this.posCounterMove);

                  if (this.lastThrowValue) {
                    this.posCounterMove = 0;

                    if (this.locationShow[this.turn][51][1]) {
                      this.locationShow[this.turn][51][1] -= 1;

                      if (this.locationShow[this.turn][51][1]) {} else {
                        this.locationShow[this.turn][51][0] = 0;
                      }
                    } else {
                      this.locationShow[this.turn][51][0] = 0;
                    }

                    this.locationShow[this.turn][0][0] = 1;
                    this.move(p, 0, true);
                    return 0;
                  } else {
                    if (this.locationShow[this.turn][0][1]) {
                      this.locationShow[this.turn][0][1] += 1;
                    } else {
                      this.locationShow[this.turn][0][1] = 1;
                    }

                    this.locationShow[this.turn][0][0] = 1;
                    this.posCounterMove = 0;
                    this.rollDiceB = true;
                    this.nextTurn();
                    this.changeDiceColor(this.pieces[this.turn]);
                    return 0;
                  }
                } //   this.posCounterMove=0
                //   this.y=0;
                //   if (this.lastThrowValue==1) {
                //     // if (this.locationShow[this.turn][51][1]) {
                //     //   this.locationShow[this.turn][51][1]-=1;
                //     // }else{
                //     //   this.locationShow[this.turn][51][0]=0;
                //     // }
                //     this.locationShow[this.turn][0][0]=1;
                //
                //
                //     if (value!=6) {
                //       this.turn++;
                //       if (this.turn==2) {
                //         this.turn=0;
                //       }
                //       console.log("turn changed ",this.turn);
                //       this.changeDiceColor(this.pieces[this.turn]);
                //     }
                //
                //     this.y=0;
                //     this.posCounterMove=0;
                //     this.rollDiceB=true;
                //   }
                //   else if(this.lastThrowValue>1){
                //   //  this.posCounterMove++;
                //     this.lastThrowValue-=1;
                //     this.move(p,0,true);
                //     // if (this.locationShow[this.turn][51][1]) {
                //     //   this.locationShow[this.turn][51][1]-=1;
                //     // }
                //     // else{
                //     //   this.locationShow[this.turn][51][0]=0;
                //     // }
                //     // if (this.locationShow[this.turn][0][1]) {
                //     //   this.locationShow[this.turn][0][1]-=1;
                //     // }else{
                //     //   this.locationShow[this.turn][0][0]=0;
                //     // }
                //     console.log('move function run ',p);
                //   }

              } else {
                console.log("moving from", i, " to ", value);

                if (i >= y + 2) {
                  if (!this.locationShow[this.turn][i - 1][1]) {
                    this.locationShow[this.turn][i - 1][0] = 0;
                  }
                }

                if (i == 51) {
                  if (this.locationShow[this.turn][51][1]) {
                    this.locationShow[this.turn][51][1] += 1;
                  } else {
                    this.locationShow[this.turn][51][1] = 1;
                  }
                }

                if (i == y + 1) {
                  if (this.locationShow[this.turn][y][1]) {
                    this.locationShow[this.turn][y][1] -= 1;

                    if (this.locationShow[this.turn][y][1]) {} else {
                      this.locationShow[this.turn][y][0] = 0;
                      console.log("hiding ", y);
                    }
                  } else {
                    this.locationShow[this.turn][y][0] = 0;
                    console.log("hiding ", y);
                  }
                }

                this.locationShow[this.turn][i][0] = 1;

                if (i == y + value) {
                  this.loop = true;

                  if (this.locationShow[this.turn][i][1]) {
                    this.locationShow[this.turn][i][1] += 1; //    console.log('number of pices left at position',i,' is',this.locationShow[this.turn][i][1])
                  } else if (this.locationShow[this.turn][i][1] == 0) {
                    this.locationShow[this.turn][i][1] += 1;
                    console.log('number of pices left at position', i, ' is', this.locationShow[this.turn][i][1]);
                  } else if (this.locationShow[this.turn][i].length == 1) {
                    this.locationShow[this.turn][i].push(1); //  console.log('number of pices left at position',i,' is',this.locationShow[this.turn][i][1])
                  }

                  var s = y + value;

                  if (i != 47 && i != 34 && i != 21 && i != 8 && i != 0 && i != 13 && i != 26 && i != 39) {
                    if (this.locationShow[0][i][1] >= 1 && this.turn != 0) {
                      console.log('cutting red at position', s);
                      console.log(this.locationShow[0]);
                      this.cutPiece(0, s, i);
                    } else if (this.locationShow[1][i][1] >= 1 && this.turn != 1) {
                      console.log('cutting green at position', s);
                      this.cutPiece(1, s, i);
                    } else if (this.locationShow[2][i][1] >= 1 && this.turn != 2) {
                      console.log('cutting blue at position', s);
                      this.cutPiece(2, s, i);
                    } else if (this.locationShow[3][i][1] >= 1 && this.turn != 3) {
                      console.log('cutting yellow at pposition', s);
                      this.cutPiece(3, s, i);
                    }
                  }

                  if (!this.six) {
                    this.nextTurn();
                  } else {
                    this.six = false;
                  }

                  this.y = 0;
                  this.posCounterMove = 0;
                  this.rollDiceB = true;
                } else if (this.posCounterMove < value) {
                  setTimeout(function () {
                    _this3.posCounterMove++;

                    _this3.move(p, k - 1, true);
                  }, 350);
                }

                counter++;
                moveDelay = 250;
              } //  }

            } else {
              console.log('no vlaue to move');
            }
          } else {
            console.log("not your turn");
          }
        }
      }, {
        key: "cutPiece",
        value: function cutPiece(piece, from, i) {
          var _this4 = this;

          var start = from - 1;
          console.log(from);

          if (start >= 0) {
            if (this.posCounter == 0) {
              this.locationShow[piece][from][0] = 0;
              console.log('hiding at ', from);

              if (this.locationShow[piece][from][1]) {
                this.locationShow[piece][from][1] -= 1;
              }
            } else {
              if (!this.locationShow[piece][from][1]) {
                this.locationShow[piece][from][0] = 0;
                console.log('hiding at ', from);
              }
            }

            var home = false;

            if (start == this.posStart[piece]) {
              console.log('home is', this.posStart[piece]);
              console.log("last location is ", start);
              home = true;
              this.posCounter = 0;
              this.rollDiceB = true;
              this.homeLeft[piece] += 1;
              console.log('home left is ', this.homeLeft[this.turn]);

              for (var t = 0; t < 4; t++) {
                if (this.homeShow[piece][t] == 0) {
                  this.homeShow[piece][t] = 1;
                  break;
                }
              }
            } else {
              this.locationShow[piece][start][0] = 1;
            }

            if (!home) {
              setTimeout(function () {
                _this4.posCounter++;

                _this4.cutPiece(piece, start, i);
              }, 120);
            }
          } else {
            if (this.locationShow[piece][0][1]) {
              this.locationShow[piece][0][1] -= 1;
            } else {
              this.locationShow[piece][0][0] = 0;
            }

            console.log("changing direction");
            this.cutPiece(piece, 51, i);
          }
        }
      }, {
        key: "moveColored",
        value: function moveColored(p, from, call) {
          var _this5 = this;

          //  console.log("moving ",p," from "+p+'0'+" to "+this.lastThrowValue);
          if (this.pieces[this.turn] == p) {
            if (this.posCounterColored == 0) {
              this.valueColored = this.lastThrowValue;
              this.lastThrowValue = 0;
              console.log("value is ", this.valueColored);
            } //  this.valueColored--;


            var value = this.valueColored;
            var i = from + this.posCounterColored;
            console.log("i is ", i);

            if (value > 5 - from) {
              alert("you can not move");
              this.lastThrowValue = value;
              this.posCounterColored = 0;
              this.valueColored = 0;
              this.rollDiceB = true;
              return 0;
            } ///  decrease the amount of piece on first move


            if (this.posCounterColored == 0 && !call) {
              if (this.locationShowColored[this.turn][from][1]) {
                this.locationShowColored[this.turn][from][1] -= 1;

                if (this.locationShowColored[this.turn][from][1]) {} else {
                  this.locationShowColored[this.turn][from][0] = 0;
                }
              } else {
                this.locationShowColored[this.turn][from][0] = 0;
              }
            } //hide the previous locatioon


            if (i > 0) {
              if (this.locationShowColored[this.turn][i - 1][1]) {} else {
                this.locationShowColored[this.turn][i - 1][0] = 0;
                console.log("hiding ", i - 1);
              }
            }

            if (i >= 5) {
              //alert("one piece home");
              this.showColoredAnimation = true;
              setTimeout(function () {
                _this5.showColoredAnimation = false;
              }, 1500);
              this.homeWon[this.turn] += 1;
              this.posCounterColored = 0;
              this.valueColored = 0;
              this.lastThrowValue = 0;
              this.rollDiceB = true;
              return 0;
            }

            this.locationShowColored[this.turn][i][0] = 1;

            if (this.posCounterColored < value) {
              setTimeout(function () {
                _this5.posCounterColored++;

                _this5.moveColored(p, from, true);
              }, 350);
            } else {
              console.log("finish moving color");

              if (this.locationShowColored[this.turn][i][1]) {
                this.locationShowColored[this.turn][i][1] += 1;
              } else {
                this.locationShowColored[this.turn][i][1] = 1;
              }

              this.posCounterColored = 0;
              this.valueColored = 0;
              this.lastThrowValue = 0;

              if (!this.six) {
                this.nextTurn();
              } else {
                console.log("roll dice again");
                this.six = false;
              }

              this.rollDiceB = true;
            }
          } else {
            console.log("not your turn");
          }
        }
      }]);

      return GamePlayPage;
    }();

    GamePlayPage.ctorParameters = function () {
      return [{
        type: _services_audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    GamePlayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game-play',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game-play.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game-play/game-play.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game-play.page.scss */
      "./src/app/pages/game-play/game-play.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], GamePlayPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-game-play-game-play-module-es5.js.map