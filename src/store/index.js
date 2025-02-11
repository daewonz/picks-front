import { createStore } from 'vuex';
import common from '@/store/modules/common.js';
import sample from '@/store/modules/sample.js';
import shopping from '@/store/modules/shopping.js';
import createPersistedState from 'vuex-persistedstate';
export default createStore({
	modules: { sample, common, shopping },
	plugins: [
		createPersistedState({
			storage: window.sessionStorage,
			paths: ['shopping.cart'], //session storage save : state path
			//세션 스토리지에 저장할 값들은 여기서 관리함.
			//세션 스토리지는 일시 저장, 로컬 스토리지는 영구 저장(비회원 장바구니는 세션 스토리지, 회원 장바구니는 DB로 관리.)
		}),
	],
});
