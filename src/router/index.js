import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

import HomeItem from '../components/HomeItem';
import Cart from '../components/Cart';
import Product from '../components/MidleContent/Product/Product';
import Checkout from '../components/Checkout';


import About from '../components/MidleContent/TopMenu/About'
import Reviews from '../components/MidleContent/TopMenu/Reviews'
import Jobs from '../components/MidleContent/TopMenu/Jobs'
import Contact from '../components/MidleContent/TopMenu/Contact'
import OurWorks from '../components/MidleContent/TopMenu/OurWorks'


import Delivery from '../components/MidleContent/Services/Delivery'
import Design from '../components/MidleContent/Services/Design'
import FurnitureAssembly from '../components/MidleContent/Services/FurnitureAssembly'

import ProductItem from '../components/MidleContent/Productitem/ProductItem'

import AllSmartphones from '../components/MidleContent/Productitem/AllSmartphones'
import AllNotebooks from '../components/MidleContent/Productitem/AllNotebooks'
import MyProduct from '../components/MidleContent/Productitem/MyProduct'
import CartCheckout from '../components/MidleContent/Productitem/CartCheckout'

import E404 from '../components/E404';

// import { store } from './store';

const routes = [{
        path: '',
        redirect: { name: 'HomeItem' }
    },
    {
        name: 'HomeItem',
        path: '/HomeItem',
        component: HomeItem,
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
        path: '/ProductItem',
        component: ProductItem
    },
    {
        path: '/smartphones',
        name: 'Smartphones',
        component: AllSmartphones,
    },
    {
        path: '/notebooks',
        name: 'Notebooks',
        component: AllNotebooks,
    },
    {
        path: '/product-details',
        name: 'MyProduct',
        component: MyProduct,
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: CartCheckout,
    },
    {
        path: '*',
        component: E404
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router