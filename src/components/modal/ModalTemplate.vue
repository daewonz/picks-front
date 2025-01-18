<script setup>
import { ref, watch } from 'vue';
import { VueFinalModal } from 'vue-final-modal';

const props = defineProps(['modelValue', 'modalopen', 'isOpenModal']);

const getInitialValues = () => ({
	teleportTo: 'body',
	modelValue: false,
	displayDirective: 'if',
	hideOverlay: false,
	overlayTransition: 'vfm-fade',
	contentTransition: 'vfm-fade',
	clickToClose: true,
	escToClose: true,
	background: 'non-interactive',
	lockScroll: true,
	reserveScrollBarGap: true,
	swipeToClose: 'none',
});

const options = ref(getInitialValues());
const propsOpen = props.modalopen;
// function reset() {
// 	options.value = getInitialValues();
// }
const modalOpen = () => {
	options.modelValue = !options.modelValue;
};
watch(
	() => options.value,
	() => {
		console.log('options.modelValue', options.value.modelValue);
	},
	{ deep: true },
);
watch(
	() => props,
	() => {
		console.log('props', props);
		options.value.modelValue = true;
	},
	{ deep: true },
);
</script>

<template>
	<div class="mt-4 space-x-4">
		<!-- <button class="ml-auto" @click="options.modelValue = true">Open modal</button>
		<button @click="reset">Reset</button> -->
	</div>

	<VueFinalModal
		v-model="options.modelValue"
		:display-directive="options.displayDirective"
		:hide-overlay="options.hideOverlay"
		:overlay-transition="options.overlayTransition"
		:content-transition="options.contentTransition"
		:click-to-close="options.clickToClose"
		:esc-to-close="options.escToClose"
		:background="options.background"
		:lock-scroll="options.lockScroll"
		:reserve-scroll-bar-gap="options.reserveScrollBarGap"
		:swipe-to-close="options.swipeToClose"
		class="flex justify-center items-center"
		content-class="max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
	>
		<div class="header">
			<slot name="head"></slot>
		</div>
		<div class="body">
			<slot name="body"></slot>
		</div>
		<div class="footer">
			<slot name="footer"></slot>
			<button @click="options.modelValue = false">닫기</button>
		</div>
	</VueFinalModal>

	<ModalsContainer />
</template>

<style lang="scss">
.modalWrap {
	width: 100%;
	.close {
		position: absolute;
		right: 22px;
		top: 12px;
		cursor: pointer;
		& img {
			width: 23px;
		}
	}
	.header {
		padding: 10px 20px;
		border-bottom: 2px solid #3a99ff;
	}
	.body {
		padding: 20px;
	}
	.footer {
		text-align: center;
	}
}
</style>
