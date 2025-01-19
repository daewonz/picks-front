const common = [
	{
		path: '/',
		name: 'main',
		component: () => import('@/views/Main.vue'),
	},
	// {
	// 	path: '/main/:oops',
	// 	name: 'main',
	// 	component: () => import('@/views/Main.vue'),
	// },
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/Login.vue'),
		meta: { noHeader: true },
	},
	// {
	// 	path: '/',
	// 	name: 'login',
	// 	component: () => import('@/views/Login.vue'),
	// 	meta: { noHeader: true },
	// },
];

export default common;
