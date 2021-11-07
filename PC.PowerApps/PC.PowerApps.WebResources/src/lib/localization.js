"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Localization = void 0;
var common_1 = require("./common");
var Localization = /** @class */ (function () {
    function Localization(english, latvian) {
        this.english = english;
        this.latvian = latvian;
    }
    Localization.prototype.format = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = Xrm.Utility.getGlobalContext();
        var formatString = this.getTranslation(context);
        var text = common_1.format(formatString, args);
        return text;
    };
    Localization.prototype.getTranslation = function (context) {
        switch (context.userSettings.languageId) {
            case 1062 /* Latvian */:
                return this.latvian;
            default:
                return this.english;
        }
    };
    return Localization;
}());
exports.Localization = Localization;
//# sourceMappingURL=localization.js.map