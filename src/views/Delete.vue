<template>
	<div>
		<h1>Delete user?</h1>
		<DeleteClient />
	</div>
</template>

<script>
import DeleteClient from "../components/DeleteClient.vue";
export default {
	components: { DeleteClient },
};
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: columns;
}
</style>