<template>
	<form action="" class="form-container">
		<label for="givenName">
			current name: {{ clientData.givenName }}, {{ userId }}
		</label>
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
		<input class="submit" type="submit" />
	</form>
</template>

<script>
export default {
	data() {
		return {
			userId: this.$route.params.id,
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
</style>