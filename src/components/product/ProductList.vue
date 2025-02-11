<script setup>
import { ref, watch, getCurrentInstance } from 'vue';
import Button from '@/components/ui/Button.vue';
//리스트 값을 변수로 받아서 for문으로 가져오기
const item = ref({ rating: '3.5' });
const goDetail = () => {
	alert('개발중@@');
};
</script>
<template>
	<section class="productList">
		<v-card class="mx-auto" width="280" :ripple="false">
			<div class="clickableArea" @click="goDetail">
				<v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
					<v-card-title>사진 타이틀</v-card-title>
				</v-img>

				<v-card-subtitle class="pt-5"> 상품명 </v-card-subtitle>

				<v-card-text>
					<div>가격이랑</div>

					<div>할인시 얼마나 할인인지</div>
					<v-rating
						size="21"
						color="warning"
						active-color="warning"
						v-model="item.rating"
						half-increments
						:disabled="true"
					></v-rating>
				</v-card-text>
			</div>
			<v-card-actions @click.stop class="cardAction">
				<div style="color: green; font-size: x-small">이 부분은 넣을지 모르겠네</div>
				<Button :outlined="false" icon="mdi-cart" @click="goConfirm" type="green" size="small" />
				<Button :outlined="false" icon="mdi-cards-heart-outline" @click="goConfirm" type="green" size="small" />
				<!-- <v-btn color="orange" text="찜하기"></v-btn>
					<v-btn color="orange" text="상세보기"></v-btn> -->
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
	gap: 20px;
	background-color: var(--color-bg); /* 다크 모드와 연동 */
	color: var(--color-text);
}
.cardAction {
	justify-content: flex-end;
	background-color: var(--color-bg); /* 다크 모드와 연동 */
	color: var(--color-text); /* 텍스트 색상도 CSS 변수 적용 */
}
.clickableArea {
	cursor: pointer;
	background-color: var(--color-bg); /* 다크 모드와 연동 */
	color: var(--color-text); /* 텍스트 색상도 CSS 변수 적용 */
}
</style>
