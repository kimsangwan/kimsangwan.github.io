(this.webpackJsonpshop2=this.webpackJsonpshop2||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(20),c=a(0),r=a.n(c),l=a(14),i=a.n(l),o=(a(81),a(13)),u=a(116),m=a(118),s=a(117),d=a(115),E=a(73),p=(a(82),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),b=a(43),h=a(7),f=a(45),v=(a(83),a(23));function j(){var e=Object(b.a)(["\n  font-size: 25px;\n  color: ",";\n"]);return j=function(){return e},e}function O(){var e=Object(b.a)(["\n  padding-top: 30px;\n"]);return O=function(){return e},e}var g=f.a.div(O()),k=f.a.h4(j(),(function(e){return e.\uc0c9\uc0c1}));function N(e){return Object(c.useEffect)((function(){e.\uc2a4\uc704\uce58\ubcc0\uacbd(!0)})),0===e.\ub204\ub978\ud0ed?r.a.createElement("div",{className:"p-4 text-left"},"0\ubc88\uc9f8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4"):1===e.\ub204\ub978\ud0ed?r.a.createElement("div",{className:"p-4 text-left"},"1\ubc88\uc9f8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4"):2===e.\ub204\ub978\ud0ed?r.a.createElement("div",{className:"p-4 text-left"},"2\ubc88\uc9f8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4"):void 0}function y(e){return r.a.createElement("p",null,"\uc7ac\uace0 : ",e.\uc7ac\uace0[0])}var S=Object(v.b)((function(e){return console.log(e),{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){var t=Object(c.useState)(!0),a=Object(o.a)(t,2),n=(a[0],a[1]),l=Object(c.useState)(""),i=Object(o.a)(l,2),u=(i[0],i[1],Object(c.useState)(0)),s=Object(o.a)(u,2),d=s[0],E=s[1],p=Object(c.useState)(!1),b=Object(o.a)(p,2),f=(b[0],b[1]);Object(c.useContext)(B),Object(c.useEffect)((function(){var e=setTimeout((function(){n(!1)}),2e3);return console.log("\uc548\ub155"),function(){clearTimeout(e)}}),[]);var v=Object(h.g)().id,j=Object(h.f)(),O=e.shoes.find((function(e){return e.id==v})),S=Object(c.useState)(0),x=Object(o.a)(S,2),C=(x[0],x[1],Object(c.useState)(!1)),q=Object(o.a)(C,2);return q[0],q[1],r.a.createElement("div",{className:"container"},r.a.createElement(g,null,r.a.createElement(k,{className:"red"},"Detail")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:"https://codingapple1.github.io/shop/shoes1.jpg",width:"100%"})),r.a.createElement("div",{className:"col-md-6 mt-2"},r.a.createElement("h4",{className:"pt-5"},O.title),r.a.createElement("p",null,O.content),r.a.createElement("p",null,O.price,"\uc6d0"),r.a.createElement(y,{"\uc7ac\uace0":e.\uc7ac\uace0}),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.\uc7ac\uace0\ubcc0\uacbd([9,11,12]),e.dispatch({type:"\ud56d\ubaa9\ucd94\uac00","\ub370\uc774\ud130":{id:O.id,name:O.title,quan:1}}),j.push("/cart")}},"\uc8fc\ubb38\ud558\uae30"),"\xa0",r.a.createElement("button",{className:"btn btn-danger",onClick:function(){j.push("/")}},"\ub4a4\ub85c\uac00\uae30"))),r.a.createElement(m.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"link-0"},r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{eventKey:"link-0",onClick:function(){f(!1),E(0)}},"\uc0c1\ud488\uc124\uba85")),r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Link,{eventKey:"link-1",onClick:function(){f(!1),E(1)}},"\ubc30\uc1a1\uc815\ubcf4"))),r.a.createElement(N,{"\ub204\ub978\ud0ed":d,"\uc2a4\uc704\uce58\ubcc0\uacbd":f}))})),x=a(69),C=a.n(x),q=a(26),w=a(114);var I=Object(v.b)((function(e){return console.log(e),{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){return r.a.createElement("div",null,r.a.createElement(w.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"\uc0c1\ud488\uba85"),r.a.createElement("th",null,"\uc218\ub7c9"),r.a.createElement("th",null,"\ubcc0\uacbd"))),r.a.createElement("tbody",null,e.state.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.quan),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uc99d\uac00","\ub370\uc774\ud130":t.id})}},"+"),r.a.createElement("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uac10\uc18c","\ub370\uc774\ud130":t.id})}},"-")))})))),!0===e.alert\uc5f4\ub838\ub2c8?r.a.createElement("div",{className:"my-alert2"},r.a.createElement("p",null,"\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud560\uc778 20%",r.a.createElement("button",{className:"close",onClick:function(){e.dispatch({type:"alert\ub2eb\uae30"})}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))):null)})),B=r.a.createContext();function L(e){Object(c.useContext)(B);var t=Object(h.f)();return r.a.createElement("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+e.shoes.id)}},r.a.createElement("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),r.a.createElement("h4",null,e.shoes.title),r.a.createElement("p",null,e.shoes.content," & ",e.shoes.price),r.a.createElement(A,null))}function A(){var e=Object(c.useContext)(B);return r.a.createElement("p",null,e[0])}var D=function(){var e=Object(c.useState)(p),t=Object(o.a)(e,2),a=t[0],l=t[1],i=Object(c.useState)([10,11,12]),b=Object(o.a)(i,2),f=b[0],v=b[1],j=Object(c.useState)([{id:0,name:"\uc774\uc05c\uc2e0\ubc1c",quan:1}]),O=Object(o.a)(j,2);return O[0],O[1],r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{bg:"light",expand:"lg"},r.a.createElement(u.a.Brand,{href:"#home"},"ShoeShop"),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(m.a.Link,{as:q.b,to:"/"},"Home"),r.a.createElement(m.a.Link,{as:q.b,to:"/detail"},"Detail"),r.a.createElement(s.a,{title:"Dropdown",id:"basic-nav-dropdown"},r.a.createElement(s.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(s.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(s.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(s.a.Divider,null),r.a.createElement(s.a.Item,{href:"#action/3.4"},"Separated link"))))),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement(d.a,{className:"background"},r.a.createElement("h1",null,"20% Season OFF"),r.a.createElement("p",null,"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),r.a.createElement("p",null,r.a.createElement(E.a,{variant:"primary"},"Learn more"))),r.a.createElement("div",{className:"container"},r.a.createElement(B.Provider,{value:f},r.a.createElement("div",{className:"row"},a.map((function(e,t){return r.a.createElement(L,{shoes:a[t],i:t,key:t})})))),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){C.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),l([].concat(Object(n.a)(a),Object(n.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))}},"\ub354\ubcf4\uae30"))),r.a.createElement(h.a,{path:"/detail/:id"},r.a.createElement(B.Provider,{value:f},r.a.createElement(S,{shoes:a,"\uc7ac\uace0":f,"\uc7ac\uace0\ubcc0\uacbd":v}))),r.a.createElement(h.a,{path:"/cart"},r.a.createElement(I,null)),r.a.createElement(h.a,{path:"/:id"},r.a.createElement("div",null,"\uc544\ubb34\uac70\ub098\uc801\uc5c8\uc744\ub54c \uc774\uac70 \ubcf4\uc5ec\uc8fc\uc148"))))},K=a(29);var T=[{id:0,name:"\uba4b\uc9c4\uc2e0\ubc1c",quan:2},{id:1,name:"\uba4b\uc9c4\uc2e0\ubc1c2",quan:1}];var F=Object(K.c)(Object(K.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var a=e.findIndex((function(e){return e.id===t.\ub370\uc774\ud130.id}));if(a>=0){var c=Object(n.a)(e);return c[a].quan++,c}var r=Object(n.a)(e);return r.push(t.\ub370\uc774\ud130),r}if("\uc218\ub7c9\uc99d\uac00"===t.type){var l=Object(n.a)(e);return l[t.\ub370\uc774\ud130].quan++,l}if("\uc218\ub7c9\uac10\uc18c"===t.type){var i=Object(n.a)(e);return i[t.\ub370\uc774\ud130].quan--,i}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"alert\ub2eb\uae30"===t.type?e=!1:e}}));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q.a,null,r.a.createElement(v.a,{store:F},r.a.createElement(D,null)))),document.getElementById("root")),ServiceWorker.regular()},76:function(e,t,a){e.exports=a(108)},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.73f6d76c.chunk.js.map