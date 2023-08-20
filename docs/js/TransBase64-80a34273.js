import{d as b,o as v,a as f,b as e,t as a,n as h,e as n,h as z,s as H,c as x,w as R,r as k,g as y,i as F,F as $,j,p as K,k as L,l as M}from"./index-0a53742f.js";import{u as E,a as q}from"./index-80ca1e97.js";import{_ as A}from"./plugin-vue_export-helper-893979e1.js";import"./index-42746ce2.js";const G={class:"single_history"},J={class:"first_line"},O={class:"tag"},P={class:"content"},Q={class:"content"},W=b({props:{history:null,index:null},setup(l){const s=l,m=E(),{base64_history:w,delete_b64_history:B,copy_input:_,copy_output:c}=m,d=(i=!0)=>s.history.method==="encode"?i?"encode":"decode":i?"decode":"encode";return(i,t)=>(v(),f("div",G,[e("table",null,[e("tr",J,[e("td",O,[e("span",null,a(s.index+1),1),e("span",{class:h(d())},a(s.history.method.toString().toUpperCase()),3)]),e("td",null,[e("a",{onClick:t[0]||(t[0]=r=>n(_)(s.index))},"\u590D\u5236\u8F93\u5165"),e("a",{onClick:t[1]||(t[1]=r=>n(c)(s.index))},"\u590D\u5236\u8F93\u51FA"),e("a",{onClick:t[2]||(t[2]=r=>n(B)(s.index))},"\u5220\u9664\u8BB0\u5F55")])]),e("tr",P,[e("td",null,"From ("+a(s.history.origin_length)+")",1),e("td",{class:h(["key_up",d()]),onClick:t[3]||(t[3]=r=>n(_)(s.index))},a(s.history.origin_text),3)]),e("tr",Q,[e("td",null,"To ("+a(s.history.trans_length)+")",1),e("td",{class:h(["key_down",d(!1)]),onClick:t[4]||(t[4]=r=>n(c)(s.index))},a(s.history.trans_text),3)])])]))}});var X=A(W,[["__scopeId","data-v-f7166c7c"]]);const S=l=>(K("data-v-6dfb94f6"),l=l(),L(),l),Y={class:"config"},Z={class:"history_mode"},ee=S(()=>e("span",null,"\u65B0\u8BB0\u5F55\u5728\u4E0B",-1)),te=S(()=>e("span",null,"\u65B0\u7EAA\u5F55\u5728\u4E0A",-1)),se=M("\u8F93\u5165\u957F\u5EA6 "),ne={class:"under_input"},oe={class:"history"},ue={key:"index"},re=b({setup(l){z(g=>({fa1af916:n(V)}));const{shift:s,space:m,enter:w,ctrl:B,alt_enter:_,command_enter:c,ctrl_enter:d}=q(),i=E(),{base64_input:t,base64_history_reverse:r}=H(i),{base64_history:C,do_b64:p,revert_b64_history:T}=i,I=x(()=>t.value.trim().length),V=x(()=>C.length==0?0:1);return R(()=>{(c.value||d.value)&&p(),_.value&&p(!1)}),(g,o)=>{const D=k("a-switch"),N=k("a-textarea");return v(),f($,null,[e("h1",{onClick:o[0]||(o[0]=u=>g.$router.go(0))},"Base64\u52A0\u89E3\u5BC6"),e("div",Y,[e("div",Z,[ee,y(D,{size:"small",checked:n(r),"onUpdate:checked":o[1]||(o[1]=u=>F(r)?r.value=u:null)},null,8,["checked"]),te]),e("div",{class:"input_length",onClick:o[2]||(o[2]=u=>n(T)())},[e("span",null,[se,e("b",null,a(n(I)),1)])])]),y(N,{class:"input_frame",placeholder:"\u8BF7\u8F93\u5165\u5C06\u8981\u52A0\u5BC6\u7684\u6587\u672C\u6216\u51C6\u5907\u89E3\u5BC6\u7684Base64\u6587\u672C",value:n(t),"onUpdate:value":o[3]||(o[3]=u=>F(t)?t.value=u:null)},null,8,["value"]),e("div",ne,[e("div",null,[e("a",{onClick:o[4]||(o[4]=u=>n(p)())},"\u25B6 \u666E\u901A\u6587\u672C\u2192Base64\u7F16\u7801 (encode)")]),e("div",null,[e("a",{onClick:o[5]||(o[5]=u=>n(p)(!1))},"\u25B6 Base64\u7F16\u7801\u2192\u539F\u6587\u672C (decode)")])]),e("div",oe,[(v(!0),f($,null,j(n(C),(u,U)=>(v(),f("div",ue,[y(X,{history:u,index:U},null,8,["history","index"])]))),128))])],64)}}});var _e=A(re,[["__scopeId","data-v-6dfb94f6"]]);export{_e as default};
