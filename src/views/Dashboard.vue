<template>
	<div class="dashboard">
		<h1>Dashboard page!</h1>
		<router-link class="add" to="/add">add new client</router-link>
		<ClientBanner :clients="clients" />
	</div>
</template>

<script>
import Axios from "axios";
import ClientBanner from "../components/ClientsBanner.vue";
export default {
	components: { ClientBanner },
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
};
</script>

<style scoped lang="scss">
.dashboard {
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
}
.add {
	border: none;
	background-color: var(--primary);
	color: aliceblue;
	border-radius: 5px;
	margin: 20px auto;
	padding: 20px;
	transition: 0.2s;
	&:hover {
		border: 1px solid var(--primary);
		background-color: transparent;
		color: var(--primary);
		transition: 0.2s;
	}
}
</style>