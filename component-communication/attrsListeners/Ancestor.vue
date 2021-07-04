<template>
	<div>
		<div>Ancestor - {{ ancestor.name }} - {{ ancestor.address }}</div>
		<demo-parent 
			:ancestorInfo="ancestor"
			@updateAddress="updateAddress"
		>
		</demo-parent>
	</div>
</template>

<script>
import DemoParent from './Parent'

export default {
	components: {
		DemoParent,
	},
	data(){
		return {
			ancestor: {
				name: 'w2xi',
				age: 25,
				address: 'ChangSha.China',
			}
		}
	},
	methods: {
		updateAddress(address){
			if ( typeof address !== 'undefined' ){
				this.ancestor.address = address
			}
		},
	}
}
</script>