import{p as k,P as T,O as D,i as U,a as G,b as X}from"./ProductView-1yOi2gXM.js";import{r as v,o as S,a as n,c,b as M,g as J,d as K,u as a,w as Q,s as y,e,f as h,h as z,F as O,i as R,t as $,n as w,X as Y,_ as P,j as A,T as L,k as I,l as E,p as Z,m as ee,q as te}from"./index-vsPbCcT8.js";const se="/img/image 2.png",oe="/img/image 3.png",le=M('<div class="container"><div class="mx-auto w-fit"><div class="button-rim"><div class="button-rim__bg"><h1 class="button-rim__text"> О нас </h1></div></div></div><div class="flex flex-col lg:flex-row mt-16 justify-center gap-[20px]"><article class="w-auto p-[16px] md:px-[100px] md:py-[60px] text-20px font-regular rounded-[20px] bg-white"><div><p>«Техрешение+» возникло вследствие ликвидации одного из старейших отечественных предприятий машиностроения, являвшегося единственным производителем санитарного оборудования ГА (генератора аэрозольного), предназначенного для дезинфекции и дезинсекции птицефабрик, инкубаторов, животноводческих комплексов, убойных пунктов, санитарных боен, овощехранилищ, зернохранилищ и тд. </p> <br><p>Мы смогли не только восстановить, но и усовершенствовать технологию производства и на сегодняшний день наш завод производит три модели аэрозольных генераторов горячего тумана: ГА-2; Га-3 и ГА-4. Благодаря оригинальной разработке конструкции генератора (патент РФ на полезную модель № 127432), нами достигнута максимальная производительность и эффективность, а уменьшение дисперсности тумана улучшило проникающие характеристики и позволило снизить расход дезинфицирующих растворов. </p></div></article><div class="flex justify-center gap-[20px] lg:flex-col"><div class="w-fit lg:w-[300px] overflow-hidden mb-1.5 bg-grad rounded-[12px] p-[4px]"><img src="'+se+'" alt="" class="rounded-[10px] aspect-square object-cover"></div><div class="w-fit lg:w-[300px] overflow-hidden mb-1.5 bg-grad rounded-[12px] p-[4px]"><img src="'+oe+'" alt="" class="rounded-[10px] aspect-square object-cover"></div></div></div></div>',1),ae=[le],re={__name:"MyAbout",setup(o){const t=k(),s=v(null);return S(()=>{t.views.aboutRef=s.value}),(l,r)=>(n(),c("section",{ref_key:"aboutRef",ref:s,class:"bg-gray-light py-[100px]"},ae,512))}},ne="/svg/ЛОГО.svg";function ie(o){return J()?(K(o),!0):!1}function F(o){return typeof o=="function"?o():a(o)}const H=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ce=Object.prototype.toString,de=o=>ce.call(o)==="[object Object]",j=()=>{},pe=ue();function ue(){var o,t;return H&&((o=window==null?void 0:window.navigator)==null?void 0:o.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function C(o){var t;const s=F(o);return(t=s==null?void 0:s.$el)!=null?t:s}const q=H?window:void 0;function V(...o){let t,s,l,r;if(typeof o[0]=="string"||Array.isArray(o[0])?([s,l,r]=o,t=q):[t,s,l,r]=o,!t)return j;Array.isArray(s)||(s=[s]),Array.isArray(l)||(l=[l]);const d=[],u=()=>{d.forEach(f=>f()),d.length=0},g=(f,m,i,p)=>(f.addEventListener(m,i,p),()=>f.removeEventListener(m,i,p)),x=Q(()=>[C(t),F(r)],([f,m])=>{if(u(),!f)return;const i=de(m)?{...m}:m;d.push(...s.flatMap(p=>l.map(b=>g(f,p,b,i))))},{immediate:!0,flush:"post"}),_=()=>{x(),u()};return ie(_),_}let N=!1;function B(o,t,s={}){const{window:l=q,ignore:r=[],capture:d=!0,detectIframe:u=!1}=s;if(!l)return j;pe&&!N&&(N=!0,Array.from(l.document.body.children).forEach(i=>i.addEventListener("click",j)),l.document.documentElement.addEventListener("click",j));let g=!0;const x=i=>r.some(p=>{if(typeof p=="string")return Array.from(l.document.querySelectorAll(p)).some(b=>b===i.target||i.composedPath().includes(b));{const b=C(p);return b&&(i.target===b||i.composedPath().includes(b))}}),f=[V(l,"click",i=>{const p=C(o);if(!(!p||p===i.target||i.composedPath().includes(p))){if(i.detail===0&&(g=!x(i)),!g){g=!0;return}t(i)}},{passive:!0,capture:d}),V(l,"pointerdown",i=>{const p=C(o);g=!x(i)&&!!(p&&!i.composedPath().includes(p))},{passive:!0}),u&&V(l,"blur",i=>{setTimeout(()=>{var p;const b=C(o);((p=l.document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(b!=null&&b.contains(l.document.activeElement))&&t(i)},0)})].filter(Boolean);return()=>f.forEach(i=>i())}const xe={class:"fixed z-[2] top-0 bg-white w-full"},fe={class:"flex text-base justify-between items-center h-[65px] px-[15px] text-black shadow-lg"},ge=e("img",{class:"block transition-all hover:scale-[1.05]",src:ne,alt:"logo"},null,-1),_e=[ge],he={class:"hidden md:flex text-center w-fit gap-5 select-none items-center"},me={class:"transition-all"},be=["onClick"],ve={href:"tel:81234567890",class:"mr-20 md:hidden leading-3 font-bold text-gray-dark self-center"},we=["onClick"],ye={__name:"MyHeader",setup(o){const t=k(),{isBurgerOpen:s}=y(t),{toggle:l}=t,{scrollTo:r}=t,d=v(null);B(d,()=>{t.isBurgerOpen===!0&&(t.isBurgerOpen=!1)});const u=v([{name:"Оборудование",scrollId:"productRef"},{name:"Запасные части",scrollId:"itemsRef"},{name:"О нас",scrollId:"aboutRef"}]);return(g,x)=>(n(),c("div",{ref_key:"sideMenu",ref:d},[e("div",xe,[e("header",fe,[e("div",{class:"header__logo",onClick:x[0]||(x[0]=_=>a(r)("heroRef"))},_e),e("nav",null,[e("ul",he,[e("li",me,[h(T,{class:"inline h-8 rotate-45"}),z("8-123-456-78-90")]),(n(!0),c(O,null,R(u.value,_=>(n(),c("li",{onClick:f=>a(r)(_.scrollId),class:"hover:-translate-y-0.5 hover:drop-shadow-[-2px_13px_23px_rgba(59,56,92,1)] align-middle text-center transition-all"},$(_.name),9,be))),256))])]),e("a",ve,[z("позвонить нам"),h(T,{class:"h-8 hidden xs:inline"})])])]),e("nav",{class:w(["bg-gray-burger text-white h-full w-2/5 fixed right-0 z-[2] select-none duration-300 md:hidden",a(s)?"translate-x-[0%]":"translate-x-[100%]"])},[e("ul",null,[e("li",{onClick:x[1]||(x[1]=_=>a(r)("heroRef")),class:"p-[10px] border-solid border-y-[1px] active:bg-white active:text-gray-dark"}," Главная "),(n(!0),c(O,null,R(u.value,_=>(n(),c("li",{class:"p-[10px] border-solid border-b-[1px] active:bg-white active:text-gray-dark",onClick:f=>a(r)(_.scrollId)},$(_.name),9,we))),256))])],2),e("button",{onClick:x[2]||(x[2]=(..._)=>a(l)&&a(l)(..._)),class:"overflow-hidden h-[65px] md:hidden fixed top-0 right-0 z-[3] p-[15px] w-[65px] text-center"},[e("span",{class:w([{"translate-x-[90px]":a(s)},"duration-500 w-[35px] h-[2px] top-[25px] left-[15px] bg-gray-dark absolute"])},null,2),e("span",{class:w([{"rotate-45":a(s)},"duration-500 w-[35px] h-[2px] top-[25px] left-[15px] bg-gray-dark absolute translate-y-[7px]"])},null,2),e("span",{class:w([{"-rotate-45":a(s)},"duration-500 w-[35px] h-[2px] top-[25px] left-[15px] bg-gray-dark absolute translate-y-[7px]"])},null,2),e("span",{class:w([{"translate-x-[-90px]":a(s)},"duration-500 w-[35px] h-[2px] top-[25px] left-[15px] bg-gray-dark absolute translate-y-[14px]"])},null,2)])],512))}},ke={class:"h-[calc(100svh-65px)] min-h-[500px] w-full fixed left-1/2 -translate-x-1/2 container py-6"},$e={class:"flex justify-end"},Oe=e("span",{class:"w-fit select-none text-gray-dark"},"закрыть",-1),Ce=[Oe],Re=M('<form class="flex [&amp;&gt;*&gt;textarea]:resize-none flex-col w-full [&amp;&gt;*&gt;textarea]:text-gray-dark [&amp;&gt;*&gt;textarea]:border-2 [&amp;&gt;*&gt;textarea]:border-white [&amp;&gt;*&gt;textarea:focus]:border-gray-dark [&amp;&gt;*&gt;textarea:focus]:outline-none [&amp;&gt;*&gt;textarea]:focus:border-pink-500 [&amp;&gt;*&gt;textarea]:w-full [&amp;&gt;*&gt;textarea]:rounded-xl [&amp;&gt;*&gt;textarea]:p-2.5 gap-5" action=""><label class="mt-2.5" for=""><textarea class="" type="text" placeholder="имя"></textarea></label><label for=""><textarea type="text" placeholder="номер телефона"></textarea></label><label for=""><textarea class="" type="text" placeholder="дополнительная информация"></textarea></label></form><button class="bg-grad p-2.5 mt-auto rounded-xl w-full text-white hover:drop-shadow-[-2px_13px_23px_rgba(59,56,92,0.2)] hover:scale-[1.01] transition-all">отправить</button>',2),Ie={__name:"ModalOrder",setup(o){const t=k(),s=t.toggleOrderWindow,{isOrderOpen:l}=y(t),r=v(null);return B(r,()=>{l.value===!0&&(l.value=!1)}),(d,u)=>(n(),c("section",ke,[e("div",{ref_key:"orderRef",ref:r,class:"flex flex-col bg-gray-burger mx-auto w-full max-w-xl h-full rounded-xl p-4"},[e("div",$e,[e("button",{onClick:u[0]||(u[0]=(...g)=>a(s)&&a(s)(...g)),class:"rounded-xl active:bg-gray-light md:active:bg-gray-burger w-fit p-2.5"},Ce)]),Re],512)]))}},je={class:"h-[calc(100svh-65px)] min-h-[500px] w-full fixed left-1/2 -translate-x-1/2 container py-6"},Se={class:"mx-auto w-full h-full flex flex-col"},Me=e("span",{class:"w-full select-none text-gray-dark"},"закрыть",-1),Ve=[Me],Ae={__name:"ModalVideo",setup(o){const t=v();Y("bnVUHWCynig",t);const s=k(),l=s.toggleVideoOpen,{isVideoOpen:r}=y(s),d=v(null);return B(d,()=>{r.value===!0&&(r.value=!1)}),(u,g)=>(n(),c("section",je,[e("div",{ref_key:"videoRef",ref:d,class:"bg-gray-burger h-full mx-auto rounded-xl p-4"},[e("div",Se,[e("button",{onClick:g[0]||(g[0]=(...x)=>a(l)&&a(l)(...x)),class:"block h-fit w-fit self-end rounded-xl active:bg-gray-light md:active:bg-gray-burger p-2.5"},Ve),e("div",{class:"w-full h-full rounded-xl",ref_key:"youtube",ref:t},null,512)])],512)]))}},W=o=>(Z("data-v-8c87b41f"),o=o(),ee(),o),Ee=W(()=>e("div",{class:"h-[65px]"},null,-1)),Pe={class:"relative hero font-Onest min-h-96 h-[calc(100svh-65px)]"},Be=W(()=>e("div",{class:"absolute bg-center bg-no-repeat bg-black bg-hero w-full top-0 h-full -z-10 bg-cover"},[e("div",{class:"bg-center bg-no-repeat w-full bg-hero-mask h-full bg-cover opacity-60"})],-1)),We={class:"uppercase h-full sm:w-[660px] container flex flex-col justify-center gap-hero pt-5 pb-7"},Te=W(()=>e("div",{class:"text-center text-white h-fit flex flex-col mt-auto sm:mt-0"},[e("h1",{class:"text-hero-main font-bold text-nowrap"},"5 лет"),e("p",{class:"text-hero-legend"},"производим оборудование"),e("p",{class:"text-hero-legend"},"специального назначения")],-1)),ze={class:"flex items-center flex-col font-regular text-base sm:flex-row justify-center gap-5 mt-auto sm:mt-0 [&>button]:uppercase [&>button]:sm:h-10 [&>button]:w-full [&>button]:h-14 [&>button]:max-w-80 [&>button]:sm:max-w-48 [&>button]:rounded-xl"},Le={__name:"TheHero",setup(o){const t=v(null),s=k(),{isBurgerOpen:l}=y(s),{isScrollLocked:r}=y(s),{isOrderOpen:d}=y(s),u=s.toggleOrderWindow;S(()=>{s.views.heroRef=t.value});const{isVideoOpen:g}=y(s),x=s.toggleVideoOpen;return(_,f)=>(n(),c("section",{ref_key:"heroRef",ref:t},[e("div",{class:w(["overlay w-full h-[calc(100svh+200px)] fixed bg-black opacity-60",a(l)||a(r)?"translate-x-[0%]":"translate-x-[100%]"])},null,2),Ee,e("div",Pe,[Be,h(ye),h(L,null,{default:A(()=>[a(d)?(n(),I(Ie,{key:0})):E("",!0)]),_:1}),h(L,null,{default:A(()=>[a(g)?(n(),I(Ae,{key:0})):E("",!0)]),_:1}),e("div",We,[Te,e("div",ze,[e("button",{class:w([{"z-[-1]":a(l)||a(r)},"_btn-orange"]),onClick:f[0]||(f[0]=(...m)=>a(u)&&a(u)(...m))},"оставить заявку ",2),e("button",{class:w([{"z-[-1]":a(l)||a(r)},"_btn-transparent"]),onClick:f[1]||(f[1]=(...m)=>a(x)&&a(x)(...m))},"узнать больше ",2)])])])],512))}},Ne=P(Le,[["__scopeId","data-v-8c87b41f"]]),Fe="/svg/logo_gray.svg",He={},qe={class:"bg-black py-[86px]"},De=M('<div class="container text-gray-dark flex flex-col lg:flex-row md:justify-between h-fit gap-[97px] lg:gap-[150px]"><div class="logo"><img src="'+Fe+'" alt="logo" class="w-[106px]"></div><div class="info flex flex-col gap-[90px] md:flex-row"><div class="sections"><h4 class="text-20px pb-[20px]">РАЗДЕЛЫ</h4><ul class="text-12px [&amp;&gt;li:not(:last-child)]:pb-[10px] pb-[37px]"><li><a href="#">О нас</a></li><li><a href="#">Оставить заявку</a></li><li><a href="#">Наше оборудование</a></li><li><a href="#">запасные части</a></li></ul><h4 class="text-15px pb-[25px]">АВТОРЫ САЙТА</h4><div class="flex gap-[82px]"><div class="flex flex-col"><h5 class="text-12px pb-[7px]">UX/UI Дизайн</h5><p>Никита Усенко</p></div><div class="flex flex-col"><h5 class="text-12px pb-[7px]">Frontend</h5><p>Роман Римский</p></div></div></div><div class="address"><h4 class="text-20px pb-[20px]">АДРЕС</h4><p class="text-12px pb-[10px]">Московская обл., г. Коломна, пос.Радужный, д. 53</p><p class="text-12px pb-[10px]">texreschenie.plus@yandex.ru</p></div><div class="contacts"><h4 class="text-20px pb-[20px]">КОНТАКТЫ</h4><p>+7 (926) 596 58 55</p><p>+7 (915) 351 95 65</p></div></div></div>',1),Ue=[De];function Ge(o,t){return n(),c("section",qe,Ue)}const Xe=P(He,[["render",Ge]]),Je={class:"card bg-white w-ItemCard h-full mx-auto p-2.5 rounded-[18px] flex flex-col"},Ke={class:"w-full overflow-hidden mb-[10px]"},Qe=["src"],Ye={class:"card__header text-itemCard-header text-black font-regular text-center mb-[20px]"},Ze={__name:"ItemCard",props:{details:Object},setup(o){const t=o;return(s,l)=>(n(),c("div",Je,[e("div",Ke,[e("img",{src:t.details.img,alt:"",class:"rounded-[10px] aspect-[1] object-cover"},null,8,Qe)]),e("h3",Ye,$(t.details.name),1),h(D)]))}},et=e("div",{class:"mx-auto w-fit"},[e("div",{class:"button-rim"},[e("div",{class:"button-rim__bg"},[e("h1",{class:"button-rim__text"}," Запасные части ")])])],-1),tt={class:"grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] container w-fit mt-16"},st={__name:"MyItems",setup(o){const t=k(),s=v(null);return S(()=>{t.views.itemsRef=s.value}),(l,r)=>(n(),c("section",{ref_key:"itemsRef",ref:s,class:"bg-gray-light pt-[100px]"},[et,e("div",tt,[(n(!0),c(O,null,R(a(U),d=>(n(),I(Ze,{details:d},null,8,["details"]))),256))])],512))}},ot={class:"card bg-white sm:w-[590px] h-full mx-auto p-2.5 rounded-[18px] grid grid-cols-1 md:grid-cols-2 gap-[15px]"},lt={class:"card__left flex flex-col"},at={class:"w-full overflow-hidden mb-1.5"},rt=["src"],nt=e("button",{class:"uppercase w-full h-itemCard-order py-2.5 px-[15px] mx-auto rounded-[10px] border-solid border-[1px] border-black bg-transparent hover:bg-black transition-all hover:text-white text-itemCard-order text-black font-regular mt-auto"}," подробнее ",-1),it={class:"card__right description flex flex-col"},ct={class:"description__header text-black text-20px font-regular mb-[5px]"},dt={class:"description__info text-black text-14px font-medium"},pt=e("h4",{class:"description__adv text-black text-20px font-regular mt-auto mb-[5px]"},"Преимущества",-1),ut={class:"text-black text-14px font-medium list-disc pl-[20px]"},xt={__name:"ProdCard",props:{details:Object},setup(o){const t=o;return k(),(s,l)=>{const r=te("router-link");return n(),c("div",ot,[e("div",lt,[e("div",at,[e("img",{src:t.details.img[0],alt:"",class:"rounded-[10px] aspect-[1.35] object-cover"},null,8,rt)]),h(r,{to:{name:"product",params:{id:t.details.id}}},{default:A(()=>[nt]),_:1},8,["to"])]),e("div",it,[e("h3",ct,$(t.details.name),1),e("p",dt,$(t.details.description),1),pt,e("ul",ut,[(n(!0),c(O,null,R(t.details.advantages,d=>(n(),c("li",null,$(d),1))),256))])])])}}},ft=e("div",{class:"mx-auto w-fit container"},[e("div",{class:"button-rim"},[e("div",{class:"button-rim__bg"},[e("h1",{class:"button-rim__text"}," оборудование ")])])],-1),gt={class:"grid grid-cols-1 xl:grid-cols-2 gap-[20px] container w-fit mt-16"},_t={__name:"MyProduct",setup(o){const t=v(null);S(()=>{s.views.productRef=t.value});const s=k(),{isProductInfoOpen:l}=y(s);return(r,d)=>(n(),c("section",{ref_key:"productRef",ref:t,class:"bg-gray-light pt-[100px] h-full w-full"},[a(l)?(n(),I(X,{key:0})):E("",!0),ft,e("div",gt,[(n(!0),c(O,null,R(a(G),u=>(n(),I(xt,{details:u},null,8,["details"]))),256))])],512))}},ht={},mt={class:"bg-grad py-[86px]"},bt=M('<div class="container"><div class="bg-white flex flex-col lg:flex-row items-center rounded-[20px] py-[75px] md:px-[105px] justify-center gap-[25px] lg:gap-[124px]"><div class="lg:self-start"><h3 class="text-order-header font-regular mb-[15px] lg:mb-10 text-center"> Есть вопросы или хотите <br> оставить заявку? </h3><p class="text-15-20 text-center">Заполните форму и мы свяжемся с вами.</p></div><form class="flex flex-col gap-[25px] md:w-[313px]"><input type="text" placeholder="Ваше имя" class="px-[42px] py-[35px] bg-gray-light rounded-[10px] text-15-20"><input type="text" placeholder="Номер телефона" class="px-[42px] py-[35px] bg-gray-light rounded-[10px] text-15-20"><div class="w-full bg-grad p-px rounded-[10px] h-[100px]"><span class="bg-white w-full h-full rounded-[9px] flex flex-col justify-center group hover:bg-gradient-to-r hover:from-gradient-darker hover:to-gradient-lighter transition-all"><span class="w-fit mx-auto bg-grad bg-clip-text text-20px font-regular text-transparent group-hover:text-white transition-all">ОСТАВИТЬ ЗАЯВКУ</span></span></div></form></div></div>',1),vt=[bt];function wt(o,t){return n(),c("section",mt,vt)}const yt=P(ht,[["render",wt]]),Ot={__name:"HomeView",setup(o){return(t,s)=>(n(),c(O,null,[h(Ne),h(_t),h(st),h(re),h(yt),h(Xe)],64))}};export{Ot as default};
