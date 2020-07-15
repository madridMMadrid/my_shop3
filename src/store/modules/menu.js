export default {
    namespaced: true,
    state: {
        items: [{
                url: '/products',
                text: 'Product List'
            },
            {
                url: '/cart',
                text: 'Cart'
            },
            {
                url: '/checkout',
                text: 'Checkout'
            }
        ],
        topMenu: [{
            url: '/about',
            text: 'About'
        }]
    },
    getters: {
        items(state) {
            return state.items;
        },
        topMenu(state) {
            return state.topMenu;
        }
    },
    mutations: {

    },
    actions: {

    }

}