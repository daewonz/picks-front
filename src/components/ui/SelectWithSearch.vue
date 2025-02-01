<script setup>
import { ref, watch, getCurrentInstance } from 'vue';
import Button from '@/components/ui/Button.vue';

const searchItems = ref([{ title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }, { title: 'Item 4' }]);
const searchValue = ref([]);
const searchParam = ref({ category: 'all', content: '' });
const search = () => {
	console.log(searchParam.value);
};
</script>
<template>
	<section class="wrap">
		<!-- <v-select min-width="10px" v-model="searchValue" :items="searchItems" label="전체" multiple class="select">
			<template v-slot:selection="{ item, index }">
				<v-chip v-if="index < 2">
					<span>{{ item.title }}</span>
				</v-chip>
				<span v-if="index === 2" class="text-grey text-caption align-self-center">
					(+{{ searchValue.length - 2 }} others)
				</span>
			</template>
		</v-select> -->
		<select class="select" v-model="searchParam.category">
			<option value="all">전체</option>
			<option value="apple">apple</option>
			<option value="orange">orange</option>
			<option value="grape">grape</option>
			<option value="melon">melon</option>
		</select>
		<input class="input" type="text" v-model="searchParam.content" @keyup.enter="search" />
		<v-icon icon="mdi mdi-magnify" class="search-btn" @click="search" />
	</section>
</template>
<style lang="scss">
.wrap {
	display: flex;
	align-items: center;
	//border: 1px solid #ccc;
}
.v-input__control {
	//height: 1;
}
.select {
	width: 30%;
	// margin-top: 20px;
	margin-left: 10px;
	margin-right: 10px;
	// --v-select-chips-control-min-height: 70px; /* 사용자 정의 높이 */

	background-color: #ffffff !important; /* 흰색 배경 */
	appearance: none;
	-webkit-appearance: none;
	background: url('/images/chevron-down.svg') no-repeat right center;
	background-size: 16px; /* 아이콘 크기 조정 */
	padding-right: 30px; /* 아이콘 공간 확보 */
	border: 1px solid #ccc;
	border-radius: 10px;
	padding: 5px;
	height: 35px; /* 원하는 높이 설정 */
}
.input {
	height: 35px;
	width: 100%;
	background-color: white;
	border: 1px solid black;
	padding: 10px;
	border-radius: 10px;
}
.search-btn {
	right: 35px;
	position: absolute;
}
</style>
