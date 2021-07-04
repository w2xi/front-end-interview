<template>
	<div>Child2</div>
</template>

<script>
import EventBus from './EventBus'

export default {
	mounted(){
		// listen event
		EventBus.$on('triggerEvent', (res) => console.log(res, 'in Child2 Component'))
	}
}	
</script>