(this["webpackJsonpgraph-visualizer"]=this["webpackJsonpgraph-visualizer"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o,i,a=n(0),r=n(1),s=n.n(r),c=n(9),l=n.n(c),d=(n(16),n(17),n(3)),u=n(2),h=n(5),p=n(4),j=n(8),b=(n(18),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.nodeData,t=e.row,n=e.column,o=e.onMouseDown,i=e.onMouseEnter,r=e.onMouseUp,s=e.isWall;return Object(a.jsx)("div",{id:"node-".concat(t,"-").concat(n),className:"graph-node",onMouseDown:function(){return o(t,n)},onMouseEnter:function(){return i(t,n)},onMouseUp:function(){return r(t,n)},children:Object(a.jsx)("div",{className:s?"wall":""})})}}]),n}(s.a.Component)),v=(n(19),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).NODE_HEIGHT=25.5,e.NODE_WIDTH=25,e.state={height:0,width:0,startNode:null,targetNode:null,graph:[],mouseIsPressed:!1},e.createGraphNodes=function(t,n){for(var o=Math.floor(n/e.NODE_WIDTH),i=[],a=Math.floor(t/e.NODE_HEIGHT),r=0;r<a;r++){for(var s=[],c=0;c<o;c++)s.push(e.createNode(c,r));i.push(s)}return i},e.createNode=function(t,n){var o,i,a,r;return{column:t,row:n,isStart:(null===(o=e.state.startNode)||void 0===o?void 0:o.column)===t&&(null===(i=e.state.startNode)||void 0===i?void 0:i.row)===n,isVisited:!1,isWall:!1,isFinish:(null===(a=e.state.targetNode)||void 0===a?void 0:a.column)===t&&(null===(r=e.state.targetNode)||void 0===r?void 0:r.row)===n,previousNode:null,distance:1/0,onMouseDown:e.onNodePressed,onMouseEnter:e.onNodeEnter,onMouseUp:e.onNodeUnpressed,mouseIsPressed:!1}},e.onNodePressed=function(t,n){e.setState({graph:e.getNewGraphWithWallToggle(e.state.graph,t,n),mouseIsPressed:!0})},e.onNodeEnter=function(t,n){e.state.mouseIsPressed&&e.setState({graph:e.getNewGraphWithWallToggle(e.state.graph,t,n)})},e.getNewGraphWithWallToggle=function(e,t,n){var o=e.slice(),i=o[t][n];return o[t][n]=Object(j.a)(Object(j.a)({},i),{},{isWall:!i.isWall}),o},e.onNodeUnpressed=function(){e.setState({mouseIsPressed:!1})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({graph:this.createGraphNodes(this.props.graphHeight,this.props.graphWidth),height:this.props.graphHeight,width:this.props.graphWidth})}},{key:"render",value:function(){this.props.graphHeight===this.state.height&&this.props.graphWidth===this.state.width||this.componentDidMount();var e=this.state.graph.map((function(e,t){return Object(a.jsx)("div",{children:e.map((function(e,t){return Object(a.jsx)(b,{nodeData:e},t)}))},t)}));return Object(a.jsx)("div",{className:"graph-nodes",children:e})}}]),n}(s.a.Component)),g=n(10),f=n(7),O=(n(20),n(21)),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isDropdownOpen:!1},e.closeDropdown=function(){e.setState({isDropdownOpen:!1})},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(){var e=this;setTimeout((function(){e.state.isDropdownOpen?window.addEventListener("click",e.closeDropdown):window.removeEventListener("click",e.closeDropdown)}),0)}},{key:"render",value:function(){var e=this,t=this.props.options.map((function(t){return Object(a.jsx)("div",{className:"dropdown-option",onClick:function(){return e.props.onSelectOption(t.data)},children:t.label},t.label)})),n=O({"dropdown-title":!0,clicked:this.state.isDropdownOpen,unclicked:!this.state.isDropdownOpen});return Object(a.jsxs)("div",{className:"dropdown-body",onClick:function(){e.setState({isDropdownOpen:!e.state.isDropdownOpen})},children:[Object(a.jsxs)("div",{className:n,children:[Object(a.jsx)("div",{className:"dropdown-label",children:this.props.label}),Object(a.jsx)("div",{className:"icon-container",children:this.state.isDropdownOpen?Object(a.jsx)(f.b,{className:"caret-up-icon"}):Object(a.jsx)(f.a,{className:"caret-down-icon"})})]}),this.state.isDropdownOpen&&Object(a.jsx)("div",{className:"dropdown-option-container",children:t})]})}}]),n}(s.a.Component);!function(e){var t=new Map;e.GetImplementationMap=function(){return t},e.register=function(e){return function(n){return t.set(e,new n),n}}}(o||(o={}));var m;o.register("dijkstras")(i=function(){function e(){Object(d.a)(this,e),this.label="Dijkstra's Algorithm"}return Object(u.a)(e,[{key:"doAThing",value:function(){}},{key:"getLabel",value:function(){return this.label}}]),e}()),o.register("astar")(m=function(){function e(){Object(d.a)(this,e),this.label="A* Search"}return Object(u.a)(e,[{key:"doAThing",value:function(){console.log("reached astar")}}]),Object(u.a)(e,[{key:"getLabel",value:function(){return this.label}}]),e}()),n(22);function N(){var e=o.GetImplementationMap(),t=Object(r.useState)(null),n=Object(g.a)(t,2),i=n[0],s=n[1],c=[];e.forEach((function(e,t){c.push({label:e.getLabel(),data:{key:t,label:e.getLabel()}})}));var l={label:"Algorithms",options:c};return Object(a.jsxs)("div",{className:"header-component",children:[Object(a.jsx)("div",{className:"dropdown-container",children:Object(a.jsx)(w,{label:l.label,options:l.options,onSelectOption:function(t){if(e.has(t.key)){var n=e.get(t.key);s(n),n.doAThing()}}})}),Object(a.jsxs)("button",{className:"visualize-button",children:["Visualize ",null===i||void 0===i?void 0:i.getLabel()]})]})}n(23);var D=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={windowHeight:0,headerHeight:0,width:0},e.updateDimensions=function(){var t,n=null===(t=e.headerElement)||void 0===t?void 0:t.clientHeight,o=window.innerHeight,i=window.innerWidth;e.state.windowHeight===o&&e.state.width===i||e.setState({headerHeight:n,width:i,windowHeight:o})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.updateDimensions()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"app-container",children:[Object(a.jsx)("div",{className:"header-container",ref:function(t){e.headerElement=t},children:Object(a.jsx)(N,{})}),Object(a.jsx)("div",{className:"graph-container",children:Object(a.jsx)(v,{graphHeight:this.state.windowHeight-this.state.headerHeight,graphWidth:this.state.width})})]})}}]),n}(s.a.Component);var x=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(D,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),a(e),r(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),k()}],[[24,1,2]]]);
//# sourceMappingURL=main.c22abc92.chunk.js.map