import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        items: getProducts(),
        notebooks: [{
            id: 1,
            qty: 1,
            productName: 'notebooks',
            name: 'Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB',
            price: 2259,
            image: 'https://picsum.photos/id/7/200/300/',
            stars: 5,
            totalReviews: 230,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            id: 2,
            qty: 1,
            productName: 'notebooks',
            name: 'Notebook Dell Inspiron i15-3567-A30P Intel Core 7ª i5 4GB',
            price: 2284,
            image: 'https://picsum.photos/id/8/200/300/',
            stars: 3.4,
            totalReviews: 20,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            id: 3,
            qty: 1,
            productName: 'notebooks',
            name: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
            price: 1490,
            image: 'https://picsum.photos/id/9/200/300/',
            stars: 1,
            totalReviews: 1,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        }
        ],

        smartphones: [{
            id: 1,
            qty: 1,
            productName: 'smartphones',
            name: 'Smartphone Xiaomi Mi A1 dual Android one 7.1',
            price: 100,
            image: 'https://picsum.photos/id/1/200/300/',
            stars: 0,
            totalReviews: 0,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            selected: null,
            options: [
                { value: null, text: 'Please select an option' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
            ]
        },
        {
            id: 2,
            qty: 1,
            productName: 'smartphones',
            name: 'Smartphone Moto G 5S Dual Chip Android 7.0',
            price: 500,
            image: 'https://picsum.photos/id/2/200/300/',
            stars: 1.5,
            totalReviews: 11,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            id: 3,
            qty: 1,
            productName: 'smartphones',
            name: 'iPhone 8 Dourado 64GB Tela 4.7" IOS 11',
            price: 300,
            image: 'https://picsum.photos/id/3/200/300/',
            stars: 1,
            totalReviews: 2,
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        }
        ],

        cartProducts: [],
        summ: 0,
        currentProduct: {},
        showModal: false,
        showPopupCart: false,

        beerClick: 0,
        ecoClick: 0,
        paperClick: 0,
    },
    getters: {
        items(state) {
            return state.items;
        },
        itemsMap(state) {
            let itemsMap = {};

            for (let i = 0; i < state.items.length; i++) {
                let product = state.items[i];
                itemsMap[product.id_product] = product;
            }

            return itemsMap;
        },
        item: (state, getters) => (id) => {
            return getters.itemsMap[id];
        },
        getNotebooks: state => state.notebooks,
        getSmartphones: state => state.smartphones,
        getAllProducts: state => state.notebooks.concat(state.smartphones),
        getProductsInCart: state => state.cartProducts,
        summ: state => state.summ,
        getCurrentProduct: state => state.currentProduct,
        getShowModal: state => state.showModal,
        getPopupCart: state => state.showPopupCart,
    },
    mutations: {
        clearItems(state) {
            state.items = [];
        },
        // loadItems(state, data) {
        // 	state.items = data;
        // },
        ADD_PRODUCT: (state, payload) => {
            state.cartProducts.push(payload.key2);
            state.summ = payload.key1
        },
        REMOVE_PRODUCT: (state, index) => {
            state.cartProducts.splice(index, 1);
        },
        CURRENT_PRODUCT: (state, product) => {
            state.currentProduct = product;
        },
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
        },
        SHOW_POPUP_CART: (state) => {
            state.showPopupCart = !state.showPopupCart;
        },
        PLUS_QTY: (state, payload) => {
            state.cartProducts.forEach((element, i) => {
                if (element.productName == payload.productName && element.id == payload.id) {
                    state.cartProducts[i].qty += 1
                }
            });
        },
        MINUS_QTY: (state, payload) => {
            state.cartProducts.forEach((element, i) => {
                if (element.productName == payload.productName && element.id == payload.id) {
                    state.cartProducts[i].qty -= 1
                }
            });
        }
    },
    actions: {

        // loadItems(store) {
        // 	store.commit('clearItems');

        // 	Vue.http.get('products.php')
        // 			  .then(response => response.json())
        // 			  .then(data => {
        // 			  	store.commit('loadItems', data);
        // 			  });
        // },
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
        },
        removeProduct: (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
        },
        currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
        },
        showOrHiddenModal: (context) => {
            context.commit('SHOW_MODAL');
        },
        showOrHiddenPopupCart: (context) => {
            context.commit('SHOW_POPUP_CART');
        },

        plusQty: (context, product) => {
            context.commit('PLUS_QTY', product);
        },
        minusQty: (context, product) => {
            context.commit('MINUS_QTY', product);
        }
    }

};

function getProducts() {
    return [{
        id_product: 10,
        title: 'Iphone 5',
        price: 20000
    },
    {
        id_product: 20,
        title: 'Iphone 6',
        price: 25000
    },
    {
        id_product: 30,
        title: 'Iphone 7',
        price: 30000
    }
    ]
}