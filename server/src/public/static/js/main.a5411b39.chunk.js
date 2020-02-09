(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(n,e,t){n.exports=t(82)},78:function(n,e){},82:function(n,e,t){"use strict";t.r(e);t(40);var r=t(0),a=t.n(r),o=t(33),i=t.n(o),c=t(17),l=t(4),u=t(16),p=t(34),d=t.n(p),f=t(1),b=t(2);function s(){var n=Object(f.a)(["\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  margin: 10px 5px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #7819c1;\n  color: #fff;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"]);return s=function(){return n},n}function x(){var n=Object(f.a)(["\n  height: 35px;\n  font-size: 16px;\n  padding: 7px 12px;\n  border-radius: 15px 15px 0px 15px;\n  margin: 10px 0;\n  border: none;\n  background-color: #fff;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"]);return x=function(){return n},n}function m(){var n=Object(f.a)(["\n  background-color: #101019;\n  display: grid;\n  width: 100%;\n  grid-template-columns: 1fr 80px;\n  grid-template-rows: 1fr;\n  gap: 10px;\n  position: fixed;\n  padding: 5px 0s;\n"]);return m=function(){return n},n}function g(){var n=Object(f.a)(["\n  background: #2e2e2f;\n  color: #eee;\n  border-radius: 6px 6px 6px 0;\n  width: fit-content;\n  max-width: 99%;\n  margin-top: 5px;\n  padding: 6px;\n  font-size: 13px;\n  display: flex;\n  flex-direction: column;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  & > strong {\n    margin-bottom: 4px;\n    font-size: 15px;\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar {\n    display: block;\n    width: 5px;\n    height: 8px;\n    background-color: #101019; /* or add it to the track */\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #7819c1;\n    border-radius: 2px;\n  }\n"]);return h=function(){return n},n}function v(){var n=Object(f.a)(["\n  padding: 20px;\n  width: 100%;\n  height: calc(100% - 40px);\n  background-color: #101019;\n  position: fixed;\n  ","\n"]);return v=function(){return n},n}function w(){var n=Object(f.a)(["\n  height: 40px;\n  position: fixed;\n  top: 0;\n  color: #eee;\n  z-index: 1000;\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  background-color: #7819c1;\n  display: flex;\n  justify-content: space-between;\n  & > * {\n    font-size: 16px;\n  }\n"]);return w=function(){return n},n}function j(){var n=Object(f.a)(["\n  position: fixed;\n  width: 90%;\n  top: 40%;\n  max-width: 400px;\n  padding: 25px;\n  background-color: #7819c1;\n  text-align: center;\n  color: #eee;\n  border-radius: 5px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  & > span {\n    color: #fff;\n    font-size: 12px;\n  }\n  & > form {\n    margin-top: 10px;\n    display: grid;\n    width: 100%;\n    grid-template-columns: 1fr 50px;\n    grid-template-rows: 1fr;\n    gap: 5px;\n    & > button {\n      background-color: #fff;\n      color: #7819c1;\n    }\n  }\n"]);return j=function(){return n},n}function E(){var n=Object(f.a)(["\n  padding: 20px;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n"]);return E=function(){return n},n}var O=b.b.div(E()),k=b.b.div(j()),y=b.b.header(w()),z=b.b.div(v(),(function(n){return n.blur?"":"filter: blur(3px)"})),S=b.b.div(h()),D=b.b.div(g()),I=b.b.form(m()),R=b.b.input(x()),V=b.b.button(s()),C=d.a.connect(document.URL);function F(){var n=Object(r.useRef)(null),e=Object(r.useState)([]),t=Object(l.a)(e,2),o=t[0],i=t[1],p=Object(r.useState)(""),d=Object(l.a)(p,2),f=d[0],b=d[1],s=Object(r.useState)(""),x=Object(l.a)(s,2),m=x[0],g=x[1],h=Object(r.useState)(!1),v=Object(l.a)(h,2),w=v[0],j=v[1],E=Object(r.useState)(!1),F=Object(l.a)(E,2),J=F[0],M=F[1],B=Object(r.useState)(0),L=Object(l.a)(B,2),N=L[0],U=L[1],q=function(){n.current.scrollIntoView()};return Object(r.useEffect)((function(){q(),C.on("bootstrap",(function(n){i(n)})),C.on("newMessage",(function(n){i([].concat(Object(c.a)(o),[n])),q()})),C.on("online",(function(n){return U(n)}))})),a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null,a.a.createElement("p",null,a.a.createElement("strong",null,"Infozap")," por Vinicius Vass\xe3o"),a.a.createElement("p",null,"Online agora: ",N)),a.a.createElement(z,{blur:J},a.a.createElement(S,null,o.map((function(n,e){return a.a.createElement(D,{key:e},a.a.createElement("strong",null,n.author),a.a.createElement("p",null,n.content))})),a.a.createElement("div",{ref:n})),a.a.createElement(I,{onSubmit:function(n){if(n.preventDefault(),J){var e={author:m,content:f};i([].concat(Object(c.a)(o),[e])),C.emit("sendMessage",e),b(""),q()}}},a.a.createElement(R,{placeholder:"Digite sua mensagem",value:f,onChange:function(n){return b(n.target.value)},color:"#ffffff"}),a.a.createElement(V,{type:"submit"},a.a.createElement(u.a,null)))),!J&&a.a.createElement(O,null,a.a.createElement(k,null,a.a.createElement("p",null,"Insira um nome de usu\xe1rio para continuar"),a.a.createElement("form",{onSubmit:function(n){n.preventDefault(),""!==m?M(!0):j(!0)}},a.a.createElement(R,{placeholder:"Digite seu nome",value:m,onChange:function(n){return g(n.target.value)}}),a.a.createElement(V,{type:"submit"},a.a.createElement(u.a,null))),w&&a.a.createElement("span",null,"N\xe3o pode ser vazio!"))))}function J(){var n=Object(f.a)(['\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n    font-family: "Roboto", sans-serif;\n    -webkit-font-smoothing: antialiased;\n  }\n  html, body, #root {\n    min-height: 100%;\n    background-color: #101019;\n  }\n  ::-webkit-scrollbar {\n    display: none\n  }\n']);return J=function(){return n},n}var M=Object(b.a)(J());var B=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,null),a.a.createElement(F,null))};i.a.render(a.a.createElement(B,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a5411b39.chunk.js.map