(this["webpackJsonptip-calculator"]=this["webpackJsonptip-calculator"]||[]).push([[0],{10:function(e,t,i){},11:function(e,t,i){},12:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i(1),a=i.n(c),s=i(4),l=i.n(s),r=(i(10),i(2));var j=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),i=t[0],a=t[1],s=Object(c.useState)(""),l=Object(r.a)(s,2),j=l[0],b=l[1],u=Object(c.useState)(""),o=Object(r.a)(u,2),d=o[0],p=o[1],O=j/100*i;return Object(n.jsxs)("div",{className:"main",children:[Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"input-item",children:[Object(n.jsx)("label",{for:"bill",children:"Bill"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{id:"bill",name:"bill",type:"decimal",min:"0",value:i,onChange:function(e){return a(e.target.value)}})]}),Object(n.jsxs)("div",{className:"input-item",children:[Object(n.jsx)("label",{for:"tip",children:"Tip %"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{id:"tip",name:"tip",type:"decimal",min:"0",max:"100",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(n.jsxs)("div",{className:"input-item",children:[Object(n.jsx)("label",{for:"split",children:"Split"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{id:"split",name:"split",type:"decimal",min:"1",max:"100",value:d,onChange:function(e){return p(e.target.value)}})]})]}),Object(n.jsxs)("div",{className:"results",children:[Object(n.jsxs)("h2",{children:["Tip Amount: ",O.toFixed(2)]}),Object(n.jsxs)("h2",{children:["Total: ",""!==i?(parseFloat(i)+parseFloat(O)).toFixed(2):0]}),Object(n.jsxs)("h2",{children:["Price per person: ",""!==d?parseFloat((parseFloat(i)+parseFloat(O))/d).toFixed(2):0," "]})]})]})};i(11);var b=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(j,{})})},u=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,13)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),n(e),c(e),a(e),s(e)}))};l.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),u()}},[[12,1,2]]]);
//# sourceMappingURL=main.badd1f32.chunk.js.map