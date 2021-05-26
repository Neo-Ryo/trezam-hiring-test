<template>
	<div class="wrapper-array">
		<ClientBanner
			v-for="client in clients"
			:key="client.id"
			:id="client.id"
			:firstName="client.firstName"
			:givenName="client.givenName"
			:birthday="client.birthday"
			:phone="client.phone"
			:email="client.email"
		/>
	</div>
</template>

<script>
import ClientBanner from "./ClientsBanner.vue";

export default {
	props: {
		clients: Object,
	},
	components: {
		ClientBanner,
	},
};
</script>

<style scoped>
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
</style>