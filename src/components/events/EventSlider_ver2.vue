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
const currentSlide = ref(0); // 중앙 슬라이드의 인덱스
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
	<div class="slider-flex">
		<!-- left -->
		<v-carousel class="eventSlider sideSlider" height="400" :show-arrows="false" :cycle="hover" :hide-delimiters="true">
			<v-carousel-item v-for="(slide, i) in slides" :key="i">
				<v-sheet v-if="0 <= currentSlide - 1" :color="colors[currentSlide - 1]" height="100%">
					<div class="d-flex fill-height justify-center align-center">
						<div class="text-h2">{{ slide }} Slide ~~ {{ currentSlide - 1 }}</div>
					</div>
				</v-sheet>
				<v-sheet v-else :color="'#9ea3a0'" height="100%">
					<div class="d-flex fill-height justify-center align-center">
						<div class="text-h2">NoSlide {{ currentSlide - 1 }}</div>
					</div>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>
		<!-- center -->
		<v-carousel
			class="eventSlider mainSlider"
			height="400"
			show-arrows="hover"
			:cycle="hover"
			hide-delimiter-background
			@mouseover="onMouseOver"
			@mouseleave="onMouseLeave"
			v-model="currentSlide"
		>
			<v-carousel-item v-for="(slide, i) in slides" :key="i">
				<v-sheet :color="colors[i]" height="100%" @click="goDetail(i)">
					<div class="d-flex fill-height justify-center align-center">
						<div class="text-h2">{{ slide }} Slide ~~ {{ currentSlide }}</div>
					</div>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>
		<!-- right -->
		<v-carousel class="eventSlider sideSlider" height="400" :show-arrows="false" :cycle="hover" :hide-delimiters="true">
			<v-carousel-item v-for="(slide, i) in slides" :key="i">
				<v-sheet v-if="currentSlide + 1 < slides.length" :color="colors[currentSlide + 1]" height="100%">
					<div class="d-flex fill-height justify-center align-center">
						<div class="text-h2">{{ slide }} Slide ~~ {{ currentSlide + 1 }}</div>
					</div>
				</v-sheet>
				<v-sheet v-else :color="'#9ea3a0'" height="100%">
					<div class="d-flex fill-height justify-center align-center">
						<div class="text-h2">NoSlide {{ currentSlide + 1 }}</div>
					</div>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>
	</div>
</template>
<style lang="scss">
.slider-flex {
	display: flex;
}
.mainSlider {
	flex: 2;
}
.eventSlider {
	width: 32.5vw;
}
.sideSlider {
	flex: 1;
	filter: blur(2px);
	transition: filter 0.3s ease, transform 0.3s ease; /* 애니메이션 추가 */
}
</style>
