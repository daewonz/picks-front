<script setup>
import { ref, watch, getCurrentInstance, onMounted } from 'vue';
import { getProductList } from '@/api/main';
import Button from '@/components/ui/Button.vue';
import { useQuery } from 'vue-query';
//리스트 값을 변수로 받아서 for문으로 가져오기
const item = ref({ rating: '3.5' });
const fetchEnabled = ref(false);
const queryResult = useQuery(['list'], getProductList, {
	//enabled: fetchEnabled, // 초기 로딩 비활성화
	//refetchOnMount: true,
	refetchOnWindowFocus: false,
});
const { data, isLoading, isError, refetch, status } = queryResult;
const goDetail = () => {
	alert('개발중@@');
};

//data값을 사용해서 화면을 보여주고 있어 productList 임시 사용안함
const productList = ref([]);
setTimeout(() => {
	productList.value = data.value;
}, 300);
//vue-query에서 상태관리를 해주어서 onMounted 임시 비활성화
onMounted(async () => {
	//productList.value = await getProductList();
	//fetchEnabled.value = true;
	//refetch();
	//console.log('dd?', refetch);
});
</script>
<template>
	<section class="productListSection">
		<div v-if="isLoading"><v-progress-circular color="green" indeterminate></v-progress-circular></div>
		<div v-else>
			<div v-if="data?.length > 0" class="productList">
				<div class="productCard" v-for="items in productList" v-bind:key="items.PRODUCT_SEQNO">
					<v-card class="mx-auto" width="280" :ripple="false">
						<div class="clickableArea" @click="goDetail">
							<v-img
								class="align-end text-white"
								height="200"
								src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
								cover
							>
								<v-card-title>사진 타이틀</v-card-title>
							</v-img>

							<v-card-subtitle class="pt-5"> {{ items.PRODUCT_NAME }} </v-card-subtitle>

							<v-card-text>
								<div>{{ items.PRODUCT_PRICE }}</div>

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
							<Button :outlined="false" icon="mdi-cart" type="green" size="small" />
							<Button :outlined="false" icon="mdi-cards-heart-outline" type="green" size="small" />
							<!-- <v-btn color="orange" text="찜하기"></v-btn>
					<v-btn color="orange" text="상세보기"></v-btn> -->
						</v-card-actions>
					</v-card>
				</div>
			</div>
			<div v-else>
				<div>리스트가 없습니다.</div>
				<div>리스트가 없습니다.</div>
				<div>리스트가 없습니다.</div>
				<div>리스트가 없습니다.</div>
				<div>리스트가 없습니다.</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss">
.productListSection {
	display: flex;
	justify-content: center;
}
.productList {
	padding: 10px;
	display: flex;
	flex-direction: row;
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
