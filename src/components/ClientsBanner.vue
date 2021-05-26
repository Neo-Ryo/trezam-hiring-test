<template>
	<div class="client-wrapper">
		<p class="client">{{ firstName }}</p>
		<p class="client">{{ givenName }}</p>
		<p class="client">{{ birthday }}</p>
		<p class="client">{{ phone }}</p>
		<p class="client">{{ email }}</p>
		<!-- <router-link :to="{ name: 'update', params: { id: id } }" class="route"> -->
		<button class="modify" @click="goModify(id)">modify</button>
		<!-- </router-link> -->
		<button class="delete">X</button>
	</div>
</template>

<script>
import router from "../router/";
export default {
	props: {
		id: Number,
		firstName: String,
		givenName: String,
		birthday: String,
		phone: String,
		email: String,
	},
	methods: {
		goModify: function (id) {
			router.push(`/update/${id}`);
		},
	},
};
</script>

<style scoped lang="scss">
:root {
	--main: #3fb27f;
	--primary: #32475b;
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