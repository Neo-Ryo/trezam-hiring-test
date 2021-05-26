<template>
	<div class="dashboard">
		<h1>Dashboard page!</h1>
		<button class="add">
			<router-link to="/add">add client</router-link>
		</button>
		<Array :clients="clients" />
	</div>
</template>

<script>
import Array from "../components/Array.vue";

export default {
	components: { Array },
	data() {
		return {
			clients: [
				{
					id: 1,
					givenName: "SCH",
					firstName: "Marc",
					birthday: "06/06/1986",
					phone: "06.06.06.06.06",
					email: "marco@email.com",
				},
				{
					id: 2,
					givenName: "SCH",
					firstName: "Frank",
					birthday: "06/10/1987",
					phone: "06.06.06.06.06",
					email: "frankus@email.com",
				},
			],
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
	height: 50px;
	width: 70px;
	margin: 20px auto;
}
</style>