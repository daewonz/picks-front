<script setup>
//import PortalContainer from '@/components/common/PortalContainer';
import { ref, watch, getCurrentInstance } from 'vue';
import { createRouter } from 'vue-router';
import { useRouter, useRoute } from 'vue-router';
import Alert from './components/common/Alert.vue';
import Header from './views/common/Header.vue';
const router = useRouter();
const route = useRoute();
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';
const sampleClick = () => {
	console.log('이거 나오려나????');
	axios.get('/api/sample').then(res => {
		console.log(res.data);
		//router.push({ name: 'Login' });
	});
};
const noHeader = ref(false);
watch(route, () => {
	route.meta.noHeader ? (noHeader.value = true) : (noHeader.value = false);
	//noHeader.value = route.path === '/';
});
</script>

<template>
	<v-app>
		<v-main>
			<Alert />
			<section v-if="noHeader">
				<router-view />
			</section>
			<section v-else class="main-wrapper">
				<Header class="header" />
				<section class="mainSection">
					<router-view />
				</section>
				<!-- 푸터는 필요할 시 사용 -->
				<!-- <footer>푸터입니다</footer> -->
			</section>
		</v-main>
	</v-app>
</template>

<style lang="scss">
/* 기본 모드 (라이트 모드) */
:root {
	--font-primary: 'Noto Sans KR', sans-serif;
	--color-primary: #42b883;
	--color-secondary: #35495e;
	--color-bg: #ffffff;
	--color-text: #333;
	--color-footer-bg: #222;
	--color-footer-text: #fff;
	//--color-header-bg: #dff9f0; /* 헤더의 밝은 색상 */
	--color-header-bg: #ffffff; /* 헤더의 밝은 색상 */
	--color-header-text: #222; /* 헤더 텍스트 */
}

/* 다크 모드 스타일 */
:root.dark-mode {
	--color-primary: #62d4a3; /* 약간 밝은 톤으로 */
	--color-secondary: #3a3f47;
	--color-bg: #5f5f5f;
	--color-text: #e0e0e0;
	--color-footer-bg: #1e1e1e;
	--color-footer-text: #bbbbbb;
	--color-header-bg: #3f6b59; /* 다크 모드 헤더의 밝은 색상 */
	--color-header-text: #dac1c1; /* 헤더 텍스트 색상 */
}
.main-wrapper {
	display: flex; /* Flexbox 사용 */
	flex-direction: column; /* 수직 정렬 */
	justify-content: center; /* 수직 중앙 정렬 */
	align-items: center; /* 수평 중앙 정렬 */
	min-height: 100vh; /* 화면 전체 높이 */
	background-color: var(--color-bg);
}
.mainSection {
	background-color: var(--color-bg);
	color: var(--color-text);
	display: grid;
	height: 100vh;
	max-height: 100vh;
	justify-content: center; /* 수평 중앙 정렬 */
}
.header {
	background-color: var(--color-header-bg);
	color: var(--color-header-text);
	display: flex; /* Flexbox 사용 */
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: center; /* 수직 중앙 정렬 */
	height: 100px; /* 높이 추가 (필요 시 조정) */
}
@font-face {
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 700;
	src: url(./assets/font/NotoSansKR-Light.woff2) format('woff2'),
		url(./assets/font/NotoSansKR-Light.woff) format('woff'), url(./assets/font/NotoSansKR-Light.otf) format('opentype');
}
@font-face {
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 400;
	src: url(./assets/font/NotoSansKR-Regular.woff2) format('woff2'),
		url(./assets/font/NotoSansKR-Regular.woff) format('woff'),
		url(./assets/font/NotoSansKR-Regular.otf) format('opentype');
}
@font-face {
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	src: url(./assets/font/NotoSansKR-Medium.woff2) format('woff2'),
		url(./assets/font/NotoSansKR-Medium.woff) format('woff'),
		url(./assets/font/NotoSansKR-Medium.otf) format('opentype');
}
@font-face {
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 700;
	src: url(./assets/font/NotoSansKR-Bold.woff2) format('woff2'), url(./assets/font/NotoSansKR-Bold.woff) format('woff'),
		url(./assets/font/NotoSansKR-Bold.otf) format('opentype');
}
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
