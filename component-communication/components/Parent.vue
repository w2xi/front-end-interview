<template>
	<div>
		<div>Parent</div>
		<demo-child 
			ref="child"
			parentName="parent"
			@triggerEventInParent="triggerEventByChild"
		>
			</demo-child>
	</div>
</template>

<script>
import DemoChild from './Child'

export default {
	components: {
		DemoChild,
	},
	mounted(){
		// get child component reference, directly manipulating vue instance of child component
		// this.$children[0].doSomething()
		this.$refs.child.doSomething()
	},
	methods: {
		triggerEventByChild(value){
			console.log(value)
		},
	},
}
</script>