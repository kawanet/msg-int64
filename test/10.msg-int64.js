"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var msg_interface_1 = require("msg-interface");
var _1 = require("../");
it("MsgInt64", function () {
    var msg = new _1.MsgInt64(-1);
    assert(msg_interface_1.isMsg(msg));
    assert.equal(msg, -1);
    assert.equal(msg.msgpackLength, 9);
    assert.equal(atos(msg.toMsgpack()), "d3-ff-ff-ff-ff-ff-ff-ff-ff");
    assert.equal(atos(new _1.MsgInt64(0).toMsgpack()), "d3-00-00-00-00-00-00-00-00");
    assert.equal(atos(new _1.MsgInt64(4294967295).toMsgpack()), "d3-00-00-00-00-ff-ff-ff-ff");
    assert.equal(atos(new _1.MsgInt64(4294967296).toMsgpack()), "d3-00-00-00-01-00-00-00-00");
    assert.equal(atos(new _1.MsgInt64(Math.pow(2, 48)).toMsgpack()), "d3-00-01-00-00-00-00-00-00");
    assert.equal(atos(new _1.MsgInt64(Math.pow(2, 62)).toMsgpack()), "d3-40-00-00-00-00-00-00-00");
});
it("MsgUInt64", function () {
    var msg = new _1.MsgUInt64(1);
    assert(msg_interface_1.isMsg(msg));
    assert.equal(msg, 1);
    assert.equal(msg.msgpackLength, 9);
    assert.equal(atos(msg.toMsgpack()), "cf-00-00-00-00-00-00-00-01");
    assert.equal(atos(new _1.MsgUInt64(0).toMsgpack()), "cf-00-00-00-00-00-00-00-00");
    assert.equal(atos(new _1.MsgUInt64(4294967295).toMsgpack()), "cf-00-00-00-00-ff-ff-ff-ff");
    assert.equal(atos(new _1.MsgUInt64(4294967296).toMsgpack()), "cf-00-00-00-01-00-00-00-00");
    assert.equal(atos(new _1.MsgUInt64(Math.pow(2, 48)).toMsgpack()), "cf-00-01-00-00-00-00-00-00");
    assert.equal(atos(new _1.MsgUInt64(Math.pow(2, 63)).toMsgpack()), "cf-80-00-00-00-00-00-00-00");
});
function atos(array) {
    return [].map.call(array, function (v) {
        return (v > 15 ? "" : "0") + v.toString(16);
    }).join("-");
}
