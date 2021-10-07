(this["webpackJsonppablion-questions"]=this["webpackJsonppablion-questions"]||[]).push([[0],{72:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),j=c(52),o=c.n(j),i=(c(72),c(57)),r=c(8),a=c(107),b=c(102),l=c(106),h=c(114),d=c(109),O=c(110),x=c(48),u=c(10),p=c(101),m=c(29),g=c(37),f=c(108),w=c(111),v=c(112),I=c(113),y=c(100),M=c(14),B=c(0);function k(){Object(M.f)();var e=Object(r.a)(a.a)({display:"flex",flexDirection:"row",justifyContent:"space-around",margin:"1rem 0"});function t(){return Object(B.jsx)(f.a,{children:Object(B.jsx)(y.a,{})})}function c(){return Object(B.jsx)(d.a,{children:Object(B.jsx)(y.a,{})})}function n(e){return Object(B.jsx)(f.a,Object(g.a)(Object(g.a)({},e),{},{children:Object(B.jsx)(y.a,{})}))}function s(e){return Object(B.jsx)(f.a,Object(g.a)(Object(g.a)({onClick:function(){alert("useless click")}},e),{},{children:Object(B.jsx)(y.a,{})}))}return Object(B.jsxs)(a.a,{children:[Object(B.jsxs)(O.a,{variant:"h3",children:["Props of elements in ",Object(B.jsx)("code",{children:"ButtonGroup"})," is changing style."]}),"I don't think it's intentional, hence it's a misbehavior/bug.",Object(B.jsx)(w.a,{sx:{m:2}}),Object(B.jsxs)(O.a,{variant:"h4",children:["Property ",Object(B.jsx)("code",{children:"href"})," changes the right border of the element"]}),"If ",Object(B.jsx)("code",{children:"href"})," defined, an a element will be used as the root node. See ",Object(B.jsx)(v.a,{href:"https://mui.com/api/button/#props",children:"official doc"}),"."," ","Wrapping element will change to ",Object(B.jsx)("code",{children:"<a />"}),". I think"," ",Object(B.jsx)("code",{children:"<a />"})," and ",Object(B.jsx)("code",{children:"<div />"})," should have more consistent behavior.",Object(B.jsxs)(e,{children:[Object(B.jsxs)(I.a,{children:[Object(B.jsxs)(h.a,{children:[Object(B.jsx)(d.a,{href:"/",children:"btn"}),Object(B.jsx)(f.a,{children:Object(B.jsx)(y.a,{})})]}),Object(B.jsx)("br",{}),"Button with href"]}),Object(B.jsxs)(I.a,{children:[Object(B.jsxs)(h.a,{children:[Object(B.jsx)(d.a,{children:"btn"}),Object(B.jsx)(f.a,{children:Object(B.jsx)(y.a,{})})]}),Object(B.jsx)("br",{}),"Button without href"]})]}),Object(B.jsx)(w.a,{sx:{m:2}}),Object(B.jsxs)(O.a,{variant:"h4",children:["Modularizing ",Object(B.jsx)("code",{children:"IconButton"})," changes color and hover style of element."]}),"All ",Object(B.jsx)("code",{children:"IconButton"}),"-s are in ",Object(B.jsx)("code",{children:"<ButtonGroup />"}),Object(B.jsxs)(e,{children:[Object(B.jsxs)(I.a,{children:[Object(B.jsxs)(h.a,{children:[Object(B.jsx)(f.a,{children:Object(B.jsx)(y.a,{})}),Object(B.jsx)(f.a,{children:Object(B.jsx)(y.a,{})}),Object(B.jsx)(d.a,{href:"/",children:"btn"}),Object(B.jsx)(f.a,{children:Object(B.jsx)(y.a,{})}),Object(B.jsx)(f.a,{children:Object(B.jsx)(y.a,{})})]}),Object(B.jsx)("br",{}),"With ",Object(B.jsx)("code",{children:"IconButton"})," and ",Object(B.jsx)("code",{children:"<MUI_ICON>"}),", all good."]}),Object(B.jsxs)(I.a,{children:[Object(B.jsxs)(h.a,{children:[Object(B.jsx)(t,{}),Object(B.jsx)(t,{}),Object(B.jsx)(d.a,{href:"/",children:"btn"}),Object(B.jsx)(t,{}),Object(B.jsx)(t,{})]}),Object(B.jsx)("br",{})," Using a new customized component.",Object(B.jsx)("br",{})," Misbehavior: buttons are white and not in group.",Object(B.jsx)("br",{}),' See the hover highlight of second and third "G"',Object(B.jsx)("br",{})," The component is based on ",Object(B.jsx)("code",{children:"IconButton"})," without passing ",Object(B.jsx)("code",{children:"{...props}"}),"."]})]}),Object(B.jsx)(w.a,{sx:{m:2}}),Object(B.jsxs)(O.a,{variant:"h4",children:["Passing empty ",Object(B.jsx)("code",{children:"props"})," changes color and hover style of element."]}),"Two work-around-s to get the color back.",Object(B.jsxs)(e,{children:[Object(B.jsxs)(I.a,{children:[Object(B.jsxs)(h.a,{children:[Object(B.jsx)(n,{}),Object(B.jsx)(n,{}),Object(B.jsx)(d.a,{href:"/",children:"btn"}),Object(B.jsx)(n,{}),Object(B.jsx)(n,{})]}),Object(B.jsx)("br",{})," Using a new customized component. All good.",Object(B.jsx)("br",{})," The component is also based on ",Object(B.jsx)("code",{children:"IconButton"})," but passing ",Object(B.jsx)("code",{children:"{...props}"}),".",Object(B.jsx)("br",{})," Although the ",Object(B.jsx)("code",{children:"props"})," is not passed, hence should be empty(?).",Object(B.jsx)("br",{})," Maybe ",Object(B.jsx)("code",{children:"useStyle"})," changed color, but the hover background shape is changed too."]}),Object(B.jsxs)(I.a,{children:[Object(B.jsxs)(h.a,{children:[Object(B.jsx)(c,{}),Object(B.jsx)(c,{}),Object(B.jsx)(d.a,{href:"/",children:"btn"}),Object(B.jsx)(c,{}),Object(B.jsx)(c,{})]}),Object(B.jsx)("br",{})," Using a new customized component. Color is good.",Object(B.jsx)("br",{})," This time the component is based on ",Object(B.jsx)("code",{children:"Button"}),", still not passing ",Object(B.jsx)("code",{children:"{...props}"}),".",Object(B.jsx)("br",{})," The hover background style(shape)"]})]}),Object(B.jsx)(w.a,{sx:{m:2}}),Object(B.jsxs)(O.a,{variant:"h4",children:["More tests with customized ",Object(B.jsx)("code",{children:"IconButton"})," with"," ",Object(B.jsx)("code",{children:"props"}),"."]}),Object(B.jsxs)(e,{children:[Object(B.jsxs)(I.a,{children:[Object(B.jsxs)(h.a,{children:[Object(B.jsx)(n,{}),Object(B.jsx)(n,{}),Object(B.jsx)(n,{}),Object(B.jsx)(d.a,{href:"/",children:"btn"}),Object(B.jsx)(d.a,{href:"/",children:"btn"})]}),Object(B.jsx)("br",{}),"All ",Object(B.jsx)("code",{children:"IconButton"}),"-s are on one side.",Object(B.jsx)("br",{}),"Incoherent behavior but I like:",Object(B.jsx)("br",{})," The hover background of last ",Object(B.jsx)("code",{children:"IconButton"})," will change."]}),Object(B.jsxs)(I.a,{children:[Object(B.jsxs)(h.a,{children:[Object(B.jsx)(n,{}),Object(B.jsx)(n,{}),Object(B.jsx)(d.a,{children:"btn"}),Object(B.jsx)(n,{}),Object(B.jsx)(n,{})]}),Object(B.jsx)("br",{}),"Element ",Object(B.jsx)("code",{children:"<Button />"})," with no ",Object(B.jsx)("code",{children:"href"}),Object(B.jsx)("br",{})," Misbehavior: button missing right border."]}),Object(B.jsxs)(I.a,{children:[Object(B.jsxs)(h.a,{size:"large",children:[Object(B.jsx)(n,{}),Object(B.jsx)(n,{}),Object(B.jsx)(d.a,{href:"/",children:"btn"}),Object(B.jsx)(n,{}),Object(B.jsx)(n,{})]}),Object(B.jsx)("br",{}),"Large size. All good."]}),Object(B.jsxs)(I.a,{children:[Object(B.jsxs)(h.a,{size:"large",children:[Object(B.jsx)(s,{}),Object(B.jsx)(s,{}),Object(B.jsx)(d.a,{href:"/",children:"btn"}),Object(B.jsx)(s,{}),Object(B.jsx)(s,{})]}),Object(B.jsx)("br",{}),"With ",Object(B.jsx)("code",{children:"onClick"}),". All good."]})]}),Object(B.jsx)(w.a,{sx:{m:2}}),Object(B.jsxs)(O.a,{variant:"h4",children:["More about ",Object(B.jsx)("code",{children:"IconButton"})," with ",Object(B.jsx)("code",{children:"ButtonGroup"}),"."]}),Object(B.jsx)("code",{children:"IconButton"})," (both MUI original and customized) in"," ",Object(B.jsx)("code",{children:"ButtonGroup"})," will also cause two ",Object(B.jsx)("code",{children:"Error/Warning"}),"-s:",Object(B.jsx)("pre",{children:Object(B.jsx)("li",{children:"Warning: React does not recognize the `disableElevation` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `fullwidth` instead. If you accidentally passed it from a parent component, remove it from the DOM element."})}),Object(B.jsx)("pre",{children:Object(B.jsx)("li",{children:"Warning: React does not recognize the `disableElevation` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `disableelevation` instead. If you accidentally passed it from a parent component, remove it from the DOM element."})}),Object(B.jsx)(e,{})]})}var C=c(103);var z=function(){var e=Object(i.a)({palette:{mode:"dark",primary:{main:p.a.A700},secondary:{main:m.a.A700}}}),t=Object(r.a)("div")({width:"100%",backgroundColor:"#080808",minHeight:"100vh",maxWidth:"100vw",display:"flex",flexDirection:"column",alignItems:"center",color:e.palette.text.primary}),c=Object(r.a)(a.a)({width:"100%",display:"flex",justifyContent:"space-around"}),n=Object(r.a)(a.a)({width:"100%",minHeight:"6rem"});return Object(B.jsx)(x.a,{basename:"/pablion-questions",children:Object(B.jsx)(b.a,{injectFirst:!0,children:Object(B.jsx)(l.a,{theme:e,children:Object(B.jsxs)(t,{children:[Object(B.jsxs)(c,{children:[Object(B.jsxs)(a.a,{children:["MUI:",Object(B.jsx)(h.a,{children:Object(B.jsx)(d.a,{component:x.b,to:"/MUI_PCS",children:"props changes style"})})]}),Object(B.jsxs)(a.a,{children:["Source code of this page:",Object(B.jsx)(h.a,{children:Object(B.jsx)(d.a,{onClick:function(){var e;switch(console.log("window.location : ",window.location),window.location.pathname){case"/pablion-questions/MUI_PCS":e="https://github.com/Pablion/pablion-questions/blob/master/src/MUI501-props-changes-style/MUI_PCS.tsx";break;case"/pablion-questions/":e="https://github.com/Pablion/pablion-questions/"}if(!e){var t="Error on resolving location pathname. Maybe your ENV doesn't have a window(like node.js).";throw alert(t),Error(t)}window.open(e,"_blank","noopener")},children:Object(B.jsx)(C.a,{fontSize:"medium"})})})]})]}),Object(B.jsxs)(u.c,{children:[Object(B.jsx)(u.a,{exact:!0,path:"/",children:Object(B.jsx)(O.a,{variant:"h2",children:"Select from samples above to show content"})}),Object(B.jsx)(u.a,{path:"/MUI_PCS",children:Object(B.jsx)(k,{})})]}),Object(B.jsx)(n,{})]})})})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,115)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,j=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),j(e),o(e)}))};o.a.render(Object(B.jsx)(s.a.StrictMode,{children:Object(B.jsx)(z,{})}),document.getElementById("root")),S()}},[[81,1,2]]]);
//# sourceMappingURL=main.fedfa2ba.chunk.js.map