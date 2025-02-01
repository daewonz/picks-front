<script setup>
import { ref, watch, getCurrentInstance } from 'vue';
//리스트 값을 변수로 받아서 for문으로 가져오기
const item = ref({ rating: '3.5' });
const goDetail = () => {
	alert('개발중@@');
};
</script>
<template>
	<section class="productList">
		<v-card class="mx-auto" width="280" @click="goDetail" :ripple="false">
			<v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
				<v-card-title>사진 타이틀</v-card-title>
			</v-img>

			<v-card-subtitle class="pt-5"> 상품명 </v-card-subtitle>

			<v-card-text>
				<div>가격이랑</div>

				<div>할인시 얼마나 할인인지</div>
			</v-card-text>

			<v-card-actions>
				<!-- <v-btn color="orange" text="찜하기"></v-btn>

				<v-btn color="orange" text="상세보기"></v-btn> -->
				<v-rating v-model="item.rating" half-increments :disabled="true"></v-rating>
			</v-card-actions>
		</v-card>
	</section>
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
