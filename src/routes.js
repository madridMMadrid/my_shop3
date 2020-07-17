import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductList from './components/ProducktList';
import Cart from './components/Cart';
import Product from './components/MidleContent/Product/Product';
import Checkout from './components/Checkout';


import About from './components/MidleContent/TopMenu/About'
import Reviews from './components/MidleContent/TopMenu/Reviews'
import Jobs from './components/MidleContent/TopMenu/Jobs'
import Contact from './components/MidleContent/TopMenu/Contact'
import OurWorks from './components/MidleContent/TopMenu/OurWorks'


import Delivery from './components/MidleContent/Services/Delivery'
import Design from './components/MidleContent/Services/Design'
import FurnitureAssembly from './components/MidleContent/Services/FurnitureAssembly'

import E404 from './components/E404';

import { store } from './store';


const routes = [{
        path: '',
        redirect: { name: 'products' }
    },
    {
        name: 'products',
        path: '/products',
        component: ProductList,
        beforeEnter(from, to, next) {
            // store.dispatch('products/loadItems'); для реального запроса
            next();
        }
    },
    {
        path: '/Product/:id',
        component: Product
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/Checkout',
        component: Checkout
    },
    {
        path: '/',
        component: Product
    },
    {
        path: '/About',
        component: About
    },
    {
        path: '/Reviews',
        component: Reviews
    },
    {
        path: '/Jobs',
        component: Jobs
    },
    {
        path: '/Contact',
        component: Contact
    },
    {
        path: '/OurWorks',
        component: OurWorks
    },
    {
        path: '/Delivery',
        component: Delivery
    },
    {
        path: '/Design',
        component: Design
    },
    {
        path: '/FurnitureAssembly',
        component: FurnitureAssembly
    },
    {
        path: '*',
        component: E404
    }
];

export const router = new VueRouter({
    routes,
    store,
    mode: 'history'
});