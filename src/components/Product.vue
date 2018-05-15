<template>
	<div>
		<h1>Product</h1>
		<router-link :to="{name: 'products'}">Вернуться</router-link>
		<div class="alert alert-success">
			{{ product }}
		</div>
		<hr>
	</div>
</template>
<script>
	export default {
		computed: {
			id() {
				return this.$route.params.id;
			},
			product() {
				return this.$store.getters['products/item'](this.id);
			}
		}
	}
</script>