(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[707],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(f,o(o({ref:t},s),{},{components:n})):i.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4832:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},c="Initialize POS client",p={unversionedId:"pos/initialize",id:"pos/initialize",isDocsHomePage:!1,title:"Initialize POS client",description:"Node Syntax",source:"@site/docs/pos/initialize.md",sourceDirName:"pos",slug:"/pos/initialize",permalink:"/matic.js/docs/pos/initialize",editUrl:"https://github.com/maticnetwork/matic.js/edit/master/docs/docs/pos/initialize.md",version:"current",lastUpdatedBy:"Aman",lastUpdatedAt:1626705737,formattedLastUpdatedAt:"7/19/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Exit Metadata Mintable Burnt Tokens",permalink:"/matic.js/docs/plasma/WithdrawManager/startExitForMetadataMintableBurntToken"},next:{title:"Approve ERC20 Deposit",permalink:"/matic.js/docs/pos/ERC20/approveERC20ForDeposit"}},s=[{value:"Options",id:"options",children:[]}],m={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"initialize-pos-client"},"Initialize POS client"),(0,a.kt)("h4",{id:"node-syntax"},"Node Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Matic = require('maticjs')\n\nconst maticPoSClient = new Matic(options).MaticPOSClient\nmaticPoSClient.initialize()\n")),(0,a.kt)("h4",{id:"es6-syntax"},"Es6 Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Matic from 'maticjs'\n\nconst maticPoSClient = new Matic(options).MaticPOSClient\nmaticPoSClient.initialize()\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"Options can be provided in constructor in order to customize the client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import Matic from \'maticjs\';\n\nconst options = {\n    network: "testnet",\n    version: "mumbai",\n    maticProvider: window.web3,\n    parentProvider: ethereumprovider,\n    parentDefaultOptions: { from: account },\n    maticDefaultOptions: { from: account },\n}\nconst maticPoSClient = new Matic(options).MaticPOSClient\n')),(0,a.kt)("p",null,"Available options are :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"network")," can be ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version")," can be ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maticProvider")," can be ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Web3.providers")," instance. This provider must connect to Matic chain. Value can be anyone of following:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"network.Matic.RPC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"new Web3.providers.HttpProvider(network.Matic.RPC)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/WalletConnect/walletconnect-monorepo#for-web3-provider-web3js"},"WalletConnect Provider instance")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parentProvider")," can be ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Web3.providers")," instance. This provider must connect to Ethereum chain (testnet or mainchain). Value can be anyone of following:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"network.Main.RPC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"new Web3.providers.HttpProvider(network.Main.RPC)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/WalletConnect/walletconnect-monorepo#for-web3-provider-web3js"},"WalletConnect Provider instance")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parentDefaultOptions")," is simple Javascript ",(0,a.kt)("inlineCode",{parentName:"li"},"object")," with following options",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"from")," must be valid account address(required)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maticDefaultOptions")," is simple Javascript ",(0,a.kt)("inlineCode",{parentName:"li"},"object")," with following options",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"from")," must be valid account address(required)")))),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);