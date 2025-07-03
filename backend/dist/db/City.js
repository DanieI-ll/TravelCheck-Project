"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const citySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    topPlaces: [
        {
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        },
    ],
}, { versionKey: false, timestamps: true });
const City = (0, mongoose_1.model)('city', citySchema);
exports.default = City;
