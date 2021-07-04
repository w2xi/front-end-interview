<template>
	<div>
		<div>Ancestor</div>
		<button @click="handleClick">modify name</button>
		<demo-parent></demo-parent>
	</div>
</template>

<script>
import DemoParent from './Parent'

export default {
	components: {
		DemoParent
	},
	// provide: {
	// 	name: 'w2xi'
	// },
	provide(){
		return {
			ancestorVm: this
		}
	},
	methods: {
		handleClick(){
			this.name = 'wexi'
			console.log(this.name)
		},
	}
}
</script>