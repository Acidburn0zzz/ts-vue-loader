var __extends = (this && this.__extends) || (function () {
  var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
  return function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports"], function (require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    App = __decorate([
      Component({
        data: function () {
          return {
            fake: 'state',
            fake2: ['1', '2']
          };
        },
        components: { Count1: Count1, Count2: Count2 },
        template: "<div>\n      <p>This demo is stupid, but it shows how components are reloaded</p>\n    </div>"
      })
    ], App);
    return App;
  }(Vue));
  exports.default = App;
});
