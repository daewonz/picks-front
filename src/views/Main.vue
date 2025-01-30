<script setup>
import { onMounted, ref, watch, computed, getCurrentInstance } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import ModalTemplate from '@/components/modal/ModalTemplate.vue';
import { getPopupOpt } from '@/utils/modal';
import SampleComponents from '@/components/sample/sampleComponents.vue';
import SampleComponents2 from '@/components/sample/sampleComponents2.vue';
import Button from '@/components/ui/Button.vue';
import ProductList from '@/components/product/ProductList.vue';
const { proxy } = getCurrentInstance();
const store = useStore();
const router = useRouter();
const route = useRoute();
const getSample = computed(() => store.getters['sample/getSample']);
const getAlert = computed(() => store.getters['common/getAlert']);
const modalopen = ref(false);
watch(
	() => route,
	() => {
		console.log('달라지긴 하네요..');
	},
	{ deep: true },
);
onMounted(() => {
	store.commit('sample/setSample', '안녕하세요');
	setTimeout(() => {
		store.commit('sample/setSample', '바뀌어라222222');
	}, 700);
});
const goToLogin = () => {
	console.log('123123', getSample.value);
	const aa = 'approval';
	router.push({ name: 'login', state: { aa: { aa: 'zzzzz' } } });
};
const goToModal = () => {
	modalopen.value = !modalopen.value;
	console.log('모달오픈', modalopen.value);
};
const goAlert = text => {
	store.commit('common/setAlert', { state: true, message: text, isAlert: true });
};
const goConfirm = () => {
	store.commit('common/setAlert', { state: true, message: '이건 컨펌입니다.', isAlert: false, confirmEvent: 'sample' });
};

watch(
	() => getAlert.value,
	() => {
		console.log('바뀌었습니다', getAlert.value);
		if (getAlert.value.confirmType === 'submit') {
			setTimeout(() => {
				goAlert('저는 이벤트입니다.');
			}, 400);
		}
	},
	{ deep: true },
);
</script>
<template>
	<section>
		<div>TODO리스트</div>
		<div>버튼에 아이콘 넣기</div>
		<div>컴포넌트 상품 리스트, 공지사항, 등등으로 분리</div>
		<div>장바구니 store에서 전역적으로 관리</div>
		<v-btn @click="goAlert('이건 알럿입니다.')">알럿 호출</v-btn>
		<v-btn @click="goConfirm">컨펌 호출</v-btn>
		123{{ getSample }}
		<input type="text" v-model="getSample" />
		<div>메인 화면입니다.{{ route.params }}</div>
		<button @click="goToLogin">로그인으로 이동하기</button>
		<div>
			<button @click="goToModal">모달열기(작업중)</button>
		</div>
		<Button text="ㅎㅇ" type="green" size="small" />
		<Button icon="mdi-cart" @click="goConfirm" type="green" size="small" />
		<ModalTemplate :modalopen="modalopen" />
		<SampleComponents />
		<SampleComponents2 />
		<ProductList />
	</section>
</template>
<style lang="scss"></style>
