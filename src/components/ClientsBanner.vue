<template>
	<div class="wrapper-array" v-if="clients">
		<div class="client-wrapper" v-for="client in clients" :key="client._id">
			<p class="client">{{ client.firstName }}</p>
			<p class="client">{{ client.givenName }}</p>
			<p class="client">{{ client.birthday }}</p>
			<p class="client">{{ client.phone }}</p>
			<p class="client">{{ client.email }}</p>
			<!-- <router-link :to="{ name: 'update', params: { id: id } }" class="route"> -->
			<button class="modify" @click="goModify(client._id)">modify</button>
			<!-- </router-link> -->
			<button class="delete" @click="goDelete(client._id)">X</button>
		</div>
	</div>
</template>

<script>
import router from "../router/";
export default {
	props: {
		clients: Object,
	},
	methods: {
		goModify: function (id) {
			router.push(`/update/${id}`);
		},
		goDelete: function (id) {
			router.push(`/delete/${id}`);
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