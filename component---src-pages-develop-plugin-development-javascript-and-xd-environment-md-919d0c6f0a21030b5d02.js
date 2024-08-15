"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[1386],{8004:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return m}});var t=a(87462),o=a(45987),r=(a(15007),a(64983)),p=a(91515);const s=["components"],l={},d={_frontmatter:l},i=p.Z;function m(e){let{components:n}=e,a=(0,o.Z)(e,s);return(0,r.mdx)(i,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"the-api-environment"},"The API environment"),(0,r.mdx)("p",null,"If you're used to writing JavaScript for web pages or Node.js servers, there are some things to know about the JavaScript environment when creating XD plugins."),(0,r.mdx)("h2",{id:"not-a-browser-and-not-nodejs"},"Not a browser and not Node.js"),(0,r.mdx)("p",null,"While it may feel like it, the XD plugin API environment is not a browser, nor is it Node.js. This means that you shouldn't make assumptions about what APIs are available based on your experience in other JavaScript environments."),(0,r.mdx)("p",null,"However, we do follow standards for API surfaces where appropriate. For example, you'll find our implementation of ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/uxp/class/XMLHttpRequest/"},(0,r.mdx)("inlineCode",{parentName:"a"},"XMLHttpRequest"))," to work as you would expect."),(0,r.mdx)("p",null,"In some cases, we follow standards, but only support a ",(0,r.mdx)("em",{parentName:"p"},"subset")," of features you might expect in a browser. As an example, see our document on ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/uxp/namespace/css/"},"CSS support"),"."),(0,r.mdx)("h2",{id:"accessing-global-apis"},"Accessing global APIs"),(0,r.mdx)("p",null,"Supported APIs that you would expect as window globals in other enviroments are also available as globals in XD. Examples include ",(0,r.mdx)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"fetch"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"WebSocket"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"document"),", and more."),(0,r.mdx)("p",null,"Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"let req = new XMLHttpRequest();\n")),(0,r.mdx)("p",null,"APIs that are specific to XD are reachable via ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/javascript-and-xd/javascript-support/#can-i-use-require"},"the ",(0,r.mdx)("inlineCode",{parentName:"a"},"require")," method"),". Examples include ",(0,r.mdx)("inlineCode",{parentName:"p"},"scenegraph"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"application"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"uxp"),", and more."),(0,r.mdx)("p",null,"Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'const { Text, Color } = require("scenegraph");\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-javascript-and-xd-environment-md-919d0c6f0a21030b5d02.js.map