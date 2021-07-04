<template>
	<div>
		<div>Child - {{ ancestorVm.name }}</div>
	</div>
</template>

<script>
export default {
	// inject: ['name'],
	inject: {
		ancestorVm: {
			default: () => ({})
		}
	},
	// mounted(){
		// console.log(ancestorVm.name, 'in Child Component')
	// }
	methods: {}
}
</script>