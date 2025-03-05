<script setup>
import { ref, watch, getCurrentInstance, onMounted } from 'vue';
import { getProductList } from '@/api/main';
import { useQuery } from 'vue-query';
import ProductList from '@/components/product/ProductList.vue';
import Button from '@/components/ui/Button.vue';
const queryResult = useQuery(['list'], getProductList, {
	refetchOnWindowFocus: false,
});
const { data, isLoading, isError, refetch, status } = queryResult;
const text = ref('center');
const icon = ref('justify');
const toggle_none = ref(null);
const toggle_one = ref(0);
const toggle_exclusive = ref(2);
const toggle_multiple = ref([0, 1, 2]);
// Drawer를 열고 닫는 상태 관리
const drawer = ref(false);
const selected = ref(null);
const items = ref([
	{ label: '카테고리1', value: 'category1' },
	{ label: '카테고리2', value: 'category2' },
	{ label: '카테고리3', value: 'category3' },
	{ label: '카테고리4', value: 'category4' },
	{ label: '카테고리5', value: 'category5' },
	{ label: '카테고리6', value: 'category6' },
]);
</script>

<template>
	<!-- <section class="category_wrap">
		<div class="blank_flex"></div>
		<div class="v-navigation-drawer-wrap">
			<v-navigation-drawer v-model="drawer" absolute transition="">
				<v-list-item title="카테고리별 상품" subtitle="이제해야함"></v-list-item>
				<v-divider></v-divider>
				<v-list-item link title="List Item 1"></v-list-item>
				<v-list-item link title="List Item 2"></v-list-item>
				<v-list-item link title="List Item 3"></v-list-item>
			</v-navigation-drawer>
			<div class="categoryProductList">
				<section class="productListSection">
					<div v-if="isLoading"><v-progress-circular color="green" indeterminate></v-progress-circular></div>
					<div v-else>
						<div v-if="data?.length > 0" class="productList">
							<div class="productCard" v-for="items in data" v-bind:key="items.PRODUCT_SEQNO">
								<v-card class="mx-auto" width="140" :ripple="false">
									<div class="clickableArea" @click="goDetail">
										<v-img
											class="align-end text-white"
											height="100"
											src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
											cover
										>
											<v-card-title>사진 타이틀</v-card-title>
										</v-img>

										<v-card-subtitle class="pt-1"> {{ items.PRODUCT_NAME }} </v-card-subtitle>

										<v-card-text>
											<div>{{ items.PRODUCT_PRICE }}</div>
										</v-card-text>
									</div>
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
			</div>
		</div>
		<div class="blank_flex"></div>
	</section> -->
	<!-- <section>
		<div class="category-btn-wrap">
			버튼 들어갈 곳(카테고리)
			<v-btn-toggle mandatory class="category-btn-wrap-inner">
				<div class="category-btn-wrap-inner">
					<Button text="카테고리1" class="category-btn" />
					<Button text="카테고리2" class="category-btn" />
					<Button text="카테고리3" class="category-btn" />
					<Button text="카테고리4" class="category-btn" />
					<Button text="카테고리5" class="category-btn" />
					<Button text="카테고리6" class="category-btn" />
				</div>
			</v-btn-toggle>
		</div>
		<div>상품 리스트 들어갈 곳</div>
	</section> -->
	<div class="category-product-list-wrap">
		<div class="btn-toggle-wrap">
			<v-btn-toggle v-model="toggle_one" mandatory class="btn-toggle">
				<Button text="카테고리1" />
				<Button text="카테고리2" />
				<Button text="카테고리3" />
				<Button text="카테고리4" />
				<Button text="카테고리5" />
				<Button text="카테고리6" />
				<Button text="카테고리7" />
				<Button text="카테고리8" />
			</v-btn-toggle>
		</div>
		<div>리스트 들어갈 곳</div>
	</div>
</template>

<style lang="scss">
.v-navigation-drawer-wrap {
	display: flex;
	width: 1200px; /* 부모 컨테이너의 너비를 설정 */
	height: 600px; /* 부모 컨테이너의 높이를 설정 */
	border: 1px solid #ccc; /* 외곽선을 추가하여 영역을 확인 */
	position: relative; /* Drawer가 부모 기준으로 동작하도록 설정 */
	/* overflow: hidden; Drawer가 부모 영역을 넘어가지 않도록 설정 */
	background-color: #f5f5f5; /* 배경색 추가 (선택 사항) */
}
.categoryProductList {
	height: 800px;
	width: 900px;
	margin-left: 300px;
}
.v-navigation-drawer {
	transform: none !important; /* 애니메이션 중첩 방지 */
	left: 0 !important; /* Drawer가 항상 왼쪽에 고정되도록 설정 */
}
.category-btn-wrap {
	height: 200px;
}
.category-btn-wrap-inner {
	height: auto !important;
}
.category-btn {
	height: 70px !important;
}
.productListWrap {
	display: flex;
	justify-content: center;
}
.productListWrap-inner {
	width: 1200px;
	display: flex;
}
.productListWrap-category {
	border: 1px solid #000000;
	width: auto;
}
.productListWrap-list {
	border: 1px solid #000000;
	width: 80%;
}
.flex.flex-col {
	display: flex;
	flex-direction: column;
	width: fit-content;
}

/* 버튼 간격 조정 */
.flex.flex-col .v-btn {
	margin-bottom: 8px;
	width: 100%;
}
.btn-toggle {
	display: flex;
	flex-direction: column;
	height: auto !important;
}
.category-product-list-wrap {
	display: flex;
}
</style>
