(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"10f3":function(e,t,n){e.exports=n.p+"img/pokemon-logo.6cfb64fd.png"},"144a":function(e,t,n){"use strict";var r=n("84b8"),a=n.n(r);a.a},"218d":function(e,t,n){"use strict";var r=n("793b"),a=n.n(r);a.a},"479d":function(e,t,n){"use strict";var r=n("cae7"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getPokemons",(function(){return J})),n.d(r,"checkAnswer",(function(){return B})),n.d(r,"clickNext",(function(){return F})),n.d(r,"onChange",(function(){return X})),n.d(r,"redirectToHome",(function(){return K})),n.d(r,"getResults",(function(){return V})),n.d(r,"setName",(function(){return Y}));var a={};n.r(a),n.d(a,"questions",(function(){return Z})),n.d(a,"results",(function(){return ee})),n.d(a,"index",(function(){return te})),n.d(a,"score",(function(){return ne})),n.d(a,"name",(function(){return re})),n.d(a,"selected",(function(){return ae})),n.d(a,"total",(function(){return oe})),n.d(a,"show",(function(){return se})),n.d(a,"isCorrect",(function(){return ie}));n("14c6"),n("08c1"),n("4842"),n("d9fc"),n("f9e3"),n("2dd8");var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-navbar",{staticClass:"navbar",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[e.locale?n("b-nav-item-dropdown",{attrs:{right:"",text:e.locale}},e._l(e.locales,(function(t){return n("b-dropdown-item",{attrs:{right:""},on:{click:function(){return e.changeLocale(t)}}},[e._v("\n            "+e._s(t)+"\n          ")])})),1):e._e()],1)],1)],1),n("div",{staticClass:"app-container"},[n("router-view")],1)],1)},s=[],i=(n("ac6a"),n("456d"),{"enter your name":"Digite seu nome",start:"Começar",player:"Jogador",name:"Nome",score:"Pontuação","out of":"de",questions:"questões",Questions:"Questões","play again":"Jogar Novamente","game over":"Fim de Jogo","Who's That Pokémon?":"Quem é esse Pokemon?",Ok:"Confirmar",Next:"Próximo"}),u={"enter your name":"Enter your name",start:"Start",player:"Player",name:"Name",score:"Score","out of":"out of",questions:"questions",Questions:"Questions","play again":"Play again","game over":"Game over","Who's That Pokémon?":"Who's That Pokémon?",Ok:"Ok",Next:"Next"},c={en:u,"pt-BR":i},l=Object.keys(c),p={name:"app",data:function(){return{locales:l,locale:l[0]}},mounted:function(){this.$translate.setLang(l[0])},methods:{changeLocale:function(e){this.locale=e,this.$translate.setLang(e)}}},f=p,m=(n("034f"),n("2877")),h=Object(m["a"])(f,o,s,!1,null,null,null),d=h.exports,b=n("5f5b"),v=n("2b0e"),g=n("2f62"),w=n("a04f"),O=n.n(w),x=(n("96cf"),n("3b8d")),y=(n("7f7f"),n("5df3"),n("bc3a")),_=n.n(y),j=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://pokeapi.co/api/v2/pokemon/?limit=25");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n("89c7"),R=n.n(E),S=5,P=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return t=e.sent,e.next=5,T(t.results);case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(A(t).map((function(e){return N(e)})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:return e.t0=e.sent,e.t1=t.map((function(e){return e.name})),e.abrupt("return",{rightAnswer:e.t0,options:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Math.floor(Math.random()*t.length),e.next=3,C(t[n].url);case 3:return r=e.sent,e.abrupt("return",D(r,t[n].name));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){return R()(e,S)},D=function(e,t){return{name:t,img:G(t)||e.sprites.front_default}},z=function(e,t){return e<t-1},G=function(e){return"pikachu"===e&&I.img},I={name:"Pikapericles",img:"https://i.imgur.com/aKeLU4h.png"},U=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://pokemon-scores.herokuapp.com/results");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("https://pokemon-scores.herokuapp.com/results",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:return t=e.sent,e.abrupt("return",$(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Q(t,n),e.next=3,H(r);case 3:return e.next=5,L();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(e,t){return{name:e,score:t}},$=function(e){var t=e.splice(-3).reverse();return t.map((function(e){return{name:e.name,score:e.score}}))},W={SET_QUESTIONS:"setQuestions",TOGGLE_ANSWER:"toggleAnswer",UPDATE_INDEX:"updateIndex",UPDATE_SCORE:"updateScore",ON_CHANGE:"onChange",REDIRECT_TO_HOME:"redirectToHome",RESET_STORE:"resetStore",SET_RESULTS:"setResults",SET_NAME:"setName"},J=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,P();case 3:r=e.sent,n(W.SET_QUESTIONS,r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e){var t=e.commit;t(W.UPDATE_SCORE),t(W.TOGGLE_ANSWER)},F=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n(W.UPDATE_INDEX),n(W.TOGGLE_ANSWER);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(e,t){var n=e.commit;n(W.ON_CHANGE,t)},K=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,n(W.RESET_STORE);case 3:n(W.REDIRECT_TO_HOME);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,L();case 3:r=e.sent,n(W.SET_RESULTS,r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e,t){var n=e.commit;n(W.SET_NAME,t)},Z=function(e){var t=e.quiz;return t.questions},ee=function(e){var t=e.quiz;return t.results},te=function(e){var t=e.quiz;return t.index},ne=function(e){var t=e.quiz;return t.score},re=function(e){var t=e.quiz;return t.name},ae=function(e){var t=e.quiz;return t.selected},oe=function(e){var t=e.quiz;return t.total},se=function(e){var t=e.quiz;return t.show},ie=function(e){var t=e.quiz;return t.isCorrect},ue=n("bd86"),ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",{attrs:{sm:"6",offset:"3"}},[n("b-jumbotron",{attrs:{"bg-variant":"info","text-variant":"white"}},[n("h2",[n("strong",[e._v(e._s(e.t("game over")))])]),n("hr",{staticClass:"my-4"}),n("p",[n("strong",[e._v(e._s(e.t("name"))+": "+e._s(e.name))])]),n("p"),n("p",[n("strong",[e._v(e._s(e.t("score")+": "+e.score+" "+e.t("out of")+" "+e.total+" "+e.t("questions")))])]),n("div",{staticClass:"results"},[n("b-table",{attrs:{striped:"",hover:"",items:e.results}})],1),n("div",[n("b-button",{attrs:{pill:"",variant:"warning"},on:{click:e.redirectToHome}},[e._v(e._s(e.t("play again")))])],1)])],1)],1)],1)],1)},le=[];n("8e6e");function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach((function(t){Object(ue["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me={name:"endgame",computed:fe({},Object(g["c"])(["score","total","results","name"])),created:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getResults();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:fe({},Object(g["b"])(["redirectToHome","getResults"]))},he=me,de=(n("479d"),Object(m["a"])(he,ce,le,!1,null,null,null)),be=de.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",{attrs:{sm:"4"}},[e.questions.length?n("Header",{attrs:{index:e.index,score:e.score,total:e.total,name:e.name}}):e._e()],1),n("b-col",{attrs:{sm:"5"}},[e.questions.length?n("Questions",{attrs:{options:e.questions[e.index].options,rightAnswer:e.questions[e.index].rightAnswer,score:e.score,index:e.index,total:e.total,name:e.name,show:e.show,isCorrect:e.isCorrect,checkAnswer:e.checkAnswer,onChange:e.onChange,clickNext:e.clickNext,loading:e.loading},model:{value:e.index,callback:function(t){e.index=t},expression:"index"}}):e._e()],1)],1)],1)],1)},ge=[],we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{staticClass:"quiz-container"},[n("div",[n("h3",[e._v(e._s(e.t("Who's That Pokémon?")))]),n("div",{staticClass:"quiz-img"},[e.loading?n("b-spinner",{staticClass:"loading",attrs:{type:"grow",label:"Spinning"}}):n("img",{class:e.show?"show-pokemon":"hide-pokemon",attrs:{alt:"Pokemon",src:e.rightAnswer.img}})],1)]),n("hr",{staticClass:"my-4"}),n("div",[n("b-form-group",e._l(e.options,(function(t){return n("b-form-radio",{key:t,class:[e.isSelected(t)&&e.show&&e.isCorrect?"right-answer":e.isSelected(t)&&e.show&&!e.isCorrect?"wrong-answer":""],attrs:{name:"pokemon-options",value:t},on:{change:e.onChange}},[e._v(e._s(t))])})),1)],1),n("div",{staticClass:"actions"},[n("b-button",{attrs:{"right-align":"",pill:"",variant:"success",href:"#",disabled:e.show},on:{click:e.checkAnswer}},[e._v("\n        "+e._s(e.t("Ok"))+"\n      ")]),n("b-button",{attrs:{"right-align":"",pill:"",variant:"info",href:"#",disabled:!e.show},on:{click:e.onClick}},[e._v(e._s(e.t("Next")))])],1)])],1)},Oe=[],xe=(n("c5f6"),{props:{rightAnswer:Object,options:Array,checkAnswer:Function,show:Boolean,name:String,score:Number,index:Number,total:Number,isCorrect:Boolean,loading:Boolean,onChange:Function,clickNext:Function},methods:{isSelected:function(e){return this.rightAnswer.name===e},onClick:function(){return z(this.index,this.total)?this.clickNext():this.saveResult()},saveResult:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M(this.name,this.score);case 2:Be.push("/endgame");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),ye=xe,_e=(n("144a"),Object(m["a"])(ye,we,Oe,!1,null,null,null)),je=_e.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("b-jumbotron",[n("h4",[n("b-badge",{attrs:{variant:"warning"}},[e._v(e._s(e.t("player"))+": "+e._s(e.name))])],1),n("h4",[n("b-badge",{attrs:{variant:"success"}},[e._v(e._s(e.t("score"))+": "+e._s(e.score))])],1),n("h4",[n("b-badge",{attrs:{variant:"info"}},[e._v(e._s(e.t("Questions"))+": "+e._s(e._f("convertIndex")(e.index))+" / "+e._s(e.total))])],1)])],1)},Ee=[],Re={props:{name:String,score:Number,index:Number,total:Number},filters:{convertIndex:function(e){return parseInt(e)+1}}},Se=Re,Pe=Object(m["a"])(Se,ke,Ee,!1,null,null,null),Ce=Pe.exports;function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(n,!0).forEach((function(t){Object(ue["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var qe={name:"quiz",components:{Questions:je,Header:Ce},data:function(){return{loading:!0}},computed:Ne({},Object(g["c"])(["questions","name","index","score","selected","total","show","isCorrect"])),created:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getPokemons();case 2:this.loading=!1;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:Ne({},Object(g["b"])(["getPokemons","checkAnswer","clickNext","onChange"]))},Ae=qe,De=Object(m["a"])(Ae,ve,ge,!1,null,null,null),ze=De.exports,Ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",{attrs:{sm:"6",offset:"3"}},[r("b-jumbotron",{attrs:{"bg-variant":"info","text-variant":"white"}},[r("img",{staticClass:"logo",attrs:{src:n("10f3"),alt:"Pokemon logo"}}),r("hr",{staticClass:"my-4"}),r("div",[r("b-form-input",{attrs:{value:e.name,placeholder:e.t("enter your name")},on:{input:e.setName}})],1),r("div",[r("b-button",{attrs:{pill:"",variant:"danger"},on:{click:e.startGame}},[e._v("\n              "+e._s(e.t("start"))+"\n            ")])],1)])],1)],1)],1)],1)},Ie=[];function Ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ue(n,!0).forEach((function(t){Object(ue["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ue(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Le={name:"startgame",computed:He({},Object(g["c"])(["name"])),methods:He({},Object(g["b"])(["setName"]),{startGame:function(){Be.push("/quiz")}})},Me=Le,Qe=(n("218d"),Object(m["a"])(Me,Ge,Ie,!1,null,null,null)),$e=Qe.exports,We=n("8c4f");v["default"].use(We["a"]);var Je,Be=new We["a"]({mode:"history",routes:[{path:"/",component:$e},{path:"/quiz",component:ze},{path:"/endgame",component:be}]}),Fe={questions:[],results:[],name:null,index:0,score:0,selected:"",total:0,show:!1,isCorrect:!1},Xe=(Je={},Object(ue["a"])(Je,W.SET_QUESTIONS,(function(e,t){e.questions=t,e.total=t.length})),Object(ue["a"])(Je,W.TOGGLE_ANSWER,(function(e){e.show=!e.show})),Object(ue["a"])(Je,W.UPDATE_INDEX,(function(e){return e.isCorrect=null,e.index++})),Object(ue["a"])(Je,W.UPDATE_SCORE,(function(e){return e.questions[e.index].rightAnswer.name==e.selected?(e.isCorrect=!0,e.score++):e.isCorrect=!1})),Object(ue["a"])(Je,W.ON_CHANGE,(function(e,t){e.selected=t})),Object(ue["a"])(Je,W.REDIRECT_TO_HOME,(function(){Be.push("/")})),Object(ue["a"])(Je,W.RESET_STORE,(function(e){Object.keys(Fe).forEach((function(t){e[t]=Fe[t]}))})),Object(ue["a"])(Je,W.SET_RESULTS,(function(e,t){e.results=t})),Object(ue["a"])(Je,W.SET_NAME,(function(e,t){e.name=t})),Je),Ke={questions:[],results:[],name:null,index:0,score:0,selected:"",total:0,show:!1,isCorrect:!1},Ve={state:Ke,mutations:Xe},Ye={actions:r,getters:a,modules:{quiz:Ve},strict:!0};v["default"].use(g["a"]),v["default"].use(O.a),v["default"].use(b["a"]),v["default"].locales(c),v["default"].config.productionTip=!1;var Ze=new g["a"].Store(Ye);new v["default"]({router:Be,store:Ze,render:function(e){return e(d)}}).$mount("#app")},"64a9":function(e,t,n){},"793b":function(e,t,n){},"84b8":function(e,t,n){},cae7:function(e,t,n){}});
//# sourceMappingURL=app.f6c5a780.js.map