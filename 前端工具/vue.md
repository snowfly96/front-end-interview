### :pen: 面试问题
**vue概述**

> what
> 	是一个渐进式（自底向上）构建用户界面的js框架
> where
> 	小到表单处理，大到复杂的单页面应用操作
> how
> 	可以通过丰富的指令拓展模版，通过各种插件来增强功能

**基础用法**

> **双花括号{{}}**
> 	将表达式执行的结果 输出当调用元素的innerHTML
> 	还可以将数据绑定到视图
> **指令-循环 v-for**
> 	遍历数组
> **指令-选择 v-if v-else-f v-else**
> 	根据表达式执行结果的真假，来决定是否要将当前这个元素挂载到DOM上
> **指令-属性绑定**
> 将表现式执行的结果绑定到当前元素的属性上
> **指令-双向数据绑定**
> 	方向1: 将数据绑定到视图中
> 	方向2: 将视图中（表单元素）用户操作的结果绑定到数据
> 	基本语法：
> 		<表单元素 v-model="变量"></表单元素>

**组件**

> **组件：**组件就是可以被反复使用的模板，带有特定功能的视图
> **组件树：**各个组件构成的一个树形数据结构
> **组件的创建**
> 	全局组件
> 	局部组件
> 	-作为普通的标签去使用

**自定义指令**

>  Vue.directive('change',{
>   bind:function(el,bindings){
>   //首次调用
>   },
>   update:function(el,bindings){
>   //只要是有数据变化，都会调用
>   },
>   unbind:function(){
>   //解绑
>   }
>  })
>  <any v-change="count"></any>

**过滤器**、

> 过滤器用于对数据进行筛选、过滤、格式化等相关的处理

**复合组合**

> ```
> Vue.component('my-header',{
>     template:`<div></div>`
> });
> <my-header></my-header>
> 复合组件：并不是新的概念，就是一个组件，只不过这个组件中 可以调用其他的组件
> 
> <my-list>
>     <my-item></my-item>
>  </my-list>
> ```

**生命周期**

> beforeCreate/created 数据初始化阶段
> beforeMount/Mount 挂载前
> beforeUpdate/updated 数据发生变化
> beforeDestroy/Destroyed 卸载/销毁

**props通信**

> **父与子通信**
> 	1. 发送 <son myName='snow'></son>
> 	2. 接受
> 		Vue.component('son',{
> 			props: ['myName'],
> 			template:`<p>{{myName}}</p>`
> 		})
> 		**子与父通信**
> 	1. 绑定
> 	methods:{handleEvent:function(msg){}}
> 	<son v-on:click='handleEvent'></son>
> 	2. 自组件内部触发:
> 		this.$emit('customEvent',100)

**ref引用**

> 帮助在父组件中得到子组件中的数据和方法
>
> ```
> 1.指定ref属性
>     <son ref="mySon"></son>
> 2.根据ref得到子组件实例
>     this.$refs.mySon
>   
> 得到父组件的实例  
> this.$parent得到父组件的实例
> ```

**兄弟组件通信**

> var bus=new Vue();
>
> **接受方**
> bus.$on('eventName',function(msg){})
> **发送方**
> bus.$emit('eventName',123)

**模版**

> **1、直接在template属性中指定模板内容**
>   1.全局组件
>   Vue.component
>   2.局部组件
>   { components:{
>     'my-footer'：{template:``}
>    }
>   **}
> 2、.vue结尾的文件**
>   <template></template>
>   <script></script>
>   <style></style>
> **3、单独指定一个模板内容**
>   <script
>   id='myContent'
>   type='text/x-template'>
>   </script>
>   Vue.component('',{
>    template:'#myContent'
>   })

**路由**

> 路由模版的本质，就是建立起url和页面之间的映射关系
> SPA：single page application
> 单页面应用，只有一个完整的页面；在加载页面的时候不会加载整个页面，只是更新某个指定容器中的内容
>
> **工作原理**
>
> 1. 解析地址栏：完整的页面地址、路由地址
> 2. 根据路由地址词典中加载真正需要加载的页面
> 3. 发起ajax请求
> 4. 向指定的容器中 插入加载来的页面
>
> **路由模块使用**
>
> 1. 引入vue.js vue-route.js
> 2. 指定一个容器 <ruoter-view></router-view>
> 3. 创建业务所需要的组件 var MyLogin=Vue.component()
> 4. 配置路由器词典
>    1. const myRoutes = [
>        {path:'',component:MyLogin},
>        {path:'/login',component:MyLogin}
>        ];
>    2. new Vue({
>         router:myRouter
>        })
> 5. 测试

**axios**

> get请求： axios.get(url,{params:{}})
> post请求：axios.post(url,{})
> *是*一个基于promise 的HTTP 库，简单的讲就是可以发送get、post请求
