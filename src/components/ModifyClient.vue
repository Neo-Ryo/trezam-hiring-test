<template>
	<form action="" class="form-container">
		<label for="givenName"> current name: {{ clientData.givenName }} </label>
		<input
			class="input"
			type="text"
			name="givenName"
			placeholder="new name...."
		/>
		<label for="givenName"> current surname: {{ clientData.givenName }} </label>
		<input class="input" type="text" />
		<label for="givenName">
			current birthday: {{ clientData.givenName }}
		</label>
		<input class="input" type="text" />
		<label for="givenName"> current phone: {{ clientData.givenName }} </label>
		<input class="input" type="text" />
		<label for="givenName"> current email: {{ clientData.givenName }} </label>
		<input class="input" type="text" />
		<input type="submit" />
	</form>
</template>

<script>
export default {
	props: {
		idClient: String,
	},
	data() {
		return {
			clientData: {
				id: 1,
				givenName: "SCH",
				firstName: "Marc",
				birthday: "06/06/1986",
				phone: "06.06.06.06.06",
				email: "marco@email.com",
			},
		};
	},
	// mounted(){

	// }
};
</script>

<style>
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
</style>