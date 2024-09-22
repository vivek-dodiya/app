import { createRouter, createWebHistory } from 'vue-router';
import FormComponent from './components/FormComponent.vue';
import DashBoard  from './components/DeshBoard.vue';
const routes = [
    {
        path: '/',
        name: 'form',
        component: FormComponent
    },
    {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashBoard,
        props : true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router