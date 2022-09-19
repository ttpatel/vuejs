import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Project from '@/views/Project.vue';
import Team from '@/views/Team.vue';
import Todo from '@/views/Todo.vue';
const routes = [
	{
		path: '/',
		name: 'dashboard',
		component: Dashboard,
	},
	{
		path: '/projects',
		name: 'projects',
		component: Project,

	},
	{
		path: '/team',
		name: 'team',
		component: Team,
	},
	{
		path: '/todo',
		name: 'todo',
		component: Todo,
	},

    // {
    //           path: '/about',
    //           name: 'about',
    //           // route level code-splitting
    //           // this generates a separate chunk (about.[hash].js) for this route
    //           // which is lazy-loaded when the route is visited.
    //           component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    //         }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
