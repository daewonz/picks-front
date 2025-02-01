<script setup>
import { ref, watch, getCurrentInstance } from 'vue';
const model = ref(null);
const goToEvent = () => {
	//특정 이벤트나 상품으로 이동하도록 작업해야함
	alert('작업중@@');
};
</script>
<template>
	<section class="slider">
		<v-sheet class="mx-auto" elevation="0">
			<v-slide-group v-model="model" class="pa-4, slidegroup" show-arrows>
				<v-slide-group-item v-for="n in 15" :key="n">
					<v-card :class="['ma-4']" color="grey-lighten-1" height="300" width="500" @click="goToEvent"> </v-card>
				</v-slide-group-item>
			</v-slide-group>
		</v-sheet>
	</section>
</template>
<style lang="scss">
.slider {
	width: 90vw;
	background-color: gray;
}
.slidegroup {
	// background-color: green;
}
</style>
