"use strict";

import {Msg, MsgInterface} from "msg-interface";
import {Int64BE, Uint64BE} from "int64-buffer";

export class MsgUInt64 extends Uint64BE implements MsgInterface {
    msgpackLength: number;
    toMsgpack: () => Buffer;

    writeMsgpackTo(buffer: Buffer, offset?: number) {
        buffer[offset] = 0xcf;
        this.toBuffer(true).copy(buffer, offset + 1);
        return 9;
    }
}

export class MsgInt64 extends Int64BE implements MsgInterface {
    msgpackLength: number;
    toMsgpack: () => Buffer;

    writeMsgpackTo(buffer: Buffer, offset?: number) {
        buffer[offset] = 0xd3;
        this.toBuffer(true).copy(buffer, offset + 1);
        return 9;
    }
}

MsgUInt64.prototype.msgpackLength = MsgInt64.prototype.msgpackLength = 9;
MsgUInt64.prototype.toMsgpack = MsgInt64.prototype.toMsgpack = Msg.prototype.toMsgpack;
