/**
 * Vue组件间通信总结：
 *
 */


 /***** 1. 父子组件传值 *****/
 
 // 在父组件中，直接在子组件上定义自定义属性，子组件内部通过 props 属性接受传过来的值
 // 在子组件中，通过调用 this.$emit('triggerEvent', 'value') 触发事件并传值
 // 父组件中，通过在子组件上 <child @triggerEvent="doSomething" /> 监听事件

 /***** 2. 通过 this.$refs.child *****/

 

