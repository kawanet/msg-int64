// msg-int64.d.ts

import {MsgInterface} from "msg-interface";
import {Int64BE, Uint64BE} from "int64-buffer";

export declare class MsgUInt64 extends Uint64BE implements MsgInterface {
    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset?: number): number;
}

export declare class MsgInt64 extends Int64BE implements MsgInterface {
    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset?: number): number;
}
