/**
 * Vue组件间通信总结：
 *
 */


 /***** 1. 父子组件传值 *****/

 // Description:
 // 在父组件中，直接在子组件上定义自定义属性，子组件内部通过 props 属性接受传过来的值
 // 在子组件中，通过调用 this.$emit('triggerEvent', 'value') 触发事件并传值
 // 父组件中，通过在子组件上 <child @triggerEvent="doSomething" /> 监听事件
 
 // Scope: 父子组件

 // Usage:

 // Parent.vue
 // <demo-child @triggerEvent="doSomething" :val="value" />	

 // Child.vue
 // props: ['val']
 // this.$emit('triggerEvent', 'value')


 /***** 2. 通过 this.$refs.child 拿到子组件Vue实例 *****/

 // Parent.vue
 // <demo-child ref="child" />
 // this.$refs.child ( vue instance of child component ), directly accessing props and calling methods.

 
 /***** 3. EventBus 通过事件总线机制 *****/

 // Description: 创建 Vue 空实例 充当 事件中心/中转站
 
 // Scope: 任何组件间的通信
 
 // Usage: 
 // 新建 EventBus.js 文件: export default new Vue()
 
 // Child1.vue
 // EventBus.$emit('triggerEvent', 'value')

 // Child2.vue
 // EventBus.$on('triggerEvent', (res) => console.log(res))

 // Parnet.vue
 // EventBus.$on('triggerEvent', (res) => console.log(res))



 /***** 4. provide / inject 机制 *****/

 // Description: 
 // 以允许一个祖先组件向其所有后代组件注入一个依赖
 // 不论组件层次有多深，并在上下游关系成立的时间里始终生效

 // Scope: 多层父子组件间通信

 // Usage:
 // 在父组件中通过 provide 来提供变量
 // 在子组件中通过 inject  来注入变量

 // Ancestor.vue
 // provide: {
 //   name: 'w2xi'
 // }

 // Parent.vue
 // inject: ['name']

 // Child.vue
 // inject: ['name']


 /***** $attrs / $listeners *****/
 
 // Usage: more detail see [ ./attrsListeners folder ]




