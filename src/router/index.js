import { createRouter, createWebHistory } from 'vue-router';

import common from './modules/common';
const routes = [
	...common,
	// ...message,
	// ...sendStatus,
	// ...sendTarget,
	// ...Template,
	// ...stats,
	// ...settings,
	// ...mornitoring,
	// ...campaign,
];
console.log('routes:', routes);
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
