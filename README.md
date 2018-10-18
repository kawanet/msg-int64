# msg-int64 - msgpack 64-bit integer container

[![npm version](https://badge.fury.io/js/msg-int64.svg)](http://badge.fury.io/js/msg-int64) [![Build Status](https://travis-ci.org/kawanet/msg-int64.svg?branch=master)](https://travis-ci.org/kawanet/msg-int64)

`msg-int64` is a subclass of [int64-buffer](https://www.npmjs.com/package/int64-buffer) 64 bit integer container and implements [msg-interface](https://www.npmjs.com/package/msg-interface).

### Synopsis

```js
var MsgInt64 = require("msg-int64").MsgInt64;

var msg = new MsgInt64("-1234567890123456789");

msg.toString(); // => '-1234567890123456789'

+msg; // => -1234567890123456800

msg.toBuffer(); // => <Buffer ee dd ef 0b 82 16 7e eb>

var msgToBuffer = require("msg-interface").msgToBuffer;
msgToBuffer(msg); // => <Buffer d3 ee dd ef 0b 82 16 7e eb>
```

```js
var MsgUInt64 = require("msg-int64").MsgUInt64;

var msg = new MsgUInt64("1234567890123456789");

msg.toString(); // => '1234567890123456789'

+msg; // => 1234567890123456800

msg.toBuffer(); // => <Buffer 11 22 10 f4 7d e9 81 15>

var msgToBuffer = require("msg-interface").msgToBuffer;
msgToBuffer(msg); // => <Buffer cf 11 22 10 f4 7d e9 81 15>
```

### GitHub

- [https://github.com/kawanet/msg-int64](https://github.com/kawanet/msg-int64)

### See Also

- [https://github.com/kawanet/msg-interface](https://github.com/kawanet/msg-interface)
- [https://github.com/kawanet/int64-buffer](https://github.com/kawanet/int64-buffer)

### The MIT License (MIT)

Copyright (c) 2017-2018 Yusuke Kawasaki

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
