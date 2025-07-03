"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const users_constants_1 = require("../constants/users.constants");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        match: users_constants_1.emailValidation.value,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: {
            values: ['superadmin', 'admin', 'manager', 'user'],
            message: 'user/manager/admin with with email already exist',
        },
        default: 'user',
        required: true,
    },
    token: {
        type: String,
    },
}, { versionKey: false, timestamps: true });
const User = (0, mongoose_1.model)('user', userSchema);
exports.default = User;
