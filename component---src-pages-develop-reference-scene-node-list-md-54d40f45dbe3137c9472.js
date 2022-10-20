"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[4197],{75218:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return x}});var a=t(87462),d=t(63366),l=(t(15007),t(64983)),r=t(91515),m=["components"],i={},p={_frontmatter:i},o=r.Z;function x(e){var n=e.components,t=(0,d.Z)(e,m);return(0,l.mdx)(o,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"scenenodelist"},"SceneNodeList"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": class"),(0,l.mdx)("p",null,"Represents the children of a scenenode. Typically accessed via the ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/SceneNode/#children"},"SceneNode.children")," property."),(0,l.mdx)("p",null,"This is ",(0,l.mdx)("em",{parentName:"p"},"not an Array"),", so you must use ",(0,l.mdx)("a",{parentName:"p",href:"#at"},".at(i)")," instead of ",(0,l.mdx)("inlineCode",{parentName:"p"},"[i]")," to access children by index. It has a\nnumber of Array-like methods such as ",(0,l.mdx)("a",{parentName:"p",href:"#foreach"},"forEach")," for convenience, however. For best performance, iterate\nthe list using these methods rather than repeatedly calling ",(0,l.mdx)("inlineCode",{parentName:"p"},"at()"),"."),(0,l.mdx)("p",null,"Items in this list are ordered from lowest z order to highest."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'let node = ...;\nconsole.log("Node has " + node.children.length + " children");\nconsole.log("First child: " + node.children.at(0));  // do not use `[0]` - it will not work!\nnode.children.forEach(function (childNode, i) {\n    ...\n});\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"See"),": ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/SceneNode/#children"},"SceneNode.children")),(0,l.mdx)("h2",{id:"length"},"length"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"length"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"number")),(0,l.mdx)("p",null,"Number of children in the list."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},"SceneNodeList"),"\n",(0,l.mdx)("strong",{parentName:"p"},"Read only"),": true"),(0,l.mdx)("h2",{id:"foreach"},"forEach()"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"forEach"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"callback"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"thisArg"),")"),(0,l.mdx)("p",null,"Iterate all children in the list."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"function(SceneNode, number)")),(0,l.mdx)("td",{parentName:"tr",align:null},"Callback, passed each child node and its index.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thisArg"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"?Object")),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional value for ",(0,l.mdx)("inlineCode",{parentName:"td"},"this")," when executing the callback.")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},"SceneNodeList")),(0,l.mdx)("h2",{id:"foreachright"},"forEachRight()"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"forEachRight"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"callback"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"thisArg"),")"),(0,l.mdx)("p",null,"Iterate all children in the list, in reverse order (highest z order to lowest)."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"function(SceneNode, number)")),(0,l.mdx)("td",{parentName:"tr",align:null},"Callback, passed each child node and its index.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thisArg"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"?Object")),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional value for ",(0,l.mdx)("inlineCode",{parentName:"td"},"this")," when executing the callback.")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},"SceneNodeList")),(0,l.mdx)("h2",{id:"filter"},"filter()"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"filter"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"callback"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"thisArg"),"): ",(0,l.mdx)("inlineCode",{parentName:"p"},"Array.<"),(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/SceneNode"},"SceneNode"),(0,l.mdx)("inlineCode",{parentName:"p"},">")),(0,l.mdx)("p",null,"Iterates all children and returns an array of just the children that passed the filter function's test."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"function(SceneNode, number): boolean")),(0,l.mdx)("td",{parentName:"tr",align:null},"Filter function, passed each child node and its index.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thisArg"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"?Object")),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional value for ",(0,l.mdx)("inlineCode",{parentName:"td"},"this")," when executing the callback.")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},"SceneNodeList")),(0,l.mdx)("h2",{id:"map"},"map()"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"map"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"callback"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"thisArg"),"): ",(0,l.mdx)("inlineCode",{parentName:"p"},"Array.<*>")),(0,l.mdx)("p",null,"Iterates all children and returns an array of the map function's result value for each child node."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"function(SceneNode, number): *")),(0,l.mdx)("td",{parentName:"tr",align:null},"Map function, passed each child node and its index.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thisArg"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"?Object")),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional value for ",(0,l.mdx)("inlineCode",{parentName:"td"},"this")," when executing the callback.")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},"SceneNodeList")),(0,l.mdx)("h2",{id:"some"},"some()"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"some"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"callback"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"thisArg"),"): ",(0,l.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,l.mdx)("p",null,"Iterates children until the test returns true for at least one child.  Returns true if the test function returned true for at least one child."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"function(SceneNode, number): boolean")),(0,l.mdx)("td",{parentName:"tr",align:null},"Test function, passed each child node and its index.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thisArg"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"?Object")),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional value for ",(0,l.mdx)("inlineCode",{parentName:"td"},"this")," when executing the callback.")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},"SceneNodeList")),(0,l.mdx)("h2",{id:"at"},"at()"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"at"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"index"),"): ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/SceneNode"},"SceneNode")),(0,l.mdx)("p",null,"Returns the child node at the specified index in the list, or null if index is out of bounds."),(0,l.mdx)("p",null,"Note: calling ",(0,l.mdx)("inlineCode",{parentName:"p"},"at()")," repeatedly (e.g. in a ",(0,l.mdx)("inlineCode",{parentName:"p"},"for")," loop) is not as fast as using SceneNodeList's iteration methods such as ",(0,l.mdx)("inlineCode",{parentName:"p"},"forEach()"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"some()"),", or ",(0,l.mdx)("inlineCode",{parentName:"p"},"map()"),"."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"index"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"number"))))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},"SceneNodeList")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-scene-node-list-md-54d40f45dbe3137c9472.js.map