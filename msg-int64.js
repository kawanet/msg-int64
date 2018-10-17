// msg-int64.js

var I = require("int64-buffer");
var Uint64BE = I.Uint64BE;
var Int64BE = I.Int64BE;

exports.MsgUInt64 = MsgUInt64;
exports.MsgInt64 = MsgInt64;

inherits(MsgUInt64, Uint64BE, 0xcf);
inherits(MsgInt64, Int64BE, 0xd3);

MsgUInt64.isUint64BE = Uint64BE.isUint64BE;
MsgInt64.isInt64BE = Int64BE.isInt64BE;

function MsgUInt64() {
  var that = (this instanceof MsgUInt64) ? this : new MsgUInt64();
  Uint64BE.apply(that, arguments);
  return that;
}

function MsgInt64() {
  var that = (this instanceof MsgInt64) ? this : new MsgInt64();
  Int64BE.apply(that, arguments);
  return that;
}

function inherits(child, _super, token) {
  var P = child.prototype = Object.create(_super.prototype);

  P.msgpackLength = 9;

  P.writeMsgpackTo = function(buffer, offset) {
    buffer[offset] = token;
    this.toBuffer().copy(buffer, offset + 1);
    return 9;
  };
}
