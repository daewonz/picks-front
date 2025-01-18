<script setup>
import ModalTemplate from '@/components/modal/ModalTemplate.vue';
</script>
<template>
	<ModalTemplate :isOpenModal="isOpenModal">
		<template #head><h2>헤더</h2></template>
		<template #body><h2>바디</h2></template>
	</ModalTemplate>
</template>
<style></style>
