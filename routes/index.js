import { getList } from '../controllers';

module.exports = function (app) {
	/**
	 * demo 获取列表
	 * @param  {[Number]} pg [每页数量]
	 * @param  {[Number]} pn [页数]         [description]
	 * @return {[type]}                        [description]
	 */
	app.get('/articleList/:pg/:pn', async (req, res) => {

		try {
			const { pg=1, pn=1 } = req.params;
			let body = await getList({pg, pn});
			res.send(body);
		}catch(err) {
			res.send({
				errcode: 1,
				msg: err.message
			});
		}
		
	});
}