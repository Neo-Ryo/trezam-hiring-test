<template>
	<div class="home">
		<h1>Update page!</h1>
		<ModifyClient :idClient="id" />
	</div>
</template>

<script>
// @ is an alias to /src
import ModifyClient from "@/components/ModifyClient.vue";
import router from "@/router";
export default {
	data() {
		return {
			id: router.currentRoute.value.params.id,
		};
	},
	components: {
		ModifyClient,
	},
};
</script>
