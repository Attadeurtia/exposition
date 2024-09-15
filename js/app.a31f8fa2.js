(function(){var e={578:function(e,t,r){"use strict";var n=r(751),i=r(641);function o(e,t,r,n,o,a){const u=(0,i.g2)("HeaderWithArrow"),s=(0,i.g2)("ImageWithText"),c=(0,i.g2)("FooterHeures");return(0,i.uX)(),(0,i.CE)(i.FK,null,[t[0]||(t[0]=(0,i.Lk)("div",{id:"app"},null,-1)),(0,i.bF)(u),(0,i.bF)(s),(0,i.bF)(c)],64)}const a={class:"container"},u=["src","alt"],s=["innerHTML"];function c(e,t,r,n,o,c){return(0,i.uX)(),(0,i.CE)("div",a,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.images,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{class:"item",key:t},[(0,i.Lk)("img",{src:e.src,alt:e.alt},null,8,u),(0,i.Lk)("div",{class:"texte",innerHTML:e.text},null,8,s)])))),128))])}var d=r(263),l={name:"GalerieDeDOeuvres",data(){return{images:[{id:1,src:r(416),title:"Image 1",text:""},{id:2,src:r(81),title:"Image 2",text:""},{id:3,src:r(682),title:"Image 3",text:""},{id:4,src:r(699),title:"Image 4",text:""}]}},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new d.A;for(let n of this.images)try{const t=await r(936)(`./text${n.id}.md`);n.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${n.id}:`,t)}}}},f=r(262);const v=(0,f.A)(l,[["render",c],["__scopeId","data-v-27a23081"]]);var p=v;const m={class:"section full-screen"};function g(e,t,r,n,o,a){return(0,i.uX)(),(0,i.CE)("div",m,[t[1]||(t[1]=(0,i.Lk)("h1",{class:"title"},"Expo",-1)),t[2]||(t[2]=(0,i.Lk)("h2",{class:"subtitle"},"Par : Geoffrey posé, Mathilde Dupont, Grégoire Xavier et Eugène Delacroix",-1)),t[3]||(t[3]=(0,i.Lk)("p",{class:"header-text"},[(0,i.eW)(" Nous vous invitons à contempler ces images avec un regard curieux et émerveillé, à ressentir l'atmosphère mystique qu'elles dégagent et à réfléchir à leur signification dans le contexte historique et culturel du Moyen Âge. Que vous soyez passionné d'art, d'histoire ou simplement curieux, cette exposition est une occasion unique de redécouvrir un patrimoine souvent méconnu."),(0,i.Lk)("br"),(0,i.Lk)("br"),(0,i.eW)(" Laissez-vous transporter par la magie des vitraux et la lumière qu'ils diffusent, et rejoignez-nous pour célébrer l'héritage artistique de nos ancêtres. "),(0,i.Lk)("br"),(0,i.Lk)("br"),(0,i.eW)(" Venez explorer, admirer et vous émerveiller devant ces Lumières du Moyen Âge ! ")],-1)),(0,i.Lk)("div",{class:"arrow-down",onClick:t[0]||(t[0]=(...e)=>a.scrollToNextSection&&a.scrollToNextSection(...e))},"↓")])}var h={name:"HeaderWithArrow",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},body:{type:String,required:!0}},methods:{scrollToNextSection(){const e=this.$el.nextElementSibling;e&&e.scrollIntoView({behavior:"smooth"})}}};const b=(0,f.A)(h,[["render",g]]);var x=b;const y={class:"footer"};function k(e,t,r,n,o,a){return(0,i.uX)(),(0,i.CE)("footer",y,t[0]||(t[0]=[(0,i.Fv)('<div class="container" data-v-0efb95dc><div class="hours-and-link" data-v-0efb95dc><div class="hours" data-v-0efb95dc><h2 data-v-0efb95dc>Heures d&#39;ouverture</h2><ul data-v-0efb95dc><li data-v-0efb95dc>Lundi - Vendredi: 9h00 - 18h00</li><li data-v-0efb95dc>Samedi: 10h00 - 17h00</li><li data-v-0efb95dc>Dimanche: Fermé</li></ul></div><div class="site-link" data-v-0efb95dc><a href="https://attadeurtia.github.io/blog/" target="_blank" data-v-0efb95dc>Auteur</a></div></div></div>',1)]))}var w={name:"FooterHeures"};const E=(0,f.A)(w,[["render",k],["__scopeId","data-v-0efb95dc"]]);var L=E,O={name:"App",components:{ImageWithText:p,HeaderWithArrow:x,FooterHeures:L}};const j=(0,f.A)(O,[["render",o]]);var T=j;(0,n.Ef)(T).mount("#app")},936:function(e,t,r){var n={"./text1.md":[116,116],"./text2.md":[761,761],"./text3.md":[346,346],"./text4.md":[175,175],"./text5.md":[648,648]};function i(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return r.e(t[1]).then((function(){return r(i)}))}i.keys=function(){return Object.keys(n)},i.id=936,e.exports=i},416:function(e,t,r){"use strict";e.exports=r.p+"img/image1.a43ede3f.jpeg"},81:function(e,t,r){"use strict";e.exports=r.p+"img/image2.2a0176fc.jpeg"},682:function(e,t,r){"use strict";e.exports=r.p+"img/image3.7bd792f0.jpeg"},699:function(e,t,r){"use strict";e.exports=r.p+"img/image4.e3e68840.jpeg"}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,o){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],o=e[d][2];for(var u=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(u=!1,o<a&&(a=o));if(u){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,i,o]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{116:"e32c0856",175:"ac6c7770",346:"54719c5b",648:"0fc05eb4",761:"377ba522"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="expo:";r.l=function(n,i,o,a){if(e[n])e[n].push(i);else{var u,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+o){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.setAttribute("data-webpack",t+o),u.src=n),e[n]=[i];var f=function(t,r){u.onerror=u.onload=null,clearTimeout(v);var i=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(e){return e(r)})),t)return t(r)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/exposition/"}(),function(){var e={524:0};r.f.j=function(t,n){var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise((function(r,n){i=e[t]=[r,n]}));n.push(i[2]=o);var a=r.p+r.u(t),u=new Error,s=function(n){if(r.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,i[1](u)}};r.l(a,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,a=n[0],u=n[1],s=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in u)r.o(u,i)&&(r.m[i]=u[i]);if(s)var d=s(r)}for(t&&t(n);c<a.length;c++)o=a[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self["webpackChunkexpo"]=self["webpackChunkexpo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(578)}));n=r.O(n)})();
//# sourceMappingURL=app.a31f8fa2.js.map