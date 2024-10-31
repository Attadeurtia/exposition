(function(){var e={7754:function(e,t,a){"use strict";var r=a(3751),n=a(641);function o(e,t){const a=(0,n.g2)("RouterLink"),r=(0,n.g2)("RouterView");return(0,n.uX)(),(0,n.CE)(n.FK,null,[t[1]||(t[1]=(0,n.Lk)("div",{id:"app"},null,-1)),(0,n.bF)(a,{to:{name:"homepage"}},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Entrez dans l'expo")]))),_:1}),t[2]||(t[2]=(0,n.eW)("- ")),(0,n.bF)(r)],64)}var s=a(6262);const i={},l=(0,s.A)(i,[["render",o]]);var c=l,d=a(5220);function u(e,t,a,r,o,s){const i=(0,n.g2)("HeaderWithArrow"),l=(0,n.g2)("MapComponent"),c=(0,n.g2)("DuchessesTimeline"),d=(0,n.g2)("FooterHeures"),u=(0,n.g2)("RouterLink");return(0,n.uX)(),(0,n.CE)(n.FK,null,[t[1]||(t[1]=(0,n.Lk)("div",{id:"HomePage"},null,-1)),(0,n.bF)(i),(0,n.bF)(l),(0,n.bF)(c),(0,n.bF)(d),(0,n.bF)(u,{to:{name:"newpage"}},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Go to new page")]))),_:1})],64)}const p={class:"section full-screen"};function g(e,t,a,r,o,s){return(0,n.uX)(),(0,n.CE)("div",p,[(0,n.Lk)("h1",{class:"title",onClick:t[0]||(t[0]=(...e)=>s.goToNewPage&&s.goToNewPage(...e))},"Exposition : les Duchesses de Bretagne"),t[2]||(t[2]=(0,n.Lk)("h2",{class:"subtitle"},"Par : Nathan Trebert, Geoffrey Posé, Cathy Lebougre, Léocadie Prugne, Julien Foulon et Leo Vincent ",-1)),t[3]||(t[3]=(0,n.Lk)("p",{class:"header-text"},[(0,n.eW)(" Bienvenue dans notre exposition virtuelle dédiée aux duchesses de Bretagne, figures emblématiques de l'histoire et de la culture bretonnes. À travers les siècles, ces femmes puissantes ont non seulement façonné le destin de leur région, mais ont également inspiré de nombreux artistes, qui ont immortalisé leur image et leur héritage dans des œuvres iconographiques variées. "),(0,n.Lk)("br"),(0,n.Lk)("br"),(0,n.eW)(" Cette exposition vous invite à explorer la richesse des représentations artistiques des duchesses de Bretagne, allant des portraits royaux aux illustrations médiévales, en passant par les sculptures et les gravures. Chaque œuvre témoigne de l'importance de ces femmes dans la société bretonne et française, tout en reflétant les styles artistiques de leur époque. "),(0,n.Lk)("br"),(0,n.Lk)("br"),(0,n.eW)(" En parcourant cette exposition, vous découvrirez non seulement les histoires fascinantes de ces duchesses, mais aussi l'évolution de leur représentation à travers l'art. Nous espérons que cette immersion dans le patrimoine visuel breton vous inspirera et vous permettra d'apprécier davantage l'héritage culturel de cette région unique. "),(0,n.Lk)("br"),(0,n.Lk)("br"),(0,n.eW)(" Nous vous souhaitons une agréable visite ! ")],-1)),(0,n.Lk)("div",{class:"arrow-down",onClick:t[1]||(t[1]=(...e)=>s.scrollToNextSection&&s.scrollToNextSection(...e))},"↓")])}a(4114);var f={name:"HeaderWithArrow",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},body:{type:String,required:!0}},methods:{goToNewPage(){this.$router.push({name:"newpage"})},scrollToNextSection(){const e=this.$el.nextElementSibling;e&&e.scrollIntoView({behavior:"smooth"})}}};const m=(0,s.A)(f,[["render",g]]);var h=m;const v={class:"footer"};function k(e,t,a,r,o,s){return(0,n.uX)(),(0,n.CE)("footer",v,t[0]||(t[0]=[(0,n.Fv)('<div class="container" data-v-0efb95dc><div class="hours-and-link" data-v-0efb95dc><div class="hours" data-v-0efb95dc><h2 data-v-0efb95dc>Heures d&#39;ouverture</h2><ul data-v-0efb95dc><li data-v-0efb95dc>Lundi - Vendredi: 9h00 - 18h00</li><li data-v-0efb95dc>Samedi: 10h00 - 17h00</li><li data-v-0efb95dc>Dimanche: Fermé</li></ul></div><div class="site-link" data-v-0efb95dc><a href="https://attadeurtia.github.io/blog/" target="_blank" data-v-0efb95dc>Auteur</a></div></div></div>',1)]))}var x={name:"FooterHeures"};const b=(0,s.A)(x,[["render",k],["__scopeId","data-v-0efb95dc"]]);var L=b,w=a(33);const y={class:"map-container"},F={class:"map-wrapper"};function C(e,t,a,r,o,s){const i=(0,n.g2)("l-tile-layer"),l=(0,n.g2)("l-popup"),c=(0,n.g2)("l-marker"),d=(0,n.g2)("l-map");return(0,n.uX)(),(0,n.CE)("div",y,[(0,n.Lk)("div",F,[(0,n.bF)(d,{ref:"map",zoom:o.zoom,center:o.center,style:{height:"100%",width:"100%"}},{default:(0,n.k6)((()=>[(0,n.bF)(i,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.points,((e,t)=>((0,n.uX)(),(0,n.Wv)(c,{key:t,"lat-lng":[e.lat,e.lng],onClick:t=>s.onMarkerClick(e)},{default:(0,n.k6)((()=>[(0,n.bF)(l,null,{default:(0,n.k6)((()=>[(0,n.Lk)("div",null,(0,w.v_)(e.name),1)])),_:2},1024)])),_:2},1032,["lat-lng","onClick"])))),128))])),_:1},8,["zoom","center"])])])}var M=a(8061),E={name:"MapComponent",components:{LMap:M.Do,LTileLayer:M.a,LMarker:M.li,LPopup:M.nA},data(){return{center:[47.41322,-1.219482],zoom:10,points:[{name:"Anne de Bretagne",lat:47.41322,lng:-1.219482,route:"/anne-de-bretagne"},{name:"Françoise d'Amboise",lat:47.4135,lng:-1.219,route:"/Françoise-d-Amboise"},{name:"Marguerite De Bretagne",lat:47.414,lng:-1.2185,route:"/Marguerite-de-Bretagne"},{name:"Jeanne de Flandres",lat:47.42,lng:-1.3,route:"/Jeanne-de-Flandrese"},{name:"Jeanne-de-Penthièvre",lat:48.414,lng:-1.3185,route:"/Jeanne-de-Penthièvre"}]}},methods:{onMarkerClick(e){this.$router.push(e.route)}}};const A=(0,s.A)(E,[["render",C],["__scopeId","data-v-5a2d56e2"]]);var P=A;const T={class:"group group-2c511b0c6507"},_={class:"duchesses-container"},I={class:"card-anne-de-bretagne"},j={class:"card-Jeanne-de-Penthièvre"},B={class:"card-Françoise-d-Amboise"},O={class:"card-Marguerite-de-Bretagne"},X={class:"card-Jeanne-de-Flandres"};function J(e,t,a,r,o,s){const i=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",T,[(0,n.Lk)("div",_,[(0,n.Lk)("div",I,[(0,n.bF)(i,{to:"/anne-de-bretagne",class:"card"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.Lk)("h2",null,"Anne de Bretagne",-1),(0,n.Lk)("p",null,"Nathan",-1)]))),_:1})]),(0,n.Lk)("div",j,[(0,n.bF)(i,{to:"/Jeanne-de-Penthièvre",class:"card"},{default:(0,n.k6)((()=>t[1]||(t[1]=[(0,n.Lk)("h2",null,"Jeanne de Penthièvre",-1),(0,n.Lk)("p",null,"Léocadie",-1)]))),_:1})]),(0,n.Lk)("div",B,[(0,n.bF)(i,{to:"/Françoise-d-Amboise",class:"card"},{default:(0,n.k6)((()=>t[2]||(t[2]=[(0,n.Lk)("h2",null,"Françoise d’Amboise",-1),(0,n.Lk)("p",null,"Julien",-1)]))),_:1})]),(0,n.Lk)("div",O,[(0,n.bF)(i,{to:"/Marguerite-de-Bretagne",class:"card"},{default:(0,n.k6)((()=>t[3]||(t[3]=[(0,n.Lk)("h2",null,"Marguerite de Bretagne",-1),(0,n.Lk)("p",null,"Geoffrey",-1)]))),_:1})]),(0,n.Lk)("div",X,[(0,n.bF)(i,{to:"/Jeanne-de-Flandres",class:"card"},{default:(0,n.k6)((()=>t[4]||(t[4]=[(0,n.Lk)("h2",null,"Jeanne de Flandres",-1),(0,n.Lk)("p",null,"Cathy",-1)]))),_:1})])]),t[5]||(t[5]=(0,n.Lk)("div",{class:"shape rect rectangle-2c43b97b4548"},null,-1)),t[6]||(t[6]=(0,n.Lk)("div",{class:"shape rect rectangle-2c4f8b69fbc6"},null,-1)),t[7]||(t[7]=(0,n.Lk)("div",{class:"shape rect rectangle-2c4f8c4fba3f"},null,-1))])}var H={name:"DucessesTimeline"};const D=(0,s.A)(H,[["render",J],["__scopeId","data-v-6f3a6a2b"]]);var N=D,q={name:"HomePage",components:{HeaderWithArrow:h,MapComponent:P,FooterHeures:L,DuchessesTimeline:N}};const K=(0,s.A)(q,[["render",u]]);var S=K;function z(e,t,a,r,o,s){return(0,n.uX)(),(0,n.CE)("div",null,t[0]||(t[0]=[(0,n.Lk)("h1",null,"Welcome to the Home Page",-1),(0,n.Lk)("p",null,"Click the link to go to the new page.",-1)]))}var $={name:"NewPage"};const W=(0,s.A)($,[["render",z]]);var U=W;const V={class:"container"},G=["src","alt"],R={class:"shape rect rectangle-32bfb2516c1d"},Q=["innerHTML"];function Y(e,t,a,r,o,s){const i=(0,n.g2)("MapComponent"),l=(0,n.g2)("CartelPenpot");return(0,n.uX)(),(0,n.CE)(n.FK,null,[t[4]||(t[4]=(0,n.Lk)("h1",{class:"titre"},"Anne de Bretagne",-1)),t[5]||(t[5]=(0,n.Lk)("p",null,"Duchesse de Bretagne et reine de France, elle a joué un rôle clé dans l'histoire de la Bretagne.",-1)),(0,n.bF)(i),(0,n.bF)(l),(0,n.Lk)("div",V,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.images,((e,a)=>((0,n.uX)(),(0,n.CE)("div",{class:"item",key:a},[(0,n.Lk)("img",{src:e.src,alt:e.alt},null,8,G),(0,n.Lk)("div",R,[t[0]||(t[0]=(0,n.Lk)("div",{class:"shape circle ellipse-haut-droite"},null,-1)),t[1]||(t[1]=(0,n.Lk)("div",{class:"shape circle ellipse-haut-gauche"},null,-1)),t[2]||(t[2]=(0,n.Lk)("div",{class:"shape circle ellipse-bas-droite"},null,-1)),t[3]||(t[3]=(0,n.Lk)("div",{class:"shape circle ellipse-bas-gauche"},null,-1)),(0,n.Lk)("div",{class:"texte",innerHTML:e.text},null,8,Q)])])))),128))])],64)}var Z=a(3263);function ee(e,t,a,r,o,s){return(0,n.uX)(),(0,n.CE)(n.FK,null,[t[0]||(t[0]=(0,n.Lk)("div",{class:"shape text le-gardien-32c1c4a030fe"},[(0,n.Lk)("div",{class:"text-node-html",id:"html-text-node-1adf192a-797d-8026-8005-32c1c4a030fe","data-x":"4630","data-y":"580"},[(0,n.Lk)("div",{class:"root rich-text root-0",style:{display:"flex","white-space":"break-spaces","align-items":"flex-start"},xmlns:"http://www.w3.org/1999/xhtml"},[(0,n.Lk)("div",{class:"paragraph-set root-0-paragraph-set-0"},[(0,n.Lk)("p",{class:"paragraph root-0-paragraph-set-0-paragraph-0",dir:"ltr"},[(0,n.Lk)("span",{class:"text-node root-0-paragraph-set-0-paragraph-0-text-0",style:{color:"rgba(0, 0, 0, 1)","text-transform":"none","line-break":"auto","overflow-wrap":"initial","white-space":"pre","font-size":"50px","text-rendering":"geometricPrecision","caret-color":"rgba(0, 0, 0, 1)","text-decoration":"none","--font-id":"gfont-unna","--fills":'[["^ ","~:fill-color","#000000","~:fill-opacity",1]]',"letter-spacing":"0px","font-family":'"Unna"',"font-style":"italic","font-weight":"400"}},"Le gardien de la Nuit, 1589")])])])])],-1)),t[1]||(t[1]=(0,n.Lk)("div",{class:"shape rect rectangle-32bfb2516c1d"},null,-1)),t[2]||(t[2]=(0,n.Lk)("div",{class:"shape text linogravur-32c21981bb45"},[(0,n.Lk)("div",{class:"text-node-html",id:"html-text-node-1adf192a-797d-8026-8005-32c21981bb45","data-x":"4630","data-y":"666"},[(0,n.Lk)("div",{class:"root rich-text root-0",style:{display:"flex","white-space":"break-spaces","align-items":"flex-start"},xmlns:"http://www.w3.org/1999/xhtml"},[(0,n.Lk)("div",{class:"paragraph-set root-0-paragraph-set-0"},[(0,n.Lk)("p",{class:"paragraph root-0-paragraph-set-0-paragraph-0",dir:"ltr"},[(0,n.Lk)("span",{class:"text-node root-0-paragraph-set-0-paragraph-0-text-0",style:{color:"rgba(0, 0, 0, 1)","text-transform":"none","line-break":"auto","overflow-wrap":"initial","white-space":"break-spaces","font-size":"40px","text-rendering":"geometricPrecision","caret-color":"rgba(0, 0, 0, 1)","text-decoration":"none","--font-id":"gfont-unna","--fills":'[["^ ","~:fill-color","#000000","~:fill-opacity",1]]',"letter-spacing":"0px","font-family":'"Unna"',"font-style":"normal","font-weight":"400"}},"Linogravure imprimée sur papier vélin, format 18 x 27 cm, issue de la série Les animaux fantasmagoriques")]),(0,n.Lk)("p",{class:"paragraph root-0-paragraph-set-0-paragraph-1",dir:"ltr"},[(0,n.Lk)("span",{class:"text-node root-0-paragraph-set-0-paragraph-1-text-0",style:{color:"rgba(0, 0, 0, 1)","text-transform":"none","line-break":"auto","overflow-wrap":"initial","white-space":"break-spaces","font-size":"40px","text-rendering":"geometricPrecision","caret-color":"rgba(0, 0, 0, 1)","text-decoration":"none","--font-id":"gfont-unna","--fills":'[["^ ","~:fill-color","#000000","~:fill-opacity",1]]',"letter-spacing":"0px","font-family":'"Unna"',"font-style":"normal","font-weight":"400"}},"Estampe numérotée 23/50")])])])])],-1)),t[3]||(t[3]=(0,n.Lk)("div",{class:"shape circle ellipse-32c015a015e2"},null,-1)),t[4]||(t[4]=(0,n.Lk)("div",{class:"shape circle ellipse-32c020bdf09f"},null,-1)),t[5]||(t[5]=(0,n.Lk)("div",{class:"shape text don-anonym-32c2e2df6487"},[(0,n.Lk)("div",{class:"text-node-html",id:"html-text-node-1adf192a-797d-8026-8005-32c2e2df6487","data-x":"4630","data-y":"873"},[(0,n.Lk)("div",{class:"root rich-text root-0",style:{display:"flex","white-space":"break-spaces","align-items":"flex-start"},xmlns:"http://www.w3.org/1999/xhtml"},[(0,n.Lk)("div",{class:"paragraph-set root-0-paragraph-set-0"},[(0,n.Lk)("p",{class:"paragraph root-0-paragraph-set-0-paragraph-0",dir:"ltr"},[(0,n.Lk)("span",{class:"text-node root-0-paragraph-set-0-paragraph-0-text-0",style:{color:"rgba(0, 0, 0, 1)","text-transform":"none","line-break":"auto","overflow-wrap":"initial","white-space":"pre","font-size":"30px","text-rendering":"geometricPrecision","caret-color":"rgba(0, 0, 0, 1)","text-decoration":"none","--font-id":"gfont-unna","--fills":'[["^ ","~:fill-color","#000000","~:fill-opacity",1]]',"letter-spacing":"0px","font-family":'"Unna"',"font-style":"normal","font-weight":"400"}},"Don anonyme, Galerie Nichol & Jabert, Montpellier")])])])])],-1)),t[6]||(t[6]=(0,n.Lk)("div",{class:"shape circle ellipse-32c0249f20d2"},null,-1)),t[7]||(t[7]=(0,n.Lk)("div",{class:"shape text lonard-de-32c127343d9e"},[(0,n.Lk)("div",{class:"text-node-html",id:"html-text-node-1adf192a-797d-8026-8005-32c127343d9e","data-x":"4630","data-y":"428"},[(0,n.Lk)("div",{class:"root rich-text root-0",style:{display:"flex","white-space":"break-spaces","align-items":"flex-start"},xmlns:"http://www.w3.org/1999/xhtml"},[(0,n.Lk)("div",{class:"paragraph-set root-0-paragraph-set-0"},[(0,n.Lk)("p",{class:"paragraph root-0-paragraph-set-0-paragraph-0",dir:"ltr"},[(0,n.Lk)("span",{class:"text-node root-0-paragraph-set-0-paragraph-0-text-0",style:{color:"rgba(0, 0, 0, 1)","text-transform":"none","line-break":"auto","overflow-wrap":"initial","white-space":"pre","font-size":"50px","text-rendering":"geometricPrecision","caret-color":"rgba(0, 0, 0, 1)","text-decoration":"none","--font-id":"gfont-unna","--fills":'[["^ ","~:fill-color","#000000","~:fill-opacity",1]]',"letter-spacing":"0px","font-family":'"Unna"',"font-style":"normal","font-weight":"400"}},"Léonard de Vinci ")])])])])],-1)),t[8]||(t[8]=(0,n.Lk)("div",{class:"shape text c-14701680-32c1728036d7"},[(0,n.Lk)("div",{class:"text-node-html",id:"html-text-node-1adf192a-797d-8026-8005-32c1728036d7","data-x":"4630","data-y":"484"},[(0,n.Lk)("div",{class:"root rich-text root-0",style:{display:"flex","white-space":"break-spaces","align-items":"flex-start"},xmlns:"http://www.w3.org/1999/xhtml"},[(0,n.Lk)("div",{class:"paragraph-set root-0-paragraph-set-0"},[(0,n.Lk)("p",{class:"paragraph root-0-paragraph-set-0-paragraph-0",dir:"ltr"},[(0,n.Lk)("span",{class:"text-node root-0-paragraph-set-0-paragraph-0-text-0",style:{color:"rgba(0, 0, 0, 1)","text-transform":"none","line-break":"auto","overflow-wrap":"initial","white-space":"pre","font-size":"40px","text-rendering":"geometricPrecision","caret-color":"rgba(0, 0, 0, 1)","text-decoration":"none","--font-id":"gfont-unna","--fills":'[["^ ","~:fill-color","#000000","~:fill-opacity",1]]',"letter-spacing":"0px","font-family":'"Unna"',"font-style":"normal","font-weight":"400"}},"1470-1680")])])])])],-1)),t[9]||(t[9]=(0,n.Lk)("div",{class:"shape circle ellipse-32bfbe81a83b"},null,-1))],64)}var te={name:"CartelPenpot"};const ae=(0,s.A)(te,[["render",ee],["__scopeId","data-v-2c83c96a"]]);var re=ae,ne={name:"AnneDeBretagne",components:{MapComponent:P,CartelPenpot:re},data(){return{images:[{id:1,src:a(4416),title:"Image 1",text:""},{id:2,src:a(2081),title:"Image 2",text:""},{id:3,src:a(4682),title:"Image 3",text:""},{id:4,src:a(4699),title:"Image 4",text:""}]}},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new Z.A;for(let r of this.images)try{const t=await a(7936)(`./text${r.id}.md`);r.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${r.id}:`,t)}}}};const oe=(0,s.A)(ne,[["render",Y]]);var se=oe;const ie={class:"container"},le=["src","alt"],ce=["innerHTML"];function de(e,t,a,r,o,s){return(0,n.uX)(),(0,n.CE)(n.FK,null,[t[0]||(t[0]=(0,n.Lk)("h1",null,"Marguerite de Bretagne",-1)),t[1]||(t[1]=(0,n.Lk)("p",null,"Duchesse de Bretagne et reine de France, elle a joué un rôle clé dans l'histoire de la Bretagne.",-1)),(0,n.Lk)("div",ie,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.images,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"item",key:t},[(0,n.Lk)("img",{src:e.src,alt:e.alt},null,8,le),(0,n.Lk)("div",{class:"texte",innerHTML:e.text},null,8,ce)])))),128))])],64)}var ue={name:"MargueriteDeBretagne",data(){return{images:[{id:1,src:a(4416),title:"Image 1",text:""},{id:2,src:a(2081),title:"Image 2",text:""},{id:3,src:a(4682),title:"Image 3",text:""},{id:4,src:a(4699),title:"Image 4",text:""}]}},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new Z.A;for(let r of this.images)try{const t=await a(7936)(`./text${r.id}.md`);r.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${r.id}:`,t)}}}};const pe=(0,s.A)(ue,[["render",de],["__scopeId","data-v-7f2e60ca"]]);var ge=pe;const fe={class:"container"},me=["src","alt"],he=["innerHTML"];function ve(e,t,a,r,o,s){return(0,n.uX)(),(0,n.CE)(n.FK,null,[t[0]||(t[0]=(0,n.Lk)("h1",null,"Françoise d’Amboise",-1)),t[1]||(t[1]=(0,n.Lk)("p",null,"Duchesse de Bretagne et reine de France, elle a joué un rôle clé dans l'histoire de la Bretagne.",-1)),(0,n.Lk)("div",fe,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.images,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"item",key:t},[(0,n.Lk)("img",{src:e.src,alt:e.alt},null,8,me),(0,n.Lk)("div",{class:"texte",innerHTML:e.text},null,8,he)])))),128))])],64)}var ke={name:"FrançoisedAmboise",data(){return{images:[{id:1,src:a(4416),title:"Image 1",text:""},{id:2,src:a(2081),title:"Image 2",text:""},{id:3,src:a(4682),title:"Image 3",text:""},{id:4,src:a(4699),title:"Image 4",text:""}]}},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new Z.A;for(let r of this.images)try{const t=await a(7936)(`./text${r.id}.md`);r.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${r.id}:`,t)}}}};const xe=(0,s.A)(ke,[["render",ve],["__scopeId","data-v-0c0c201c"]]);var be=xe;const Le={class:"container"},we=["src","alt"],ye=["innerHTML"];function Fe(e,t,a,r,o,s){return(0,n.uX)(),(0,n.CE)(n.FK,null,[t[0]||(t[0]=(0,n.Lk)("h1",null,"Jeanne de Flandres",-1)),t[1]||(t[1]=(0,n.Lk)("p",null,"Duchesse de Bretagne et reine de France, elle a joué un rôle clé dans l'histoire de la Bretagne.",-1)),(0,n.Lk)("div",Le,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.images,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"item",key:t},[(0,n.Lk)("img",{src:e.src,alt:e.alt},null,8,we),(0,n.Lk)("div",{class:"texte",innerHTML:e.text},null,8,ye)])))),128))])],64)}var Ce={name:"JeanneDeFlandres",data(){return{images:[{id:1,src:a(4416),title:"Image 1",text:""},{id:2,src:a(2081),title:"Image 2",text:""},{id:3,src:a(4682),title:"Image 3",text:""},{id:4,src:a(4699),title:"Image 4",text:""}]}},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new Z.A;for(let r of this.images)try{const t=await a(7936)(`./text${r.id}.md`);r.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${r.id}:`,t)}}}};const Me=(0,s.A)(Ce,[["render",Fe],["__scopeId","data-v-6781cd6e"]]);var Ee=Me;const Ae={class:"container"},Pe=["src","alt"],Te=["innerHTML"];function _e(e,t,a,r,o,s){return(0,n.uX)(),(0,n.CE)(n.FK,null,[t[0]||(t[0]=(0,n.Lk)("h1",null,"Jeanne de Penthièvre",-1)),t[1]||(t[1]=(0,n.Lk)("p",null,"Duchesse de Bretagne et reine de France, elle a joué un rôle clé dans l'histoire de la Bretagne.",-1)),(0,n.Lk)("div",Ae,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.images,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"item",key:t},[(0,n.Lk)("img",{src:e.src,alt:e.alt},null,8,Pe),(0,n.Lk)("div",{class:"texte",innerHTML:e.text},null,8,Te)])))),128))])],64)}var Ie={name:"JeanneDePenthievre",data(){return{images:[{id:1,src:a(4416),title:"Image 1",text:""},{id:2,src:a(2081),title:"Image 2",text:""},{id:3,src:a(4682),title:"Image 3",text:""},{id:4,src:a(4699),title:"Image 4",text:""}]}},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new Z.A;for(let r of this.images)try{const t=await a(7936)(`./text${r.id}.md`);r.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${r.id}:`,t)}}}};const je=(0,s.A)(Ie,[["render",_e],["__scopeId","data-v-4403309e"]]);var Be=je;const Oe=[{path:"/",component:c},{path:"/homepage",component:S,name:"homepage"},{path:"/newpage",component:U,name:"newpage"},{path:"/anne-de-bretagne",component:se,name:"anne-de-bretagne"},{path:"/Marguerite-de-Bretagne",component:ge,name:"Marguerite-de-Bretagne"},{path:"/Françoise-d-Amboise",component:be,name:"Françoise-d-Amboise"},{path:"/Jeanne-de-Flandrese",component:Ee,name:"Jeanne-de-Flandres"},{path:"/Jeanne-de-Penthièvre",component:Be,name:"Jeanne-de-Penthièvre"}],Xe=(0,d.aE)({history:(0,d.LA)("/exposition/"),routes:Oe});(0,r.Ef)(c).use(Xe).mount("#app")},7936:function(e,t,a){var r={"./text1.md":[8116,116],"./text2.md":[7761,761],"./text3.md":[9346,346],"./text4.md":[4175,175],"./text5.md":[4648,648]};function n(e){if(!a.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return a.e(t[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(r)},n.id=7936,e.exports=n},4416:function(e,t,a){"use strict";e.exports=a.p+"img/image1.a43ede3f.jpeg"},2081:function(e,t,a){"use strict";e.exports=a.p+"img/image2.2a0176fc.jpeg"},4682:function(e,t,a){"use strict";e.exports=a.p+"img/image3.7bd792f0.jpeg"},4699:function(e,t,a){"use strict";e.exports=a.p+"img/image4.e3e68840.jpeg"}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,o){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],o=e[d][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};a.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"===typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"===typeof r.then)return r}var o=Object.create(null);a.r(o);var s={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){s[e]=function(){return r[e]}}));return s["default"]=function(){return r},a.d(o,s),o}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{8:"188c8c39",24:"0e1cf9be",71:"e3b092fd",116:"0a2f8426",175:"cff023a5",249:"bdecd7b6",346:"eaca278b",481:"4ae18a8b",648:"219dade2",761:"f1c80ae6"}[e]+".js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="expo:";a.l=function(r,n,o,s){if(e[r])e[r].push(n);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+o){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[n];var p=function(t,a){i.onerror=i.onload=null,clearTimeout(g);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(a)})),t)return t(a)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/exposition/"}(),function(){var e={524:0};a.f.j=function(t,r){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(a,r){n=e[t]=[a,r]}));r.push(n[2]=o);var s=a.p+a.u(t),i=new Error,l=function(r){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,n[1](i)}};a.l(s,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,s=r[0],i=r[1],l=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var d=l(a)}for(t&&t(r);c<s.length;c++)o=s[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},r=self["webpackChunkexpo"]=self["webpackChunkexpo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(7754)}));r=a.O(r)})();
//# sourceMappingURL=app.34e2ffbf.js.map