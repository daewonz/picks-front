<script setup>
import { ref, watch, getCurrentInstance } from 'vue';
//(길이 조절, 뭘 쓸건지, 색깔 조절, 비활성화 등등)
const props = defineProps(['text', 'type', 'size', 'icon', 'disabled', 'marginLeft', 'outlined']);
const emit = defineEmits('click');
const click = () => {
	emit('click');
};

const isOutLine = ref('outlined');
const loading = ref(false);

//외곽선 넣을지 유뮤. 외곽선이 필요하지 않다면 버튼에 :outlined="false" 넣으면 작동.
watch(
	() => props,
	() => {
		if (props.outlined === false) {
			isOutLine.value = 'text';
		}
	},
	{ immediate: true },
);
</script>
<template>
	<section class="btn-wrap">
		<v-btn class="btn" :variant="isOutLine" :disabled="props.disabled" :loading="loading" @click.stop="click">
			<span v-if="props.icon != '' && props.icon != undefined">
				<v-icon :icon="props.icon" />
			</span>
			{{ props.text }}
		</v-btn>
	</section>
</template>
<style lang="scss">
html.dark-mode .btn {
	background-color: var(--color-bg);
}
.btn-wrap {
	pointer-events: none; /* 기본적으로 클릭 이벤트 차단 */
}

.btn-wrap .btn {
	pointer-events: auto; /* 버튼 내부에서는 클릭 가능 */
}
</style>
