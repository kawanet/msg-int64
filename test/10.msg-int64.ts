"use strict";

import * as assert from "assert";
import {isMsg} from "msg-interface";
import {MsgInt64, MsgUInt64} from "../";

it("MsgInt64", () => {
    const msg = new MsgInt64(-1);
    assert(isMsg(msg));
    assert.equal(msg, -1);
    assert.equal(msg.msgpackLength, 9);
    assert.equal(atos(msg.toMsgpack()), "d3-ff-ff-ff-ff-ff-ff-ff-ff");

    assert.equal(atos(new MsgInt64(0).toMsgpack()), "d3-00-00-00-00-00-00-00-00");
    assert.equal(atos(new MsgInt64(4294967295).toMsgpack()), "d3-00-00-00-00-ff-ff-ff-ff");
    assert.equal(atos(new MsgInt64(4294967296).toMsgpack()), "d3-00-00-00-01-00-00-00-00");
    assert.equal(atos(new MsgInt64(Math.pow(2,48)).toMsgpack()), "d3-00-01-00-00-00-00-00-00");
    assert.equal(atos(new MsgInt64(Math.pow(2,62)).toMsgpack()), "d3-40-00-00-00-00-00-00-00");
});

it("MsgUInt64", () => {
    const msg = new MsgUInt64(1);
    assert(isMsg(msg));
    assert.equal(msg, 1);
    assert.equal(msg.msgpackLength, 9);
    assert.equal(atos(msg.toMsgpack()), "cf-00-00-00-00-00-00-00-01");

    assert.equal(atos(new MsgUInt64(0).toMsgpack()), "cf-00-00-00-00-00-00-00-00");
    assert.equal(atos(new MsgUInt64(4294967295).toMsgpack()), "cf-00-00-00-00-ff-ff-ff-ff");
    assert.equal(atos(new MsgUInt64(4294967296).toMsgpack()), "cf-00-00-00-01-00-00-00-00");
    assert.equal(atos(new MsgUInt64(Math.pow(2,48)).toMsgpack()), "cf-00-01-00-00-00-00-00-00");
    assert.equal(atos(new MsgUInt64(Math.pow(2,63)).toMsgpack()), "cf-80-00-00-00-00-00-00-00");
});

function atos(array) {
    return [].map.call(array, (v) => {
        return (v > 15 ? "" : "0") + v.toString(16);
    }).join("-");
}