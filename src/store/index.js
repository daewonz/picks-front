import { createStore } from 'vuex';
import common from '@/store/modules/common.js';
import sample from '@/store/modules/sample.js';
import createPersistedState from 'vuex-persistedstate';
export default createStore({
	modules: { sample, common },
	plugins: [
		createPersistedState({
			storage: window.sessionStorage,
			paths: ['common.alert'], //session storage save : state path
			//세션 스토리지에 저장할 값들은 여기서 관리함.
			//세션 스토리지는 일시 저장, 로컬 스토리지는 영구 저장(비회원 장바구니는 세션 스토리지, 회원 장바구니는 로컬 스토리지.)
		}),
	],
});
