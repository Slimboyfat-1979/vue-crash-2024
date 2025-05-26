import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Jobs from "@/views/Jobs.vue";
import NotFound from '@/views/NotFound.vue';
import JobView from "@/views/JobView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'name',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'Jobs',
            component: Jobs
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView
        },
        {
            path: '/:catchall(.*)',
            name: 'Not Found',
            component: NotFound
        }
    ]
})

export default router;
