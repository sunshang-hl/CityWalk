import{_ as d,o as n,g as l,e as c,c as _,F as p,h as u,a as t,t as i,n as g,i as f,S as h,j as S,P as y,N as m,A as w}from"./app-DQaI3GVO.js";const v={__name:"ImageSwiper",props:{items:{type:Array,required:!0},config:{type:Object,default:()=>({height:500,showInfo:!0})}},setup(o,{expose:r}){r();const e={props:o,get Swiper(){return h},get SwiperSlide(){return S},get Pagination(){return y},get Navigation(){return m},get Autoplay(){return w}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},I=["src","alt"],k={class:"slide-info"},x={class:"info-content"},b={class:"title"},A={class:"description"},N={class:"meta"},P={class:"author"},B={class:"date"};function j(o,r,s,e,O,z){return n(),l(e.Swiper,{modules:[e.Pagination,e.Navigation,e.Autoplay],"slides-per-view":1,pagination:{clickable:!0},navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!1},class:g(["mySwiper",{"hide-info":!s.config.showInfo}]),style:f({height:`${s.config.height}px`})},{default:c(()=>[(n(!0),_(p,null,u(s.items,a=>(n(),l(e.SwiperSlide,{key:a.link,class:"image-slide"},{default:c(()=>[t("img",{src:a.link,alt:a.title},null,8,I),t("div",k,[t("div",x,[t("h3",b,i(a.title),1),t("p",A,i(a.description),1),t("div",N,[t("span",P,i(a.author),1),t("span",B,i(a.date),1)])])])]),_:2},1024))),128))]),_:1},8,["modules","class","style"])}const F=d(v,[["render",j],["__scopeId","data-v-8fe3cff3"],["__file","ImageSwiper.vue"]]);export{F as I};