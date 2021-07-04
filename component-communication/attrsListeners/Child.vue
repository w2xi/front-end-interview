<template>
	<div>
		<div>Child</div>
		<!-- <div>{{ $attrs }}</div> -->
		<!-- <div>{{ $listeners }}</div> -->
		<button @click="updateAddress">change name of ancestor</button>
	</div>
</template>

<script>
export default {
	created(){
		console.log(this.$attrs)
		console.log(this.$listeners)
	},
	methods: {
		updateAddress(){
			this.$listeners.updateAddress('Beijing.China')
		}
	},
}
</script>