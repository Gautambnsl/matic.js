(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{234:function(e,o,t){"use strict";t.r(o);var n={components:{Layout:t(172).a}},r=t(14),component=Object(r.a)(n,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("Layout",{attrs:{title:"undefined",description:"undefined",keywords:"undefined",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/docs/pos/ERC721/depositERC721ForUser.md"}},[t("h1",{attrs:{id:"depositerc721"}},[e._v("Deposit ERC721")]),e._v(" "),t("pre",[t("code",{staticClass:"js language-js"},[e._v("await maticPOSClient.depositERC721ForUser(\n  rootToken, // RootToken address\n  user, // User address (in most cases, this will be sender's address),\n  tokenId, // tokenId for deposit\n  options // transaction fields, can be skipped if default options are set\n)\n")])]),e._v(" "),t("p",[e._v("Deposit tokens into Matic chain using POS Portal.\nRemember to call "),t("code",[e._v("approveERC721ForDeposit")]),e._v(" before this")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("rootToken")]),e._v(" must be valid ERC721 token address")]),e._v(" "),t("li",[t("code",[e._v("tokenId")]),e._v(" tokenId for approval (string, not in Number)")]),e._v(" "),t("li",[t("code",[e._v("options")]),e._v(" transaction fields, can be skipped if default options are set")]),e._v(" "),t("li",[t("code",[e._v("from")]),e._v(" must be boolean value. For Byte code of transaction, use "),t("code",[e._v("from: true")])]),e._v(" "),t("li",[t("code",[e._v("encodeAbi")]),e._v(" must be boolean value. For Byte code of transaction, use "),t("code",[e._v("encodeAbi: true")])])]),e._v(" "),t("p",[e._v("This returns "),t("code",[e._v("Promise")]),e._v(" object, which will be fulfilled when transaction gets confirmed (when receipt is generated).")]),e._v(" "),t("hr")])}),[],!1,null,null,null);o.default=component.exports}}]);