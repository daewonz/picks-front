const common = [
	{
		path: '/',
		name: 'login',
		component: () => import('@/views/Login.vue'),
	},
	{
		path: '/main/:oops',
		name: 'main',
		component: () => import('@/views/Main.vue'),
	},
];

export default common;
