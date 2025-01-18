/**
 * 팝업 기본 옵션
 * @param {*} name 팝업명
 * @param {*} width 넓이로 px, % 붙임
 * @param {*} height 높이로 px, % 붙임
 * @param {*} resizable 크기 조절이 가능하지 여부
 * @param {*} clickToClose 클릭해서 창을 닫을 건지 여부
 * @param {*} scrollable true일 경우 스크롤이 동작하지 않고, undefined일 경우 최상단 이동
 */
export const getPopupOpt = function (name, width, height, resizable, scrollable) {
	let isScrollable = true;
	scrollable ? (isScrollable = false) : (isScrollable = true);
	let opt = {
		name: name,
		width: width,
		height: height,
		resizable: resizable,
		clickToClose: false,
		draggable: '.popup-title', // true면 전체 팝업에서 적용되고 지정하면 해당 클래스가 있는 부분만 적용됨,
		scrollable: isScrollable,
		//transition: "pop-out",
	};
	return opt;
};
