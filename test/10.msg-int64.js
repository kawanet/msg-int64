// 10.msg-int64.js

var assert = require("assert");
var MsgInterface = require("msg-interface");

var M = require("../");
var MsgInt64 = M.MsgInt64;
var MsgUInt64 = M.MsgUInt64;

it("MsgInt64", function() {
  var msg = new MsgInt64(-1);
  assert(MsgInterface.isMsg(msg));
  assert.strictEqual(+msg, -1);
  assert.strictEqual(msg.msgpackLength, 9);
  assert.strictEqual(mtos(msg), "d3-ff-ff-ff-ff-ff-ff-ff-ff");

  assert.strictEqual(mtos(MsgInt64(-1)), "d3-ff-ff-ff-ff-ff-ff-ff-ff");

  assert.strictEqual(mtos(new MsgInt64(0)), "d3-00-00-00-00-00-00-00-00");
  assert.strictEqual(mtos(new MsgInt64(4294967295)), "d3-00-00-00-00-ff-ff-ff-ff");
  assert.strictEqual(mtos(new MsgInt64(4294967296)), "d3-00-00-00-01-00-00-00-00");

  assert.strictEqual(mtos(new MsgInt64(Math.pow(2, 48))), "d3-00-01-00-00-00-00-00-00");
  assert.strictEqual(mtos(new MsgInt64(Math.pow(2, 62))), "d3-40-00-00-00-00-00-00-00");

  assert.strictEqual(+new MsgInt64([0, 0, 0, 0, 0, 0, 0, 1]), 1);
  assert.strictEqual(+new MsgInt64([0, 0, 0, 1, 0, 0, 0, 0]), 4294967296);
});

it("MsgUInt64", function() {
  var msg = new MsgUInt64(1);
  assert(MsgInterface.isMsg(msg));
  assert.strictEqual(+msg, 1);
  assert.strictEqual(msg.msgpackLength, 9);
  assert.strictEqual(mtos(msg), "cf-00-00-00-00-00-00-00-01");

  assert.strictEqual(mtos(MsgUInt64(1)), "cf-00-00-00-00-00-00-00-01");

  assert.strictEqual(mtos(new MsgUInt64(0)), "cf-00-00-00-00-00-00-00-00");
  assert.strictEqual(mtos(new MsgUInt64(4294967295)), "cf-00-00-00-00-ff-ff-ff-ff");
  assert.strictEqual(mtos(new MsgUInt64(4294967296)), "cf-00-00-00-01-00-00-00-00");

  assert.strictEqual(mtos(new MsgUInt64(Math.pow(2, 48))), "cf-00-01-00-00-00-00-00-00");
  assert.strictEqual(mtos(new MsgUInt64(Math.pow(2, 63))), "cf-80-00-00-00-00-00-00-00");

  assert.strictEqual(+new MsgUInt64([0, 0, 0, 0, 0, 0, 0, 1]), 1);
  assert.strictEqual(+new MsgUInt64([0, 0, 0, 1, 0, 0, 0, 0]), 4294967296);
});

function atos(array) {
  return [].map.call(array, function(v) {
    return (v > 15 ? "" : "0") + v.toString(16);
  }).join("-");
}

function mtos(msg) {
  return atos(MsgInterface.msgToBuffer(msg));
}
