(this.webpackJsonplito=this.webpackJsonplito||[]).push([[0],{24:function(n,e,t){n.exports=t(36)},29:function(n,e,t){},35:function(n,e,t){},36:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(17),o=t.n(i),c=(t(29),t(23)),l=t(5),u=t(2),s=t(3);function d(){var n=Object(u.a)(["\n  width: 100vw;\n  background-color: ",";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n"]);return d=function(){return n},n}var p=s.a.div(d(),(function(n){return n.color?"rgb("+n.color+")":"var(--light)"}));var m=function(n){return a.a.createElement(p,{color:n.color,onClick:function(){return n.onClick(!1)}})},g=t(22);function b(){var n=Object(u.a)(["\n  min-height: 2rem;\n  position: absolute;\n  left: 4rem;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n\n  .toolBoxContainer {\n    min-height: 2rem;\n    width: 6rem;\n    background-color: var(--dark);\n    position: relative;\n    border-radius: var(--rounded);\n    box-shadow: var(--shadow);\n    padding: 1rem;\n    display: flex;\n\n    .left {\n      display: grid;\n      grid-row-gap: 0.8rem;\n    }\n\n    .right {\n      flex-grow: 1;\n      margin-left: 0.8rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      transition: visibility 0s, opacity 0.5s linear;\n    }\n\n    .right.active {\n      visibility: visible;\n      opacity: 1;\n    }\n\n    .right.inActive {\n      visibility: hidden;\n      opacity: 0;\n      transition: visibility 0s linear 100ms, opacity 0.5s linear;\n    }\n  }\n"]);return b=function(){return n},n}var v=s.a.div(b());var f=function(n){return a.a.createElement(v,null,a.a.createElement(g.a.div,{className:"toolBoxContainer",initial:{width:"4rem"},animate:{width:n.active?"30rem":"4rem"},transition:{duration:.3},onMouseLeave:function(){return n.onMouseLeave(!1)}},a.a.createElement("div",{className:"left"},n.menuList),a.a.createElement("div",{className:"right "+(n.active?"active":"inActive")},n.toolBox)))},h=t(21);function k(){var n=Object(u.a)(["\n  height: 2.5rem;\n  padding: 0 0.8rem 0 0.8rem;\n  background-color: var(--green);\n  border-radius: var(--rounded);\n  text-align: center;\n  color: var(--dark);\n  position: absolute;\n  left: 7rem;\n  box-shadow: var(--shadow);\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  white-space: nowrap;\n  z-index: 100;\n"]);return k=function(){return n},n}function x(){var n=Object(u.a)(["\n  width: 4rem;\n  height: 4rem;\n  background-color: var(--green);\n  border-radius: var(--rounded);\n  cursor: pointer;\n  text-align: center;\n  color: var(--dark);\n  box-shadow: var(--shadow);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  filter: ",";\n"]);return x=function(){return n},n}function y(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return y=function(){return n},n}var w=s.a.div(y()),E=s.a.div(x(),(function(n){return n.active?"grayscale(0%)":"grayscale(70%)"})),j=s.a.div(k());var O=function(n){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),i=t[0],o=t[1];return a.a.createElement(w,null,a.a.createElement(E,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},active:i,onClick:n.onClick},a.a.createElement(h.a,{icon:n.icon,size:"2x"})),i&&!n.disableToaster?a.a.createElement(j,null,a.a.createElement("span",null,n.title)):"")};function C(){var n=Object(u.a)(["\n  color: var(--light-green);\n  width: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n"]);return C=function(){return n},n}function S(){var n=Object(u.a)(["\n  width: 100%;\n\n  .sliderTitle {\n    color: var(--light);\n    font-weight: bold;\n    margin: 0;\n  }\n\n  input[type=range] {\n    height: 25px;\n    -webkit-appearance: none;\n    margin: 10px 0;\n    width: 100%;\n    background-color: transparent;\n  }\n  \n  input[type=range]:focus {\n    outline: none;\n  }\n\n  input[type=range]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 0.5rem;\n    cursor: pointer;\n    background-color: var(--dark-green);\n    border-radius: 1rem;\n  }\n\n  input[type=range]::-webkit-slider-thumb {\n    height: 18px;\n    width: 18px;\n    border-radius: 25px;\n    border: 0;\n    background-color: var(--green);\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -0.3rem;\n  }\n\n  input[type=range]:focus::-webkit-slider-runnable-track {\n    background-color: var(--dark-green);\n  }\n\n  input[type=range]::-moz-range-track {\n    width: 100%;\n    height: 0.5rem;\n    cursor: pointer;\n    background-color: var(--dark-green);\n    border-radius: 1rem;\n  }\n\n  input[type=range]::-moz-range-thumb {\n    height: 18px;\n    width: 18px;\n    border-radius: 25px;\n    border: 0;\n    background-color: var(--green);\n    cursor: pointer;\n  }\n\n  input[type=range]::-ms-track {\n    width: 100%;\n    height: 0.5rem;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  input[type=range]::-ms-fill-lower {\n    background: var(--dark-green);\n    border-radius: 1rem;\n  }\n\n  input[type=range]::-ms-fill-upper {\n    background: var(--dark-green);\n    border-radius: 1rem;\n  }\n\n  input[type=range]::-ms-thumb {\n    margin-top: 1px;\n    height: 18px;\n    width: 18px;\n    border-radius: 25px;\n    border: 0;\n    background: var(--green);\n    cursor: pointer;\n  }\n\n  input[type=range]:focus::-ms-fill-lower {\n    background: #2497E3;\n  }\n\n  input[type=range]:focus::-ms-fill-upper {\n    background: #2497E3;\n  }\n"]);return S=function(){return n},n}function M(){var n=Object(u.a)(["\n  padding: 0.3rem 0.8rem;\n  display: flex;\n"]);return M=function(){return n},n}var z=s.a.div(M()),B=s.a.div(S()),L=s.a.div(C()),V=function(n){var e=Object(r.useState)(0),t=Object(l.a)(e,2),i=t[0],o=t[1];return a.a.createElement(z,null,a.a.createElement(B,null,a.a.createElement("h4",{className:"sliderTitle"},n.title),a.a.createElement("input",{id:"typeinp",type:"range",min:n.min?n.min:0,max:n.max?n.max:10,step:n.step?n.step:.5,value:n.value?n.value:i,onChange:function(e){var t=e.target.value;n.setValue&&n.setValue(t),o(t)}})),a.a.createElement(L,null,n.value?n.value:i))},N=t(14),T=t(6);t(35);var F=function(){var n=Object(N.b)(),e=Object(r.useState)(!1),t=Object(l.a)(e,2),i=t[0],o=t[1],u=Object(r.useState)(!1),s=Object(l.a)(u,2),d=s[0],p=s[1],g=Object(r.useState)("200, 200, 200"),b=Object(l.a)(g,2),v=b[0],h=b[1],k=Object(r.useState)([0,0,0]),x=Object(l.a)(k,2),y=x[0],w=x[1],E=[{icon:T.d,title:"Change color",onClick:function(){p(!d)}},{icon:i?T.b:T.c,title:i?"Exit Fullscreen":"Fullscreen",onClick:function(){i?(n.exit(),o(!1)):(n.enter(),o(!0))}},{icon:T.e,title:"Minimize panel"},{icon:T.a,title:"Snap to right"}].map((function(n,e){return a.a.createElement(O,{key:e,icon:n.icon,title:n.title,onClick:n.onClick?n.onClick:null,disableToaster:d})})),j=function(n,e){var t=Object(c.a)(y);t[e]=n,w(t),h(y.join())};return a.a.createElement(N.a,{handle:n},a.a.createElement(m,{color:v,onClick:p}),a.a.createElement(f,{active:d,menuList:E,onMouseLeave:p,toolBox:a.a.createElement(a.a.Fragment,null,a.a.createElement(V,{min:"0",max:"255",step:"1",title:"Red",value:y[0],setValue:function(n){return j(n,0)}}),a.a.createElement(V,{min:"0",max:"255",step:"1",title:"Green",setValue:function(n){return j(n,1)}}),a.a.createElement(V,{min:"0",max:"255",step:"1",title:"Blue",setValue:function(n){return j(n,2)}}))}))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(F,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c0eeba4c.chunk.js.map