(function(){var e={406:function(e,t,r){"use strict";var n=r(751),o=r(641);function i(e,t,r,n,i,u){const s=(0,o.g2)("HeaderWithArrow"),a=(0,o.g2)("ImageWithText"),c=(0,o.g2)("FooterHeures");return(0,o.uX)(),(0,o.CE)(o.FK,null,[t[0]||(t[0]=(0,o.Lk)("div",{id:"app"},null,-1)),(0,o.bF)(s),(0,o.bF)(a),(0,o.bF)(c)],64)}const u={class:"container"},s=["src","alt"],a=["innerHTML"];function c(e,t,r,n,i,c){return(0,o.uX)(),(0,o.CE)("div",u,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.images,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"item",key:t},[(0,o.Lk)("img",{src:e.src,alt:e.alt},null,8,s),(0,o.Lk)("div",{class:"texte",innerHTML:e.text},null,8,a)])))),128))])}var l=r(263),d={name:"GalerieDeDOeuvres",data(){return{images:[{id:1,src:r(416),title:"Image 1",text:""},{id:2,src:r(81),title:"Image 2",text:""},{id:3,src:r(682),title:"Image 3",text:""},{id:4,src:r(699),title:"Image 4",text:""}]}},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new l.A;for(let n of this.images)try{const t=await r(936)(`./text${n.id}.md`);n.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${n.id}:`,t)}}}},f=r(262);const p=(0,f.A)(d,[["render",c]]);var m=p;const v={class:"section full-screen"};function g(e,t,r,n,i,u){return(0,o.uX)(),(0,o.CE)("div",v,[t[1]||(t[1]=(0,o.Lk)("h1",{class:"title"},"Expo",-1)),t[2]||(t[2]=(0,o.Lk)("h2",{class:"subtitle"},"Par : Geoffrey posé, Mathilde Dupont, Grégoire Xavier et Eugène Delacroix",-1)),t[3]||(t[3]=(0,o.Lk)("p",{class:"header-text"},[(0,o.eW)(" Nous vous invitons à contempler ces images avec un regard curieux et émerveillé, à ressentir l'atmosphère mystique qu'elles dégagent et à réfléchir à leur signification dans le contexte historique et culturel du Moyen Âge. Que vous soyez passionné d'art, d'histoire ou simplement curieux, cette exposition est une occasion unique de redécouvrir un patrimoine souvent méconnu."),(0,o.Lk)("br"),(0,o.Lk)("br"),(0,o.eW)(" Laissez-vous transporter par la magie des vitraux et la lumière qu'ils diffusent, et rejoignez-nous pour célébrer l'héritage artistique de nos ancêtres. "),(0,o.Lk)("br"),(0,o.Lk)("br"),(0,o.eW)(" Venez explorer, admirer et vous émerveiller devant ces Lumières du Moyen Âge ! ")],-1)),(0,o.Lk)("div",{class:"arrow-down",onClick:t[0]||(t[0]=(...e)=>u.scrollToNextSection&&u.scrollToNextSection(...e))},"↓")])}var h={name:"HeaderWithArrow",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},body:{type:String,required:!0}},methods:{scrollToNextSection(){const e=this.$el.nextElementSibling;e&&e.scrollIntoView({behavior:"smooth"})}}};const b=(0,f.A)(h,[["render",g]]);var x=b;const k={class:"footer"};function y(e,t,r,n,i,u){return(0,o.uX)(),(0,o.CE)("footer",k,t[0]||(t[0]=[(0,o.Lk)("div",{class:"container"},[(0,o.Lk)("h2",null,"Heures d'ouverture"),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,"Lundi - Vendredi: 9h00 - 18h00"),(0,o.Lk)("li",null,"Samedi: 10h00 - 17h00"),(0,o.Lk)("li",null,"Dimanche: Fermé")])],-1)]))}var w={name:"FooterHeures"};const L=(0,f.A)(w,[["render",y],["__scopeId","data-v-1b751ff9"]]);var E=L,O={name:"App",components:{ImageWithText:m,HeaderWithArrow:x,FooterHeures:E}};const j=(0,f.A)(O,[["render",i]]);var T=j;(0,n.Ef)(T).mount("#app")},936:function(e,t,r){var n={"./text1.md":[116,116],"./text2.md":[761,761],"./text3.md":[346,346],"./text4.md":[175,175],"./text5.md":[648,648]};function o(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return r.e(t[1]).then((function(){return r(o)}))}o.keys=function(){return Object.keys(n)},o.id=936,e.exports=o},416:function(e,t,r){"use strict";e.exports=r.p+"img/image1.a43ede3f.jpeg"},81:function(e,t,r){"use strict";e.exports=r.p+"img/image2.2a0176fc.jpeg"},682:function(e,t,r){"use strict";e.exports=r.p+"img/image3.7bd792f0.jpeg"},699:function(e,t,r){"use strict";e.exports=r.p+"img/image4.e3e68840.jpeg"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,i){if(!n){var u=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var s=!0,a=0;a<n.length;a++)(!1&i||u>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(s=!1,i<u&&(u=i));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{116:"e32c0856",175:"ac6c7770",346:"54719c5b",648:"0fc05eb4",761:"377ba522"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="expo:";r.l=function(n,o,i,u){if(e[n])e[n].push(o);else{var s,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(a=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[o];var f=function(t,r){s.onerror=s.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),a&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/exposition/"}(),function(){var e={524:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=i);var u=r.p+r.u(t),s=new Error,a=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",s.name="ChunkLoadError",s.type=i,s.request=u,o[1](s)}};r.l(u,a,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,u=n[0],s=n[1],a=n[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(a)var l=a(r)}for(t&&t(n);c<u.length;c++)i=u[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=self["webpackChunkexpo"]=self["webpackChunkexpo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(406)}));n=r.O(n)})();
//# sourceMappingURL=app.400dea2a.js.map