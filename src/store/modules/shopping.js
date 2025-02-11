const shopping = {
	namespaced: true,
	state: {
		cart: { cartList: [], cartCount: 0 },
	},
	getters: {
		getCart: state => {
			return state.cart;
		},
	},
	mutations: {
		setCart(state, payload) {
			state.cart = payload;
		},
	},
	actions: {},
};

export default shopping;
