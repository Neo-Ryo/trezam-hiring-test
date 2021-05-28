<template>
	<div class="wrapper-array" v-if="clients.length > 0">
		<div class="client-wrapper" v-for="client in clients" :key="client._id">
			<p class="client">{{ client.firstName }}</p>
			<p class="client">{{ client.givenName }}</p>
			<p class="client">{{ moment(client.birthday) }}</p>
			<p class="client">{{ client.phone }}</p>
			<p class="client">{{ client.email }}</p>
			<!-- <router-link :to="{ name: 'update', params: { id: id } }" class="route"> -->
			<button class="modify" @click="goModify(client._id)">modify</button>
			<!-- </router-link> -->
			<!-- <button class="delete" @click="goDelete(client._id)">X</button> -->
			<button class="delete" @click="deleteClient(client._id)">X</button>
		</div>
	</div>
	<div v-else class="wrapper-array">
		<p class="no-client">You have no clients yet...</p>
	</div>
</template>

<script>
import Axios from "axios";
import router from "../router/";
import moment from "moment";
export default {
	// props: {
	// 	clients: Object,
	// },
	//test here
	mounted() {
		Axios.get("http://localhost:8000/users").then(
			(res) => (this.clients = res.data)
		);
	},
	data() {
		return {
			clients: [],
		};
	},
	//test here
	methods: {
		goModify: function (id) {
			router.push(`/update/${id}`);
		},
		goDelete: function (id) {
			router.push(`/delete/${id}`);
		},
		deleteClient: async function (id) {
			try {
				const res = await Axios.delete(
					`http://localhost:8000/users/${id}/delete`
				);
				alert(res.data.message);
				const clientIndex = this.clients
					.map(function (i) {
						return i._id;
					})
					.indexOf(id);
				this.clients.splice(clientIndex, 1);
			} catch (error) {
				alert("Can't delete for now...");
				console.log(error);
			}
		},
		moment: function (date) {
			return moment(date).format("DD/MM/YYYY");
		},
	},
};
</script>

<style scoped lang="scss">
:root {
	--main: #3fb27f;
	--primary: #32475b;
}

.wrapper-array {
	border: 1px solid var(--primary);
	border-radius: 5px;
	width: 90vw;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	margin: auto;
}
.client-wrapper {
	display: flex;
	text-align: center;
	color: aliceblue;
	justify-content: space-between;
	background-color: var(--main);
	border-radius: 5px;
	margin: 10px;
	height: 60px;
}
.client {
	font-weight: 700;
	margin: auto;
}

.modify {
	border: none;
	background-color: var(--primary);
	color: var(--main);
	border-radius: 5px;
	height: 50px;
	width: 70px;
	margin: auto 10px;
}

.no-client {
	color: var(--primary);
}

.delete {
	border: none;
	background-color: red;
	color: aliceblue;
	border-radius: 5px;
	height: 50px;
	width: 50px;
	margin: auto 10px;
}
</style>