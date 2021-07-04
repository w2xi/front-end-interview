<template>
	<div>
		<div>Parent</div>
		<demo-child
			v-bind="$attrs"
			v-on="$listeners"
			@sayHello="sayHello"
			:parentInfo="parent"
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
	props: ['age'],
	data(){
		return {
			parent: {
				name: 'wexi',
				age: 21,
				address: 'Shanghai.China'
			}
		}
	},
	created(){
		console.log(this.$attrs)
		console.log(this.$listeners)
	},
	methods: {
		sayHello(){
			console.log('Hello')
		},
	},
}
</script>