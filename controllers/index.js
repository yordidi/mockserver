const Mock = require('mockjs');

/**
 * demo
 * @param  {[Number]} pg [每页数量]
 * @param  {[Number]} pn [页数]
 * @return {[type]}         [description]
 */
export const getList =  options => new Promise((resolve, reject) => {
	const { pg, pn } = options;
	const data = Mock.mock({
		ret: 1,
		result: {
			'list': () => {
				let arr = [];
				for(let i = 0; i < pg; i++) {
					const obj = Mock.mock({
						'_id|': i + (pn - 1) * pg + 1,
						title: '@ctitle',
						'images|1-4':[{
							cdnUri:'@image(750x500)'
						}],
						body: '@cparagraph',
						'createdAt': '@date',
						'author': {
							'_id': '@natural(1000, 9999)',
							'name': '@cname'
						},
						'address': '@county(true)'
					});
					arr.push(obj);
				}
				return arr;
			}
		}
	});
	resolve(data);
});
