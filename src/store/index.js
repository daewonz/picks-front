import { createStore } from 'vuex';
import common from '@/store/modules/common.js';
import sample from '@/store/modules/sample.js';

export default createStore({
	modules: { sample, common },
});
