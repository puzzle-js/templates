"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const module_1 = __importDefault(require("@puzzle-js/module"));
const api_1 = require("@puzzle-js/core/dist/api");
const renderer_1 = require("./renderer");
const data_1 = require("./data");
const module = new module_1.default();
module.bootstrap([
    api_1.Api,
    renderer_1.Renderer,
    data_1.Data
]);
module.exports = module;
