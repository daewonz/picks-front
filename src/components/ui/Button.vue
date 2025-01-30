<script setup>
import { ref, watch, getCurrentInstance } from 'vue';
//(길이 조절, 뭘 쓸건지, 색깔 조절, 비활성화 등등)
const props = defineProps(['text', 'type', 'size', 'icon', 'disabled', 'marginLeft']);
const emit = defineEmits('click');
const click = () => {
	emit('click');
};
const loading = ref(false);
</script>
<template>
	<section class="btn-wrap">
		<v-btn class="btn" variant="outlined" :disabled="props.disabled" :loading="loading" @click.stop="click">
			<span v-if="props.icon != '' && props.icon != undefined">
				<v-icon :icon="props.icon" />
			</span>
			{{ props.text }}
		</v-btn>
	</section>
</template>
<style lang="scss">
html.dark-mode .btn {
	background-color: rgb(61, 56, 56);
}
.btn-wrap {
	pointer-events: none; /* 기본적으로 클릭 이벤트 차단 */
}

.btn-wrap .btn {
	pointer-events: auto; /* 버튼 내부에서는 클릭 가능 */
}
</style>
