(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+6XX":function(t,e,n){var r=n("y1pI");t.exports=function(t){return r(this.__data__,t)>-1}},"/9aa":function(t,e,n){var r=n("NykK"),o=n("ExA7");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},"2gN3":function(t,e,n){var r=n("Kz5y");t.exports=r["__core-js_shared__"]},"3Fdi":function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},"44Ds":function(t,e,n){var r=n("e4Nc");function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},"4kuk":function(t,e,n){var r=n("SfRM"),o=n("Hvzi"),i=n("u8Dt"),a=n("ekgI"),s=n("JSQU");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},"4uTw":function(t,e,n){var r=n("Z0cm"),o=n("9ggG"),i=n("GNiM"),a=n("dt0z");t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:i(a(t))}},"99Un":function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",function(){return j});var r=n("ofXK"),o=n("3Pt+"),i=n("a0Xn"),a=n("mrSG"),s=n("AytR"),c=n("mwIZ"),u=n.n(c),p=n("wd/R"),f=n("JX91"),l=n("vkgz"),h=n("Kj3r"),v=n("eIep"),d=n("fXoL"),y=n("E2ls"),b=n("ej43");let x=(()=>{class t{constructor(t,e,n,r){this.formBuilder=t,this.installmentService=e,this.authenticationService=n,this.currencyPipe=r,this.filters=this.formBuilder.group({period:this.formBuilder.control(10,[o.n.min(1),o.n.max(10)]),periodType:"months"}),this.chart=new i.a({chart:{type:"columnrange",inverted:!0},title:{text:"Proje\xe7\xe3o de faturas"},subtitle:{text:"Os valores das faturas s\xe3o baseados nos parcelamentos lan\xe7ados"},xAxis:{categories:[],title:{text:"Nome do parcelamento"}},yAxis:{categories:[],title:{text:"m\xeas/ano de fechamento da fatura"},labels:{formatter:({value:t,chart:e})=>{const n=u()(e,`userOptions.totalPerMonth.${t}`),r=n?this.currencyPipe.transform(n):"";return[p(t).format("MM/YYYY"),r].join("<br>")}}},tooltip:{enabled:!0,formatter:function(){const t=this.point.options.installment,e=[t.startDate,t.endDate].map(t=>p(t.toDate()).format("MM/YYYY"));return[`Inicio: ${e[0]}`,`T\xe9rmino: ${e[1]}`].join("<br>")}},plotOptions:{columnrange:{minPointLength:10,dataLabels:{enabled:!0,className:"text-center",useHTML:!0,formatter:function(){return(0,this.series.yAxis.userOptions.labels.formatter)({value:this.series.yAxis.categories[this.y]})}}}},legend:{enabled:!1},series:[{name:"Prazo",data:[]}]})}ngOnInit(){this.watchFiltersChanges()}watchFiltersChanges(){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.chart.ref$.toPromise();this.filters.valueChanges.pipe(Object(f.a)(this.filters.value),Object(l.a)(()=>t.showLoading()),Object(h.a)(s.a.debounceTime)).pipe(Object(v.a)(t=>{switch(t.periodType){case"months":default:return this.loadDataByMonths(t.period)}})).subscribe(e=>Object(a.a)(this,void 0,void 0,function*(){const n=e.map(t=>t.title),r={},o=e.map(t=>{const e=t.applicableMonths.filter(t=>this.viewMonths.indexOf(t)>-1).sort();e.forEach(e=>{r[e]=(r[e]||0)+t.valueMonthIndividual[e]});const n=e[0],o=e[e.length-1];return{low:this.viewMonths.findIndex(t=>t===n),high:this.viewMonths.findIndex(t=>t===o),name:t.title,installment:t}});t.xAxis[0].setCategories(n),t.yAxis[0].setCategories(this.viewMonths),t.series[0].setData(o,!0),t.userOptions.totalPerMonth=r,t.redraw(),t.hideLoading()}))})}loadDataByMonths(t){const e=p().add(-Math.ceil(t/2),"months");return this.viewMonths=new Array(t).fill("").map((t,n)=>(n>0&&e.add(1,"month"),e.format("YYYY-MM"))),this.authenticationService.auth.user.pipe(Object(v.a)(t=>this.installmentService.collection(e=>e.where("userId","==",t.uid).where("applicableMonths","array-contains-any",this.viewMonths)).valueChanges()))}}return t.\u0275fac=function(e){return new(e||t)(d.Ob(o.c),d.Ob(y.a),d.Ob(b.a),d.Ob(r.d))},t.\u0275cmp=d.Ib({type:t,selectors:[["fa-invoice-projection"]],features:[d.Cb([r.d])],decls:1,vars:1,consts:[[3,"chart"]],template:function(t,e){1&t&&d.Pb(0,"div",0),2&t&&d.lc("chart",e.chart)},directives:[i.b],styles:[""]}),t})(),m=(()=>{class t{}return t.\u0275mod=d.Mb({type:t}),t.\u0275inj=d.Lb({factory:function(e){return new(e||t)},imports:[[r.c,o.m,i.c]]}),t})();var _=n("tyNb");const g=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Ib({type:t,selectors:[["fa-home-page"]],decls:5,vars:0,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"card"],[1,"card-body"]],template:function(t,e){1&t&&(d.Ub(0,"div",0),d.Ub(1,"div",1),d.Ub(2,"div",2),d.Ub(3,"div",3),d.Pb(4,"fa-invoice-projection",4),d.Tb(),d.Tb(),d.Tb(),d.Tb())},directives:[x],styles:[""]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=d.Mb({type:t}),t.\u0275inj=d.Lb({factory:function(e){return new(e||t)},imports:[[_.f.forChild(g)],_.f]}),t})(),j=(()=>{class t{}return t.\u0275mod=d.Mb({type:t}),t.\u0275inj=d.Lb({factory:function(e){return new(e||t)},imports:[[r.c,w,m]]}),t})()},"9Nap":function(t,e,n){var r=n("/9aa");t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},"9ggG":function(t,e,n){var r=n("Z0cm"),o=n("/9aa"),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||a.test(t)||!i.test(t)||null!=e&&t in Object(e)}},AP2z:function(t,e,n){var r=n("nmnc"),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(c){}var o=a.call(t);return r&&(e?t[s]=n:delete t[s]),o}},Cwc5:function(t,e,n){var r=n("NKxu"),o=n("Npjl");t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},E2jh:function(t,e,n){var r,o=n("2gN3"),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},EpBk:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GNiM:function(t,e,n){var r=n("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)}),e});t.exports=a},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},H8j4:function(t,e,n){var r=n("QkVE");t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},Hvzi:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},I01J:function(t,e,n){var r=n("44Ds");t.exports=function(t){var e=r(t,function(t){return 500===n.size&&n.clear(),t}),n=e.cache;return e}},JHgL:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).get(t)}},JSQU:function(t,e,n){var r=n("YESw");t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},KMkd:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},NKxu:function(t,e,n){var r=n("lSCD"),o=n("E2jh"),i=n("GoyQ"),a=n("3Fdi"),s=/^\[object .+?Constructor\]$/,c=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?c:s).test(a(t))}},Npjl:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},NykK:function(t,e,n){var r=n("nmnc"),o=n("AP2z"),i=n("KfNM"),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},QkVE:function(t,e,n){var r=n("EpBk");t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},SfRM:function(t,e,n){var r=n("YESw");t.exports=function(){this.__data__=r?r(null):{},this.size=0}},WFqU:function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},Xi7e:function(t,e,n){var r=n("KMkd"),o=n("adU4"),i=n("tMB7"),a=n("+6XX"),s=n("Z8oC");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},YESw:function(t,e,n){var r=n("Cwc5")(Object,"create");t.exports=r},Z0cm:function(t,e){t.exports=Array.isArray},Z8oC:function(t,e,n){var r=n("y1pI");t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},ZWtO:function(t,e,n){var r=n("4uTw"),o=n("9Nap");t.exports=function(t,e){for(var n=0,i=(e=r(e,t)).length;null!=t&&n<i;)t=t[o(e[n++])];return n&&n==i?t:void 0}},adU4:function(t,e,n){var r=n("y1pI"),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():o.call(e,n,1),--this.size,0))}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},e4Nc:function(t,e,n){var r=n("fGT3"),o=n("k+1r"),i=n("JHgL"),a=n("pSRY"),s=n("H8j4");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},ebwN:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Map");t.exports=r},ekgI:function(t,e,n){var r=n("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},fGT3:function(t,e,n){var r=n("4kuk"),o=n("Xi7e"),i=n("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},"k+1r":function(t,e,n){var r=n("QkVE");t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},lSCD:function(t,e,n){var r=n("NykK"),o=n("GoyQ");t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},ljhN:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},mwIZ:function(t,e,n){var r=n("ZWtO");t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},nmnc:function(t,e,n){var r=n("Kz5y");t.exports=r.Symbol},pSRY:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).has(t)}},tMB7:function(t,e,n){var r=n("y1pI");t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},u8Dt:function(t,e,n){var r=n("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},y1pI:function(t,e,n){var r=n("ljhN");t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},zoYe:function(t,e,n){var r=n("nmnc"),o=n("eUgh"),i=n("Z0cm"),a=n("/9aa"),s=r?r.prototype:void 0,c=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(a(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}}}]);