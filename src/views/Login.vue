<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { test, login } from '@/api/login';
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import ModalSample from '@/components/modal/sample1023/ModalSample.vue';
import axios from 'axios';
import { useStore } from 'vuex';
const store = useStore();
const getAlert = computed(() => store.getters['common/getAlert']);

const { aa } = history.state;
const router = useRouter();
const route = useRoute();
const isOpenModal = ref(false);
const id = ref('');
const pw = ref('');
onMounted(() => {
	console.log('route.name: ', route.name);
	console.log('route.path: ', route.path);
	console.log('이건가 ', aa);
	const testResult = test();
});
const goTest = () => {
	console.log('테스트버튼입니다.');
	axios.get('/api/test').then(res => {
		res.data;
	});
};
const goToMain = () => {
	console.log('router', router);
	router.push({ name: 'main', params: { oops: 'oooooops' } });
};
const getModal = () => {
	isOpenModal.value = !isOpenModal.value;
};
const params = ref({
	id: '',
	pw: '',
});
const loading = ref(false);

const load = () => {
	loading.value = true;
	setTimeout(() => {
		loading.value = false;
	}, 2000);
};
const clickLogin = () => {
	console.log('id', id.value, 'pw', pw.value);
	if (id.value.length < 5) {
		return store.commit('common/setAlert', { state: true, message: '아이디를 5자 이상 입력해주세요.', isAlert: true });
	}
	if (pw.value.length < 1) {
		return store.commit('common/setAlert', {
			state: true,
			message: '비밀번호를 5자 이상 입력해주세요.',
			isAlert: true,
		});
	}
	params.value.id = id.value;
	params.value.pw = pw.value;
	goLogin(params);
};

const goLogin = async params => {
	console.log('param', login(params));

	const result = await login(params);
	console.log('결과값', result);
};
const visible = ref(false);
</script>
<template>
	<section>
		<div>로그인 화면입니다.{{ aa }}</div>
		<button @click="goTest">테스트 호출해보기123123</button>
		<ModalSample :isOpenModal="isOpenModal" />
		<button @click="getModal">모달호출</button>
		<div>
			<button @click="goToMain">메인으로</button>
		</div>
		<input placeholder="id" v-model="id" type="text" />
		<input placeholder="pw" v-model="pw" type="password" />
		<v-btn @click="clickLogin">로그인</v-btn>
		<div class="card flex justify-center">
			<Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load" />
		</div>
		<Drawer v-model:visible="visible" header="Drawer">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</p>
		</Drawer>
		<Button icon="pi pi-arrow-right" @click="visible = true">zzz</Button>
		<div class="card flex justify-center flex-wrap gap-4">
			<Button label="Primary" variant="text" />
			<Button label="Secondary" severity="secondary" variant="text" />
			<Button label="Success" severity="success" variant="text" />
			<Button label="Info" severity="info" variant="text" />
			<Button label="Warn" severity="warn" variant="text" />
			<Button label="Help" severity="help" variant="text" />
			<Button label="Danger" severity="danger" variant="text" />
			<Button label="Contrast" severity="contrast" variant="text" />
		</div>
	</section>
</template>
<style lang="scss"></style>
