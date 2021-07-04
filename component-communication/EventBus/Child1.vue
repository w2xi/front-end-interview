<template>
	<div>
		<div>Child1</div>
		<button @click="handleClick">Click</button>
	</div>
</template>

<script>
import EventBus from './EventBus'

export default {
	methods: {
		handleClick(){
			EventBus.$emit('triggerEvent', 'do something')
		},
	},
}
</script>