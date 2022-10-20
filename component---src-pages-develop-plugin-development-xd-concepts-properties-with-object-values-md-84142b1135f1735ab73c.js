"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[8301],{61500:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return a},default:function(){return c}});var o=n(87462),r=n(63366),l=(n(15007),n(64983)),p=n(91515),i=["components"],a={},s={_frontmatter:a},u=p.Z;function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.mdx)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"properties-with-object-values"},"Properties with object values"),(0,l.mdx)("p",null,"Some scenegraph properties have values that are not simple primitive types (e.g. numbers), but rather are objects with sub-properties of\ntheir own. In order to update the document with changes, you must invoke the top-level setter on the ",(0,l.mdx)("em",{parentName:"p"},"scenenode object")," itself ","–",'\nchanging properties on the object value "inline" will not result in an update.'),(0,l.mdx)("p",null,"For example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"// Right:\nlet color = node.fill;\ncolor.r = 0x80;\nnode.fill = color;  // update fill in the scenegraph by kicking the node's setter\n\n// Wrong - document will not update:\nnode.color.r = 0x80;\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-xd-concepts-properties-with-object-values-md-84142b1135f1735ab73c.js.map