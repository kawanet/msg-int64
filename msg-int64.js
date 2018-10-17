// msg-int64.js

var I = require("int64-buffer");

exports.MsgUInt64 = MsgUInt64;
exports.MsgInt64 = MsgInt64;

MsgUInt64.prototype = gen(I.Uint64BE, 0xcf);
MsgInt64.prototype = gen(I.Int64BE, 0xd3);

function MsgUInt64() {
  var that = (this instanceof MsgUInt64) ? this : new MsgUInt64();
  I.Uint64BE.apply(that, arguments);
  return that;
}

function MsgInt64() {
  var that = (this instanceof MsgInt64) ? this : new MsgInt64();
  I.Int64BE.apply(that, arguments);
  return that;
}

function gen(_super, token) {
  var P = Object.create(_super.prototype);

  P.msgpackLength = 9;

  P.writeMsgpackTo = function(buffer, offset) {
    buffer[offset] = token;
    this.toBuffer().copy(buffer, offset + 1);
    return 9;
  };

  return P;
}
