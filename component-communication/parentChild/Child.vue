<template>
	<div>Child</div>
</template>

<script>
export default {
	props: ['parentName'],

	mounted(){
		// console.log('parent component to child component => ', this.parentName)

		// this.$emit('triggerEventInParent', 'child component to parent component => child')
	},
	methods: {
		doSomething(){
			console.log('do something in child component')
		},
	},
}
</script>