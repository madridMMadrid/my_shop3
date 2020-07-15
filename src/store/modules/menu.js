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
            url: '/',
            text: 'Главная'
        }, {
            url: '/about',
            text: 'О компании'
        }, {
            url: '/reviews',
            text: 'Отзывы'
        }, {
            url: '/jobs',
            text: 'Вакансии'
        }, {
            url: '/contact',
            text: 'Контакты'
        }, {
            url: '/ourworks',
            text: 'Наши работы'
        }],
        service: [{
                url: '/design',
                text: 'Design'
            },
            {
                url: '/delivery',
                text: 'Ddelivery'
            },
            {
                url: '/FurnitureAssembly',
                text: 'Furniture Assembly'
            }
        ],
    },
    getters: {
        items(state) {
            return state.items;
        },
        topMenu(state) {
            return state.topMenu;
        },
        service(state) {
            return state.service;
        }
    },
    mutations: {

    },
    actions: {

    }

}