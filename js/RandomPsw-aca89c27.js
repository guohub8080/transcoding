import{v as M,l as E}from"./index-2e9fa4d9.js";import{_ as N}from"./plugin-vue_export-helper-893979e1.js";import{d as j,q as L,r as B,o as U,a as D,b as y,g as d,E as v,F as $,j as P,p as T,k as q,v as A,t as H,l as m}from"./index-3d9dc7ac.js";const z=(t,u,n=!1)=>{const r=(u-t)*Math.random()+t;return n?r:Math.floor(r)},I=(t,u=1)=>{if(u===1)return t[Math.floor(Math.random()*t.length)];let n=t.slice(0),r=t.length,h=r-u,_,w;for(;r-- >h;)w=Math.floor((r+1)*Math.random()),_=n[w],n[w]=n[r],n[r]=_;return n.slice(h)},S=t=>{if(t.length===0)return t;const u=z(0,t.length);return t.substring(u,u+1)};let G=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((u,n)=>(n&=63,n<36?u+=n.toString(36):n<62?u+=(n-26).toString(36).toUpperCase():n>62?u+="-":u+="_",u),""),F;const J=new Uint8Array(16);function K(){if(!F&&(F=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!F))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return F(J)}const i=[];for(let t=0;t<256;++t)i.push((t+256).toString(16).slice(1));function O(t,u=0){return(i[t[u+0]]+i[t[u+1]]+i[t[u+2]]+i[t[u+3]]+"-"+i[t[u+4]]+i[t[u+5]]+"-"+i[t[u+6]]+i[t[u+7]]+"-"+i[t[u+8]]+i[t[u+9]]+"-"+i[t[u+10]]+i[t[u+11]]+i[t[u+12]]+i[t[u+13]]+i[t[u+14]]+i[t[u+15]]).toLowerCase()}const Q=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var V={randomUUID:Q};function W(t,u,n){if(V.randomUUID&&!u&&!t)return V.randomUUID();t=t||{};const r=t.random||(t.rng||K)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,u){n=n||0;for(let h=0;h<16;++h)u[n+h]=r[h];return u}return O(r)}const X=t=>(T("data-v-5a5daeec"),t=t(),q(),t),Y={class:"length"},Z={class:"gen"},ee=m("\u5168\u5927\u5199\u5B57\u6BCD"),te=m("\u5168\u5C0F\u5199\u5B57\u6BCD"),ue=m("\u5168\u6570\u5B57"),ne=m("\u5927\u5C0F\u5199\u5B57\u6BCD"),oe=m("\u5927\u5C0F\u5199\u5B57\u6BCD + \u6570\u5B57 + \u7279\u6B8A\u5B57\u7B26"),se=m("\u5927\u5C0F\u5199\u5B57\u6BCD + \u7279\u6B8A\u5B57\u7B26"),le=m("\u5927\u5C0F\u5199\u5B57\u6BCD + \u6570\u5B57"),re=m("\u5168\u968F\u673A\u751F\u6210"),ae=m("\u968F\u673AUUID \u5927\u5199"),ie=m("\u968F\u673AUUID \u5C0F\u5199"),de=m("\u968F\u673Ananoid \u5927\u5199"),pe=m("\u968F\u673Ananoid \u5C0F\u5199"),ve={class:"history"},me=["onClick"],_e=X(()=>y("div",{style:{height:"15rem"}},null,-1)),he=j({setup(t){const{toClipboard:u}=M(),n={cap:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",low:"abcdefghijklmnopqrstuvwxyz",num:"0123456789",special:"~!@#$%^&*()_+-=<>?/[];:."},r=(p=!1)=>{let e=W();p&&(e=e.toUpperCase()),o.value.history.unshift(e)},h=(p=!1)=>{let e=G();p&&(e=e.toUpperCase()),o.value.history.unshift(e)},_=(p,e,a,c)=>{let s="";const b=o.value.history.length,l=(g,f)=>{let k="";for(let x=0;x<f;x++)k+=S(g);return k},C=e&&p;if(e&&!p&&!a&&!c)s=n.cap,o.value.history.unshift(l(s,o.value.psw_length));else if(!e&&p&&!a&&!c)s=n.low,o.value.history.unshift(l(s,o.value.psw_length));else if(C&&!a&&!c)s=n.cap+n.low,o.value.history.unshift(l(s,o.value.psw_length));else if(!e&&!p&&a&&!c)s=n.num,o.value.history.unshift(l(s,o.value.psw_length));else if(C){const g=S(n.cap+n.low);if(a&&!c){s=n.low+n.cap+n.num;const f=g+l(s,o.value.psw_length-1);o.value.history.unshift(f)}else if(a&&c){s=n.low+n.cap+n.num+n.special;const f=g+l(s,o.value.psw_length-1);o.value.history.unshift(f)}else if(!a&&c){s=n.low+n.cap+n.special;const f=g+l(s,o.value.psw_length-1);o.value.history.unshift(f)}}Boolean(b===o.value.history.length)||(u(o.value.history[0]),A.success("\u5DF2\u81EA\u52A8\u590D\u5236\u5230\u526A\u5207\u677F"))},w=()=>{const p=o.value.history.length;for(;p===o.value.history.length;){let e=[];for(let a=1;a<=4;a++)e.push(I([!0,!1]));for(;e.findIndex(a=>a===!0)===-1;){e=[];for(let a=1;a<=4;a++)e.push(I([!0,!1]))}_(e[0],e[1],e[2],e[3])}},o=L({is_all_selected:!1,psw_length:32,history:[]}),R=p=>{const e=o.value.history[p];u(e),A.success(`\u5DF2\u590D\u5236 "${E(e,40)}"`)};return(p,e)=>{const a=B("a-input-number"),c=B("a-slider"),s=B("a-button"),b=B("a-divider");return U(),D($,null,[y("h1",{onClick:e[0]||(e[0]=l=>p.$router.go(0))},"\u968F\u673A\u5B57\u7B26\u751F\u6210"),y("div",Y,[d(a,{min:"10",max:"100","addon-before":"\u751F\u6210\u4F4D\u6570",style:{width:"9rem"},value:o.value.psw_length,"onUpdate:value":e[1]||(e[1]=l=>o.value.psw_length=l)},null,8,["value"]),y("span",null,[d(c,{min:10,max:100,value:o.value.psw_length,"onUpdate:value":e[2]||(e[2]=l=>o.value.psw_length=l)},null,8,["value"])])]),y("div",Z,[d(s,{class:"normal_button",onClick:e[3]||(e[3]=l=>_(!1,!0,!1,!1))},{default:v(()=>[ee]),_:1}),d(s,{class:"normal_button",onClick:e[4]||(e[4]=l=>_(!0,!1,!1,!1))},{default:v(()=>[te]),_:1}),d(s,{class:"normal_button",onClick:e[5]||(e[5]=l=>_(!1,!1,!0,!1))},{default:v(()=>[ue]),_:1}),d(s,{class:"normal_button",onClick:e[6]||(e[6]=l=>_(!0,!0,!1,!1))},{default:v(()=>[ne]),_:1}),d(s,{class:"normal_button",onClick:e[7]||(e[7]=l=>_(!0,!0,!0,!0))},{default:v(()=>[oe]),_:1}),d(s,{class:"normal_button",onClick:e[8]||(e[8]=l=>_(!0,!0,!1,!0))},{default:v(()=>[se]),_:1}),d(s,{class:"normal_button",onClick:e[9]||(e[9]=l=>_(!0,!0,!0,!1))},{default:v(()=>[le]),_:1}),d(s,{type:"primary",class:"normal_button",onClick:e[10]||(e[10]=l=>w())},{default:v(()=>[re]),_:1}),d(b,{style:{"margin-top":"0.4rem","margin-bottom":"0.4rem"}}),d(s,{class:"normal_button",onClick:e[11]||(e[11]=l=>r(!0))},{default:v(()=>[ae]),_:1}),d(s,{class:"normal_button",onClick:e[12]||(e[12]=l=>r())},{default:v(()=>[ie]),_:1}),d(s,{class:"normal_button",onClick:e[13]||(e[13]=l=>h(!0))},{default:v(()=>[de]),_:1}),d(s,{class:"normal_button",onClick:e[14]||(e[14]=l=>h())},{default:v(()=>[pe]),_:1})]),y("div",ve,[(U(!0),D($,null,P(o.value.history,(l,C)=>(U(),D("div",{class:"item",onClick:g=>R(C)},H(l),9,me))),256))]),_e],64)}}});var ye=N(he,[["__scopeId","data-v-5a5daeec"]]);export{ye as default};