"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var msg_interface_1 = require("msg-interface");
var int64_buffer_1 = require("int64-buffer");
var MsgUInt64 = /** @class */ (function (_super) {
    __extends(MsgUInt64, _super);
    function MsgUInt64() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MsgUInt64.prototype.writeMsgpackTo = function (buffer, offset) {
        buffer[offset] = 0xcf;
        this.toBuffer(true).copy(buffer, offset + 1);
        return 9;
    };
    return MsgUInt64;
}(int64_buffer_1.Uint64BE));
exports.MsgUInt64 = MsgUInt64;
var MsgInt64 = /** @class */ (function (_super) {
    __extends(MsgInt64, _super);
    function MsgInt64() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MsgInt64.prototype.writeMsgpackTo = function (buffer, offset) {
        buffer[offset] = 0xd3;
        this.toBuffer(true).copy(buffer, offset + 1);
        return 9;
    };
    return MsgInt64;
}(int64_buffer_1.Int64BE));
exports.MsgInt64 = MsgInt64;
MsgUInt64.prototype.msgpackLength = MsgInt64.prototype.msgpackLength = 9;
MsgUInt64.prototype.toMsgpack = MsgInt64.prototype.toMsgpack = msg_interface_1.Msg.prototype.toMsgpack;
