!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire9b93;t.register("4cKNG",(function(n,r){var o;o=n.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",(function(){return h}));var i=t("d0ZZj"),l=t("ebKTL"),a=t("9OS8c"),c=t("hNZKs"),s=t("lBpE3"),u=t("6cds3"),d=t("1dF7x"),f=t("6nbUx"),p=t("hT13f");function h(e){var t=(0,f.useParams)(),n=(0,u.useContext)(p.URIContext),r=(0,c.default)((0,u.useState)({title:"",title_nl:"",author:"",series:"",number:"",year:""}),2),o=r[0],h=r[1],b=(0,c.default)((0,u.useState)(null),2),j=b[0],x=b[1],g=function(e){h((0,a.default)((0,l.default)({},o),(0,i.default)({},e.target.name,e.target.value)))},y=function(e){console.log(e),h(e)},m=function(e){console.log(e),x(e)};return(0,u.useEffect)((function(){fetch("".concat(n,"/").concat(t.id),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return y(e)})).catch((function(e){return console.error(e)}))}),[]),(0,s.jsxs)("div",{className:"Book Details Edit",children:[(0,s.jsxs)("div",{className:"titles",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h2",{children:"Boek Aanpassen"})}),j&&(0,s.jsx)("div",{className:"success",children:(0,s.jsx)("h2",{children:"Aanpassingen opgeslagen!"})})]}),(0,s.jsx)("div",{className:"forms",children:(0,s.jsxs)("form",{children:[(0,s.jsx)("label",{htmlFor:"title",children:" Titel (Originele taal): "}),(0,s.jsx)("input",{type:"text",name:"title",id:"title",value:o.title,onChange:g}),(0,s.jsx)("label",{htmlFor:"title_nl",children:" Titel (Nederlandse vertaling): "}),(0,s.jsx)("input",{type:"text",name:"title_nl",id:"title-nl",value:o.title_nl,onChange:g}),(0,s.jsx)("label",{htmlFor:"author",children:" Auteur: "}),(0,s.jsx)("input",{type:"text",name:"author",id:"author",value:o.author,onChange:g}),(0,s.jsx)("label",{htmlFor:"series",children:" Reeks: "}),(0,s.jsx)("input",{type:"text",name:"series",id:"series",value:o.series,onChange:g}),(0,s.jsx)("label",{htmlFor:"number",children:" Nummer in reeks: "}),(0,s.jsx)("input",{type:"text",name:"number",id:"number",value:o.number,onChange:g}),(0,s.jsx)("label",{htmlFor:"year",children:" Jaar: "}),(0,s.jsx)("input",{type:"text",name:"year",id:"year",value:o.year,onChange:g})]})}),(0,s.jsxs)("div",{className:"buttons",children:[(0,s.jsx)("button",{onClick:function(e){e.preventDefault(),fetch("".concat(n,"/").concat(t.id),{method:"PUT",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){return console.error(e)}))},children:"Opslaan"}),o&&(0,s.jsx)(d.Link,{to:"/books/".concat(o._id),children:(0,s.jsx)("button",{children:"Terug naar Detailweergave"})}),(0,s.jsx)(d.Link,{to:"/",children:(0,s.jsx)("button",{children:"Terug naar Bibliotheek"})})]})]})}})),t.register("ebKTL",(function(n,r){e(n.exports,"default",(function(){return i}));var o=t("d0ZZj");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){(0,o.default)(e,t,n[t])}))}return e}})),t.register("9OS8c",(function(t,n){function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}e(t.exports,"default",(function(){return r}))}))}();
//# sourceMappingURL=BookEdit.de6ee6b1.js.map
