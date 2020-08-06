export default {
    namespaced: true,
    state: {
        items: [
            // {
            //     url: '/HomeItem',
            //     text: 'Домашняя странийца'
            // },
            {
                url: '/smartphones',
                text: 'Мебель для офиса'
            },
            {
                url: '/notebooks',
                text: 'Мебель для кухни'
            }

        ],
        topMenu: [{
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
        }, {
            url: '/support',
            text: 'Клиентская поддержка'
        }],
        service: [{
                url: '/design',
                text: 'Дизайн',
                img: require('@/assets/images/desing-project-icon.png')
            },
            {
                url: '/delivery',
                text: 'Доставка',
                img: require('@/assets/images/delivery-icon.png')
            },
            {
                url: '/FurnitureAssembly',
                text: 'Сборка мебели',
                img: require('@/assets/images/repair-icon.png')
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