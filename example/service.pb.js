/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.twirpjs = (function() {

    /**
     * Namespace twirpjs.
     * @exports twirpjs
     * @namespace
     */
    var twirpjs = {};

    twirpjs.example = (function() {

        /**
         * Namespace example.
         * @memberof twirpjs
         * @namespace
         */
        var example = {};

        example.DieRoller = (function() {

            /**
             * Constructs a new DieRoller service.
             * @memberof twirpjs.example
             * @classdesc Represents a DieRoller
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function DieRoller(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (DieRoller.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DieRoller;

            /**
             * Creates new DieRoller service using the specified rpc implementation.
             * @function create
             * @memberof twirpjs.example.DieRoller
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {DieRoller} RPC service. Useful where requests and/or responses are streamed.
             */
            DieRoller.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link twirpjs.example.DieRoller#roll}.
             * @memberof twirpjs.example.DieRoller
             * @typedef RollCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {twirpjs.example.RollResult} [response] RollResult
             */

            /**
             * Calls Roll.
             * @function roll
             * @memberof twirpjs.example.DieRoller
             * @instance
             * @param {google.protobuf.IEmpty} request Empty message or plain object
             * @param {twirpjs.example.DieRoller.RollCallback} callback Node-style callback called with the error, if any, and RollResult
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(DieRoller.prototype.roll = function roll(request, callback) {
                return this.rpcCall(roll, $root.google.protobuf.Empty, $root.twirpjs.example.RollResult, request, callback);
            }, "name", { value: "Roll" });

            /**
             * Calls Roll.
             * @function roll
             * @memberof twirpjs.example.DieRoller
             * @instance
             * @param {google.protobuf.IEmpty} request Empty message or plain object
             * @returns {Promise<twirpjs.example.RollResult>} Promise
             * @variation 2
             */

            return DieRoller;
        })();

        example.Echoer = (function() {

            /**
             * Constructs a new Echoer service.
             * @memberof twirpjs.example
             * @classdesc Represents an Echoer
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function Echoer(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (Echoer.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Echoer;

            /**
             * Creates new Echoer service using the specified rpc implementation.
             * @function create
             * @memberof twirpjs.example.Echoer
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {Echoer} RPC service. Useful where requests and/or responses are streamed.
             */
            Echoer.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link twirpjs.example.Echoer#echo}.
             * @memberof twirpjs.example.Echoer
             * @typedef EchoCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {twirpjs.example.EchoResponse} [response] EchoResponse
             */

            /**
             * Calls Echo.
             * @function echo
             * @memberof twirpjs.example.Echoer
             * @instance
             * @param {twirpjs.example.IEchoRequest} request EchoRequest message or plain object
             * @param {twirpjs.example.Echoer.EchoCallback} callback Node-style callback called with the error, if any, and EchoResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(Echoer.prototype.echo = function echo(request, callback) {
                return this.rpcCall(echo, $root.twirpjs.example.EchoRequest, $root.twirpjs.example.EchoResponse, request, callback);
            }, "name", { value: "Echo" });

            /**
             * Calls Echo.
             * @function echo
             * @memberof twirpjs.example.Echoer
             * @instance
             * @param {twirpjs.example.IEchoRequest} request EchoRequest message or plain object
             * @returns {Promise<twirpjs.example.EchoResponse>} Promise
             * @variation 2
             */

            return Echoer;
        })();

        example.RollResult = (function() {

            /**
             * Properties of a RollResult.
             * @memberof twirpjs.example
             * @interface IRollResult
             * @property {number|null} [number] RollResult number
             */

            /**
             * Constructs a new RollResult.
             * @memberof twirpjs.example
             * @classdesc Represents a RollResult.
             * @implements IRollResult
             * @constructor
             * @param {twirpjs.example.IRollResult=} [properties] Properties to set
             */
            function RollResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RollResult number.
             * @member {number} number
             * @memberof twirpjs.example.RollResult
             * @instance
             */
            RollResult.prototype.number = 0;

            /**
             * Creates a new RollResult instance using the specified properties.
             * @function create
             * @memberof twirpjs.example.RollResult
             * @static
             * @param {twirpjs.example.IRollResult=} [properties] Properties to set
             * @returns {twirpjs.example.RollResult} RollResult instance
             */
            RollResult.create = function create(properties) {
                return new RollResult(properties);
            };

            /**
             * Encodes the specified RollResult message. Does not implicitly {@link twirpjs.example.RollResult.verify|verify} messages.
             * @function encode
             * @memberof twirpjs.example.RollResult
             * @static
             * @param {twirpjs.example.IRollResult} message RollResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RollResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.number);
                return writer;
            };

            /**
             * Encodes the specified RollResult message, length delimited. Does not implicitly {@link twirpjs.example.RollResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof twirpjs.example.RollResult
             * @static
             * @param {twirpjs.example.IRollResult} message RollResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RollResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RollResult message from the specified reader or buffer.
             * @function decode
             * @memberof twirpjs.example.RollResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {twirpjs.example.RollResult} RollResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RollResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.twirpjs.example.RollResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.number = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RollResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof twirpjs.example.RollResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {twirpjs.example.RollResult} RollResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RollResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RollResult message.
             * @function verify
             * @memberof twirpjs.example.RollResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RollResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                return null;
            };

            /**
             * Creates a RollResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof twirpjs.example.RollResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {twirpjs.example.RollResult} RollResult
             */
            RollResult.fromObject = function fromObject(object) {
                if (object instanceof $root.twirpjs.example.RollResult)
                    return object;
                var message = new $root.twirpjs.example.RollResult();
                if (object.number != null)
                    message.number = object.number | 0;
                return message;
            };

            /**
             * Creates a plain object from a RollResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof twirpjs.example.RollResult
             * @static
             * @param {twirpjs.example.RollResult} message RollResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RollResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.number = 0;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                return object;
            };

            /**
             * Converts this RollResult to JSON.
             * @function toJSON
             * @memberof twirpjs.example.RollResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RollResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RollResult;
        })();

        example.EchoRequest = (function() {

            /**
             * Properties of an EchoRequest.
             * @memberof twirpjs.example
             * @interface IEchoRequest
             * @property {string|null} [speech] EchoRequest speech
             */

            /**
             * Constructs a new EchoRequest.
             * @memberof twirpjs.example
             * @classdesc Represents an EchoRequest.
             * @implements IEchoRequest
             * @constructor
             * @param {twirpjs.example.IEchoRequest=} [properties] Properties to set
             */
            function EchoRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EchoRequest speech.
             * @member {string} speech
             * @memberof twirpjs.example.EchoRequest
             * @instance
             */
            EchoRequest.prototype.speech = "";

            /**
             * Creates a new EchoRequest instance using the specified properties.
             * @function create
             * @memberof twirpjs.example.EchoRequest
             * @static
             * @param {twirpjs.example.IEchoRequest=} [properties] Properties to set
             * @returns {twirpjs.example.EchoRequest} EchoRequest instance
             */
            EchoRequest.create = function create(properties) {
                return new EchoRequest(properties);
            };

            /**
             * Encodes the specified EchoRequest message. Does not implicitly {@link twirpjs.example.EchoRequest.verify|verify} messages.
             * @function encode
             * @memberof twirpjs.example.EchoRequest
             * @static
             * @param {twirpjs.example.IEchoRequest} message EchoRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EchoRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.speech != null && Object.hasOwnProperty.call(message, "speech"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.speech);
                return writer;
            };

            /**
             * Encodes the specified EchoRequest message, length delimited. Does not implicitly {@link twirpjs.example.EchoRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof twirpjs.example.EchoRequest
             * @static
             * @param {twirpjs.example.IEchoRequest} message EchoRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EchoRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EchoRequest message from the specified reader or buffer.
             * @function decode
             * @memberof twirpjs.example.EchoRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {twirpjs.example.EchoRequest} EchoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EchoRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.twirpjs.example.EchoRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.speech = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EchoRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof twirpjs.example.EchoRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {twirpjs.example.EchoRequest} EchoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EchoRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EchoRequest message.
             * @function verify
             * @memberof twirpjs.example.EchoRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EchoRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.speech != null && message.hasOwnProperty("speech"))
                    if (!$util.isString(message.speech))
                        return "speech: string expected";
                return null;
            };

            /**
             * Creates an EchoRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof twirpjs.example.EchoRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {twirpjs.example.EchoRequest} EchoRequest
             */
            EchoRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.twirpjs.example.EchoRequest)
                    return object;
                var message = new $root.twirpjs.example.EchoRequest();
                if (object.speech != null)
                    message.speech = String(object.speech);
                return message;
            };

            /**
             * Creates a plain object from an EchoRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof twirpjs.example.EchoRequest
             * @static
             * @param {twirpjs.example.EchoRequest} message EchoRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EchoRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.speech = "";
                if (message.speech != null && message.hasOwnProperty("speech"))
                    object.speech = message.speech;
                return object;
            };

            /**
             * Converts this EchoRequest to JSON.
             * @function toJSON
             * @memberof twirpjs.example.EchoRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EchoRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EchoRequest;
        })();

        example.EchoResponse = (function() {

            /**
             * Properties of an EchoResponse.
             * @memberof twirpjs.example
             * @interface IEchoResponse
             * @property {string|null} [echoedSpeech] EchoResponse echoedSpeech
             */

            /**
             * Constructs a new EchoResponse.
             * @memberof twirpjs.example
             * @classdesc Represents an EchoResponse.
             * @implements IEchoResponse
             * @constructor
             * @param {twirpjs.example.IEchoResponse=} [properties] Properties to set
             */
            function EchoResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EchoResponse echoedSpeech.
             * @member {string} echoedSpeech
             * @memberof twirpjs.example.EchoResponse
             * @instance
             */
            EchoResponse.prototype.echoedSpeech = "";

            /**
             * Creates a new EchoResponse instance using the specified properties.
             * @function create
             * @memberof twirpjs.example.EchoResponse
             * @static
             * @param {twirpjs.example.IEchoResponse=} [properties] Properties to set
             * @returns {twirpjs.example.EchoResponse} EchoResponse instance
             */
            EchoResponse.create = function create(properties) {
                return new EchoResponse(properties);
            };

            /**
             * Encodes the specified EchoResponse message. Does not implicitly {@link twirpjs.example.EchoResponse.verify|verify} messages.
             * @function encode
             * @memberof twirpjs.example.EchoResponse
             * @static
             * @param {twirpjs.example.IEchoResponse} message EchoResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EchoResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.echoedSpeech != null && Object.hasOwnProperty.call(message, "echoedSpeech"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.echoedSpeech);
                return writer;
            };

            /**
             * Encodes the specified EchoResponse message, length delimited. Does not implicitly {@link twirpjs.example.EchoResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof twirpjs.example.EchoResponse
             * @static
             * @param {twirpjs.example.IEchoResponse} message EchoResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EchoResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EchoResponse message from the specified reader or buffer.
             * @function decode
             * @memberof twirpjs.example.EchoResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {twirpjs.example.EchoResponse} EchoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EchoResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.twirpjs.example.EchoResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.echoedSpeech = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EchoResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof twirpjs.example.EchoResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {twirpjs.example.EchoResponse} EchoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EchoResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EchoResponse message.
             * @function verify
             * @memberof twirpjs.example.EchoResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EchoResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.echoedSpeech != null && message.hasOwnProperty("echoedSpeech"))
                    if (!$util.isString(message.echoedSpeech))
                        return "echoedSpeech: string expected";
                return null;
            };

            /**
             * Creates an EchoResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof twirpjs.example.EchoResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {twirpjs.example.EchoResponse} EchoResponse
             */
            EchoResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.twirpjs.example.EchoResponse)
                    return object;
                var message = new $root.twirpjs.example.EchoResponse();
                if (object.echoedSpeech != null)
                    message.echoedSpeech = String(object.echoedSpeech);
                return message;
            };

            /**
             * Creates a plain object from an EchoResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof twirpjs.example.EchoResponse
             * @static
             * @param {twirpjs.example.EchoResponse} message EchoResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EchoResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.echoedSpeech = "";
                if (message.echoedSpeech != null && message.hasOwnProperty("echoedSpeech"))
                    object.echoedSpeech = message.echoedSpeech;
                return object;
            };

            /**
             * Converts this EchoResponse to JSON.
             * @function toJSON
             * @memberof twirpjs.example.EchoResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EchoResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EchoResponse;
        })();

        return example;
    })();

    return twirpjs;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
