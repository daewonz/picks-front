<script setup>
import { ref } from 'vue';
import SelectWithSearch from '@/components/ui/SelectWithSearch.vue';
import Button from '@/components/ui/Button.vue';
const isDarkMode = ref(false);
const cartCount = 0; // 예시로 5개 들어갔다고 가정(카트)
const toggleDarkMode = () => {
	isDarkMode.value = !isDarkMode.value;
	const root = document.documentElement;
	if (isDarkMode.value) {
		root.classList.add('dark-mode');
	} else {
		root.classList.remove('dark-mode');
	}
};
</script>
<template>
	<section class="main">
		<div class="flex-item">
			<img :src="isDarkMode ? '/logo-dark.png' : '/logo.png'" :alt="isDarkMode ? 'Dark Logo' : 'Light Logo'" />
		</div>
		<div class="flex-item5"><SelectWithSearch /></div>
		<div class="flex-item"><v-icon icon="mdi mdi-account" /></div>
		<div class="flex-item">
			<div class="icon-container">
				<v-icon icon="mdi-cart" />
				<div class="badge">{{ cartCount }}</div>
				<!-- 여기서 cartCount는 동적 숫자 -->
			</div>
		</div>
		<div class="flex-item">
			<i
				:class="isDarkMode ? 'fa-solid fa-moon' : 'fa-regular fa-sun'"
				:style="{ color: isDarkMode ? '#ffffff' : '#fb980e', cursor: 'pointer' }"
				@click="toggleDarkMode"
			></i>
		</div>
	</section>
</template>
<style lang="scss">
.main {
	width: 1200px;
	display: flex;
	min-height: 50px;
	align-items: center;
	justify-content: space-between;
	text-align: center;
}
html.dark-mode .main {
	//background: white;
}
.flex-item {
	flex: 1;
}
.flex-item2 {
	flex: 2;
}
.flex-item5 {
	flex: 5;
}
.flex-item:nth-child(4) {
	// "마이페이지"만 스타일 적용
	color: black;
	font-weight: bold;
	text-align: center;
}
/* dark-mode 클래스가 html에 있을 때 스타일 변경 */
html.dark-mode .flex-item:nth-child(4) {
	color: white; /* 다크 모드일 때 흰색으로 변경 */
}
.icon-container {
	position: relative;
	display: inline-block;
}
.v-icon {
	position: relative;
	z-index: 1; /* 아이콘을 아래로 배치 */
}
.badge {
	position: absolute;
	top: -5px; /* 아이콘 위쪽으로 살짝 올리기 */
	right: -10px; /* 아이콘 오른쪽으로 살짝 올리기 */
	background-color: red;
	color: white;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	font-weight: bold;
	z-index: 2; /* 배지가 아이콘 위로 오게 함 */
}
html.dark-mode .badge {
	position: absolute;
	top: -5px; /* 아이콘 위쪽으로 살짝 올리기 */
	right: -10px; /* 아이콘 오른쪽으로 살짝 올리기 */
	background-color: rgb(8, 8, 8);
	color: white;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	font-weight: bold;
	z-index: 2; /* 배지가 아이콘 위로 오게 함 */
}
</style>
