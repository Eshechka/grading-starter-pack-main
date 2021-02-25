<template>
  <div class="switcher">
        <div class="switcher__element switcher__element_one">
			<Form
				:id="'signup'"
			>
					<input type="text" placeholder="User" class="input" />
					<input type="email" placeholder="Email" class="input" />
					<input type="password" placeholder="Password" class="input" />
			</Form>
        </div>        
		
		<div class="switcher__element switcher__element_two">
			<Form
				:id="'signin'"
			>
				<input type="email" placeholder="Email" class="input" />
				<input type="password" placeholder="Password" class="input" />
				<a href="#" class="form__link">Forgot your password?</a>
			</Form>


        </div>


        <!-- <div class="switcher__overlay-wrapper">
            <div class="switcher__overlay">
                <div class="switcher__overlay-panel switcher__overlay-panel_left">
                    <button class="btn" id="signIn">Sign In</button>
                </div>
                <div class="switcher__overlay-panel switcher__overlay-panel_right">
                    <button class="btn" id="signUp">Sign Up</button>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import Form from './Form.vue'
export default {
	name: 'Switcher',
	components: { Form },
	props: {
		
	}
}
</script>

<style lang="postcss" scoped>


.switcher {
  background-color: e9e9e9;
  border-radius: 10px;
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
  height: 420px;
  max-width: 758px;
  overflow: hidden;
  position: relative;
  width: 100%;

	&_element {
		height: 100%;
		position: absolute;
		top: 0;
		transition: all 0.6s ease-in-out;

		&_one {
			left: 0;
			width: 50%;
			z-index: 2;
		}
		&_two {
			left: 0;
			opacity: 0;
			width: 50%;
			z-index: 1;
		}
	}

	&__overlay-wrapper {
		position: absolute;
		top: 0;
		left: 50%;
		height: 100%;
		width: 50%;
		overflow: hidden;
		transition: transform 0.6s ease-in-out;
		z-index: 100;
	}

	&__overlay {
		background-color: #008997;
		background: url("../assets/bg.jpg");
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100%;
		width: 200%;
		position: relative;
		left: -100%;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	&__overlay-panel {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		position: absolute;
		text-align: center;
		top: 0;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
		width: 50%;

		&_right {
			right: 0;
			transform: translateX(0);
		}		
	}

	&_right-active {
		& .switcher__form_signin {
			transform: translateX(100%);
		}
		& .switcher__form_signin {
			transform: translateX(100%);
		}
		& .switcher__form_signup {
			animation: show 0.6s;
			opacity: 1;
			transform: translateX(100%);
			z-index: 5;
		}
		& .switcher__overlay-wrapper {
			transform: translateX(-100%);
		}
		& .switcher__overlay {
			transform: translateX(50%);
		}
	}
}


.btn {
	background-color: #0367a6;
	background-image: linear-gradient(90deg, #0367a6 0%, #0367a6lightblue) 74%);
	border-radius: 20px;
	border: 1px solid #0367a6;
	color: e9e9e9;
	cursor: pointer;
	font-size: 0.8rem;
	font-weight: bold;
	letter-spacing: 0.1rem;
	padding: 0.9rem 4rem;
	text-transform: uppercase;
	transition: transform 80ms ease-in;

	&:active {
		transform: scale(0.95);
	}
	&:focus {
		outline: none;
	}
}

.input {
	background-color: #fff;
	border: none;
	padding: 0.9rem 0.9rem;
	margin: 0.5rem 0;
	width: 100%;
}

@keyframes show {
	0%,
	49.99% {
		opacity: 0;
		z-index: 1;
	}

	50%,
	100% {
		opacity: 1;
		z-index: 5;
	}
}
</style>
