(this.webpackJsonpproj=this.webpackJsonpproj||[]).push([[0],{17:function(e,t,n){e.exports=n(43)},22:function(e,t,n){},23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),s=(n(22),n(12)),l=n(13),i=n(16),m=n(15),u=(n(23),n(14)),h=n.n(u),d=(n(41),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&160x180")}),r.a.createElement("h1",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),p=function(e){return r.a.createElement("div",{className:"list-class"},e.monsters.map((function(e){return r.a.createElement(d,{key:e.id,monster:e})})))},f=(n(42),function(e){var t=e.placeholder,n=e.handlechange;return(r.a.createElement("div",{className:"searchBox"},r.a.createElement("input",{className:"search",placeholder:t,type:"search",onChange:n})))}),v=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://jsonplaceholder.typicode.com/users").then((function(t){e.setState({monsters:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Monster list"),r.a.createElement(f,{placeholder:"search monster",handlechange:function(t){e.setState({searchField:t.target.value})}}),r.a.createElement(p,{monsters:o})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a013202e.chunk.js.map