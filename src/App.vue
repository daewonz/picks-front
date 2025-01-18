<script setup>
//import PortalContainer from '@/components/common/PortalContainer';
import { ref, watch, getCurrentInstance } from 'vue';
import { createRouter } from 'vue-router';
import { useRouter, useRoute } from 'vue-router';

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
</script>

<template>
	<v-app>
		<v-main>
			<header>헤더입니다</header>
			<section class="mainSection">
				<section class="mainContainer">
					<router-view />
				</section>
			</section>

			<!-- <HelloWorld msg="Vite + Vue" /> -->
			<footer>푸터입니다</footer>
		</v-main>
	</v-app>
</template>

<style lang="scss">
.mainSection {
	height: 100vh;
	max-height: 100vh;
	.mainHeader {
		min-width: v-bind('container');
	}
	.mainContainer {
		height: 100vh;
		max-height: 100vh;
		display: flex;
		min-width: v-bind('container');
		.mainContents {
			width: 100%;
			min-width: 1380px;
			margin-left: v-bind('margin');
			margin-right: v-bind('margin');
			padding: 80px 30px 20px 240px;
			transition: 0.3s padding ease-in-out;
			height: 100vh;
			max-height: 100vh;
			&.mainActive {
				min-width: 1220px;
				padding: 80px 30px 20px 80px;
			}
		}
	}
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
