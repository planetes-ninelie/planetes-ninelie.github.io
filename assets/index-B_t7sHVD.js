import{a as _}from"./axios-Cm0UX6qg.js";import{E as w,_ as y,r as i,o as S,c as C,g as o,w as n,e as u,s as c,t as A}from"./index-x_ALk9kT.js";let h=_.create({baseURL:"https://mock.mengxuegu.com/mock/668ccdf6088ab0640457d1f2/api",timeout:5e3});h.interceptors.request.use(t=>t);h.interceptors.response.use(t=>t.data,t=>{let e="";switch(t.response.status){case 401:e="TOKEN过期";break;case 403:e="无权访问";break;case 404:e="请求资源找不到";break;case 500:e="服务器出现问题";break;default:e="网络出现异常";break}return w({type:"error",message:e}),Promise.reject(t)});const k=(t,e,a,d)=>h.get(`frontEnd/testPages/schoolAdmin/pageAdminSchool/?page=${t}/?limit=${e}/?userName=${a}/?phone=${d}`),x={data(){return{pageSize:15,currPage:1,userNameForm:"",phoneForm:"",tableData:[]}},methods:{handleSizeChange(t){this.pageSize=t,this.schoolAdminSelect()},handleCurrentChange(t){this.currPage=t,this.schoolAdminSelect()},select(){this.schoolAdminSelect()},async schoolDelete(t){try{await this.$confirm(`确定删除${t.account||""}?`,"信息",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const e=await this.$http({url:this.$http.adornUrl("admin/school/deleteAdminSchool"),method:"delete",params:this.$http.adornParams({userId:t.userId})});if(e.data.code===500)throw new Error(e.data.msg);this.$message({message:"删除成功",type:"success",duration:1500}),this.schoolAdminSelect()}catch(e){if(e.name==="DialogCancelledError")return;console.error("删除操作失败:",e.message||"error"),this.$message.error("删除操作失败:",e.message||"error")}},async schoolAdminSelect(){try{this.tableDataLoading=!0;const t=await k(this.currPage,this.pageSize,this.userNameForm,this.phoneForm);if(console.log(t),t.data.code==500)throw new Error(t.data.msg);{let e=t.data;e.data.records.forEach(a=>{Array.isArray(a.region)&&(a.region=a.region.join(" | "))}),this.tableData=e.data,this.tableDataLoading=!1}}catch(t){console.error("请求数据失败:",t.message),this.tableDataLoading=!1,this.$message.error(t.message||"加载数据失败，请检查网络或稍后重试")}},mounted(){this.schoolAdminSelect()},beforeRouteEnter(t,e,a){a(d=>{d.schoolAdminSelect()})},beforeRouteUpdate(t,e,a){this.schoolAdminSelect(),a()}}},z={style:{display:"flex","justify-content":"start","margin-top":"10px"}},$={"slot-scope":"scope"},v={"slot-scope":"scope"},D={style:{"text-align":"center","margin-top":"10px"}};function E(t,e,a,d,r,p){const m=i("el-button"),g=i("el-input"),s=i("el-table-column"),f=i("el-table"),b=i("el-pagination");return S(),C("div",null,[o(m,{type:"primary",icon:"el-icon-circle-plus-outline",onClick:e[0]||(e[0]=l=>t.$router.push("/frontEnd/testPages/schoolAmend")),disabled:""},{default:n(()=>[c("添加管理员")]),_:1}),u("div",z,[o(g,{modelValue:r.userNameForm,"onUpdate:modelValue":e[1]||(e[1]=l=>r.userNameForm=l),placeholder:"账号",class:"input"},null,8,["modelValue"]),o(g,{modelValue:r.phoneForm,"onUpdate:modelValue":e[2]||(e[2]=l=>r.phoneForm=l),placeholder:"手机号码",class:"input"},null,8,["modelValue"]),o(m,{type:"primary",icon:"el-icon-search",onClick:e[3]||(e[3]=l=>p.schoolAdminSelect())},{default:n(()=>[c("查询")]),_:1})]),o(f,{data:r.tableData.records,height:"calc(100vh - 300px)",class:"table",border:"","header-cell-style":{background:"#e6e6e6"}},{default:n(()=>[o(s,{fixed:"left",prop:"userId",label:"ID",width:"100"}),o(s,{label:"账号",prop:"userName",width:"150"}),o(s,{label:"所属角色",prop:"roleName",width:"150"}),o(s,{label:"邮箱",prop:"email",width:"190"}),o(s,{label:"手机号",prop:"mobile",width:"150"}),o(s,{label:"所属区域",prop:"region","show-overflow-tooltip":"",width:"200"}),o(s,{label:"创建时间",prop:"createTime",width:"190"}),o(s,{fixed:"right",label:"状态",prop:"status",width:"100"},{default:n(()=>[u("template",$,[c(A(t.scope.row.status==1?"正常":"禁用"),1)])]),_:1}),o(s,{fixed:"right",label:"操作",width:"200"},{default:n(()=>[u("template",v,[o(m,{size:"mini",type:"primary",onClick:e[4]||(e[4]=l=>t.$router.push(`/frontEnd/testPages/schoolAmend?userId=${t.scope.row.userId}`))},{default:n(()=>[c("编辑 ")]),_:1}),o(m,{size:"mini",type:"danger",onClick:e[5]||(e[5]=l=>p.schoolDelete(t.scope.row))},{default:n(()=>[c(" 删除 ")]),_:1})])]),_:1})]),_:1},8,["data"]),u("div",D,[o(b,{onSizeChange:p.handleSizeChange,onCurrentChange:p.handleCurrentChange,"page-sizes":[15,30,50,75,100],"page-size":r.pageSize,"current-page":r.currPage,layout:"total,sizes, prev, pager, next,jumper",total:r.tableData.total},null,8,["onSizeChange","onCurrentChange","page-size","current-page","total"])])])}const V=y(x,[["render",E],["__scopeId","data-v-e1630c86"]]);export{V as default};