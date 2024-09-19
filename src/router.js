import { createRouter, createWebHistory } from 'vue-router';
import FormComponent from './components/FormComponent.vue';
import DeshBoard  from './components/DeshBoard.vue';
const routes = [
    {
        path: '/',
        name: 'form',
        component: FormComponent
    },
    {
        path: '/dashboard',
        name: 'DeshBord',
        component: DeshBoard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router