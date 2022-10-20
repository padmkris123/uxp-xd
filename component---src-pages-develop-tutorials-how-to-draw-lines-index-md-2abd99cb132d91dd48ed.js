"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[849],{88802:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return r},default:function(){return p}});var a=t(87462),i=t(63366),l=(t(15007),t(64983)),o=t(91515),d=["components"],r={},m={_frontmatter:r},s=o.Z;function p(e){var n=e.components,t=(0,i.Z)(e,d);return(0,l.mdx)(s,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"how-to-draw-lines"},"How to draw lines"),(0,l.mdx)("p",null,"This sample demonstrates how to create a plugin that adds colored lines to the user's document."),(0,l.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Basic knowledge of HTML, CSS, and JavaScript"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/tutorials/quick-start/"},"Quick Start Tutorial")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/tutorials/debugging/"},"Debugging Tutorial"))),(0,l.mdx)("h2",{id:"development-steps"},"Development Steps"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},(0,l.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-draw-lines"},"on GitHub"),".")),(0,l.mdx)("h3",{id:"1-prepare-your-plugin-scaffold"},"1. Prepare your plugin scaffold"),(0,l.mdx)("p",null,"First, edit the manifest file for the plugin you created in our ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/tutorials/quick-start/"},"Quick Start Tutorial"),"."),(0,l.mdx)("p",null,"Replace the ",(0,l.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints")," field of the manifest with the following:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'"uiEntryPoints": [\n    {\n        "type": "menu",\n        "label": "Create lines",\n        "commandId": "createLinesCommand"\n    }\n]\n')),(0,l.mdx)("p",null,"If you're curious about what each entry means, ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"},"see the manifest documentation"),", where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager."),(0,l.mdx)("p",null,"Then, update your ",(0,l.mdx)("inlineCode",{parentName:"p"},"main.js")," file, mapping the manifest's ",(0,l.mdx)("inlineCode",{parentName:"p"},"commandId")," to a handler function."),(0,l.mdx)("p",null,"Replace the content of your ",(0,l.mdx)("inlineCode",{parentName:"p"},"main.js")," file with the following code:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"function createLinesCommand(selection) {\n  // The body of this function is added later\n}\n\nmodule.exports = {\n  commands: {\n    createLinesCommand,\n  },\n};\n")),(0,l.mdx)("p",null,"The remaining steps in this tutorial describe additional edits to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"main.js")," file."),(0,l.mdx)("h3",{id:"2-require-in-xd-api-dependencies"},"2. Require in XD API dependencies"),(0,l.mdx)("p",null,"For this tutorial, we just need access to two XD scenegraph classes and one XD module."),(0,l.mdx)("p",null,"Add the following lines to the top of your ",(0,l.mdx)("inlineCode",{parentName:"p"},"main.js")," file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'// Add this to the top of your main.js file\nconst { Line, Color } = require("scenegraph");\nconst commands = require("commands");\n')),(0,l.mdx)("p",null,"Now the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Line")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"Color")," classes and ",(0,l.mdx)("inlineCode",{parentName:"p"},"commands")," module are required in and ready to be used."),(0,l.mdx)("h3",{id:"3-create-a-helper-function"},"3. Create a helper function"),(0,l.mdx)("p",null,"Our plugin is going to assigning random colors to the lines we create!"),(0,l.mdx)("p",null,"Add the lines of code below to your file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'function randomColor() {\n  const hexValues = ["00", "33", "66", "99", "CC", "FF"];\n  const color =\n    "#" +\n    Array.from(\n      { length: 3 },\n      (_) => hexValues[Math.floor(Math.random() * hexValues.length)]\n    ).join("");\n  return color;\n}\n')),(0,l.mdx)("p",null,'This function returns a web-friendly color hex value (e.g., `"#FFFFFF"). This is just straight-up JavaScript; there\'s nothing specific to XD plugin APIs to cover here.'),(0,l.mdx)("h3",{id:"4-create-line-data"},"4. Create line data"),(0,l.mdx)("p",null,"In this step, we're going to add a little more plain-old JavaScript. This time we'll add a data structure that will set us up to draw lines with the XD plugin API in the next step."),(0,l.mdx)("p",null,"Add this code to your file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"const lineData = [\n  { startX: 100, startY: 110, endX: 210, endY: 233 },\n  { startX: 210, startY: 233, endX: 320, endY: 156 },\n  { startX: 320, startY: 156, endX: 400, endY: 300 },\n  { startX: 400, startY: 300, endX: 500, endY: 120 },\n];\n")),(0,l.mdx)("p",null,"A couple of things to note:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"In this example, the each line's ",(0,l.mdx)("inlineCode",{parentName:"li"},"startX")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"startY")," matches the former line's ",(0,l.mdx)("inlineCode",{parentName:"li"},"endX")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"endY"),". This ensures lines are connected to each other. But they don't ",(0,l.mdx)("em",{parentName:"li"},"have")," to connect; feel free to modifiy the data as you wish!"),(0,l.mdx)("li",{parentName:"ul"},"The data structure here is important to note:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"lineData")," is an array. This gives us a way to store coordinates for multiple lines. We'll loop over this array in the next step."),(0,l.mdx)("li",{parentName:"ul"},"The array contains multiple objects that will be passed, one at a time, to the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Line")," API."),(0,l.mdx)("li",{parentName:"ul"},"Since we're drawing lines, each object has a ",(0,l.mdx)("em",{parentName:"li"},"start")," and ",(0,l.mdx)("em",{parentName:"li"},"end")," coordinates for X and Y.")))),(0,l.mdx)("h3",{id:"5-create-the-main-function"},"5. Create the main function"),(0,l.mdx)("p",null,"In this step, we'll build out the main function, ",(0,l.mdx)("inlineCode",{parentName:"p"},"createLinesCommand"),", that we added in the first step. Each of the numbered comments are explained below the code:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"function createLinesCommand(selection) {\n  // [1]\n\n  let lines = []; // [2]\n\n  lineData.forEach((data) => {\n    // [3]\n    const line = new Line(); // [4.i]\n\n    line.setStartEnd(\n      // [4.ii]\n      data.startX,\n      data.startY,\n      data.endX,\n      data.endY\n    );\n\n    line.strokeEnabled = true; // [4.iii]\n    line.stroke = new Color(randomColor()); // [4.iv]\n    line.strokeWidth = 3; // [4.v]\n\n    lines.push(line); // [4.vi]\n\n    selection.editContext.addChild(line); // [4.vii]\n  });\n\n  selection.items = lines; // [5]\n  commands.group(); // [6]\n}\n")),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"This function only needs the first ",(0,l.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/plugin-development/plugin-structure/handlers/#contextual-arguments"},"contextual argument"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"selection"),", which gives access to the selection object inside XD."),(0,l.mdx)("li",{parentName:"ol"},"Create an empty array to contain all the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Line")," objects we'll create. This array will be used in a later step."),(0,l.mdx)("li",{parentName:"ol"},"Loop over the ",(0,l.mdx)("inlineCode",{parentName:"li"},"lineData")," array, getting an individual ",(0,l.mdx)("inlineCode",{parentName:"li"},"data")," object each time through the loop."),(0,l.mdx)("li",{parentName:"ol"},"For each ",(0,l.mdx)("inlineCode",{parentName:"li"},"data")," object:",(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"Create a new instance of ",(0,l.mdx)("inlineCode",{parentName:"li"},"Line"),"."),(0,l.mdx)("li",{parentName:"ol"},"Use the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Line")," object's setter, ",(0,l.mdx)("inlineCode",{parentName:"li"},".setStartEnd"),", to set the line data from our ",(0,l.mdx)("inlineCode",{parentName:"li"},"data")," object."),(0,l.mdx)("li",{parentName:"ol"},"Set the ",(0,l.mdx)("inlineCode",{parentName:"li"},"strokeEnabled")," property to ",(0,l.mdx)("inlineCode",{parentName:"li"},"true")," in order to draw a stroke for the line."),(0,l.mdx)("li",{parentName:"ol"},"Set the stroke color using the ",(0,l.mdx)("inlineCode",{parentName:"li"},"randomColor")," helper function."),(0,l.mdx)("li",{parentName:"ol"},"Set the width of the stroke using ",(0,l.mdx)("inlineCode",{parentName:"li"},"strokeWidth")," property."),(0,l.mdx)("li",{parentName:"ol"},"Append the line object into the ",(0,l.mdx)("inlineCode",{parentName:"li"},"lines")," array."),(0,l.mdx)("li",{parentName:"ol"},"Insert the line into the edit context using the ",(0,l.mdx)("inlineCode",{parentName:"li"},"selection.editContext.addChild")," method. This step adds the line to the document's scenegraph."))),(0,l.mdx)("li",{parentName:"ol"},"Now that all of the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Line")," objects have been added to the scenegraph, set the document's current selection to be those ",(0,l.mdx)("inlineCode",{parentName:"li"},"Line")," objects."),(0,l.mdx)("li",{parentName:"ol"},"Use the ",(0,l.mdx)("inlineCode",{parentName:"li"},"group")," command to combine all of the currently-selected objects (the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Line")," objects) into a single group object.")),(0,l.mdx)("h3",{id:"6-run-the-plugin"},"6. Run the plugin"),(0,l.mdx)("p",null,"After saving all of your changes, reload the plugin in XD and run it. The result should be similar to the following:"),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"133.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/cef4618cea5ffd9218a660fea144dd55/5530d/lines.webp 320w","/uxp-xd/static/cef4618cea5ffd9218a660fea144dd55/0c8fb/lines.webp 640w","/uxp-xd/static/cef4618cea5ffd9218a660fea144dd55/80c60/lines.webp 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/cef4618cea5ffd9218a660fea144dd55/dd4a7/lines.png 320w","/uxp-xd/static/cef4618cea5ffd9218a660fea144dd55/0f09e/lines.png 640w","/uxp-xd/static/cef4618cea5ffd9218a660fea144dd55/1263b/lines.png 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/cef4618cea5ffd9218a660fea144dd55/1263b/lines.png",alt:"Created lines",title:"Created lines",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-how-to-draw-lines-index-md-2abd99cb132d91dd48ed.js.map