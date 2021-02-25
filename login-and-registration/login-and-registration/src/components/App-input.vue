<template>

	<input class="input"
		:type="type ? type : 'text'" 
		:placeholder="placehldr" 
		:class="classes"
		:value="value"
		@input="$emit('input', $event.target.value)"
	/>

</template>

<script>
export default {
	name: 'App-input',
	props: {
		type: String,
		placehldr: String,
		classes: String,
		value: String,
	},
	data() {
		return {
			
		}
	},
	
	methods: {
	},
}
</script>

<style lang="postcss" scoped>

.input {
	background-color: #fff;
	border: none;
	padding: 0.7rem 0.9rem;
	margin: 0.4rem 0;
	width: 100%;

	@media screen and (max-width: 480px) {
		width: 90%;
		margin-top: 0.2rem;
	}
}
</style>
