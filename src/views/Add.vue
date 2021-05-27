<template>
	<div>
		<h1>Add user</h1>
		<AddClient />
	</div>
</template>

<script>
import AddClient from "../components/AddClient.vue";
export default {
	components: { AddClient },
};
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: columns;
}
</style>