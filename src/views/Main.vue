<script setup>
import { onMounted, ref, watch, computed, getCurrentInstance } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import ModalTemplate from '@/components/modal/ModalTemplate.vue';
import { getPopupOpt } from '@/utils/modal';
import SampleComponents from '@/components/sample/sampleComponents.vue';
import SampleComponents2 from '@/components/sample/sampleComponents2.vue';
const { proxy } = getCurrentInstance();
const store = useStore();
const router = useRouter();
const route = useRoute();
const getSample = computed(() => store.getters['sample/getSample']);
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
</script>
<template>
	<section>
		123{{ getSample }}
		<input type="text" v-model="getSample" />
		<div>메인 화면입니다.{{ route.params }}</div>
		<button @click="goToLogin">로그인으로 이동하기</button>
		<div>
			<button @click="goToModal">모달열기(작업중)</button>
		</div>
		<ModalTemplate :modalopen="modalopen" />
		<SampleComponents />
		<SampleComponents2 />
		<SampleComponents2 />
		<SampleComponents2 />
		<SampleComponents2 />
		<SampleComponents2 />
		<SampleComponents2 />
		<SampleComponents2 />
	</section>
</template>
<style lang="scss"></style>
