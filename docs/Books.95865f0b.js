!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire9b93;t.register("g35cy",(function(n,i){var s;s=n.exports,Object.defineProperty(s,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",(function(){return d}));var r=t("hNZKs"),o=t("lBpE3"),c=t("2rFm8"),l=t("6cds3"),a=t("hT13f"),u=t("5Ogk8");function d(){var e=(0,l.useContext)(a.URIContext),t=(0,r.default)((0,l.useState)([]),2),n=t[0],i=t[1],s=(0,r.default)((0,l.useState)([]),2),d=(s[0],s[1]),f=(0,r.default)((0,l.useState)({start:"1",limit:"6"}),2),h=f[0],x=(f[1],(0,r.default)((0,l.useState)("".concat(e,"?start=").concat(h.start,"&limit=").concat(h.limit)),2)),b=x[0],j=x[1],g=(0,r.default)((0,l.useState)(null),2),p=g[0],k=g[1],v=function(){fetch(b,{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){return console.error(e)}))},m=function(e){console.log(e.items),d(e.items),i(e.items),k(e.pagination)};(0,l.useEffect)(v,[b]);var N=n.map((function(e){return(0,o.jsx)(c.default,{book:e,libraryRefreshHandler:v},e.id)}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"library",children:N}),p&&(0,o.jsx)(u.default,{pagination:p,setUri:j,libraryRefreshHandler:v})]})}})),t.register("2rFm8",(function(n,i){e(n.exports,"default",(function(){return l}));var s=t("hNZKs"),r=t("lBpE3"),o=t("6cds3"),c=(o=t("6cds3"),t("1dF7x"));function l(e){var t="Book";e.status&&(t="Book Success");var n=(0,s.default)((0,o.useState)(e.book),2),i=n[0];n[1];return(0,r.jsxs)("div",{className:"".concat(t),children:[(0,r.jsxs)("div",{className:"titles",children:[(0,r.jsxs)("div",{children:[i.title_nl&&(0,r.jsx)("h2",{children:i.title}),i.title_nl&&(0,r.jsx)("h3",{children:i.title_nl})]}),e.status&&(0,r.jsx)("div",{className:"success",children:(0,r.jsx)("h2",{children:"Boek toegevoegd!"})})]}),(0,r.jsx)("div",{className:"information",children:i.author&&(0,r.jsxs)("h4",{children:["Auteur: ",i.author]})}),(0,r.jsxs)("div",{className:"buttons",children:[(0,r.jsx)(c.Link,{to:"/books/".concat(e.book.id),children:(0,r.jsx)("button",{children:"Details weergeven"})}),(0,r.jsx)(c.Link,{to:"/books/edit/".concat(e.book.id),children:(0,r.jsx)("button",{children:"Aanpassen"})}),(0,r.jsx)("button",{onClick:function(){fetch(e.book._links.self.href,{method:"DELETE",headers:{Accept:"application/json"}}).then((function(t){return console.log("deleted ".concat(e.book.title))})).then((function(t){e.libraryRefreshHandler()})).catch((function(e){return console.error(e)}))},children:"Verwijderen"})]})]})}})),t.register("5Ogk8",(function(n,i){e(n.exports,"default",(function(){return r}));var s=t("lBpE3");function r(e){var t=e.pagination;return(0,s.jsx)("nav",{className:"Pagination buttons",children:(0,s.jsxs)("div",{className:"actions",children:[(0,s.jsx)("button",{onClick:function(){e.setUri(t._links.first.href)},children:"First"}),1===t.currentPage?(0,s.jsx)("button",{disabled:!0,children:"Previous"}):(0,s.jsx)("button",{onClick:function(){e.setUri(t._links.previous.href)},children:"Previous"}),(0,s.jsxs)("h3",{children:[t.currentPage,"/",t.totalPages]}),t.currentPage===t.totalPages?(0,s.jsx)("button",{disabled:!0,children:"Next"}):(0,s.jsx)("button",{onClick:function(){e.setUri(t._links.next.href)},children:"Next"}),(0,s.jsx)("button",{onClick:function(){e.setUri(t._links.last.href)},children:"Last"})]})})}t("6cds3")}))}();
//# sourceMappingURL=Books.95865f0b.js.map
