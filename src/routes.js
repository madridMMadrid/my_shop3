import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductList from './components/ProducktList';
import Cart from './components/Cart';
import Product from './components/Product';
import Checkout from './components/Checkout';


import About from './components/MidleContent/TopMenu/About'

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
        path: '/About',
        component: About
    },
    {
        path: '*',
        component: E404
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});