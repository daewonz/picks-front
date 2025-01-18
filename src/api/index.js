import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
//vite 에서는 process.env 대신 import.meta.env.value 사용
let baseURL = import.meta.env.VITE_VUE_APP_API_URI; //process.env.VUE_BASE_URL

// 빌드된 파일의 API를 설치된 도메인에 맞춤
const protocol = window.location.protocol;
const domain = window.location.hostname;
const port = window.location.port;
const fullDomain = port ? protocol + '//' + domain + ':' + port : protocol + '//' + domain;
if (import.meta.env.NODE_ENV === 'production') {
	baseURL = fullDomain;
} else {
	baseURL = 'http://localhost:8080';
}
console.log('??', process.env.NODE_ENV);
console.log('??22', import.meta.env.VITE_VUE_APP_API_URI);
console.log('??33', baseURL);

console.log('123412431', fullDomain);

function createInstance(url, paramData, parmas, contentType, responseType) {
	let resType;
	responseType === undefined ? (resType = 'json') : (resType = responseType);
	const instance = axios.create({
		baseURL: `${baseURL}${url}`,
		params: parmas,
		responseType: resType,
	});
	instance.interceptors.response.use(
		function (response) {
			//에러처리
			if (response.data.code !== 200 && response.data.code !== undefined) {
				//에러 알림 메세지
				if (response.data.code === 401) {
					deleteCookie('member');
					deleteCookie('isLogin');
					console.log('오류오류오류!!');
					//router.push('/Login');
				}
				if (response.data.code === 403) {
					//접근 권한이 없을 경우 로그인 페이지로 이동시키는 로직
					// if (getRouter.value.to.name !== 'DashBoard' && getRouter.value.to.name !== 'Login') {
					// 	router.push({ name: 'Login', params: { isError: true } });
					// }
					alert('접근권한이 없습니다.');
				}
				// store.commit('common/setLoading', { status: false, info: '' });
				// store.commit('common/setApiCount', { resCount: 0, callCount: 0 });
				// store.commit('common/setAlert', { status: true, info: response.data.message });
				// if (document.getElementById('modals-container')) document.getElementById('modals-container').innerHTML = '';
			}
			return response;
		},
		function (error) {
			// store.commit('common/setLoading', { status: false, info: '' });
			// store.commit('common/setAlert', { status: true, info: error.message });
			// //에러시 카운트 초기화
			// store.commit('common/setApiCount', { resCount: 0, callCount: 0 });
			deleteCookie('member');
			deleteCookie('isLogin');
			// deleteCookie('alimtalkProvider');
			// router.push('/Login');
			if (error.response && error.response.data) {
				return Promise.reject(error.response.data);
			}
			return Promise.reject(error.message);
		},
	);

	return instance;
}
export { createInstance };
