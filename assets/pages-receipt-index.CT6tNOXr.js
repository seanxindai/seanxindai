import{r as t,g as e,b as a,w as l,F as s,i as u,o as d,d as n,t as o,j as i,I as p,c as f,k as r,e as c}from"./index-B7r1puz0.js";import{r as h,_}from"./uni-popup.Dsih5xOn.js";import{_ as w}from"./successful.e-yiYfPL.js";import{_ as x}from"./_plugin-vue_export-helper.BCo6x5W8.js";const m=x({data:()=>({date:"2024-05-04",name:"张路浩",no:"TX945468415",updDateIndex:0,flows:[{id:1,name:"材料预审",date:"2024.10.31 19:22"},{id:2,name:"白名单资格预审",date:"2024.10.31 19:22"},{id:3,name:"特批资格预审",date:"2024.10.31 19:22"},{id:4,name:"信审人工审批",date:"2024.10.31 19:22"},{id:5,name:"信审人工放款",date:"2024.10.31 19:22"},{id:6,name:"材料预审",date:"2024.10.31 19:22"}]}),methods:{updateInfo(){this.$refs.updateInfoPopup.open("bottom")},updateFlow(t){let e=t.currentTarget.dataset.index;this.updDateIndex=e,console.log(this.updDateIndex),this.$refs.updateDatePopup.open("bottom")},input(t){this[t.currentTarget.dataset.key]=t.detail.value},inputDate(t){this.flows[this.updDateIndex].date=t.detail.value}}},[["render",function(x,m,g,y,v,I){const b=u,k=c,D=p,j=h(t("uni-popup"),_);return d(),e(s,null,[a(b,{id:"app"},{default:l((()=>[a(b,{style:{width:"90%",margin:"0 auto"}},{default:l((()=>[a(b,{style:{height:"2vh"}}),a(b,{class:"title"},{default:l((()=>[n("贷款申请流程")])),_:1}),a(b,{style:{height:"2vh"}}),a(b,{class:"header",onClick:I.updateInfo},{default:l((()=>[a(b,{class:"row info"},{default:l((()=>[a(b,{class:"info-title"},{default:l((()=>[n("客户姓名:")])),_:1}),a(b,{class:"info-v"},{default:l((()=>[n(o(v.name),1)])),_:1})])),_:1}),a(b,{class:"row info"},{default:l((()=>[a(b,{class:"info-title"},{default:l((()=>[n("审批编号:")])),_:1}),a(b,{class:"info-v"},{default:l((()=>[n(o(v.no),1)])),_:1})])),_:1}),a(b,{class:"row info"},{default:l((()=>[a(b,{class:"info-title"},{default:l((()=>[n("申请日期:")])),_:1}),a(b,{class:"info-v"},{default:l((()=>[n(o(v.date),1)])),_:1})])),_:1})])),_:1},8,["onClick"]),a(b,{style:{height:"10vh"}}),a(b,{class:"flows"},{default:l((()=>[(d(!0),e(s,null,i(v.flows,((t,e)=>(d(),f(b,null,{default:l((()=>[a(b,{onClick:I.updateFlow,"data-index":e,class:"flow"},{default:l((()=>[a(b,{class:"flow-icon-wrap"},{default:l((()=>[a(k,{class:"flow-icon",src:w})])),_:1}),a(b,{class:"flow-name"},{default:l((()=>[n(o(t.name),1)])),_:2},1024),a(b,{class:"flow-date"},{default:l((()=>[n(o(t.date),1)])),_:2},1024)])),_:2},1032,["onClick","data-index"]),a(b,{class:"row"},{default:l((()=>[a(b,{style:{width:"150rpx"}}),e<v.flows.length-1?(d(),f(b,{key:0,class:"arrow-wrap"})):r("",!0)])),_:2},1024)])),_:2},1024)))),256))])),_:1})])),_:1})])),_:1}),a(j,{"safe-area":!1,ref:"updateInfoPopup",type:"bottom","border-radius":"10px 10px 0 0"},{default:l((()=>[a(b,{style:{"min-height":"30vh","background-color":"white"}},{default:l((()=>[a(b,{style:{height:"50rpx","line-height":"50rpx","font-size":"32rpx",width:"100%","text-align":"center","font-weight":"bold"}},{default:l((()=>[n("编辑")])),_:1}),a(b,{style:{height:"20rpx"}}),a(b,{class:"upd-row"},{default:l((()=>[a(b,{class:"upd-title"},{default:l((()=>[n("姓名:")])),_:1}),a(b,null,{default:l((()=>[a(D,{value:v.name,onInput:I.input,class:"input","data-key":"name",type:"text"},null,8,["value","onInput"])])),_:1})])),_:1}),a(b,{class:"upd-row"},{default:l((()=>[a(b,{class:"upd-title"},{default:l((()=>[n("编号:")])),_:1}),a(b,null,{default:l((()=>[a(D,{value:v.no,onInput:I.input,class:"input","data-key":"no",type:"text"},null,8,["value","onInput"])])),_:1})])),_:1}),a(b,{class:"upd-row"},{default:l((()=>[a(b,{class:"upd-title"},{default:l((()=>[n("申请日期:")])),_:1}),a(b,null,{default:l((()=>[a(D,{value:v.date,onInput:I.input,class:"input","data-key":"date",type:"text"},null,8,["value","onInput"])])),_:1})])),_:1})])),_:1})])),_:1},512),a(j,{"safe-area":!1,ref:"updateDatePopup",type:"bottom","border-radius":"10px 10px 0 0"},{default:l((()=>[a(b,{style:{"min-height":"30vh","background-color":"white"}},{default:l((()=>[a(b,{style:{height:"50rpx","line-height":"50rpx","font-size":"32rpx",width:"100%","text-align":"center","font-weight":"bold"}},{default:l((()=>[n("编辑")])),_:1}),a(b,{style:{height:"20rpx"}}),a(b,{class:"upd-row"},{default:l((()=>[a(b,{class:"upd-title"},{default:l((()=>[n("日期:")])),_:1}),a(b,null,{default:l((()=>[a(D,{value:v.flows[v.updDateIndex].date,onInput:I.inputDate,class:"input",type:"text"},null,8,["value","onInput"])])),_:1})])),_:1})])),_:1})])),_:1},512)],64)}],["__scopeId","data-v-985b8705"]]);export{m as default};
