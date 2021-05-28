<template>
	<form @submit.prevent="submitForm" class="form-container">
		<label for="givenName">Given name: </label>
		<input
			class="input"
			id="givenName"
			type="text"
			pattern="[a-zA-Z]+"
			@invalid="
				invalidField('given name should have only alphabets are alowed')
			"
			v-model="givenName"
			placeholder="your given name..."
			required
		/>
		<label for="firstName">First name: </label>
		<input
			class="input"
			id="firstName"
			type="text"
			pattern="[a-zA-Z]+"
			@invalid="
				invalidField('first name should have only alphabets are alowed')
			"
			v-model="firstName"
			placeholder="your first name..."
			required
		/>
		<label for="birthday">birthday: </label>
		<input
			class="input"
			id="birthday"
			type="date"
			min="1880-01-01"
			max="2020-12-31"
			v-model="birthday"
			required
		/>
		<label for="phone">Phone number: </label>
		<input
			class="input"
			id="pone"
			type="tel"
			v-model="phone"
			pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
			required
		/>
		<small>Format: 06-XX-XX-XX-XX</small>
		<label for="email">email: </label>
		<input
			class="input"
			id="email"
			type="email"
			v-model="email"
			placeholder="myemail@email.com"
			required
		/>
		<div v-if="isCreated">
			<p class="created">User succesfully created!</p>
		</div>
		<div v-if="isError">
			<p class="error">
				{{ error }}
			</p>
		</div>
		<input type="submit" class="submit" value="VALIDER" />
	</form>
</template>

<script>
import Axios from "axios";
export default {
	data() {
		return {
			givenName: "",
			firstName: "",
			birthday: "",
			phone: "",
			email: "",
			isError: false,
			isCreated: false,
			error: "",
		};
	},
	methods: {
		submitForm: function () {
			Axios.post("http://localhost:8000/users", {
				givenName: this.givenName,
				firstName: this.firstName,
				birthday: this.birthday,
				phone: this.phone,
				email: this.email,
			})
				.then((res) => ((this.isCreated = true), (this.isError = false)))
				.catch(
					(err) => (this.isError = true),
					(this.error = "email already exist")
				);
		},
		invalidField: function (str) {
			this.isError = true;
			this.error = str;
		},
	},
};
</script>

<style scoped lang="scss">
.form-container {
	background-color: var(--primary);
	display: flex;
	flex-direction: column;
	width: 700px;
	margin: auto;
	border-radius: 5px;
}
label {
	color: aliceblue;
	text-align: left;
	width: 50%;
	margin: 10px auto;
}

input {
	width: 50%;
	margin: 5px auto;
}

small {
	color: aliceblue;
}

.submit {
	border: 1px solid var(--main);
	background-color: transparent;
	color: var(--main);
	border-radius: 5px;
	margin: 20px auto;
	width: 100px;
	height: 40px;
	transition: 0.2s;
	&:hover {
		background-color: var(--main);
		color: var(--primary);
		transition: 0.2s;
	}
}

.created {
	color: var(--main);
}

.error {
	color: red;
}
</style>