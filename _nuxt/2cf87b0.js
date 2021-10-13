(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{227:function(e,n,t){"use strict";t.r(n);var o={components:{Layout:t(172).a}},r=t(14),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Layout",{attrs:{title:"undefined",description:"undefined",keywords:"undefined",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/docs/pos/ERC1155/transferERC1155.md"}},[t("h1",{attrs:{id:"transfererc1155"}},[e._v("Transfer ERC1155")]),e._v(" "),t("pre",[t("code",{staticClass:"js language-js"},[e._v("matic.transferERC1155Tokens(token, to, tokenIds, values, options)\n")])]),e._v(" "),t("p",[e._v("Transfer gives the "),t("code",[e._v("values")]),e._v(" of "),t("code",[e._v("token")]),e._v(" with "),t("code",[e._v("tokenIds")]),e._v(" to "),t("code",[e._v("to")]),e._v(" user.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("token")]),e._v(" must be valid ERC1155 token address")]),e._v(" "),t("li",[t("code",[e._v("to")]),e._v(" must be valid account address")]),e._v(" "),t("li",[t("code",[e._v("tokenIds")]),e._v(" must be an array or single value of BN or String")]),e._v(" "),t("li",[t("code",[e._v("values")]),e._v(" must be an array or single value of BN or String")]),e._v(" "),t("li",[t("code",[e._v("options")]),e._v(" see "),t("a",{attrs:{href:"#approveERC20TokensForDeposit"}},[e._v("more infomation here")])]),e._v(" "),t("li",[t("code",[e._v("from")]),e._v(" must be valid account address")]),e._v(" "),t("li",[t("code",[e._v("parent")]),e._v(" must be boolean value. For token transfer on Main chain, use "),t("code",[e._v("parent: true")])]),e._v(" "),t("li",[t("code",[e._v("encodeAbi")]),e._v(" must be boolean value. For Byte code of transaction, use "),t("code",[e._v("encodeAbi: true")])])]),e._v(" "),t("p",[e._v("This returns "),t("code",[e._v("Promise")]),e._v(" object, which will be fulfilled when transaction gets confirmed (when receipt is generated).")]),e._v(" "),t("h4",{attrs:{id:"examplecase"}},[e._v("Example Case")]),e._v(" "),t("p",[e._v("Lets consider a scenario where we want to transfer 2 tokens of id 123, 5 tokens of id 246 and 3 tokens of id 369. The "),t("code",[e._v("tokensIds")]),e._v(" and "),t("code",[e._v("values")]),e._v(" parameters that should be passed are "),t("code",[e._v("[123, 246, 369]")]),e._v(" and "),t("code",[e._v("[2, 5, 3]")]),e._v(" respectively. The array lengths of both parameters must be equal.")]),e._v(" "),t("h3",{attrs:{id:"singletokentransfer"}},[e._v("Single token transfer")]),e._v(" "),t("pre",[t("code",{staticClass:"js language-js"},[e._v("const user = <your-address> or <any-account-address>\nconst to = <destinationAddress>\n\n// For single token transfer\nmatic.transferERC1155Tokens('0x718Ca123...', to, 123, 2, {\n  from: user,\n\n  // For token transfer on Main network\n  // parent: true\n})\n")])]),e._v(" "),t("h3",{attrs:{id:"batchtransfer"}},[e._v("Batch transfer")]),e._v(" "),t("pre",[t("code",{staticClass:"js language-js"},[e._v("const user = <your-address> or <any-account-address>\nconst to = <destinationAddress>\n\n// For batch token transfers\nmatic.transferERC1155Tokens('0x718Ca123...', to, [123, 246, 369], [2, 5, 3], {\n  from: user,\n\n  // For token transfer on Main network\n  // parent: true\n})\n")])]),e._v(" "),t("hr")])}),[],!1,null,null,null);n.default=component.exports}}]);