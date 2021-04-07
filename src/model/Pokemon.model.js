"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonModel = void 0;
var PokemonModel = /** @class */ (function () {
    function PokemonModel(name) {
        this._name = name;
    }
    Object.defineProperty(PokemonModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return PokemonModel;
}());
exports.PokemonModel = PokemonModel;
