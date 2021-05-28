<template>
	<form @submit.prevent="submitForm" class="form-container">
		<label for="givenName">Current given name: {{ client.givenName }} </label>
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
		<label for="firstName">Current first name: {{ client.firstName }}</label>
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
		<label for="birthday"
			>current birthday: {{ moment(client.birthday) }}
		</label>
		<input
			class="input"
			id="birthday"
			type="date"
			min="1880-01-01"
			max="2020-12-31"
			v-model="birthday"
			required
		/>
		<label for="phone">Current phone number: {{ client.phone }}</label>
		<input
			class="input"
			id="pone"
			type="tel"
			v-model="phone"
			pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
			required
		/>
		<small>Format: 06-XX-XX-XX-XX</small>
		<label for="email">Current email: {{ client.email }} </label>
		<input
			class="input"
			id="email"
			type="email"
			v-model="email"
			placeholder="myemail@email.com"
			required
		/>
		<div v-if="isCreated">
			<p class="created">User succesfully modified!</p>
		</div>
		<div v-if="isError">
			<p class="error">
				{{ error }}
			</p>
		</div>
		<input type="submit" class="submit" value="MODIFIER" />
	</form>
</template>

<script>
import Axios from "axios";
import moment from "moment";
export default {
	data() {
		return {
			userId: this.$route.params.id,
			client: {},
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
	mounted() {
		Axios.get(`http://localhost:8000/users/${this.userId}`).then(
			(res) => (
				(this.client = res.data),
				//this will prevent user to type in again infos that wont change
				(this.givenName = res.data.givenName),
				(this.firstName = res.data.firstName),
				(this.phone = res.data.phone),
				(this.email = res.data.email)
			)
		);
	},
	methods: {
		submitForm: function () {
			Axios.put(`http://localhost:8000/users/${this.userId}`, {
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
			this.errors = str;
		},
		moment: function (date) {
			return moment(date).format("DD/MM/YYYY");
		},
	},
};
</script>

<style scoped lang="scss">
.form-container {
	background-color: var(--primary);
	display: flex;
	flex-direction: column;
	width: 80vw;
	min-height: 500px;
	margin: auto;
	border-radius: 5px;
}
label {
	color: aliceblue;
	text-align: left;
	width: 50%;
	margin: auto;
}

input {
	width: 50%;
	margin: auto;
}

small {
	color: aliceblue;
}

.submit {
	border: 1px solid var(--main);
	background-color: transparent;
	color: var(--main);
	border-radius: 5px;
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