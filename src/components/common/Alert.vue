<script setup>
import { ref, watch, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
//store에서 전역으로 setAlert 설정하기
//setAlert 값이 true일 경우 dialoge 보여줌, 클릭할 경우 닫기
//알럿창 크기 고정하기
const alert = computed(() => store.getters['common/getAlert']);
const message = ref('');
const state = ref(false);
watch(
	() => alert.value,
	() => {
		state.value = alert.value.state;
		message.value = alert.value.message;
	},
	{ deep: true },
);
</script>
<template>
	<div>
		<v-dialog v-model="state" width="auto">
			<v-card width="400" prepend-icon="mdi-checkbox-marked" :text="message" title="알림">
				<template v-slot:actions>
					<v-btn class="ms-auto" text="확인" @click="state = false"></v-btn>
				</template>
			</v-card>
		</v-dialog>
	</div>
</template>
<style lang="scss"></style>
