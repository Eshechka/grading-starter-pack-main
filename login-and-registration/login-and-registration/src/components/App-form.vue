<template>
	<form class="form" :id="id"
		@submit.prevent="$emit('form-submit')"
	>
		<h2 class="form__title">{{text}}</h2>
		<slot name="inputs"></slot>
		<div class="form__extra">
			<slot name="extra"></slot>
		</div>
		<div class="form__btn">
			<Appbtn
				:text="text"
				:type="`submit`"
				@btn-click="signInSubmit"
			></Appbtn>
		</div>
	</form>
</template>

<script>
import Appbtn from './App-btn.vue'

export default {
  name: 'Form',
  components: { Appbtn },
  props: {
	id: String,
	text: String,
  },
  methods: {
	signInSubmit() {
		alert('signInSubmit');
	},
  },
}
</script>

<style lang="postcss" scoped>
/* @import "../mixins.pcss"; */

.form {
	background-color: #e9e9e9;
	display: flex;
	/* align-items: center; */
	justify-content: center;
	flex-direction: column;
	padding: 0 2rem;
	height: 100%;
	text-align: center;

	@media screen and (max-width: 768px) {
		padding: 0 1rem;
	}

	&__title {
		font-weight: 300;
		margin: 0;
		margin-bottom: 1.25rem;
	}
	&__btn {
		margin-top: 1.5rem;
	}
}

</style>
