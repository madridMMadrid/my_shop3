<template>
	<div>
		<h1>Product list</h1>
		<div class="row">
			<div class="col col-sm-4" v-for="product in products">
				<router-link tag="h3"
							 :to="'/product/' + product.id_product"
				>
					<a>{{ product.title }}</a>
				</router-link>
				<div class="">{{ product.price }}</div>
				<button class="btn btn-primary"
						@click="addToCart(product.id_product)"
						v-if="inCart.indexOf(product.id_product) === -1"
				>
					Add to card
				</button>
				<button class="btn btn-warning"
						@click="removeCart(product.id_product)"
						v-else
				>
					Remove to card
				</button>

			</div>
		</div>
	</div>
</template>
<script>

	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {

		created() {
			console.log(1);
			this.$store.dispatch('products/loadItems');
			
		},
		computed: {
			...mapGetters('products',{
				products: 'items'
			}),
			...mapGetters('cart',{
				inCart: 'products'
			})
		},
		methods: {
			...mapActions('cart',{
				addToCart: 'add',
				removeCart: 'remove'
			})
		}
	}
</script>
<style scoped>
	.row {
		padding-left: 15px;
	}
</style>