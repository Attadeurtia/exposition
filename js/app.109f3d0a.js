(function(){var e={9803:function(e,t,n){"use strict";var r=n(3751),a=n(641);const s={id:"app"};function o(e,t){const n=(0,a.g2)("RouterView");return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.bF)(n)])}var i=n(6262);const c={},u=(0,i.A)(c,[["render",o]]);var l=u,d=n(5220);function p(e,t,n,r,s,o){const i=(0,a.g2)("HeaderWithArrow"),c=(0,a.g2)("MapComponent"),u=(0,a.g2)("DuchessesTimeline"),l=(0,a.g2)("FooterHeures");return(0,a.uX)(),(0,a.CE)(a.FK,null,[t[0]||(t[0]=(0,a.Lk)("div",{id:"HomePage"},null,-1)),(0,a.bF)(i),(0,a.bF)(c),(0,a.bF)(u),(0,a.bF)(l)],64)}const g={class:"section full-screen"};function m(e,t,n,r,s,o){return(0,a.uX)(),(0,a.CE)("div",g,[(0,a.Lk)("h1",{class:"title",onClick:t[0]||(t[0]=(...e)=>o.goToNewPage&&o.goToNewPage(...e))},"Exposition : les Duchesses de Bretagne"),t[2]||(t[2]=(0,a.Lk)("h2",{class:"subtitle"},"Par : Nathan Trebert, Geoffrey Posé, Cathy Lebougre, Léocadie Prugne, Julien Foulon et Leo Vincent ",-1)),t[3]||(t[3]=(0,a.Lk)("p",{class:"header-text"},[(0,a.eW)(" Bienvenue dans notre exposition virtuelle dédiée aux duchesses de Bretagne, figures emblématiques de l'histoire et de la culture bretonnes. À travers les siècles, ces femmes puissantes ont non seulement façonné le destin de leur région, mais ont également inspiré de nombreux artistes, qui ont immortalisé leur image et leur héritage dans des œuvres iconographiques variées. "),(0,a.Lk)("br"),(0,a.Lk)("br"),(0,a.eW)(" Cette exposition vous invite à explorer la richesse des représentations artistiques des duchesses de Bretagne, allant des portraits royaux aux illustrations médiévales, en passant par les sculptures et les gravures. Chaque œuvre témoigne de l'importance de ces femmes dans la société bretonne et française, tout en reflétant les styles artistiques de leur époque. "),(0,a.Lk)("br"),(0,a.Lk)("br"),(0,a.eW)(" En parcourant cette exposition, vous découvrirez non seulement les histoires fascinantes de ces duchesses, mais aussi l'évolution de leur représentation à travers l'art. Nous espérons que cette immersion dans le patrimoine visuel breton vous inspirera et vous permettra d'apprécier davantage l'héritage culturel de cette région unique. "),(0,a.Lk)("br"),(0,a.Lk)("br"),(0,a.eW)(" Nous vous souhaitons une agréable visite ! ")],-1)),(0,a.Lk)("div",{class:"arrow-down",onClick:t[1]||(t[1]=(...e)=>o.scrollToNextSection&&o.scrollToNextSection(...e))},"↓")])}n(4114);var f={name:"HeaderWithArrow",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},body:{type:String,required:!0}},methods:{goToNewPage(){this.$router.push({name:"newpage"})},scrollToNextSection(){const e=this.$el.nextElementSibling;e&&e.scrollIntoView({behavior:"smooth"})}}};const h=(0,i.A)(f,[["render",m],["__scopeId","data-v-2cdca122"]]);var v=h;const b={class:"footer"};function k(e,t,n,r,s,o){const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("footer",b,[t[3]||(t[3]=(0,a.Lk)("h2",null,"À propos",-1)),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.bF)(i,{to:"/consigne"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Consigne")]))),_:1})]),t[1]||(t[1]=(0,a.Lk)("li",null,[(0,a.Lk)("a",{href:"https://attadeurtia.github.io/blog/",target:"_blank",rel:"noopener noreferrer"},"Technicien")],-1)),t[2]||(t[2]=(0,a.Lk)("li",null,[(0,a.Lk)("a",{href:"https://github.com/Attadeurtia/exposition",target:"_blank",rel:"noopener noreferrer"},"Code source")],-1))])])}var x={name:"FooterHeures"};const L=(0,i.A)(x,[["render",k],["__scopeId","data-v-c4073886"]]);var y=L,j=n(33);const w={class:"group group-2c511b0c6507"},C={class:"duchesses-container"},F={key:0};function _(e,t,n,r,s,o){const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",w,[(0,a.Lk)("div",C,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.duchesses,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.name,class:(0,j.C4)("card-"+e.id)},[(0,a.bF)(i,{to:"/"+e.id,class:"card"},{default:(0,a.k6)((()=>[(0,a.Lk)("h2",null,(0,j.v_)(e.name),1),e.period?((0,a.uX)(),(0,a.CE)("p",F,(0,j.v_)(e.period),1)):(0,a.Q3)("",!0),(0,a.Lk)("p",null,(0,j.v_)(e.author),1)])),_:2},1032,["to"])],2)))),128))]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.rectangles,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:(0,j.C4)(["shape","rect",`rectangle-${e}`])},null,2)))),128))])}var E={name:"DucessesTimeline",data(){return{duchesses:[{id:"Anne-de-Bretagne",name:"Anne de Bretagne",period:"1488-1514",author:"Nathan"},{id:"Jeanne-de-Penthievre",name:"Jeanne de Penthièvre",period:"1341-1365",author:"Léocadie"},{id:"Francoise-d-Amboise",name:"Françoise d'Amboise",author:"Julien"},{id:"Marguerite-de-Bretagne",name:"Marguerite de Bretagne",author:"Geoffrey"},{id:"Jeanne-de-Flandres",name:"Jeanne de Flandres",author:"Cathy"}],rectangles:["2c43b97b4548","2c4f8b69fbc6","2c4f8c4fba3f"]}}};const M=(0,i.A)(E,[["render",_],["__scopeId","data-v-4d0d9fa4"]]);var O=M,T={name:"HomePage",components:{HeaderWithArrow:v,FooterHeures:y,DuchessesTimeline:O}};const A=(0,i.A)(T,[["render",p]]);var B=A;function I(e,t,n,r,s,o){return(0,a.uX)(),(0,a.CE)("div",null,t[0]||(t[0]=[(0,a.Lk)("h1",null,"Welcome to the Home Page",-1),(0,a.Lk)("p",null,"Click the link to go to the new page.",-1)]))}var N={name:"NewPage"};const P=(0,i.A)(N,[["render",I]]);var D=P;const X={class:"container"},J=["src","alt"],q={class:"shape rect rectangle-32bfb2516c1d"},U=["innerHTML"];function H(e,t,n,r,s,o){const i=(0,a.g2)("MapComponent");return(0,a.uX)(),(0,a.CE)(a.FK,null,[t[5]||(t[5]=(0,a.Lk)("h1",{class:"titre"},"Anne de Bretagne",-1)),t[6]||(t[6]=(0,a.Lk)("p",{class:"descriptif"},"Anne de Bretagne, née le 25 janvier 1477 à Nantes et morte le 9 janvier 1514 à Blois, fille du duc de Bretagne François II, devient duchesse de Bretagne à la mort de son père, puis reine de France une première fois en 1491 après son mariage avec le roi de France Charles VIII, et une deuxième fois en 1499 après un second mariage avec le roi Louis XII.",-1)),(0,a.bF)(i),(0,a.Lk)("div",X,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.images,((e,n)=>((0,a.uX)(),(0,a.CE)("div",{class:"item",key:n},[(0,a.Lk)("img",{src:e.src,alt:e.alt},null,8,J),(0,a.Lk)("div",q,[t[1]||(t[1]=(0,a.Lk)("div",{class:"shape circle ellipse-haut-droite"},null,-1)),t[2]||(t[2]=(0,a.Lk)("div",{class:"shape circle ellipse-haut-gauche"},null,-1)),t[3]||(t[3]=(0,a.Lk)("div",{class:"shape circle ellipse-bas-droite"},null,-1)),t[4]||(t[4]=(0,a.Lk)("div",{class:"shape circle ellipse-bas-gauche"},null,-1)),(0,a.Lk)("div",{class:"texte",innerHTML:e.text},null,8,U)])])))),128))]),(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>o.goBack&&o.goBack(...e)),class:"back-button"},"←")],64)}var $=n(3263);const K={class:"map-container"},S={class:"map-wrapper"};function z(e,t,n,r,s,o){const i=(0,a.g2)("l-tile-layer"),c=(0,a.g2)("l-popup"),u=(0,a.g2)("l-marker"),l=(0,a.g2)("l-map");return(0,a.uX)(),(0,a.CE)("div",K,[(0,a.Lk)("div",S,[(0,a.bF)(l,{ref:"map",zoom:s.zoom,center:s.center,style:{height:"100%",width:"100%"}},{default:(0,a.k6)((()=>[(0,a.bF)(i,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.points,((e,t)=>((0,a.uX)(),(0,a.Wv)(u,{key:t,"lat-lng":[e.lat,e.lng],onClick:t=>o.onMarkerClick(e)},{default:(0,a.k6)((()=>[(0,a.bF)(c,null,{default:(0,a.k6)((()=>[(0,a.Lk)("div",null,(0,j.v_)(e.name),1)])),_:2},1024)])),_:2},1032,["lat-lng","onClick"])))),128))])),_:1},8,["zoom","center"])])])}var W=n(8061),R={name:"MapComponent",components:{LMap:W.Do,LTileLayer:W.a,LMarker:W.li,LPopup:W.nA},data(){return{center:[47.41322,-1.219482],zoom:10,points:[{name:"Anne de Bretagne",lat:47.41322,lng:-1.219482,route:"/anne-de-bretagne"},{name:"Françoise d'Amboise",lat:47.4135,lng:-1.219,route:"/Francoise-d-Amboise"},{name:"Marguerite De Bretagne",lat:47.414,lng:-1.2185,route:"/Marguerite-de-Bretagne"},{name:"Jeanne de Flandres",lat:47.42,lng:-1.3,route:"/Jeanne-de-Flandrese"},{name:"Jeanne-de-Penthievre",lat:48.414,lng:-1.3185,route:"/Jeanne-de-Penthievre"}]}},methods:{onMarkerClick(e){this.$router.push(e.route)}}};const V=(0,i.A)(R,[["render",z],["__scopeId","data-v-df39e6f6"]]);var G=V,Q={name:"AnneDeBretagne",components:{MapComponent:G},data(){return{images:[]}},async created(){const e=n(2374);this.images=e.keys().map(((t,n)=>({id:n+1,src:e(t),title:`Image ${n+1}`,text:""})))},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new $.A;for(let r of this.images)try{const t=await n(7761)(`./${r.id}.md`);r.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${r.id}:`,t)}},goBack(){window.history.back()}}};const Y=(0,i.A)(Q,[["render",H]]);var Z=Y;const ee={class:"container"},te=["src","alt"],ne={class:"shape rect rectangle-32bfb2516c1d"},re=["innerHTML"];function ae(e,t,n,r,s,o){const i=(0,a.g2)("MapComponent");return(0,a.uX)(),(0,a.CE)(a.FK,null,[t[5]||(t[5]=(0,a.Lk)("h1",{class:"titre"},"Marguerite de Bretagne",-1)),t[6]||(t[6]=(0,a.Lk)("p",{class:"descriptif"},"Marguerite de Bretagne est une princesse et par son mariage duchesse de Bretagne née en 1443 et morte le 25 septembre 1469. Elle est la fille aînée du duc François Ier de Bretagne et de sa seconde épouse, Isabelle d'Écosse, fille du roi Jacques Ier d'Écosse.",-1)),(0,a.bF)(i),(0,a.Lk)("div",ee,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.images,((e,n)=>((0,a.uX)(),(0,a.CE)("div",{class:"item",key:n},[(0,a.Lk)("img",{src:e.src,alt:e.alt},null,8,te),(0,a.Lk)("div",ne,[t[1]||(t[1]=(0,a.Lk)("div",{class:"shape circle ellipse-haut-droite"},null,-1)),t[2]||(t[2]=(0,a.Lk)("div",{class:"shape circle ellipse-haut-gauche"},null,-1)),t[3]||(t[3]=(0,a.Lk)("div",{class:"shape circle ellipse-bas-droite"},null,-1)),t[4]||(t[4]=(0,a.Lk)("div",{class:"shape circle ellipse-bas-gauche"},null,-1)),(0,a.Lk)("div",{class:"texte",innerHTML:e.text},null,8,re)])])))),128))]),(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>o.goBack&&o.goBack(...e)),class:"back-button"},"←")],64)}var se={name:"MargueriteDeBretagne",components:{MapComponent:G},data(){return{images:[]}},async created(){const e=n(2387);this.images=e.keys().map(((t,n)=>({id:n+1,src:e(t),title:`Image ${n+1}`,text:""})))},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new $.A;for(let r of this.images)try{const t=await n(3556)(`./${r.id}.md`);r.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${r.id}:`,t)}},goBack(){window.history.back()}}};const oe=(0,i.A)(se,[["render",ae]]);var ie=oe;const ce={class:"container"},ue=["src","alt"],le={class:"shape rect rectangle-32bfb2516c1d"},de=["innerHTML"];function pe(e,t,n,r,s,o){const i=(0,a.g2)("MapComponent");return(0,a.uX)(),(0,a.CE)(a.FK,null,[t[4]||(t[4]=(0,a.Lk)("h1",{class:"titre"},"Marguerite de Foix",-1)),t[5]||(t[5]=(0,a.Lk)("p",{class:"descriptif"},"Duchesse de Bretagne et reine de France, elle a joué un rôle clé dans l'histoire de la Bretagne.",-1)),(0,a.bF)(i),(0,a.Lk)("div",ce,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.images,((e,n)=>((0,a.uX)(),(0,a.CE)("div",{class:"item",key:n},[(0,a.Lk)("img",{src:e.src,alt:e.alt},null,8,ue),(0,a.Lk)("div",le,[t[0]||(t[0]=(0,a.Lk)("div",{class:"shape circle ellipse-haut-droite"},null,-1)),t[1]||(t[1]=(0,a.Lk)("div",{class:"shape circle ellipse-haut-gauche"},null,-1)),t[2]||(t[2]=(0,a.Lk)("div",{class:"shape circle ellipse-bas-droite"},null,-1)),t[3]||(t[3]=(0,a.Lk)("div",{class:"shape circle ellipse-bas-gauche"},null,-1)),(0,a.Lk)("div",{class:"texte",innerHTML:e.text},null,8,de)])])))),128))])],64)}var ge={name:"FrançoisedAmboise",components:{MapComponent:G},data(){return{images:[]}},async created(){const e=n(1001);this.images=e.keys().map(((t,n)=>({id:n+1,src:e(t),title:`Image ${n+1}`,text:""})))},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new $.A;for(let r of this.images)try{const t=await n(2392)(`./${r.id}.md`);r.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${r.id}:`,t)}},goBack(){window.history.back()}}};const me=(0,i.A)(ge,[["render",pe]]);var fe=me;const he={class:"container"},ve=["src","alt"],be={class:"shape rect rectangle-32bfb2516c1d"},ke=["innerHTML"];function xe(e,t,n,r,s,o){const i=(0,a.g2)("MapComponent");return(0,a.uX)(),(0,a.CE)(a.FK,null,[t[5]||(t[5]=(0,a.Lk)("h1",{class:"titre"},"Jeanne de Flandres",-1)),t[6]||(t[6]=(0,a.Lk)("h2",{class:"sous-titre"},"1295 - 1374",-1)),t[7]||(t[7]=(0,a.Lk)("p",{class:"descriptif"},"Fille de Louis Ier de Flandre, comte de Nevers, et de Jeanne de Rethel, comtesse de Rethel. C’est l'épouse de Jean de Montfort en 1329, comte de Montfort (1293-1345), prétendant au duché de Bretagne de 1341 à 1345 lors de la guerre de Succession de Bretagne. Ils ont 2 enfants, Jean de Montfort, futur Jean IV (né entre 1339 et 1341) et Jeanne, comtesse de Richemont (1341-1399). Veuve en 1345. Elle a continué la lutte de son mari lors de la captivité de ce dernier, et elle doit son surnom à un incendie provoqué lors du siège d'Hennebont. Elle est restée célèbre pour une action d'éclat. Alors que les troupes de Charles de Blois assiégeaient en juin 1342 Hennebont, dans laquelle était retranchée Jeanne, celle-ci parvint à galvaniser les troupes et les civils si bien que toutes les attaques furent repoussées. Une nuit, à la tête d'un détachement de soldats, elle sortit de la ville et mit le feu aux tentes des troupes adverses. Puis, grâce à cette diversion, elle parvint à rejoindre Auray d'où elle put ramener 600 chevaliers, ce qui permit la libération de la ville. Après cela, Jeanne de Flandre fut surnommée Jeanne la Flamme.",-1)),(0,a.bF)(i),(0,a.Lk)("div",he,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.images,((e,n)=>((0,a.uX)(),(0,a.CE)("div",{class:"item",key:n},[(0,a.Lk)("img",{src:e.src,alt:e.alt},null,8,ve),(0,a.Lk)("div",be,[t[1]||(t[1]=(0,a.Lk)("div",{class:"shape circle ellipse-haut-droite"},null,-1)),t[2]||(t[2]=(0,a.Lk)("div",{class:"shape circle ellipse-haut-gauche"},null,-1)),t[3]||(t[3]=(0,a.Lk)("div",{class:"shape circle ellipse-bas-droite"},null,-1)),t[4]||(t[4]=(0,a.Lk)("div",{class:"shape circle ellipse-bas-gauche"},null,-1)),(0,a.Lk)("div",{class:"texte",innerHTML:e.text},null,8,ke)])])))),128))]),(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>o.goBack&&o.goBack(...e)),class:"back-button"},"←")],64)}var Le={name:"JeanneDeFlandres",components:{MapComponent:G},data(){return{images:[]}},async created(){const e=n(4776);this.images=e.keys().map(((t,n)=>({id:n+1,src:e(t),title:`Image ${n+1}`,text:""})))},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new $.A;for(let r of this.images)try{const t=await n(4099)(`./${r.id}.md`);r.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${r.id}:`,t)}},goBack(){window.history.back()}}};const ye=(0,i.A)(Le,[["render",xe]]);var je=ye;const we={class:"container"},Ce=["src","alt"],Fe={class:"shape rect rectangle-32bfb2516c1d"},_e=["innerHTML"];function Ee(e,t,n,r,s,o){const i=(0,a.g2)("MapComponent");return(0,a.uX)(),(0,a.CE)(a.FK,null,[t[5]||(t[5]=(0,a.Lk)("h1",{class:"titre"},"Jeanne de Penthièvre",-1)),t[6]||(t[6]=(0,a.Lk)("p",{class:"descriptif"},"Duchesse de Bretagne et reine de France, elle a joué un rôle clé dans l'histoire de la Bretagne.",-1)),(0,a.bF)(i),(0,a.Lk)("div",we,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.images,((e,n)=>((0,a.uX)(),(0,a.CE)("div",{class:"item",key:n},[(0,a.Lk)("img",{src:e.src,alt:e.alt},null,8,Ce),(0,a.Lk)("div",Fe,[t[1]||(t[1]=(0,a.Lk)("div",{class:"shape circle ellipse-haut-droite"},null,-1)),t[2]||(t[2]=(0,a.Lk)("div",{class:"shape circle ellipse-haut-gauche"},null,-1)),t[3]||(t[3]=(0,a.Lk)("div",{class:"shape circle ellipse-bas-droite"},null,-1)),t[4]||(t[4]=(0,a.Lk)("div",{class:"shape circle ellipse-bas-gauche"},null,-1)),(0,a.Lk)("div",{class:"texte",innerHTML:e.text},null,8,_e)])])))),128))]),(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>o.goBack&&o.goBack(...e)),class:"back-button"},"←")],64)}var Me={name:"JeanneDePenthievre",components:{MapComponent:G},data(){return{images:[]}},async created(){const e=n(1681);this.images=e.keys().map(((t,n)=>({id:n+1,src:e(t),title:`Image ${n+1}`,text:""})))},mounted(){this.loadMarkdownTexts()},methods:{async loadMarkdownTexts(){const e=new $.A;for(let r of this.images)try{const t=await n(1018)(`./${r.id}.md`);r.text=e.render(t.default)}catch(t){console.error(`Erreur lors du chargement du fichier Markdown pour l'image ${r.id}:`,t)}},goBack(){window.history.back()}}};const Oe=(0,i.A)(Me,[["render",Ee]]);var Te=Oe;const Ae={class:"about"};function Be(e,t){return(0,a.uX)(),(0,a.CE)("div",Ae,t[0]||(t[0]=[(0,a.Fv)("<h1 data-v-183be0e8>Consigne</h1><h2 data-v-183be0e8>Dossiers Expositions virtuelles</h2><p data-v-183be0e8>Le travail consiste à réaliser, pour chaque groupe d’étudiant (3-4 personnes), u<strong data-v-183be0e8>ne exposition virtuelle thématique</strong>, en lien avec le thème du cours (i.e. « image et représentation au Moyen Age »). Cette exposition peut être organisée autour d’un sous-thème (ex : l’enfance, la mort, l’outil, les larmes...), d’un lieu (ex : le palais de la cité ; la cathédrale de Bourges ; La vieille ville de Troyes…), d’un personnage (historique ou fictif : Richard Cœur de Lion, Tristan et Yseult, Philippe Auguste, Renard le Goupil…), d’une collection existante (ex : les manuscrits de la bibliothèque du Mans, les sculptures médiévales du musée du Carré Plantagenêt…). <em data-v-183be0e8><strong data-v-183be0e8>Toutes les suggestions sont bienvenues, mais il est impératif d’obtenir l’accord de l’enseignant pour validation</strong></em>.</p><p data-v-183be0e8>Le dossier rendu (document final) comprendra dans tous les cas :</p><p data-v-183be0e8>- <strong data-v-183be0e8>Une introduction</strong>,</p><p data-v-183be0e8>- <strong data-v-183be0e8>L’exposition proprement dite</strong> : <strong data-v-183be0e8>Les objets figurant dans votre exposition</strong>, avec pour chacune d’entre eux les <strong data-v-183be0e8>références exactes et précises</strong> : titres, date de réalisation, auteur(s) éventuel(s), localisation initiale, éventuellement destinataire ou commanditaire, localisation actuelle. <strong data-v-183be0e8>Pour chaque objet, un très court texte</strong> (1500 caractères maximum, espaces compris) présentera l’intérêt de l’objet et son rapport au thème général choisi pour l’exposition. L’exposition ne comprendra pas moins d’une quinzaine d’illustrations, au minimum.</p><p data-v-183be0e8><strong data-v-183be0e8>- L’organisation générale de l’exposition</strong> : combien de panneaux (le cas échéant), comment sont composés les panneaux, etc.</p><p data-v-183be0e8>En marge de ce dossier, vous fournirez <strong data-v-183be0e8>une analyse / commentaire de ce dossier</strong> (texte argumenté d’explication de cette exposition où vous expliciterez et justifierez vos choix effectués) ; (<em data-v-183be0e8>2000 à 3500 signes, espaces compris</em>) et u<strong data-v-183be0e8>ne analyse d’expérience</strong> (difficultés rencontrées, moyens mis en œuvre pour les surmonter ; points forts et faiblesses de votre dossier, intérêt de l&#39;exercice) (<em data-v-183be0e8>2000 à 3500 signes, espaces compris</em>) ; une <strong data-v-183be0e8>bibliographie</strong> de travail.</p>",8)]))}const Ie={},Ne=(0,i.A)(Ie,[["render",Be],["__scopeId","data-v-183be0e8"]]);var Pe=Ne;const De=[{path:"/",component:B,name:"homepage"},{path:"/newpage",component:D,name:"newpage"},{path:"/Anne-de-Bretagne",component:Z,name:"Anne-de-Bretagne"},{path:"/Marguerite-de-Bretagne",component:ie,name:"Marguerite-de-Bretagne"},{path:"/Francoise-d-Amboise",component:fe,name:"Francoise-d-Amboise"},{path:"/Jeanne-de-Flandres",component:je,name:"Jeanne-de-Flandres"},{path:"/Jeanne-de-Penthievre",component:Te,name:"Jeanne-de-Penthievre"},{path:"/consigne",component:Pe,name:"Consigne"}],Xe=(0,d.aE)({history:(0,d.LA)("/exposition/"),routes:De});(0,r.Ef)(l).use(Xe).mount("#app")},2374:function(e,t,n){var r={"./1.jpeg":8881,"./2.jpeg":592,"./3.jpeg":7639,"./4.jpeg":9070,"./5.jpeg":4629,"./6.jpeg":1284,"./7.jpeg":379,"./8.jpeg":402};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=2374},1001:function(e,t,n){var r={"./image1.jpeg":1161,"./image2.jpeg":1496,"./image3.jpeg":2559,"./image4.jpeg":4774,"./image5.jpeg":1645,"./image6.jpeg":8764};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=1001},4776:function(e,t,n){var r={"./1Image1.jpeg":2159,"./2Image2.jpeg":2367,"./3.jpeg":4497,"./4Image4.jpeg":7491,"./5Image5.jpeg":6855,"./6Image6.jpeg":1911};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=4776},1681:function(e,t,n){var r={"./image1.jpeg":3697,"./image2.jpeg":5072,"./image3.jpeg":4647,"./image4.jpeg":3934,"./image5.jpeg":4197,"./image6.jpeg":8692};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=1681},2387:function(e,t,n){var r={"./1.jpeg":7538,"./2.jpeg":5455,"./3 - Nantes_-_cathédrale_-_tombeau_de_François_II_-_la_Prudence.jpeg":1406,"./4 - 02a3683d79.jpeg":7093,"./5 - ob_8e9da5_l1460796cc.jpeg":8649};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=2387},7761:function(e,t,n){var r={"./1.md":[3093,93],"./2.md":[3288,288],"./3.md":[6463,463],"./4.md":[1634,634],"./5.md":[6401,401],"./6.md":[404,404],"./7.md":[5003,3],"./8.md":[6670,670]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=7761,e.exports=a},2392:function(e,t,n){var r={"./1.md":[438,438],"./2.md":[3039,39],"./3.md":[7944,944],"./4.md":[4353,353],"./5.md":[3266,266]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=2392,e.exports=a},4099:function(e,t,n){var r={"./1.md":[8903,903],"./2.md":[4574,574],"./3.md":[8861,861],"./4.md":[9580,580],"./5.md":[7411,411],"./6.md":[6602,602]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=4099,e.exports=a},1018:function(e,t,n){var r={"./1.md":[3640,640],"./2.md":[373,373],"./3.md":[454,454],"./4.md":[2283,283],"./5.md":[2996,996]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=1018,e.exports=a},3556:function(e,t,n){var r={"./1.md":[6162,162],"./2.md":[3963,963],"./3.md":[6020,20],"./4.md":[5093,474],"./5.md":[1318,318],"./6.md":[3151,151],"./7.md":[3368,368],"./8.md":[7561,561]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=3556,e.exports=a},8881:function(e,t,n){"use strict";e.exports=n.p+"img/1.f5ec04d8.jpeg"},592:function(e,t,n){"use strict";e.exports=n.p+"img/2.d406dd57.jpeg"},7639:function(e,t,n){"use strict";e.exports=n.p+"img/3.bc550ff5.jpeg"},9070:function(e,t,n){"use strict";e.exports=n.p+"img/4.0dd43932.jpeg"},4629:function(e,t,n){"use strict";e.exports=n.p+"img/5.6051acd4.jpeg"},1284:function(e,t,n){"use strict";e.exports=n.p+"img/6.7142e66b.jpeg"},379:function(e,t,n){"use strict";e.exports=n.p+"img/7.b2c11719.jpeg"},402:function(e,t,n){"use strict";e.exports=n.p+"img/8.80616ff6.jpeg"},1161:function(e,t,n){"use strict";e.exports=n.p+"img/image1.a43ede3f.jpeg"},1496:function(e,t,n){"use strict";e.exports=n.p+"img/image2.2a0176fc.jpeg"},2559:function(e,t,n){"use strict";e.exports=n.p+"img/image3.7bd792f0.jpeg"},4774:function(e,t,n){"use strict";e.exports=n.p+"img/image4.e3e68840.jpeg"},1645:function(e,t,n){"use strict";e.exports=n.p+"img/image5.d9ab09ff.jpeg"},8764:function(e,t,n){"use strict";e.exports=n.p+"img/image6.2e546d94.jpeg"},2159:function(e,t,n){"use strict";e.exports=n.p+"img/1Image1.4a4006d0.jpeg"},2367:function(e,t,n){"use strict";e.exports=n.p+"img/2Image2.e9f2ff36.jpeg"},4497:function(e,t,n){"use strict";e.exports=n.p+"img/3.eedf0b51.jpeg"},7491:function(e,t,n){"use strict";e.exports=n.p+"img/4Image4.85a527b4.jpeg"},6855:function(e,t,n){"use strict";e.exports=n.p+"img/5Image5.35ace95a.jpeg"},1911:function(e,t,n){"use strict";e.exports=n.p+"img/6Image6.04a91567.jpeg"},3697:function(e,t,n){"use strict";e.exports=n.p+"img/image1.a43ede3f.jpeg"},5072:function(e,t,n){"use strict";e.exports=n.p+"img/image2.2a0176fc.jpeg"},4647:function(e,t,n){"use strict";e.exports=n.p+"img/image3.7bd792f0.jpeg"},3934:function(e,t,n){"use strict";e.exports=n.p+"img/image4.e3e68840.jpeg"},4197:function(e,t,n){"use strict";e.exports=n.p+"img/image5.d9ab09ff.jpeg"},8692:function(e,t,n){"use strict";e.exports=n.p+"img/image6.2e546d94.jpeg"},7538:function(e,t,n){"use strict";e.exports=n.p+"img/1.4837fc7c.jpeg"},5455:function(e,t,n){"use strict";e.exports=n.p+"img/2.c9205a32.jpeg"},1406:function(e,t,n){"use strict";e.exports=n.p+"img/3 - Nantes_-_cathédrale_-_tombeau_de_François_II_-_la_Prudence.1038890c.jpeg"},7093:function(e,t,n){"use strict";e.exports=n.p+"img/4 - 02a3683d79.20157322.jpeg"},8649:function(e,t,n){"use strict";e.exports=n.p+"img/5 - ob_8e9da5_l1460796cc.da3994ac.jpeg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,s){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],s=e[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,s<o&&(o=s));if(i){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,a,s]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var s=Object.create(null);n.r(s);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){o[e]=function(){return r[e]}}));return o["default"]=function(){return r},n.d(s,o),s}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{3:"30ffc544",8:"188c8c39",20:"c4be499f",24:"0e1cf9be",39:"b7df7b0d",71:"e3b092fd",93:"49baf35c",151:"d7af8487",162:"efa3229c",249:"bdecd7b6",266:"e28859a5",283:"4157283b",288:"e89707db",318:"c166c5d6",353:"177d7bac",368:"b7f8ed63",373:"97b5d139",401:"79e67ca1",404:"9a2d5bbe",411:"4e1eb3c9",438:"8e7ecfb9",454:"4cc3d505",463:"2eb8d472",474:"bc3af27e",481:"4ae18a8b",561:"767de830",574:"02815ba9",580:"a70c2668",602:"cd7b97b6",634:"e599d891",640:"8eef0df4",670:"f3c5d3b7",861:"f4fb757f",903:"a014aff6",944:"d9c17f39",963:"9f68c669",996:"4fda1271"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="expo:";n.l=function(r,a,s,o){if(e[r])e[r].push(a);else{var i,c;if(void 0!==s)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+s){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=r),e[r]=[a];var p=function(t,n){i.onerror=i.onload=null,clearTimeout(g);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/exposition/"}(),function(){var e={524:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var s=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=s);var o=n.p+n.u(t),i=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",i.name="ChunkLoadError",i.type=s,i.request=o,a[1](i)}};n.l(o,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,s,o=r[0],i=r[1],c=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var l=c(n)}for(t&&t(r);u<o.length;u++)s=o[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},r=self["webpackChunkexpo"]=self["webpackChunkexpo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(9803)}));r=n.O(r)})();
//# sourceMappingURL=app.109f3d0a.js.map