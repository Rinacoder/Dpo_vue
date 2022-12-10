(function(){"use strict";var l={122:function(l,n,t){var e=t(963),o=t(252);function r(l,n,t,e,r,a){const u=(0,o.up)("ResumeText");return(0,o.wg)(),(0,o.j4)(u)}var a=t(577);const u={class:"ResumeText"},i={class:"container"},s=(0,o._)("header",{class:"pb-3 mb-4 border-bottom",style:{"margin-top":"-45px"}},[(0,o._)("a",{href:"/",class:"d-flex align-items-center text-dark text-decoration-none"},[(0,o._)("img",{src:"https://dummyimage.com/200x200/061330/949dff&text=R",height:"30"}),(0,o._)("span",{class:"fs-4 m-2"},"Резюме")])],-1),c={class:"row row-cols-1 row-cols-md-2 g-4"},d={class:"col-md-4"},p={class:"card h-100"},_={class:"card-body"},m=(0,o._)("h4",null,"Фото",-1),f=(0,o._)("h4",null,"Фамилия",-1),y=(0,o._)("h4",null,"Имя",-1),h=(0,o._)("h4",null,"Дата рождения",-1),g=(0,o._)("h4",null,"Город",-1),w=(0,o._)("h4",null,"Телефон",-1),v=(0,o._)("h4",null,"Электронная почта",-1),b=(0,o._)("h4",null,"Образование",-1),k=(0,o._)("option",null,"Среднее",-1),x=(0,o._)("option",null,"Среднее специальное",-1),U=(0,o._)("option",null,"Неоконченное высшее",-1),z=(0,o._)("option",null,"Высшее",-1),V=[k,x,U,z],O={key:0},D={key:1},j=(0,o._)("h4",null,"Учебное заведение",-1),T=(0,o._)("h4",null,"Факультет",-1),R=(0,o._)("h4",null,"Специализация",-1),S=(0,o._)("h4",null,"Год окончания",-1),P=(0,o._)("h4",null,"Желаемая должность",-1),M=(0,o._)("h4",null,"Желаемый уровень дохода",-1),C=(0,o._)("h4",null,"Навыки",-1),Z=(0,o._)("h4",null,"О себе",-1),A={class:"col-md-8"},E={class:"card h-100"},F={class:"card-body text-start"},q={class:"d-flex align-items-center"},B={key:0},G=(0,o._)("img",{src:"https://travel-baikal.com/bitrix/templates/.default/components/bitrix/news.list/reviews/img/logo.jpg",height:"200"},null,-1),H=[G],I={key:1},J=["src"],K={class:"card border-0"},L=(0,o._)("br",null,null,-1),N=(0,o._)("br",null,null,-1),Q=(0,o._)("p",null,[(0,o._)("strong",null,"Контактная информация")],-1),W={key:0},X={key:1,class:"text-danger"},Y=(0,o._)("p",null,"Введите корректный телефон, от 6 до 10 цифр",-1),$=[Y],ll=(0,o._)("strong",null,"Образование:",-1),nl=(0,o._)("br",null,null,-1),tl={key:0},el={key:1},ol=(0,o._)("strong",null,"Учебное заведение:",-1),rl=(0,o._)("strong",null,"Факультет:",-1),al=(0,o._)("strong",null,"Специализация:",-1),ul={key:0},il=(0,o._)("strong",null,"Год окончания:",-1),sl=(0,o._)("br",null,null,-1),cl={key:1,class:"text-danger"},dl=(0,o._)("p",null," Введите корректный год окончания обучения, от 1900 до 2200 ",-1),pl=(0,o._)("br",null,null,-1),_l=[dl,pl],ml=(0,o._)("strong",null,"Желаемая должность:",-1),fl=(0,o._)("strong",null,"Желаемый уровень дохода:",-1),yl=(0,o._)("br",null,null,-1),hl=(0,o._)("p",null,[(0,o._)("strong",null,"Ключевые навыки:")],-1),gl={style:{"white-space":"pre-line"}},wl=(0,o._)("p",null,[(0,o._)("strong",null,"О себе")],-1),vl={style:{"white-space":"pre-line"}},bl=(0,o._)("footer",{class:"pt-3 mt-4 text-muted border-top"}," © 2022 ",-1);function kl(l,n,t,r,k,x){return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",i,[s,(0,o._)("div",c,[(0,o._)("div",d,[(0,o._)("div",p,[(0,o._)("div",_,[m,(0,o.wy)((0,o._)("input",{class:"form-control","onUpdate:modelValue":n[0]||(n[0]=l=>k.photo=l)},null,512),[[e.nr,k.photo]]),f,(0,o.wy)((0,o._)("input",{class:"form-control","onUpdate:modelValue":n[1]||(n[1]=l=>k.last_name=l)},null,512),[[e.nr,k.last_name]]),y,(0,o.wy)((0,o._)("input",{class:"form-control","onUpdate:modelValue":n[2]||(n[2]=l=>k.name=l)},null,512),[[e.nr,k.name]]),h,(0,o.wy)((0,o._)("input",{class:"form-control",type:"date","onUpdate:modelValue":n[3]||(n[3]=l=>k.birthdate=l)},null,512),[[e.nr,k.birthdate]]),g,(0,o.wy)((0,o._)("input",{class:"form-control","onUpdate:modelValue":n[4]||(n[4]=l=>k.city=l)},null,512),[[e.nr,k.city]]),w,(0,o.wy)((0,o._)("input",{class:"form-control",maxlength:"10",minlength:"6","onUpdate:modelValue":n[5]||(n[5]=l=>k.phone=l)},null,512),[[e.nr,k.phone]]),v,(0,o.wy)((0,o._)("input",{class:"form-control","onUpdate:modelValue":n[6]||(n[6]=l=>k.email=l)},null,512),[[e.nr,k.email]]),b,(0,o.wy)((0,o._)("select",{class:"form-control","onUpdate:modelValue":n[7]||(n[7]=l=>k.education=l)},V,512),[[e.bM,k.education]]),"Среднее"==k.education||""==k.education?((0,o.wg)(),(0,o.iD)("div",O)):((0,o.wg)(),(0,o.iD)("div",D,[j,(0,o.wy)((0,o._)("input",{class:"form-control","onUpdate:modelValue":n[8]||(n[8]=l=>k.educational_institution=l)},null,512),[[e.nr,k.educational_institution]]),T,(0,o.wy)((0,o._)("input",{class:"form-control","onUpdate:modelValue":n[9]||(n[9]=l=>k.faculty=l)},null,512),[[e.nr,k.faculty]]),R,(0,o.wy)((0,o._)("input",{class:"form-control","onUpdate:modelValue":n[10]||(n[10]=l=>k.specialization=l)},null,512),[[e.nr,k.specialization]]),S,(0,o.wy)((0,o._)("input",{class:"form-control",type:"number",maxlength:"4","onUpdate:modelValue":n[11]||(n[11]=l=>k.graduation=l)},null,512),[[e.nr,k.graduation]])])),P,(0,o.wy)((0,o._)("input",{class:"form-control","onUpdate:modelValue":n[12]||(n[12]=l=>k.profession=l)},null,512),[[e.nr,k.profession]]),M,(0,o.wy)((0,o._)("input",{class:"form-control",type:"number",min:"0","onUpdate:modelValue":n[13]||(n[13]=l=>k.salary=l)},null,512),[[e.nr,k.salary]]),C,(0,o.wy)((0,o._)("textarea",{class:"form-control",rows:"3","onUpdate:modelValue":n[14]||(n[14]=l=>k.skills=l)},null,512),[[e.nr,k.skills]]),Z,(0,o.wy)((0,o._)("textarea",{class:"form-control",rows:"3","onUpdate:modelValue":n[15]||(n[15]=l=>k.about_yourself=l)},null,512),[[e.nr,k.about_yourself]])])])]),(0,o._)("div",A,[(0,o._)("div",E,[(0,o._)("div",F,[(0,o._)("div",q,[""==k.photo?((0,o.wg)(),(0,o.iD)("div",B,H)):((0,o.wg)(),(0,o.iD)("div",I,[(0,o._)("img",{class:"m-2",src:k.photo,height:"200"},null,8,J)])),(0,o._)("div",K,[(0,o._)("p",null,[(0,o._)("strong",null,(0,a.zw)(k.last_name)+" "+(0,a.zw)(k.name),1)]),L,(0,o._)("p",null,"Дата рождения: "+(0,a.zw)(k.birthdate),1),(0,o._)("p",null,"Проживание: "+(0,a.zw)(k.city),1),N,Q,k.phone>1e5?((0,o.wg)(),(0,o.iD)("div",W,[(0,o._)("p",null,"Телефон: "+(0,a.zw)(k.phone),1)])):((0,o.wg)(),(0,o.iD)("div",X,$)),(0,o._)("p",null,"Электронная почта: "+(0,a.zw)(k.email),1)])]),(0,o._)("p",null,[ll,(0,o.Uk)(" "+(0,a.zw)(k.education),1)]),nl,"Среднее"==k.education||""==k.education?((0,o.wg)(),(0,o.iD)("div",tl)):((0,o.wg)(),(0,o.iD)("div",el,[(0,o._)("p",null,[ol,(0,o.Uk)(" "+(0,a.zw)(k.educational_institution),1)]),(0,o._)("p",null,[rl,(0,o.Uk)(" "+(0,a.zw)(k.faculty),1)]),(0,o._)("p",null,[al,(0,o.Uk)(" "+(0,a.zw)(k.specialization),1)]),k.graduation<2201&&k.graduation>1899?((0,o.wg)(),(0,o.iD)("div",ul,[(0,o._)("p",null,[il,(0,o.Uk)(" "+(0,a.zw)(k.graduation),1)]),sl])):((0,o.wg)(),(0,o.iD)("div",cl,_l))])),(0,o._)("p",null,[ml,(0,o.Uk)(" "+(0,a.zw)(k.profession),1)]),(0,o._)("p",null,[fl,(0,o.Uk)(" "+(0,a.zw)(k.salary),1)]),yl,hl,(0,o._)("p",gl,(0,a.zw)(k.skills),1),wl,(0,o._)("p",vl,(0,a.zw)(k.about_yourself),1)])])])]),bl])])}var xl={name:"ResumeText",data(){return{last_name:"",name:"",profession:"",city:"",photo:"",phone:"",email:"",birthdate:"",education:"",salary:"",skills:"",about_yourself:"",educational_institution:"",faculty:"",specialization:"",graduation:""}}},Ul=t(744);const zl=(0,Ul.Z)(xl,[["render",kl]]);var Vl=zl,Ol={name:"App",components:{ResumeText:Vl}};const Dl=(0,Ul.Z)(Ol,[["render",r]]);var jl=Dl;t(877);(0,e.ri)(jl).mount("#app")}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return l[e](r,r.exports,t),r.exports}t.m=l,function(){var l=[];t.O=function(n,e,o,r){if(!e){var a=1/0;for(c=0;c<l.length;c++){e=l[c][0],o=l[c][1],r=l[c][2];for(var u=!0,i=0;i<e.length;i++)(!1&r||a>=r)&&Object.keys(t.O).every((function(l){return t.O[l](e[i])}))?e.splice(i--,1):(u=!1,r<a&&(a=r));if(u){l.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}r=r||0;for(var c=l.length;c>0&&l[c-1][2]>r;c--)l[c]=l[c-1];l[c]=[e,o,r]}}(),function(){t.d=function(l,n){for(var e in n)t.o(n,e)&&!t.o(l,e)&&Object.defineProperty(l,e,{enumerable:!0,get:n[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(l){if("object"===typeof window)return window}}()}(),function(){t.o=function(l,n){return Object.prototype.hasOwnProperty.call(l,n)}}(),function(){t.r=function(l){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})}}(),function(){var l={143:0};t.O.j=function(n){return 0===l[n]};var n=function(n,e){var o,r,a=e[0],u=e[1],i=e[2],s=0;if(a.some((function(n){return 0!==l[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(i)var c=i(t)}for(n&&n(e);s<a.length;s++)r=a[s],t.o(l,r)&&l[r]&&l[r][0](),l[r]=0;return t.O(c)},e=self["webpackChunkresume"]=self["webpackChunkresume"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(122)}));e=t.O(e)})();
//# sourceMappingURL=app.f73d217b.js.map