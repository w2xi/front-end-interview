<template>
	<div>
		<div>Parent - {{ ancestorVm.name }}</div>
		<demo-child></demo-child>
	</div>
</template>

<script>
import DemoChild from './Child'

export default {
	components: {
		DemoChild
	},
	inject: ['ancestorVm'],
	// mounted(){
	// 	console.log(ancestorVm.name, 'in Parent Component')
	// }
}
</script>