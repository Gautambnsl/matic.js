(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{226:function(e,t,n){"use strict";n.r(t);var o={components:{Layout:n(172).a}},r=n(14),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{attrs:{title:"undefined",description:"undefined",keywords:"undefined",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/docs/pos/ERC1155/exitERC1155.md"}},[n("h1",{attrs:{id:"exiterc1155"}},[e._v("Exit ERC1155")]),e._v(" "),n("pre",[n("code",{staticClass:"js language-js"},[e._v("await maticPOSClient.exitSingleERC1155(\n  txHash, // Transaction hash generated from the 'burnSingleERC1155' method\n  options // transaction fields, can be skipped if default options are set\n)\n")])]),e._v(" "),n("p",[e._v("Exit funds from the POS Portal using the Transaction hash generated from the 'burnERC721' method\nCan be called after checkpoint has been submitted for the block containing burn tx.")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("txHash")]),e._v(" Transaction hash generated from the 'burnERC1155' method")]),e._v(" "),n("li",[n("code",[e._v("options")]),e._v(" transaction fields, can be skipped if default options are set")]),e._v(" "),n("li",[n("code",[e._v("from")]),e._v(" must be boolean value. For Byte code of transaction, use "),n("code",[e._v("from: true")])]),e._v(" "),n("li",[n("code",[e._v("encodeAbi")]),e._v(" must be boolean value. For Byte code of transaction, use "),n("code",[e._v("encodeAbi: true")])])]),e._v(" "),n("p",[e._v("This returns "),n("code",[e._v("Promise")]),e._v(" object, which will be fulfilled when transaction gets confirmed (when receipt is generated).")]),e._v(" "),n("hr")])}),[],!1,null,null,null);t.default=component.exports}}]);