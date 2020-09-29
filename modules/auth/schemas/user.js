"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
var mongoose_1 = require("mongoose");
var schemaUser = new mongoose_1.Schema({
    username: String,
    email: String,
    password: String
});
exports.userSchema = mongoose_1.model('User', schemaUser, 'Users');
//# sourceMappingURL=user.js.map