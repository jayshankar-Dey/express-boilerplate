"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class log {
    constructor() {
        this.red = (text) => {
            console.log(`\x1b[1m\x1b[41m ${text} \x1b[0m`);
        };
        this.blue = (text) => {
            console.log(`\x1b[1m\x1b[44m ${text} \x1b[0m`);
        };
        this.green = (text) => {
            console.log(`\x1b[1m\x1b[42m ${text} \x1b[0m`);
        };
        this.magenta = (text) => {
            console.log(`\x1b[45m ${text} \x1b[0m`);
        };
    }
}
const Log = new log();
exports.default = Log;
