import { createInstance } from './index';
function getProductList(payload) {
	const result = createInstance('/getProductList', payload, {}, 'json').get();
	return result.then(res => res.data).catch(err => console.log(err));
}

export { getProductList };
