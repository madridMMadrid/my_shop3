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
                text: 'Дизайн'
            },
            {
                url: '/delivery',
                text: 'Доставка'
            },
            {
                url: '/FurnitureAssembly',
                text: 'Сборка мебели'
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