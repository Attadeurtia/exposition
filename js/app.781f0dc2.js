(function(){var e={827:function(e,t,n){"use strict";var r=n(751),o=n(641);function i(e,t,n,r,i,a){const u=(0,o.g2)("HeaderWithArrow"),c=(0,o.g2)("MapComponent"),s=(0,o.g2)("ImageWithText"),l=(0,o.g2)("FooterHeures");return(0,o.uX)(),(0,o.CE)(o.FK,null,[t[0]||(t[0]=(0,o.Lk)("div",{id:"app"},null,-1)),(0,o.bF)(u),(0,o.bF)(c),(0,o.bF)(s),(0,o.bF)(l)],64)}const a={class:"container"},u=["src","alt"],c=["innerHTML"];function s(e,t,n,r,i,s){return(0,o.uX)(),(0,o.CE)("div",a,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.images,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"item",key:t},[(0,o.Lk)("img",{src:e.src,alt:e.alt},null,8,u),(0,o.Lk)("div",{class:"texte",innerHTML:e.text},null,8,c)])))),128))])}var l=n(263),d={name:"GalerieDeDOeuvres",data(){return{images:[{id:1,src:n(416),title:"Image 1",text:""},{id:2,src:n(81),title:"Image 2",text:""},{id:3,src:n(682),title:"Image 3",text:""},{id:4,src:n(699),title:"Image 4",text:""}]}},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new l.A;for(let r of this.images)try{const t=await n(936)(`./text${r.id}.md`);r.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${r.id}:`,t)}}}},f=n(262);const p=(0,f.A)(d,[["render",s],["__scopeId","data-v-be3f49ac"]]);var m=p;const v={class:"section full-screen"};function g(e,t,n,r,i,a){return(0,o.uX)(),(0,o.CE)("div",v,[t[1]||(t[1]=(0,o.Lk)("h1",{class:"title"},"Expo",-1)),t[2]||(t[2]=(0,o.Lk)("h2",{class:"subtitle"},"Par : Geoffrey posé, Mathilde Dupont, Grégoire Xavier et Eugène Delacroix",-1)),t[3]||(t[3]=(0,o.Lk)("p",{class:"header-text"},[(0,o.eW)(" Nous vous invitons à contempler ces images avec un regard curieux et émerveillé, à ressentir l'atmosphère mystique qu'elles dégagent et à réfléchir à leur signification dans le contexte historique et culturel du Moyen Âge. Que vous soyez passionné d'art, d'histoire ou simplement curieux, cette exposition est une occasion unique de redécouvrir un patrimoine souvent méconnu."),(0,o.Lk)("br"),(0,o.Lk)("br"),(0,o.eW)(" Laissez-vous transporter par la magie des vitraux et la lumière qu'ils diffusent, et rejoignez-nous pour célébrer l'héritage artistique de nos ancêtres. "),(0,o.Lk)("br"),(0,o.Lk)("br"),(0,o.eW)(" Venez explorer, admirer et vous émerveiller devant ces Lumières du Moyen Âge ! ")],-1)),(0,o.Lk)("div",{class:"arrow-down",onClick:t[0]||(t[0]=(...e)=>a.scrollToNextSection&&a.scrollToNextSection(...e))},"↓")])}var b={name:"HeaderWithArrow",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},body:{type:String,required:!0}},methods:{scrollToNextSection(){const e=this.$el.nextElementSibling;e&&e.scrollIntoView({behavior:"smooth"})}}};const h=(0,f.A)(b,[["render",g]]);var k=h;const y={class:"footer"};function x(e,t,n,r,i,a){return(0,o.uX)(),(0,o.CE)("footer",y,t[0]||(t[0]=[(0,o.Fv)('<div class="container" data-v-0efb95dc><div class="hours-and-link" data-v-0efb95dc><div class="hours" data-v-0efb95dc><h2 data-v-0efb95dc>Heures d&#39;ouverture</h2><ul data-v-0efb95dc><li data-v-0efb95dc>Lundi - Vendredi: 9h00 - 18h00</li><li data-v-0efb95dc>Samedi: 10h00 - 17h00</li><li data-v-0efb95dc>Dimanche: Fermé</li></ul></div><div class="site-link" data-v-0efb95dc><a href="https://attadeurtia.github.io/blog/" target="_blank" data-v-0efb95dc>Auteur</a></div></div></div>',1)]))}var w={name:"FooterHeures"};const O=(0,f.A)(w,[["render",x],["__scopeId","data-v-0efb95dc"]]);var L=O,j=n(33);const C={class:"map-container"},E={class:"map-wrapper"};function _(e,t,n,r,i,a){const u=(0,o.g2)("l-tile-layer"),c=(0,o.g2)("l-popup"),s=(0,o.g2)("l-marker"),l=(0,o.g2)("l-map");return(0,o.uX)(),(0,o.CE)("div",C,[(0,o.Lk)("div",E,[(0,o.bF)(l,{ref:"map",zoom:i.zoom,center:i.center,style:{height:"100%",width:"100%"}},{default:(0,o.k6)((()=>[(0,o.bF)(u,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.points,((e,t)=>((0,o.uX)(),(0,o.Wv)(s,{key:t,"lat-lng":[e.lat,e.lng],onClick:t=>a.onMarkerClick(e)},{default:(0,o.k6)((()=>[(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",null,(0,j.v_)(e.name),1)])),_:2},1024)])),_:2},1032,["lat-lng","onClick"])))),128))])),_:1},8,["zoom","center"])])])}var M=n(61),F={name:"MapComponent",components:{LMap:M.Do,LTileLayer:M.a,LMarker:M.li,LPopup:M.nA},data(){return{center:[47.41322,-1.219482],zoom:10,points:[{name:"Point A",lat:47.41322,lng:-1.219482},{name:"Point B",lat:47.4135,lng:-1.219},{name:"Point C",lat:47.414,lng:-1.2185}]}},methods:{onMarkerClick(e){alert(`You clicked on ${e.name}`)}}};const T=(0,f.A)(F,[["render",_],["__scopeId","data-v-4c2e4e30"]]);var A=T,P={name:"App",components:{ImageWithText:m,HeaderWithArrow:k,MapComponent:A,FooterHeures:L}};const S=(0,f.A)(P,[["render",i]]);var I=S;(0,r.Ef)(I).mount("#app")},936:function(e,t,n){var r={"./text1.md":[116,116],"./text2.md":[761,761],"./text3.md":[346,346],"./text4.md":[175,175],"./text5.md":[648,648]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=936,e.exports=o},416:function(e,t,n){"use strict";e.exports=n.p+"img/image1.a43ede3f.jpeg"},81:function(e,t,n){"use strict";e.exports=n.p+"img/image2.2a0176fc.jpeg"},682:function(e,t,n){"use strict";e.exports=n.p+"img/image3.7bd792f0.jpeg"},699:function(e,t,n){"use strict";e.exports=n.p+"img/image4.e3e68840.jpeg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return r[e]}}));return a["default"]=function(){return r},n.d(i,a),i}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{8:"de07ac29",24:"c651502d",71:"94b2e751",116:"e32c0856",175:"ac6c7770",249:"f9df8ccd",346:"54719c5b",481:"228bb30d",648:"0fc05eb4",761:"377ba522"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="expo:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/exposition/"}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkexpo"]=self["webpackChunkexpo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(827)}));r=n.O(r)})();
//# sourceMappingURL=app.781f0dc2.js.map