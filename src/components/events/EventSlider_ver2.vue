<script setup>
import { ref, watch, getCurrentInstance } from 'vue';
//리스트 값을 변수로 받아서 for문으로 가져오기
const item = ref({ rating: '3.5' });
const goDetail = i => {
	/*
	이동시키는 방법 
	1. url 값을 그대로 db에 넣어서 바로 href로 보내버리기기
	2. 매칭되어 있는 상품을 찾아서 상세보기 SQL문에서 where절로 가져오기
	*/
	console.log('iii', i);

	alert('개발중@@');
};
const slides = ref(['First', 'Second', 'Third', 'Fourth', 'Fifth']);
const colors = ref(['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4']);
//마우스 올릴 시 (hover) 슬라이드가 자동으로 넘어가는 것을 방지
const hover = ref(true);
const onMouseOver = () => {
	hover.value = false;
};
const onMouseLeave = () => {
	hover.value = true;
};
</script>

<template>
	<v-carousel
		height="400"
		show-arrows="hover"
		:cycle="hover"
		hide-delimiter-background
		@mouseover="onMouseOver"
		@mouseleave="onMouseLeave"
	>
		<v-carousel-item v-for="(slide, i) in slides" :key="i">
			<v-sheet :color="colors[i]" height="100%" @click="goDetail(i)">
				<div class="d-flex fill-height justify-center align-center">
					<div class="text-h2">{{ slide }} Slide</div>
				</div>
			</v-sheet>
		</v-carousel-item>
	</v-carousel>
</template>
<style lang="scss">
.productList {
	padding: 10px;
	display: flex;
	width: 1200px;
	flex-wrap: wrap;
	gap: 20px; /* 항목 간 간격 추가 */
}
</style>
