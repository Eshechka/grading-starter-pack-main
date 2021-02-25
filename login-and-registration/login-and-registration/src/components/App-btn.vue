<template>
	<button class="btn"
		type="type ? type : `text`"
		@click="$emit('btn-click')"
	>
		{{text}}
	</button>
</template>

<script>

export default {
	name: 'App-btn',
	components: {  },
	props: {
		text: String,
		type: String,
	}
}
</script>

<style lang="postcss">
/* @import "../mixins.pcss"; */

.btn {
	background-color: #0367a6;
	background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%);
	border-radius: 20px;
	border: 1px solid #0367a6;
	color: #e9e9e9;
	cursor: pointer;
	font-size: 0.8rem;
	font-weight: bold;
	letter-spacing: 0.1rem;
	padding: 0.9rem 3rem;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;

	@media screen and (max-width: 768px) {
		padding: 0.9rem 1rem;
		min-width: 150px;
		max-width: 90%;
	}

	&:active {
		transform: scale(0.95);
	}
	&:focus {
		outline: none;
	}
}

</style>
