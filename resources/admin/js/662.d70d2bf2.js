"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[662],{87662:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-view",[n("a-row",[n("a-col",{attrs:{span:24}},[e.options.developer_mode?n("div",{staticClass:"card-container"},[n("a-tabs",{attrs:{type:"card"},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},e._l(e.panes,(function(t){return n("a-tab-pane",{key:t.key},[n("span",{attrs:{slot:"tab"},slot:"tab"},[n("a-icon",{attrs:{type:t.icon}}),e._v(e._s(t.title)+" ")],1),n(t.component,{tag:"component"})],1)})),1)],1):n("a-alert",{attrs:{description:"当前没有启用开发者选项，请启用之后再访问该页面！",message:"提示",showIcon:"",type:"error"}})],1)],1)],1)},i=[],a=n(44729),r=(n(31875),n(29888),n(45107),n(98906)),c=n(81993),s={components:{PageView:c.B4},data:function(){var e=[{title:"运行环境",icon:"safety",component:function(){return n.e(942).then(n.bind(n,38942))},key:"environment"},{title:"实时日志",icon:"code",component:function(){return Promise.all([n.e(976),n.e(192),n.e(164),n.e(53)]).then(n.bind(n,56053))},key:"runtimeLogs"},{title:"系统变量",icon:"table",component:function(){return n.e(447).then(n.bind(n,14447))},key:"optionsList"},{title:"静态存储",icon:"cloud",component:function(){return Promise.all([n.e(976),n.e(376)]).then(n.bind(n,2376))},key:"staticStorage"},{title:"设置",icon:"setting",component:function(){return n.e(566).then(n.bind(n,14566))},key:"settings"}];return{activeKey:e[0].key,panes:e}},computed:(0,a.Z)({},(0,r.Se)(["options"])),beforeRouteEnter:function(e,t,n){var o=e.query.activeKey;n((function(e){o&&(e.activeKey=o)}))},watch:{activeKey:function(e){if(e){var t=this.$router.history.current.path;this.$router.push({path:t,query:{activeKey:e}}).catch((function(e){return e}))}}}},u=s,l=n(19577),p=(0,l.Z)(u,o,i,!1,null,null,null),y=p.exports}}]);