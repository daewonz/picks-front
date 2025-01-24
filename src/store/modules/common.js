const common = {
	namespaced: true,
	// 실제로 취급해야하는 각각의 data(==data)
	state: {
		alert: { state: false, message: '', isAlert: false, confirmEvent: '', confirmType: '' },
	},
	// 계산된 상태를 만들어내는 개념(==computed)
	getters: {
		getAlert: state => {
			return state.alert;
		},
	},
	//✅mutations를 통에서만 데이터를 변경할 수 있습니다.
	mutations: {
		setAlert(state, payload) {
			state.alert = payload;
		},
	},
	//actions의 함수들은 비동기로만 동작
	//✅async, await를 붙이지 않아도 비동기로만동작한다.
	actions: {},
};

export default common;
