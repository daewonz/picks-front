<script setup>
//리스트 값을 변수로 받아서 for문으로 가져오기
</script>
<template>
	<section class="productList">
		<v-card class="mx-auto" max-width="400">
			<v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
				<v-card-title>Top 10 Australian beaches</v-card-title>
			</v-img>

			<v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

			<v-card-text>
				<div>Whitehaven Beach</div>

				<div>Whitsunday Island, Whitsunday Islands</div>
			</v-card-text>

			<v-card-actions>
				<v-btn color="orange" text="Share"></v-btn>

				<v-btn color="orange" text="Explore"></v-btn>
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
