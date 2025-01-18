import { createInstance } from './index';
function test(payload) {
	const result = createInstance('/testDW', payload, {}, 'json').get();
	console.log('11', result);

	return console.log('테스트입니다.');
}
export { test };
