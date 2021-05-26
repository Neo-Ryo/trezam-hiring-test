<template>
	<div class="navbar">
		<ul class="ul-wrapper">
			<router-link to="/" class="route">Home</router-link>
			<router-link to="/dashboard" class="route">Dashboard</router-link>
		</ul>
	</div>
	<router-view />
</template>

<script>
</script>


<style lang="scss">
:root {
	--main: #3fb27f;
	--primary: #32475b;
}

body {
	box-sizing: border-box;
	margin: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.navbar {
	background-color: var(--main);
	font-size: 22px;
}

.ul-wrapper {
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 0;
	height: 40px;
}

.route {
	list-style: none;
	margin: auto;
}

a {
	color: aliceblue;
	text-decoration: none;
}
</style>
