<template>
	<div>
		<div>Parent</div>
		<div>emmm {{ msg }}</div>
		<demo-child1></demo-child1>
		<demo-child2></demo-child2>
	</div>
</template>

<script>
import DemoChild1 from './Child1'
import DemoChild2 from './Child2'
import EventBus from './EventBus'

export default {
	components: {
		DemoChild1,
		DemoChild2
	},
	data(){
		return {
			msg: ''
		}
	},
	mounted(){
		// listen event
		EventBus.$on('triggerEvent', (res) => {
				console.log(res, 'in Parent Component')
				this.msg = res
			}
		)
	}
}
</script>