"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordValidation = exports.emailValidation = void 0;
exports.emailValidation = {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'email mast contain @, dot and no contain spaces',
};
exports.passwordValidation = {
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]+$/,
    message: 'Password must contains al least 1 letter, 1 number and 1 special symbol',
};
