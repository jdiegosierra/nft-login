(this.webpackJsonpweb3gl=this.webpackJsonpweb3gl||[]).push([[14],{1088:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),s=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getSDKVersion=void 0;var a=i(r(1089));t.default=a.default,s(r(1089),t),s(r(1780),t),s(r(713),t),s(r(1091),t);var o=r(1092);Object.defineProperty(t,"getSDKVersion",{enumerable:!0,get:function(){return o.getSDKVersion}})},1089:function(e,t,r){"use strict";var n=r(2),s=r(97),i=r(40),a=r(41),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(1090),c=o(r(1090)),l=r(1777),d=r(1778),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(i(this,e),"undefined"===typeof window)throw new Error("Error initializing the sdk: window is undefined");var r=t.whitelistedDomains,n=void 0===r?null:r,s=t.debug,a=void 0!==s&&s;this.communicator=new c.default(n,a),this.eth=new d.Eth(this.communicator),this.txs=new l.TXs(this.communicator),this.bootstrap()}return a(e,[{key:"bootstrap",value:function(){var e=s(n.mark((function e(){var t,r;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEnvInfo();case 2:t=e.sent,r=t.txServiceUrl,this.txs.setTxServiceUrl(r);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getEnvInfo",value:function(){var e=s(n.mark((function e(){var t;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.communicator.send(u.METHODS.getEnvInfo,void 0);case 2:if((t=e.sent).success){e.next=5;break}throw new Error(t.error);case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSafeInfo",value:function(){var e=s(n.mark((function e(){var t;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.communicator.send(u.METHODS.getSafeInfo,void 0);case 2:if((t=e.sent).success){e.next=5;break}throw new Error(t.error);case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();t.default=h},1090:function(e,t,r){"use strict";var n=r(40),s=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||s(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0});var a=r(1091);t.default=function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n(this,e),this.allowedOrigins=null,this.callbacks=new Map,this.debugMode=!1,this.isValidMessage=function(e){var r=e.origin,n=e.data,s=!n,i=e.source===window.parent,a=("undefined"!==typeof n.version&&parseInt(n.version.split(".")[0]))>=1,o=!0;return Array.isArray(t.allowedOrigins)&&(o=void 0!==t.allowedOrigins.find((function(e){return e.test(r)}))),!s&&i&&a&&o},this.logIncomingMessage=function(e){console.info("Safe Apps SDK v1: A message was received from origin ".concat(e.origin,". "),e.data)},this.onParentMessage=function(e){t.isValidMessage(e)&&(t.debugMode&&t.logIncomingMessage(e),t.handleIncomingMessage(e.data))},this.handleIncomingMessage=function(e){var r=e.id,n=t.callbacks.get(r);n&&(n(e),t.callbacks.delete(r))},this.send=function(e,r){var n=a.MessageFormatter.makeRequest(e,r);if("undefined"===typeof window)throw new Error("Window doesn't exist");return window.parent.postMessage(n,"*"),new Promise((function(e){t.callbacks.set(n.id,(function(t){e(t)}))}))},this.allowedOrigins=r,this.debugMode=s,window.addEventListener("message",this.onParentMessage)},i(r(713),t)},1091:function(e,t,r){"use strict";var n=r(40);Object.defineProperty(t,"__esModule",{value:!0}),t.MessageFormatter=void 0;var s=r(1775),i=r(1092),a=function e(){n(this,e)};t.MessageFormatter=a,a.makeRequest=function(e,t){return{id:s.generateRequestId(),method:e,params:t,env:{sdkVersion:i.getSDKVersion()}}},a.makeResponse=function(e,t,r){return{id:e,success:!0,version:r,data:t}},a.makeErrorResponse=function(e,t,r){return{id:e,success:!1,error:t,version:r}}},1092:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getSDKVersion=void 0;var s=n(r(1776));t.getSDKVersion=function(){return s.default.version.slice(0,5)}},1775:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateRequestId=void 0;var n=function(e){return e.toString(16).padStart(2,"0")};t.generateRequestId=function(){return"undefined"!==typeof window?function(e){var t=new Uint8Array((e||40)/2);return window.crypto.getRandomValues(t),Array.from(t,n).join("")}(10):(new Date).getTime().toString(36)}},1776:function(e){e.exports=JSON.parse('{"name":"@gnosis.pm/safe-apps-sdk","version":"3.0.0","description":"SDK developed to integrate third-party apps with Safe-Multisig app.","main":"dist/src/index.js","typings":"dist/src/index.d.ts","_files":["dist/**/*","README.md"],"keywords":["Gnosis","sdk","apps"],"scripts":{"test":"jest","format-dist":"sed -i \'\' \'s/\\"files\\":/\\"_files\\":/\' dist/package.json","build":"yarn rimraf dist && tsc && yarn format-dist","format":"prettier --write \\"src/**/*.ts\\"","lint":"tslint -p tsconfig.json","prepublishOnly":"yarn build"},"author":"Gnosis (https://gnosis.io)","license":"MIT","dependencies":{},"devDependencies":{"@types/jest":"^26.0.23","@types/node":"^15.3.0","husky":"^6.0.0","lint-staged":"^11.0.0","prettier":"^2.2.1","rimraf":"^3.0.2"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"src/**/!(*test).ts":["yarn lint","prettier --write"]},"repository":{"type":"git","url":"git+https://github.com/gnosis/safe-apps-sdk.git"},"bugs":{"url":"https://github.com/gnosis/safe-apps-sdk/issues"},"homepage":"https://github.com/gnosis/safe-apps-sdk#readme"}')},1777:function(e,t,r){"use strict";var n=r(2),s=r(97),i=r(40),a=r(41);Object.defineProperty(t,"__esModule",{value:!0}),t.TXs=void 0;var o=r(713),u=function(){function e(t){i(this,e),this.txServiceUrl=null,this.communicator=t}return a(e,[{key:"getBySafeTxHash",value:function(){var e=s(n.mark((function e(t){var r,s,i,a;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.txServiceUrl){e.next=2;break}throw new Error("ENV information hasn't been synced yet or there was an error during the process");case 2:return r=new AbortController,s={method:"GET",signal:r.signal},setTimeout((function(){return r.abort()}),1e4),e.prev=5,e.next=8,fetch("".concat(this.txServiceUrl,"/transactions/").concat(t),s);case 8:if(200===(i=e.sent).status){e.next=11;break}throw new Error("Failed to get the transaction. Either safeTxHash is incorrect or transaction hasn't been indexed by the service yet");case 11:return e.next=13,i.json();case 13:return a=e.sent,e.abrupt("return",a);case 17:throw e.prev=17,e.t0=e.catch(5),e.t0;case 20:case"end":return e.stop()}}),e,this,[[5,17]])})));return function(t){return e.apply(this,arguments)}}()},{key:"send",value:function(){var e=s(n.mark((function e(t){var r,s,i,a;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.txs,s=t.params,r&&r.length){e.next=3;break}throw new Error("No transactions were passed");case 3:return i={txs:r,params:s},e.next=6,this.communicator.send(o.METHODS.sendTransactions,i);case 6:if((a=e.sent).success){e.next=9;break}throw new Error(a.error);case 9:return e.abrupt("return",a.data);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setTxServiceUrl",value:function(e){this.txServiceUrl=e}}]),e}();t.TXs=u},1778:function(e,t,r){"use strict";var n=r(2),s=r(97),i=r(40),a=r(41);Object.defineProperty(t,"__esModule",{value:!0}),t.Eth=void 0;var o=r(1779),u=r(713),c={defaultBlockParam:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"latest";return e},returnFullTxObjectParam:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e},blockNumberToHex:function(e){return Number.isInteger(e)?"0x".concat(e.toString(16)):e}},l=function(){function e(t){i(this,e),this.communicator=t,this.call=this.buildRequest({call:o.RPC_CALLS.eth_call,formatters:[null,c.defaultBlockParam]}),this.getBalance=this.buildRequest({call:o.RPC_CALLS.eth_getBalance,formatters:[null,c.defaultBlockParam]}),this.getCode=this.buildRequest({call:o.RPC_CALLS.eth_getCode,formatters:[null,c.defaultBlockParam]}),this.getStorageAt=this.buildRequest({call:o.RPC_CALLS.eth_getStorageAt,formatters:[null,c.blockNumberToHex,c.defaultBlockParam]}),this.getPastLogs=this.buildRequest({call:o.RPC_CALLS.eth_getLogs}),this.getBlockByHash=this.buildRequest({call:o.RPC_CALLS.eth_getBlockByHash,formatters:[null,c.returnFullTxObjectParam]}),this.getBlockByNumber=this.buildRequest({call:o.RPC_CALLS.eth_getBlockByNumber,formatters:[c.blockNumberToHex,c.returnFullTxObjectParam]}),this.getTransactionByHash=this.buildRequest({call:o.RPC_CALLS.eth_getTransactionByHash}),this.getTransactionReceipt=this.buildRequest({call:o.RPC_CALLS.eth_getTransactionReceipt})}return a(e,[{key:"buildRequest",value:function(e){var t=this,r=e.call,i=e.formatters;return function(){var e=s(n.mark((function e(s){var a,o;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i&&Array.isArray(s)&&i.forEach((function(e,t){e&&(s[t]=e(s[t]))})),a={call:r,params:s},e.next=4,t.communicator.send(u.METHODS.rpcCall,a);case 4:if((o=e.sent).success){e.next=7;break}throw new Error(o.error);case 7:return e.abrupt("return",o.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]),e}();t.Eth=l},1779:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RPC_CALLS=void 0,t.RPC_CALLS={eth_call:"eth_call",eth_getLogs:"eth_getLogs",eth_getBalance:"eth_getBalance",eth_getCode:"eth_getCode",eth_getBlockByHash:"eth_getBlockByHash",eth_getBlockByNumber:"eth_getBlockByNumber",eth_getStorageAt:"eth_getStorageAt",eth_getTransactionByHash:"eth_getTransactionByHash",eth_getTransactionReceipt:"eth_getTransactionReceipt"}},1780:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsChangeMethods=t.TransferMethods=t.Operation=void 0;r(713);!function(e){e[e.CALL=0]="CALL",e[e.DELEGATE_CALL=1]="DELEGATE_CALL",e[e.CREATE=2]="CREATE"}(t.Operation||(t.Operation={})),function(e){e.TRANSFER="transfer",e.TRANSFER_FROM="transferFrom",e.SAFE_TRANSFER_FROM="safeTransferFrom"}(t.TransferMethods||(t.TransferMethods={})),function(e){e.SETUP="setup",e.SET_FALLBACK_HANDLER="setFallbackHandler",e.ADD_OWNER_WITH_THRESHOLD="addOwnerWithThreshold",e.REMOVE_OWNER="removeOwner",e.REMOVE_OWNER_WITH_THRESHOLD="removeOwnerWithThreshold",e.SWAP_OWNER="swapOwner",e.CHANGE_THRESHOLD="changeThreshold",e.CHANGE_MASTER_COPY="changeMasterCopy",e.ENABLE_MODULE="enableModule",e.DISABLE_MODULE="disableModule",e.EXEC_TRANSACTION_FROM_MODULE="execTransactionFromModule",e.APPROVE_HASH="approveHash",e.EXEC_TRANSACTION="execTransaction"}(t.SettingsChangeMethods||(t.SettingsChangeMethods={}))},713:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.METHODS=void 0,t.METHODS={getEnvInfo:"getEnvInfo",sendTransactions:"sendTransactions",rpcCall:"rpcCall",getSafeInfo:"getSafeInfo"}}}]);
//# sourceMappingURL=14.99062170.chunk.js.map