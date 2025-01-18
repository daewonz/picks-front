<script setup>
import { ModalsContainer, useModal } from 'vue-final-modal';
import ModalTemplate from '@/components/modal/ModalTemplate.vue';

const { open, close } = useModal({
	component: ModalTemplate,
	attrs: {
		title: 'Hello World!',
		onConfirm() {
			close();
		},
	},
	slots: {
		default: '<p>The content of the modal</p>',
	},
});
</script>

<template>
	<VButton @click="open"> Open Modal </VButton>

	<ModalsContainer />
</template>
