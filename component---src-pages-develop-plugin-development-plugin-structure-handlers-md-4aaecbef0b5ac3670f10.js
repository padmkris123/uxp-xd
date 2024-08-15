"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[6417],{69505:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return i},default:function(){return s}});var t=a(87462),o=a(45987),d=(a(15007),a(64983)),l=a(91515);const m=["components"],i={},p={_frontmatter:i},r=l.Z;function s(e){let{components:n}=e,a=(0,o.Z)(e,m);return(0,d.mdx)(r,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"the-mainjs-file"},"The ",(0,d.mdx)("inlineCode",{parentName:"h1"},"main.js")," file"),(0,d.mdx)("p",null,"Every ",(0,d.mdx)("em",{parentName:"p"},"UI entry point")," you declare in ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"},(0,d.mdx)("inlineCode",{parentName:"a"},"manifest.json"))," must be fulfilled by a definition exported from your ",(0,d.mdx)("inlineCode",{parentName:"p"},"main.js")," module."),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Exporting")," happens by setting the value of ",(0,d.mdx)("inlineCode",{parentName:"p"},"module.exports"),":"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  commands: {\n    // definitions for each commandId in manifest go here\n  },\n  panels: {\n    // definitions for each panelId in manifest go here\n  },\n};\n")),(0,d.mdx)("p",null,"The details of what you need to export are different depending on the type of UI entry point. One plugin may use multiple types of UI entry points."),(0,d.mdx)("a",{name:"command"}),(0,d.mdx)("h2",{id:"direct-action-commands-commandid"},"Direct-action commands (",(0,d.mdx)("inlineCode",{parentName:"h2"},"commandId"),")"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"exports.commands")," is a map linking each ",(0,d.mdx)("inlineCode",{parentName:"p"},"commandId")," from the manifest to a JS ",(0,d.mdx)("em",{parentName:"p"},"handler function")," in your code."),(0,d.mdx)("p",null,"Manifest:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'"uiEntryPoints": [\n    {\n        "type": "menu",\n        "label": "Hello World Command",\n        "commandId": "helloCommand"\n    }\n]\n')),(0,d.mdx)("p",null,"main.js:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'function sayHello(selection, documentRoot) {\n  console.log("Hello, world!");\n}\n\nmodule.exports = {\n  commands: {\n    helloCommand: sayHello,\n  },\n};\n')),(0,d.mdx)("p",null,"Notice how the exported map object makes the connection from manifest to code:"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"The ",(0,d.mdx)("inlineCode",{parentName:"li"},"commandId")," from the manifest, ",(0,d.mdx)("inlineCode",{parentName:"li"},"helloCommand"),", is the ",(0,d.mdx)("em",{parentName:"li"},"key")),(0,d.mdx)("li",{parentName:"ol"},"The handler function, ",(0,d.mdx)("inlineCode",{parentName:"li"},"sayHello"),", is the ",(0,d.mdx)("em",{parentName:"li"},"value")," that the key maps to")),(0,d.mdx)("p",null,"The handler is called each time the command is invoked, and XD passes it ",(0,d.mdx)("a",{parentName:"p",href:"#contextual-arguments"},"two arguments providing useful context"),". Your handler function can ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/ui/dialogs/"},"show UI in a dialog box")," and/or ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/xd-concepts/lifecycle/#edit-operations"},"edit the XD document"),"."),(0,d.mdx)("a",{name:"panel"}),(0,d.mdx)("h2",{id:"panel-ui-panelid"},"Panel UI (",(0,d.mdx)("inlineCode",{parentName:"h2"},"panelId"),")"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"exports.panels")," is a map linking each ",(0,d.mdx)("inlineCode",{parentName:"p"},"panelId")," from the manifest to a JS ",(0,d.mdx)("em",{parentName:"p"},"panel object")," in your code."),(0,d.mdx)("p",null,"Manifest:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'"uiEntryPoints": [\n    {\n        "type": "panel",\n        "label": "Hello World Panel",\n        "panelId": "helloPanel"\n    }\n]\n')),(0,d.mdx)("p",null,"main.js:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'function show(event) {\n  let dom = document.createElement("panel");\n  dom.innerHTML = `\n        <form method="dialog" id="main">\n        </form>\n    `;\n  event.node.appendChild(dom);\n}\n\nfunction hide(event) {\n  event.node.firstChild.remove();\n}\n\nfunction update(selection, documentRoot) {\n  // ...update panel DOM based on selection...\n}\n\nmodule.exports = {\n  panels: {\n    helloPanel: {\n      show,\n      hide,\n      update,\n    },\n  },\n};\n')),(0,d.mdx)("p",null,"Notice how the exported map object makes the connection from manifest to code:"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"The ",(0,d.mdx)("inlineCode",{parentName:"li"},"panelId")," from the manifest, ",(0,d.mdx)("inlineCode",{parentName:"li"},"helloPanel"),", is the ",(0,d.mdx)("em",{parentName:"li"},"key")),(0,d.mdx)("li",{parentName:"ol"},"An object with three methods (",(0,d.mdx)("inlineCode",{parentName:"li"},"show()"),", ",(0,d.mdx)("inlineCode",{parentName:"li"},"hide()"),", and ",(0,d.mdx)("inlineCode",{parentName:"li"},"update()"),") is the ",(0,d.mdx)("em",{parentName:"li"},"value")," that the key maps to")),(0,d.mdx)("p",null,"The panel object implements this interface:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/ui/panels/show/"},(0,d.mdx)("inlineCode",{parentName:"a"},"show()")," (required)"),": called when your panel is made visible to the user. To populate the panel with UI elements, add DOM nodes to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"event.node")," root node that is provided.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/ui/panels/hide/"},(0,d.mdx)("inlineCode",{parentName:"a"},"hide()")," (optional)"),": called when your panel is hidden/closed.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/ui/panels/update/"},(0,d.mdx)("inlineCode",{parentName:"a"},"update")," (optional)"),": called whenever panel UI content should be updated. This includes when the panel is is shown, when the selection changes, or when the selected objects are mutated (move, resize, fill color change, etc.). This function should execute quickly since it's triggered for essentially every user action in XD while your panel is open. XD passes ",(0,d.mdx)("inlineCode",{parentName:"p"},"update()")," ",(0,d.mdx)("a",{parentName:"p",href:"#contextual-arguments"},"two arguments providing useful context"),"."))),(0,d.mdx)("p",null,"Typically, you'll attach UI event listeners to the DOM nodes in your panel, and these event listeners may ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/xd-concepts/lifecycle/#edit-operations"},"edit the XD document using an ",(0,d.mdx)("inlineCode",{parentName:"a"},"application.editDocument()")," operation"),"."),(0,d.mdx)("h2",{id:"contextual-arguments"},"Contextual arguments"),(0,d.mdx)("p",null,"The handler function for commands (",(0,d.mdx)("inlineCode",{parentName:"p"},"sayHello()")," above) and the ",(0,d.mdx)("inlineCode",{parentName:"p"},"update()")," function for panels are both called with two arguments that provide useful context about XD's current state:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"The current ",(0,d.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/reference/selection/"},"selection state")),(0,d.mdx)("li",{parentName:"ul"},"The ",(0,d.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/reference/scenegraph/#rootnode"},"root node of the document's scenegraph"))),(0,d.mdx)("p",null,"The argument names ",(0,d.mdx)("inlineCode",{parentName:"p"},"selection")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"documentRoot")," seen in the code samples above are arbitrary, but you'll see this naming convention used throughout our documentation."),(0,d.mdx)("h2",{id:"accessing-app-apis"},"Accessing app APIs"),(0,d.mdx)("p",null,"XD calls ",(0,d.mdx)("em",{parentName:"p"},"into")," your plugin code via the above exports. To call into XD's APIs from your plugin code, see ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/xd-concepts/apis/"},"Accessing APIs"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-plugin-structure-handlers-md-4aaecbef0b5ac3670f10.js.map