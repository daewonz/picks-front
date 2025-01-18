<script setup>
import { onMounted } from 'vue';

//overlayElement 생성
const newDiv = document.createElement('div');
newDiv.setAttribute('id', 'overlay');

// body 요소의 첫 번째 자식 요소로 새로운 div 요소를 삽입.
const body = document.body;
const firstChild = body.firstChild;
body.insertBefore(newDiv, firstChild);

onMounted(() => {
	const overlayElements = document.querySelectorAll('.vue-portal-target');
	// overlayElements를 배열로 변환
	const overlayArray = Array.from(overlayElements);

	// 첫 번째 요소를 제외한 나머지 요소 제거
	overlayArray.slice(1).forEach(element => {
		element.remove();
	});
});
</script>
<template>
	<section>
		<!-- overlay -->
		<MountingPortal mountTo="#overlay"></MountingPortal>
	</section>
</template>
<style lang="scss" module></style>
