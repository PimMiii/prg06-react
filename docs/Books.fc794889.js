!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire9b93;t.register("30vhW",(function(n,i){var r;r=n.exports,Object.defineProperty(r,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",(function(){return d}));var s=t("hNZKs"),o=t("lBpE3"),l=t("6cds3"),c=t("hT13f"),a=t("llI98"),u=t("3zv3q");function d(){var e=(0,l.useContext)(c.URIContext),t=(0,s.default)((0,l.useState)([]),2),n=t[0],i=t[1],r=(0,s.default)((0,l.useState)({start:"1",limit:"6"}),2),d=r[0],f=(r[1],(0,s.default)((0,l.useState)("".concat(e,"?start=").concat(d.start,"&limit=").concat(d.limit)),2)),h=f[0],x=f[1],b=(0,s.default)((0,l.useState)(null),2),j=b[0],v=b[1],p=function(){fetch(h,{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return g(e)})).catch((function(e){return console.error(e)}))},g=function(e){console.log(e.items),i(e.items),v(e.pagination)};(0,l.useEffect)(p,[h]);var k=n.map((function(e){return(0,o.jsx)(u.default,{book:e,libraryRefreshHandler:p},e.id)}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"library",children:k}),j&&(0,o.jsx)(a.default,{pagination:j,setUri:x,libraryRefreshHandler:p})]})}})),t.register("llI98",(function(n,i){e(n.exports,"default",(function(){return s}));var r=t("lBpE3");function s(e){var t=e.pagination;return(0,r.jsx)("nav",{className:"Pagination buttons",children:(0,r.jsxs)("div",{className:"actions",children:[(0,r.jsx)("button",{onClick:function(){e.setUri(t._links.first.href)},children:"First"}),1===t.currentPage?(0,r.jsx)("button",{disabled:!0,children:"Previous"}):(0,r.jsx)("button",{onClick:function(){e.setUri(t._links.previous.href)},children:"Previous"}),(0,r.jsxs)("h3",{children:[t.currentPage,"/",t.totalPages]}),t.currentPage===t.totalPages?(0,r.jsx)("button",{disabled:!0,children:"Next"}):(0,r.jsx)("button",{onClick:function(){e.setUri(t._links.next.href)},children:"Next"}),(0,r.jsx)("button",{onClick:function(){e.setUri(t._links.last.href)},children:"Last"})]})})}})),t.register("3zv3q",(function(n,i){e(n.exports,"default",(function(){return c}));var r=t("hNZKs"),s=t("lBpE3"),o=t("6cds3"),l=t("1dF7x");function c(e){var t="Book";e.status&&(t="Book Success");var n=(0,r.default)((0,o.useState)(e.book),2),i=n[0];n[1];return(0,s.jsxs)("div",{className:"".concat(t),children:[(0,s.jsxs)("div",{className:"titles",children:[(0,s.jsxs)("div",{children:[i.title_nl&&(0,s.jsx)("h2",{children:i.title}),i.title_nl&&(0,s.jsx)("h3",{children:i.title_nl})]}),e.status&&(0,s.jsx)("div",{className:"success",children:(0,s.jsx)("h2",{children:"Boek toegevoegd!"})})]}),(0,s.jsx)("div",{className:"information",children:i.author&&(0,s.jsxs)("h4",{children:["Auteur: ",i.author]})}),(0,s.jsxs)("div",{className:"buttons",children:[(0,s.jsx)(l.Link,{to:"/books/".concat(e.book.id),children:(0,s.jsx)("button",{children:"Details weergeven"})}),(0,s.jsx)(l.Link,{to:"/books/edit/".concat(e.book.id),children:(0,s.jsx)("button",{children:"Aanpassen"})}),(0,s.jsx)("button",{onClick:function(){fetch(e.book._links.self.href,{method:"DELETE",headers:{Accept:"application/json"}}).then((function(t){return console.log("deleted ".concat(e.book.title))})).then((function(t){e.libraryRefreshHandler()})).catch((function(e){return console.error(e)}))},children:"Verwijderen"})]})]})}}))}();
//# sourceMappingURL=Books.fc794889.js.map