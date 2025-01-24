import { createInstance } from './index';
function test(payload) {
	const result = createInstance('/testDW', payload, {}, 'json').get();
	console.log('11', result);

	return console.log('테스트입니다.');
}
function login(payload) {
	const result = createInstance('/login', payload, {}, 'json').post();
	return result.then(res => res.data).catch(err => console.log(err));
}
export { test, login };
