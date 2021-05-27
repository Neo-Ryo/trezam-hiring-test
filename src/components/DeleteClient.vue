<template>
	<div class="modal">
		<h3>Are you sure you want to delete the user:</h3>
		<p>{{ client.givenName }} {{ client.firstName }}</p>
		<p>email: {{ client.email }}</p>
		<button class="modal-delete" @click="deleteUser(id)">DELETE</button>
		<p v-if="isError">something went wrong...</p>
		<p v-if="isDeleted">USER DELETED!</p>
	</div>
</template>

<script>
import Axios from "axios";

export default {
	mounted() {
		Axios.get(`http://localhost:8000/users/${this.id}`).then(
			(res) => (this.client = res.data)
		);
	},
	data() {
		return {
			client: {},
			id: this.$route.params.id,
			isDeleted: false,
			isError: false,
		};
	},
	methods: {
		deleteUser: function (id) {
			Axios.delete(`http://localhost:8000/users/${id}/delete`)
				.then((res) => (this.isDeleted = true))
				.catch((err) => (this.isError = true));
		},
	},
};
</script>

<style scoped lang="scss">
.modal {
	display: flex;
	flex-direction: column;
	margin: auto;
	width: 500px;
	height: 500px;
	border: 1px solid red;
	border-radius: 5px;
	background-color: white;
	animation: appearing 0.5s ease-in;
	color: var(--primary);
}

.modal-delete {
	border: none;
	background-color: var(--primary);
	color: var(--main);
	border-radius: 5px;
	height: 50px;
	width: 70%;
	margin: 10px auto;
	transition: 0.2s;
	&:hover {
		background-color: transparent;
		color: red;
		border: 1px solid red;
		transition: 0.2s;
	}
}

.modal-cancel {
	border: none;
	background-color: red;
	color: aliceblue;
	border-radius: 5px;
	height: 50px;
	width: 70%;
	margin: 10px auto;
	transition: 0.2s;
	&:hover {
		background-color: transparent;
		color: limegreen;
		border: 1px solid limegreen;
		transition: 0.2s;
	}
}
</style>