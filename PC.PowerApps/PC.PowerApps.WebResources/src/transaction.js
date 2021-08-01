"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markAsNonPaymentFromGrid = exports.markAsNonPaymentFromForm = exports.processFromGrid = exports.processFromForm = void 0;
var common_1 = require("./lib/common");
function processFromForm(form) {
    return __awaiter(this, void 0, void 0, function () {
        var id, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 8]);
                    id = form.data.entity.getId();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    Xrm.Utility.showProgressIndicator("Processing the transaction...");
                    return [4 /*yield*/, process(id)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    Xrm.Utility.closeProgressIndicator();
                    return [7 /*endfinally*/];
                case 4: return [4 /*yield*/, form.data.refresh()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 6:
                    error_1 = _a.sent();
                    return [4 /*yield*/, common_1.showError(error_1)];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.processFromForm = processFromForm;
function processFromGrid(grid, selectedIds) {
    return __awaiter(this, void 0, void 0, function () {
        var i, id, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 10]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 6, 7]);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < selectedIds.length)) return [3 /*break*/, 5];
                    id = selectedIds[i];
                    Xrm.Utility.showProgressIndicator("Processing " + (i + 1) + " of " + selectedIds.length + " transactions...");
                    return [4 /*yield*/, process(id)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++i;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 7];
                case 6:
                    Xrm.Utility.closeProgressIndicator();
                    return [7 /*endfinally*/];
                case 7:
                    grid.refresh();
                    return [3 /*break*/, 10];
                case 8:
                    error_2 = _a.sent();
                    return [4 /*yield*/, common_1.showError(error_2)];
                case 9:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
exports.processFromGrid = processFromGrid;
function process(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, XrmQuery.promiseRequest("POST", "pc_transactions(" + common_1.formatGuid(id) + ")/Microsoft.Dynamics.CRM.pc_ProcessTransaction", null)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function markAsNonPaymentFromForm(form) {
    return __awaiter(this, void 0, void 0, function () {
        var id, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 8]);
                    id = form.data.entity.getId();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    Xrm.Utility.showProgressIndicator("Marking the transaction as non-payment...");
                    return [4 /*yield*/, markAsNonPayment(id)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    Xrm.Utility.closeProgressIndicator();
                    return [7 /*endfinally*/];
                case 4: return [4 /*yield*/, form.data.refresh()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 6:
                    error_3 = _a.sent();
                    return [4 /*yield*/, common_1.showError(error_3)];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.markAsNonPaymentFromForm = markAsNonPaymentFromForm;
function markAsNonPaymentFromGrid(grid, selectedIds) {
    return __awaiter(this, void 0, void 0, function () {
        var i, id, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 10]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 6, 7]);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < selectedIds.length)) return [3 /*break*/, 5];
                    id = selectedIds[i];
                    Xrm.Utility.showProgressIndicator("Marking " + (i + 1) + " of " + selectedIds.length + " transactions as non-payment...");
                    return [4 /*yield*/, markAsNonPayment(id)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++i;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 7];
                case 6:
                    Xrm.Utility.closeProgressIndicator();
                    return [7 /*endfinally*/];
                case 7:
                    grid.refresh();
                    return [3 /*break*/, 10];
                case 8:
                    error_4 = _a.sent();
                    return [4 /*yield*/, common_1.showError(error_4)];
                case 9:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
exports.markAsNonPaymentFromGrid = markAsNonPaymentFromGrid;
function markAsNonPayment(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, XrmQuery.promiseRequest("POST", "pc_transactions(" + common_1.formatGuid(id) + ")/Microsoft.Dynamics.CRM.pc_MarkTransactionAsNonPayment", null)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=transaction.js.map