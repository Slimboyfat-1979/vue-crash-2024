import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Jobs from "@/views/Jobs.vue";
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
        }
    ]
})

export default router;
